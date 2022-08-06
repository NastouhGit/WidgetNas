interface tablecoldata { index: number, caption: string, field: string, datatype: string, sortable: string, filterable: string, format: string, class: string };

class wntable {
    element: HTMLTableElement;

    cols: tablecoldata[]
    data: any[];
    renderdata: any[];
    date: wnDate = new wnDate();
    beforefilter: any;
    afterfilter: any;
    beforesort: any;
    aftersort: any;
    beforeselected: any;
    selectedchanged: any;
    selecteditem: any;
    selectedrow: HTMLTableRowElement;

    private pagesize = -1;
    private currentPage = 1;
    private totalPages = 1;
    private paginationButtons: HTMLButtonElement[];

    private headtable: HTMLTableSectionElement;
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

        if (this.element.hasAttribute('onbeforefilter'))
            this.beforefilter = new Function('t', this.element.getAttribute('onbeforefilter'));
        if (this.element.hasAttribute('onbafterfilter'))
            this.afterfilter = new Function('t', this.element.getAttribute('onafterfilter'));
        if (this.element.hasAttribute('onbeforesort'))
            this.beforesort = new Function('t', this.element.getAttribute('onbeforesort'));
        if (this.element.hasAttribute('onbaftersort'))
            this.aftersort = new Function('t', this.element.getAttribute('onaftersort'));
        if (this.element.hasAttribute('onbeforeselected'))
            this.beforeselected = new Function('t,newselected', this.element.getAttribute('onbeforeselected'));
        if (this.element.hasAttribute('onselectedchanged'))
            this.selectedchanged = new Function('t,newselected,oldselected', this.element.getAttribute('onselectedchanged'));

