interface IWNMultiInputPhone extends IWNComponent {

    value: string[];
    itemClick: (t: IWNMultiInputPhone, node: WNPhoneNode) => void;
    max: number;

}


type WNPhoneNode = {
    caption: string,
    country: string,
    area: string,
    number: string,
    extension: string,
    fullNumber: string
}
