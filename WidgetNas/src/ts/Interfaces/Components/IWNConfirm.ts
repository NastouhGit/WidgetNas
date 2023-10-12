interface IWNConfirm extends IWNComponent {
    title: string;
    body: string | HTMLElement;
    buttons: { caption: string, class?: string, click?: (t: IWNConfirm) => Promise<boolean> }[];
    modalClass: string;
    headClass: string;
    bodyClass: string;
    footerClass: string;
    showClass: string;
    closeButton: boolean;
    values: { [id: string]: any; };
    parentElement: HTMLElement;
    show(): void;
}