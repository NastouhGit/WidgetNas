interface IWNFilelist extends IWNComponent{
    mode: string;
    url: string;
    multiSelect: boolean;

    selectionChanged: (t: IWNFilelist) => {};
    dblClick: (t: IWNFilelist) => {};


    selectedItems: { path, files };
    selectedFiles: string[]; 
    selectedFolder: string;
}
