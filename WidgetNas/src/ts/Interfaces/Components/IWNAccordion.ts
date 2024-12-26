interface IWNAccordion extends IWNComponent {
    items: { head: HTMLElement, body: HTMLElement }[]
    selectedItem: { head: HTMLElement, body: HTMLElement }
    selectedIndex: number;
    mode: AccordionMode;
    beforeCollapse: (t, index) => boolean;
    afterCollapse: (t, index) => void;

    beforeExpand: (t, index) => boolean;
    afterExpand: (t, index) => void;

    addItem(head: HTMLButtonElement, body: HTMLDivElement, collapsed: boolean): void;
    addItemByHtmlText(caption: string, body: string, collapsed: boolean): void;
    clear();
}
enum AccordionMode {
    single= 'single',
    multiple ='multiple'
}