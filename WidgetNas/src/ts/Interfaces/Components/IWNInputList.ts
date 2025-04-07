interface IWNInputList extends IWNComponent {

    value: string[];

    beforeAdd: (t: IWNInputList,v:string) => Promise<boolean> | boolean;
    afterAdd: (t: IWNInputList, v: string) => void;

    beforeSave: (t: IWNInputList, v: string) => Promise<boolean> | boolean;
    afterSave: (t: IWNInputList, v: string) => void;

    beforeRemove: (t: IWNInputList, v: string) => Promise<boolean> | boolean;
    afterRemove: (t: IWNInputList, v: string) => void;

    beforeOrder: (t: IWNInputList, v: string) => Promise<boolean> | boolean;
    afterOrder: (t: IWNInputList, v: string) => void;

    max: number;
    list: IWNList;
}

