class wncarousel {
    element: HTMLElement;

    _interval: number = 10000;
    get interval() { return this._interval; }
    set interval(value: number) { this._interval = value; }

    _autoplay: boolean = true;
    get autoplay() { return this._autoplay; }
    set autoplay(value: boolean) { this._autoplay = value; }

    _playState: string = 'ready';
    _hoverpause: boolean = true;
    get hoverpause() { return this._hoverpause; }
    set hoverpause(value: boolean) {
        this._hoverpause = value;
        if (this._hoverpause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play') this._playState = 'pause'; })
            this.element.addEventListener("mouseleave", () => { if (this._playState == 'pause') this._playState = 'play'; })
        }
    };

    _items: HTMLElement[];
    _indicators: HTMLElement[];
    _oldindex = -1;
    _index = 0;
    _transitionDelay = 600;
    _durationHandle: any;
    _effectHandle: any;
    _touch_x: number = 0;
    NextButton: HTMLButtonElement;
    PreviousButton: HTMLButtonElement;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.Init();
        }
        if (this.autoplay) {
            this._playState = 'play';
            this.Play();
        }
    }
    Init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 5000);
        this.autoplay = WNparseBoolean(this.element.getAttribute("autoplay"), true);
        this.hoverpause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
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
        this.NextButton = this.element.querySelector('.carousel-next') as HTMLButtonElement;
        this.NextButton?.addEventListener('click', () => { this.Next(); })
        this.PreviousButton = this.element.querySelector('.carousel-previous') as HTMLButtonElement;
        this.PreviousButton?.addEventListener('click', () => { this.Previous(); })

        this.element.addEventListener("touchstart", (e) => { this._touch_x = e.touches[0].clientX; })
        this.element.addEventListener("touchend", (e) => {
            if (this._touch_x > e.changedTouches[0].clientX)
                this.Previous();
            if (this._touch_x < e.changedTouches[0].clientX)
                this.Next();

        });
        this.element.addEventListener("mousedown", (e) => { this._touch_x = e.clientX; })
        this.element.addEventListener("mouseup", (e) => {
            if (this._touch_x > e.clientX)
                this.Previous();
            if (this._touch_x < e.clientX)
                this.Next();

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
            this._indicators.forEach((e) => { e.addEventListener('click', () => { this.ShowSlide(e); }) });
            let t = this._index;
            this._index = -1;
            this.ShowSlide(this._indicators[t]);
        }
    }
    Play() {
        window.clearTimeout(this._durationHandle);
        let interval = this.interval;
        if (this._playState == 'pause') {
            this.Clear();
            this._items[this._index].classList.add('active');
        }
        else
            interval = this.Show();

        if (this._playState != 'ready')
            this._durationHandle = window.setTimeout(() => {
                if (this._playState == 'play')
                    this.AddIndex(1);
                this.Play();
            }, interval);
    }
    Show(): number {
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
    Clear() {
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
    Next() {
        this.AddIndex(1);
        if (this.autoplay) this._playState = 'play';
        this.Clear();
        this.Play();
    }
    Previous() {
        this.AddIndex(-1);
        if (this.autoplay) this._playState = 'play';
        this.Clear();
        this.Play();
    }
    AddIndex(skip: number) {
        this._oldindex = this._index;
        this._index += skip;
        if (this._index >= this._items.length)
            this._index = 0;
        if (this._index < 0)
            this._index = this._items.length - 1;
    }
    ShowSlide(element) {
        let index = WNparseNumber(element.getAttribute('indicator-index'), 0);
        if (this._index == index)
            return;
        this._oldindex = this._index;
        this._index = index;

        if (this.autoplay) this._playState = 'play';
        this.Clear();
        this.Play();
    }
}