class wnvalidator {
    element: HTMLFormElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Render();
        }
    }
    Render() {
        this.element.addEventListener('submit', (event)=> {
            this.Validate(<HTMLFormElement>event.srcElement, event);
        });
        this.element.addEventListener('reset', (event)=> {
            this.Reset(<HTMLFormElement>event.srcElement);
        });
    }
    Validate(form: HTMLFormElement, event): boolean {
        if (form == undefined || form == null)
            form = this.element;

        wnValidator_onvalidationcheck(form.children, event);

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('validated');
        return form.checkValidity();
    }
    IsValid(): boolean {
        wnValidator_onvalidationcheck(this.element.children, event);
        this.element.classList.add('validated');
        return this.element.checkValidity();
    }
    Clear() {
        this.element.classList.remove('validated');
        this.element.noValidate = true;
    }
    Reset(form: HTMLFormElement) {
        form.classList.remove('validated');
    }
}
function wnValidator_onvalidationcheck(children: HTMLCollection, event) {
    for (var i = 0; i < children.length; i++) {
        let x = children.item(i);
        let elems = x.querySelectorAll('[norequired]');
        elems.forEach((x) => {
            (x as HTMLInputElement).setAttribute('required', '');
            (x as HTMLInputElement).removeAttribute('norequired')
        });

        if (!(getComputedStyle(x).display == 'none' || getComputedStyle(x).visibility == 'hidden')) {
            if (x.hasAttribute('onvalidation')) {
                let func = x.getAttribute('onvalidation');
                let ret = false;
                if (func.includes('=>'))
                    ret = new Function('t', 'e', 'return ' + func)()(x, event);
                else
                    ret = new Function(func)();

                if (!ret)
                    (x as HTMLInputElement).setCustomValidity('Error');
                else
                    (x as HTMLInputElement).setCustomValidity('');
            }
            if (x.childElementCount > 0)
                wnValidator_onvalidationcheck(x.children, event);
        }
        else {
            if (x.hasAttribute('required'))
                (x as HTMLInputElement).setCustomValidity('');
            let elems = x.querySelectorAll('[required]');
            elems.forEach((x) => {
                (x as HTMLInputElement).setAttribute('norequired', '');
                (x as HTMLInputElement).removeAttribute('required')
            });
        }

    };
}