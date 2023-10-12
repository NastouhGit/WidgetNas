class WNTreeTable implements IWNTreeTable {
    public readonly nameType: string = 'WNTreeTable';
    public element: HTMLUListElement;

    public tree: IWNTree;
    public table: IWNTable;

    public selectionChanged: (t: IWNTree, node: WNTreeNode) => void;
    public tableSelectionChanged: (t: IWNTable, oldNode: WNTableNode, newNode: WNTableNode) => void;

    //private
    //private lastClickID = '';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLUListElement;
            this.Init();
        }
    }
    private Init() {
        let tree = this.element.querySelector('.tree') as HTMLElement;
        if (tree) {
            this.tree = new WNTree(tree);
            this.tree.selectionChanged = (t, n) => this.selectionChanged?.(t, n);
        }
        let table = this.element.querySelector('table') as HTMLElement;
        if (table) {
            this.table = new WNTable(table);
            this.table.selectionChanged = (t, oldNode, newNode) => this.tableSelectionChanged?.(t, oldNode, newNode);
        }


        //assign events
        if (this.element.hasAttribute('onselectionchanged')) {
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't,n');
        }
        if (this.element.hasAttribute('ontableselectionchanged')) {
            this.tableSelectionChanged = WNGenerateFunction(this.element.getAttribute('ontableselectionchanged'), 't,oldNode,newNode');
        }
        
    }
}