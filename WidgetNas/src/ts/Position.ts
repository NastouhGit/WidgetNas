type PositionParameters = {
    fit: boolean;
    direction: string;
};

function WNSetElementPosition(source: HTMLElement, base: HTMLElement, param: PositionParameters) {
    let source_cs = getComputedStyle(source);
    let source_pos = source.getBoundingClientRect();
    let element_pos = base.getBoundingClientRect();
    let offsetLeft = element_pos.left;
    let offsetTop = element_pos.top;
    let marginTop = WNparseNumber(source_cs.marginTop.replace('px', ''), 0);
    //let marginBottom = WNparseNumber(source_cs.marginBottom.replace('px', ''), 0);
    let marginLeft = WNparseNumber(source_cs.marginLeft.replace('px', ''), 0);
    let marginRight = WNparseNumber(source_cs.marginRight.replace('px', ''), 0);
    let rtl = source_cs.direction == 'rtl';

    let top = offsetTop + element_pos.height;
    let start = 0;
    let width = source_pos.width;

    //Fixed source Width
    if (param.fit) {
        if (width < element_pos.width)
            width = element_pos.width;
    }

    //Where source show
    //Calculate Top position
    if (element_pos.bottom + source_pos.height + marginTop * 2 > window.innerHeight || param.direction == 'top')
        top = offsetTop - source_pos.height - marginTop * 2;

    //Calculate Left or Right position
    if (rtl) {
        start = element_pos.right - width;
        if (param.direction == 'end') {
            start = offsetLeft;
        }
    }
    else {
        start = offsetLeft;
        if (param.direction == 'end') {
            start = offsetLeft + element_pos.width - width;
        }
    }
    if (start < 0) start = offsetLeft;
    if (start + width > window.innerWidth) start = window.innerWidth - width;

    if (param.direction == 'start') {
        top = offsetTop - source_pos.height / 2;
        if (rtl)
            start = offsetLeft + base.offsetWidth;
        else
            start = offsetLeft - width - marginLeft - marginRight;
    }
    if (param.direction == 'end') {
        top = offsetTop - source_pos.height / 2;
        if (rtl)
            start = offsetLeft - width - marginLeft - marginRight;
        else
            start = offsetLeft + base.offsetWidth;
    }
    if (param.direction == 'bottom')
        top = offsetTop + element_pos.height;

    source.style.top = top + "px";
    source.style.left = start + "px";
    if (width != 0)
        source.style.width = width + "px";
}