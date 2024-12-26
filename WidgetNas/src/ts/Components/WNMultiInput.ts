class WNMultiInput implements IWNMultiInput {
    public readonly nameType: string = 'WNMultiInput';
    public element: HTMLElement;

    public inputs: HTMLElement[];

    private detail: HTMLElement;
    private labels: WNDictionary;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.inputs = [];
        this.labels = {};
        let _labels = {};
        let values: WNDictionary = {};
        let classes: WNDictionary = {};
        let _default = '';
        let setDefaultValue = true;
        let inputType = 'text';

        if (this.element.hasAttribute('labels')) _labels = WNToDictionary(this.element.getAttribute('labels'));
        if (this.element.hasAttribute('values')) values = WNToDictionary(this.element.getAttribute('values'));
        if (this.element.hasAttribute('classes')) classes = WNToDictionary(this.element.getAttribute('classes'));
        if (this.element.hasAttribute('default')) _default = WNparseString(this.element.getAttribute('default'));
        if (this.element.hasAttribute('type')) inputType = WNparseString(this.element.getAttribute('type'), inputType);

        let lkey = Object.keys(_labels);
        if (lkey.length == 0) {
            _labels = this.getLables();
            lkey = Object.keys(_labels);
            setDefaultValue = false;
        }
        if (_default == '' && lkey.length > 0)
            _default = lkey[0];
        this.labels[_default] = _labels[_default];
        lkey.forEach((x) => {
            if (x != _default)
                this.labels[x] = _labels[x];
            if (!values[x])
                values[x] = '';
        });

        let inputIG = this.element.querySelector("ig,.ig");
        if (!inputIG) {
            inputIG = document.createElement("ig");
        }
        let inputclass = '';
        let ele = this.element;
        while (ele && inputclass == '') {
            if (ele.classList.contains('floating'))
                inputclass += ' floating';
            else if (ele.classList.contains('floatingline'))
                inputclass += ' floatingline';
            else if (ele.classList.contains('group'))
                inputclass += ' group';
            else if (ele.classList.contains('first-label'))
                inputclass += ' first-label';
            else if (ele.classList.contains('first-input'))
                inputclass += ' first-input';
            ele = ele.parentElement;
        }
        inputclass = inputclass.trim();

        if (inputclass != '') {
            inputIG.classList.add(inputclass);
            this.element.classList.remove(inputclass);
        }

        let mainInput: HTMLElement = inputIG.querySelector('input,select,textarea') as HTMLElement;
        //inputIG.querySelectorAll('*').forEach(x => {
        //    if (x.tagName != 'LABEL' && x.tagName != 'BUTTON') {
        //        mainInput = x as HTMLElement;
        //        return;
        //    }
        //});

        if (!mainInput) mainInput = this.createInput(inputType, inputclass, classes[_default],false);
        
        let mainLabel = inputIG.querySelector('label');
        if (!mainLabel) {
            mainLabel = document.createElement('label');
            mainLabel.innerHTML = this.labels[_default];
        }

        let expandButton = inputIG.querySelector('button');
        if (!expandButton) {
            expandButton = document.createElement('button');
        }
        expandButton.type = 'button';
        expandButton.addEventListener("click", () => { this.toggle() })

        if (inputclass.includes('floating') || inputclass.includes('floatingline') || inputclass.includes('first-input')) {
            inputIG.appendChild(mainInput);
            inputIG.appendChild(mainLabel);
            inputIG.appendChild(expandButton);
}
        else {
            inputIG.appendChild(mainLabel);
            if (this.element.classList.contains('group-input-button')) {
                let div = document.createElement('div');
                div.appendChild(mainInput);
                div.appendChild(expandButton);
                inputIG.appendChild(div);
            }
            else {
                inputIG.appendChild(mainInput);
                inputIG.appendChild(expandButton);
            }
}

        this.inputs.push(mainInput);

        this.detail = this.element.querySelector('detail,.detail');
        if (!this.detail) {
            this.detail = document.createElement('div');
            this.detail.className = 'detail';
        }
        if (this.detail.innerHTML == '') {
            lkey = Object.keys(this.labels);
            for (var i = 1; i < lkey.length; i++) {
                let ig = document.createElement('ig');
                let label = document.createElement('label');
                let input = this.createInput(inputType, '', classes[lkey[i]],true);
                label.innerHTML = this.labels[lkey[i]];
                ig.appendChild(label);
                ig.appendChild(input);
                this.detail.appendChild(ig);
                this.inputs.push(input);
            }
        }
        else {
            this.inputs = [];
            this.element.querySelectorAll('input,select,textarea').forEach((x: HTMLElement) => this.inputs.push(x));
        }

        if (setDefaultValue == true)
            this.values = values;

        if (this.element.hasAttribute('required')) {
            if (this.inputs.length > 0) {
                this.inputs[0].setAttribute('required', this.element.getAttribute('required'));
            }
            this.element.removeAttribute('required');
        }
        if (this.element.hasAttribute('norequired')) {
            if (this.inputs.length > 0) {
                this.inputs[0].setAttribute('norequired', this.element.getAttribute('norequired'));
            }
            this.element.removeAttribute('norequired');
        }
        if (this.element.hasAttribute('onvalidation')) {
            if (this.inputs.length > 0) {
                this.inputs[0].setAttribute('onvalidation', this.element.getAttribute('onvalidation'));
            }
            this.element.removeAttribute('onvalidation');
        }


        let feedback = this.element.querySelector('.valid-feedback');
        if (feedback)
            inputIG.appendChild(feedback);

        feedback = this.element.querySelector('.invalid-feedback');
        if (feedback)
            inputIG.appendChild(feedback);

        this.element.appendChild(inputIG);
        this.element.appendChild(this.detail);

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
    private toggle() {
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
            value=t;
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
}


