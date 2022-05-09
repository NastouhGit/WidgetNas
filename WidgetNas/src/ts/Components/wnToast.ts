class wntoast {
    element: HTMLElement;

    private _timeouthandle: any;
    private _timeout = 0;
    get timeout() { return this._timeout }
    set timeout(value: number) { this._timeout = value; }

    beforehide: any;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        let elem = this.element.querySelectorAll('[close-parent]');
        for (var i = 0; i < elem.length; i++) elem[i].addEventListener('click', () => { this.hide() });
        if (this.element.hasAttribute('timeout'))
            this._timeout = WNparseNumber(this.element.getAttribute('timeout'), 0);

        //check after hide event
        if (this.element.hasAttribute('onbeforehide'))
            this.beforehide = new Function(this.element.getAttribute('onbeforehide'));
    }
    show() {
        clearTimeout(this._timeouthandle);
        this.element.classList.add('show');
        if (this._timeout > 0) {
            this._timeouthandle = setTimeout(() => { this.hide() }, this._timeout);
        }
    }
    toggle() {
        if (this.element.classList.contains('show'))
            this.hide();
        else
            this.show();
    }
    hide() {
        clearTimeout(this._timeouthandle);
        if (this.beforehide != null)
            if (!this.beforehide())
                return;
        this.element.classList.remove('show');
    }
}