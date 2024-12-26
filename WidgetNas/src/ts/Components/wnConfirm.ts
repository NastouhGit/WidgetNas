class WNConfirm implements IWNConfirm {
    public readonly nameType: string = 'WNConfirm';
    public title: string = '';
    public body: string | HTMLElement = '';
    public buttons: { id?: string, caption?: string, class?: string, click?: (t: IWNConfirm) => Promise<boolean> }[] = [];
    public modalClass: string = '';
    public headClass: string = '';
    public bodyClass: string = '';
    public footerClass: string = '';
    public showClass = "animation zoomIn";
    public customModal = "";
    public closeButton = true;
    public values: { [id: string]: any; } = {};
    public parentElement: HTMLElement = document.body;

    public element: HTMLElement;
    private modal: IWNModal;
    constructor() {
        this.title = '';
        this.body = '';
        this.buttons = [];
        this.modalClass = '';
        this.headClass = '';
        this.bodyClass = '';
        this.footerClass = '';
        this.showClass = "animation zoomIn";
        this.closeButton = true;
        this.element = null;
        this.modal = null;
        this.values = {};
    }

    public async show(): Promise<void> {

        if (typeof (this.body) == 'object') {
            this.body = (<HTMLElement>this.body).outerHTML;
        }
        let modaldialog;
        if (this.modal == null) {
            if (this.customModal == '') {
                this.element = document.createElement("div");
                this.element.className = `modal darkback ${this.modalClass}`;
                this.element.setAttribute("showClass", this.showClass);

                modaldialog = document.createElement('div');
                modaldialog.className = "modal-dialog";
                modaldialog.innerHTML = `
        <div class="modal-header ${this.headClass}">
            <h5 class="modal-title">${this.title}</h5>` +
                    (this.closeButton ? `<button class="close" close-parent=""></button>` : '') +
                    `</div>
        <div class="modal-body ${this.bodyClass}">
            ${this.body}
        </div>`;

                let footer = document.createElement('div');
                footer.className = `modal-footer  ${this.footerClass}`;
                for (var i = 0; i < this.buttons.length; i++) {
                    let btn = document.createElement("button");

                    btn.className = this.buttons[i].class ?? '';
                    btn.innerHTML = this.buttons[i].caption ?? '';
                    let click = this.buttons[i]?.click;
                    btn.onclick = async () => {
                        if (click != null) {
                            let r = await click(this);
                            if (r == undefined || r == true) {
                                this.modal.hide();
                                this.element.remove();
                            }
                        }
                        else {
                            this.modal.hide();
                            this.element.remove();
                        }
                    };
                    footer.appendChild(btn);
                }

                modaldialog.appendChild(footer);
                this.element.appendChild(modaldialog);

                this.parentElement.appendChild(this.element);
                this.modal = new WNModal(this.element);
            }
            else {
                this.modal = WN(this.customModal).wn as IWNModal;
                for (var i = 0; i < this.buttons.length; i++) {
                    if (this.buttons[i].id != '') {
                        let button = this.buttons[i];
                        let btn = document.getElementById(this.buttons[i].id);
                        if (btn) {
                            if (button.click != null)
                                btn.onclick = async () => {
                                    let r = await button.click(this);
                                    if (r == undefined || r == true) {
                                        this.modal.hide();
                                    }
                                };
                            else {
                                btn.onclick = async () => {
                                    this.modal.hide();
                                };
                            }
                        }
                    }
                }
            }
        }
        await this.modal.show();
        modaldialog.focus();
    };
}