interface IWNImageEditor extends IWNComponent {
    scale: number;
    rotate: number;
    flip: number;
    filter: string;
    mask: string;
    x: number;
    y: number;
    load(src: string): void;
    anchorStart(): void;
    anchorStop(): void;
    crop(): void;
    stopCamera(): void;
    startCamera(id?: string): void;
    save(): string;
}