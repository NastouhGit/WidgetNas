class wnscroll {
    element: HTMLElement;

    value: number = 0;
    addclass = '';
    removeclass = '';
    toggleclass = '';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Render();
        }
    }
    Render() {
        if (this.element.hasAttribute('scroll-value'))
            this.value = WNparseNumber(this.element.getAttribute('scroll-value'), 50);
        if (this.element.hasAttribute('add-class'))
            this.addclass = WNparseString(this.element.getAttribute('add-class'), '');
        if (this.element.hasAttribute('remove-class'))
            this.removeclass = WNparseString(this.element.getAttribute('remove-class'), '');
        if (this.element.hasAttribute('toggle-class'))
            this.toggleclass = WNparseString(this.element.getAttribute('toggle-class'), '');

        this.Start();
        window.addEventListener("scroll", () => this.Start());
    }
    Start() {
        if (window.scrollY >= this.value) {
            if (this.toggleclass != '') {
                if (!this.element.classList.contains(this.toggleclass))
                    this.element.classList.add(this.toggleclass);
            }
            if (this.addclass != '')
                this.element.classList.add(this.addclass);
            if (this.removeclass != '')
                this.element.classList.remove(this.removeclass);
        }
        else {
            if (this.toggleclass != '') {
                if (this.element.classList.contains(this.toggleclass))
                    this.element.classList.remove(this.toggleclass);
            }
        }
    }
}
