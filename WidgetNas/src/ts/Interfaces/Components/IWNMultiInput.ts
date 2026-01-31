interface IWNMultiInput extends IWNComponent {
    labels: WNDictionary
    inputs: HTMLElement[];
    values: WNDictionary | string;
    classes: WNDictionary;
    default: string;

    clear();
    refresh();
    toggle();
    addItem(key: string, label: string, classes: string, refresh: boolean);
}

