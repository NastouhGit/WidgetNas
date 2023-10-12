class WNLightbox implements IWNLightbox {
    public readonly nameType: string = 'WNLightbox';
    public element: HTMLElement;
    public loop = true;
    public close = true;
    public modalClose = true;
    public autoPlay = true;

    private buttons: NodeListOf<Element>;
    private lightbox: HTMLElement;
    private media: HTMLElement;
    private mediain: HTMLElement;
    private content: HTMLElement;
    private buttonprevious: HTMLElement;
    private buttonnext: HTMLElement;
    private closeButton: HTMLElement;
    private SlideList: string[] = [];
    private SlideListElem: HTMLElement[] = [];
    private TouchStart: number = -99999999;
    private timeout: any;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.loop = WNparseBoolean(this.element.getAttribute('loop'), true);
        this.close = WNparseBoolean(this.element.getAttribute('close'), true);
        this.modalClose = WNparseBoolean(this.element.getAttribute('modal-close'), true);
        this.autoPlay = WNparseBoolean(this.element.getAttribute('auto-play'), true);

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
        this.closeButton = this.lightbox.querySelector(".close");

        this.lightbox.addEventListener("touchstart", (e) => { this.TouchStart = e.changedTouches[0].screenX; });
        this.lightbox.addEventListener("touchend", (e) => {
            let diff = this.TouchStart - e.changedTouches[0].screenX;
            this.checkTouch(diff);
            e.stopPropagation();

        });


        if (this.closeButton != null) {
            if (!this.close)
                this.closeButton.style.display = 'none';
            else
                this.closeButton.addEventListener("click", () => { this.closeModal(); });
        }

        if (this.buttonprevious != null) {
            this.buttonprevious.addEventListener("click", (e) => {
                this.showLightBox((<HTMLElement>e.target).getAttribute('url-value'));
                e.preventDefault();
                e.stopPropagation();

            });
        }

        if (this.buttonnext != null) {
            this.buttonnext.addEventListener("click", (e) => {
                this.showLightBox((<HTMLElement>e.target).getAttribute('url-value'));
                e.preventDefault();
                e.stopPropagation();

            });
        }

        if (this.modalClose)
            this.lightbox.addEventListener("click", () => {
                if (this.TouchStart == -99999999)
                    this.closeModal();
            }, true);



        this.buttons = this.element.querySelectorAll('[lightbox]');
        this.buttons.forEach((t) => {
            if (t.className == '' && (t.getAttribute('style')??'') == '') {
                t.className ='lightboxbutton';
            }
            t.addEventListener("click", (e) => {
                if ((<HTMLElement>e.target).tagName == "A")
                    return;
                this.showLightBox(e.target as HTMLElement);
                e.preventDefault();
                e.stopPropagation();

            }, false);
        });
    }
    private showLightBox(e: HTMLElement | string) {
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
            if (this.autoPlay)
                this.play();
        }
        else if (url.toLocaleLowerCase().endsWith('.mp3') || url.toLocaleLowerCase().endsWith('.wav')) {
            let filetype = 'mpeg';
            if (url.toLocaleLowerCase().endsWith('.wav'))
                filetype = 'wav';
            this.media.innerHTML = `<audio controls><source src="` + url + `" type="audio/` + filetype + `"></audio>`;
            if (this.autoPlay)
                this.play();
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
            this.checkTouch(this.TouchStart - e.clientX);
            e.preventDefault();
            e.stopPropagation();

        });

        this.content.innerHTML = this.SlideListElem[idx].innerHTML;
        this.media.getAnimations().forEach((x) => x.play());
        this.content.getAnimations().forEach((x) => x.play());
    }
    private play() {
        this.media.querySelector('video')?.play();
        this.media.querySelector('audio')?.play();
    }
    private closeModal() {
        this.media.innerHTML = '';
        this.lightbox.classList.remove('show');
    }
    private checkTouch(diff: number) {
        if (diff > 0) {
            if (this.buttonprevious != null)
                this.showLightBox(this.buttonprevious.getAttribute('url-value'));
        }
        else if (diff < 0) {
            if (this.buttonnext != null)
                this.showLightBox(this.buttonnext.getAttribute('url-value'));
        }
        this.TouchStart = -99999999;
    }
}

