class WNAccordion implements IWNAccordion {
    public readonly nameType: string = 'WNAccordion';
    public element: HTMLElement;
    public mode: AccordionMode = AccordionMode.single;

    public items: { head: HTMLElement, body: HTMLElement }[];

    public get selectedItem(): { head: HTMLElement, body: HTMLElement } {
        if (this._selectedIndex == -1) return null;
        return this.items[this._selectedIndex];
    }
    public set selectedItem(value: { head: HTMLElement, body: HTMLElement }) {
        if (value.head.classList.contains('collapsed'))
            value.head.classList.remove('collapsed');
        if (value.body.classList.contains('accordion-collapse'))
            value.body.classList.remove('accordion-collapse');

        for (var i = 0; i < this.items.length; i++) {
            if (value.head.id != '') {
                if (this.items[i].head.id == value.head.id) {
                    this.selectedIndex = i;
                    break;
                }
            }
            else if (value.body.id != '') {
                if (this.items[i].body.id == value.body.id) {
                    this.selectedIndex = i;
                    break;
                }
            }
            else {
                if (this.items[i].head.classList.contains('collapsed'))
                    this.items[i].head.classList.remove('collapsed');
                if (this.items[i].body.classList.contains('accordion-collapse'))
                    this.items[i].body.classList.remove('accordion-collapse');

                if (this.items[i].body == value.body && this.items[i].head == value.head) {
                    this.selectedIndex = i;
                    break;
                }
            }
        }
    }
    private _selectedIndex: number = -1;
    public get selectedIndex(): number { return this._selectedIndex }
    public set selectedIndex(value: number) {
        if (value < 0) value = -1;
        if (value >= this.items.length) value = this.items.length - 1;

        let isCollapsed = this.items[value]?.head.classList.contains('collapsed');
        if (isCollapsed && this.beforeCollapse && this.beforeCollapse(this, value) != false)
            return;
        if (!isCollapsed && this.beforeExpand && this.beforeExpand(this, value) != false)
            return;


        this._selectedIndex = value;
        this.setCollapse();
        if (isCollapsed)
            this.afterCollapse?.(this, value);
        else
            this.afterExpand?.(this, value);
    }
    public beforeCollapse: (t: IWNAccordion, index: number) => boolean;
    public afterCollapse: (t, index) => void;
    public beforeExpand: (t: IWNAccordion, index: number) => boolean;
    public afterExpand: (t, index) => void;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
    }
    private init() {
        this.items = [];
        this.element.querySelectorAll('.accordion-item').forEach((x: HTMLElement) => {
            let head = x.querySelector('.accordion-header') as HTMLElement;
            let body = x.querySelector('.accordion-body') as HTMLElement;
            if (head == null) head = x.firstChild as HTMLElement;
            if (head != null) {
                if (body == null)
                    body = head.nextSibling as HTMLElement;
                if (body == null) {
                    body = document.createElement('div');
                    body.className = 'accordion-body';
                    head.after(body);
                }
            }
            head.setAttribute('index', this.items.length.toString());
            head.onclick = (e) => {
                this.selectedIndex = WNparseNumber((e.target as HTMLElement).getAttribute('index'), -1);
            };
            this.items.push({ head: head, body: body });
        });

        if (this.element.hasAttribute('mode')) this.mode = this.element.getAttribute('mode') == 'multiple' ? AccordionMode.multiple : AccordionMode.single;
        if (this.element.hasAttribute('selected-index')) this.selectedIndex = WNparseNumber(this.element.getAttribute('selected-index'));
    }
    public addItem(head: HTMLButtonElement, body: HTMLDivElement, collapsed = false): void {
        let accordion_item = document.createElement('div');
        accordion_item.className = 'accordion-item';
        if (!head.classList.contains('accordion-header'))
            head.classList.add('accordion-header');
        head.type = "button";

        if (!body.classList.contains('accordion-body'))
            body.classList.add('accordion-body');

        if (this.mode == 'single' || collapsed) {
            if (!head.classList.contains('collapsed'))
                head.classList.add('collapsed');

            if (!body.classList.contains('accordion-collapse'))
                body.classList.add('accordion-collapse');
        }
        accordion_item.appendChild(head);
        accordion_item.appendChild(body);
        this.element.appendChild(accordion_item);

        head.setAttribute('index', this.items.length.toString());
        head.onclick = (e) => {
            this.selectedIndex = WNparseNumber((e.target as HTMLElement).getAttribute('index'), -1);
        };
        this.items.push({ head: head, body: body });

    }
    addItemByHtmlText(caption: string, body: string, collapsed = false): void {
        let head = document.createElement('button');
        head.className = 'accordion-header ' + (this.mode == 'single' || collapsed ? 'collapsed' : '');
        head.type = 'button';
        head.innerHTML = caption;

        let ebody = document.createElement('div');
        ebody.className = 'accordion-body ' + (this.mode == 'single' || collapsed ? 'accordion-collapse' : '');
        ebody.innerHTML = body;

        this.addItem(head, ebody);


    }

    private setCollapse(): void {
        if (this.mode == AccordionMode.single) {
            this.items.forEach((x) => {
                x.head.classList.add('collapsed');
                x.body.classList.add('accordion-collapse');
            })
            if (this.selectedIndex > -1) {
                this.items[this.selectedIndex].head.classList.remove('collapsed');
                this.items[this.selectedIndex].body.classList.remove('accordion-collapse');
            }
        }
        else if (this.mode == AccordionMode.multiple) {
            if (this.selectedIndex > -1) {
                this.items[this.selectedIndex].head.classList.toggle('collapsed');
                this.items[this.selectedIndex].body.classList.toggle('accordion-collapse');
            }
        }
    }

    public clear() {
        this.items?.forEach(x => {
            x.head.onclick = null;
            x.head.parentElement.remove();
        });
        this.items = [];
    }
}