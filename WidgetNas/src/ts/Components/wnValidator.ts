class WNValidator implements IWNValidator {
    public readonly nameType: string = 'WNValidator';
    public element: HTMLFormElement;
    
    constructor(element: HTMLElement) {
        if (element !== undefined && element !== null) {
            this.element = element as HTMLFormElement;
            this.init();
        }
    }
    //Setting properties, internal variables and primitive events
    private init() {
        this.element.addEventListener('submit', (event) => {
            this.validate(<HTMLFormElement>event.target, event);
        });
        this.element.addEventListener('reset', (event)=> {
            this.reset();
        });
    }
    private validate(form: HTMLFormElement, event: Event): boolean {
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
    //Check all the entries to check whether the information is correct or not.
    public isValid(): boolean {
        wnValidator_onvalidationcheck(this.element.children, null);
        this.element.classList.add('validated');
        return this.element.checkValidity();
    }
    //The previous validation messages are deleted and the system returns to the initial state.
    public reset(): void {
        this.element.classList.remove('validated');
        this.element.noValidate = true;
    }
}
async function wnValidator_onvalidationcheck(children: HTMLCollection, event: Event) {
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