class WNSticky implements IWNSticky {
    public readonly nameType: string = 'WNSticky';
    public element: HTMLElement;
    public position = 'top';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
            this.CheckSticky();
        }
    }
    private Init() {
        if (this.element.classList.contains('sticky-top'))
            this.position = 'top';
        else if (this.element.classList.contains('sticky-bottom'))
            this.position = 'bottom';

        window.addEventListener('scroll', () => { this.CheckSticky() });
    }
    private CheckSticky() {
        let addstickyOnfly = false;
        if (this.position == 'top' && this.element.offsetTop > this.element.clientHeight) addstickyOnfly = true;
        if (this.position == 'bottom' && (document.body.clientHeight - this.element.offsetTop) > this.element.clientHeight) addstickyOnfly = true;
        if (addstickyOnfly)
            this.element.classList.add("sticky-onfly");
        else
            this.element.classList.remove("sticky-onfly");
    }
}