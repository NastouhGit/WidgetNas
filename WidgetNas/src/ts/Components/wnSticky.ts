class wnsticky {
    element: HTMLElement;
    _position = 'top';
    get position() { return this._position; }
    set position(value: string) { this._position = value; }
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
            this.CheckSticky();
        }
    }
    private Init() {
        if (this.element.classList.contains('sticky-top'))
            this._position = 'top';
        else if (this.element.classList.contains('sticky-bottom'))
            this._position = 'bottom';

        window.addEventListener('scroll', () => { this.CheckSticky() });
    }
    CheckSticky() {
        let addstickyOnfly = false;
        if (this._position == 'top' && this.element.offsetTop > this.element.clientHeight) addstickyOnfly = true;
        if (this._position == 'bottom' && (document.body.clientHeight - this.element.offsetTop) > this.element.clientHeight) addstickyOnfly = true;
        if (addstickyOnfly)
            this.element.classList.add("sticky-onfly");
        else
            this.element.classList.remove("sticky-onfly");
    }
}