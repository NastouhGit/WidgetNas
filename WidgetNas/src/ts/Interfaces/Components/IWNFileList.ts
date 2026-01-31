interface IWNFileList extends IWNComponent{
    mode: string;
    url: string;
    multiSelect: boolean;

    selectionChanged: (t: IWNFileList) => {};
    dblClick: (t: IWNFileList) => {};


    selectedItems: { path, files };
    selectedFiles: string[]; 
    selectedFolder: string;
}
