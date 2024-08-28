class WNList implements IWNList {
    public readonly nameType: string = 'WNList';
    public element: HTMLElement;
    public dataSource: WNListNode[];

    public checkbox: boolean = false;
    public checkboxclass: string = "";

    public beforeClick: (t: IWNList, node: WNListNode, e: MouseEvent) => boolean;
    public afterClick: (t: IWNList, node: WNListNode, e: MouseEvent) => void;
    public dblClick: (t: IWNList, node: WNListNode, e: MouseEvent) => void;
    public selectionChanged: (t: IWNList, node: WNListNode) => void;
    public checkChanged: (t: IWNList, node: WNListNode) => void;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
            if (this.checkbox == true)
                this.redraw();
        }
    }
    private init() {
        if (this.element.hasAttribute('checkbox'))
            this.checkbox = WNparseBoolean(this.element.getAttribute('checkbox'), false);
        if (this.element.hasAttribute('checkbox-class'))
            this.checkboxclass = this.element.getAttribute('checkbox-class');

        this.element.classList.add('list');
        this.element.classList.add('list-hover');




        //assign events
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeClick = WNGenerateFunction(this.element.getAttribute('onbeforeclick'), 't,n,e');
        if (this.element.hasAttribute('onafterclick'))
            this.afterClick = WNGenerateFunction(this.element.getAttribute('onafterclick'), 't,n,e');
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        if (this.element.hasAttribute('ondblclick')) {
            this.dblClick = WNGenerateFunction(this.element.getAttribute('ondblclick'), 't,n,e');
            this.element.ondblclick = null;
        }
        if (this.element.hasAttribute('oncheckchanged'))
            this.checkChanged = WNGenerateFunction(this.element.getAttribute('oncheckchanged'), 't,n');


        this.selectedItem = null;
        this.initDataSource();
        this.initItems();

    }
    private initDataSource() {
        this.dataSource = [];
        let items;
        if (this.element.tagName == 'UL')
            items = this.element.querySelectorAll('li');
        else if (this.element.tagName == 'TABLE') {
            let tbody = this.element.querySelector('tbody') as HTMLElement;
            if (!tbody)
                tbody = this.element;
            items = tbody.querySelectorAll('tr');
        }
        else if (this.element.tagName == 'DIV')
            items = this.element.querySelectorAll('div');
        else
            return;


        for (var i = 0; i < items.length; i++) {
            let itemelement = items[i] as HTMLElement;
            let image = itemelement.querySelector('img')?.getAttribute('src') ?? itemelement.querySelector('i')?.outerHTML ?? '';
            let link = itemelement.querySelector('a')?.getAttribute('href') ?? '';
            let item: WNListNode = {
                id: i + 1,
                index: i + 1,
                text: itemelement.textContent,
                html: itemelement.innerHTML,
                value: itemelement.getAttribute('value') ?? itemelement.textContent,
                link: link,
                image: image,
                element: itemelement
            };
            this.dataSource.push(item);
            itemelement.setAttribute('item-id', item.id.toString());
        }
    }

    private initItem(node: WNListNode): void {
        //Add Click and DblClick for Li
        node.element.removeEventListener("click", (e) => { this.click(node, e); });
        node.element.removeEventListener("dblclick", (e) => { this.dblclick(node, e); });
        node.element.addEventListener("click", (e) => { this.click(node, e); }, false);
        node.element.addEventListener("dblclick", (e) => { this.dblclick(node, e); }, false);

        //Check Selected Node
        if (node.element.classList.contains('active'))
            this.selectedItem = node;
    }
    private initItems(): void {
        for (var i = 0; i < this.dataSource.length; i++) {
            let node = this.dataSource[i];
            this.initItem(node);
        }
    }

    private lastNodeClick: WNListNode;
    private lastNodeTime: number = 0;

    private click(node: WNListNode, e: MouseEvent): void {
        e.stopPropagation();
        if (navigator.maxTouchPoints > 0) {
            if (this.lastNodeClick == node && (Date.now() - this.lastNodeTime) < 400) {
                this.dblclick(node, e);
                return;
            }
            this.lastNodeTime = Date.now();
            this.lastNodeClick = node;
        }
        if (WNCheckReadOnlyDisabled(this.element))
            return;
        if (this.beforeClick && !this.beforeClick(this, node, e))
            return;
        this.select(node);
        this.afterClick?.(this, node, e);
    }

    private dblclick(node: WNListNode, e: MouseEvent): void {
        e.stopPropagation();
        if (WNCheckReadOnlyDisabled(this.element))
            return;
        this.select(node);
        this.dblClick?.(this, node, e);
    }


    private _selectedItem: WNListNode = null;
    public get selectedItem(): WNListNode { return this._selectedItem };
    public set selectedItem(value: WNListNode) { this.select(value); };

    public get selectedValue(): string { return this._selectedItem?.value; };
    public set selectedValue(value: string) {
        this.findByValue(value, true);
    };

    public get selectedIndex(): number { return this.selectedItem?.index ?? -1 };
    public set selectedIndex(value: number) {
        let f = this.dataSource.find(x => x.index == value);
        if (f) this.select(f);
    };

    public get checkedItems(): WNListNode[] {
        let ret: WNListNode[] = [];
        for (var i = 0; i < this.dataSource.length; i++) {
            let inp = this.dataSource[i].element.querySelector('input[type=checkbox]') as HTMLInputElement;
            if (inp.checked)
                ret.push(this.dataSource[i]);
        }
        return ret;
    };
    public set checkedItems(value: WNListNode[]) {
        this.checkedClear();

        for (var i = 0; i < value.length; i++) {
            let inp = value[i].element.querySelector('input[type=checkbox]') as HTMLInputElement;
            if (inp)
                inp.checked = true;
        }
    };

    public get checkedValues(): string[] {
        let ret: string[] = [];
        let checked = this.checkedItems;
        for (var i = 0; i < checked.length; i++) ret.push(checked[i].value)
        return ret;
    };
    public set checkedValues(value: string[]) {
        let checked: WNListNode[] = [];
        for (var i = 0; i < value.length; i++) {
            let f = this.dataSource.find(x => x.value == value[i]);
            if (f) checked.push(f);

        }
        this.checkedItems = checked;
    };

    public select(node: WNListNode): void {
        if (node == this.selectedItem) return;
        if (node == null) {
            this.element.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
            this._selectedItem = null;
            return;
        }
        if (node.element.hasAttribute('disabled') || node.element.classList.contains('disabled'))
            return;
        this.element.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
        //list-active
        node.element.classList.add('active');
        this._selectedItem = node;
        this.selectionChanged?.(this, node);
    }

    public findByText(text: string, contains?: boolean, select?: boolean): WNListNode[] {
        if (contains) text = text.toLowerCase();
        let find = this.dataSource.filter(x => contains ? x.text.toLowerCase().includes(text.toLowerCase()) : x.text == text);
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }
    public findByValue(value: string, select?: boolean): WNListNode {
        let find = this.dataSource.find(x => x.value == value);
        if (select && find)
            this.select(find);
        return find;
    }
    public findByTextOrValue(text: string, contains?: boolean, select?: boolean): WNListNode[] {
        let find = this.dataSource.filter(x => (contains ? x.text.includes(text) : x.text == text) || x.value == text);
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }
    public filterByText(text: string, contains?: boolean): void {
        if (text == '') {
            this.element.querySelectorAll('li,tr,.list-item').forEach(x => x.classList.remove('hide', 'first-child', 'last-child'));
            return;
        }
        let find = this.findByText(text, contains, false);
        this.element.querySelectorAll('li,tr,.list-item').forEach(x => x.classList.add('hide'));
        if (find.length > 0) {
            for (var i = 0; i < find.length; i++) {
                let tnode = find[i];
                tnode.element.classList.remove('hide');
            }
            find[0].element.classList.add('first-child');
            find[find.length - 1].element.classList.add('last-child');
        }

    }


    //DataSource Managment
    public addToDataSource(text: string, link: string, value: string, image: string): WNListNode {
        try {

            let item: WNListNode = {
                id: 0,
                index: 0,
                html: text,
                link: link,
                value: value ?? text,
                image: image,
                element: null,
                text: ''
            };
            this.dataSource.forEach((x) => { item.id = x.id > item.id ? x.id : item.id });
            item.id++;
            item.index = this.dataSource.length;

            let elem = this.nodeToHtmlElement(item);

            item.text = elem.textContent;
            item.element = elem;

            this.initItem(item);
            this.element.appendChild(item.element);
            this.dataSource.push(item);
            return item;
        } catch (e) {
            console.error(e);
        }
        return null;
    }
    private nodeToHtmlElement(node: WNListNode): HTMLElement {
        let item: HTMLElement;
        if (this.element.tagName == 'UL')
            item = document.createElement('li');
        else if (this.element.tagName == 'TABLE')
            item = document.createElement('TR');
        else if (this.element.tagName == 'DIV')
            item = document.createElement('div');

        let tItem = item;

        if (this.element.tagName == 'TABLE') {
            let td = document.createElement('td');
            item.appendChild(td);
            tItem = td;

        }
        if (this.checkbox) {
            let label = document.createElement('label');
            label.setAttribute('for', this.element.id + '_' + node.id);
            tItem.appendChild(label);
            tItem = label;
        }

        if (node.link && node.link != '') {
            let link = document.createElement('a');
            link.href = node.link;
            tItem.appendChild(link);
            tItem = link;
        }
        if (node.image && node.image != '') {
            if (node.image.trim().startsWith('<'))
                tItem.innerHTML += node.image;
            else
                tItem.innerHTML += `<img src="${node.image}" loading="lazy"/>`;
        }
        tItem.innerHTML += node.html == '' ? node.text : node.html;
        tItem.setAttribute('item-id', item.id.toString());

        if (this.checkbox) {
            let ttItem: HTMLElement;
            if (this.element.tagName == 'TABLE') {
                let td = document.createElement('td');
                tItem.appendChild(td);
                ttItem = td;
            }
            let inp = document.createElement('input');
            inp.type = 'checkbox';
            inp.className = 'item-check ' + this.checkboxclass;
            inp.id = this.element.id + '_' + node.id;
            inp.addEventListener("input", () => this.checkChanged?.(this, node));
            if (ttItem != undefined) {
                ttItem.appendChild(inp);
            }
            else
                ttItem = inp;
            tItem.insertAdjacentElement('afterbegin', ttItem);
        }
        node.text = tItem.textContent;
        node.element = item;
        return item;
    }
    public removeFromDataSource(node: WNListNode): boolean {
        try {
            node.element?.removeEventListener("click", (e) => { this.click(node, e); });
            node.element?.removeEventListener("dblclick", (e) => { this.dblclick(node, e); });
            node.element?.remove();
            let list = this.dataSource;
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == node.id) {
                    list.splice(i, 1);
                    break;
                }
            }
        } catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    public updateNodeElement(node: WNListNode): void {
        node.element.innerHTML = this.nodeToHtmlElement(node).innerHTML;
    }
    public setDataSourceByItem(dataSource: any[], displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void {
        if (!append)
            this.clearDataSource();

        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            this.addToDataSource(item[displayFieldName] ?? null, item[linkFieldName] ?? null, item[valueFieldName] ?? null, item[imageFieldName] ?? null);
        }
        this.selectedItem = null;
    }

    public setDataSource(dataSource: WNListNode[], append?: boolean): void {
        if (!append)
            this.clearDataSource();

        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            this.addToDataSource(item['html'] ?? null, item['link'] ?? null, item['value'] ?? null, item['image'] ?? null);
        }
        this.selectedItem = null;
    }

    private clearDataSource() {
        while (this.dataSource.length > 0) this.removeFromDataSource(this.dataSource[0]);
    }

    public orderDataSourceByText(desc: boolean = false): void {
        this.dataSource.sort((x, y) => {
            if (x.text > y.text)
                return desc ? -1 : 1;
            else if (x.text < y.text)
                return desc ? 1 : -1;
            return 0;
        });
        this.reindex();
        this.redraw();
    }
    public orderDataSourceByValue(desc: boolean = false): void {
        this.dataSource.sort((x, y) => {
            if (x.value > y.value)
                return desc ? -1 : 1;
            else if (x.value < y.value)
                return desc ? 1 : -1;
            return 0;
        });
        this.reindex();
        this.redraw();
    }
    private redraw() {
        this.element.innerHTML = '';
        this.dataSource.forEach((item) => {
            let elem = this.nodeToHtmlElement(item);
            item.element = elem;
            this.element.appendChild(elem);
            this.initItem(item);
        });
    }
    private reindex() {
        for (var i = 0; i < this.dataSource.length; i++)
            this.dataSource[i].index = i + 1;
    }


    public checkedClear(): void {
        this.element.querySelectorAll('input.item-check').forEach((x: HTMLInputElement) => x.checked = false);
    }
    public checkedAll(): void {
        this.element.querySelectorAll('input.item-check').forEach((x: HTMLInputElement) => x.checked = true);
    }
    public checkedInvert(): void {
        this.element.querySelectorAll('input.item-check').forEach((x: HTMLInputElement) => x.checked = !x.checked);
    }


}