interface IWNAccordion extends IWNComponent {
    selectedItem: { head: HTMLElement, body: HTMLElement }
    selectedIndex: number;
    mode: AccordionMode;
    beforeCollapse: (t, index) => boolean;
    afterCollapse: (t, index) => void;
}
enum AccordionMode {
    single= 'single',
    multiple ='multiple'
}