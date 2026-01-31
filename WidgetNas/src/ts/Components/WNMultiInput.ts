class WNMultiInput implements IWNMultiInput {
    public readonly nameType: string = 'WNMultiInput';
    public element: HTMLElement;

    public inputs: HTMLElement[];
    public labels: WNDictionary;
    public classes: WNDictionary;
    public default = ''

    private detail: HTMLElement;
    private inputType = 'text';
    private requiredStatus = '';
    private validation = '';
    private inputIG: HTMLElement;
    private expandButton: HTMLButtonElement;
    private inputclass = '';
    private doRefresh = true;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.clear();
        let lValue = {};

        if (this.element.hasAttribute('labels')) this.labels = WNToDictionary(this.element.getAttribute('labels'));
        if (this.element.hasAttribute('values')) lValue = WNToDictionary(this.element.getAttribute('values'));
        if (this.element.hasAttribute('classes')) this.classes = WNToDictionary(this.element.getAttribute('classes'));
        if (this.element.hasAttribute('default')) this.default = WNparseString(this.element.getAttribute('default'));
        if (this.element.hasAttribute('type')) this.inputType = WNparseString(this.element.getAttribute('type'), this.inputType);

        //خواندن متن لیبل ها اگر در پارامترها نباشه.
        let lkey = Object.keys(this.labels);
        if (lkey.length == 0) {
            this.labels = this.getLables();
            lkey = Object.keys(this.labels);
            if (lkey.length > 0)
                this.doRefresh = false;
        }

        //مقدار پیش فرض خالی برای ورودی هایی که تعریف نشده باشند

        lkey.forEach((x) => {
            if (!(x in lValue)) lValue[x] = '';
            if (!(x in this.classes)) this.classes[x] = '';
        });

        if (this.default == '' && lkey.length > 0) this.default = lkey[0];

        this.inputIG = this.element.querySelector("ig,.ig");
        if (!this.inputIG) {
            this.inputIG = document.createElement("ig");
        }
        else
            this.doRefresh = false;

        //خواندن کلاس های پیش فرض تعیین شده و حذف آنها از المانها
        this.inputclass = '';
        let ele = this.element;
        while (ele && this.inputclass == '') {
            if (ele.classList.contains('floating'))
                this.inputclass += ' floating';
            else if (ele.classList.contains('floatingline'))
                this.inputclass += ' floatingline';
            else if (ele.classList.contains('group'))
                this.inputclass += ' group';
            else if (ele.classList.contains('first-label'))
                this.inputclass += ' first-label';
            else if (ele.classList.contains('first-input'))
                this.inputclass += ' first-input';
            ele = ele.parentElement;
        }
        this.inputclass = this.inputclass.trim();

        if (this.inputclass != '') {
            this.inputIG.classList.add(this.inputclass);
            this.inputclass.split(' ').forEach(x => this.element.classList.remove(x));
        }

        this.requiredStatus = '';
        if (this.element.hasAttribute('required')) {
            this.requiredStatus = 'required';
            this.element.removeAttribute('required');
        } else if (this.element.hasAttribute('norequired')) {
            this.requiredStatus = 'norequired';
            this.element.removeAttribute('norequired');
        }

        this.validation = '';
        if (this.element.hasAttribute('onvalidation')) {
            this.validation = this.element.getAttribute('onvalidation');
            this.element.removeAttribute('onvalidation');
        }

        this.inputs = [];

        let mainInput = this.inputIG.querySelector('input,select,textarea') as HTMLElement;
        if (mainInput) this.inputs.push(mainInput);
        this.expandButton = this.inputIG.querySelector('button');

        this.detail = this.element.querySelector('detail,.detail');
        if (!this.detail) {
            this.detail = document.createElement('div');
            this.detail.className = 'detail';
        }
        else if (this.detail.hasChildNodes) {
            this.element.querySelectorAll('input,select,textarea').forEach((x: HTMLElement) => this.inputs.push(x));
        }

        let feedback = this.element.querySelector('.valid-feedback');
        if (feedback)
            this.inputIG.appendChild(feedback);

        feedback = this.element.querySelector('.invalid-feedback');
        if (feedback)
            this.inputIG.appendChild(feedback);

        this.element.appendChild(this.inputIG);
        this.element.appendChild(this.detail);

        this.refresh();
        this.values = lValue;
    }
    public clear() {
        this.inputs = [];
        this.labels = {};
        this.classes = {};
        this.values = {};
    }

    public refresh() {
        if (this.doRefresh == false) {
            this.expandButton.onclick = () => { this.toggle() };
            return;
        }
        let lkey = Object.keys(this.labels);
        if (lkey.length == 0) {
            this.inputIG.innerHTML = '';
            this.detail.innerHTML = '';
            return;
        }
        let tDefault = this.default;
        if (!lkey.includes(tDefault)) tDefault = lkey[0];

        this.inputIG.innerHTML = '';
        this.inputs = [];

        this.inputs.push(this.createInput(this.inputType, this.inputclass, this.classes[tDefault], false))
        let mainLabel = document.createElement('label');
        mainLabel.innerHTML = this.labels[tDefault] ?? '';

        if (lkey.length > 1) {
            if (!this.expandButton)
                this.expandButton = document.createElement('button');
            this.expandButton.type = 'button';
            this.expandButton.onclick = () => { this.toggle() };
        }


        if (this.inputclass.includes('floating') || this.inputclass.includes('floatingline') || this.inputclass.includes('first-input')) {
            this.inputIG.appendChild(this.inputs[0]);
            this.inputIG.appendChild(mainLabel);
            if (this.expandButton) this.inputIG.appendChild(this.expandButton);
        }
        else {
            this.inputIG.appendChild(mainLabel);
            if (this.element.classList.contains('group-input-button')) {
                let div = document.createElement('div');
                div.appendChild(this.inputs[0]);
                if (this.expandButton) div.appendChild(this.expandButton);
                this.inputIG.appendChild(div);
            }
            else {
                this.inputIG.appendChild(this.inputs[0]);
                if (this.expandButton) this.inputIG.appendChild(this.expandButton);
            }
        }
        this.detail.innerHTML = '';


        for (var i = 0; i < lkey.length; i++) {
            if (lkey[i] != tDefault) {
                let ig = document.createElement('ig');
                let label = document.createElement('label');
                let input = this.createInput(this.inputType, '', this.classes[lkey[i]], true);
                this.inputs.push(input);

                label.innerHTML = this.labels[lkey[i]] ?? '';
                ig.appendChild(label);
                ig.appendChild(input);
                this.detail.appendChild(ig);

            }
        }

        if (this.inputs.length > 0) {
            if (this.requiredStatus == 'required')
                this.inputs[0].setAttribute('required', this.element.getAttribute('required'));
            else if (this.requiredStatus == 'norequired')
                this.inputs[0].setAttribute('norequired', this.element.getAttribute('norequired'));
        }
        if (this.validation != '')
            this.inputs[0].setAttribute('onvalidation', this.validation);

    }

    private getLables(): WNDictionary {
        let l = this.element.querySelectorAll('label');
        let lables: WNDictionary = {};
        l.forEach((x) => {
            if ((x.previousElementSibling && (x.previousElementSibling.tagName == 'INPUT' || x.previousElementSibling.tagName == 'SELECT')) ||
                (x.nextElementSibling && (x.nextElementSibling.tagName == 'INPUT' || x.nextElementSibling.tagName == 'SELECT')))
                lables[x.textContent] = x.textContent
        });
        return lables;
    }
    public toggle() {
        this.element.classList.toggle('expand');
    }

    public get values(): WNDictionary {
        let value = {};
        let lkey = Object.keys(this.labels);
        for (var i = 0; i < this.inputs.length; i++) {
            let v = '';
            if (this.inputs[i].tagName == 'INPUT')
                v = (<HTMLInputElement>this.inputs[i]).value;
            else if (this.inputs[i].tagName == 'TEXTAREA')
                v = (<HTMLTextAreaElement>this.inputs[i]).value;
            else if (this.inputs[i].tagName == 'OPTION')
                v = (<HTMLOptionElement>this.inputs[i]).value;
            else if (this.inputs[i].tagName == 'SELECT')
                v = (<HTMLSelectElement>this.inputs[i]).value;


            value[lkey[i]] = v;
        }
        return value;
    }
    public set values(value: WNDictionary | string) {
        let lkey = Object.keys(this.labels);

        if (typeof value == 'string') {
            let t = {};
            for (var i = 0; i < lkey.length; i++)
                t[lkey[i]] = ''
            t[lkey[0]] = value;
            value = t;
        }
        if (!value) value = {};

        for (var i = 0; i < this.inputs.length; i++) {
            let x = this.inputs[i];
            let v = value[lkey[i]] ?? '';
            if (x.tagName == 'INPUT')
                (<HTMLInputElement>x).value = v;
            else if (x.tagName == 'TEXTAREA')
                (<HTMLTextAreaElement>x).value = v;
            else if (x.tagName == 'OPTION')
                (<HTMLOptionElement>x).value = v;
            else if (x.tagName == 'SELECT')
                (<HTMLSelectElement>x).value = v;
        }

    }


    private createInput(inputType: string, inputclass: string, elemclass: string, detail: boolean): HTMLElement {
        let mainInput;
        if (inputType == 'textarea') {
            mainInput = document.createElement('textarea');
            if (this.element.hasAttribute('rows'))
                mainInput.setAttribute('rows', this.element.getAttribute('rows'))
        }
        else {
            mainInput = document.createElement('input');
            (<HTMLInputElement>mainInput).type = inputType;
        }
        if (detail == false) {
            if (inputclass.includes('floating') || inputclass.includes('floatingline'))
                (<HTMLInputElement>mainInput).placeholder = '.';
        }
        if (elemclass && elemclass != '')
            mainInput.classList.add(elemclass);

        return mainInput;
    }

    public addItem(key: string, label: string, classes: string, refresh: boolean = false) {
        this.labels[key] = label;
        this.classes[key] = classes;
        if (refresh) this.refresh();
    }
}
(globalThis as any).WNMultiInput = WNMultiInput;

