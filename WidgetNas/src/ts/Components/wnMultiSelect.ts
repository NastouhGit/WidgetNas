class WNMultiSelect implements IWNMultiSelect {
    public readonly nameType: string = 'WNMultiSelect';
    public element: HTMLElement;

    public selectionChanged: (t: IWNMultiSelect, node: WNTreeNode | WNListNode) => void;
    public beforeDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => Promise<boolean> | boolean;
    public afterDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => void;
    public beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;

    public max: number = 0;
    public search: IWNSearchList;

    private searchbox: HTMLInputElement;
    private selectedarea: HTMLElement;
    private dropdownlist: HTMLElement;

    private dropdown: WNDropdown;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.selectedItems = [];
        this.max = WNparseNumber(this.element.getAttribute('max'), 0);

        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        if (this.element.hasAttribute('onbeforedeselect'))
            this.beforeDeselect = WNGenerateFunction(this.element.getAttribute('onbeforedeselect'), 't,n');
        if (this.element.hasAttribute('onafterdeselect'))
            this.afterDeselect = WNGenerateFunction(this.element.getAttribute('onafterdeselect'), 't,n');


        this.searchbox = this.element.querySelector('[type=search]');
        if (this.element.hasAttribute('search-id'))
            this.searchbox = document.getElementById(this.element.getAttribute('search-id')) as HTMLInputElement;

        this.selectedarea = this.element.querySelector('.selecteditem');
        this.dropdownlist = this.element.querySelector('.dropdown');

        if (this.searchbox == null) {
            this.searchbox = document.createElement("input");
            this.searchbox.type = "search";
            this.element.appendChild(this.searchbox);
        }
        this.searchbox.autocomplete = 'off';

        if (this.selectedarea == null) {
            this.selectedarea = document.createElement("div");
            this.selectedarea.className = "selecteditem";
            this.element.appendChild(this.selectedarea);
        }
        if (this.dropdownlist == null) {
            this.dropdownlist = document.createElement("div");
            this.dropdownlist.className = "dropdown";
            this.element.appendChild(this.dropdownlist);
        }

        this.element.setAttribute('wn-dropdown-event', '');
        this.dropdown = new WNDropdown(this.element);

        this.search = new WNSearchList(this.element);
        this.search.minLength = WNparseNumber(this.element.getAttribute('min-length'), 1);
        if (this.element.hasAttribute('onbeforefilterchanged')) this.beforeFilterChanged = WNGenerateFunction(this.element.getAttribute('onbeforefilterchanged'), 't,text');

        if (this.dropdownlist.hasChildNodes())
            this.search.listElement = this.dropdownlist.firstElementChild as HTMLElement;

        this.search.element.addEventListener("click", (e) => e.stopPropagation());
        this.search.beforeFilterChanged = async (t, text) => {
            if (this.beforeFilterChanged && !this.beforeFilterChanged?.(t, text))
                return false;
            return true;
        };

        this.search.afterFilterChanged = async () => {
            this.dropdown.show();
            return true;
        };

        this.searchbox.addEventListener('focus', async (e) => {
            e.stopPropagation();
            e.preventDefault();

            if (!this.dropdown.element.classList.contains('show')) {
                this.dropdown.hideAllDropDowns();
                this.dropdown.show();
            }
            this.dropdown.setPosition();
        });

        this.WaitToInitList();


    }
    private WaitToInitList() {
        let tim = setInterval(() => {
            if (this.search.list != null) {
                this.search.list.selectionChanged = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);
            }
        }, 100)
    }
    private selectionchange(t: IWNTree | IWNList, n: WNTreeNode | WNListNode) {
        let item: WNGeneralNode = {
            id: n.id,
            text: n.text,
            value: n.value
        };
        if (this.add(item) != null) {
            if (t.nameType != 'WNTree')
                n.element.classList.add('d-none');

            this.dropdown.hide();
            this.selectionChanged?.(this, n);
        }
        t.selectedItem = null;
    }

    private add(node: WNGeneralNode): WNGeneralNode {
        if (this.max != 0 && this.selectedItems.length >= this.max) return null;
        if (this.selectedItems.find(x => x.id == node.id && x.value == node.value && x.text == node.text))
            return null;

        this._selectedItems.push(node);

        let sp = document.createElement('span');
        sp.innerHTML = node.text;
        sp.setAttribute('value', node.value);
        sp.dir = this.element.dir;

        sp.addEventListener('click', (t) => {
            if (this.remove(node)) {
                this.search.list.findByValue(node.value, false)?.element.classList.remove('d-none');
                this.afterDeselect?.(this, node);
                this.selectionChanged?.(this, null);
            }
        });
        this.selectedarea.appendChild(sp);
        node.element = sp;
        return node;
    }
    private remove(node: WNGeneralNode): boolean {
        if (this.beforeDeselect && !this.beforeDeselect?.(this, node))
            return null;

        for (var i = 0; i < this.selectedItems.length; i++) {
            if (this.selectedItems[i].id == node.id &&
                this.selectedItems[i].value == node.value &&
                this.selectedItems[i].text == node.text
            ) {
                node.element.remove();
                this.selectedItems.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    private _selectedItems: WNGeneralNode[];
    public get selectedItems(): WNGeneralNode[] {
        return this._selectedItems;
    }
    public set selectedItems(value: WNGeneralNode[]) {
        this.clearAll();
        for (var i = 0; i < value.length; i++) {
            if (this.add(value[i]) != null) {
                let node = this.search.list.findByValue(value[i].value);
                if (this.add(node) != null)
                    node.element.classList.add('d-none');
            }
        }
    }
    public get selectedValue(): string[] {
        let ret: string[] = [];
        this.selectedItems.forEach(x => ret.push(x.value));
        return ret;
    }
    public set selectedValue(value: string[]) {
        this.clearAll();
        for (var i = 0; i < value.length; i++) {
            let node = this.search.list.findByValue(value[i]);
            if (node) {
                let item: WNGeneralNode = {
                    id: node.id,
                    text: node.text,
                    value: node.value
                };
                if (this.add(item) != null)
                    node.element.classList.add('d-none');
            }
        }
    }
    private clearAll() {
        this._selectedItems = [];
        if (this.selectedarea)
            this.selectedarea.innerHTML = '';
        this.search?.list?.element.querySelectorAll('.d-none').forEach(x => x.classList.remove('d-none'));
    }
    public clearSearch(): void {
        this.searchbox.value = '';
    }
}

