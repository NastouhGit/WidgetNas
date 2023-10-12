interface IWNList extends IWNComponent {
    dataSource: WNListNode[];
    selectedItem: WNListNode;
    selectedIndex: number;
    selectedValue: string;
    checkedItems: WNListNode[];
    checkedValues: string[];

    checkbox: boolean;

    beforeClick: (t: IWNList, node: WNListNode, e: MouseEvent) => boolean;
    afterClick: (t: IWNList, node: WNListNode, e: MouseEvent) => void;
    selectionChanged: (t: IWNList, node: WNListNode) => void;

    select(node: WNListNode): void;

    findByText(text: string, contains?: boolean, select?: boolean): WNListNode[];
    findByValue(value: string, select?: boolean): WNListNode;
    findByTextOrValue(text: string, contains?: boolean, select?: boolean): WNListNode[];
    filterByText(text: string, contains?: boolean): void;


    //DataSource Managment
    addToDataSource(text: string, link: string, value: string, image: string): WNListNode;
    removeFromDataSource(node: WNListNode): boolean;
    updateNodeElement(node: WNListNode): void;

    setDataSourceByItem(dataSource: any[], displayFieldName: string, valueFieldName: string, linkFieldName: string, imageFieldName: string, append?: boolean): void;
    setDataSource(dataSource: WNListNode[], append?: boolean): void;

    orderDataSourceByText(desc?: boolean): void;
    orderDataSourceByValue(desc?: boolean): void;


    
    checkedClear():void;
    checkedAll(): void;
    checkedInvert(): void;
}

type WNListNode = {
    id: number,
    index:number,
    text: string,
    html: string,
    link: string,
    value: string,
    image: string,
    element: HTMLElement,
}