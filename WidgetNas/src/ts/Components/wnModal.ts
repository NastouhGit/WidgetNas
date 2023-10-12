class WNModal implements IWNModal {
    public readonly nameType: string = 'WNModal';
    public element: HTMLElement;

    public backClose: boolean = true;
    public showClass: string = "";
    public hideClass: string = "";

    public beforeShow: (t) => {};
    public afterShow: (t) => {};

    public beforeHide: (t) => {};
    public afterHide: (t) => {};

    public values: WNDictionary;

    private modalDialog: HTMLElement;

    private _fadeIn = "animate fadeIn animation-duration-10";
    private _fadeOut = "animate fadeOut animation-duration-10";

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        let elem = this.element.querySelectorAll('[close-parent]');
        for (var i = 0; i < elem.length; i++) elem[i].addEventListener('click', () => { this.hide() });

        if (this.element.hasAttribute('back-close')) this.backClose = WNparseBoolean(this.element.getAttribute('back-close'), this.backClose);
        if (this.element.hasAttribute('show-class')) this.showClass = WNparseString(this.element.getAttribute('show-class'), this.showClass);
        if (this.element.hasAttribute('hide-class')) this.hideClass = WNparseString(this.element.getAttribute('hide-class'), this.hideClass);

        this.element.addEventListener('click', (e) => {
            if (e.target != this.element)
                return;
            if (this.backClose)
                this.hide();
            e.stopPropagation();
        }, { passive: false });

        this.modalDialog = this.element.querySelector('.modal-dialog');
        //check after hide event
        if (this.element.hasAttribute('onaftershow')) this.afterShow = WNGenerateFunction(this.element.getAttribute('onaftershow'), 't');
        if (this.element.hasAttribute('onbeforeshow')) this.beforeShow = WNGenerateFunction(this.element.getAttribute('onbeforeshow'), 't');
        if (this.element.hasAttribute('onafterhide')) this.afterHide = WNGenerateFunction(this.element.getAttribute('onafterhide'), 't');
        if (this.element.hasAttribute('onbeforehide')) this.beforeHide = WNGenerateFunction(this.element.getAttribute('onbeforehide'), 't');

    }

    public async show() {
        if (this.beforeShow && !this.beforeShow?.(this))
            return;

        WNRemoveClassList(this.element, this._fadeOut);
        WNRemoveClassList(this.modalDialog, this.hideClass);
        WNRemoveClassList(this.element, "show");

        await new Promise<void>(() => {

            WNAddClassList(this.modalDialog, this.showClass);
            WNAddClassList(this.element, this._fadeIn + " show");

            let ani = this.modalDialog.getAnimations();
            if (ani.length > 0) {
                ani[ani.length - 1].finished.finally(
                    () => {
                        WNRemoveClassList(this.modalDialog, this.showClass);
                    }
                )
            }
        });
        this.afterShow?.(this);
    }
    public toggle() {
        if (this.element.classList.contains('show'))
            this.hide();
        else
            this.show();
    }
    public async hide() {
        if (this.beforeHide && !this.beforeHide?.(this))
            return;

        await new Promise<void>(() => {
            WNRemoveClassList(this.element, this._fadeIn);
            WNRemoveClassList(this.modalDialog, this.showClass);
            WNAddClassList(this.modalDialog, this.hideClass);
            let ani = this.modalDialog.getAnimations();
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
        this.afterHide?.(this);
    }
}