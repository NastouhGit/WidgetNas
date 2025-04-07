class WNInputList implements IWNInputList {
    public readonly nameType: string = 'WNInputList';
    public element: HTMLElement;

    public beforeAdd: (t: IWNInputList, v: string) => Promise<boolean> | boolean;
    public afterAdd: (t: IWNInputList, v: string) => void;

    public beforeSave: (t: IWNInputList, v: string) => Promise<boolean> | boolean;
    public afterSave: (t: IWNInputList, v: string) => void;

    public beforeRemove: (t: IWNInputList, v: string) => Promise<boolean> | boolean;
    public afterRemove: (t: IWNInputList, v: string) => void;

    public beforeOrder: (t: IWNInputList, v: string) => Promise<boolean> | boolean;
    public afterOrder: (t: IWNInputList, v: string) => void;

    public max: number = 0;

    private input: HTMLInputElement;
    public list: IWNList;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        if (this.element.hasAttribute('max')) this.max = WNparseNumber(this.element.getAttribute('max'), 0);

        //assign events
        if (this.element.hasAttribute('onbeforeadd'))
            this.beforeAdd = WNGenerateFunction(this.element.getAttribute('onbeforeadd'), 't,v');
        if (this.element.hasAttribute('onafteradd'))
            this.afterAdd = WNGenerateFunction(this.element.getAttribute('onafteradd'), 't,v');
        if (this.element.hasAttribute('onbeforesave'))
            this.beforeSave = WNGenerateFunction(this.element.getAttribute('onbeforesave'), 't,v');
        if (this.element.hasAttribute('onaftersave'))
            this.afterSave = WNGenerateFunction(this.element.getAttribute('onaftersave'), 't,v');
        if (this.element.hasAttribute('onbeforeremove'))
            this.beforeRemove = WNGenerateFunction(this.element.getAttribute('onbeforeremove'), 't,v');
        if (this.element.hasAttribute('onafterremove'))
            this.afterRemove = WNGenerateFunction(this.element.getAttribute('onafterremove'), 't,v');
        if (this.element.hasAttribute('onbeforeorder'))
            this.beforeOrder = WNGenerateFunction(this.element.getAttribute('onbeforeorder'), 't,v');
        if (this.element.hasAttribute('onafterorder'))
            this.afterOrder = WNGenerateFunction(this.element.getAttribute('onafterorder'), 't,v');

        this.input = this.element.querySelector('input');
        if (this.input == null) {
            this.input = document.createElement('input');
            this.element.appendChild(this.input);
        }
        let toolbar = this.element.querySelector('.toolbar');
        if (toolbar == null) {
            toolbar = document.createElement('div');
            toolbar.className = 'toolbar';
            this.element.appendChild(toolbar);
        }

        let buttonAdd = this.element.querySelector('button.add');
        if (buttonAdd == null) {
            buttonAdd = document.createElement('button');
            buttonAdd.className = 'add';
            toolbar.appendChild(buttonAdd);
        }
        let buttonEdit = this.element.querySelector('button.edit');
        if (buttonEdit == null) {
            buttonEdit = document.createElement('button');
            buttonEdit.className = 'edit';
            toolbar.appendChild(buttonEdit);
        }
        let buttonRemove = this.element.querySelector('button.remove');
        if (buttonRemove == null) {
            buttonRemove = document.createElement('button');
            buttonRemove.className = 'remove';
            toolbar.appendChild(buttonRemove);
        }
        let buttonOrderUp = this.element.querySelector('button.order-up');
        if (buttonOrderUp == null) {
            buttonOrderUp = document.createElement('button');
            buttonOrderUp.className = 'order-up';
            toolbar.appendChild(buttonOrderUp);
        }
        let buttonOrderDown = this.element.querySelector('button.order-down');
        if (buttonOrderDown == null) {
            buttonOrderDown = document.createElement('button');
            buttonOrderDown.className = 'order-down';
            toolbar.appendChild(buttonOrderDown);
        }
        let list = this.element.querySelector('ul');
        if (list == null) {
            list = document.createElement('ul');
            list.className = 'list';
            this.element.appendChild(list);
        }
        this.list = new WNList(list);

        this.list.selectionChanged = (t) => { this.input.value = t.selectedItem.text; }

        buttonAdd.addEventListener('click', (t) => {
            let value = this.input.value.trim();
            if (this.list.findByText(value).length > 0) return;
            if (this.max > 0 && this.list.dataSource.length >= this.max) return;
            if (this.beforeAdd && !this.beforeAdd(this, value))
                return;
            if (this.beforeSave && !this.beforeSave(this, value))
                return;
            this.list.addToDataSource(value, '', value, '');
            this.input.value = '';
            this.afterAdd?.(this, value);
            this.afterSave?.(this, value);
        });

        buttonEdit.addEventListener('click', (t) => {
            if (this.list.selectedItem == null) return;
            let value = this.input.value.trim();
            if (this.list.findByText(value).length > 0) return;
            if (this.beforeSave && !this.beforeSave(this, value))
                return;
            this.list.selectedItem.text = value;
            this.list.selectedItem.value = value;
            this.list.selectedItem.html = '';
            this.list.updateNodeElement(this.list.selectedItem);
            this.input.value = '';
            this.afterSave?.(this, value);
        });

        buttonRemove.addEventListener('click', (t) => {
            if (this.list.selectedItem == null) return;
            let value = this.input.value.trim();
            if (this.beforeRemove && !this.beforeRemove(this, value))
                return;
            this.list.removeFromDataSource(this.list.selectedItem);
            this.input.value = '';
            this.afterRemove?.(this, value);
        });

        buttonOrderUp.addEventListener('click', (t) => {
            if (this.list.selectedItem == null) return;
            let value = this.input.value.trim();
            if (this.beforeOrder && !this.beforeOrder(this, value))
                return;
            this.list.swap(this.list.selectedIndex, -1);
            this.input.value = '';
            this.afterOrder?.(this, value);
        });
        buttonOrderDown.addEventListener('click', (t) => {
            if (this.list.selectedItem == null) return;
            let value = this.input.value.trim();
            if (this.beforeOrder && !this.beforeOrder(this, value))
                return;
            this.list.swap(this.list.selectedIndex, 1);
            this.input.value = '';
            this.afterOrder?.(this, value);
        });

        if (this.element.hasAttribute('value')) this.value = WNStringToObject(this.element.getAttribute('value'));

    }

    public get value(): string[] {
        let v = [];
        this.list?.dataSource.forEach(x => v.push(x.text));
        return v
    }
    public set value(value: string[]) {
        this.list?.setDataSource([], false);
        value.forEach(x => this.list?.addToDataSource(x, '', x, ''));
    }
}


