class wnsearchlist {
    element: HTMLElement;

    private searchbox: HTMLInputElement;
    private list: HTMLElement;
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
        this.list = this.searchbox.nextElementSibling as HTMLElement;
        if (this.list == null)
            this.list = this.searchbox.previousElementSibling as HTMLElement;
        if (this.list == null)
            return;
        if (this.element.hasAttribute('display-id'))
            this.displayelement = document.getElementById(this.element.getAttribute('display-id')) as HTMLInputElement;
        if (this.element.hasAttribute('value-id'))
            this.valueelement = document.getElementById(this.element.getAttribute('value-id')) as HTMLInputElement;

        this.searchbox.addEventListener('input',
            async (e) => {
                let v = (<HTMLInputElement>e.target).value;
                WNFilter(this.list.querySelectorAll('*'), 'contains(' + v + ')');
                if (this.list.getAttribute('wn-type') == 'tree') {
                    this.FixedTreeDisplay();
                }
            });

        this.WaitToInitList();
    }
    private WaitToInitList() {
        if (this.displayelement == null && this.valueelement == null)
            return;
        let tim = setInterval(() => {
            if (WN[this.list.id] != null) {
                if (this.list.getAttribute('wn-type') == 'list')
                    WN[this.list.id].selectionchange = (t, n) =>this.selectionchange(t, n);
                if (this.list.getAttribute('wn-type') == 'tree')
                    WN[this.list.id].selectionchange = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);

            }
        }, 100)
    }
    private FixedTreeDisplay() {
        let nodes = this.list.querySelectorAll('li:not([style*="display:none"]):not([style*="display: none"])');
        nodes.forEach((x) => {
            let p = x.parentElement;
            while (p != this.list) {
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
            if (this.list.getAttribute('wn-type') == 'tree')
                this.displayelement.value = (<wntree>t).currentcaption;
            else if (this.list.getAttribute('wn-type') == 'list')
                this.displayelement.value = (<wnlist>t).currentcaption;
        }
        if (this.valueelement != null) {
            if (this.list.getAttribute('wn-type') == 'tree')
                this.valueelement.value = (<wntree>t).currentvalue;
            else if (this.list.getAttribute('wn-type') == 'list')
                this.valueelement.value = (<wnlist>t).currentvalue;
        }

    }
}

