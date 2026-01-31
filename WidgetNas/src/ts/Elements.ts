var WNElements: { [id: string]: WNElement; } = {};

class WNElement {
    wn: any | IWNComponent;
    element: any;

    // Component getters
    get WNAccordion(): IWNAccordion | null { return this.wn ? (this.wn as IWNAccordion) : null; }
    get WNCaptcha(): IWNCaptcha | null { return this.wn ? (this.wn as IWNCaptcha) : null; }
    get WNCarousel(): IWNCarousel | null { return this.wn ? (this.wn as IWNCarousel) : null; }
    get WNCloseButton(): IWNCloseButton | null { return this.wn ? (this.wn as IWNCloseButton) : null; }
    get WNCollapse(): IWNCollapse | null { return this.wn ? (this.wn as IWNCollapse) : null; }
    get WNConfirm(): IWNConfirm | null { return this.wn ? (this.wn as IWNConfirm) : null; }
    get WNCounter(): IWNCounter | null { return this.wn ? (this.wn as IWNCounter) : null; }
    get WNDateShow(): IWNDateShow | null { return this.wn ? (this.wn as IWNDateShow) : null; }
    get WNDropdown(): IWNDropdown | null { return this.wn ? (this.wn as IWNDropdown) : null; }
    get WNEditor(): IWNEditor | null { return this.wn ? (this.wn as IWNEditor) : null; }
    get WNFileList(): IWNFileList | null { return this.wn ? (this.wn as IWNFileList) : null; }
    get WNFilter(): IWNFilter | null { return this.wn ? (this.wn as IWNFilter) : null; }
    get WNImageEditor(): IWNImageEditor | null { return this.wn ? (this.wn as IWNImageEditor) : null; }
    get WNInputList(): IWNInputList | null { return this.wn ? (this.wn as IWNInputList) : null; }
    get WNLightbox(): IWNLightbox | null { return this.wn ? (this.wn as IWNLightbox) : null; }
    get WNList(): IWNList | null { return this.wn ? (this.wn as IWNList) : null; }
    get WNModal(): IWNModal | null { return this.wn ? (this.wn as IWNModal) : null; }
    get WNMonthCalendar(): IWNMonthCalendar | null { return this.wn ? (this.wn as IWNMonthCalendar) : null; }
    get WNMultiInput(): IWNMultiInput | null { return this.wn ? (this.wn as IWNMultiInput) : null; }
    get WNMultiInputPhone(): IWNMultiInputPhone | null { return this.wn ? (this.wn as IWNMultiInputPhone) : null; }
    get WNMultiSelect(): IWNMultiSelect | null { return this.wn ? (this.wn as IWNMultiSelect) : null; }
    get WNProgress(): IWNProgress | null { return this.wn ? (this.wn as IWNProgress) : null; }
    get WNScroll(): IWNScroll | null { return this.wn ? (this.wn as IWNScroll) : null; }
    get WNSearchList(): IWNSearchList | null { return this.wn ? (this.wn as IWNSearchList) : null; }
    get WNSlicker(): IWNSlicker | null { return this.wn ? (this.wn as IWNSlicker) : null; }
    get WNSticky(): IWNSticky | null { return this.wn ? (this.wn as IWNSticky) : null; }
    get WNTab(): IWNTab | null { return this.wn ? (this.wn as IWNTab) : null; }
    get WNTable(): IWNTable | null { return this.wn ? (this.wn as IWNTable) : null; }
    get WNTime(): IWNTime | null { return this.wn ? (this.wn as IWNTime) : null; }
    get WNToast(): IWNToast | null { return this.wn ? (this.wn as IWNToast) : null; }
    get WNTooltip(): IWNTooltip | null { return this.wn ? (this.wn as IWNTooltip) : null; }
    get WNToolbar(): IWNToolbar | null { return this.wn ? (this.wn as IWNToolbar) : null; }
    get WNTree(): IWNTree | null { return this.wn ? (this.wn as IWNTree) : null; }
    get WNTreeTable(): IWNTreeTable | null { return this.wn ? (this.wn as IWNTreeTable) : null; }
    get WNValidator(): IWNValidator | null { return this.wn ? (this.wn as IWNValidator) : null; }
    get WNSelect(): IWNSelect | null { return this.wn ? (this.wn as IWNSelect) : null; }
    get WNCalendar(): IWNCalendar | null { return this.wn ? (this.wn as IWNCalendar) : null; }
    get WNCultureInfo(): IWNCultureInfo | null { return this.wn ? (this.wn as IWNCultureInfo) : null; }
    get WNDate(): IWNDate | null { return this.wn ? (this.wn as IWNDate) : null; }
    get WNRange(): IWNRange | null { return this.wn ? (this.wn as IWNRange) : null; }

