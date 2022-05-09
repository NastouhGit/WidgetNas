class wnconfirm {
    title: string = '';
    body: string | HTMLElement = '';
    buttons: any = [];
    modalclass: string = '';
    headclass: string = '';
    bodyclass: string = '';
    footerclass: string = '';
    showclass = "animation zoomIn";
    closebutton = true;
    element: HTMLElement;
    private modal: wnmodal;
    constructor() {
    }

    async show() {

        if (typeof (this.body) == 'object') {
            this.body = (<HTMLElement>this.body).outerHTML;
        }

        this.element = document.createElement("div");
        this.element.className = `modal darkback ${this.modalclass}`;
        this.element.setAttribute("showclass", this.showclass);

        let modaldialog = document.createElement('div');
        modaldialog.className = "modal-dialog";
        modaldialog.innerHTML = `
        <div class="modal-header ${this.headclass}">
            <h5 class="modal-title">${this.title}</h5>` +
            (this.closebutton ? `<button class="close" close-parent=""></button>` : '') +
            `</div>
        <div class="modal-body ${this.bodyclass}">
            ${this.body}
        </div>`;

        let footer = document.createElement('div');
        footer.className = `modal-footer  ${this.footerclass}`;
        for (var i = 0; i < this.buttons.length; i++) {
            let btn = document.createElement("button");
            btn.className = this.buttons[i].class ?? '';
            btn.innerHTML = this.buttons[i].caption ?? '';
            let click = this.buttons[i]?.click;
            btn.onclick = async () => {
                if (click != null) {
                    let r = await click(this);
                    if (r) {
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

        document.body.appendChild(this.element);
        if (this.modal == null)
            this.modal = new wnmodal(this.element);
        else
            this.modal.element = this.element;
        await this.modal.show();
        modaldialog.focus();
        return "";
    };
}