class WNSlicker implements IWNSlicker {
    public readonly nameType: string = 'WNSlicker';
    public element: HTMLElement;

    public interval: number = 20000;
    public autoPlay: boolean = false;

    private _playState: string = 'ready';
    private _hoverPause: boolean = true;
    public get hoverPause() { return this._hoverPause; }
    public set hoverPause(value: boolean) {
        this._hoverPause = value;
        if (this._hoverPause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play') this._playState = 'pause'; })
            this.element.addEventListener("mouseleave", () => { if (this.autoPlay) this._playState = 'play'; })
        }
    };

    private _slidewidth: string;
    public get slidewidth() { return this._slidewidth; }
    public set slidewidth(value: string) { this._slidewidth = value.toLowerCase(); }

    public itemshow: number;

    private _itemalign: string = 'center';
    get itemalign() { return this._itemalign; }
    set itemalign(value: string) { this._itemalign = value.toLowerCase(); }

    public loop: boolean = true;

    private _slidesHolder: HTMLElement;
    private _slides: HTMLElement[] = [];
    private _slidesWidth: number[] = [];
    private _indicators: HTMLElement[];
    private _itemsCount: number = 0;
    private _totalWidth: number;
    private _index = 0;
    private _touch_pos: number = -1;
    private _width: number = 0;
    private _position: number = 0;
    private _oldposition: number = 0;

