
interface IWNTable extends IWNComponent {
    element: HTMLTableElement;

    cols: WNTableCol[];
    dataSource: WNTableNode[];
    currentPage: number;

    beforeFilter: (t: IWNTable) => boolean;
    afterFilter: (t: IWNTable) => void;
    beforeSort: (t: IWNTable) => boolean;
    afterSort: (t: IWNTable) => void;
    beforeSelected: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => boolean;
    selectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;
    beforePageChange: (t: IWNTable, oldpage: number, newpage: number) => boolean;
    afterPageChange: (t: IWNTable, oldpage: number, newpage: number) => void;
    command: (t: IWNTable, command:string,node: WNTableNode) => void;

    selectedItem: WNTableNode;
    groups: string[];

    //DataSource Managment
    addToDataSource(r: any): WNTableNode;
    removeFromDataSource(r: WNTableNode): boolean;
    updateNodeElement(r: WNTableNode): void;
    setDataSource(dataSource: any, append?: boolean): void;

}
type WNTableNode = {
    privateId: number,
    rowElement: HTMLTableRowElement,
    fields: { [id: string]: WNTableFieldValue }
}
type WNTableCol = {
    index: number,
    caption: string,
    field: string,
    datatype: string,
    sortable: WNTableTextValue,
    filterable: WNTableTextValue,
    format: string,
    class: string,
    elementInHeader: HTMLTableCellElement
    elementFilter: HTMLInputElement
    commandElement: HTMLButtonElement[],
    condition: (t: HTMLTableCellElement, node: WNTableNode, value: any, text: string) => void,
    aggregate:string
};
enum WNTableTextValue {
    none = '',
    text = 'text',
    value = 'value'

}
type WNTableFieldValue= {
    text: string,
    value: any
}