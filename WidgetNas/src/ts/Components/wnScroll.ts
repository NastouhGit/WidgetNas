class WNScroll implements IWNScroll {
    public readonly nameType: string = 'WNScroll';
    public element: HTMLElement;

    public value: number = 0;
    public addClass = '';
    public removeClass = '';
    public toggleClass = '';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.render();
        }
    }
    private render() {
        if (this.element.hasAttribute('scroll-value'))
            this.value = WNparseNumber(this.element.getAttribute('scroll-value'), 50);
        if (this.element.hasAttribute('add-class'))
            this.addClass = WNparseString(this.element.getAttribute('add-class'), '');
        if (this.element.hasAttribute('remove-class'))
            this.removeClass = WNparseString(this.element.getAttribute('remove-class'), '');
        if (this.element.hasAttribute('toggle-class'))
            this.toggleClass = WNparseString(this.element.getAttribute('toggle-class'), '');

        this.start();
        window.addEventListener("scroll", () => this.start());
    }
    private start() {
        if (window.scrollY >= this.value) {
            if (this.toggleClass != '') {
                if (!this.element.classList.contains(this.toggleClass))
                    this.element.classList.add(this.toggleClass);
            }
            if (this.addClass != '')
                this.element.classList.add(this.addClass);
            if (this.removeClass != '')
                this.element.classList.remove(this.removeClass);
        }
        else {
            if (this.toggleClass != '') {
                if (this.element.classList.contains(this.toggleClass))
                    this.element.classList.remove(this.toggleClass);
            }
        }
    }
}
