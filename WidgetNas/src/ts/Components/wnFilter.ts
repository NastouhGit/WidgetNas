class WNFilter implements IWNFilter {
    public readonly nameType: string = 'WNFilter';
    public element: HTMLElement;
    private buttons: NodeListOf<Element>;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.buttons = this.element.querySelectorAll('[filter-value]');
        this.buttons.forEach((t) => {
            if (t.nodeName == 'INPUT' && (<HTMLInputElement>t).type == "text") {
                t.addEventListener("input", () => {
                    this.setActive(t as HTMLElement);
                    WNFilter.filter(this.element.querySelectorAll("[filter-category]"), 'contains(' + (<HTMLInputElement>t).value + ')');
                });
                if ((<HTMLInputElement>t).value == '') this.setActive(t as HTMLElement);
            }
            else if (t.nodeName == 'INPUT' && (<HTMLInputElement>t).type == "checkbox") {
                t.addEventListener("click", () => {
                    this.CheckBoxFilter();
                });
                this.CheckBoxFilter();
            }
            else {
                t.addEventListener("click", (e) => {
                    this.setActive(t as HTMLElement);
                    WNFilter.filter(this.element.querySelectorAll("[filter-category]"), '[filter-category*=' + (<HTMLElement>e.target).getAttribute('filter-value') + ']');
                });
                if ((<HTMLElement>t).getAttribute('filter-value') == '') {
                    if (t.nodeName == 'INPUT' && (<HTMLInputElement>t).type == "radio") {
                        (t as HTMLInputElement).checked = true;
                    }
                    this.setActive(t as HTMLElement);
                }
            }
        });
    }
    private CheckBoxFilter() {
        let condition = '';
        this.buttons.forEach((x) => {
            if (x.nodeName == 'INPUT' && (<HTMLInputElement>x).type == "checkbox" && (<HTMLInputElement>x).checked)
                condition += '[filter-category*="' + (<HTMLInputElement>x).getAttribute('filter-value') + '"], '
        });
        condition = condition.trim();
        if (condition.length > 0)
            condition = condition.substring(0, condition.length - 1);

        WNFilter.filter(this.element.querySelectorAll("[filter-category]"), condition);
    }
    private setActive(t: HTMLElement) {
        this.buttons.forEach(x => x.classList.remove('active'));
        t.classList.add('active');
    }
    static filter(selectors: string | NodeListOf<Element>, filterby: string):void {
    let list;
    if (typeof (selectors) == "string")
        list = document.querySelectorAll(selectors);
    else
        list = selectors;

    if (filterby.toLowerCase().startsWith('contains')) {
        filterby = filterby.substring(filterby.indexOf('('));
        filterby = filterby.substring(1, filterby.lastIndexOf(')')).toLowerCase();
        list.forEach((e: HTMLElement) => {
            if (e.innerText.toLowerCase().indexOf(filterby) > -1)
                e.classList.remove('d-none');
            else
                e.classList.add('d-none');
        });
    }
    else
        list.forEach((e: HTMLElement) => {
            if (filterby == '' || filterby == "[filter-category*=]" || e.matches(filterby))
                e.classList.remove('d-none');
            else
                e.classList.add('d-none');
            e.getAnimations().forEach(x => x.play());
        });
}
}