        this.FindHeader();
        this.FilterHeaderRow();
        this.ReadStaticData();
        this.Pagination();
        this.SetFilter();
        this.refresh();
    }
    //Parse thead area
    private FindHeader() {
        this.headcols = [];
        this.cols = [];

        this.headtable = this.element.querySelector('thead');
        this.headtable?.querySelectorAll('tr:first-child td,th').forEach((x) => {
            this.headcols.push(x as HTMLTableCellElement)
        });
        let i = 1;
        let colindex = 0;
        this.headcols?.forEach((x) => {
            let col: tablecoldata = { index: 0, caption: '', field: '', datatype: '', sortable: '', filterable: '', format: '', class: '' };
            col.caption = x.innerText;
            if (x.hasAttribute('data-field')) col.field = WNparseString(x.getAttribute('data-field'), '');
            if (x.hasAttribute('data-type')) col.datatype = WNparseString(x.getAttribute('data-type'), 'string');
            if (x.hasAttribute('data-format')) col.format = WNparseString(x.getAttribute('data-format'), '');
            col.class = x.className;
            col.sortable = WNparseString(x.getAttribute('sortable'), 'value').toLowerCase();
            col.index = colindex;
            x.setAttribute('index', colindex.toString());
            if (col.sortable != '') {
                if (!x.classList.contains('sort'))
                    x.classList.add('sort');

                x.addEventListener('click', (t) => {
                    this.Sort(WNparseNumber((t.target as HTMLElement).getAttribute('index')));
                    this.refresh();
                });

            }
            col.filterable = WNparseString(x.getAttribute('filterable'), 'value').toLowerCase();
            if (col.field == '') {
                col.field = 'f' + i;
                i++;
            }
            colindex++;
            this.cols.push(col);
        });
    }

    //Add filter input at header row
    private FilterHeaderRow() {
        this.filterinput = [];
        let addfilter = false;
        let tr = document.createElement('tr');
        this.cols.forEach((x) => {
            let td = document.createElement('td');
            if (x.filterable != '') {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.setAttribute('index', x.index.toString())
                inp.addEventListener('input', (t) => { this.SetFilter(); this.refresh(); })
                td.appendChild(inp);
                addfilter = true;
                this.filterinput.push(inp);
            }
            else
                this.filterinput.push(null);
            tr.appendChild(td);
        });
        if (addfilter) {
            this.headtable?.appendChild(tr);
        }
    }

    private ReadStaticData() {
        let rows = [];
        this.bodytable = this.element.querySelector('tbody') as HTMLTableSectionElement;
        if (this.bodytable == null) {
            this.bodytable = document.createElement('tbody');
            this.element.appendChild(this.bodytable);
        }
        let tr = this.bodytable?.querySelectorAll('tr');
        tr.forEach((x: HTMLTableRowElement) => {
            let cols = x.querySelectorAll('td,th');
            let r = {};
            for (var i = 0; i < cols.length; i++) {
                r[this.cols[i].field] = cols[i].innerHTML;
            }
            rows.push(r);
        });
        this.setdata(rows, false);
    }
    private Pagination() {
        let paginationElement = this.element.querySelector('.pagination');
        if (paginationElement == null)
            return;
        let btn = paginationElement.querySelectorAll('button');
        if (btn == null)
            return;

        if (paginationElement.hasAttribute('rows'))
            this.pagesize = WNparseNumber(paginationElement.getAttribute('rows'), -1);
        this.paginationButtons = [];
        for (var i = 0; i < btn.length; i++) {
            if (btn[i].classList.contains('first'))
                btn[i].addEventListener('click', () => {
                    this.currentPage = 1;
                    this.refresh();
                });
            else if (btn[i].classList.contains('previous'))
                btn[i].addEventListener('click', () => {
                    this.currentPage--;
                    if (this.currentPage < 1)
                        this.currentPage = 1;
                    this.refresh();
                });
            else if (btn[i].classList.contains('next'))
                btn[i].addEventListener('click', () => {
                    this.currentPage++;
                    if (this.currentPage > this.totalPages)
                        this.currentPage = this.totalPages;
                    this.refresh();
                });
            else if (btn[i].classList.contains('last'))
                btn[i].addEventListener('click', () => {
                    this.currentPage = this.totalPages;
                    this.refresh();
                });
            else {
                btn[i].style.display = 'none';
                btn[i].addEventListener('click', (t) => {
                    this.currentPage = WNparseNumber((t.target as HTMLElement).innerText);
                    this.refresh();
                });
                this.paginationButtons.push(btn[i]);
            }
        }


    }
    private SetPaginationElements() {
        if (this.pagesize > 0) {
            this.paginationButtons.forEach((x) => x.style.display = 'none');

            let maxPages = this.paginationButtons.length;

            this.totalPages = Math.ceil(this.renderdata.length / this.pagesize);
            if (this.totalPages < 1) this.totalPages = 1;


            if (this.currentPage < 1)
                this.currentPage = 1
            else if (this.currentPage > this.totalPages)
                this.currentPage = this.totalPages

            let startPage: number, endPage: number;
            if (this.totalPages <= maxPages) {
                // total pages less than max so show all pages
                startPage = 1;
                endPage = this.totalPages;
            } else {
                // total pages more than max so calculate start and end pages
                let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
                let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
                if (this.currentPage <= maxPagesBeforeCurrentPage) {
                    // current page near the start
                    startPage = 1;
                    endPage = maxPages;
                } else if (this.currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
                    // current page near the end
                    startPage = this.totalPages - maxPages + 1;
                    endPage = this.totalPages;
                } else {
                    // current page somewhere in the middle
                    startPage = this.currentPage - maxPagesBeforeCurrentPage;
                    endPage = this.currentPage + maxPagesAfterCurrentPage;
                }
            }
            for (var i = startPage; i <= endPage; i++) {
                this.paginationButtons[i - startPage].innerText = (i).toString();
                this.paginationButtons[i - startPage].style.display = '';
                if (i == this.currentPage)
                    this.paginationButtons[i - startPage].classList.add('pagination-active');
                else
                    this.paginationButtons[i - startPage].classList.remove('pagination-active');

            }
        }
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
    private refresh() {
        if (this.bodytable == null) return;
        this.bodytable.innerHTML = '';
        let startrow = 0;
        let maxrow = this.renderdata.length;
        if (this.pagesize > -1) {
            startrow = this.pagesize * (this.currentPage - 1);
            maxrow = this.pagesize * this.currentPage;
            if (maxrow > this.renderdata.length)
                maxrow = this.renderdata.length;
        }
        for (var row = startrow; row < maxrow; row++) {
            let x = this.renderdata[row];
            let tr = document.createElement('tr');
            tr.setAttribute('index', row.toString());
            if (this.selecteditem!=undefined && x["__privatekey"] == this.selecteditem["__privatekey"])
                tr.classList.add('active');

            tr.addEventListener('click', (t) => {
                let tr = (t.target as HTMLElement);
                while (tr.tagName == 'TD')
                    tr = tr.parentElement;

                let rowidx = WNparseNumber(tr.getAttribute('index'), -1);
                let newselected = this.renderdata[rowidx];
                let oldselected = this.selecteditem;
                if (this.beforeselected) if (!this.beforeselected(this, newselected)) return;

                this.bodytable.querySelectorAll('tr').forEach((x) => x.classList.remove('active'));

                tr.classList.add('active');
                this.selecteditem = newselected;
                this.selectedrow = tr as HTMLTableRowElement;
                
                if (this.selectedchanged) this.selectedchanged(this, newselected, oldselected);

            }, false);

            for (var i = 0; i < this.cols.length; i++) {
                let td = document.createElement('td');
                td.innerHTML = x[this.cols[i].field].caption;
                tr.appendChild(td);
            }
            this.bodytable.appendChild(tr);
        };
        this.SetPaginationElements();
        if (this.bodytable.querySelector('tr.active') == null) {
            let old = this.selecteditem;
            this.selecteditem = undefined;
            this.selectedrow = undefined;
            if (this.selectedchanged) this.selectedchanged(this, undefined, old);
        }

    }
    private SetFilter() {
        let filtervalue = [];
        for (var i = 0; i < this.cols.length; i++) {
            if (this.cols[i].filterable != '' && this.filterinput[i].value != '') {
                filtervalue.push({ field: this.cols[i].field, filterable: this.cols[i].filterable, value: this.filterinput[i].value.toLowerCase() })
            }
        }
        this.renderdata = [];
        for (var row = 0; row < this.data.length; row++) {
            let x = this.data[row];
            let ret = true;

            for (var i = 0; i < filtervalue.length; i++) {
                if (filtervalue[i].filterable == 'value')
                    ret = ret && x[filtervalue[i].field].value.toLowerCase().includes(filtervalue[i].value);
                else if (filtervalue[i].filterable == 'caption')
                    ret = ret && x[filtervalue[i].field].caption.toLowerCase().includes(filtervalue[i].value);
                if (!ret)
                    break;
            }
            if (ret)
                this.renderdata.push(x);
        }
    }
    Sort(colIndex: number) {
        let sortby = this.cols[colIndex].sortable;
        if (sortby == '') return;

        if (this.beforesort != null)
            if (!this.beforesort(this))
                return;

        let desc = !this.headcols[colIndex].classList.contains('desc');
        if (!(this.headcols[colIndex].classList.contains('desc') || this.headcols[colIndex].classList.contains('asc')))
            desc = false;

        let field = this.cols[colIndex].field;
        this.renderdata.sort((x, y) => {
            if (sortby == 'value') {
                if (x[field].value > y[field].value)
                    return desc ? -1 : 1;
                else if (x[field].value < y[field].value)
                    return desc ? 1 : -1;
            }
            else if (sortby == 'caption') {
                if (x[field].caption > y[field].caption)
                    return desc ? -1 : 1;
                else if (x[field].caption < y[field].caption)
                    return desc ? 1 : -1;
            }
            return 0;
        });

        this.headcols.forEach((x) => x.classList.remove('desc', 'asc'));
        this.headcols[colIndex].classList.add(desc ? 'desc' : 'asc');

        if (this.aftersort != null)
            this.aftersort(this);
    }
    setdata(r: any, append: boolean) {
        if (append == false)
            this.data = [];
        let privatekey = 1;
        this.data = r.map((x) => {
            let k = {};
            k['__privatekey'] = { caption: privatekey, value: privatekey };
            for (var i = 0; i < this.cols.length; i++) {
                if (this.cols[i].field != '__privatekey') {
                    let v = { caption: x[this.cols[i].field], value: x[this.cols[i].field] };
                    v = this.fixedData(v, this.cols[i]);
                    k[this.cols[i].field] = v;
                }
            }
            privatekey++;
            return k;
        });
        this.SetFilter();
        this.refresh();
    }
}