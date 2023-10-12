class WNDropdown implements IWNDropdown {
    public readonly nameType: string = 'WNDropdown';
    static WNWindowClickHandled = false;
    static WNLastDropdownOpened: HTMLElement[] = [];

    public element: HTMLElement;
    public dropdown: HTMLElement;
    public checkOnlyDropDown = false;

    public beforeShow: (t) => {};
    public afterShow: (t) => {};
    public beforeHide: (t) => {};
    public afterHide: (t) => {};
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
            this.render();
        }
    }
    private render() {
        window.removeEventListener("click", (e) => this.windowClick(e));
        window.removeEventListener("scroll", (e) => this.windowClick(e));
        window.removeEventListener("resize", (e) => this.windowClick(e));
        window.addEventListener("click", (e) => this.windowClick(e));
        window.addEventListener("scroll", (e) => this.windowClick(e));
        window.addEventListener("resize", (e) => this.windowClick(e));

        let defaultevent = "click";
        if (this.element.hasAttribute('wn-dropdown-event'))
            defaultevent = this.element.getAttribute('wn-dropdown-event');

        if (defaultevent !== '')
            defaultevent.split(',').forEach((s) => {
                this.element.addEventListener(s.trim(), (e) => {
                    if (this.checkOnlyDropDown) {
                        if ((e.target == this.dropdown))
                            this.toggle();
                    }
                    else
                        this.toggle();
                });
            });
        if (this.element.hasAttribute('onbeforeshow'))
            this.beforeShow = WNGenerateFunction(this.element.getAttribute('onbeforeshow'), 't');
        if (this.element.hasAttribute('onbeforehide'))
            this.beforeHide = WNGenerateFunction(this.element.getAttribute('onbeforehide'), 't');
        if (this.element.hasAttribute('onaftershow'))
            this.afterShow = WNGenerateFunction(this.element.getAttribute('onbaftershow'), 't');
        if (this.element.hasAttribute('onafterhide'))
            this.afterHide = WNGenerateFunction(this.element.getAttribute('onafterhide'), 't');

    }
    private windowClick(event): void {
        if (WNDropdown.WNWindowClickHandled || WNDropdown.WNLastDropdownOpened == null) {
            WNDropdown.WNWindowClickHandled = false;
            return;
        }
        let doHide = false;
        if (event.target == document || event.target == window)
            doHide = true;
        else if (event.target.getAttribute('wn-type') != 'dropdown' && !WNParentHaveClass(event.target, 'dropdown'))
            doHide = true;

        if (doHide) {
            while (WNDropdown.WNLastDropdownOpened.length > 0) {
                let obj = WNDropdown.WNLastDropdownOpened.pop() as HTMLElement;
                obj.classList.remove("show");
            }
        }
    }

    public toggle(): void {
        WNDropdown.WNWindowClickHandled = true;
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        let hide = true;
        for (var i = 0; i < WNDropdown.WNLastDropdownOpened.length; i++) {
            if (WNContainElement(this.element, WNDropdown.WNLastDropdownOpened[i])) {
                hide = false;
                break;
            }
        }
        if (hide)
            this.hide();

        if (!this.dropdown.classList.contains("show"))
            this.show();
        else
            this.hide();
    }

    public hide(): void {
        WNDropdown.WNWindowClickHandled = true;
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        this.beforeHide?.(this);
        while (WNDropdown.WNLastDropdownOpened.length > 0) {
            let obj = WNDropdown.WNLastDropdownOpened.pop() as HTMLElement;
            obj.classList.remove("show");
        }
        this.afterHide?.(this);
    }

    public show(): void {
        WNDropdown.WNWindowClickHandled = true;
        this.setPosition();
        this.beforeShow?.(this);

        this.dropdown.classList.add("show");
        if (!this.dropdown.classList.contains('single')) {
            WNDropdown.WNLastDropdownOpened.push(this.dropdown);
        }
        //this.dropdown.focus();
        this.afterShow?.(this);
    }

    public setPosition(): void {

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

    public hideAllDropDowns(): void {
        WNDropdown.WNLastDropdownOpened.forEach((x) => { x.classList.remove('show'); });
    }
}