class WNTree implements IWNTree {
    public readonly nameType: string = 'WNTree';
    public element: HTMLUListElement;
    public dataSource: WNTreeNode[];
    public selectedItem: WNTreeNode;

    public beforeClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    public afterClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    public selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    public beforeCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    public afterCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    public beforeExpand: (t: IWNTree, node: WNTreeNode) => void;
    public afterExpand: (t: IWNTree, node: WNTreeNode) => void;
    public beforeToggle: (t: IWNTree, node: WNTreeNode) => void;
    public afterToggle: (t: IWNTree, node: WNTreeNode) => void;

    //private
    //private lastClickID = '';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLUListElement;
            this.Init();
        }
    }
    private Init() {
        this.selectedItem = null;
        this.initDataSource();
        this.initItems();

        if (this.element.classList.contains('collapsed-all'))
            this.collapsedAll();

        //assign events
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeClick = WNGenerateFunction(this.element.getAttribute('onbeforeclick'), 't,n,e');
        if (this.element.hasAttribute('onafterclick'))
            this.afterClick = WNGenerateFunction(this.element.getAttribute('onafterclick'), 't,n,e');
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        if (this.element.hasAttribute('onbeforecollapsed'))
            this.beforeCollapsed = WNGenerateFunction(this.element.getAttribute('onbeforecollapsed'), 't,n');
        if (this.element.hasAttribute('onaftercollapsed'))
            this.afterCollapsed = WNGenerateFunction(this.element.getAttribute('onaftercollapsed'), 't,n');
        if (this.element.hasAttribute('onbeforeexpand'))
            this.beforeExpand = WNGenerateFunction(this.element.getAttribute('onbeforeexpand'), 't,n');
        if (this.element.hasAttribute('onafterexpand'))
            this.afterExpand = WNGenerateFunction(this.element.getAttribute('onafterexpand'), 't,n');
        if (this.element.hasAttribute('onbeforetoggle'))
            this.beforeToggle = WNGenerateFunction(this.element.getAttribute('onbeforetoggle'), 't,n');
        if (this.element.hasAttribute('onaftertoggle'))
            this.afterToggle = WNGenerateFunction(this.element.getAttribute('onaftertoggle'), 't,n');
    }
    private initDataSource(parentNode?: WNTreeNode, parent: HTMLOListElement | HTMLUListElement = undefined) {
        if (parent == undefined) {
            parent = this.element;
            this.dataSource = [];
        }
        for (var i = 0; i < parent.children.length; i++) {
            let itemelement = parent.children[i].querySelector('item') as HTMLElement;
            let image = itemelement.querySelector('img')?.getAttribute('src') ?? itemelement.querySelector('i')?.outerHTML ?? '';
            let link = itemelement.querySelector('a')?.getAttribute('href') ?? '';
            let item: WNTreeNode = {
                id: (parentNode?.id ?? 0) * 10000 + i + 1,
                text: itemelement.textContent,
                html: itemelement.innerHTML,
                value: itemelement.getAttribute('value'),
                link: link,
                image: image,
                liElement: itemelement.parentElement as HTMLLIElement,
                element: itemelement,
                parentNode: parentNode,
                children: []
            };
            itemelement.setAttribute('item-id', item.id.toString());

            if (parentNode == null)
                this.dataSource.push(item);
            else
                parentNode.children.push(item);

            let ul = itemelement.parentElement.querySelector('ul') ?? parent.children[i].querySelector('ol');
            if (ul != null) {
                this.initDataSource(item, ul);
            }
        }
    }
    private initItem(node: WNTreeNode): void {
        //Add Click and DblClick for Li
        node.liElement.removeEventListener("click", (e) => { this.click(node, e); });
        node.liElement.removeEventListener("dblclick", (e) => { this.dblclick(node, e); });
        node.liElement.addEventListener("click", (e) => { this.click(node, e); }, false);
        node.liElement.addEventListener("dblclick", (e) => { this.dblclick(node, e); }, false);

        //Checks if the node has children, adds or removes the expandable class.
        if (this.element.classList.contains('tree-expand-item'))
            node.liElement.classList.remove('expandable');
        else {
            if (node.children.length > 0)
                node.liElement.classList.add('expandable');
            else
                node.liElement.classList.remove('expandable');

            node.parentNode?.liElement.classList.add('expandable');
        }
        //Check Selected Node
        if (node.element.classList.contains('active'))
            this.selectedItem = node;
    }
    private initItems(parentNode?: WNTreeNode[]): void {
        if (parentNode == undefined) {
            parentNode = this.dataSource;
        }
        for (var i = 0; i < parentNode.length; i++) {
            let node = parentNode[i];
            this.initItem(node);

            if (node.children.length > 0)
                this.initItems(node.children);

        }
    }

    private lastNodeClick: WNTreeNode;
    private lastNodeTime: number = 0;
    private click(node: WNTreeNode, e: MouseEvent): void {
        e.stopPropagation();
        if (navigator.maxTouchPoints > 0) {
            if (this.lastNodeClick == node && (Date.now() - this.lastNodeTime) < 400) {
                this.dblclick(node, e);
                return;
            }
            this.lastNodeTime = Date.now();
            this.lastNodeClick = node;
        }
        this.beforeClick?.(this, node, e);


        if (node.children.length > 0) {
            if (this.selectedItem != node)
                this.select(node);
            else
                if ((node.liElement.dir == 'ltr' && e.offsetX < parseInt(getComputedStyle(node.liElement).paddingInlineStart) * 1.1) ||
                    ((node.liElement.clientWidth - e.offsetX) < parseInt(getComputedStyle(node.liElement).paddingInlineStart) * 1.1))
                    this.toggle(node);

        }
        else
            this.select(node);

        this.afterClick?.(this, node, e);
    }
    private dblclick(node: WNTreeNode, e: MouseEvent): void {
        e.stopPropagation();
        if (node.children.length == 0) return;
        this.toggle(node);
    }

    public select(node: WNTreeNode): void {
        if (node.element.hasAttribute('disabled') || node.element.classList.contains('disabled'))
            return;
        if (node == this.selectedItem) return;
        this.element.querySelectorAll('.active').forEach(x => x.classList.remove('active'));
        node.element.classList.add('active');
        this.selectedItem = node;
        this.expandToParent(node);
        this.selectionChanged?.(this, node);
    }
    public toggle(node: WNTreeNode): void {
        if (this.element.classList.contains('tree-expand-item')) return;
        this.beforeToggle?.(this, node);

        if (node.liElement.classList.contains('collapsed'))
            this.expand(node);
        else
            this.collapse(node);

        this.afterToggle?.(this, node);
    }
    public collapse(node: WNTreeNode): void {
        if (this.element.classList.contains('tree-expand-item')) return;
        this.beforeCollapsed?.(this, node);

        node.liElement.classList.add('collapsed');

        this.afterCollapsed?.(this, node);
    }
    public collapseWithChild(node: WNTreeNode): void {
        this.collapse(node);
        for (var i = 0; i < node.children.length; i++) {
            this.collapseWithChild(node.children[i]);
        }
    }
    public collapsedAll(): void {
        for (var i = 0; i < this.dataSource.length; i++) {
            this.collapseWithChild(this.dataSource[i]);
        }
    }
    public expand(node: WNTreeNode): void {
        if (this.element.classList.contains('tree-expand-item')) return;
        this.beforeExpand?.(this, node);

        node.liElement.classList.remove('collapsed');

        this.afterExpand?.(this, node);

    }
    public expandToParent(node: WNTreeNode): void {
        let tNode = node;
        while (tNode != null) {
            this.expand(tNode);
            tNode = tNode.parentNode;
        }
    }
    public expandChilds(node: WNTreeNode): void {
        this.expand(node);
        for (var i = 0; i < node.children.length; i++) {
            this.expandChilds(node.children[i]);
        }
    }
    public expandAll(): void {
        for (var i = 0; i < this.dataSource.length; i++) {
            this.expandChilds(this.dataSource[i]);
        }
    }

    public findByText(text: string, contains: boolean = false, select: boolean = false): WNTreeNode[] {
        let find = WNFindTreeArray(this.dataSource, "text", '', text, contains, true, "children") as WNTreeNode[];
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }
    public findByValue(value: string, select?: boolean): WNTreeNode {
        let find = WNFindTreeArray(this.dataSource, "value", '', value, false, false, "children") as WNTreeNode[];
        if (find.length > 0) {
            if (select)
                this.select(find[0]);
            return find[0];
        }
        return null;
    }
    public findByTextOrValue(text: string, contains: boolean = false, select: boolean = false): WNTreeNode[] {
        let find = WNFindTreeArray(this.dataSource, "text", "value", text, contains, true, "children") as WNTreeNode[];
        if (select && find.length > 0)
            this.select(find[0]);
        return find;
    }

    public filterByText(text: string, contains?: boolean): void {
        if (text == '') {
            this.element.querySelectorAll('li').forEach(x => x.classList.remove('hide'));
            return;
        }
        let find = this.findByText(text, contains, false);
        this.element.querySelectorAll('li').forEach(x => x.classList.add('hide'));
        if (find.length > 0) {
            for (var i = 0; i < find.length; i++) {
                let tnode = find[i];
                while (tnode != null) {
                    tnode.liElement.classList.remove('hide');
                    tnode = tnode.parentNode;
                }
            }
        }
        this.expandAll();
    }

    public addToDataSource(parent: WNTreeNode, text: string, link: string, value: string, image: string): WNTreeNode {
        try {

            let item: WNTreeNode = {
                id: 0,
                html: text,
                link: link,
                value: value,
                image: image,
                children: [],
                element: null,
                liElement: null,
                parentNode: parent,
                text: WNHtmlToText(text)

            };

            let elem = this.treeNodeToHtmlElement(item);
            item.element = elem;

            let ul = this.element as HTMLElement;
            let samePlace: WNTreeNode[];
            if (parent) {
                if (parent.children.length == 0) {
                    ul = document.createElement('ul');
                    parent.liElement.appendChild(ul);
                }
                else {
                    ul = parent.children[0].liElement.parentElement;
                    while (ul.tagName != 'UL')
                        ul = ul.parentElement;
                }

                parent.children.push(item);
                samePlace = parent.children;
            }
            else {
                this.dataSource.push(item);
                samePlace = this.dataSource;
            }
            item.id = (item.parentNode?.id ?? 0) * 10000
            for (var i = 0; i < samePlace.length; i++) {
                if (item.id < samePlace[i].id)
                    item.id = samePlace[i].id;
            }
            item.id++;

            item.element.setAttribute('item-id', item.id.toString());

            item.liElement = document.createElement('li');
            item.liElement.dir = this.element.dir;
            item.liElement.appendChild(item.element);
            ul.appendChild(item.liElement);
            this.initItem(item);
            return item;
        } catch (e) {
            console.error(e);
        }
        return null;
    }

    private treeNodeToHtmlElement(node: WNTreeNode): HTMLElement {
        let item = document.createElement('item');
        let tItem = item;
        if (node.link && node.link != '') {
            let link = document.createElement('a');
            link.href = node.link;
            item.appendChild(link);
            tItem = link;
        }
        if (node.image && node.image != '') {
            if (node.image.trim().startsWith('<'))
                tItem.innerHTML += node.image;
            else
                tItem.innerHTML += `<img src="${node.image}"/>`;
        }
        tItem.innerHTML += node.html == '' ? node.text : node.html;
        node.text = WNHtmlToText(item.innerHTML);
        return item;
    }
    public removeFromDataSource(node: WNTreeNode): boolean {
        try {
            node.liElement.remove();
            let list = this.dataSource;
            if (node.parentNode.children.length > 0)
                list = node.parentNode.children;
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == node.id) {
                    list.splice(i, 1);
                    break;
                }
            }
            if (node.parentNode)
                this.initItem(node.parentNode);
        } catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    public updateNodeElement(node: WNTreeNode): void {
        node.element.innerHTML = this.treeNodeToHtmlElement(node).innerHTML;
    }

    public setDataSourceByParentId(parentNode: WNTreeNode, dataSource: any[], idFieldName: string, parentFieldName: string, parentRootValue: any = null, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void {
        if (!append)
            this.clearChilds(parentNode);

        this.convertParentId(parentNode, parentRootValue, dataSource, idFieldName, parentFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);

    }
    private convertParentId(parentNode: WNTreeNode, parentValue: any, dataSource: any[], idFieldName: string, parentFieldName: string, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string): void {
        let subItem = dataSource.filter(x => x[parentFieldName] == parentValue);

        for (var i = 0; i < subItem.length; i++) {
            let item = subItem[i];
            let node = this.addToDataSource(parentNode, item[displayFieldName] ?? null, item[linkFieldName] ?? null, item[valueFieldName] ?? null, item[imageFieldName] ?? null);
            this.convertParentId(node, node.value, dataSource, idFieldName, parentFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);
        }
    }
    public setDataSourceByItem(parentNode: WNTreeNode, dataSource: any[], itemFieldName: string, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void {
        if (!append)
            this.clearChilds(parentNode);
        this.convertByItem(parentNode, dataSource, itemFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);
    }
    private convertByItem(parentNode: WNTreeNode, dataSource: any[], itemFieldName: string, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string): void {
        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            let node = this.addToDataSource(parentNode, item[displayFieldName] ?? null, item[linkFieldName] ?? null, item[valueFieldName] ?? null, item[imageFieldName] ?? null);
            if (item[itemFieldName] && item[itemFieldName].length > 0)
                this.convertByItem(node, item[itemFieldName], itemFieldName, displayFieldName, valueFieldName, linkFieldName, imageFieldName);
        }
    }
    public setDataSource(parentNode: WNTreeNode = null, dataSource: WNTreeNode[], append?: boolean): void {
        if (!append)
            this.clearChilds(parentNode);

        this.convertDataSource(parentNode, dataSource);
    }
    private clearChilds(parentNode: WNTreeNode) {
        if (parentNode == null) {
            this.dataSource = [];
            this.element.innerHTML = '';
        }
        else
            while (parentNode.children.length > 0) this.removeFromDataSource(parentNode.children[0]);
    }
    private convertDataSource(parentNode: WNTreeNode, dataSource: any[]): void {
        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            let node = this.addToDataSource(parentNode, item['html'] ?? null, item['link'] ?? null, item['value'] ?? null, item['image'] ?? null);
            if (item['children'] && item['children'].length > 0)
                this.convertDataSource(node, item['children']);
        }
    }
}