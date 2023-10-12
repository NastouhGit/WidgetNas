class WNAccordion implements IWNAccordion {
    public readonly nameType: string = 'WNAccordion';
    public element: HTMLElement;
    public mode: AccordionMode = AccordionMode.single;

    private items: { head: HTMLElement, body: HTMLElement }[];

    public get selectedItem(): { head: HTMLElement, body: HTMLElement } {
        if (this._selectedIndex == -1) return null;
        return this.items[this._selectedIndex];
    };
    public set selectedItem(value: { head: HTMLElement, body: HTMLElement }) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].body == value.body && this.items[i].head == value.head) {
                this.selectedIndex = i;
                break;
            }
        }
    };
    private _selectedIndex: number = -1;
    public get selectedIndex(): number { return this._selectedIndex };
    public set selectedIndex(value: number) {
        if (value < 0) value = -1;
        if (value >= this.items.length) value = this.items.length - 1;

        if (this.beforeCollapse && this.beforeCollapse(this, value) != false)
            return;
        this._selectedIndex = value;
        this.setCollapse();
        this.afterCollapse?.(this, value);
    };
    public beforeCollapse: (t: IWNAccordion, index: number) => boolean;
    public afterCollapse: (t, index) => void;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
    }
    private init() {
        this.items = [];
        let index = 0;
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
                head.setAttribute('index', index.toString());
                head.addEventListener("click", (e) => {
                    this.selectedIndex = WNparseNumber((e.target as HTMLElement).getAttribute('index'), -1);
                })
                this.items.push({ head: head, body: body });
                index++;
            }

        });

        if (this.element.hasAttribute('mode')) this.mode = this.element.getAttribute('mode') == 'multiple' ? AccordionMode.multiple : AccordionMode.single;
        if (this.element.hasAttribute('selected-index')) this.selectedIndex = WNparseNumber(this.element.getAttribute('selected-index'));
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
}