    // HTML element getters
    get htmlElement(): HTMLElement | null { return this.element instanceof HTMLElement ? this.element : null; }
    get document(): Document | null { return this.element instanceof Document ? this.element : null; }
    get fieldSetElement(): HTMLFieldSetElement | null { return this.element instanceof HTMLFieldSetElement ? this.element : null; }
    get embedElement(): HTMLEmbedElement | null { return this.element instanceof HTMLEmbedElement ? this.element : null; }
    get formElement(): HTMLFormElement | null { return this.element instanceof HTMLFormElement ? this.element : null; }
    get hrElement(): HTMLHRElement | null { return this.element instanceof HTMLHRElement ? this.element : null; }
    get headElement(): HTMLHeadElement | null { return this.element instanceof HTMLHeadElement ? this.element : null; }
    get headingElement(): HTMLHeadingElement | null { return this.element instanceof HTMLHeadingElement ? this.element : null; }
    get linkElement(): HTMLLinkElement | null { return this.element instanceof HTMLLinkElement ? this.element : null; }
    get iFrameElement(): HTMLIFrameElement | null { return this.element instanceof HTMLIFrameElement ? this.element : null; }
    get imageElement(): HTMLImageElement | null { return this.element instanceof HTMLImageElement ? this.element : null; }
    get inputElement(): HTMLInputElement | null { return this.element instanceof HTMLInputElement ? this.element : null; }
    get liElement(): HTMLLIElement | null { return this.element instanceof HTMLLIElement ? this.element : null; }
    get labelElement(): HTMLLabelElement | null { return this.element instanceof HTMLLabelElement ? this.element : null; }
    get legendElement(): HTMLLegendElement | null { return this.element instanceof HTMLLegendElement ? this.element : null; }
    get mapElement(): HTMLMapElement | null { return this.element instanceof HTMLMapElement ? this.element : null; }
    get mediaElement(): HTMLMediaElement | null { return this.element instanceof HTMLMediaElement ? this.element : null; }
    get menuElement(): HTMLMenuElement | null { return this.element instanceof HTMLMenuElement ? this.element : null; }
    get metaElement(): HTMLMetaElement | null { return this.element instanceof HTMLMetaElement ? this.element : null; }
    get meterElement(): HTMLMeterElement | null { return this.element instanceof HTMLMeterElement ? this.element : null; }
    get oListElement(): HTMLOListElement | null { return this.element instanceof HTMLOListElement ? this.element : null; }
    get objectElement(): HTMLObjectElement | null { return this.element instanceof HTMLObjectElement ? this.element : null; }
    get optGroupElement(): HTMLOptGroupElement | null { return this.element instanceof HTMLOptGroupElement ? this.element : null; }
    get optionElement(): HTMLOptionElement | null { return this.element instanceof HTMLOptionElement ? this.element : null; }
    get outputElement(): HTMLOutputElement | null { return this.element instanceof HTMLOutputElement ? this.element : null; }
    get paragraphElement(): HTMLParagraphElement | null { return this.element instanceof HTMLParagraphElement ? this.element : null; }
    get pictureElement(): HTMLPictureElement | null { return this.element instanceof HTMLPictureElement ? this.element : null; }
    get preElement(): HTMLPreElement | null { return this.element instanceof HTMLPreElement ? this.element : null; }
    get progressElement(): HTMLProgressElement | null { return this.element instanceof HTMLProgressElement ? this.element : null; }
    get quoteElement(): HTMLQuoteElement | null { return this.element instanceof HTMLQuoteElement ? this.element : null; }
    get scriptElement(): HTMLScriptElement | null { return this.element instanceof HTMLScriptElement ? this.element : null; }
    get selectElement(): HTMLSelectElement | null { return this.element instanceof HTMLSelectElement ? this.element : null; }
    get sourceElement(): HTMLSourceElement | null { return this.element instanceof HTMLSourceElement ? this.element : null; }
    get spanElement(): HTMLSpanElement | null { return this.element instanceof HTMLSpanElement ? this.element : null; }
    get tableCaptionElement(): HTMLTableCaptionElement | null { return this.element instanceof HTMLTableCaptionElement ? this.element : null; }
    get tableCellElement(): HTMLTableCellElement | null { return this.element instanceof HTMLTableCellElement ? this.element : null; }
    get tableColElement(): HTMLTableColElement | null { return this.element instanceof HTMLTableColElement ? this.element : null; }
    get tableElement(): HTMLTableElement | null { return this.element instanceof HTMLTableElement ? this.element : null; }
    get tableRowElement(): HTMLTableRowElement | null { return this.element instanceof HTMLTableRowElement ? this.element : null; }
    get tableSectionElement(): HTMLTableSectionElement | null { return this.element instanceof HTMLTableSectionElement ? this.element : null; }
    get templateElement(): HTMLTemplateElement | null { return this.element instanceof HTMLTemplateElement ? this.element : null; }
    get textAreaElement(): HTMLTextAreaElement | null { return this.element instanceof HTMLTextAreaElement ? this.element : null; }
    get timeElement(): HTMLTimeElement | null { return this.element instanceof HTMLTimeElement ? this.element : null; }
    get titleElement(): HTMLTitleElement | null { return this.element instanceof HTMLTitleElement ? this.element : null; }
    get trackElement(): HTMLTrackElement | null { return this.element instanceof HTMLTrackElement ? this.element : null; }
    get uListElement(): HTMLUListElement | null { return this.element instanceof HTMLUListElement ? this.element : null; }
    get videoElement(): HTMLVideoElement | null { return this.element instanceof HTMLVideoElement ? this.element : null; }
    get buttonElement(): HTMLButtonElement | null { return this.element instanceof HTMLButtonElement ? this.element : null; }

