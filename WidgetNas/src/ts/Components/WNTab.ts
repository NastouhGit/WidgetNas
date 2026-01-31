class WNTab implements IWNTab {
    public readonly nameType: string = 'WNTab';
    public element: HTMLElement;

    public items: { head: HTMLElement, body: HTMLElement }[];

    beforeSelected: (t, index) => boolean;
    selectionChanged: (t) => void;
    onTabAdded: (t, index) => void;

    private _selectedIndex: number = -1;
    public get selectedIndex(): number { return this._selectedIndex }
    public set selectedIndex(value: number) {
        if (this.items.length == 0) return;
        if (value < 0 && this.items.length > 0) value = 0;
        if (value < 0) value = -1;
        if (value >= this.items.length) value = this.items.length - 1;
        if (this.items[value].head.hasAttribute('disabled') || this.items[value].head.classList.contains('disabled'))
            return;

        if (this.beforeSelected && this.beforeSelected(this, value) == false)
            return;
        this._selectedIndex = value;
        this.setCollapse();
        this.selectionChanged?.(this);
    }
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
                x.setAttribute('index', index.toString());
                if (x.hasAttribute("target"))
                    this.items.push({ head: x, body: document.getElementById(x.getAttribute("target")) as HTMLElement });
                else if (index < bodies.length)
                    this.items.push({ head: x, body: bodies[index] as HTMLElement });
                if (this.items[this.items.length - 1].head == x)
                    x.addEventListener("click", (e) => {
                        this.selectedIndex = WNparseNumber((e.target as HTMLElement).getAttribute('index'), -1);
                    })
                index++;

            }
            if (x.tagName == 'BUTTON') (x as HTMLButtonElement).type = 'button';
            
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

    public addTab(caption: string, target: string = '') {

        let cnt = this.element.querySelector('.nav-tab') as HTMLElement;
        if (!cnt) return;
        let x: HTMLElement;
        if (cnt.nodeName == 'UL') {
            x = document.createElement('li');
        }
        else {
            x = document.createElement('button');
            (x as HTMLButtonElement).type = "button";
        }
        x.classList.add('nav-item');
        x.setAttribute('index', this.items.length.toString());
        x.innerHTML = caption;

        x.addEventListener("click", (e) => {
            this.selectedIndex = WNparseNumber((e.target as HTMLElement).getAttribute('index'), -1);
        });
        cnt.appendChild(x);

        if (target!='')
            this.items.push({ head: x, body: document.getElementById(target)});
        else {
            cnt = this.element.querySelector('.tab-content') as HTMLElement;
            let pan = document.createElement('div');
            pan.classList.add('tab-pan');
            cnt.appendChild(pan);
            this.items.push({ head: x, body: pan});
        }
        if (this.selectedIndex == -1) {
            if (this.element.hasAttribute('selected-index'))
                this.selectedIndex = WNparseNumber(this.element.getAttribute('selected-index'));
            else if (this.items.length > 0)
                this.selectedIndex = 0;
        }
        this.onTabAdded?.(this, this.items.length - 1);

    }
    public removeTab(index: number) {
        if (index < 0 || index >= this.items.length) return;
        const { head, body } = this.items[index];
        head.remove();
        body.remove();
        this.items.splice(index, 1);
        if (this.selectedIndex >= this.items.length)
            this.selectedIndex = this.items.length - 1;
        else
            this.setCollapse();
    }

}
(globalThis as any).WNTab = WNTab;