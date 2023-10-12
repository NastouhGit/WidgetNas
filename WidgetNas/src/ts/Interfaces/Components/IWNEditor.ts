interface IWNEditor extends IWNComponent {
    change: (t) => void;

    defaultFonts: string ;
    defaultFontsize: string ;
    defaultTags: string ;
    dfaultcolorPicker: string[];
    paragraphSeparator: string;
    html: string;
    readonly text: string;

    showSource();
    switchDarkMode();
    switchFullScreen();
}