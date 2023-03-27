class wncounter {
    element: HTMLElement;

    countTo: number = 0;
    countNum: number = 0;
    countStep: number = 1;
    duration: number = 1000;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Render();
        }
    }
    Render() {
        if (this.element.hasAttribute('count'))
            this.countTo = WNparseNumber(this.element.getAttribute('count'));
        this.countNum = WNparseNumber(this.element.innerText, 0);

        if (this.element.hasAttribute('duration'))
            this.duration = WNparseNumber(this.element.getAttribute('duration'), 1000);
        this.countStep = (this.countTo - this.countNum) / this.duration;
        this.Start(this);
        window.addEventListener("scroll", () => this.Start(this));
    }
    Start(e: wncounter) {
        if (document.readyState == "loading")
            return;
        if (
            (
                (window.scrollY == 0 && e.element.getBoundingClientRect().bottom < window.innerHeight) ||
                (e.element.getBoundingClientRect().bottom < window.scrollY - window.innerHeight / 2)
            ) && e.element.getBoundingClientRect().bottom > 0 && e.countNum < e.countTo) {
            let id = setInterval(() => {
                e.countNum += e.countStep;
                if (e.countNum > e.countTo) {
                    e.countNum = e.countTo;
                    clearInterval(id);
                }
                e.element.innerText = Math.floor(e.countNum).toString();
                window.requestAnimationFrame(() => { });
            }, e.duration / (e.countTo / e.countStep));
        }
    }
}
