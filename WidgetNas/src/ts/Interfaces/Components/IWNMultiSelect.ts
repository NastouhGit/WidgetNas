interface IWNMultiSelect extends IWNComponent {

    selectedItems: WNGeneralNode[];
    selectedValue: string[];


    selectionChanged: (t: IWNMultiSelect, node: WNTreeNode | WNListNode) => void;

    beforeDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => Promise<boolean> | boolean;
    afterDeselect: (t: IWNMultiSelect, node: WNGeneralNode) => void;
    beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;

    max: number;

    search: IWNSearchList;
    clearSearch(): void;
}


type WNGeneralNode = {
    id?: number,
    index?: number,
    text: string,
    value: string,
    element?: HTMLElement,
}
