class WNCloseButton implements IWNCloseButton {
    public readonly nameType: string = 'WNCloseButton';
    public element: HTMLElement;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.render();
        }
    }
    private render() {
        this.element.addEventListener("click", (e) => {
            let elem = <Element>e.target;
            if (elem.hasAttribute('close-parent')) {
                let parent = this.element.parentElement;
                if (elem.getAttribute('close-parent') !== '') {
                    parent = WNGetNodesList(elem.getAttribute('close-parent'))[0] ?? null;
                    if (parent == null) return;
                }

                if (parent.classList.contains('show'))
                    parent.classList.remove('show');
                else
                    parent.classList.add('hide');

            }
            else if (elem.hasAttribute('remove-id')) {
                let el = WNGetNodesList(elem.getAttribute('remove-id'));
                for (var i = 0; i < el.length; i++) {
                    el[i].remove();
                }
            }
            else if (elem.hasAttribute('target')) {
                let el = WNGetNodesList(elem.getAttribute('target'));
                let addclass: string[] = null;
                let removeclass: string[] = null;
                if (elem.hasAttribute('add-class'))
                    addclass = elem.getAttribute('add-class').split(' ');
                if (elem.hasAttribute('remove-class'))
                    removeclass = elem.getAttribute('remove-class').split(' ');
                for (var i = 0; i < el.length; i++) {
                    let elm = el[i];
                    if (addclass != null)
                        for (var j = 0; j < addclass.length; j++)
                            elm.classList.add(addclass[j]);
                    if (removeclass != null)
                        for (var j = 0; j < removeclass.length; j++)
                            elm.classList.remove(removeclass[j]);

                }
            }
        });
    }
}