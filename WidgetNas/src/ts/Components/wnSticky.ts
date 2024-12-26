class WNSticky implements IWNSticky {
    public readonly nameType: string = 'WNSticky';
    public element: HTMLElement;
    private _top = 0;
    private _bottom = 0;
    private _isWindow = true;
    private _parent;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
            this.CheckSticky();
        }
    }
    
    private Init() {
        this._parent = this.element.parentElement;
        while (this._parent.tagName != 'BODY') {
            let style = getComputedStyle(this._parent);
            if (this._parent.tagName == 'BODY') {
                break;
            }
            else if (style.overflowY == 'scroll') {
                this._isWindow = false;
                break;
            }
            this._parent = this._parent.parentElement;
        }
        if (this._isWindow) {
            this._top = this.element.offsetTop; 
            this._bottom = this._top + this.element.clientHeight + parseInt(getComputedStyle(this.element).marginBlockEnd) + parseInt(getComputedStyle(this.element).marginBlockStart);
            window.addEventListener('scroll', () => { this.CheckSticky() });
        }
        else {
            this._top = this.element.offsetTop - this.element.parentElement.offsetTop;
            this._bottom = this._top + this.element.offsetHeight + parseInt(getComputedStyle(this.element).marginBlockEnd) + parseInt(getComputedStyle(this.element).marginBlockStart);

            this._parent.addEventListener('scroll', () => { this.CheckSticky() });
        }
    }
    private CheckSticky() {
        let scrollTop = Math.round(this._parent.scrollTop);
        if (this._isWindow)
            scrollTop = window.scrollY;
        let style = getComputedStyle(this.element);
        if (style.top != 'auto' && style.top != '') {
            if (this._top < scrollTop)
                this.element.classList.add("sticky-active");
            else
                this.element.classList.remove("sticky-active");
        }
        else if (style.bottom != 'auto' && style.bottom != '') {
            if (this._bottom > scrollTop)
                this.element.classList.add("sticky-active");
            else
                this.element.classList.remove("sticky-active");
        }
    }
}