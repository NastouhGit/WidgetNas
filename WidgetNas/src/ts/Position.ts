type PositionParameters = {
    fit: boolean;
    direction: string;
};

function WNSetElementPosition(source: HTMLElement, base: HTMLElement, param: PositionParameters) {
    let source_cs = getComputedStyle(source);
    let source_pos = source.getBoundingClientRect();
    let element_pos = base.getBoundingClientRect();

    let marginTop = WNparseNumber(source_cs.marginTop.replace('px', ''), 0);
    let marginLeft = WNparseNumber(source_cs.marginLeft.replace('px', ''), 0);
    let marginRight = WNparseNumber(source_cs.marginRight.replace('px', ''), 0);
    let rtl = source_cs.direction == 'rtl';

    let top = element_pos.top + element_pos.height;
    let start = 0;
    let width = source_pos.width;
    let height = source_pos.height;

    let windowWidth = window.innerWidth - 16;
    let windowHeight = window.innerHeight - 16;

    // Fixed source Width
    if (param.fit) {
        if (width < element_pos.width)
            width = element_pos.width;
    }

    // اگر عرض از صفحه بیشتر بود
    if (width > windowWidth) {
        source.style.left = '0.5rem';
        source.style.right = '0.5rem';
        source.style.width = `calc(100vw - 1rem)`;
    } else {
        // Calculate Left or Right position
        if (rtl) {
            start = element_pos.right - width;
            if (param.direction == 'end') {
                start = element_pos.left;
            }
        }
        else {
            start = element_pos.left;
            if (param.direction == 'end') {
                start = element_pos.left + element_pos.width - width;
            }
        }
        // فاصله از لبه‌ها
        const minEdge = 8; // حدود 0.5rem
        if (start < minEdge) start = minEdge;
        if (start + width > windowWidth - minEdge)
            start = windowWidth - width - minEdge;

        if (start < minEdge) start = minEdge;
        if (start + width + minEdge + minEdge > windowWidth) width = windowWidth - minEdge - minEdge;
        source.style.left = start + "px";
        source.style.right = '';
        source.style.width = width + "px";
    }

    // Calculate Top position
    if (element_pos.bottom + height + marginTop * 2 > windowHeight || param.direction == 'top')
        top = element_pos.top - height - marginTop * 2;
    if (param.direction == 'start') {
        top = element_pos.top - height / 2;
        if (rtl)
            start = element_pos.left + base.offsetWidth;
        else
            start = element_pos.left - width - marginLeft - marginRight;
    }
    if (param.direction == 'end') {
        top = element_pos.top - height / 2;
        if (rtl)
            start = element_pos.left - width - marginLeft - marginRight;
        else
            start = element_pos.left + base.offsetWidth;
    }
    if (param.direction == 'bottom')
        top = element_pos.top + element_pos.height;

    // اگر ارتفاع از صفحه بیشتر بود
    if (height > windowHeight - 1) {
        source.style.top = '0.5rem';
        source.style.bottom = '0.5rem';
    } else {
        // اگر پایین المان از صفحه بیرون زد، top را اصلاح کن
        const minEdge = 8; // حدود 0.5rem
        if (top < minEdge) top = minEdge;
        if (top + height > windowHeight - minEdge)
            top = windowHeight - height - minEdge;

        source.style.top = top + "px";
        source.style.bottom = '';
    }

    source.style.position = 'fixed';
}