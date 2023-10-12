interface IWNModal extends IWNComponent {
    element: HTMLElement;
    //modalDialog: HTMLElement;
    backClose: boolean;
    
    showClass: string;
    hideClass: string ;

    values: WNDictionary;

    beforeShow: (t) => { };
    afterShow: (t) => {};

    beforeHide: (t) => {};
    afterHide: (t) => {};

    show(): void;
    toggle(): void;
    hide(): void;
}