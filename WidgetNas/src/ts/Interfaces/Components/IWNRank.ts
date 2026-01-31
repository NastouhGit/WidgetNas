interface IWNRank extends IWNComponent {
    value: number;
    max: number;

    beforeChange: (t: IWNRank, value: number) => boolean;
    click: (t: IWNRank, e: MouseEvent) => void;
}

