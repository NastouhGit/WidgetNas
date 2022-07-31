interface tablecoldata { caption: string, field: string, datatype: string, sortable: boolean, format: string };

class wntable {
    element: HTMLTableElement;

    cols: tablecoldata[]
    masterdata: any[];
    renderata: any[];
    private headcols: HTMLTableCellElement[];
    private bodytable: HTMLTableSectionElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLTableElement;
            this.Init();
        }
    }
    private Init() {
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
        this.headcols?.forEach((x) => {
            let col: tablecoldata = { caption: '', datatype: 'string', field: '', format: '', sortable: false };
            col.caption = x.innerText;
            if (x.hasAttribute('data-field')) col.field = WNparseString(x.getAttribute('data-field'), '');
            if (x.hasAttribute('data-type')) col.datatype = WNparseString(x.getAttribute('data-type'), 'string');
            if (x.hasAttribute('data-format')) col.format = WNparseString(x.getAttribute('data-format'), '');
            col.sortable = x.hasAttribute('sortable');
            if (col.field == '') {
                col.field = 'f' + i;
                i++;
            }
            this.cols.push(col);
        });
    }
    private ReadStaticData() {
        this.masterdata = [];
        this.bodytable = this.element.querySelector('tbody') as HTMLTableSectionElement;
        let tr = this.bodytable?.querySelectorAll('tr');
        tr.forEach((x: HTMLTableRowElement) => {
            let cols = x.querySelectorAll('td,th');
            let r = {};
            for (var i = 0; i < cols.length; i++) {
                r[this.cols[i].field] = cols[i].innerHTML;
            }
            this.masterdata.push(r);
        });
        this.renderata = this.masterdata.map((x) => x);
    }
    private Render() {
        if (this.bodytable == null) return;
        this.bodytable.innerHTML = '';
        this.renderata.forEach((x) => {
            let tr = document.createElement('tr');
            for (var i = 0; i < this.cols.length; i++) {
                let td = document.createElement('td');
                let text = x[this.cols[i].field];
                if (this.cols[i].datatype == 'number')
                    text = WNparseNumber(text, 0);
                if (this.cols[i].format != '')
                    text = WNStringFormat(text, this.cols[i].format);

                td.innerHTML = text;
                tr.appendChild(td);
            }
            this.bodytable.appendChild(tr);
        });
    }
}