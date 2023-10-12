interface IWNSearchList extends IWNComponent {
    beforeFilterChanged: (t: IWNSearchList, text: string) => Promise<boolean> | boolean;
    afterFilterChanged: (t: IWNSearchList, text: string) => void;
    selectionChanged: (t: IWNTree | IWNList, node: WNTreeNode | WNListNode) => void;

    listElement: HTMLElement;
    list: IWNList | IWNTree;
    minLength: number;

    displayElement: HTMLElement;
    valueElement: HTMLElement;

}

