class WNToolbar implements IWNToolbar {
    public readonly nameType: string = 'WNToolbar';
    public element: HTMLElement;
    private itemsarea: HTMLElement;
    private dropdownlist: HTMLElement;
    private dropdownbutton: HTMLButtonElement;
    public dropdown: WNDropdown;
    private resizeObserver: ResizeObserver;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
        }
    }
    private init() {
        if (this.element.classList.length == 0)
            this.element.className = 'wn-toolbar';
        this.itemsarea = this.element.querySelector('.items');
        if (this.itemsarea == null) {
            this.itemsarea = document.createElement('div');
            this.itemsarea.className = 'items';
            this.element.appendChild(this.itemsarea);
        }
        this.dropdownbutton = this.element.querySelector('.button-toggle');
        if (this.dropdownbutton == null) {
            this.dropdownbutton = document.createElement('button');
            this.dropdownbutton.className = 'button-toggle';
            this.element.appendChild(this.dropdownbutton);
        }
        this.dropdownbutton.onclick = () => this.dropdown.toggle();

        this.dropdownlist = this.element.querySelector('.dropdown');
        if (this.dropdownlist == null) {
            if ((this.element.nextSibling as HTMLElement)?.classList?.contains('.dropdown'))
                this.dropdownlist = (this.element.nextSibling as HTMLElement);
        }
        if (this.dropdownlist == null) {
            this.dropdownlist = document.createElement("div");
            this.dropdownlist.className = "dropdown list align-end";
            this.element.appendChild(this.dropdownlist);
        }
        this.element.setAttribute('wn-dropdown-event', 'none');
        this.dropdown = new WNDropdown(this.element);
        

        window.addEventListener('resize', () => this.layout());
        this.layout();
        this.resizeObserver = new ResizeObserver(() => this.layout());
        this.resizeObserver.observe(this.element);
    }
    private layout() {
        // انتقال همه آیتم‌ها به ناحیه اصلی
        const allItems = Array.from(this.itemsarea.querySelectorAll('.item,li'))
            .concat(Array.from(this.dropdownlist.querySelectorAll('.item,li')));
        allItems.forEach(item => this.itemsarea.appendChild(item));

        // نمایش همه آیتم‌ها و دکمه dropdown برای محاسبه عرض واقعی
        this.dropdownbutton.style.display = '';
        this.dropdownlist.style.display = 'none';

        // محاسبه عرض تولبار در حالت کامل
        const styleElement = getComputedStyle(this.element);
        const toolbarWidth = this.element.clientWidth - parseInt(styleElement.paddingLeft) - parseInt(styleElement.paddingRight);

        let gap = 0;
        const styleItemsArea = getComputedStyle(this.itemsarea);
        if (styleItemsArea.gap) gap = parseInt(styleItemsArea.gap) || 0;

        let usedWidth = 0;
        for (var i = 0; i < this.element.children.length; i++) {
            let el = this.element.children[i] as HTMLElement;
            if (!(el.classList.contains('items') || el === this.dropdownlist)) {
                const style = getComputedStyle(el);
                usedWidth += el.offsetWidth +
                    parseInt(style.marginLeft) || 0 +
                    parseInt(style.marginRight) || 0 +
                    parseInt(styleElement.gap) || 0;
            }
        }
        let hasDropdown = false;

        const items = Array.from(this.itemsarea.children);
        let list = this.dropdownlist;
        if (this.itemsarea.tagName == 'UL') {
            this.dropdownlist.innerHTML = '';
            list = document.createElement('ul');
            this.dropdownlist.appendChild(list);
        }
        items.forEach((item, idx) => {
            const el = item as HTMLElement;
            const style = getComputedStyle(el);
            const itemWidth = el.offsetWidth;
            const marginLeft = parseInt(style.marginLeft) || 0;
            const marginRight = parseInt(style.marginRight) || 0;
            const totalWidth = itemWidth + marginLeft + marginRight + gap;

            if (usedWidth + totalWidth > toolbarWidth) {
                list.appendChild(item);
                hasDropdown = true;
            } else {
                usedWidth += totalWidth;
            }
        });

        // نمایش dropdown فقط اگر آیتمی در آن باشد
        this.dropdownbutton.style.display = hasDropdown ? '' : 'none';
        this.dropdownlist.style.display = hasDropdown ? '' : 'none';
    }
}
(globalThis as any).WNToolbar = WNToolbar;