class wnsearchlist {
    element: HTMLElement;

    filterchanged: any;

    private searchbox: HTMLInputElement;
    listelement: HTMLElement;
    list: wnlist | wntree;
    private displayelement: HTMLInputElement;
    private valueelement: HTMLInputElement;
    private _Url: string;

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

        this._Url = WNparseString(this.element.getAttribute('url'), this._Url);
        this.searchbox.addEventListener('input',
            async (e) => {
                let v = (<HTMLInputElement>e.target).value;
                if (this._Url == null || this._Url == '') {
                    WNFilter(this.listelement.querySelectorAll('tr'), 'contains(' + v + ')');
                    WNFilter(this.listelement.querySelectorAll('li'), 'contains(' + v + ')');
                    if (this.listelement.getAttribute('wn-type') == 'tree') {
                        this.FixedTreeDisplay();
                    }
                }
                else {
                    await Post(WNAddStringQuote(v), this._Url).then((r) => {
                        if (this.listelement.getAttribute('wn-type') == 'list') {
                            let l = <wnlist>this.list;
                            l.setdata(r,
                                WNparseString(this.element.getAttribute('field-display'), ''),
                                WNparseString(this.element.getAttribute('field-value'), ''),
                                false);
                        }
                        if (this.listelement.getAttribute('wn-type') == 'tree') {
                            let fs = WNparseString(this.element.getAttribute('fieldset'), '').split(',');
                            if (fs.length == 6) {
                                let l = <wntree>this.list;
                                l.setdata(r, fs[0], fs[1], fs[2], fs[3], fs[4], fs[5], false);
                            }
                        }

                    }).catch((e) => {
                        console.log(e);
                    });
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

