class wnsearchlist {
    element: HTMLElement;

    private searchbox: HTMLInputElement;
    private list: HTMLElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    private Init() {
        this.searchbox = this.element.querySelector('[type=search]');
        this.searchbox.autocomplete = 'off';
        this.list = this.searchbox.nextElementSibling as HTMLElement;
        if (this.list == null)
            this.list = this.searchbox.previousElementSibling as HTMLElement;
        if (this.list == null)
            return;
        this.searchbox.addEventListener('input',
            (e) => {
            let v = (<HTMLInputElement>e.target).value;
            WNFilter(this.list.querySelectorAll('*'), 'contains(' + v + ')');
        });
    }
}

