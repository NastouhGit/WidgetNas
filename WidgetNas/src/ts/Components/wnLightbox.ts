class wnlightbox {
    element: HTMLElement;
    loop = true;
    close = true;
    modalclose = true;
    autoplay = true;

    private buttons: NodeListOf<Element>;
    private lightbox: HTMLElement;
    private media: HTMLElement;
    private mediain: HTMLElement;
    private content: HTMLElement;
    private buttonprevious: HTMLElement;
    private buttonnext: HTMLElement;
    private closebutton: HTMLElement;
    private SlideList: string[] = [];
    private SlideListElem: HTMLElement[] = [];
    private TouchStart: number = -99999999;
    private timeout: any;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        this.loop = WNparseBoolean(this.element.getAttribute('loop'), true);
        this.close = WNparseBoolean(this.element.getAttribute('close'), true);
        this.modalclose = WNparseBoolean(this.element.getAttribute('modalclose'), true);
        this.autoplay = WNparseBoolean(this.element.getAttribute('autoplay'), true);

        this.lightbox = this.element.querySelector(".lightbox");
        if (this.lightbox == null) {
            this.element.innerHTML += `
            <div class="lightbox">
                <div class="lightbox-slides">
                    <div class="media animate fadeIn">
                    </div>
                    <div class="content animate slideInUp">
                    </div>
                </div>
                <button class="close light"></button>
                <button class="button-previous"></button>
                <button class="button-next"></button>
            </div>
            `;
            this.lightbox = this.element.querySelector(".lightbox");
        }
        this.media = this.lightbox.querySelector(".media");
        this.content = this.lightbox.querySelector(".content");
        this.buttonprevious = this.lightbox.querySelector(".button-previous");
        this.buttonnext = this.lightbox.querySelector(".button-next");
        this.closebutton = this.lightbox.querySelector(".close");

        this.lightbox.addEventListener("touchstart", (e) => { this.TouchStart = e.changedTouches[0].screenX; });
        this.lightbox.addEventListener("touchend", (e) => {
            this.CheckTouch(this.TouchStart - e.changedTouches[0].screenX);
        });


        if (this.closebutton != null) {
            if (!this.close)
                this.closebutton.style.display = 'none';
            else
                this.closebutton.addEventListener("click", () => { this.Close(); });
        }

        if (this.buttonprevious != null) {
            this.buttonprevious.addEventListener("click", (e) => {
                this.ShowLightBox((<HTMLElement>e.target).getAttribute('url-value'));
            });
        }

        if (this.buttonnext != null) {
            this.buttonnext.addEventListener("click", (e) => {
                this.ShowLightBox((<HTMLElement>e.target).getAttribute('url-value'));
            });
        }

        if (this.modalclose)
            this.lightbox.addEventListener("click", () => {
                if (this.TouchStart == -99999999)
                    this.Close();
            }, true);



        this.buttons = this.element.querySelectorAll('[lightbox]');
        this.buttons.forEach((t) => {
            t.addEventListener("click", (e) => {
                this.ShowLightBox(e.target as HTMLElement);
            });
        });
    }
    private ShowLightBox(e: HTMLElement | string) {
        if (e == null)
            return;
        let url = '';
        if (typeof (e) == "string") {
            url = e;
        }

        if (!this.lightbox.classList.contains('show')) {
            let buttons = this.element.querySelectorAll('[lightbox]');
            if (typeof (e) != "string") {
                if (e.hasAttribute('lightbox') && e.getAttribute('lightbox') != '')
                    url = e.getAttribute('lightbox');
                else if (e.nodeName == "A") {
                    url = (<HTMLLinkElement>e).href;
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            this.SlideList = [];
            this.SlideListElem = [];

            buttons.forEach((x) => {
                let url = '';
                let show = true;
                let tx = <HTMLElement>x;
                while (tx != this.element) {
                    if (tx.style.display == 'none') {
                        show = false;
                        break;
                    }
                    tx = tx.parentElement;
                }
                if (show) {
                    if (x.hasAttribute('lightbox') && x.getAttribute('lightbox') != '')
                        url = x.getAttribute('lightbox');
                    else if (x.nodeName == "A")
                        url = (<HTMLLinkElement>x).href;
                    this.SlideList.push(url);
                    this.SlideListElem.push(x as HTMLElement);
                }
            });
            this.lightbox.classList.add('show');

        }
        if (this.SlideList.length == 0)
            return;
        let idx = this.SlideList.indexOf(url);
        let pre = '';
        let next = '';
        if (idx < 1)
            pre = this.loop ? this.SlideList[this.SlideList.length - 1] : '';
        else
            pre = this.SlideList[idx - 1];

        if (idx == this.SlideList.length - 1)
            next = this.loop ? this.SlideList[0] : '';
        else
            next = this.SlideList[idx + 1];

        this.buttonprevious.setAttribute('url-value', pre);
        this.buttonnext.setAttribute('url-value', next);

        this.buttonprevious.style.display = pre == '' ? 'none' : '';
        this.buttonnext.style.display = next == '' ? 'none' : '';

        if (url.toLocaleLowerCase().endsWith('.mp4') || url.toLocaleLowerCase().endsWith('.avi')) {
            this.media.innerHTML = `<video controls><source src="` + url + `" type="video/` + url.toLocaleLowerCase().substring(url.length - 3) + `"></video>`;
            if (this.autoplay)
                this.Play();
        }
        else if (url.toLocaleLowerCase().endsWith('.mp3') || url.toLocaleLowerCase().endsWith('.wav')) {
            let filetype = 'mpeg';
            if (url.toLocaleLowerCase().endsWith('.wav'))
                filetype = 'wav';
            this.media.innerHTML = `<audio controls><source src="` + url + `" type="audio/` + filetype + `"></audio>`;
            if (this.autoplay)
                this.Play();
        }
        else
            this.media.innerHTML = `<img src="` + url + `" alt='' />`;
        this.mediain = this.media.firstChild as HTMLElement;

        this.mediain.addEventListener("mousedown", (e) => {
            this.TouchStart = e.clientX;
            clearInterval(this.timeout);
            this.timeout = setInterval(() => { this.TouchStart = -99999999; }, 2000);
        });
        this.mediain.addEventListener("mouseup", (e) => {
            this.CheckTouch(this.TouchStart - e.clientX);
        });

        this.content.innerHTML = this.SlideListElem[idx].innerHTML;
        this.media.getAnimations().forEach((x) => x.play());
        this.content.getAnimations().forEach((x) => x.play());
    }
    Play() {
        this.media.querySelector('video')?.play();
        this.media.querySelector('audio')?.play();
    }
    Close() {
        this.media.innerHTML = '';
        this.lightbox.classList.remove('show');
    }
    CheckTouch(diff: number) {
        if (diff > 0) {
            if (this.buttonprevious != null)
                this.ShowLightBox(this.buttonprevious.getAttribute('url-value'));
        }
        else if (diff < 0) {
            if (this.buttonnext != null)
                this.ShowLightBox(this.buttonnext.getAttribute('url-value'));
        }
        this.TouchStart = -99999999;
        event.preventDefault();
        event.stopPropagation();
    }
}

