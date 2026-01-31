class WNRange implements IWNRange {
    public readonly nameType: string = 'WNRange';
    public element: HTMLFormElement;
    public min: number = 0;
    public max: number = 100;
    public step: number = 1;
    public tooltip: string = 'none';
    public format: string = '0';
    public unit: string = '';
    public values: number[] = [];

    public change = (t: IWNRange) => { };
    private resizeObserver: ResizeObserver;

    private _count: number = 2;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.init();
        }
    }
    private init(): void {
        if (this.element.hasAttribute('min')) this.min = WNparseNumber(this.element.getAttribute('min'), 0);
        if (this.element.hasAttribute('max')) this.max = WNparseNumber(this.element.getAttribute('max'), 100);
        if (this.element.hasAttribute('count')) this._count = WNparseNumber(this.element.getAttribute('count'), 2);
        if (this.element.hasAttribute('step')) this.step = WNparseNumber(this.element.getAttribute('step'), 1);
        if (this.element.hasAttribute('tooltip')) this.tooltip = this.element.getAttribute('tooltip').toLowerCase();
        if (this.element.hasAttribute('unit')) this.unit = this.element.getAttribute('unit');
        if (this.element.hasAttribute('format')) this.format = this.element.getAttribute('format');

        if (this.element.hasAttribute('onchange'))
            this.change = WNGenerateFunction(this.element.getAttribute('onchange'), 't');

        if (this.element.hasAttribute('value')) {
            this.values = this.element.getAttribute('value').split(',').map(x => {
                let v = 0;
                if (x.includes('%'))
                    v = this.min + ((this.max - this.min) / 100 * WNparseNumber(x.replace('%', ''), 0));
                else
                    v = WNparseNumber(x, this.min);
                if (v < this.min) v = this.min;
                if (v > this.max) v = this.max;
                return v;
            });
            this.change?.(this);
        }

        if (this.element.className == '') this.element.className = 'range';
        if (this._count < 1) this._count = 1;
        if (this._count > 10) this._count = 10;
        window.addEventListener('resize', () => this.layout());
        this.refresh();
        this.resizeObserver = new ResizeObserver(() => this.layout());
        this.resizeObserver.observe(this.element);

    }
    public get value() { return this.values.join(','); }
    public set value(value: string) {
        this.values = value.split(',').map(x => {
            let v = 0;
            if (x.includes('%'))
                v = this.min + ((this.max - this.min) / 100 * WNparseNumber(x.replace('%', ''), 0));
            else
                v = WNparseNumber(x, this.min);
            if (v < this.min) v = this.min;
            if (v > this.max) v = this.max;
            return v;
        });
        this.layout();
        this.change?.(this);
    }
    public get count() { return this._count; }
    public set count(value: number) {
        value = Number(value);
        if (isNaN(value)) value = 2;
        if (value == this._count) return;
        this._count = value;
        if (this._count < 1) this._count = 1;
        if (this._count > 10) this._count = 10;
        this.refresh();
    }
    private eThumb: HTMLDivElement[];
    private eTooltip: HTMLDivElement[];
    private eBar: HTMLDivElement;
    private eBar2: HTMLDivElement;
    public refresh() {
        this.element.innerHTML = '';
        this.eBar = document.createElement('div');
        this.eBar2 = document.createElement('div');
        this.eBar.className = 'bar';
        this.eBar2.className = 'range-bar';
        this.element.appendChild(this.eBar);
        this.element.appendChild(this.eBar2);
        this.eThumb = [];
        this.eTooltip = [];
        for (let i = 0; i < this.count; i++) {
            this.eThumb.push(document.createElement('div'));
            this.eThumb[i].className = 'thumb';
            this.eThumb[i].setAttribute('draggable', 'true');
            this.eThumb[i].ondragstart = (e) => { e.preventDefault(); return false; };
            this.eThumb[i].onmousedown = (e) => {
                if (e.button === 0) this.startMove(i, e.clientX);
            };
            this.eThumb[i].ontouchstart = (e: TouchEvent) => {
                e.preventDefault(); // جلوگیری از اسکرول صفحه
                if (e.touches.length === 1) this.startMove(i, e.touches[0].clientX);
            };
            this.element.appendChild(this.eThumb[i]);

            if (this.tooltip != 'none') {
                this.eTooltip.push(document.createElement('div'));
                this.eTooltip[i].className = 'tooltip-value ' + this.tooltip;
                this.element.appendChild(this.eTooltip[i]);
            }
        }
        this.layout();
    }
    private layout() {
        while (this.values.length < this.count)
            this.values.push(this.min);

        requestAnimationFrame(() => {
            let range = this.max - this.min;
            let width = this.eBar.clientWidth;
            let scale = width / range;
            let min = Infinity;
            let max = -Infinity;
            let max2 = -Infinity;
            let thunbWidth = this.eThumb[0].offsetWidth;
            for (let i = 0; i < this.count; i++) {
                let value = this.values[i];
                let left = this.eBar.offsetLeft + (value - this.min) * scale;
                this.eThumb[i].style.left = (left - thunbWidth / 2) + 'px';

                if (this.eTooltip && this.eTooltip[i]) {
                    this.eTooltip[i].textContent = WNStringFormat(value,this.format) + this.unit;
                    setTimeout(() => {
                        let w = left - this.eTooltip[i].clientWidth / 2;
                        if (w < max2) w = max2;
                        if (w < this.eBar.offsetLeft) w = this.eBar.offsetLeft;
                        if ((w + this.eTooltip[i].clientWidth) >= this.eBar.offsetLeft + this.eBar.offsetWidth) w = this.eBar.offsetLeft + this.eBar.offsetWidth - this.eTooltip[i].clientWidth;
                        this.eTooltip[i].style.left = w + 'px';
                        max2 = Math.max(left +5+ this.eTooltip[i].clientWidth/2, max2);
                    }, 0);
                }
                min = Math.min(left, min);
                max = Math.max(left, max);

            }
            if (min < 0) min = 0;
            if (max > width) max = width;

            this.eBar2.style.left = min + 'px';
            this.eBar2.style.right = (width - max + thunbWidth) + 'px';
        });
    }
    private movingIndex: number = -1;

    private startMove(index: number, clientX: number) {
        this.movingIndex = index;
        document.addEventListener('mousemove', this._onMove);
        document.addEventListener('mouseup', this._endMove);
        document.addEventListener('touchmove', this._onTouchMove);
        document.addEventListener('touchend', this._onTouchEnd);
    }
    private _onTouchMove = (e: TouchEvent) => {
        e.preventDefault(); // جلوگیری از اسکرول صفحه
        if (this.movingIndex === -1) return;
        if (e.touches.length === 1) this.onMove(this.movingIndex, e.touches[0].clientX);
    };

    private _onTouchEnd = (e: TouchEvent) => {
        e.preventDefault(); // جلوگیری از اسکرول صفحه
        if (this.movingIndex === -1) return;
        if (e.changedTouches.length === 1) this.endMove(this.movingIndex, e.changedTouches[0].clientX);
        document.removeEventListener('touchmove', this._onTouchMove);
        document.removeEventListener('touchend', this._onTouchEnd);
        this.movingIndex = -1;
    };
    private _onMove = (e: MouseEvent) => {
        if (this.movingIndex === -1) return;
        this.onMove(this.movingIndex, e.clientX);
    };

    private _endMove = (e: MouseEvent) => {
        if (this.movingIndex === -1) return;
        this.endMove(this.movingIndex, e.clientX);
        document.removeEventListener('mousemove', this._onMove);
        document.removeEventListener('mouseup', this._endMove);
        this.movingIndex = -1;
    };

    private onMove(index: number, clientX: number) {
        let rect = this.eBar.getBoundingClientRect();
        let width = this.eBar.clientWidth;
        let range = this.max - this.min;
        let x = clientX - rect.left;
        // مقدار نسبی بین min و max
        let percent = x / width;
        let rawValue = percent * range + this.min;

        // رند کردن نسبت به step
        let value = Math.round((rawValue - this.min) / this.step) * this.step + this.min;

        // محدود کردن مقدار به بازه min و max
        value = Math.max(this.min, Math.min(this.max, value));

        // محدود کردن نسبت به مقدار قبلی و بعدی
        if (index > 0)
            value = Math.max(value, this.values[index - 1] + this.step);
        if (index < this.count - 1)
            value = Math.min(value, this.values[index + 1] - this.step);

        this.values[index] = value;
        this.change?.(this);
        this.layout();
    }

    private endMove(index: number, clientX: number) {
        this.onMove(index, clientX);
        this.change?.(this);
    }
}
(globalThis as any).WNRange = WNRange;