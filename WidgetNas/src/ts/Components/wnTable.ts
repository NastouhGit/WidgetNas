interface tablecoldata { caption: string, field: string, datatype: string, sortable: boolean, format: string };

class wntable {
    element: HTMLTableElement;

    cols: tablecoldata[]
    masterdata: any[];
    renderata: any[];
    date: wnDate = new wnDate();

    private headcols: HTMLTableCellElement[];
    private bodytable: HTMLTableSectionElement;

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
        this.ReadStaticData();
        this.Render();
    }
    private FindHeader() {
        this.headcols = [];
        this.cols = [];

        let head = this.element.querySelector('thead');
        head?.querySelectorAll('td,th').forEach((x) => {
            this.headcols.push(x as HTMLTableCellElement)
        });
        let i = 1;
        let colindex = 0;
        this.headcols?.forEach((x) => {
            let col: tablecoldata = { caption: '', field: '', datatype: '', sortable: false, format: '' };
            col.caption = x.innerText;
            if (x.hasAttribute('data-field')) col.field = WNparseString(x.getAttribute('data-field'), '');
            if (x.hasAttribute('data-type')) col.datatype = WNparseString(x.getAttribute('data-type'), 'string');
            if (x.hasAttribute('data-format')) col.format = WNparseString(x.getAttribute('data-format'), '');
            col.sortable = x.hasAttribute('sortable');
            x.setAttribute('index', colindex.toString());
            if (col.sortable) {
                if (!x.classList.contains('sort'))
                    x.classList.add('sort');

                x.addEventListener('click', (t) => {
                    this.Sort(WNparseNumber((t.target as HTMLElement).getAttribute('index')));
                    this.Render();
                });

            }
            if (col.field == '') {
                col.field = 'f' + i;
                i++;
            }
            colindex++;
            this.cols.push(col);
        });
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