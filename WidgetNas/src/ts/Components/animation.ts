var _AnimationOnScroll;
function WNAnimationSetup() {
    _AnimationOnScroll = document.querySelectorAll(".animateonscroll,.animateonscrollloop");
    if (_AnimationOnScroll.length > 0) {
        window.addEventListener("scroll", () => WNAnimationStart());
        window.addEventListener("resize", () => WNAnimationStart());
        window.addEventListener("orientationchange", () => WNAnimationStart());
        WNAnimationStart();
    }
}
function WNGetOffset(el) {
    let _x = 0;
    let _y = 0;

    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - (el.tagName != 'BODY' ? el.scrollLeft : 0);
        _y += el.offsetTop - (el.tagName != 'BODY' ? el.scrollTop : 0);
        el = el.offsetParent;
    }

    return {
        top: _y,
        left: _x
    };
};

function WNAnimationStart() {
    _AnimationOnScroll.forEach((el) => {
        let pos = WNGetOffset(el);
        let top = pos.top;
        let bottom = top + el.offsetHeight;
        let wtop = window.scrollY;
        let wbottom = window.scrollY + window.innerHeight;
        if (top < wbottom && bottom > wtop) {
            if (el.getAttribute('animateplaystate') == null || el.getAttribute('animateplaystate') == '') {
                let c = el.className;
                el.className = '';
                void el.offsetWidth;
                el.className = c;
                el.setAttribute('animateplaystate', 'play');
            }
        }
        else if ((bottom < wtop || top > wbottom)
            && el.classList.contains('animateonscrollloop')) {
            el.setAttribute('animateplaystate', '');
        }
    });
}