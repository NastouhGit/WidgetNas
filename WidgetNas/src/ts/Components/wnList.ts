class wnlist {
    element: HTMLElement;

    private _currentSelect: HTMLElement = null;
    get selecteditem() { return this._currentSelect; }
    set selecteditem(value: HTMLElement) { this.select(value); }

    get selectedindex() { return WNparseNumber(this._currentSelect?.getAttribute('index'), -1); }
    set selectedindex(value: number) {
        this._items.forEach((x) => {
            if (WNparseNumber(x.getAttribute('index')) == value) {
                this.select(x);
                return;
            }
        });
    }

    get currentvalue() { return this._currentSelect?.getAttribute('wn-list-value'); }
    get currentcaption() { return this._currentSelect?.innerText; }



    beforeclick: any;
    afterclick: any;
    selectionchange: any;
    //private
    _listType: string = '';
    _items: HTMLElement[] = [];

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Init();
        }
    }
    private Init() {
        this._listType = this.element.nodeName;
        this.element.classList.add('list');
        this.element.classList.add('list-hover');

        let _items;
        if (this._listType == 'UL')
            _items = this.element.querySelectorAll('li');
        else if (this._listType == 'DIV')
            _items = this.element.querySelectorAll('.list-item');
        else if (this._listType == 'TABLE')
            _items = this.element.querySelectorAll('tr');
        for (var i = 0; i < _items.length; i++) {
            _items[i].setAttribute('index', i.toString());
            _items[i].addEventListener('click', (e) => { this.click(e) })
            this._items.push(_items[i]);
        }


        //assign events
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeclick = new Function('t', 'e', this.element.getAttribute('onbeforeclick'));
        if (this.element.hasAttribute('onafterclick'))
            this.afterclick = new Function('t', 'e', this.element.getAttribute('onafterclick'));
        if (this.element.hasAttribute('onselectionchange'))
            this.selectionchange = new Function('t', 'n', this.element.getAttribute('onselectionchange'));
    }

    click(e: MouseEvent): void {
        let node = e.target as HTMLElement;
        if (this._listType == 'TABLE') {
            if (node.parentElement.tagName == 'THEAD')
                return;
            if (node.tagName == 'TD')
                node = node.parentElement;
        }
        if (this.beforeclick != null)
            if (!this.beforeclick(this, e))
                return;
        this.select(node);
        if (this.afterclick != null) this.afterclick(this, e);
    }

    select(node: HTMLElement) {
        if (node == this._currentSelect)
            return;

        this.element.querySelectorAll('.list-active').forEach((x) => x.classList.remove('list-active'));
        node.classList.add('list-active');

        this._currentSelect = node;
        if (this.selectionchange != null) this.selectionchange(this, node);
    }


    findbytext(text: string, contains: boolean = true, select: boolean = true): HTMLElement {
        let selectedNode = null;
        this._items.forEach((x) => {
            if (x.innerText == text || (x.innerText.includes(text) && contains)) {
                selectedNode = x;
                if (select)
                    this.select(selectedNode);
                return selectedNode;
            }
        });
        return selectedNode;
    }
    findbyvalue(value: string, select: boolean = true): HTMLElement {
        let selectedNode = null;
        this._items.forEach((x) => {
            if (x.getAttribute('value') == value) {
                selectedNode = x;
                if (select)
                    this.select(selectedNode);
                return selectedNode;
            }
        });
        return selectedNode;

    }
    filterbytext(text: string, contains: boolean = true) {
        text = text.toLowerCase();

        for (var i = 0; i < this._items.length; i++) {
            let s = this._items[i].innerText.toLowerCase();
            if ((contains && s.includes(text)) || (s == text))
                this._items[i].classList.remove('d-none');
            else
                this._items[i].classList.add('d-none');
        }
    }
    addrow(text: string, value: string = '') {
        let elem: HTMLElement;
        if (this._listType == 'UL')
            elem = document.createElement('li');
        else if (this._listType == 'DIV') {
            elem = document.createElement('div');
            elem.classList.add('');
        }
        else if (this._listType == 'TABLE') {
            elem = document.createElement('tr');
        }
        elem.innerHTML = text;
        elem.setAttribute('index', this._items.length.toString());
        elem.setAttribute('value', value);
        elem.addEventListener('click', (e) => { this.click(e) });

        if (this._listType == 'TABLE') {
            let tbody = this.element.querySelector('tbody');
            if (tbody == null)
                this.element.appendChild(elem);
            else
                tbody.appendChild(elem);
        }
        else
            this.element.appendChild(elem);


        this._items.push(elem);

        return elem;
    }
    settext(text: string, index: number) {
        let elem = this.element.querySelector(`li[index='${index}']`);
        if (elem != null)
            elem.innerHTML = text;
    }
    setvalue(text: string, index: number) {
        let elem = this.element.querySelector(`li[index='${index}']`);
        if (elem != null)
            elem.setAttribute('value', text);
    }
    removerow(index: number) {
        if (index < 0 || index >= this._items.length)
            return;
        this._items[index].remove();
        this.reindex();
    }
    order(desc = false) {
        this._items.sort((x, y) => {
            if (x.innerText > y.innerText)
                return desc ? -1 : 1;
            else if (x.innerText < y.innerText)
                return desc ? 1 : -1;
            return 0;
        });
        this.reindex();
        this.refresh();
    }
    reindex() {
        for (var i = 0; i < this._items.length; i++) {
            this._items[i].setAttribute('index', i.toString());
        }
    }
    refresh() {
        let tbody = this.element.querySelector('tbody') as HTMLElement;
        if (this._listType == 'TABLE') {
            if (tbody == null)
                tbody = this.element;
        }
        else
            tbody = this.element;

        tbody.innerHTML = '';

        for (var i = 0; i < this._items.length; i++) {
            tbody.appendChild(this._items[i]);
        }
    }

    setdata(datasource: any[], displayfield: string, valuefield: string, append: boolean = false) {
        if (!append) {
            this._items = [];
            this.refresh();
        }
        datasource.forEach((x) => {
            this.addrow(x[displayfield], x[valuefield]);
        });
    }
}