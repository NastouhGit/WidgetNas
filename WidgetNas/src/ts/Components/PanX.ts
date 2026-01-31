function WNPanXSetup() {
    const CheckGrab = () => {
        requestAnimationFrame(() => {
            document.querySelectorAll('.wn-pan-x').forEach(el => {
                if (el.scrollWidth > el.clientWidth) {
                    el.classList.add('grab');
                }
                else {
                    el.classList.remove('grab');
                }
                let st = getComputedStyle(el);
                if ((el as HTMLElement).classList.contains('grab') && st.justifyContent != 'start')
                    (el as HTMLElement).style.setProperty('justify-content', 'start', 'important');
                else
                    (el as HTMLElement).style.removeProperty('justify-content');
            });
        });
    }
    window.addEventListener('resize', () => CheckGrab());
    CheckGrab();

    // متغیرهای وضعیت پان
    let isPanning = false;
    let startX = 0;
    let scrollLeft = 0;
    let scrollLeftStart = 0;
    let currentEl: HTMLElement | null = null;

    const PanStart = (el: HTMLElement, x: number) => {
        isPanning = true;
        startX = x;
        scrollLeft = el.scrollLeft;
        scrollLeftStart = el.scrollLeft;
        currentEl = el;
        el.classList.add('dragging');
    };

    const PanMove = (el: HTMLElement, x: number) => {
        if (!isPanning || currentEl !== el) return;
        const dx = x - startX;
        el.scrollLeft = scrollLeft - dx;
    };

    const PanEnd = (el: HTMLElement) => {
        isPanning = false;
        if (el) el.classList.remove('dragging');
        currentEl = null;
    };

    document.querySelectorAll('.wn-pan-x').forEach(elem => {
        let el = elem as HTMLElement;

        // Helper: آیا روی آیتمی کلیک شده که نباید پان فعال شود؟
        const isDragTarget = (target: EventTarget | null) => {
            if (!(target instanceof HTMLElement)) return false;
            // اگر لینک، دکمه یا آیتمی با draggable=true بود
            return (
                target.closest('a, button, [draggable="true"]')
            );
        };
        let panMoved = false;

        // Touch events
        el.addEventListener("touchstart", (e) => {
            if (e.touches.length === 1) {
                panMoved = false;
                PanStart(el, e.touches[0].clientX - el.offsetLeft);
            }
        }, true);

        el.addEventListener("touchmove", e => {
            if (e.touches.length === 1) {
                PanMove(el, e.touches[0].clientX - el.offsetLeft);
                panMoved = true;
            }
        }, true);

        el.addEventListener("touchend", e => {
            PanEnd(el);
            // اگر روی لینک لمس شد و پنی انجام نشده بود، اجازه بده رفتار پیش‌فرض اجرا شود
            if (!panMoved && isDragTarget(e.target)) {
                // هیچ کاری نکن (اجازه بده لینک کار کند)
            }
        }, true);
        el.addEventListener("touchcancel", e => { PanEnd(el); }, true);

        // Mouse events
        el.addEventListener("mousedown", e => {
            if (e.button === 0) {
                if (isDragTarget(e.target))
                    e.preventDefault(); // جلوگیری از انتخاب متن و رفتار پیش‌فرض
                PanStart(el, e.clientX - el.offsetLeft);
            }
        });
        el.addEventListener("mousemove", e => {
            if (e.buttons === 1) {
                PanMove(el, e.clientX - el.offsetLeft);
            }
        });
        el.addEventListener("mouseup", e => { PanEnd(el); });
        el.addEventListener("mouseleave", e => { PanEnd(el); });
        // جلوگیری از فعال شدن لینک در صورت اسکرول افقی
        el.addEventListener("click", e => {
            const scrollDiff = Math.abs(el.scrollLeft - scrollLeftStart);
            if ((scrollDiff > 5 || panMoved) && isDragTarget(e.target)) {
                e.preventDefault();
            }
        });
    });
}