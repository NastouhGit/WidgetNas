class WNProgress implements IWNProgress {
    public readonly nameType: string = 'WNProgress';
    public element: HTMLElement;
    //private
    private _bar: NodeListOf<HTMLDivElement>;
    private _caption: HTMLDivElement;
    private _min: number = 0;
    private _max: number = 100;
    private _value: number;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.render();
        }
    }
    private render() {
        if (!this.element.classList.contains('progress'))
            this.element.classList.add('progress');
        if (this.element.children.length == 0)
            this.element.innerHTML = '<div class="progress-bar" max="100" ></div>';
        if (this.element.hasAttribute('min'))
            this._min = parseInt(this.element.getAttribute('min'));
        if (this.element.hasAttribute('max'))
            this._max = parseInt(this.element.getAttribute('max'));

        this._bar = this.element.querySelectorAll('div.progress-bar');
        this._caption = this.element.querySelector('div.progress-caption');
        let max = 0;
        for (var i = 0; i < this._bar.length; i++) {
            if (this._bar[i].hasAttribute('max'))
                max = parseInt(this._bar[i].getAttribute('max'));
            else {
                let step = (100 - max) / (this._bar.length - i);
                max += step;
                this._bar[i].setAttribute('max', max.toString());
            }
        }
    }
    private showProgress() {
        let percent = (this._value - this._min) / (this._max - this._min) * 100;
        if (percent > 100) percent = 100;
        if (this._caption != null) {
            this._caption.innerHTML = Math.floor(percent) + "%";
        }

        let min = 0;
        for (var i = 0; i < this._bar.length; i++) {
            let max = parseInt(this._bar[i].getAttribute('max')) - min;
            if (percent >= max)
                this._bar[i].style.width = max + '%';
            else if (percent > 0)
                this._bar[i].style.width = percent + '%';
            else
                this._bar[i].style.width = '0%';
            min = max;
            percent -= max;
        }
    }
    public set value(value: number) { this._value = value; this.showProgress() }
    public get value() { return this._value }
    public set min(value: number) { this._min = value; this.showProgress() }
    public get min() { return this._min }
    public set max(value: number) { this._max = value; this.showProgress() }
    public get max() { return this._max }
}