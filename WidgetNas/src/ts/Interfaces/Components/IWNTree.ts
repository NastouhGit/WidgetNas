interface IWNTree extends IWNComponent {
    dataSource: WNTreeNode[];
    selectedItem: WNTreeNode;

    checkedItems: WNTreeNode[];
    checkedValues: string[];
    checkedAllValues: string[];
    checkbox: boolean;
    checkboxclass: string;
    checkboxautochild: boolean;

    beforeClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    afterClick: (t: IWNTree, node: WNTreeNode, e: MouseEvent) => void;
    selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    beforeCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    afterCollapsed: (t: IWNTree, node: WNTreeNode) => void;
    beforeExpand: (t: IWNTree, node: WNTreeNode) => void;
    afterExpand: (t: IWNTree, node: WNTreeNode) => void;
    beforeToggle: (t: IWNTree, node: WNTreeNode) => void;
    afterToggle: (t: IWNTree, node: WNTreeNode) => void;
    checkChanged: (t: IWNTree, node: WNTreeNode) => void;

    select(node: WNTreeNode):void;
    toggle(node: WNTreeNode): void;
    collapse(node: WNTreeNode): void;
    collapseWithChild(node: WNTreeNode): void;
    collapsedAll(): void;

    expand(node: WNTreeNode): void;
    expandToParent(node: WNTreeNode): void;
    expandChilds(node: WNTreeNode): void;
    expandAll(): void;

    findByText(text: string, contains?: boolean, select?: boolean): WNTreeNode[];
    findByValue(value: string, select?: boolean): WNTreeNode;
    findByTextOrValue(text: string, contains?: boolean, select?: boolean): WNTreeNode[];
    filterByText(text: string, contains?: boolean): void;

    //DataSource Managment
    addToDataSource(parent: WNTreeNode, text: string, link: string, value: string, image: string): WNTreeNode;
    removeFromDataSource(node: WNTreeNode): boolean;
    updateNodeElement(node: WNTreeNode): void;
    setDataSourceByParentId(parentNode: WNTreeNode, dataSource: any[], idFieldName: string, parentFieldName: string, parentRootValue: any, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    setDataSourceByItem(parentNode: WNTreeNode, dataSource: any[], itemFieldName: string, displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    setDataSource(parentNode: WNTreeNode, dataSource: WNTreeNode[], append?: boolean): void;

    checkedClear(): void;
    checkedAll(): void;
    checkedInvert(): void;
    checkedHide(value:string[]): void;
}

type WNTreeNode = {
    id:number,
    text: string,
    html: string,
    link: string,
    value: string,
    image: string,
    liElement: HTMLLIElement,
    element: HTMLElement,
    parentNode: WNTreeNode,
    children: WNTreeNode[]
}