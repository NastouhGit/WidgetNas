class WNSelect implements IWNSelect {
    public readonly nameType: string = 'WNList';
    public element: HTMLElement;

    public list: IWNList;
    public selectionChanged: (t: IWNSelect) => void;

    private dropdownlist: HTMLElement;
    private dropdown: WNDropdown;
    private displayElement: HTMLDivElement;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
    }
    private init() {
        if (this.element.classList.length == 0)
            this.element.className = 'select';
        this.dropdownlist = this.element.querySelector('.dropdown');
        if (this.dropdownlist == null) {
            if ((this.element.nextSibling as HTMLElement)?.classList?.contains('.dropdown'))
                this.dropdownlist = (this.element.nextSibling as HTMLElement);
        }
        if (this.dropdownlist == null) {
            this.dropdownlist = document.createElement("div");
            this.dropdownlist.className = "dropdown list align-end align-fit";
            this.element.insertAdjacentElement('afterend', this.dropdownlist);
        }
        this.dropdown = new WNDropdown(this.element);

        let l = this.dropdownlist.querySelector("[wn-type='list']") as HTMLElement;
        if (l != null)
            this.list = WN(l).wn as IWNList;
        else {
            l = document.createElement('ul');
            this.dropdownlist.appendChild(l);
            this.list = new WNList(l);
        }
        this.list.selectionChanged = (t, n) => {
            this.value = n.value;
            if (t.selectedItem == null)
                this.value = '';
            this.dropdown.hide();
        }

        //assign events
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't');
        this.initDataSource();

        this.displayElement = document.createElement('div');
        this.displayElement.className = 'inner-element';
        this.element.appendChild(this.displayElement);


        if (this.element.hasAttribute('value')) {
            this.list.selectedValue = this.element.getAttribute('value');
            if (this.list.selectedValue == null)
                this.value = '';
        }
        else if (this.list.dataSource.length > 0)
            this.list.selectedIndex = 0;
        else
            this.displayElement.innerHTML = "&nbsp";
    }
    private initDataSource() {
        this.list.dataSource = [];
        let items= this.element.querySelectorAll('option');

        for (var i = 0; i < items.length; i++) {
            this.addToDataSource(items[i].innerHTML, items[i].value);
        }
        this.element.innerHTML = '';
    }

    private _value: string = '';
    public get value(): string { return this._value }
    public set value(value: string) {
        let found = false;
        for (var i = 0; i < this.list.dataSource.length; i++) {
            if (this.list.dataSource[i].value == value) {
                this.displayElement.innerHTML = this.list.dataSource[i].html;
                this._value = value;
                this.element.setAttribute('value', value);
                this.selectionChanged?.(this);
                found = true;
                
                this.element.classList.remove('invalid');
                if (this.element.hasAttribute('required'))
                    this.element.classList.add('valid');
                break;
            }
        }
        if (!found) {
            this.displayElement.innerHTML = '&nbsp';
            this._value = '';
            this.list.selectedIndex = -1;
            this.element.setAttribute('value', '');
            if (this.element.hasAttribute('required'))
                this.element.classList.add('invalid');
            this.selectionChanged?.(this);
        }
    }

    

    //DataSource Managment
    public addToDataSource(text: string, value: string):void {
        try {
            this.list.addToDataSource(text,'',value,'');
        } catch (e) {
            console.error(e);
        }
        return null;
    }
    public removeFromDataSource(index: number): boolean {
        try {
            if (index > -1) {
                this.list.dataSource.splice(index, 1);
                this.list.redraw();
            }
        } catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    public setDataSource(dataSource: HTMLOptionElement[], append?: boolean): void {
        if (!append)
            this.list.setDataSource([], false);

        for (var i = 0; i < dataSource.length; i++) {
            let item = dataSource[i];
            this.addToDataSource(item.text, item.value);
        }
        this.list.redraw();
    }

   
}