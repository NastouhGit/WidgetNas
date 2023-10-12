interface IWNTab extends IWNComponent {
    selectedIndex: number;
    beforeSelected: (t, index) => boolean;
    selectionChanged: (t) => void;
}
