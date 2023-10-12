class WNCollapse implements IWNCollapse {
    public readonly nameType: string = 'WNCollapse';
    public element: HTMLFormElement;
    public target: string='';
    public remove: string='';
    public targetMode: targetModeEnum = 'toggle';

    public beforecollapse: (t) => boolean;
    public aftercollapse: (t) => void;

    //private
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.init();
        }
    }
    private init() {
        //reset old one
        this.element.removeEventListener("click", () => { this.collapse(); });

        if (this.element.hasAttribute('target'))
            this.target = this.element.getAttribute('target');
        if (this.element.hasAttribute('remove'))
            this.remove = this.element.getAttribute('remove');
        if (this.element.hasAttribute('target-mode')) {
            switch (this.element.getAttribute('target-mode').toLowerCase()) {
                case "show": this.targetMode = "show"; break;
                case "hide": this.targetMode = "hide"; break;
                default: this.targetMode = "toggle"; break;
            }
        }
        if (this.element.hasAttribute('beforecollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('beforecollapse'));
        if (this.element.hasAttribute('aftercollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('aftercollapse'));

        this.element.addEventListener("click", () => { this.collapse(); });
    }
    public collapse() {
        if (this.beforecollapse && !this.beforecollapse?.(this))
            return;

        this.HideControls(this.remove);
        let TargetNodes = WNGetNodesList(this.target, document, this.element);
        let countshow = 0;
        let counthide = 0;
        for (var i = 0; i < TargetNodes.length; i++) {
            if (TargetNodes[i].classList.contains('show'))
                countshow++;
            else
                counthide++;
        }

        let mode = this.targetMode;
        if (this.targetMode == "toggle") {
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
                    if (getComputedStyle(TargetNodes[i]).animationName != 'none') {
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

        this.aftercollapse?.(this);

    }

    private HideControls(list) {
        let elems = WNGetNodesList(list);
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('show');
            elems[i].classList.add('collapsed');
        }
    }
}