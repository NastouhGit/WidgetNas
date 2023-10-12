class WNTab implements IWNTab {
    public readonly nameType: string = 'WNTab';
    public element: HTMLElement;

    private items: { head: HTMLElement, body: HTMLElement }[];

    beforeSelected: (t, index) => boolean;
    selectionChanged: (t) => void;

    private _selectedIndex: number = -1;
    public get selectedIndex(): number { return this._selectedIndex };
    public set selectedIndex(value: number) {
        if (value < 0 && this.items.length > 0) value = 0;
        if (value < 0) value = -1;
        if (value >= this.items.length) value = this.items.length - 1;
        if (this.items[value].head.hasAttribute('disabled') || this.items[value].head.classList.contains('disabled'))
            return;

        if (this.beforeSelected && this.beforeSelected(this, value) != false)
            return;
        this._selectedIndex = value;
        this.setCollapse();
        this.selectionChanged?.(this);
    };
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
    }
    private init() {
        this.items = [];
        let index = 0;
        let heads = this.element.querySelectorAll('.nav-item');
        let bodies = this.element.querySelectorAll('.tab-pan');
        heads.forEach((x: HTMLElement) => {
            if (!x.hasAttribute('wn-type')) {
                if (index < bodies.length) {
                    x.setAttribute('index', index.toString());
                    x.addEventListener("click", (e) => {
                        this.selectedIndex = WNparseNumber((e.target as HTMLElement).getAttribute('index'), -1);
                    })

                    this.items.push({ head: x, body: bodies[index] as HTMLElement });
                    index++;
                }
            }
        });


        if (this.element.hasAttribute('selected-index'))
            this.selectedIndex = WNparseNumber(this.element.getAttribute('selected-index'));
        else if (this.items.length > 0)
            this.selectedIndex = 0;
    }
    private setCollapse(): void {
        this.items.forEach((x) => {
            x.head.classList.remove('show');
            x.body.classList.remove('show');
        })
        if (this.selectedIndex > -1) {
            this.items[this.selectedIndex].head.classList.add('show');
            this.items[this.selectedIndex].body.classList.add('show');
        }
    }
}
