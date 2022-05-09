class wntree {
    element: HTMLFormElement;

    private _currentSelect: HTMLElement = null;
    get currentselect() { return this._currentSelect; }
    set currentselect(value: HTMLElement) { this._currentSelect = value; }

    get currentvalue() { return this._currentSelect?.getAttribute('wn-tree-value'); }
    get currentcaption() { return this._currentSelect?.getAttribute('wn-tree-caption'); }

    private _treeexpanditem = false;
    get treeexpanditem() { return this._treeexpanditem; }
    set treeexpanditem(value: boolean) { this._treeexpanditem = value; }


    beforeclick: any;
    afterclick: any;
    selectionchange: any;
    beforecollapse: any;
    aftercollapse: any;
    beforeexpand: any;
    afterexpand: any;
    beforetoggle: any;
    aftertoggle: any;
    //private
    private lastClickID = '';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Init();
        }
    }
    private Init() {
        this._treeexpanditem = this.element.classList.contains('tree-expand-item');
        let items = this.element.querySelectorAll('li');
        for (var i = 0; i < items.length; i++) {
            this.checkitemstatus(items[i]);
        }
        if (this.element.classList.contains('collapsed-all'))
            this.collapsedall();

        //assign events
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeclick = new Function('t', 'e', this.element.getAttribute('onbeforeclick'));
        if (this.element.hasAttribute('onafterclick'))
            this.afterclick = new Function('t', 'e', this.element.getAttribute('onafterclick'));
        if (this.element.hasAttribute('onselectionchange'))
            this.selectionchange = new Function('t', 'n', this.element.getAttribute('onselectionchange'));
        if (this.element.hasAttribute('onbeforecollapse'))
            this.beforecollapse = new Function('t', 'n', this.element.getAttribute('onbeforecollapse'));
        if (this.element.hasAttribute('onaftercollapse'))
            this.aftercollapse = new Function('t', 'n', this.element.getAttribute('onaftercollapse'));
        if (this.element.hasAttribute('onbeforeexpand'))
            this.beforeexpand = new Function('t', 'n', this.element.getAttribute('onbeforeexpand'));
        if (this.element.hasAttribute('onafterexpand'))
            this.afterexpand = new Function('t', 'n', this.element.getAttribute('onafterexpand'));
        if (this.element.hasAttribute('onbeforetoggle'))
            this.beforetoggle = new Function('t', 'n', this.element.getAttribute('onbeforetoggle'));
        if (this.element.hasAttribute('onaftertoggle'))
            this.aftertoggle = new Function('t', 'n', this.element.getAttribute('onaftertoggle'));
    }
    private checkitemstatus(node: HTMLElement) {
        node.addEventListener('click', (e) => {
            this.click(e);
        }, false);
        if (node.querySelector('ul') != null) {
            node.classList.add('expandable');
        }
        else {
            node.classList.remove('expandable');
        }
        let treeitem = node.querySelector('.tree-item, .tree-link') as HTMLElement;
        if (treeitem != null) {
            //Set default caption & value for searching and filtering
            if (!treeitem.hasAttribute('wn-tree-caption'))
                treeitem.setAttribute('wn-tree-caption', treeitem.innerText);
            if (!treeitem.hasAttribute('wn-tree-value')) {
                if (treeitem.localName == 'a')
                    treeitem.setAttribute('wn-tree-value', treeitem.getAttribute('href'));
                else
                    treeitem.setAttribute('wn-tree-value', treeitem.innerText);
            }

            if (!this._treeexpanditem && treeitem.classList.contains('tree-item'))
                treeitem.addEventListener('click', (e) => {
                    this.select(e.target as HTMLElement);
                }, true);

            if (treeitem.classList.contains('active'))
                this._currentSelect = treeitem;
        }
    }
    findLI(node: HTMLElement): HTMLElement {
        while (node.localName != 'li') node = node.parentElement;
        return node;
    }
    click(e: MouseEvent) {
        let ClickID = '' + e.clientX + e.clientY;
        if (ClickID == this.lastClickID)
            return;
        this.lastClickID = ClickID;

        if (this.beforeclick != null) this.beforeclick(this, e);
        let node = e.target as HTMLElement;
        if (!node.classList.contains('tree-link')) {
        }
        node = this.findLI(node);
        if (node.classList.contains('expandable')) {
            if ((this._treeexpanditem) ||
                ((node.dir == 'ltr' && e.offsetX < parseInt(getComputedStyle(node).paddingInlineStart)) ||
                    (node.clientWidth - e.offsetX < parseInt(getComputedStyle(node).paddingInlineStart)))

            ) {
                this.toggle(node);
                event.stopPropagation();
            }
        }
        if (this.afterclick != null) this.afterclick(this, e);
    }

    select(node: HTMLElement) {
        if (node == this._currentSelect)
            return;
        if (this._currentSelect != null)
            this._currentSelect.classList.remove('active');
        node.classList.add('active');
        this._currentSelect = node;
        if (this.selectionchange != null) this.selectionchange(this, node);
    }
    toggle(node: HTMLElement) {
        node = this.findLI(node);
        if (this.beforetoggle != null) this.beforetoggle(this, node);
        node.classList.toggle('collapsed');
        if (this.aftertoggle != null) this.aftertoggle(this, node);
    }
    collapse(node: HTMLElement) {
        node = this.findLI(node);
        if (node.classList.contains('collapsed'))
            return;
        if (this.beforecollapse != null) this.beforecollapse(this, node);
        node.classList.add('collapsed');
        if (this.aftercollapse != null) this.aftercollapse(this, node);
    }
    expand(node: HTMLElement) {
        node = this.findLI(node);
        if (!node.classList.contains('collapsed'))
            return;
        if (this.beforeexpand != null) this.beforeexpand(this, node);
        node.classList.remove('collapsed');
        if (this.afterexpand != null) this.afterexpand(this, node);
    }
    expandtoparent(node: HTMLElement) {
        node = this.findLI(node);
        this.expand(node);
        while (node != null) {
            node = node.parentElement;
            if (node.classList.contains('tree'))
                break;
            node = this.findLI(node);
            this.expand(node);
        }
    }
    collapsewithchild(node: HTMLElement) {
        node = this.findLI(node);
        this.collapse(node);
        let items = node.querySelectorAll('.expandable');
        items.forEach((itm) => { itm.classList.add('collapsed'); });
    }
    collapsedall() {
        let items = this.element.querySelectorAll('.expandable');
        items.forEach((itm) => { itm.classList.add('collapsed'); });
    }
    expandall() {
        let items = this.element.querySelectorAll('.collapsed');
        items.forEach((itm) => { itm.classList.remove('collapsed'); });
    }
    findbytext(text: string, contains: boolean = true, select: boolean = false): HTMLElement {
        let selectedNode = null;
        let n: HTMLElement = null;
        if (contains)
            n = this.element.querySelector('[wn-tree-caption*="' + text + '"]') as HTMLElement;
        else
            n = this.element.querySelector('[wn-tree-caption="' + text + '"]') as HTMLElement;
        selectedNode = n;
        if (select)
            this.select(selectedNode);
        return selectedNode;
    }
    findbyvalue(value: string, select: boolean = false): HTMLElement {
        let selectedNode = null;
        let n = this.element.querySelector('[wn-tree-value="' + value.replaceAll('\\','\\\\') + '"]') as HTMLElement
        selectedNode = n;
        if (select)
            this.select(selectedNode);
        return selectedNode;

    }
    filterbytext(text: string, contains: boolean = true) {
        let selectedNode = Array<HTMLElement>();
        text = text.toLowerCase();
        let treeitem = this.element.querySelectorAll('.tree-item, .tree-link');

        for (var i = 0; i < treeitem.length; i++) {
            let s = treeitem[i].getAttribute('wn-tree-caption').toLowerCase();
            if ((contains && s.includes(text)) || (s == text)) {
                let node = treeitem[i] as HTMLElement;
                node = this.findLI(node);
                while (node != null) {
                    if (node.classList.contains('tree'))
                        break;
                    if (node.localName == 'li')
                        selectedNode.push(node);
                    node = node.parentElement;
                }
            }
        }
        treeitem = this.element.querySelectorAll('li');
        for (var i = 0; i < treeitem.length; i++) {
            if (selectedNode.includes(treeitem[i] as HTMLElement))
                treeitem[i].classList.remove('hide');
            else
                treeitem[i].classList.add('hide');
        }
    }
    addrow(node: HTMLElement | string, type: string, text: string, value: string = '', image: string = '') {
        let html = '';
        if (type == 'tree-item' || type == 'item') {
            html = "<div class='tree-item'";
            if (value != '')
                html += " wn-tree-value='" + value + "'";
            html += ">";
            if (image != '')
                html = "<img src='" + image + "' />";
            html += text;
            html += "</div>";
        }
        if (type == 'tree-link' || type == 'link') {
            html = "<a class='tree-link' wn-tree-caption='" + text + "' wn-tree-value='" + value + "' href='" + value + "'>";
            if (image != '')
                html = "<img src='" + image + "' />";
            html += text;
            html += "</a>";
        }
        return this.addrowhtml(node, html);
    }
    addrowhtml(node: HTMLElement | string, html: string) {
        let li: HTMLElement;
        let ul: HTMLUListElement;
        if (typeof (node) == 'string') {
            if (node == '')
                node = this.element;
            else {
                node = this.findbyvalue(node, false);
                node = this.findLI(node);
            }
        }
        if (node.localName != 'ul') {
            li = this.findLI(node);
            ul = li.querySelector('ul') as HTMLUListElement;
        }
        else {
            li = node;
            ul = node as HTMLUListElement;
        }
        if (ul == null) {
            ul = document.createElement('ul');
            if (li.dir == 'ltr')
                ul.setAttribute('dir', 'ltr');
            li.appendChild(ul);
        }
        let subli = document.createElement('li');
        if (li.dir == 'ltr')
            subli.setAttribute('dir', 'ltr');
        subli.innerHTML = html;
        ul.appendChild(subli);
        this.checkitemstatus(subli);
        li.classList.add('expandable');
        return subli;
    }

}