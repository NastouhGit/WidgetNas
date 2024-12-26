class WNMultiInputPhone implements IWNMultiInputPhone {
    public readonly nameType: string = 'WNMultiInputPhone';
    public element: HTMLElement;

    public itemClick: (t: IWNMultiInputPhone, node: WNPhoneNode) => void;
    public max: number = 0;

    private dropDownPopup: HTMLElement;

    private dropdown: WNDropdown;
    private list: WNList;

    private inpCaption: HTMLInputElement;
    private inpCountry: HTMLInputElement;
    private inpArea: HTMLInputElement;
    private inpNumber: HTMLInputElement;
    private inpExt: HTMLInputElement;

    private cCaption = 'Caption';
    private cCountry = 'Country';
    private cArea = 'Area';
    private cNumber = 'Number';
    private cExt = 'Ext.';

    private hiddenElemet: HTMLInputElement;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.max = WNparseNumber(this.element.getAttribute('max'), 0);

        if (this.element.hasAttribute('onitemclick'))
            this.itemClick = WNGenerateFunction(this.element.getAttribute('onitemclick'), 't,n');



        if (this.dropDownPopup == null) {
            this.dropDownPopup = document.createElement("div");
            this.dropDownPopup.className = 'dropdown align-end multiinputphone_dialog_dropdown';
            let dialogDiv = document.createElement('div');
            dialogDiv.className = 'multiinputphone_dialog clean';

            if (this.element.hasAttribute('dialog')) {
                let dialog = document.getElementById(this.element.getAttribute('dialog'));
                dialogDiv.innerHTML = dialog.innerHTML;
            }
            else {
                if (this.element.hasAttribute('labels')) {
                    let l = WNStringToObject(this.element.getAttribute('labels'));
                    this.cCaption = l?.caption ?? this.cCaption;
                    this.cCountry = l?.country ?? this.cCountry;
                    this.cArea = l?.area ?? this.cArea;
                    this.cNumber = l?.number ?? this.cNumber;
                    this.cExt = l?.extension ?? this.cExt;
                }
                dialogDiv.innerHTML =
                    `<ul class="clean"></ul>
                    <div class="clean">
                        <ig class="clean"><label class="clean">${this.cCaption}</label><input class="caption clean"  /></ig>
                        <ig class="clean"><label class="clean">${this.cCountry}</label><input class="country clean" /></ig>
                        <ig class="clean"><label class="clean">${this.cArea}</label><input class="area clean" /></ig>
                        <ig class="clean"><label class="clean">${this.cNumber}</label><input class="number clean" /></ig>
                        <ig class="clean"><label class="clean">${this.cExt}</label><input class="ext clean" /></ig>
                        <ig class="clean">
                            <button class="add"></button>
                            <button class="save"></button>
                            <button class="delete"></button>
                            <button class="up"></button>
                            <button class="down"></button>
                        </ig>
                    </div>`;
            }
            this.dropDownPopup.appendChild(dialogDiv);
            let lst = this.dropDownPopup.querySelector('ul');
            this.list = new WNList(lst);
            this.list.selectionChanged = () => { this.listChange() };

            this.inpCaption = this.dropDownPopup.querySelector('input.caption');
            this.inpCountry = this.dropDownPopup.querySelector('input.country');
            this.inpArea = this.dropDownPopup.querySelector('input.area');
            this.inpNumber = this.dropDownPopup.querySelector('input.number');
            this.inpExt = this.dropDownPopup.querySelector('input.ext');

            this.dropDownPopup.querySelector('button.add')?.addEventListener('click', () => this.addButton());
            this.dropDownPopup.querySelector('button.save')?.addEventListener('click', () => this.saveButton());
            this.dropDownPopup.querySelector('button.delete')?.addEventListener('click', () => this.deleteButton());
            this.dropDownPopup.querySelector('button.up')?.addEventListener('click', () => this.changeOrder(-1));
            this.dropDownPopup.querySelector('button.down')?.addEventListener('click', () => this.changeOrder(1));
            this.dropDownPopup.classList.add('hide-invalid');
            this.dropDownPopup.classList.add('hide-valid');
            
            this.element.insertAdjacentElement("afterend", this.dropDownPopup);

        }

        //this.element.setAttribute('wn-dropdown-event', '');
        this.dropdown = new WNDropdown(this.element);
        this.dropdown.dropdown = this.dropDownPopup;

        this.element.addEventListener('click', (ev) => {
            if (getComputedStyle(this.element).pointerEvents == 'none')
                return;
            this.dropdown?.toggle();
            ev.stopPropagation();
        }, false);

        if (this.element.hasAttribute('value')) {
            this.value = WNStringToObject(this.element.getAttribute('value'));
        }
        else
            this.value = [];

        if (this.element.hasAttribute('required')) {
            this.hiddenElemet = document.createElement('input');
            this.hiddenElemet.style.display = "none";
            this.element.appendChild(this.hiddenElemet);

           

            let r = WNFindParentsTag(this.element, 'form');
            r?.addEventListener('submit', (event) => {

                if (this._value?.length == 0) {

                    this.hiddenElemet?.setCustomValidity('Error');
                    this.hiddenElemet?.reportValidity();
                    event.preventDefault();
                }
                else {
                    this.hiddenElemet?.setCustomValidity('');
                }
            });
        }
    }



    private add(node: WNPhoneNode): WNPhoneNode {
        if (this.max != 0 && this._value.length >= this.max) return null;
        if (this._value.find(x => x.fullNumber == node.fullNumber))
            return null;

        this._value.push(node);
        this.createLinkNode(node);

        this.list.addToDataSource(`<span>${node.caption}</span>${node.fullNumber}`, '', node.fullNumber, '');
        return node;
    }
    private createLinkNode(node: WNPhoneNode) {
        let div = document.createElement('a');
        div.href = `callto://+${node.country}${node.area}${node.number}`
        let sp = document.createElement('span');
        sp.innerHTML = node.caption;
        div.appendChild(sp)
        div.innerHTML += node.fullNumber;

        div.addEventListener('click', (ev) => {
            ev.stopPropagation();
            this.itemClick?.(this, node);
        });
        this.element.appendChild(div);
    }
    private refreshAllLinkNode() {
        this.element.querySelectorAll('a').forEach(x => x.remove());
        this._value.forEach(x => this.createLinkNode(x));
    }
    private _value: WNPhoneNode[];
    public get value(): string[] {
        let t = [];
        for (var i = 0; i < this._value.length; i++)
            t.push(`${this._value[i].caption.trim()}|${this._value[i].country.trim()}|${this._value[i].area.trim()}|${this._value[i].number.trim()}|${this._value[i].extension.trim()}`);
        return t;
    }
    public set value(value: string[]) {
        this._value = [];
        for (var i = 0; i < value.length; i++) {
            let s = value[i].split('|');
            if (s.length == 5) {
                let n: WNPhoneNode = { caption: s[0], country: s[1], area: s[2], number: s[3], extension: s[4], fullNumber: '' };
                n.fullNumber = this.makeFullNumber(n);
                this.add(n);
            }
        }
        if (this.element.hasAttribute('required') && this.hiddenElemet) {
            if (this._value.length == 0) {

                this.hiddenElemet?.setCustomValidity('Error');
                this.hiddenElemet?.reportValidity();
            }
            else {
                this.hiddenElemet?.setCustomValidity('');
            }
        }
    }
    private makeFullNumber(n: WNPhoneNode): string {
        let number = '';
        if (n.number.length < 6)
            number = n.number;
        else if (n.number.length == 6)
            number = n.number.substring(0, 3) + ' ' + n.number.substring(3, 6);
        else if (n.number.length == 7)
            number = n.number.substring(0, 3) + ' ' + n.number.substring(3, 5) + ' ' + n.number.substring(5, 7);
        else if (n.number.length == 8)
            number = n.number.substring(0, 2) + ' ' + n.number.substring(2, 4) + ' ' + n.number.substring(4, 6) + ' ' + n.number.substring(6, 8)
        else if (n.number.length == 9)
            number = n.number.substring(0, 3) + ' ' + n.number.substring(3, 6) + ' ' + n.number.substring(6, 9);
        else if (n.number.length == 10)
            number = n.number.substring(0, 3) + ' ' + n.number.substring(3, 6) + ' ' + n.number.substring(6, 8) + ' ' + n.number.substring(8, 10);
        else
            number = n.number.substring(0, 3) + ' ' + n.number.substring(3, 6) + ' ' + n.number.substring(6, 9) + ' ' + n.number.substring(9);

        return `+${n.country} (${n.area}) ${number}` + (n.extension != '' ? ` x ${n.extension}` : ``);
    }
    private addButton() {
        this.fixedInput();
        if (this.inpCountry?.value == '') return;
        if (this.inpArea?.value == '') return;
        if (this.inpNumber?.value == '') return;

        let n = {
            caption: this.inpCaption?.value.trim(),
            country: this.inpCountry.value.trim(),
            area: this.inpArea?.value.trim(),
            number: this.inpNumber?.value.trim(),
            extension: this.inpExt?.value.trim(),
            fullNumber: ''
        };
        n.fullNumber = this.makeFullNumber(n);

        if (this.add(n) != null) {
            this.inpCaption.value = '';
            this.inpCountry.value = '';
            this.inpArea.value = '';
            this.inpNumber.value = '';
            this.inpExt.value = '';
            this.list.selectedIndex = -1;
        }
    }
    private saveButton() {
        this.fixedInput();

        if (this.list.selectedIndex == -1)
            return;
        let node = {
            caption: this.inpCaption.value,
            country: this.inpCountry.value,
            area: this.inpArea.value,
            number: this.inpNumber.value,
            extension: this.inpExt.value,
            fullNumber: ''
        }
        node.fullNumber = this.makeFullNumber(node);
        let idx = this._value.findIndex(x => x.fullNumber == node.fullNumber)
        if (idx != this.list.selectedIndex)
            return null;
        this._value[this.list.selectedIndex] = node;


        this.inpCaption.value = '';
        this.inpCountry.value = '';
        this.inpArea.value = '';
        this.inpNumber.value = '';
        this.inpExt.value = '';
        this.list.selectedItem.element.innerHTML = `<span>${this._value[this.list.selectedIndex].caption}</span>${this._value[this.list.selectedIndex].fullNumber}`
        this.list.selectedIndex = -1;
        this.refreshAllLinkNode();
    }
    private deleteButton() {
        if (this.list.selectedIndex == -1)
            return;
        this._value.splice(this.list.selectedIndex, 1);
        this.list.removeFromDataSource(this.list.selectedItem);
        this.refreshAllLinkNode();
    }
    private fixedInput() {
        this.inpCaption.value = this.inpCaption.value.trim();
        this.inpCaption.value = this.inpCaption.value != '' ? this.inpCaption.value : '#'
        this.inpCountry.value = this.inpCountry.value.replace(/\D/g, '');
        this.inpArea.value = this.inpArea.value.replace(/\D/g, '');
        this.inpNumber.value = this.inpNumber.value.replace(/\D/g, '');
        this.inpExt.value = this.inpExt.value.replace(/\D/g, '');
    }
    private listChange() {
        this.inpCaption.value = '';
        this.inpCountry.value = '';
        this.inpArea.value = '';
        this.inpNumber.value = '';
        this.inpExt.value = '';
        if (this.list.selectedIndex == -1)
            return;
        this.inpCaption.value = this._value[this.list.selectedIndex].caption;
        this.inpCountry.value = this._value[this.list.selectedIndex].country;
        this.inpArea.value = this._value[this.list.selectedIndex].area;
        this.inpNumber.value = this._value[this.list.selectedIndex].number;
        this.inpExt.value = this._value[this.list.selectedIndex].extension;
    }
    private changeOrder(index: number) {
        let idx = this.list.selectedIndex;
        if (idx + index < 0) return;
        if (idx + index >= this._value.length) return;

        [this._value[idx + index], this._value[idx]] = [this._value[idx], this._value[idx + index]];
        [this.list.dataSource[idx + index].element.innerHTML, this.list.dataSource[idx].element.innerHTML] = [this.list.dataSource[idx].element.innerHTML, this.list.dataSource[idx + index].element.innerHTML];
        this.list.selectedIndex = idx + index;
        this.refreshAllLinkNode();
    }
}

