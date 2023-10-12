interface IWNTreeTable extends IWNComponent {
    tree: IWNTree;
    table: IWNTable;

    selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    tableSelectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;
}

