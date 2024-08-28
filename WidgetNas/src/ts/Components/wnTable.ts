class WNTable implements IWNTable {
    public readonly nameType: string = 'WNTable';
    public element: HTMLTableElement;

    public cols: WNTableCol[];
    private _dataSource: WNTableNode[];
    private _renderData: WNTableNode[];
    public get dataSource(): WNTableNode[] {
        return this._dataSource;
    }
    public set dataSource(value: WNTableNode[]) {
        this._dataSource = value;
        if (this._sortby.length > 0)
            this.resort();
        else
            this.sort(-1);

        this.setFilter();
    }

    private _currentPage: number = 1;
    public get currentPage(): number { return this._currentPage };
    public set currentPage(value: number) {
        if (this.beforePageChange && !this.beforePageChange(this, this.currentPage, value))
            return;
        let old = this._currentPage;
        this._currentPage = value;
        this.element.querySelectorAll('[page-index]').forEach((x: HTMLElement) => x.style.display = 'none');
        let t = (<HTMLElement>this.element.querySelector(`[page-index='${this._currentPage}']`));
        if (t) t.style.display = '';
        this.setPaginationElements();
        this.selectedItem = null;
        this.afterPageChange?.(this, old, this.currentPage)
    };
    private date: IWNDate = new WNDate();
    private pageSize: number = 0;

    public beforeFilter: (t: IWNTable) => boolean;
    public afterFilter: (t: IWNTable) => void;
    public beforeSort: (t: IWNTable) => boolean;
    public afterSort: (t: IWNTable) => void;
    public beforeSelected: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => boolean;
    public selectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;
    public beforePageChange: (t: IWNTable, oldPage: number, newPage: number) => boolean;
    public afterPageChange: (t: IWNTable, oldPage: number, newPage: number) => void;
    public command: (t: IWNTable, command: string, node: WNTableNode) => void;

    private _selectedItem: WNTableNode;
    public get selectedItem(): WNTableNode {
        return this._selectedItem;
    }
    public set selectedItem(value: WNTableNode) {
        if (this._selectedItem == value) return;
        if (this.beforeSelected && !this.beforeSelected?.(this, this._selectedItem, value)) return;

        this.element.querySelectorAll('tr.active').forEach((x) => x.classList.remove('active'));
        value?.rowElement?.classList.add('active');
        this.selectionChanged?.(this, this._selectedItem, value);
        this._selectedItem = value;
    }

    private _groups: string[] = [];
    public get groups(): string[] { return this._groups; }
    public set groups(value: string[]) {
        this._groups = value;
        this.setFilter();
    }

    private _totalPages = 1;
    private _paginationElement: HTMLElement;
    private _paginationButtons: HTMLButtonElement[];

    private headTable: HTMLTableSectionElement;
    private bodyTable: HTMLTableSectionElement;

    private _pageAddedd: number = 0;
    private _rowAddedd: number = 0;
    private _lastBodyTable: HTMLTableSectionElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLTableElement;
            this.init();
        }
    }
    private init() {
        if (this.element.hasAttribute("cultureinfo")) this.date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));
        if (this.element.hasAttribute("calendar")) this.date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (!this.element.classList.contains('pointer')) this.element.classList.add('pointer');

        if (this.element.hasAttribute('onbeforefilter')) this.beforeFilter = WNGenerateFunction(this.element.getAttribute('onbeforefilter'), 't');
        if (this.element.hasAttribute('onafterfilter')) this.afterFilter = WNGenerateFunction(this.element.getAttribute('onafterfilter'), 't');
        if (this.element.hasAttribute('onbeforesort')) this.beforeSort = WNGenerateFunction(this.element.getAttribute('onbeforesort'), 't');
        if (this.element.hasAttribute('onaftersort')) this.afterSort = WNGenerateFunction(this.element.getAttribute('onaftersort'), 't');

        if (this.element.hasAttribute('onbeforeselected')) this.beforeSelected = WNGenerateFunction(this.element.getAttribute('onbeforeselected'), 't,oldNode,newNode');
        if (this.element.hasAttribute('onselectionchanged')) this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,oldNode,newNode');

        if (this.element.hasAttribute('onbeforepagechange')) this.beforePageChange = WNGenerateFunction(this.element.getAttribute('onbeforepagechange'), 't,oldPage,newPage');
        if (this.element.hasAttribute('onafterpagechange')) this.afterPageChange = WNGenerateFunction(this.element.getAttribute('onafterpagechange'), 't,oldPage,newPage');

        if (this.element.hasAttribute('oncommand')) this.command = WNGenerateFunction(this.element.getAttribute('oncommand'), 't,command,node');
        if (this.element.hasAttribute('groups')) this._groups = this.element.getAttribute('groups').split(',');
        this.FindHeader();
        this.FilterHeaderRow();
        this.initDataSource();
        this.pagination();
        this.setFilter();
    }
    //Parse thead area
    private FindHeader() {
        this.cols = [];

        let colindex = 0;
        let fieldcount = 1;

        this.headTable = this.element.querySelector('thead');
        this.headTable?.querySelectorAll('tr:first-child td,th').forEach((x) => {
            let tcol: WNTableCol = {
                index: colindex,
                caption: x.textContent,
                class: x.className,
                datatype: WNparseString(x.getAttribute('data-type'), 'string'),
                field: WNparseString(x.getAttribute('data-field'), ''),
                filterable: x.hasAttribute('filterable') ?
                    (WNparseString(x.getAttribute('filterable'), WNTableTextValue.value) == WNTableTextValue.value ? WNTableTextValue.value : WNTableTextValue.text)
                    : WNTableTextValue.none,
                sortable: x.hasAttribute('sortable') ?
                    (WNparseString(x.getAttribute('sortable'), WNTableTextValue.value) == WNTableTextValue.value ? WNTableTextValue.value : WNTableTextValue.text)
                    : WNTableTextValue.none,
                format: WNparseString(x.getAttribute('data-format'), ''),
                elementInHeader: x as HTMLTableCellElement,
                elementFilter: null,
                commandElement: [],
                condition: x.hasAttribute('condition') ? WNGenerateFunction(x.getAttribute('condition'), 't,node,value,text') : null,
                aggregate: WNparseString(x.getAttribute('aggregate'), '').toLowerCase()

            };
            tcol.elementInHeader.setAttribute('index', colindex.toString());

            if (tcol.sortable != WNTableTextValue.none)
                tcol.elementInHeader.classList.add('sort');
            tcol.elementInHeader.addEventListener('click', (t) => {
                if (this.beforeSort != null && !this.beforeSort(this))
                    return;

                this.sort(WNparseNumber((t.target as HTMLElement).getAttribute('index')));
                this.afterSort?.(this);

                this.refresh();
            });
            if (tcol.field == '') {
                tcol.field = 'f' + fieldcount;
                fieldcount++;
            }

            if (tcol.elementInHeader.hasAttribute('command')) {
                tcol.elementInHeader.querySelectorAll('button').forEach((x: HTMLButtonElement) => {
                    tcol.commandElement.push(x.cloneNode(true) as HTMLButtonElement);
                    x.remove();
                });
                tcol.elementInHeader.innerHTML = tcol.elementInHeader.textContent.trim();

            }
            this.cols.push(tcol);
            colindex++;
        });
    }

    //Add filter input at header row
    private FilterHeaderRow() {
        let addfilter = false;
        let tr = document.createElement('tr');
        this.cols.forEach((x) => {
            let td = document.createElement('td');
            if (x.filterable != WNTableTextValue.none) {
                let inp = document.createElement('input');
                inp.type = 'search';
                inp.setAttribute('index', x.index.toString())
                inp.addEventListener('input', () => { this.setFilter(); })
                td.appendChild(inp);
                addfilter = true;
                x.elementFilter = inp;
            }
            tr.appendChild(td);
        });

        if (addfilter) {
            this.headTable?.appendChild(tr);
        }
    }
    private initDataSource() {
        this.bodyTable = this.element.querySelector('tbody') as HTMLTableSectionElement;
        if (!this.bodyTable) {
            this.bodyTable = document.createElement('tbody');
            this.element.appendChild(this.bodyTable);
        }
        let tr = this.bodyTable.querySelectorAll('tr');
        this._dataSource = [];
        tr.forEach((x: HTMLTableRowElement) => {
            let cols = x.querySelectorAll('td,th');
            let r: { [id: string]: WNTableFieldValue } = {};
            for (var i = 0; i < cols.length; i++) {
                r[this.cols[i].field] = this.fixedData(cols[i].innerHTML, this.cols[i])
            }
            this.addToDataSource(r);
        });
    }
    public addToDataSource(r: any): WNTableNode {
        let pId = 0;
        if (!this._dataSource) this._dataSource = [];
        this._dataSource.forEach((x) => { pId = x.privateId > pId ? x.privateId : pId });
        pId++;
        let ret: WNTableNode = {
            privateId: pId,
            rowElement: null,
            fields: r
        }
        this._dataSource.push(ret);
        return ret;
    }
    public removeFromDataSource(r: WNTableNode): boolean {
        try {
            let forceRefresh: boolean = r.rowElement != null;
            r.rowElement?.remove();
            let list = this.dataSource;
            for (var i = 0; i < list.length; i++) {
                if (list[i].privateId == r.privateId) {
                    list.splice(i, 1);
                    break;
                }
            }
            if (forceRefresh) this.refresh();
        } catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    public updateNodeElement(r: WNTableNode): void {
        if (r.rowElement) {
            this.resort();
            this.refresh();
        }
    }
    public setDataSource(dataSource: any, append?: boolean): void {
        if (append == null || !append)
            this._dataSource = [];
        dataSource.forEach((x) => {
            let keys = Object.keys(x);
            let r: { [id: string]: WNTableFieldValue } = {};
            keys.forEach((y) => {
                let col = this.cols.find(z => z.field == y);
                if (col)
                    r[y] = this.fixedData(x[y], col);
                else
                    r[y] = { text: x[y], value: x[y] };
            });
            this.addToDataSource(r);

        });
        this.setFilter();

    }

    private _sortby: { field, field2, desc }[] = [];
    private resort() {
        if (this._sortby.length == 0) return;

        this._renderData?.sort((x, y) => {
            for (var i = 0; i < this._sortby.length; i++) {
                let s = this._sortby[i];
                let v1;
                let v2;
                if (x.fields[s.field])
                    v1 = x.fields[s.field][s.field2];
                else if (x[s.field])
                    v1 = x[s.field];
                else
                    v1 = '';

                if (y.fields[s.field])
                    v2 = y.fields[s.field][s.field2];
                else if (y[s.field])
                    v2 = y[s.field];
                else
                    v2 = '';

                let cmp = v1 == v2;
                if (!cmp) {
                    cmp = v1 > v2;
                    return (cmp ? -1 : 1) * (s.desc ? 1 : -1);
                }
            }
            return 0;
        });
    }
    private sort(colIndex: number): void {
        if (colIndex > -1 && this.cols[colIndex].sortable != WNTableTextValue.none)
            this._sortby = [];
        else if (colIndex == -1)
            this._sortby = [];
        else
            return;

        if (this.groups.length > 0) {
            this.groups.forEach(x => {
                let c = x.split(':');
                this._sortby.push({ field: c[0].trim(), field2: c[1]?.trim() ?? 'value', desc: false });
            })
        }
        let desc = false;
        if (colIndex > -1 && this.cols[colIndex].sortable != WNTableTextValue.none) {
            if (this.cols[colIndex].elementInHeader.classList.contains('asc'))
                desc = true;
            this._sortby.push({ field: this.cols[colIndex].field, field2: this.cols[colIndex].sortable, desc: desc });
        }

        this.resort();

        this.cols.forEach((x) => x.elementInHeader.classList.remove('desc', 'asc'));
        if (colIndex > -1)
            this.cols[colIndex].elementInHeader.classList.add(desc ? 'desc' : 'asc');

    }

    private pagination() {
        this._paginationElement = this.element.querySelector('.pagination');
        if (this._paginationElement == null) return;
        let btn = this._paginationElement.querySelectorAll('button');
        if (!btn) return;

        if (this._paginationElement.hasAttribute('page-size')) this.pageSize = WNparseNumber(this._paginationElement.getAttribute('page-size'), this.pageSize);

        this._paginationButtons = [];
        for (var i = 0; i < btn.length; i++) {
            if (btn[i].classList.contains('first'))
                btn[i].addEventListener('click', () => {
                    if (this.currentPage != 1) {
                        this.currentPage = 1;
                        this.refresh();
                    }
                });
            else if (btn[i].classList.contains('previous'))
                btn[i].addEventListener('click', () => {
                    let cur = this.currentPage;
                    cur--;
                    if (cur <= 1) cur = 1;
                    if (cur == this.currentPage) return;

                    this.currentPage = cur;
                });
            else if (btn[i].classList.contains('next'))
                btn[i].addEventListener('click', () => {
                    let cur = this.currentPage;
                    cur++;
                    if (cur >= this._totalPages) cur = this._totalPages;
                    if (cur == this.currentPage) return;

                    this.currentPage = cur;

                });
            else if (btn[i].classList.contains('last'))
                btn[i].addEventListener('click', () => {
                    if (this.currentPage != this._totalPages) {
                        this.currentPage = this._totalPages;
                    }
                });
            else {
                btn[i].style.display = 'none';
                btn[i].addEventListener('click', (t) => {
                    let cur = WNparseNumber((t.target as HTMLElement).innerText);
                    if (cur != this.currentPage) {
                        this.currentPage = cur;
                    }
                });
                this._paginationButtons.push(btn[i]);
            }
        }


    }
    private setPaginationElements() {
        if (this.pageSize > 0) {
            if (this._paginationElement) this._paginationElement.style.display = ''
            this._paginationButtons.forEach((x) => x.style.display = 'none');

            let maxPages = this._paginationButtons.length;

            this._totalPages = Math.ceil(this._renderData.length / this.pageSize);
            if (this._totalPages < 1) this._totalPages = 1;


            if (this.currentPage < 1)
                this.currentPage = 1
            else if (this.currentPage > this._totalPages)
                this.currentPage = this._totalPages

            let startPage: number, endPage: number;
            if (this._totalPages <= maxPages) {
                // total pages less than max so show all pages
                startPage = 1;
                endPage = this._totalPages;
            } else {
                // total pages more than max so calculate start and end pages
                let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
                let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
                if (this.currentPage <= maxPagesBeforeCurrentPage) {
                    // current page near the start
                    startPage = 1;
                    endPage = maxPages;
                } else if (this.currentPage + maxPagesAfterCurrentPage >= this._totalPages) {
                    // current page near the end
                    startPage = this._totalPages - maxPages + 1;
                    endPage = this._totalPages;
                } else {
                    // current page somewhere in the middle
                    startPage = this.currentPage - maxPagesBeforeCurrentPage;
                    endPage = this.currentPage + maxPagesAfterCurrentPage;
                }
            }
            for (var i = startPage; i <= endPage; i++) {
                this._paginationButtons[i - startPage].innerText = (i).toString();
                this._paginationButtons[i - startPage].style.display = '';
                if (i == this.currentPage)
                    this._paginationButtons[i - startPage].classList.add('pagination-active');
                else
                    this._paginationButtons[i - startPage].classList.remove('pagination-active');

            }
        }
        else
            if (this._paginationElement) this._paginationElement.style.display = 'none';
    }
    private fixedData(value: any, col: WNTableCol): WNTableFieldValue {
        let r: WNTableFieldValue = {
            text: value,
            value: value
        }
        try {
            if (col.datatype == 'number') {
                r.value = WNparseNumber(r.value, 0);
                r.text = r.value.toString();
            }
            if (col.datatype == 'date') {
                r.value = new Date(r.value);
                this.date.setDate(r.value);
                r.text = this.date.toString(col.format);
            }
            if (col.datatype == 'list') {
                let l = col.format.split('|');
                if (r.value > -1 && r.value < l.length)
                    r.text = l[r.value].trim();
                else
                    r.text = '---';

                r.value = new Date(r.value);
                this.date.setDate(r.value);
            }
            else if (col.format != '') //Check other type format
                r.text = WNStringFormat(r.value, col.format, this.date.cultureInfo);
        } catch (e) {
            console.error(e);
        }
        return r;
    }
    private _fieldGroup: { f1, f2 }[] = [];
    private refresh() {
        if (!this.bodyTable) return;
        this.bodyTable.innerHTML = '';
        this.element.querySelectorAll('tbody').forEach(x => {
            if (x != this.bodyTable) x.remove();
        });
        this.bodyTable.setAttribute('page-index', '1');

        this._renderData.forEach(x => x.rowElement = null);
        let haveAggregate = this.cols.find(x => x.aggregate != '') != null;

        this._pageAddedd = 1;
        this._rowAddedd = 0;
        this._lastBodyTable = this.bodyTable;

        if (this.groups.length > 0) {
            this._fieldGroup = [];
            this.pageSize = 0;
            for (var i = 0; i < this.groups.length; i++) {
                this._fieldGroup.push({ f1: this.groups[i].split(':')[0].trim(), f2: this.groups[i].split(':')[1]?.trim() ?? 'value' });
            }
            this.addTableRows(this._renderData, '', 0, haveAggregate);
        }
        else {
            this.addTableRows(this._renderData, '', 0, haveAggregate);
        }
        this.setPaginationElements();
        if (this.bodyTable.querySelector('tr.active') == null) {
            this.selectedItem = null;
        }
        this.currentPage = 1;

    }

    private addTableRows(ds: WNTableNode[], parentId: string, indent: number, haveAggregate: boolean): any {
        let aggregate = new Array<Number[]>(this.cols.length);
        for (var i = 0; i < this.cols.length; i++) aggregate[i] = [];

        for (var row = 0; row < ds.length; row++) {
            let x = ds[row];

            //Group Check!
            if (this.groups.length > indent) {
                let lastGroup = x.fields[this._fieldGroup[indent].f1][this._fieldGroup[indent].f2];
                let filtervalue = [{ field: this._fieldGroup[indent].f1, filterable: this._fieldGroup[indent].f2, value: lastGroup }];

                let tr = document.createElement('tr');
                tr.className = 'grouprow';

                let td = document.createElement('td');
                td.colSpan = this.cols.length;
                td.className = 'groupcol group-' + indent.toString();
                td.innerHTML = lastGroup;
                tr.setAttribute('private-id', indent + '_' + x.privateId);
                tr.setAttribute('parent-id', parentId);

                tr.addEventListener('click', (e) => {
                    let tr = e.target as HTMLElement;
                    while (tr.tagName != 'TR')
                        tr = tr.parentElement;
                    tr.classList.toggle('collapsed');
                    this.hideByParent(tr.classList.contains('collapsed'), tr.getAttribute('private-id'))
                });
                tr.appendChild(td);
                this._lastBodyTable.appendChild(tr);

                let ds1 = this.filter(ds, filtervalue);
                let ag1 = this.addTableRows(ds1, indent + '_' + x.privateId, indent + 1, haveAggregate);
                row += ds1.length - 1;
                for (var i = 0; i < aggregate.length; i++) {
                    ag1[i].forEach(x => aggregate[i].push(x));
                }
            }
            else {
                let tr = document.createElement('tr');
                tr.setAttribute('private-id', x.privateId.toString());
                tr.setAttribute('parent-id', parentId);
                if (x.privateId == this.selectedItem?.privateId) {
                    tr.classList.add('active');
                }
                if (this.groups.length > 0)
                    tr.className = 'group-' + indent.toString();

                tr.addEventListener('click', (t) => {
                    let tr = (t.target as HTMLElement);
                    while (tr.tagName == 'TD')
                        tr = tr.parentElement;

                    let rowidx = WNparseNumber(tr.getAttribute('private-id'), -1);
                    let newselected = this._renderData.filter(x => x.privateId == rowidx)[0] ?? null;
                    this.selectedItem = newselected;
                }, false);

                //Add cols
                for (var i = 0; i < this.cols.length; i++) {
                    let td = document.createElement('td');
                    if (x.fields[this.cols[i].field] != null)
                        td.innerHTML = x.fields[this.cols[i].field].text;
                    else if (x[this.cols[i].field] != null)
                        td.innerHTML = x[this.cols[i].field];
                    else
                        td.innerHTML = '';
                    td.className = this.cols[i].class;
                    //Add data for aggregate row
                    if (this.cols[i].aggregate != '') {
                        aggregate[i].push(x.fields[this.cols[i].field].value);
                    }
                    //Add Command Col
                    if (this.cols[i].commandElement.length > 0) {
                        this.cols[i].commandElement.forEach(xx => {
                            let cmd = xx.cloneNode(true);
                            let command = xx.getAttribute('command')
                            if (command && command != '') {
                                cmd.addEventListener('click', (e) => {
                                    this.command?.(this, command, x);
                                    e.stopPropagation();
                                });
                                td.appendChild(cmd);
                            }
                        });
                    }
                    //Check td condition
                    try {
                        this.cols[i].condition?.(td, x, x.fields[this.cols[i].field].value, x.fields[this.cols[i].field].text);

                    } catch (e) {
                        console.error(e);
                    }
                    tr.appendChild(td);
                }
                x.rowElement = tr;
                if (this.pageSize > 0 && this._rowAddedd >= this.pageSize) {
                    this._pageAddedd++;
                    this._rowAddedd = 0;
                    let tb = document.createElement('tbody');
                    this._lastBodyTable.after(tb);
                    this._lastBodyTable = tb;
                    this._lastBodyTable.setAttribute('page-index', this._pageAddedd.toString());
                }
                this._lastBodyTable.appendChild(tr);
                this._rowAddedd++;
            }
        };


        if (haveAggregate) {
            this.addAggregateRow(aggregate, parentId, indent);
            this._rowAddedd++;
        }
        return aggregate;
    }
    private hideByParent(hide: boolean, privateId: string) {
        let elems = this.element.querySelectorAll('tr[parent-id="' + privateId + '"]');
        elems.forEach((x: HTMLElement) => {
            if (hide) {
                if (x.style.display != 'none') {
                    x.style.display = 'none';
                    if (x.hasAttribute('private-id'))
                        this.hideByParent(hide, x.getAttribute('private-id'));
                }
            }
            else {
                x.style.display = '';
                if (x.hasAttribute('private-id') && !x.classList.contains('collapsed'))
                    this.hideByParent(hide, x.getAttribute('private-id'));
            }
        });
    }
    private addAggregateRow(aggregate, parentId: string, indent: number) {
        let tr = document.createElement('tr');
        tr.className = 'aggregate';
        tr.setAttribute('parent-id', parentId);
        if (this.groups.length > 0)
            tr.className += ' group-' + indent.toString();

        for (var i = 0; i < this.cols.length; i++) {
            let td = document.createElement('td');
            if (this.cols[i].aggregate != '' && aggregate[i] && aggregate[i].length > 0) {
                let value = 0;
                if (this.cols[i].aggregate == 'sum')
                    aggregate[i]?.forEach(x => value += x);
                else if (this.cols[i].aggregate == 'avg') {
                    aggregate[i]?.forEach(x => value += x);
                    value = value / aggregate[i].length;
                }
                else if (this.cols[i].aggregate == 'count')
                    value = aggregate[i].length;
                else if (this.cols[i].aggregate == 'max')
                    value = Math.max(aggregate[i]);
                else if (this.cols[i].aggregate == 'min')
                    value = Math.min(aggregate[i]);

                td.innerHTML = this.fixedData(value, this.cols[i]).text;
            }
            tr.appendChild(td);
        }
        this._lastBodyTable.appendChild(tr);
    }
    public filterByText(text: string): void {
        if (text=='') {
            this._renderData = this.dataSource.map(x => x);
            if (this._sortby.length > 0)
                this.resort();
            else
                this.sort(-1);
            this.refresh();
            return;
        }
        if (this.beforeFilter && !!this.beforeFilter?.(this))
            return;

        text = text.toLowerCase();
        this._renderData = [];
        for (var row = 0; row < this.dataSource.length; row++) {
            let x = this.dataSource[row];
            let ret = false;
            for (var i = 0; i < this.cols.length; i++) {
                ret = ret || WNDenativeDigit(x.fields[this.cols[i].field].text.toLowerCase()).includes(text);
            }
            if (ret)
                this._renderData.push(x);
        }
        

        if (this._sortby.length > 0)
            this.resort();
        else
            this.sort(-1);

        this.afterFilter?.(this);
        this.refresh();
    }
    private setFilter() {
        let filtervalue = [];
        for (var i = 0; i < this.cols.length; i++) {
            let x = this.cols[i];
            if (x.filterable != WNTableTextValue.none && x.elementFilter != null && x.elementFilter?.value != '') {
                filtervalue.push({ field: x.field, filterable: x.filterable, value: x.elementFilter.value.toLowerCase() });
            }
        }
        if (filtervalue.length == 0) {
            this._renderData = this.dataSource.map(x => x);
            if (this._sortby.length > 0)
                this.resort();
            else
                this.sort(-1);
            this.refresh();
            return;
        }
        if (this.beforeFilter && !!this.beforeFilter?.(this))
            return;

        this._renderData = this.filter(this.dataSource, filtervalue);
        this.selectedItem = null;

        if (this._sortby.length > 0)
            this.resort();
        else
            this.sort(-1);

        this.afterFilter?.(this);
        this.refresh();
    }
    private filter(ds: WNTableNode[], filtervalue: { field: string, filterable: string, value: any }[]): WNTableNode[] {
        let retArray: WNTableNode[] = [];
        for (var row = 0; row < ds.length; row++) {
            let x = ds[row];
            let ret = true;

            for (var i = 0; i < filtervalue.length; i++) {
                ret = ret && WNDenativeDigit(x.fields[filtervalue[i].field][filtervalue[i].filterable].toString().toLowerCase()).includes(filtervalue[i].value);
                if (!ret)
                    break;
            }
            if (ret)
                retArray.push(x);
        }
        return retArray;
    }

    public findValueInDatasource(fieldName: string, value: any): WNTableNode {
        return this._dataSource.find(x => x.fields[fieldName].value === value);
    }
    
}