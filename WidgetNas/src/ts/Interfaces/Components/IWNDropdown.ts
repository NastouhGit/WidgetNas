interface IWNDropdown extends IWNComponent {
    element: HTMLElement;
    dropdown: HTMLElement;
    checkOnlyDropDown: boolean;

    beforeShow: (t) => {};
    afterShow:  (t) => {};
    beforeHide:  (t) => {};
    afterHide: (t) => {};

    toggle(): void;
    hide(): void;
    show(): void;
    setPosition(): void;
    hideAllDropDowns(): void;
}