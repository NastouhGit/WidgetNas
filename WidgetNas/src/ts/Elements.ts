var WNElements: { [id: string]: WNElement; } = {};

class WNElement {
    wn: any | IWNComponent | IWNValidator | IWNSticky;
    element: any
    get htmlElement(): HTMLElement { return this.element as HTMLElement; }
    get document(): Document { return this.element as Document; }
    get fieldSetElement(): HTMLFieldSetElement { return this.element as HTMLFieldSetElement; }
    get embedElement(): HTMLEmbedElement { return this.element as HTMLEmbedElement; }
    get formElement(): HTMLFormElement { return this.element as HTMLFormElement; }
    get hrElement(): HTMLHRElement { return this.element as HTMLHRElement; }
    get headElement(): HTMLHeadElement { return this.element as HTMLHeadElement; }
    get headingElement(): HTMLHeadingElement { return this.element as HTMLHeadingElement; }
    get linkElement(): HTMLLinkElement { return this.element as HTMLLinkElement; }
    get iFrameElement(): HTMLIFrameElement { return this.element as HTMLIFrameElement; }
    get imageElement(): HTMLImageElement { return this.element as HTMLImageElement; }
    get inputElement(): HTMLInputElement { return this.element as HTMLInputElement; }
    get liElement(): HTMLLIElement { return this.element as HTMLLIElement; }
    get labelElement(): HTMLLabelElement { return this.element as HTMLLabelElement; }
    get legendElement(): HTMLLegendElement { return this.element as HTMLLegendElement; }
    get mapElement(): HTMLMapElement { return this.element as HTMLMapElement; }
    get mediaElement(): HTMLMediaElement { return this.element as HTMLMediaElement; }
    get menuElement(): HTMLMenuElement { return this.element as HTMLMenuElement; }
    get metaElement(): HTMLMetaElement { return this.element as HTMLMetaElement; }
    get meterElement(): HTMLMeterElement { return this.element as HTMLMeterElement; }
    get oListElement(): HTMLOListElement { return this.element as HTMLOListElement; }
    get objectElement(): HTMLObjectElement { return this.element as HTMLObjectElement; }
    get optGroupElement(): HTMLOptGroupElement { return this.element as HTMLOptGroupElement; }
    get optionElement(): HTMLOptionElement { return this.element as HTMLOptionElement; }
    get outputElement(): HTMLOutputElement { return this.element as HTMLOutputElement; }
    get paragraphElement(): HTMLParagraphElement { return this.element as HTMLParagraphElement; }
    get pictureElement(): HTMLPictureElement { return this.element as HTMLPictureElement; }
    get preElement(): HTMLPreElement { return this.element as HTMLPreElement; }
    get progressElement(): HTMLProgressElement { return this.element as HTMLProgressElement; }
    get quoteElement(): HTMLQuoteElement { return this.element as HTMLQuoteElement; }
    get scriptElement(): HTMLScriptElement { return this.element as HTMLScriptElement; }
    get selectElement(): HTMLSelectElement { return this.element as HTMLSelectElement; }
    get sourceElement(): HTMLSourceElement { return this.element as HTMLSourceElement; }
    get spanElement(): HTMLSpanElement { return this.element as HTMLSpanElement; }
    get tableCaptionElement(): HTMLTableCaptionElement { return this.element as HTMLTableCaptionElement; }
    get tableCellElement(): HTMLTableCellElement { return this.element as HTMLTableCellElement; }
    get tableColElement(): HTMLTableColElement { return this.element as HTMLTableColElement; }
    get tableElement(): HTMLTableElement { return this.element as HTMLTableElement; }
    get tableRowElement(): HTMLTableRowElement { return this.element as HTMLTableRowElement; }
    get tableSectionElement(): HTMLTableSectionElement { return this.element as HTMLTableSectionElement; }
    get templateElement(): HTMLTemplateElement { return this.element as HTMLTemplateElement; }
    get textAreaElement(): HTMLTextAreaElement { return this.element as HTMLTextAreaElement; }
    get timeElement(): HTMLTimeElement { return this.element as HTMLTimeElement; }
    get titleElement(): HTMLTitleElement { return this.element as HTMLTitleElement; }
    get trackElement(): HTMLTrackElement { return this.element as HTMLTrackElement; }
    get uListElement(): HTMLUListElement { return this.element as HTMLUListElement; }
    get videoElement(): HTMLVideoElement { return this.element as HTMLVideoElement; }

