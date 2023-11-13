class WNMultiInput implements IWNMultiInput {
    public readonly nameType: string = 'WNMultiInput';
    public element: HTMLElement;

    public inputs: HTMLElement[];

    private detail: HTMLElement;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.inputs = [];
        let lables = [];
        let values = [];
        let classes = [];
        if (this.element.hasAttribute('lables')) lables = WNparseString(this.element.getAttribute('lables')).replace(/[\[\]']/g, '').split(/\s*,\s*/);
        if (this.element.hasAttribute('values')) values = WNparseString(this.element.getAttribute('values')).replace(/[\[\]']/g, '').split(/\s*,\s*/);
        if (this.element.hasAttribute('classes')) classes=WNparseString(this.element.getAttribute('classes')).replace(/[\[\]']/g, '').split(/\s*,\s*/);

        let inputIG = this.element.querySelector("ig,.ig");
        if (!inputIG) {
            inputIG = document.createElement("ig");
            this.element.appendChild(inputIG);
        }
        let inputclass = '';
        if (this.element.classList.contains('floating'))
            inputclass = 'floating';
        else if (this.element.classList.contains('floatingline'))
            inputclass = 'floatingline';
        else if (this.element.classList.contains('group'))
            inputclass = 'group';
        if (inputclass != '') {
            inputIG.classList.add(inputclass);
            this.element.classList.remove(inputclass);
        }

        let mainInput: HTMLElement;
        inputIG.querySelectorAll('*').forEach(x => {
            if (x.tagName != 'LABEL' && x.tagName != 'BUTTON') {
                mainInput = x as HTMLElement;
                return;
            }
        });
        let mainLabel = inputIG.querySelector('label');

        if (!mainInput) {
            mainInput = document.createElement('input');
            if (inputclass == 'floating' || inputclass == 'floatingline')
                (<HTMLInputElement>mainInput).placeholder = '.';
            inputIG.appendChild(mainInput);
        }
        this.inputs.push(mainInput);



        if (!mainLabel) {
            mainLabel = document.createElement('label');
            mainLabel.innerHTML = lables[0];
            inputIG.appendChild(mainLabel);
        }
       
        let expandButton = inputIG.querySelector('button');
        if (!expandButton) {
            expandButton = document.createElement('button');
            inputIG.appendChild(expandButton);
        }
        expandButton.addEventListener("click", () => { this.toggle() })
        this.detail = this.element.querySelector('detail,.detail');
        if (!this.detail) {
            this.detail = document.createElement('div');
            this.detail.className = 'detail';
            this.element.appendChild(this.detail);
        }
        if (this.detail.innerHTML == '') {
            for (var i = 1; i < lables.length; i++) {
                let ig = document.createElement('ig');
                let label = document.createElement('label');
                let input = document.createElement('input');
                label.innerHTML = lables[i];
                if (classes[i] != '') input.classList.add(classes[i]);
                ig.appendChild(label);
                ig.appendChild(input);
                this.detail.appendChild(ig);
                this.inputs.push(input);
            }
        }

        this.values = values;

        if (this.element.hasAttribute('required')) {
            if (this.inputs.length > 0) {
                this.inputs[0].setAttribute('required', this.element.getAttribute('required'));
            }
            this.element.removeAttribute('required');
        }
        if (this.element.hasAttribute('onvalidation')) {
            if (this.inputs.length > 0) {
                this.inputs[0].setAttribute('onvalidation', this.element.getAttribute('onvalidation'));
            }
            this.element.removeAttribute('onvalidation');
        }
        if (inputclass == 'group') {
            inputIG.innerHTML = '';
            inputIG.appendChild(mainLabel);
            inputIG.appendChild(mainInput);
            inputIG.appendChild(expandButton);
        }
    }
    private toggle() {
        this.element.classList.toggle('expand');
    }
    public get values(): string[] {
        let value = [];
        this.inputs.forEach(x => {
            if (x.tagName == 'INPUT')
                value.push((<HTMLInputElement>x).value)
            else if (x.tagName == 'OPTION')
                value.push((<HTMLOptionElement>x).value)
            else
                value.push(x)
        });
        return value;
    }
    public set values(value: string[]) {
        if (!value) value = [];
        for (var i = 0; i < this.inputs.length - value.length; i++) value.push('');
        for (var i = 0; i < this.inputs.length; i++) {
            let x = this.inputs[i];
            if (x.tagName == 'INPUT')
                (<HTMLInputElement>x).value = value[i];
            else if (x.tagName == 'OPTION')
                (<HTMLOptionElement>x).value = value[i];
        }
        
    }
}

