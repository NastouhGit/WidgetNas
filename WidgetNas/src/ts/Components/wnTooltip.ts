class wntooltip {
    element: HTMLElement;

    private _delayhandle: any;
    private _delay = 500;
    get delay() { return this._delay; }
    set delay(value: number) { this._delay = value; }

    private _hideafterhandle: any;
    private _hideafter = 3000;
    get hideafter() { return this._hideafter; }
    set hideafter(value: number) { this._hideafter = value; }

    private _classes = '';
    get tooltipclass() { return this._classes; }
    set tooltipclass(value: string) { this._classes = value; }

    private _target: HTMLElement;
    get target() { return this._target; }
    set target(value: HTMLElement) { this._target = value; }

    private _events: string;
    get events() { return this._events; }
    set events(value: string) { this._events = value; this.SetEvents(); }

    private _lostevents: string;
    get lostevents() { return this._lostevents; }
    set lostevents(value: string) { this._lostevents = value; this.SetEvents(); }

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.Init();
        }
    }
    private Init() {
        let text = this.element.getAttribute('wn-tooltip');
        this._target = document.getElementById(text);
        if (this._target != null && !this._target.classList.contains('tooltip'))
            this._target = null;
        if (this._target == null) {
            this.CreateTarget(text);
        }

        if (this.element.hasAttribute('wn-tooltip-delay')) {
            this._delay = WNparseNumber(this.element.getAttribute('wn-tooltip-delay'), 500);
        }
        if (this.element.hasAttribute('wn-tooltip-hideafter')) {
            this._hideafter = WNparseNumber(this.element.getAttribute('wn-tooltip-hideafter'), 3000);
        }

        if (this.element.hasAttribute('wn-tooltip-events')) {
            this._events = this.element.getAttribute('wn-tooltip-events');
            if (this.element.hasAttribute('wn-tooltip-events-lost'))
                this._lostevents = this.element.getAttribute('wn-tooltip-events-lost');
        }
        else {
            this._events = 'mouseenter';
            if (!this.element.hasAttribute('wn-tooltip-nolost'))
                this._lostevents = 'mouseleave';
        }

        this.SetEvents();
    }
    private CreateTarget(content: string) {
        this._target = document.createElement('div') as HTMLDivElement;
        this._target.className = 'tooltip tooltip-arrow-bottom';
        this._target.innerHTML = content;
        if (this.element.hasAttribute('wn-tooltip-class')) {
            let t = this.element.getAttribute('wn-tooltip-class');
            if (t.includes('tooltip-arrow'))
                this._target.className = 'tooltip';
            this._target.className += ' ' + t;
        }
        if (this.element.dir == 'ltr')
            this._target.setAttribute('dir', 'ltr');
        this.element.after(this._target);
    }
    private SetEvents() {
        if (this._events != null) {
            let eventlist = this._events.split(',');
            eventlist.forEach((e) => {
                this.element.addEventListener(e.trim(), () => {
                    this.autoshow();
                })
            });
        }
        if (this._lostevents != null) {
            let eventlist = this._lostevents.split(',');
            eventlist.forEach((e) => {
                this.element.addEventListener(e.trim(), () => {
                    this.hide();
                })
            });
        }
        window.addEventListener("scroll", () => { this._target.classList.remove('show'); });
        window.addEventListener("resize", () => { this._target.classList.remove('show'); });
    }
    autoshow() {
        this._delayhandle = setTimeout(() => {
            this.show();
            if (this._hideafter != 0)
                this._hideafterhandle = setTimeout(() => {
                    this.hide();
                }, this._hideafter);
        }, this._delay);
    }
    show() {
        if (this._target.classList.contains('show'))
            return;
        if (this._classes != null && this._classes !="") {
            this._target.className = 'tooltip ' + this._classes;
        }
        let param: PositionParameters = { fit: false, direction: '' };
        param.direction = 'top';
        if (this.target.classList.contains('tooltip-arrow-bottom'))
            param.direction = 'top';
        else if (this.target.classList.contains('tooltip-arrow-top'))
            param.direction = 'bottom';
        else if (this.target.classList.contains('tooltip-arrow-start'))
            param.direction = 'start';
        else if (this.target.classList.contains('tooltip-arrow-end'))
            param.direction = 'end';

        WNSetElementPosition(this._target, this.element, param);
        this._target.classList.add('show');
    }
    hide() {
        clearTimeout(this._hideafterhandle);
        clearTimeout(this._delayhandle);
        this._target.classList.remove('show');
    }
}
function WNTooltipAssign(elem: HTMLElement | HTMLDocument = document) {
    let selectors: NodeListOf<HTMLDivElement> = elem.querySelectorAll("[wn-tooltip]");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        let id = elem.id;
        if (id == '')
            id = 'wn-' + elem.tagName + (Object.keys(WN).length + 1).toString();
        WN[id + '-tooltip'] = new wntooltip(elem);
    }
}