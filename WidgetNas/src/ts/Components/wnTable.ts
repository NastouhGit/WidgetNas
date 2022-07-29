interface tablecoldata { caption: string, field: string, datatype: string, sortable: boolean, format: string };

class wntable {
    element: HTMLTableElement;

    cols: tablecoldata[]

    private headcols: HTMLTableCellElement[]

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLTableElement;
            this.Init();
        }
    }
    private Init() {
        this.FindHeader();
        this.ReadStaticData();
    }
    private FindHeader() {
        this.headcols = [];
        this.cols = [];

        let head = this.element.querySelector('thead');
        head?.querySelectorAll('th').forEach((x) => {
            this.headcols.push(x as HTMLTableCellElement)
        });
        if (this.headcols.length == 0)
            head?.querySelectorAll('td').forEach((x) => {
                this.headcols.push(x as HTMLTableCellElement)
            });
        this.headcols?.forEach((x) => {
            let col: tablecoldata = { caption: '', datatype: 'string', field: '', format: '', sortable: false };
            col.caption = x.innerText;
            if (x.hasAttribute('data-field')) col.field = WNparseString(x.getAttribute('data-field'), '');
            if (x.hasAttribute('data-type')) col.datatype = WNparseString(x.getAttribute('data-type'), 'string');
            if (x.hasAttribute('data-format')) col.format = WNparseString(x.getAttribute('data-format'), '');
            col.sortable = x.hasAttribute('sortable');
            this.cols.push(col);
        });
    }
    private ReadStaticData() {
    }
    
}