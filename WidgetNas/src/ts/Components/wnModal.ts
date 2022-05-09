class wnmodal {
    element: HTMLElement;
    modaldialog: HTMLElement;

    private _backClose = true;
    get backclose() { return this._backClose }
    set backclose(value: boolean) { this._backClose = value; }
    private _showclass: string = "";
    private _hideclass: string = "";

    get showclass() { return this._showclass }
    set showclass(value: string) { this._showclass = value; }

    get hideclass() { return this._hideclass }
    set hideclass(value: string) { this._hideclass = value; }

    beforehide: any;
    private _fadeIn = "animate fadeIn animation-duration-10";
    private _fadeOut = "animate fadeOut animation-duration-10";

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        let elem = this.element.querySelectorAll('[close-parent]');
        for (var i = 0; i < elem.length; i++) elem[i].addEventListener('click', () => { this.hide() });
        if (this.element.hasAttribute('back-close'))
            this._backClose = WNparseBoolean(this.element.getAttribute('back-close'), this._backClose);

        if (this.element.hasAttribute('showclass'))
            this._showclass = WNparseString(this.element.getAttribute('showclass'), this._showclass);

        if (this.element.hasAttribute('hideclass'))
            this._hideclass = WNparseString(this.element.getAttribute('hideclass'), this._hideclass);

        this.element.addEventListener('click', (e) => {
            if (e.target != this.element)
                return;
            if (this._backClose)
                this.hide();
        }, { passive: false });

        this.modaldialog = this.element.querySelector('.modal-dialog');
        //check after hide event
        if (this.element.hasAttribute('onbeforehide'))
            this.beforehide = new Function(this.element.getAttribute('onbeforehide'));

    }

    show() {
        WNRemoveClassList(this.element, this._fadeOut);
        WNRemoveClassList(this.modaldialog, this.hideclass);
        WNRemoveClassList(this.element, "show");

        new Promise<void>((re) => {

            WNAddClassList(this.modaldialog, this.showclass);
            WNAddClassList(this.element, this._fadeIn + " show");

            let ani = this.modaldialog.getAnimations();
            if (ani.length > 0) {
                ani[ani.length - 1].finished.finally(
                    () => {
                        WNRemoveClassList(this.modaldialog, this.showclass);
                    }
                )
            }
        });
    }
    toggle() {
        if (this.element.classList.contains('show'))
            this.hide();
        else
            this.show();
    }
    hide() {
        if (this.beforehide != null)
            if (!this.beforehide())
                return;

        new Promise<void>(() => {
            WNRemoveClassList(this.element, this._fadeIn);
            WNRemoveClassList(this.modaldialog, this.showclass);
            WNAddClassList(this.modaldialog, this.hideclass);
            let ani = this.modaldialog.getAnimations();
            if (ani.length > 0) {
                ani[ani.length - 1].finished.finally(
                    () => {
                        WNAddClassList(this.element, this._fadeOut);
                        if (this.element.getAnimations().length > 0)
                            this.element.getAnimations()[0].finished.finally(
                                () => {
                                    WNRemoveClassList(this.element, "show");
                                });
                        else
                            WNRemoveClassList(this.element, "show");
                    }
                )
            }
            else
                WNRemoveClassList(this.element, "show");
        });
    }
}