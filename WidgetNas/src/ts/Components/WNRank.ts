class WNRank implements IWNRank {
    public readonly nameType: string = 'WNRank';
    public element: HTMLFormElement;
    public max: number = 5;
    private _value: number = 0;


    public change = (t: IWNRange) => { };
    public beforeChange;
    public click;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.init();
        }
    }
    private init(): void {
        if (this.element.hasAttribute('max')) this.max = WNparseNumber(this.element.getAttribute('max'), 5);
        if (this.element.hasAttribute('value')) this._value = WNparseNumber(this.element.getAttribute('value'), 0);

        if (this.element.hasAttribute('onbeforechange'))
            this.beforeChange = WNGenerateFunction(this.element.getAttribute('onbeforechange'), 't,v');
        if (this.element.hasAttribute('onclick'))
            this.click = WNGenerateFunction(this.element.getAttribute('onclick'), 't,e');

        if (this.element.className == '') this.element.className = 'rank';
        this.layout();
    }
    public get value() { return this._value; }
    public set value(value: number) {
        this._value = value;
        this.layout();
    }

    private layout() {
        let divs = this.element.querySelectorAll('div');
        if (divs.length != this.max) {
            divs.forEach(x => x.remove());
            for (let i = 0; i < this.max; i++) {
                let div = document.createElement('div');
                //div.innerHTML = this.symbol;
                div.addEventListener('click', (e) => {
                    if (this.element.classList.contains('readonly') ||
                        this.element.classList.contains('disabled') ||
                        this.element.hasAttribute('readonly') ||
                        this.element.hasAttribute('disabled')) return;

                    let v = i + 1;
                    if (this._value == 1 && v == 1 && (e.target as HTMLElement).classList.contains('active')) v = 0;

                    if (!(this.beforeChange?.(this, v) ?? true))
                        return;
                    this.value = v;
                    this.click?.(this, e);
                })
                this.element.appendChild(div);
            }
            divs = this.element.querySelectorAll('div');
        }
        requestAnimationFrame(() => {
            divs.forEach(x => x.className = '');
            for (let i = 0; i < this._value; i++) {
                divs[i].className = 'active';

            }
        });

    }
}
(globalThis as any).WNRank = WNRank;