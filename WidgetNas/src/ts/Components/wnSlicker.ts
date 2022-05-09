class wnslicker {
    element: HTMLElement;

    _interval: number = 20000;
    get interval() { return this._interval; }
    set interval(value: number) { this._interval = value; }

    _autoplay: boolean = false;
    get autoplay() { return this._autoplay; }
    set autoplay(value: boolean) { this._autoplay = value; }

    _playState: string = 'ready';
    _hoverpause: boolean = true;
    get hoverpause() { return this._hoverpause; }
    set hoverpause(value: boolean) {
        this._hoverpause = value;
        if (this._hoverpause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play') this._playState = 'pause'; })
            this.element.addEventListener("mouseleave", () => { if (this._autoplay) this._playState = 'play'; })
        }
    };

    _slidewidth: string;
    get slidewidth() { return this._slidewidth; }
    set slidewidth(value: string) { this._slidewidth = value.toLowerCase(); }

    _itemshow: number;
    get itemshow() { return this._itemshow; }
    set itemshow(value: number) { this._itemshow = value; }

    _itemalign: string = 'center';
    get itemalign() { return this._itemalign; }
    set itemalign(value: string) { this._itemalign = value.toLowerCase(); }

    _loop: boolean = true;
    get loop() { return this._loop; }
    set loop(value: boolean) { this._loop = value; }

    _slidesHolder: HTMLElement;
    _slides: HTMLElement[] = [];
    _slidesWidth: number[] = [];
    _indicators: HTMLElement[];
    _itemsCount: number = 0;
    _totalWidth: number;
    _index = 0;
    _touch_pos: number = -1;
    _width: number = 0;
    _position: number = 0;
    _oldposition: number = 0;

    NextButton: HTMLButtonElement;
    PreviousButton: HTMLButtonElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.Init();
        }
        if (this.autoplay) {
            this._playState = 'play';
            setInterval(() => {
                if (this._playState == 'play')
                    this.Next();
            }, this.interval);
        }
    }
    Init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 20000);
        this.autoplay = WNparseBoolean(this.element.getAttribute("autoplay"), false);
        this.hoverpause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
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
        if (this._loop) {
            for (var i = 0; i < this._itemsCount; i++) this._slides.push(this._slides[i].cloneNode(true) as HTMLElement);
            for (var i = 0; i < this._itemsCount; i++) this._slides.push(this._slides[i].cloneNode(true) as HTMLElement);
            this._index = this._itemsCount;
        }
        this._slidesWidth = new Array(this._slides.length);

        this._slides.forEach((e) => this._slidesHolder.appendChild(e));


        window.addEventListener("resize", () => this.Resize());
        //Find Next & Previous Button
        this.NextButton = this.element.querySelector('.slicker-next') as HTMLButtonElement;
        this.NextButton?.addEventListener('click', () => { this.Next(); });
        this.PreviousButton = this.element.querySelector('.slicker-previous') as HTMLButtonElement;
        this.PreviousButton?.addEventListener('click', () => { this.Previous(); });

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
                    this.Goto(WNparseNumber((<HTMLElement>e.target).getAttribute('indicator-index'), 0));
                })
            });
        }

        this.Resize();
        this.ShowActiveIndicator();
    }
    Resize() {
        this._width = this.element.parentElement.clientWidth;

        if (this.itemshow > 0) {
            this.CalcSlidesWidth();
            this._width = WNparseNumber(this._slides[0].style.width) * this.itemshow;

        }
        this.element.style.width = this._width + 'px';
        this._totalWidth = 0;
        this.CalcSlidesWidth();

        this._slidesHolder.style.width = this._totalWidth + 'px';
        this._position = this.GetPosition(this._index);
        this._oldposition = this._position;
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";

    }
    CalcSlidesWidth() {
        this._slides.forEach((e, i) => {
            let el = (<HTMLElement>e);
            WNWaitToLoad(el, 5000);
            if (this._slidewidth == 'auto')
                this._slidesWidth[i] = el.clientWidth;
            else if (this._slidewidth != '')
                this._slidesWidth[i] = WNValueUnit(WNCalcValue(this._slidewidth, "1px", "*", this.element)).value;
            else
                this._slidesWidth[i] = this._width;

            el.style.width = this._slidesWidth[i] + 'px';
            this._totalWidth += this._slidesWidth[i];
        });

    }
    GetPosition(index: number): number {
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
    async PanStart(x: number) {
        this._touch_pos = x;
    }
    async PanMove(x: number) {
        if (this._touch_pos == -1) return;

        let third = this._width / 5;
        let diff = this._position - this._oldposition;
        console.log(diff);
        if (Math.abs( diff)>10 &&(
            (x < third && diff > 0) ||
            (x > (this._width - third) && diff<0)))
            this.PanEnd();
        else {
            this._oldposition = this._position + x - this._touch_pos;
            this._slidesHolder.style.transform = "translate3d(" + this._oldposition + "px,0px, 0px)";
        }
    }
    async PanEnd() {
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
    async AnimateSlide() {
        let newposition = this.GetPosition(this._index);
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

        this._oldposition = this._position = this.GetPosition(this._index);
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";

        this.ShowActiveIndicator();
    }
    ShowActiveIndicator() {
        this._indicators.forEach((x) => x.classList.remove('active'));

        let idx = WNmod(this._index, this._itemsCount);
        this.element.querySelector("div[indicator-index='" + idx + "']").classList.add('active');
        
    }
    async Next() {
        this._touch_pos = -1;
        this._index++;
        await this.AnimateSlide();
    }
    async Previous() {
        this._touch_pos = -1;
        this._index--;
        await this.AnimateSlide();
    }
    async Goto(index: number) {
        if (index == this._index) return;
        this._index = index;
        await this.AnimateSlide();
    }
}