class wnsearchlist {
    element: HTMLElement;

    filterchanged: any;

    private searchbox: HTMLInputElement;
    listelement: HTMLElement;
    list: wnlist | wntree;
    private displayelement: HTMLInputElement;
    private valueelement: HTMLInputElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        this.searchbox = this.element.querySelector('[type=search]');
        this.searchbox.autocomplete = 'off';
        this.listelement = this.searchbox.nextElementSibling as HTMLElement;
        if (this.listelement == null)
            this.listelement = this.searchbox.previousElementSibling as HTMLElement;
        if (this.listelement == null)
            return;
        
        if (this.element.hasAttribute('display-id'))
            this.displayelement = document.getElementById(this.element.getAttribute('display-id')) as HTMLInputElement;
        if (this.element.hasAttribute('value-id'))
            this.valueelement = document.getElementById(this.element.getAttribute('value-id')) as HTMLInputElement;

        this.searchbox.addEventListener('input',
            async (e) => {
                let v = (<HTMLInputElement>e.target).value;
                WNFilter(this.listelement.querySelectorAll('*'), 'contains(' + v + ')');
                if (this.listelement.getAttribute('wn-type') == 'tree') {
                    this.FixedTreeDisplay();
                }
                if (this.filterchanged != null)
                    this.filterchanged();
            });

        this.WaitToInitList();
    }
    private WaitToInitList() {
        //if (this.displayelement == null && this.valueelement == null)
        //    return;
        let tim = setInterval(() => {
            if (WN[this.listelement.id] != null) {
                this.list = WN[this.listelement.id];
                this.list.selectionchange = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);

            }
        }, 100)
    }
    private FixedTreeDisplay() {
        let nodes = this.listelement.querySelectorAll('li:not([style*="display:none"]):not([style*="display: none"])');
        nodes.forEach((x) => {
            let p = x.parentElement;
            while (p != this.listelement) {
                p.style.display = '';
                p.classList.remove('collapsed');
                let pp = p.querySelectorAll('[class*="tree-item"]');
                pp.forEach((xx: HTMLElement) => { xx.style.display = '' });
                p = p.parentElement;
            }
        });
    }

    private selectionchange(t, n) {
        if (this.displayelement != null) {
            this.displayelement.value = this.list.currentcaption;
        }
        if (this.valueelement != null) {
            this.valueelement.value = this.list.currentvalue;
        }

    }
}

