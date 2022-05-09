class wncollapse {
    element: HTMLFormElement;
    beforecollapse: any;
    aftercollapse: any;
    //private
    private _target = '';
    private _remove_control = '';
    private _target_mode = 'toggle';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Init();
        }
    }
    private Init() {
        //reset old one
        this.element.removeEventListener("click", () => { this.collapse(); });

        if (this.element.hasAttribute('target'))
            this._target = this.element.getAttribute('target');
        if (this.element.hasAttribute('remove'))
            this._remove_control = this.element.getAttribute('remove');
        if (this.element.hasAttribute('target-mode')) {
            this._target_mode = this.element.getAttribute('target-mode').toLowerCase();
            if (this._target_mode != 'toggle' && this._target_mode != 'show' && this._target_mode != 'hide')
                this._target_mode = 'toggle';
        }
        if (this.element.hasAttribute('beforecollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('beforecollapse'));
        if (this.element.hasAttribute('aftercollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('aftercollapse'));

        this.element.addEventListener("click", () => { this.collapse(); });
    }
    collapse() {
        if (this.beforecollapse)
            this.beforecollapse();

        this.HideControls(this._remove_control);
        let TargetNodes = WNGetNodesList(this._target, document, this.element);
        let countshow = 0;
        let counthide = 0;
        for (var i = 0; i < TargetNodes.length; i++) {
            if (TargetNodes[i].classList.contains('show'))
                countshow++;
            else
                counthide++;
        }

        let mode = this._target_mode;
        if (this._target_mode == 'toggle') {
            if (countshow > counthide) {
                mode = 'hide';
            }
            else {
                mode = 'show';
            }
        }
        if (this.element != null) {
            this.element.classList.remove('collapsing');
            if (mode == 'show') {
                this.element.classList.remove('collapsed');
            }

            else if (mode == 'hide')
                this.element.classList.add('collapsed');
        }
        for (var i = 0; i < TargetNodes.length; i++) {
            if (mode == 'show') {
                TargetNodes[i].classList.add('show');
            }
            else if (mode == 'hide') {
                if (TargetNodes[i].classList.contains('show')) {
                    TargetNodes[i].classList.add('collapsing');
                    if (getComputedStyle(TargetNodes[i]).animationName !='none' ) {
                        TargetNodes[i].addEventListener('animationend', (e) => {
                            (<HTMLElement>e.currentTarget).classList.remove('show');
                            (<HTMLElement>e.currentTarget).classList.remove('collapsing');
                        }, { once: true, capture: true });
                    }
                    else {
                        TargetNodes[i].classList.remove('show');
                        TargetNodes[i].classList.remove('collapsing');
                    }
                }
            }
        }
        if (this.aftercollapse)
            this.aftercollapse();

    }

    private HideControls(list) {
        let elems = WNGetNodesList(list);
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('show');
            elems[i].classList.add('collapsed');
        }
    }
    set target(value: string) { this._target = value; }
    get target() { return this._target; }

    set remove(value: string) { this._remove_control = value; }
    get remove() { return this._remove_control; }

    set targetmode(value: string) { this._target_mode = value; }
    get targetmode() { return this._target_mode; }
}