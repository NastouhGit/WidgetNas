interface IWNSelect extends IWNComponent {
    value: string;
    list: IWNList;

    selectionChanged: (t: IWNSelect) => void;
    addToDataSource(text: string, value: string): void;
    removeFromDataSource(index: number): boolean;
    setDataSource(dataSource: HTMLOptionElement[], append?: boolean): void;
}