let DropdownClickHandled = false;
let WindowClickHandled = false;
let LastDropdownOpened: HTMLElement[] = [];
//let LastDropdownClicked = null;

class wndropdown {
    element: HTMLElement;
    dropdown: HTMLElement;
    CheckOnlyDropDown = false;

    beforeshow: any;
    aftershow: any;
    beforehide: any;
    afterhide: any;
    //Private variables
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            if (this.element.hasAttribute('wn-dropdown')) {
                this.dropdown = document.getElementById(this.element.getAttribute('wn-dropdown'));
            }
            else {
                this.dropdown = elem.querySelector("[class*='dropdown']");
                if (this.dropdown == null) {
                    if ((this.element.nextElementSibling as HTMLElement).classList.contains('dropdown'))
                        this.dropdown = this.element.nextElementSibling as HTMLElement;
                }
            }
            this.Render();
        }
    }
    Render() {
        if (!DropdownClickHandled) {
            window.addEventListener("click", (e) => this.WindowClick(e));
            window.addEventListener("scroll", (e) => this.WindowClick(e));
            window.addEventListener("resize", (e) => this.WindowClick(e));
            DropdownClickHandled = true;
        }
        let defaultevent = "click";
        if (this.element.hasAttribute('wn-dropdown-event'))
            defaultevent = this.element.getAttribute('wn-dropdown-event');

        if (defaultevent !== '')
            defaultevent.split(',').forEach((s) => {
                this.element.addEventListener(s.trim(), (e) => {
                    if (this.CheckOnlyDropDown) {
                        if ((e.target == this.dropdown))
                            this._Toggle();
                    }
                    else
                        this._Toggle();
                });
            });
        if (this.element.hasAttribute('onbeforeshow'))
            this.beforeshow = new Function('t', this.element.getAttribute('onbeforeshow'));
        if (this.element.hasAttribute('onbeforehide'))
            this.beforehide = new Function('t', this.element.getAttribute('onbeforehide'));
        if (this.element.hasAttribute('onaftershow'))
            this.aftershow = new Function('t', this.element.getAttribute('onbaftershow'));
        if (this.element.hasAttribute('onafterhide'))
            this.afterhide = new Function('t', this.element.getAttribute('onafterhide'));

    }
    WindowClick(event): void {
        if (WindowClickHandled || LastDropdownOpened == null) {
            WindowClickHandled = false;
            return;
        }
        let doHide = false;
        if (event.target == document || event.target == window)
            doHide = true;
        else if (event.target.getAttribute('wn-type') != 'dropdown' && !WNParentHaveClass(event.target, 'dropdown'))
            doHide = true;

        if (doHide) {
            while (LastDropdownOpened.length > 0) {
                let obj = LastDropdownOpened.pop() as HTMLElement;
                obj.classList.remove("show");
            }
            //LastDropdownOpened = null;
            //LastDropdownClicked = null;
        }
    }
    Toggle(): void {
        WindowClickHandled = true;
        this._Toggle();
    }
    private _Toggle(): void {
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        let hide = true;
        for (var i = 0; i < LastDropdownOpened.length; i++) {
            if (WNContainElement(this.element, LastDropdownOpened[i])) {
                hide = false;
                break;
            }
        }
        if (hide)
            this._Hide();

        if (!this.dropdown.classList.contains("show"))
            this._Show();
        else
            this._Hide();
    }
    Hide(): void {
        this._Hide();
    }
    private _Hide(): void {
        WindowClickHandled = true;
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        if (this.beforehide != null) this.beforehide(this);
        while (LastDropdownOpened.length > 0) {
            let obj = LastDropdownOpened.pop() as HTMLElement;
            obj.classList.remove("show");
        }
        if (this.afterhide != null) this.afterhide(this);
    }
    Show(): void {
        this._Show();
    }
    private _Show(): void {
        WindowClickHandled = true;
        this.SetPosition();
        if (this.beforeshow != null) this.beforeshow(this);

        this.dropdown.classList.add("show");
        if (!this.dropdown.classList.contains('single')) {
            LastDropdownOpened.push(this.dropdown);
        }
        this.dropdown.focus();
        if (this.aftershow != null) this.aftershow(this);
    }
    HideAllDropDowns() {
        LastDropdownOpened.forEach((x) => { x.classList.remove('show'); });
    }
    SetPosition(): void {

        let dropdown_cs = getComputedStyle(this.dropdown);
        let dropdown_pos = this.dropdown.getBoundingClientRect();
        let element_pos = this.element.getBoundingClientRect();
        let offsetLeft = element_pos.left;
        let offsetTop = element_pos.top;
        let marginTop = + parseInt(dropdown_cs.marginTop);
        let rtl = dropdown_cs.direction == 'rtl';

        let top = offsetTop + element_pos.height;
        let start = 0;
        let width = dropdown_pos.width;

        //Fixed Dropdown Width
        if (this.dropdown.className.includes('align-fit')) {
            if (width < element_pos.width)
                width = element_pos.width;
        }

        //Where Dropdown show
        //Calculate Top position
        if (element_pos.bottom + dropdown_pos.height + marginTop * 2 > window.innerHeight || this.element.className.includes('pos-top'))
            top = offsetTop - dropdown_pos.height - marginTop * 2;

        //Calculate Left or Right position
        if (rtl) {
            start = element_pos.right - width;
            if (this.dropdown.className.includes('align-end')) {
                start = offsetLeft;
            }
        }
        else {
            start = offsetLeft;
            if (this.dropdown.className.includes('align-end')) {
                start = offsetLeft + element_pos.width - width;
            }
        }
        if (start < 0) start = offsetLeft;
        if (start + width > window.innerWidth) start = window.innerWidth - width;

        if (this.element.className.includes('pos-start')) {
            top = offsetTop - dropdown_pos.height / 2;
            if (rtl)
                start = offsetLeft + this.element.offsetWidth + marginTop;
            else
                start = offsetLeft - width - marginTop;
        }
        if (this.element.className.includes('pos-end')) {
            top = offsetTop - dropdown_pos.height / 2;
            if (rtl)
                start = offsetLeft - width - marginTop;
            else
                start = offsetLeft + this.element.offsetWidth + marginTop;
        }
        if (this.element.className.includes('pos-bottom'))
            top = offsetTop + element_pos.height;

        this.dropdown.style.top = top + "px";
        this.dropdown.style.left = start + "px";
        if (width > 0)
            this.dropdown.style.width = width + "px";
        else
            this.dropdown.style.width = '';
    }
}