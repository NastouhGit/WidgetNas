interface IWNTab extends IWNComponent {
    items: { head: HTMLElement, body: HTMLElement }[];
    selectedIndex: number;
    beforeSelected: (t, index) => boolean;
    selectionChanged: (t) => void;
    onTabAdded: (t, index) => void;
    addTab(caption: string, target: string);
    removeTab(index: number);
}
