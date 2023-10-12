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
                    WNFilter.filter(this.element.querySelectorAll("[filter-category]"), 'contains(' + (<HTMLInputElement>t).value + ')');
                });
            }
            if (t.nodeName == 'INPUT' && (<HTMLInputElement>t).type == "checkbox") {
                t.addEventListener("click", () => {
                    this.CheckBoxFilter();
                });
                this.CheckBoxFilter();
            }
            else {
                t.addEventListener("click", (e) => {
                    WNFilter.filter(this.element.querySelectorAll("[filter-category]"), '[filter-category*=' + (<HTMLInputElement>e.target).getAttribute('filter-value') + ']');
                });
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
                e.style.display = '';
            else
                e.style.display = 'none';
        });
    }
    else
        list.forEach((e: HTMLElement) => {
            if (filterby == '' || filterby == "[filter-category*=]" || e.matches(filterby))
                e.style.display = '';
            else
                e.style.display = 'none';
            e.getAnimations().forEach(x => x.play());
        });
}
}

