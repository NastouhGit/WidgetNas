class wnfilter {
    element: HTMLElement;
    buttons: NodeListOf<Element>;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        this.buttons = this.element.querySelectorAll('[filter-value]');
        this.buttons.forEach((t) => {
            if (t.nodeName == 'INPUT' && (<HTMLInputElement>t).type == "text") {
                t.addEventListener("input", () => {
                    WNFilter(this.element.querySelectorAll("[filter-category]"), 'contains(' + (<HTMLInputElement>t).value + ')');
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
                    WNFilter(this.element.querySelectorAll("[filter-category]"), '[filter-category*=' + (<HTMLInputElement>e.target).getAttribute('filter-value') + ']');
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

        WNFilter(this.element.querySelectorAll("[filter-category]"), condition);
    }
}

function WNFilter(selectors: string | NodeListOf<Element>, filterby: string) {
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