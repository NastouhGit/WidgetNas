class wnmultiselect {
    element: HTMLElement;

    selecteditems: any[];
    selectionchanged: any;
    beforedeselect: any;
    afterdeselect: any;
    max: number = 0;

    private searchbox: HTMLInputElement;
    private selectedarea: HTMLElement;
    private dropdownlist: HTMLElement;

    private dropdown: wndropdown;
    search: wnsearchlist;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        this.selecteditems = [];
        this.max = WNparseNumber(this.element.getAttribute('max'), 0);

        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionchanged = new Function('t', this.element.getAttribute('onselectionchanged'));
        if (this.element.hasAttribute('onbeforedeselect'))
            this.beforedeselect = new Function('t', 'n', 'i', this.element.getAttribute('onbeforedeselect'));
        if (this.element.hasAttribute('onafterdeselect'))
            this.afterdeselect = new Function('t', 'i', this.element.getAttribute('onafterdeselect'));


        this.searchbox = this.element.querySelector('[type=search]');
        this.selectedarea = this.element.querySelector('.selecteditem');
        this.dropdownlist = this.element.querySelector('.dropdown');

        if (this.searchbox == null) {
            this.searchbox = document.createElement("input");
            this.searchbox.type = "search";
        }
        this.searchbox.autocomplete = 'off';
        if (this.selectedarea == null) {
            this.selectedarea = document.createElement("div");
            this.selectedarea.className = "selecteditem";
        }
        if (this.dropdownlist == null) {
            this.dropdownlist = document.createElement("div");
            this.dropdownlist.className = "dropdown";
        }
        this.element.setAttribute('wn-dropdown-event', '');
        this.dropdown = new wndropdown(this.element);

        this.search = new wnsearchlist(this.element);
        if (this.dropdownlist.hasChildNodes())
            this.search.listelement = this.dropdownlist.firstElementChild as HTMLElement;

        this.search.filterchanged = async () => {
            this.dropdown.Show();
        };

        this.searchbox.addEventListener('focus', async () => {
            if (!this.dropdown.element.classList.contains('show')) {
                this.dropdown.HideAllDropDowns();
                this.dropdown.Show();
            }
        });

        this.WaitToInitList();


    }
    private WaitToInitList() {
        let tim = setInterval(() => {
            if (WN[this.search.listelement.id] != null) {
                WN[this.search.listelement.id].selectionchange = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);
            }
        }, 100)
    }
    private selectionchange(t, n) {
        let value = this.search.list.currentvalue;
        let caption = this.search.list.currentcaption;

        if (value == null) value = '';
        let item = { value: value, caption: caption };
        this.SelectByItem(item);
        
    }
    AddSelectedSpan(caption, value) {
        let sp = document.createElement('span');
        sp.innerHTML = caption;
        sp.setAttribute('value', value);
        sp.dir = this.element.dir;

        sp.addEventListener('click', (t) => {
            let node = (<HTMLElement>t.target);
            let item = { value: node.getAttribute('value'), caption: node.innerHTML };
            this.DeselectByItem(item);
        });
        this.selectedarea.appendChild(sp);
    }
    SelectByItem(item) {
        if (this.selecteditems.find((x) => x.value == item.value && x.caption == item.caption) == null) {
            if (this.max > 0 && this.selecteditems.length >= this.max)
                return;
            this.selecteditems.push(item);
            this.AddSelectedSpan(item.caption, item.value);
            if (this.selectionchanged != null)
                this.selectionchanged(this);
        }
    }
    SelectByCaption(caption) {
        let item = this.search.list.elementtoitem(this.search.list.findbytext(caption, false, false));
        this.SelectByItem(item);
    }
    SelectByValue(value) {
        let item = this.search.list.elementtoitem(this.search.list.findbyvalue(value, false));
        this.SelectByItem(item);
    }
    DeselectByItem(item: { value, caption }) {
        if (item == null) return;

        let node;
        let nodes = this.selectedarea.querySelectorAll("span");
        nodes.forEach((x) => {
            if (x.getAttribute('value') == item.value && x.innerHTML == item.caption) {
                node = x;
            }
        })
        
        if (this.beforedeselect != null)
            if (!this.beforedeselect(this, node, item))
                return;

        let idx = this.selecteditems.findIndex((x) => x.value == item.value && x.caption == item.caption);
        if (idx > -1) {
            this.selecteditems.splice(idx, 1);
            node.remove();

            if (this.afterdeselect != null)
                this.afterdeselect(this, item);
        }
    }
    DeselectByCaption(caption: string) {
        let item = this.selecteditems.find((x) => x.caption == caption);
        this.DeselectByItem(item);
    }
    DeselectByValue(value: string) {
        let item = this.selecteditems.find((x) => x.value == value);
        this.DeselectByItem(item);
    }

    setdata(datasource: any[]) {
        this.selecteditems = datasource;
        this.selectedarea.innerHTML = '';
        this.selecteditems.forEach((x) => { this.AddSelectedSpan(x.caption, x.value); })
    }
    GetSelectedValues(): string[] {
        let ret = [];
        this.selecteditems.forEach((x) => { ret.push(x.value); });
        return ret;
    }
    SetSelectedValues(value) {
        this.setdata([]);
        value.forEach((x) => { this.SelectByValue(x); });
    }
    GetSelectedCaptions():string[] {
        let ret = [];
        this.selecteditems.forEach((x) => { ret.push(x.caption); });
        return ret;
    }
    SetSelectedCaptions(value) {
        this.setdata([]);
        value.forEach((x) => { this.SelectByCaption(x); });
    }
}

