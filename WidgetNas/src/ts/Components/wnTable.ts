interface tablecoldata {index:number, caption: string, field: string, datatype: string, sortable: boolean, filterable: boolean, format: string,class:string };

class wntable {
    element: HTMLTableElement;

    cols: tablecoldata[]
    masterdata: any[];
    renderata: any[];
    date: wnDate = new wnDate();

    private headcols: HTMLTableCellElement[];
    private bodytable: HTMLTableSectionElement;
    private filterinput: HTMLInputElement[];

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLTableElement;
            this.Init();
        }
    }
    private Init() {
        if (this.element.hasAttribute("cultureinfo"))
            this.date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')() as wnCultureInfo;
        if (this.element.hasAttribute("calendar"))
            this.date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')() as wnCalendar;
        if (!this.element.classList.contains('pointer'))
            this.element.classList.add('pointer');
        this.FindHeader();
        this.FilterHeaderRow();
        this.ReadStaticData();
        this.Render();
    }
    private FindHeader() {
        this.headcols = [];
        this.cols = [];

        let head = this.element.querySelector('thead');
        head?.querySelectorAll('tr:first-child td,th').forEach((x) => {
            this.headcols.push(x as HTMLTableCellElement)
        });
        let i = 1;
        let colindex = 0;
        this.headcols?.forEach((x) => {
            let col: tablecoldata = { index:0, caption: '', field: '', datatype: '', sortable: false, filterable: false, format: '', class: '' };
            col.caption = x.innerText;
            if (x.hasAttribute('data-field')) col.field = WNparseString(x.getAttribute('data-field'), '');
            if (x.hasAttribute('data-type')) col.datatype = WNparseString(x.getAttribute('data-type'), 'string');
            if (x.hasAttribute('data-format')) col.format = WNparseString(x.getAttribute('data-format'), '');
            col.class = x.className;
            col.sortable = x.hasAttribute('sortable');
            col.index = colindex;
            x.setAttribute('index', colindex.toString());
            if (col.sortable) {
                if (!x.classList.contains('sort'))
                    x.classList.add('sort');

                x.addEventListener('click', (t) => {
                    this.Sort(WNparseNumber((t.target as HTMLElement).getAttribute('index')));
                    this.Render();
                });

            }
            col.filterable = x.hasAttribute('filterable');
            if (col.field == '') {
                col.field = 'f' + i;
                i++;
            }
            colindex++;
            this.cols.push(col);
        });
    }
    private FilterHeaderRow() {
        this.filterinput = [];
        let addfilter = false;
        let tr = document.createElement('tr');
        this.cols.forEach((x) => {
            let td = document.createElement('td');
            if (x.filterable) {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.setAttribute('index', x.index.toString())
                inp.addEventListener('input', (t) => { this.SetFilter() })
                td.appendChild(inp);
                addfilter = true;
                this.filterinput.push(inp);
            }
            else
                this.filterinput.push(null);
            tr.appendChild(td);
        });
        if (addfilter) {
            let head = this.element.querySelector('thead');
            head?.appendChild(tr);
        }
    }
    private ReadStaticData() {
        this.masterdata = [];
        this.bodytable = this.element.querySelector('tbody') as HTMLTableSectionElement;
        let tr = this.bodytable?.querySelectorAll('tr');
        let privatekey = 1;
        tr.forEach((x: HTMLTableRowElement) => {
            let cols = x.querySelectorAll('td,th');
            let r = {};
            r['__privatekey'] = privatekey;

            for (var i = 0; i < cols.length; i++) {
                let v = { caption: cols[i].innerHTML, value: cols[i].innerHTML };
                v = this.fixedData(v, this.cols[i]);
                r[this.cols[i].field] = v  ;
            }
            this.masterdata.push(r);
            privatekey++;
        });
        this.renderata = this.masterdata.map((x) => x);
    }
    private fixedData(r, c): any {
        if (c.datatype == 'number') {
            r.value = WNparseNumber(r.value, 0);
            r.caption = r.value.toString();
        }
        if (c.datatype == 'date') {
            r.value = new Date(r.value);
            this.date.SetDate(r.value);
            r.caption = this.date.toString(c.format);
        }
        else if (c.format != '') //Check other type format
            r.caption = WNStringFormat(r.value, c.format, this.date.CultureInfo);
        return r;
    }
    private Render() {
        if (this.bodytable == null) return;
        this.bodytable.innerHTML = '';
        this.renderata.forEach((x) => {
            let tr = document.createElement('tr');
            for (var i = 0; i < this.cols.length; i++) {
                let td = document.createElement('td');
                td.innerHTML = x[this.cols[i].field].caption;
                tr.appendChild(td);
            }
            this.bodytable.appendChild(tr);
        });
    }
    private SetFilter() {
        let rows = this.bodytable.querySelectorAll('tr');
        rows.forEach((x) => {
            x.style.display = '';
            let col = x.querySelectorAll('td');
            for (var i = 0; i < this.filterinput.length; i++) {
                if (x.style.display != 'none' && this.filterinput[i] != null && this.filterinput[i].value != '') {
                    if (!col[i].innerText.toLowerCase().includes(this.filterinput[i].value.toLowerCase())) {
                        x.style.display = 'none';
                        break;
                    }
                }
            }
        });

    }
    Sort(colIndex: number) {
        let desc = !this.headcols[colIndex].classList.contains('desc');
        if (!(this.headcols[colIndex].classList.contains('desc') || this.headcols[colIndex].classList.contains('asc')))
            desc = false;

        let field = this.cols[colIndex].field;

        this.renderata.sort((x, y) => {
            if (x[field].caption > y[field].caption)
                return desc ? -1 : 1;
            else if (x[field].caption < y[field].caption)
                return desc ? 1 : -1;
            return 0;
        });

        this.headcols.forEach((x) => x.classList.remove('desc','asc') );
        this.headcols[colIndex].classList.add(desc ? 'desc' : 'asc');
    }
}