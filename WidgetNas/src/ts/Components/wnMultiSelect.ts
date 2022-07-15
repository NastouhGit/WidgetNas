class wnmultiselect {
    element: HTMLElement;

    selectedvalue: string[];
    selectedcaption: string[];

    private searchbox: HTMLInputElement;
    private selectedarea: HTMLElement;
    private dropdownlist: HTMLElement;

    private dropdown: wndropdown;
    private search: wnsearchlist;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        this.selectedvalue= [];
        this.selectedcaption = [];

        this.searchbox = this.element.querySelector('[type=search]');
        this.selectedarea = this.element.querySelector('.selecteditem');
        this.dropdownlist = this.element.querySelector('.dropdown');

        if (this.searchbox == null) {
            this.searchbox = document.createElement("input");
            this.searchbox.type = "search";
        }
        this.searchbox.autocomplete = 'off';
        if (this.selectedarea==null) {
            this.selectedarea = document.createElement("div");
            this.selectedarea.className = "selecteditem";
        }
        if (this.dropdownlist == null) {
            this.dropdownlist = document.createElement("div");
            this.dropdownlist.className = "dropdown";
        }
        this.element.setAttribute('wn-dropdown-event', '');
        this.dropdown = new wndropdown(this.element);

        this.search = new wnsearchlist(this.element);
        if (this.dropdownlist.hasChildNodes())
            this.search.list = this.dropdownlist.firstElementChild as HTMLElement;

        this.search.filterchanged = async () => {
            this.dropdown.Show();
        };

        this.searchbox.addEventListener('focusin', async () => {
            this.dropdown.Show();
        });

        this.WaitToInitList();

        
    }
    private WaitToInitList() {
        let tim = setInterval(() => {
            if (WN[this.search.list.id] != null) {
                if (this.search.list.getAttribute('wn-type') == 'list')
                    WN[this.search.list.id].selectionchange = (t, n) => this.selectionchange(t, n);
                if (this.search.list.getAttribute('wn-type') == 'tree')
                    WN[this.search.list.id].selectionchange = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);

            }
        }, 100)
    }
    private selectionchange(t, n) {
        let value = '';
        let caption = '';

        if (this.search.list.getAttribute('wn-type') == 'tree') {
            caption = (<wntree>t).currentcaption;
            value = (<wntree>t).currentvalue;
        }
        else if (this.search.list.getAttribute('wn-type') == 'list') {
            caption = (<wnlist>t).currentcaption;
            value = (<wnlist>t).currentvalue;
        }
        if (value == null) value = '';

        if (this.selectedvalue.indexOf(value) == -1 || this.selectedcaption.indexOf(caption) == -1) {
            this.selectedvalue.push(value);
            this.selectedcaption.push(caption);

            let sp = document.createElement('span');
            sp.innerHTML = caption;
            sp.setAttribute('value', value);
            sp.dir = this.element.dir;
            
            sp.addEventListener('click', (t) => {
                let node = (<HTMLElement>t.target);
                let value = node.getAttribute('value');
                let caption = node.innerHTML;

                let idx1 = this.selectedcaption.indexOf(caption);
                let idx2 = this.selectedvalue.indexOf(value);

                if (idx1 == idx2) {
                    this.selectedcaption.splice(idx1, 1);
                    this.selectedvalue.splice(idx1, 1);
                }
                else if (value!='') {
                    this.selectedcaption.splice(idx2, 1);
                    this.selectedvalue.splice(idx2, 1);
                }
                else  {
                    this.selectedcaption.splice(idx1, 1);
                    this.selectedvalue.splice(idx1, 1);
                }

                node.remove();
            });
            this.selectedarea.appendChild(sp);
        }
    }
}

