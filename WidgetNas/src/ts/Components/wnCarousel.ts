class WNCarousel  implements IWNCarousel{
    public readonly nameType: string = 'WNCarousel';
    public element: HTMLElement;

    public interval: number = 10000;

    public autoPlay: boolean = true;

    private _playState: string = 'ready';
    private _hoverPause: boolean = true;
    public get hoverPause() { return this._hoverPause; }
    public set hoverPause(value: boolean) {
        this._hoverPause = value;
        if (this._hoverPause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play') this._playState = 'pause'; })
            this.element.addEventListener("mouseleave", () => { if (this._playState == 'pause') this._playState = 'play'; })
        }
    };

    private _items: HTMLElement[];
    private _indicators: HTMLElement[];
    private _oldindex = -1;
    private _index = 0;
    private _transitionDelay = 600;
    private _durationHandle: any;
    private _effectHandle: any;
    private _touch_x: number = 0;
    private nextButton: HTMLButtonElement;
    private previousButton: HTMLButtonElement;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
        if (this.autoPlay) {
            this._playState = 'play';
            this.play();
        }
    }
    private init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 5000);
        this.autoPlay = WNparseBoolean(this.element.getAttribute("autoplay"), true);
        this.hoverPause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
        this._items = WNGetNodesList(".carousel-item", this.element);

        //find first active item, if not found index is 0
        this._index = 0;
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].classList.contains('active')) {
                this._index = i;
                break;
            }
        }
        //Find effects Duration
        let t = getComputedStyle(this._items[0]).transitionDuration.toLowerCase();
        if (t.endsWith('ms'))
            this._transitionDelay = parseInt(t.substring(0, t.length - 2));
        else if (t.endsWith('s'))
            this._transitionDelay = parseFloat(t.substring(0, t.length - 1)) * 1000;

        //Find Next & Previous Button
        this.nextButton = this.element.querySelector('.carousel-next') as HTMLButtonElement;
        this.nextButton?.addEventListener('click', () => { this.next(); })
        this.previousButton = this.element.querySelector('.carousel-previous') as HTMLButtonElement;
        this.previousButton?.addEventListener('click', () => { this.previous(); })

        this.element.addEventListener("touchstart", (e) => { this._touch_x = e.touches[0].clientX; })
        this.element.addEventListener("touchend", (e) => {
            if (this._touch_x > e.changedTouches[0].clientX)
                this.previous();
            if (this._touch_x < e.changedTouches[0].clientX)
                this.next();

        });
        this.element.addEventListener("mousedown", (e) => { this._touch_x = e.clientX; })
        this.element.addEventListener("mouseup", (e) => {
            if (this._touch_x > e.clientX)
                this.previous();
            if (this._touch_x < e.clientX)
                this.next();

        })

        let indicators = this.element.querySelector('.carousel-indicators');
        if (indicators != null) {
            if (indicators.children.length == 0) {
                for (var i = 0; i < this._items.length; i++) {
                    let indicator = document.createElement('div') as HTMLDivElement;
                    indicator.className = 'indicator-item';
                    indicator.setAttribute('indicator-index', i.toString());
                    indicators.appendChild(indicator);
                }
            }
            this._indicators = WNGetNodesList(".indicator-item", indicators);
            this._indicators.forEach((e) => { e.addEventListener('click', () => { this.showSlide(e); }) });
            let t = this._index;
            this._index = -1;
            this.showSlide(this._indicators[t]);
        }
    }
    private play() {
        window.clearTimeout(this._durationHandle);
        let interval = this.interval;
        if (this._playState == 'pause') {
            this.clear();
            this._items[this._index].classList.add('active');
        }
        else
            interval = this.show();

        if (this._playState != 'ready')
            this._durationHandle = window.setTimeout(() => {
                if (this._playState == 'play')
                    this.addIndex(1);
                this.play();
            }, interval);
    }
    private show(): number {
        let oldElement = null;
        if (this._oldindex != -1) {
            oldElement = this._items[this._oldindex];
            oldElement.classList.remove('active');
            oldElement.classList.add('end');
        }

        let nextElement = this._items[this._index];

        nextElement.classList.add('start');
        if (this._indicators != null) {
            if (this._oldindex > -1 && this._oldindex < this._indicators.length)
                this._indicators[this._oldindex].classList.remove('active');
            if (this._index < this._indicators.length)
                this._indicators[this._index].classList.add('active');
        }
        this._effectHandle = setTimeout(() => {
            nextElement.classList.remove('start');

            nextElement.classList.add('active');
            if (oldElement != null)
                oldElement.classList.remove('end');
        }, this._transitionDelay);

        return WNparseNumber(nextElement.getAttribute("interval"), this.interval);
    }
    private clear() {
        window.clearTimeout(this._effectHandle);
        window.clearTimeout(this._durationHandle);

        for (var i = 0; i < this._items.length; i++) {
            this._items[i].classList.remove('start');
            this._items[i].classList.remove('end');
            this._items[i].classList.remove('active');
            if (this._indicators != null && i < this._indicators.length)
                this._indicators[i].classList.remove('active');
        }
    }
    private next(): void {
        this.addIndex(1);
        if (this.autoPlay) this._playState = 'play';
        this.clear();
        this.play();
    }
    private previous(): void {
        this.addIndex(-1);
        if (this.autoPlay) this._playState = 'play';
        this.clear();
        this.play();
    }
    private addIndex(skip: number): void {
        this._oldindex = this._index;
        this._index += skip;
        if (this._index >= this._items.length)
            this._index = 0;
        if (this._index < 0)
            this._index = this._items.length - 1;
    }
    private showSlide(element): void {
        let index = WNparseNumber(element.getAttribute('indicator-index'), 0);
        if (this._index == index)
            return;
        this._oldindex = this._index;
        this._index = index;

        if (this.autoPlay) this._playState = 'play';
        this.clear();
        this.play();
    }
}