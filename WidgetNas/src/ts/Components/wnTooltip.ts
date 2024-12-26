class WNTooltip implements IWNTooltip {
    public readonly nameType: string = 'WNTooltip';
    public element: HTMLElement;
    public delay = 500;
    public hideAfter = 3000;
    public tooltipClass = '';
    public target: HTMLElement;

    private _events: string;
    public get events() { return this._events; }
    public set events(value: string) { this._events = value; this.setEvents(); }

    private _lostEvents: string;
    public get lostEvents() { return this._lostEvents; }
    public set lostEvents(value: string) { this._lostEvents = value; this.setEvents(); }

    private _delayHandle: any;
    private _hideAfterhandle: any;
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
    }
    private init() {
        let text = this.element.getAttribute('wn-tooltip');
        this.target = document.getElementById(text);
        if (this.target != null && !this.target.classList.contains('tooltip'))
            this.target = null;
        if (this.target == null) 
            this.createtarget(text);
        

        if (this.element.hasAttribute('wn-tooltip-delay')) 
            this.delay = WNparseNumber(this.element.getAttribute('wn-tooltip-delay'), 500);
        
        if (this.element.hasAttribute('wn-tooltip-hideAfter')) 
            this.hideAfter = WNparseNumber(this.element.getAttribute('wn-tooltip-hideAfter'), 3000);
        
        if (this.element.hasAttribute('wn-tooltip-class'))
            this.tooltipClass = this.element.getAttribute('wn-tooltip-class');

        if (this.element.hasAttribute('wn-tooltip-events')) {
            this._events = this.element.getAttribute('wn-tooltip-events');
            if (this.element.hasAttribute('wn-tooltip-events-lost'))
                this.lostEvents = this.element.getAttribute('wn-tooltip-events-lost');
        }
        else {
            this._events = 'mouseenter';
            if (!this.element.hasAttribute('wn-tooltip-nolost'))
                this._lostEvents = 'mouseleave';
        }

        this.setEvents();
    }
    private createtarget(content: string) {
        this.target = document.createElement('div') as HTMLDivElement;
        this.target.className = 'tooltip tooltip-arrow-bottom';
        this.target.innerHTML = content;
        if (this.element.hasAttribute('wn-tooltip-class')) {
            let t = this.element.getAttribute('wn-tooltip-class');
            if (t.includes('tooltip-arrow'))
                this.target.className = 'tooltip';
            this.target.className += ' ' + t;
        }
        
            this.target.setAttribute('dir', this.element.dir);
        this.element.after(this.target);
    }
    private setEvents() {
        if (this.events != null) {
            let eventlist = this.events.split(',');
            eventlist.forEach((e) => {
                this.element.removeEventListener(e.trim(), () => { this.autoShow(); });
                this.element.addEventListener(e.trim(), () => { this.autoShow(); });
            });
        }
        if (this._lostEvents != null) {
            let eventlist = this._lostEvents.split(',');
            eventlist.forEach((e) => {
                this.element.removeEventListener(e.trim(), () => { this.hide(); });
                this.element.addEventListener(e.trim(), () => { this.hide(); });
            });
        }
        window.addEventListener("scroll", () => { this.target.classList.remove('show'); });
        window.addEventListener("resize", () => { this.target.classList.remove('show'); });
    }
    public autoShow() {
        this._delayHandle = setTimeout(() => {
            this.show();
            if (this.hideAfter != 0)
                this._hideAfterhandle = setTimeout(() => {
                    this.hide();
                }, this.hideAfter);
        }, this.delay);
    }
    public show() {
        if (this.target.classList.contains('show'))
            return;
        this.target.className = 'tooltip ' + this.tooltipClass;
        

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

        WNSetElementPosition(this.target, this.element, param);
        this.target.classList.add('show');
    }
    public hide() {
        clearTimeout(this._hideAfterhandle);
        clearTimeout(this._delayHandle);
        this.target?.classList.remove('show');
    }
}
function WNTooltipAssign(elem: HTMLElement) {
    let selectors: NodeListOf<HTMLDivElement> = elem.querySelectorAll("[wn-tooltip]");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        let id = elem.id;
        if (id == '')
            id = ('wn-' + elem.tagName + (Object.keys(WNElements).length + 1).toString()).toLowerCase();
        let wn = WN(elem);
        if (wn) wn.wn = new WNTooltip(elem);
    }
}