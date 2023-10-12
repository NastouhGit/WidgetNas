class WNToast implements IWNToast {
    public readonly nameType: string = 'WNToast';
    public element: HTMLElement;

    public timeout: number = 0;
    private _timeouthandle: any;
    beforeHide: (t: IWNToast) => boolean | Promise<boolean>;

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
            this.timeout = WNparseNumber(this.element.getAttribute('timeout'), 0);

        //check after hide event
        if (this.element.hasAttribute('onbeforehide'))
            this.beforeHide = WNGenerateFunction(this.element.getAttribute('onbeforehide'), 't');
    }
    public show(): void {
        clearTimeout(this._timeouthandle);
        this.element.classList.add('show');
        if (this.timeout > 0) {
            this._timeouthandle = setTimeout(() => { this.hide() }, this.timeout);
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
        if (this.beforeHide && !this.beforeHide(this))
            return;
        this.element.classList.remove('show');
    }
}