    // Custom element and fragment support
    get customElement(): HTMLElement | null { return this.element instanceof HTMLElement ? this.element : null; }
    get documentFragment(): DocumentFragment | null { return this.element instanceof DocumentFragment ? this.element : null; }

    // Query helpers
    query(selector: string): HTMLElement | null {
        return this.element && this.element.querySelector ? this.element.querySelector(selector) : null;
    }
    queryAll(selector: string): NodeListOf<HTMLElement> | null {
        return this.element && this.element.querySelectorAll ? this.element.querySelectorAll(selector) : null;
    }

    // Event helpers
    ready(callBack: any, options: boolean = false): void { this.element?.addEventListener?.("DOMContentLoaded", callBack, options); }
    click(callBack: any): void { this.element?.addEventListener?.("click", callBack); }
    change(callBack: any): void { this.element?.addEventListener?.("change", callBack); }
    input(callBack: any): void { this.element?.addEventListener?.("input", callBack); }
    focus(callBack: any): void { this.element?.addEventListener?.("focus", callBack); }
    focusIn(callBack: any): void { this.element?.addEventListener?.("focusin", callBack); }
    focusOut(callBack: any): void { this.element?.addEventListener?.("focusout", callBack); }
    resize(callBack: any): void { this.element?.addEventListener?.("resize", callBack); }
    scroll(callBack: any): void { this.element?.addEventListener?.("scroll", callBack); }
    select(callBack: any): void { this.element?.addEventListener?.("select", callBack); }
    contextMenu(callBack: any): void { this.element?.addEventListener?.("contextmenu", callBack); }
    copy(callBack: any): void { this.element?.addEventListener?.("copy", callBack); }
    cut(callBack: any): void { this.element?.addEventListener?.("cut", callBack); }
    paste(callBack: any): void { this.element?.addEventListener?.("paste", callBack); }
    dblClick(callBack: any): void { this.element?.addEventListener?.("dblclick", callBack); }
    drag(callBack: any): void { this.element?.addEventListener?.("drag", callBack); }
    dragend(callBack: any): void { this.element?.addEventListener?.("dragend", callBack); }
    dragEnter(callBack: any): void { this.element?.addEventListener?.("dragenter", callBack); }
    dragLeave(callBack: any): void { this.element?.addEventListener?.("dragleave", callBack); }
    dragOver(callBack: any): void { this.element?.addEventListener?.("dragover", callBack); }
    dragStart(callBack: any): void { this.element?.addEventListener?.("dragstart", callBack); }
    drop(callBack: any): void { this.element?.addEventListener?.("drop", callBack); }
    keyDown(callBack: any): void { this.element?.addEventListener?.("keydown", callBack); }
    keyPress(callBack: any): void { this.element?.addEventListener?.("keypress", callBack); }
    keyUp(callBack: any): void { this.element?.addEventListener?.("keyup", callBack); }
    mouseDown(callBack: any): void { this.element?.addEventListener?.("mousedown", callBack); }
    mouseEnter(callBack: any): void { this.element?.addEventListener?.("mouseenter", callBack); }
    mouseLeave(callBack: any): void { this.element?.addEventListener?.("mouseleave", callBack); }
    mouseMove(callBack: any): void { this.element?.addEventListener?.("mousemove", callBack); }
    mouseOver(callBack: any): void { this.element?.addEventListener?.("mouseover", callBack); }
    mouseOut(callBack: any): void { this.element?.addEventListener?.("mouseout", callBack); }
    mouseUp(callBack: any): void { this.element?.addEventListener?.("mouseup", callBack); }
    touchCancel(callBack: any): void { this.element?.addEventListener?.("touchcancel", callBack); }
    touchEnd(callBack: any): void { this.element?.addEventListener?.("touchend", callBack); }
    touchMove(callBack: any): void { this.element?.addEventListener?.("touchmove", callBack); }
    touchStart(callBack: any): void { this.element?.addEventListener?.("touchstart", callBack); }
    wheel(callBack: any): void { this.element?.addEventListener?.("wheel", callBack); }

    constructor(element: Document | HTMLElement | DocumentFragment) {
        this.element = element;
    }
}
(globalThis as any).WNElement = WNElement;
function WNReset() {
    WNElements = {};
}

function WN(element: HTMLElement | Document | string): WNElement {
    let id = '';
    let telement: HTMLElement | Document;
    if (typeof (element) == 'string') {
        if (WNElements[element.toLowerCase()] != undefined)
            return WNElements[element.toLowerCase()];

        telement = document.querySelector(`[id='${element}' i]`) as HTMLElement;

        if (telement == null) {
            telement = document.querySelector(`[name='${element}' i]`) as HTMLElement;
        }

        if (telement == null)
            telement = document.querySelector(element) as HTMLElement;

        if (telement == undefined)
            return null;
        id = telement.id.toLowerCase();
    }
    else if (element == document) {
        telement = element;
        id = 'document';
    }
    else {
        telement = element;
        id = (<HTMLElement>telement).id.toLowerCase();
    }
    if (id === '')
        id = (<any>telement).name.toLowerCase();
    if (id === '')
        id = element.toString().toLowerCase();

    if (WNElements[id] == undefined) {
        WNElements[id] = new WNElement(telement);
    }
    return WNElements[id];
}

