class WNSearchList implements IWNSearchList {
    public readonly nameType: string = 'WNSearchList';
    public element: HTMLElement;
    public listElement: HTMLElement;
    public list: IWNList | IWNTree;

    public beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;
    public afterFilterChanged: (t: IWNSearchList, text: string) => void;
    public selectionChanged: (t: IWNTree | IWNList, node: WNTreeNode | WNListNode) => void;

    public minLength: number = 1;

    public displayElement: HTMLElement;
    public valueElement: HTMLElement;

    private searchbox: HTMLInputElement;
    //private fieldset: string;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.init();
        }
    }
    private init() {
        this.searchbox = this.element.querySelector('[type=search]');
        if (this.element.hasAttribute('search-id'))
            this.searchbox = document.getElementById(this.element.getAttribute('search-id')) as HTMLInputElement;

        this.searchbox.autocomplete = 'off';

        if (this.element.hasAttribute('list-id'))
            this.listElement = document.getElementById(this.element.getAttribute('list-id')) as HTMLElement;
        else if (this.searchbox.nextElementSibling != null)
            this.listElement = this.searchbox.nextElementSibling as HTMLElement;
        else if (this.searchbox.previousElementSibling != null)
            this.listElement = this.searchbox.previousElementSibling as HTMLElement;
        else {
            this.listElement = this.element.querySelector('ul,.list,.tree');
            if (this.listElement == null)
                return;
        }
        if (this.element.hasAttribute('display-id')) this.displayElement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.element.hasAttribute('value-id')) this.valueElement = document.getElementById(this.element.getAttribute('value-id'));
        if (this.element.hasAttribute('min-length')) this.minLength = WNparseNumber(this.element.getAttribute('min-length'), this.minLength);

        if (this.element.hasAttribute('onbeforefilterchanged')) this.beforeFilterChanged = WNGenerateFunction(this.element.getAttribute('onbeforefilterchanged'), 't,text');
        if (this.element.hasAttribute('onafterfilterchanged')) this.afterFilterChanged = WNGenerateFunction(this.element.getAttribute('onafterfilterchanged'), 't,text');
        if (this.element.hasAttribute('onselectionchanged')) this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');


        this.searchbox.addEventListener('input',
            async (e) => {
                if (this.list == null) return;
                let v = (<HTMLInputElement>e.target).value;
                if (v.length != 0 && v.length < this.minLength) return;

                if (this.beforeFilterChanged && !this.beforeFilterChanged?.(this, v))
                    return;
                this.list.filterByText(v, true);

                this.afterFilterChanged?.(this, v);
            });

        this.waitToInitList();
    }
    private waitToInitList() {
        let tim = setInterval(() => {
            if (WN(this.listElement.id).wn != null) {
                this.list = WN(this.listElement.id).wn;
                this.list.selectionChanged = (t, n) => this.selectionchanged(t, n);
                clearInterval(tim);

            }
        }, 100)
    }
    private selectionchanged(t, n: WNListNode | WNTreeNode) {
        if (this.displayElement) {
            if (this.displayElement.tagName == 'INPUT')
                (<HTMLInputElement>this.displayElement).value = n.text;
            else
                this.displayElement.innerHTML = n.text;
        }
        if (this.valueElement) {
            if (this.valueElement.tagName == 'INPUT')
                (<HTMLInputElement>this.valueElement).value = n.value;
            else
                this.valueElement.innerHTML = n.value;
        }
        this.selectionChanged?.(t, n);
    }
}