    private nextButton: HTMLButtonElement;
    private previousButton: HTMLButtonElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
        if (this.autoPlay) {
            this._playState = 'play';
            setInterval(() => {
                if (this._playState == 'play')
                    this.next();
            }, this.interval);
        }
    }
    private init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 20000);
        this.autoPlay = WNparseBoolean(this.element.getAttribute("autoplay"), false);
        this.hoverPause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
        this.slidewidth = WNparseString(this.element.getAttribute("slidewidth"), '');
        this.itemshow = WNparseNumber(this.element.getAttribute("itemshow"), 0);
        this.itemalign = WNparseString(this.element.getAttribute("align"), 'center');

        this._slidesHolder = this.element.querySelector('.slicker-slides') as HTMLElement;
        this._slides = [];
        WNGetNodesList(".slicker-item", this.element).forEach((x, i) => {
            if (x.classList.contains('active')) {
                this._index = i
                x.classList.remove('active');
            }
            this._slides.push(x);
        });
        this._itemsCount = this._slides.length;
        this._slidesHolder.innerHTML = '';
        this._index = 0;
        if (this.loop) {
            for (var i = 0; i < this._itemsCount; i++) this._slides.push(this._slides[i].cloneNode(true) as HTMLElement);
            for (var i = 0; i < this._itemsCount; i++) this._slides.push(this._slides[i].cloneNode(true) as HTMLElement);
            this._index = this._itemsCount;
        }
        this._slidesWidth = new Array(this._slides.length);

        this._slides.forEach((e) => this._slidesHolder.appendChild(e));


        window.addEventListener("resize", () => this.resize());
        //Find Next & Previous Button
        this.nextButton = this.element.querySelector('.slicker-next') as HTMLButtonElement;
        this.nextButton?.addEventListener('click', () => { this.next(); });
        this.previousButton = this.element.querySelector('.slicker-previous') as HTMLButtonElement;
        this.previousButton?.addEventListener('click', () => { this.previous(); });

        this.element.addEventListener("touchstart", e => { this.PanStart(e.touches[0].clientX - this.element.offsetLeft); }, true);
        this.element.addEventListener("touchmove", e => { this.PanMove(e.touches[0].clientX - this.element.offsetLeft); }, true);
        this.element.addEventListener("touchend", e => { this.PanEnd(); }, true);
        this.element.addEventListener("touchcancel", e => { this.PanEnd(); }, true);

        this.element.addEventListener("mousedown", e => (e.which == 1) ? this.PanStart(e.clientX - this.element.offsetLeft) : null);
        this.element.addEventListener("mousemove", e => (e.which == 1) ? this.PanMove(e.clientX - this.element.offsetLeft) : null);
        this.element.addEventListener("mouseup", e => this.PanEnd());

        let indicators = this.element.querySelector('.slicker-indicators');
        if (indicators != null) {
            if (indicators.children.length == 0) {
                for (var i = 0; i < this._itemsCount; i++) {
                    let indicator = document.createElement('div') as HTMLDivElement;
                    indicator.className = 'indicator-item';
                    indicator.setAttribute('indicator-index', i.toString());
                    indicators.appendChild(indicator);
                }
            }
            this._indicators = WNGetNodesList(".indicator-item", indicators);
            this._indicators.forEach((e) => {
                e.addEventListener('click', (e) => {
                    this.goto(WNparseNumber((<HTMLElement>e.target).getAttribute('indicator-index'), 0));
                })
            });
        }

        this.resize();
        this.ShowActiveIndicator();
    }
    private resize() {
        this._width = this.element.parentElement.clientWidth;

        if (this.itemshow > 0) {
            this.calcSlidesWidth();
            this._width = WNparseNumber(this._slides[0].style.width) * this.itemshow;
        }

        this.element.style.width = this._width + 'px';
        this.calcSlidesWidth();

        this._slidesHolder.style.width = this._totalWidth + 'px';
        this._position = this.getPosition(this._index);
        this._oldposition = this._position;
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";

    }
    private calcSlidesWidth() {
        this._totalWidth = 0;
        this._slides.forEach((e, i) => {
            let el = (<HTMLElement>e);
            if (this._slidewidth == 'auto') {
                let img = e.querySelector('img');
                if (img != null) {
                    this._slidesWidth[i] = el.clientWidth;
                    el.style.width = this._slidesWidth[i] + 'px';
                    this._totalWidth += this._slidesWidth[i];
                    if (!img.complete) {
                        img.onload = () => {
                            this.resize();
                        };
                        return;
                    }
                }
            }
            else {
                if (this._slidewidth != '')
                    this._slidesWidth[i] = WNValueUnit(WNCalcValue(this._slidewidth, "1px", "*", this.element)).value;
                else
                    this._slidesWidth[i] = this._width;
                el.style.width = this._slidesWidth[i] + 'px';
                this._totalWidth += this._slidesWidth[i];
            }

        });

    }

    private getPosition(index: number): number {
        let t = 0;
        for (var i = 0; i < index; i++) t += this._slidesWidth[i];
        if (this._itemalign == 'center')
            t -= (this._width - this._slidesWidth[index]) / 2;
        else if (this._itemalign == 'right')
            t = t - this._width + this._slidesWidth[index];


        if (getComputedStyle(this.element).direction == 'ltr')
            t = t * -1;

        return t;

    }
    private async PanStart(x: number) {
        this._touch_pos = x;
    }
    private async PanMove(x: number) {
        if (this._touch_pos == -1) return;

        let third = this._width / 5;
        let diff = this._position - this._oldposition;
        console.log(diff);
        if (Math.abs(diff) > 10 && (
            (x < third && diff > 0) ||
            (x > (this._width - third) && diff < 0)))
            this.PanEnd();
        else {
            this._oldposition = this._position + x - this._touch_pos;
            this._slidesHolder.style.transform = "translate3d(" + this._oldposition + "px,0px, 0px)";
        }
    }
    private async PanEnd() {
        let diff = Math.abs(this._position - this._oldposition);
        if (diff < 10) this._touch_pos = -1;
        if (this._touch_pos == -1) return;

        //if (diff >= this._width / 10) {
        let direction = (this._position > this._oldposition) ? 1 : -1;
        if (getComputedStyle(this.element).direction == 'rtl')
            direction *= -1;
        let t = 0;
        for (var i = 1; i < 1000; i++) {
            t += this._slidesWidth[this._index];
            if (t > diff) {
                this._index += i * direction;

                break;
            }
        }
        // }
        this._touch_pos = -1;
        await this.AnimateSlide();

    }
    private async AnimateSlide() {
        let newposition = this.getPosition(this._index);
        let i = this._oldposition;
        while (true) {
            if ((newposition < this._oldposition)) {
                i--;
                if (i < newposition)
                    break;
            }
            else {
                i++;
                if (i > newposition)
                    break;
            }
            this._slidesHolder.style.transform = "translate3d(" + i + "px,0px, 0px)";
            if (WNmod(i, 10) == 0) await WNSleep(0);

        }
        this._index = this._itemsCount + WNmod(this._index, this._itemsCount);

        this._oldposition = this._position = this.getPosition(this._index);
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";

        this.ShowActiveIndicator();
    }
    private ShowActiveIndicator() {
        if (!this._indicators)
            return;

        this._indicators.forEach((x) => x.classList.remove('active'));

        let idx = WNmod(this._index, this._itemsCount);
        this.element.querySelector("div[indicator-index='" + idx + "']").classList.add('active');

    }
    private async next() {
        this._touch_pos = -1;
        this._index++;
        await this.AnimateSlide();
    }
    private async previous() {
        this._touch_pos = -1;
        this._index--;
        await this.AnimateSlide();
    }
    private async goto(index: number) {
        if (index == this._index) return;
        this._index = index;
        await this.AnimateSlide();
    }
}