    ready(callBack: any, options: boolean = false): void { this.element.addEventListener("DOMContentLoaded", callBack, options); }
    click(callBack: any): void { this.element.addEventListener("click", callBack); }
    change(callBack: any): void { this.element.addEventListener("change", callBack); }
    input(callBack: any): void { this.element.addEventListener("input", callBack); }
    focus(callBack: any): void { this.element.addEventListener("focus", callBack); }
    focusIn(callBack: any): void { this.element.addEventListener("focusin", callBack); }
    focusOut(callBack: any): void { this.element.addEventListener("focusout", callBack); }
    resize(callBack: any): void { this.element.addEventListener("resize", callBack); }
    scroll(callBack: any): void { this.element.addEventListener("scroll", callBack); }
    select(callBack: any): void { this.element.addEventListener("select", callBack); }
    contextMenu(callBack: any): void { this.element.addEventListener("contextmenu", callBack); }
    copy(callBack: any): void { this.element.addEventListener("copy", callBack); }
    cut(callBack: any): void { this.element.addEventListener("cut", callBack); }
    paste(callBack: any): void { this.element.addEventListener("paste", callBack); }
    dblClick(callBack: any): void { this.element.addEventListener("dblclick", callBack); }
    drag(callBack: any): void { this.element.addEventListener("drag", callBack); }
    dragend(callBack: any): void { this.element.addEventListener("dragend", callBack); }
    dragEnter(callBack: any): void { this.element.addEventListener("dragenter", callBack); }
    dragLeave(callBack: any): void { this.element.addEventListener("dragleave", callBack); }
    dragOver(callBack: any): void { this.element.addEventListener("dragover", callBack); }
    dragStart(callBack: any): void { this.element.addEventListener("dragstart", callBack); }
    drop(callBack: any): void { this.element.addEventListener("drop", callBack); }
    keyDown(callBack: any): void { this.element.addEventListener("keydown", callBack); }
    keyPress(callBack: any): void { this.element.addEventListener("keypress", callBack); }
    keyUp(callBack: any): void { this.element.addEventListener("keyup", callBack); }
    mouseDown(callBack: any): void { this.element.addEventListener("mousedown", callBack); }
    mouseEnter(callBack: any): void { this.element.addEventListener("mouseenter", callBack); }
    mouseLeave(callBack: any): void { this.element.addEventListener("mouseleave", callBack); }
    mouseMove(callBack: any): void { this.element.addEventListener("mousemove", callBack); }
    mouseOver(callBack: any): void { this.element.addEventListener("mouseover", callBack); }
    mouseOut(callBack: any): void { this.element.addEventListener("mouseout", callBack); }
    mouseUp(callBack: any): void { this.element.addEventListener("mouseup", callBack); }
    touchCancel(callBack: any): void { this.element.addEventListener("touchcancel", callBack); }
    touchEnd(callBack: any): void { this.element.addEventListener("touchend", callBack); }
    touchMove(callBack: any): void { this.element.addEventListener("touchmove", callBack); }
    touchStart(callBack: any): void { this.element.addEventListener("touchstart", callBack); }
    wheel(callBack: any): void { this.element.addEventListener("wheel", callBack); }

    constructor(element: Document | HTMLElement) {
        this.element = element;
    }
}

function WNReset() {
    WNElements = {};
}

function WN(element: HTMLElement | Document | string): WNElement {
    let id = '';
    let telement: HTMLElement | Document;
    if (typeof (element) == 'string') {
        if (WNElements[element.toLocaleLowerCase()] != undefined)
            return WNElements[element.toLocaleLowerCase()];

        telement = document.querySelector(`[id='${element}' i]`) as HTMLElement;

        if (telement == null) {
            telement = document.querySelector(`[name='${element}' i]`) as HTMLElement;
        }

        if (telement == null)
            telement = document.querySelector(element) as HTMLElement;

        if (telement == undefined)
            return null;
        id = telement.id.toLocaleLowerCase();
    }
    else if (element == document) {
        telement = element;
        id = 'document';
    }
    else {
        telement = element;
        id = (<HTMLElement>telement).id.toLocaleLowerCase();
    }
    if (id === '')
        id = (<any>telement).name.toLocaleLowerCase();
    if (id === '')
        id = element.toString().toLocaleLowerCase();

    if (WNElements[id] == undefined) {
        WNElements[id] = new WNElement(telement);
    }
    return WNElements[id];
}

