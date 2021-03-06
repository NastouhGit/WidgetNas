class wneditor {
    element: HTMLFormElement;

    change: any;

    DefaultFonts: string = 'Default On Page, Arial, Tahoma, Verdana, Helvetica, Trebuchet MS, Times New Roman, Georgia, Garamond, Courier New, Brush Script MT';
    DefaultFontSize: string = 'X Small:4px, Small:8px, Medium:12px, Normal:16px, Large:20px, X Large:24px,2X Large:32px,3X Large:48px';
    DefaultTags: string = 'Paragraph:p,Heading 1:h1,Heading 2:h2,Heading 3:h3,Heading 4:h4,Heading 5:h5,Heading 6:h6,Preformat:pre';
    DefaultColorPicker: string[] = [
        '#000000', '#333333', '#555555', '#777777', '#999999', '#AAAAAA', '#CCCCCC', '#DDDDDD', '#EEEEEE', '#FFFFFF',
        '#996666', '#B24D4D', '#CC3333', '#E61919', '#FF0000', '#FF2A00', '#E63B19', '#CC4C33', '#B25E4D', '#996F66',
        '#997766', '#B26F4D', '#CC6633', '#E65D19', '#FF5500', '#FF8000', '#E68019', '#CC8033', '#B2804D', '#998066',
        '#998866', '#B2904D', '#CC9933', '#E6A119', '#FFAA00', '#FFDD33', '#EBCF47', '#D6C25C', '#C2B470', '#ADA785',
        '#999966', '#B2B24D', '#CCCC33', '#E5E619', '#FFFF00', '#D4FF00', '#C3E619', '#B2CC33', '#A1B24D', '#909966',
        '#6D7A52', '#748F3D', '#7AA329', '#81B814', '#88CC00', '#80FF00', '#80E619', '#80CC33', '#80B24D', '#809966',
        '#669988', '#4DB290', '#33CC99', '#19E6A1', '#00FFAA', '#00FFD5', '#19E6C4', '#33CCB3', '#4DB2A1', '#669990',
        '#669999', '#4DB2B2', '#33CCCC', '#19E5E6', '#00FFFF', '#00D4FF', '#19C3E6', '#33B2CC', '#4DA1B2', '#669099',
        '#668899', '#4D90B2', '#3399CC', '#19A1E6', '#00AAFF', '#0066CC', '#1466B8', '#2966A3', '#3D668F', '#52667A',
        '#6E6699', '#5D4DB2', '#4C33CC', '#3B19E6', '#2A00FF', '#7733FF', '#7E47EB', '#855CD6', '#8B70C2', '#9285AD',
        '#9985AD', '#9970C2', '#995CD6', '#9947EB', '#9933FF', '#BB33FF', '#B447EB', '#AD5CD6', '#A770C2', '#A085AD',
        '#906699', '#A14DB2', '#B233CC', '#C319E6', '#D400FF', '#FF00FF', '#E619E5', '#CC33CC', '#B24DB2', '#996699',
        '#996690', '#B24DA1', '#CC33B2', '#E619C3', '#FF00D4', '#FF33BB', '#EB47B4', '#D65CAD', '#C270A7', '#AD85A0',
        '#AD8592', '#C2708B', '#D65C85', '#EB477E', '#FF3377', '#FF002B', '#E6193C', '#CC334C', '#B24D5E', '#99666F'
    ];
    ParagraphSeparator = 'p';
    private FontList: string[];
    private FontSize: string[];
    private TagList: string[];

    private ValueElement: HTMLInputElement;
    private OldHtml: string;

    private _content: HTMLDivElement;
    private _editorType = 'standard'; //simple standard full
    private _editortoolbar: HTMLDivElement;
    private _toolbar: HTMLDivElement;

    private _colorpicker: HTMLDivElement;
    private _colorpickerInput: HTMLInputElement;

    private _insertLink: HTMLDivElement;
    private _insertLinkUrl: HTMLInputElement;
    private _insertLinkTarget: HTMLSelectElement;
    private _insertLinkTitle: HTMLInputElement;

    private _insertImage: HTMLDivElement;
    private _insertImageUrl: HTMLInputElement;
    private _insertImageAlt: HTMLInputElement;
    private _insertImageWidth: HTMLInputElement;
    private _insertImageHeight: HTMLInputElement;
    private _insertImageBorderWidth: HTMLInputElement;
    private _insertImageBorderStyle: HTMLSelectElement;
    private _insertImageClass: HTMLInputElement;

    private _insertMedia: HTMLDivElement;
    private _insertMediaType: HTMLSelectElement;
    private _insertMediaUrl: HTMLInputElement;
    private _insertMediaWidth: HTMLInputElement;
    private _insertMediaHeight: HTMLInputElement;
    private _insertMediaControls: HTMLInputElement;
    private _insertMediaMute: HTMLInputElement;
    private _insertMediaAutoPlay: HTMLInputElement;
    private _insertMediaBorderWidth: HTMLInputElement;
    private _insertMediaBorderStyle: HTMLSelectElement;
    private _insertMediaClass: HTMLInputElement;

    private _insertIFrame: HTMLDivElement;
    private _insertIFrameUrl: HTMLInputElement;
    private _insertIFrameTitle: HTMLInputElement;
    private _insertIFrameWidth: HTMLInputElement;
    private _insertIFrameHeight: HTMLInputElement;
    private _insertIFrameBorderWidth: HTMLInputElement;
    private _insertIFrameBorderStyle: HTMLSelectElement;
    private _insertIFrameClass: HTMLInputElement;

    private _editor_undo: HTMLButtonElement;
    private _editor_redo: HTMLButtonElement;

    private _editor_bold: HTMLInputElement;
    private _editor_italic: HTMLInputElement;
    private _editor_underline: HTMLInputElement;
    private _editor_strikethrough: HTMLInputElement;

    private _editor_font: HTMLSelectElement;
    private _editor_fontsize: HTMLSelectElement;

    private _editor_subscript: HTMLInputElement;
    private _editor_superscript: HTMLInputElement;

    private _editor_elementtag: HTMLSelectElement;

    private _editor_alignleft: HTMLInputElement;
    private _editor_aligncenter: HTMLInputElement;
    private _editor_alignright: HTMLInputElement;
    private _editor_alignjustify: HTMLInputElement;
    private _editor_ltr: HTMLInputElement;
    private _editor_rtl: HTMLInputElement;

    private _editor_indent: HTMLButtonElement;
    private _editor_outdent: HTMLButtonElement;
    private _editor_numberlist: HTMLButtonElement;
    private _editor_buletlist: HTMLButtonElement;

    private _editor_textcolor: HTMLButtonElement;
    private _editor_background: HTMLButtonElement;
    private _editor_fill: HTMLButtonElement;
    private _editor_eraseformat: HTMLButtonElement;

    private _editor_link: HTMLButtonElement;
    private _editor_unlink: HTMLButtonElement;
    private _editor_image: HTMLButtonElement;
    private _editor_media: HTMLButtonElement;
    private _editor_iframe: HTMLButtonElement;
    private _editor_hr: HTMLButtonElement;

    private _editor_source: HTMLButtonElement;
    private _editor_source_textarea: HTMLTextAreaElement;
    private _editor_source_mode: string = 'html';

    private _lang: any;
    rgb2hex(rgb: string): string {
        let ret = '';
        rgb = rgb.toLowerCase();
        if (rgb.includes('rgba'))
            ret = `#${rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
        else if (rgb.includes('rgb'))
            ret = `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
        return ret;
    }

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Init();
        }
    }
    private Init() {
        this._lang = WNlang[WNDefaultLanguage];

        if (!this.element.classList.contains('editor'))
            this.element.classList.add('editor');

        if (this.element.hasAttribute('DefaultColorPicker'))
            this.DefaultColorPicker = WNparseString(this.element.getAttribute('DefaultColorPicker')).split(',');
        if (this.element.hasAttribute('DefaultFonts'))
            this.DefaultFonts = WNparseString(this.element.getAttribute('DefaultFonts'));
        if (this.element.hasAttribute('DefaultFontSize'))
            this.DefaultFontSize = WNparseString(this.element.getAttribute('DefaultFontSize'));
        if (this.element.hasAttribute('DefaultTags'))
            this.DefaultTags = WNparseString(this.element.getAttribute('DefaultTags'));
        if (this.element.hasAttribute('ParagraphSeparator'))
            this.ParagraphSeparator = WNparseString(this.element.getAttribute('ParagraphSeparator'));


        this._content = this.element.querySelector('.editor-content');
        this._editorType = WNparseString(this.element.getAttribute("mode"), "standard");
        this._editortoolbar = this.element.querySelector('.editor-toolbar');
        this._toolbar = this.element.querySelector('.toolbar');

        this._editor_undo = this.element.querySelector('.editor-undo');
        this._editor_redo = this.element.querySelector('.editor-redo');

        this._editor_bold = this.element.querySelector('.editor-bold');
        this._editor_italic = this.element.querySelector('.editor-italic');
        this._editor_underline = this.element.querySelector('.editor-underline');
        this._editor_strikethrough = this.element.querySelector('.editor-strikethrough');

        this._editor_font = this.element.querySelector('.editor-font');
        this._editor_fontsize = this.element.querySelector('.editor-fontsize');

        this._editor_subscript = this.element.querySelector('.editor-subscript');
        this._editor_superscript = this.element.querySelector('.editor-superscript');

        this._editor_elementtag = this.element.querySelector('.editor-elementtag');

        this._editor_alignleft = this.element.querySelector('.editor-alignleft');
        this._editor_aligncenter = this.element.querySelector('.editor-aligncenter');
        this._editor_alignright = this.element.querySelector('.editor-alignright');
        this._editor_alignjustify = this.element.querySelector('.editor-alignjustify');
        this._editor_ltr = this.element.querySelector('.editor-ltr');
        this._editor_rtl = this.element.querySelector('.editor-rtl');

        this._editor_indent = this.element.querySelector('.editor-indent');
        this._editor_outdent = this.element.querySelector('.editor-outdent');
        this._editor_numberlist = this.element.querySelector('.editor-numberlist');
        this._editor_buletlist = this.element.querySelector('.editor-buletlist');

        this._editor_textcolor = this.element.querySelector('.editor-textcolor');
        this._editor_background = this.element.querySelector('.editor-background');
        this._editor_fill = this.element.querySelector('.editor-fill');
        this._editor_eraseformat = this.element.querySelector('.editor-eraseformat');

        this._editor_link = this.element.querySelector('.editor-link');
        this._editor_unlink = this.element.querySelector('.editor-unlink');
        this._editor_image = this.element.querySelector('.editor-image');
        this._editor_media = this.element.querySelector('.editor-media');
        this._editor_iframe = this.element.querySelector('.editor-iframe');
        this._editor_hr = this.element.querySelector('.editor-hr');

        this._editor_source = this.element.querySelector('.editor-source');

        this.AddToolBar();
        this.AddContent();

        this.AssignEvents();
        this._content.contentEditable = 'true';
        document.execCommand("defaultParagraphSeparator", false, this.ParagraphSeparator);

        if (this.element.hasAttribute('value-id')) {
            this.ValueElement = document.getElementById(WNparseString(this.element.getAttribute('value-id'), '')) as HTMLInputElement;
            this.Html = this.ValueElement?.value;
        }
        else
            this.Html = '';

        if (this.element.hasAttribute('onchange'))
            this.change = WNGenerateFunction(this.element.getAttribute('onchange'),'t');
        this.OldHtml = this.Html;

    }
    AddToolBar() {
        if (this._editorType == 'simple')
            return;
        if (this._editortoolbar == undefined || this._editortoolbar == null) {
            this._editortoolbar = document.createElement('div') as HTMLDivElement;
            this._editortoolbar.className = 'editor-toolbar';
            this.element.appendChild(this._editortoolbar);
        }
        if (this._toolbar == undefined || this._editortoolbar == null) {
            this._toolbar = document.createElement('div') as HTMLDivElement;
            this._toolbar.className = 'toolbar';
            this._editortoolbar.appendChild(this._toolbar);
        }

        //Undo Redo
        if (this._editor_undo == null && this._editor_redo == null
            && (this._editorType == 'full')
        ) {
            this._editor_undo = this.CreateElement('button', 'button editor-undo') as HTMLButtonElement;
            this._editor_redo = this.CreateElement('button', 'button editor-redo') as HTMLButtonElement;

            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_undo);
            grp.appendChild(this._editor_redo);
            this._toolbar.appendChild(grp);
        }
        //Bold italic underline strikethrough
        if (this._editor_bold == null && this._editor_italic == null && this._editor_underline == null && this._editor_strikethrough == null
            && (this._editorType == 'full' || this._editorType == 'standard')
        ) {
            this._editor_bold = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_italic = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_underline = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_strikethrough = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;

            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_bold);
            grp.appendChild(this.CreateElement('label', 'button editor-bold'));
            grp.appendChild(this._editor_italic);
            grp.appendChild(this.CreateElement('label', 'button editor-italic'));
            grp.appendChild(this._editor_underline);
            grp.appendChild(this.CreateElement('label', 'button editor-underline'));
            grp.appendChild(this._editor_strikethrough);
            grp.appendChild(this.CreateElement('label', 'button editor-strikethrough'));
            this._toolbar.appendChild(grp);
        }
        //font fontsize subscript superscript
        if (this._editor_font == null && this._editor_fontsize == null && this._editor_subscript == null && this._editor_superscript == null
            && (this._editorType == 'full')
        ) {
            this._editor_font = this.CreateElement('select', '.editor-font') as HTMLSelectElement;
            this.FontList = WNparseString(this.element.getAttribute('default-fonts'), this.DefaultFonts).split(',');
            for (var i = 0; i < this.FontList.length; i++) {
                this.FontList[i] = this.FontList[i].trim();
                let itm = document.createElement('option') as HTMLOptionElement;
                itm.text = this.FontList[i];
                itm.value = this.FontList[i];
                this._editor_font.appendChild(itm);
            }

            this._editor_fontsize = this.CreateElement('select', '.editor-fontsize') as HTMLSelectElement;
            this.FontSize = WNparseString(this.element.getAttribute('default-fonts'), this.DefaultFontSize).split(',');

            this.FontSize.forEach(x => {
                let xx = x.split(':');
                let itm = document.createElement('option') as HTMLOptionElement;
                itm.text = xx[0].trim();
                itm.value = xx[1].trim();
                this._editor_fontsize.appendChild(itm);
            });

            this._editor_subscript = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_superscript = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;

            this._editor_elementtag = this.CreateElement('select', '.editor-elementtag') as HTMLSelectElement;
            this.TagList = WNparseString(this.element.getAttribute('default-tags'), this.DefaultTags).split(',');
            this.TagList.forEach(x => {
                let xx = x.split(':');
                let itm = document.createElement('option') as HTMLOptionElement;
                itm.text = xx[0].trim();
                itm.value = xx[1].trim();
                this._editor_elementtag.appendChild(itm);
            });

            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_font);
            grp.appendChild(this._editor_fontsize);
            grp.appendChild(this._editor_subscript);
            grp.appendChild(this.CreateElement('label', 'button editor-subscript'));
            grp.appendChild(this._editor_superscript);
            grp.appendChild(this.CreateElement('label', 'button editor-superscript'));
            grp.appendChild(this._editor_elementtag);
            this._toolbar.appendChild(grp);
        }

        //aligment
        if (this._editor_alignleft == null && this._editor_aligncenter == null && this._editor_alignright == null &&
            this._editor_alignjustify == null && this._editor_ltr == null && this._editor_rtl == null
            && (this._editorType == 'full' || this._editorType == 'standard')
        ) {
            this._editor_alignleft = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_aligncenter = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_alignright = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_alignjustify = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_ltr = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;
            this._editor_rtl = this.CreateElement('input', '', 'checkbox') as HTMLInputElement;

            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_alignleft);
            grp.appendChild(this.CreateElement('label', 'button editor-alignleft'));
            grp.appendChild(this._editor_aligncenter);
            grp.appendChild(this.CreateElement('label', 'button editor-aligncenter'));
            grp.appendChild(this._editor_alignright);
            grp.appendChild(this.CreateElement('label', 'button editor-alignright'));
            grp.appendChild(this._editor_alignjustify);
            grp.appendChild(this.CreateElement('label', 'button editor-alignjustify'));

            grp.appendChild(this.CreateElement('div', 'separator'));

            grp.appendChild(this._editor_ltr);
            grp.appendChild(this.CreateElement('label', 'button editor-ltr'));
            grp.appendChild(this._editor_rtl);
            grp.appendChild(this.CreateElement('label', 'button editor-rtl'));
            this._toolbar.appendChild(grp);
        }

        //indent outdent numberlist buletlist
        if (this._editor_indent == null && this._editor_outdent == null && this._editor_numberlist == null && this._editor_buletlist == null
            && (this._editorType == 'full')
        ) {
            this._editor_indent = this.CreateElement('button', 'editor-indent') as HTMLButtonElement;
            this._editor_outdent = this.CreateElement('button', 'editor-outdent') as HTMLButtonElement;
            this._editor_numberlist = this.CreateElement('button', 'editor-numberlist') as HTMLButtonElement;
            this._editor_buletlist = this.CreateElement('button', 'editor-buletlist') as HTMLButtonElement;

            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_indent);
            grp.appendChild(this._editor_outdent);
            grp.appendChild(this.CreateElement('div', 'separator'));
            grp.appendChild(this._editor_numberlist);
            grp.appendChild(this._editor_buletlist);
            this._toolbar.appendChild(grp);
        }
        //Colors
        if (this._editor_textcolor == null && this._editor_background == null && this._editor_fill == null && this._editor_eraseformat == null
            && (this._editorType == 'full')
        ) {
            this._editor_textcolor = this.CreateElement('button', 'dropdown-toggle editor-textcolor') as HTMLButtonElement;
            this._editor_background = this.CreateElement('button', 'dropdown-toggle editor-background') as HTMLButtonElement;
            this._editor_fill = this.CreateElement('button', 'dropdown-toggle editor-fill') as HTMLButtonElement;
            this._editor_eraseformat = this.CreateElement('button', 'editor-eraseformat') as HTMLButtonElement;
            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_textcolor);
            grp.appendChild(this._editor_background);
            grp.appendChild(this._editor_fill);
            grp.appendChild(this.CreateElement('div', 'separator'));
            grp.appendChild(this._editor_eraseformat);
            this._toolbar.appendChild(grp);
        }
        //Insert
        if (this._editor_link == null && this._editor_unlink == null && this._editor_image == null && this._editor_media == null && this._editor_iframe == null && this._editor_hr == null
            && (this._editorType == 'full')
        ) {
            this._editor_link = this.CreateElement('button', 'dropdown-toggle editor-link') as HTMLButtonElement;
            this._editor_unlink = this.CreateElement('button', 'editor-unlink') as HTMLButtonElement;
            this._editor_image = this.CreateElement('button', 'dropdown-toggle editor-image') as HTMLButtonElement;
            this._editor_media = this.CreateElement('button', 'dropdown-toggle editor-media') as HTMLButtonElement;
            this._editor_iframe = this.CreateElement('button', 'dropdown-toggle editor-iframe') as HTMLButtonElement;
            this._editor_hr = this.CreateElement('button', 'editor-hr') as HTMLButtonElement;

            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_link);
            grp.appendChild(this._editor_unlink);
            grp.appendChild(this._editor_image);
            grp.appendChild(this._editor_media);
            grp.appendChild(this._editor_iframe);
            grp.appendChild(this._editor_hr);
            this._toolbar.appendChild(grp);
        }
        //Source
        if (this._editor_source == null
            && (this._editorType == 'full')
        ) {
            this._editor_source = this.CreateElement('button', 'editor-source') as HTMLButtonElement;

            let grp = this.CreateElement('div', 'button-group') as HTMLDivElement;
            grp.appendChild(this._editor_source);
            this._toolbar.appendChild(grp);
        }
    }
    AddContent() {
        if (this._content != null)
            return;
        let editorbody = document.createElement('div') as HTMLDivElement;
        editorbody.className = 'editor-body';

        this._content = document.createElement('div') as HTMLDivElement;
        this._content.className = 'editor-content';


        editorbody.appendChild(this._content);

        editorbody.addEventListener("click", () => {
            this._content.focus();
        })
        editorbody.addEventListener('paste', (event) => {
            let paste = (event.clipboardData).getData('text');
            paste = this.cleanWordPaste(paste);

            const selection = window.getSelection();
            if (!selection.rangeCount) return false;
            selection.deleteFromDocument();
            selection.getRangeAt(0).insertNode(document.createElement(paste));

            event.preventDefault();
            return true;
        });

        this._editor_source_textarea = document.createElement('textarea');
        this._editor_source_textarea.className = 'editor-source';
        editorbody.appendChild(this._editor_source_textarea);

        this.element.appendChild(editorbody);
    }
    CreateElement(eltype: string, classname: string, type: string = null): HTMLElement {
        let r = document.createElement(eltype);
        r.className = classname;
        if (type != null)
            (<HTMLInputElement>r).type = type;
        return r;
    }
    AssignEvents() {
        this._editor_undo?.addEventListener('click', () => { this.execCommand('undo'); });
        this._editor_redo?.addEventListener('click', () => { this.execCommand('redo'); });

        this._editor_bold?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('font-weight', 'bold', true); });
        this._editor_italic?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('font-style', 'italic', true); });
        this._editor_underline?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('text-decoration', 'underline', true); });
        this._editor_strikethrough?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('text-decoration', 'line-through', true); });

        this._editor_font?.addEventListener("change", (e) => {
            var value = (<HTMLSelectElement>e.target).value;
            if (value == this.FontList[0])
                this.SetSelectionStyle('font-family', '', false);
            else {
                this.SetSelectionStyle('font-family', value, false);
            }

        });
        this._editor_fontsize?.addEventListener("change", (e) => {
            var value = (<HTMLSelectElement>e.target).value;
            if (value == this.FontList[0])
                this.SetSelectionStyle('font-size', '', false);
            else
                this.SetSelectionStyle('font-size', value, false);
        });
        this._editor_subscript?.nextSibling.addEventListener('click', () => {
            if (this._editor_subscript.checked)
                this.execCommand('removeFormat');
            else
                this.execCommand('subscript');
        });
        this._editor_superscript?.nextSibling.addEventListener('click', () => { this.execCommand('superscript'); });

        this._editor_elementtag?.addEventListener("change", (e) => {
            this.SetSelectionTag((<HTMLSelectElement>e.target).value);
        });

        this._editor_alignleft?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('text-align', 'start', true, true); });
        this._editor_aligncenter?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('text-align', 'center', true, true); });
        this._editor_alignright?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('text-align', 'end', true, true); });
        this._editor_alignjustify?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('text-align', 'justify', true, true); });
        this._editor_ltr?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('direction', 'ltr', true, true); });
        this._editor_rtl?.nextSibling.addEventListener('click', () => { this.SetSelectionStyle('direction', 'rtl', true, true); });

        this._editor_indent?.addEventListener('click', () => { this.SetSelectionStyle('padding-inline-start', '+1em', false); });
        this._editor_outdent?.addEventListener('click', () => { this.SetSelectionStyle('padding-inline-start', '-1em', false); });
        this._editor_numberlist?.addEventListener('click', () => { this.execCommand('insertOrderedList'); });
        this._editor_buletlist?.addEventListener('click', () => { this.execCommand('insertUnorderedList'); });

        this._editor_textcolor?.addEventListener('click', () => { this.ColorPicker(this._editor_textcolor, 'color'); });
        this._editor_background?.addEventListener('click', () => { this.ColorPicker(this._editor_background, 'background-color'); });
        this._editor_fill?.addEventListener('click', () => { this.ColorPicker(this._editor_fill, 'background-color', true); });
        this._editor_eraseformat?.addEventListener('click', () => { this.execCommand('removeFormat'); });

        this._editor_link?.addEventListener('click', () => { this.InsertLink(); });
        this._editor_unlink?.addEventListener('click', () => { document.execCommand("unlink", false, ''); });
        this._editor_image?.addEventListener('click', () => { this.InsertImage(); });
        this._editor_media?.addEventListener('click', () => { this.InsertMedia(); });
        this._editor_iframe?.addEventListener('click', () => { this.InsertIFrame(); });
        this._editor_hr?.addEventListener('click', () => { document.execCommand("insertHTML", false, '<hr/>'); });

        this._editor_source?.addEventListener('click', () => { this.ShowSource(); });

        document.addEventListener("selectionchange", () => {
            // Check if the editor is focussed
            if (this._content === document.activeElement) {
                this.RecheckToolbar();
            }
        });
    }
    RecheckToolbar() {
        if (this._editor_bold != undefined) this._editor_bold.checked = this.getCurrentStyle('font-weight') > '500';
        if (this._editor_italic != undefined) this._editor_italic.checked = this.getCurrentStyle('font-style') == 'italic';
        if (this._editor_underline != undefined) this._editor_underline.checked = this.getCurrentStyle('font-style') == 'underline';
        if (this._editor_strikethrough != undefined) this._editor_strikethrough.checked = this.getCurrentStyle('font-style') == 'line-through';

        if (this._editor_font != undefined) {
            let fontfamily = this.getCurrentStyle('font-family').toString();
            this._editor_font.value = this.FontList.find((e) => e == fontfamily) ?? this.FontList[0];
        }
        if (this._editor_fontsize != undefined) {
            let fontSize = this.getCurrentStyle('font-size').toString();
            this._editor_fontsize.value = (this.FontSize.find((e) => e.includes(fontSize)) ?? this.FontSize[3]).split(':')[1];
        }
        if (this._editor_subscript != undefined) this._editor_subscript.checked = this.isSelectionInTag('sub');
        if (this._editor_superscript != undefined) this._editor_superscript.checked = this.isSelectionInTag('sup');
        if (this._editor_alignleft != undefined) this._editor_alignleft.checked = this.getCurrentStyle('text-align') == 'start';
        if (this._editor_aligncenter != undefined) this._editor_aligncenter.checked = this.getCurrentStyle('text-align') == 'center';
        if (this._editor_alignright != undefined) this._editor_alignright.checked = this.getCurrentStyle('text-align') == 'end';
        if (this._editor_alignjustify != undefined) this._editor_alignjustify.checked = this.getCurrentStyle('text-align') == 'justify';
        if (this._editor_rtl != undefined) this._editor_rtl.checked = this.getCurrentStyle('direction') == 'rtl';
        if (this._editor_ltr != undefined) this._editor_ltr.checked = this.getCurrentStyle('direction') == 'ltr';

        if (this._editor_textcolor != undefined) this._editor_textcolor.style.borderBlockEndColor = this.getCurrentStyle('color')

        if (this._editor_background != undefined) this._editor_background.style.borderBlockEndColor = this.getCurrentStyle('background-color')

        if (this._editor_fill != undefined) this._editor_fill.style.borderBlockEndColor = getComputedStyle(this.getParentTagSelection()).getPropertyValue('background-color');


        if (this._editor_elementtag != undefined) {
            let tagName = this.getParentTagSelection().tagName.toLowerCase();
            this._editor_elementtag.value = (this.TagList.find((e) => e.includes(tagName)) ?? this.TagList[0]).split(':')[1];
        }
        if (this.ValueElement != undefined) this.ValueElement.value = this.Html;
        if (this.change != null && this.OldHtml != this.Html) {
            this.change(this);
            this.OldHtml = this.Html;
        }

    }
    isSelectionInTag(tag: string): boolean {
        tag = tag.toUpperCase();
        let currentNode = window.getSelection().focusNode as HTMLElement;
        while (!currentNode.classList?.contains('editor-content')) {
            if (currentNode.tagName == tag) return true;
            currentNode = currentNode.parentNode as HTMLElement;
        }
        return false;
    }

    execCommand(cmd: string, value: string = null) {
        document.execCommand(cmd, false, value);
    }
    getCurrentStyle(prop: string): string {
        let value = '';
        var element = document.getSelection().focusNode as HTMLElement;
        for (var p = element; p; p = p.parentNode as HTMLElement) {
            if (p.nodeType != 3) {
                var style = window.getComputedStyle(p, null);
                if (style) {
                    value = style.getPropertyValue(prop);
                    break;
                }
            }
        }
        return value;
    }
    getParentTagSelection(): HTMLElement {
        let currentNode = window.getSelection().focusNode as HTMLElement;
        for (var i = 0; i < 2; i++) {
            if (!currentNode?.classList?.contains('editor-content')) {
                if (currentNode.tagName != undefined) return currentNode;
                currentNode = currentNode.parentNode as HTMLElement;
            }
        }
        return null;
    }
    SetSelectionStyle(prop: string, value: string = null, toggle: boolean, getParentTag = false) {
        let signValue = '';
        if (value.startsWith('+') || value.startsWith('-')) {
            signValue = value.substring(0, 1);
            value = value.substring(1);
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                var span = range.commonAncestorContainer as HTMLElement;
                if (getParentTag)
                    span = this.getParentTagSelection();
                else {
                    var rangeText = range.toString();
                    if (span == null || (span.textContent != rangeText && rangeText != '')) {
                        span = document.createElement("span");
                        span.innerText = rangeText;
                        range.deleteContents();
                        range.insertNode(span);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                    else
                        span = span.parentElement;
                }
                if (span.innerHTML != '') {
                    span.childNodes.forEach(x => {
                        if (x.nodeName != '#text')
                            (<HTMLElement>x)?.style.removeProperty(prop);
                    });
                    if (toggle) {
                        if (span.style.getPropertyValue(prop) != value)
                            span.style.setProperty(prop, value);
                        else
                            span.style.setProperty(prop, '');
                    }
                    else {
                        if (signValue == '')
                            span.style.setProperty(prop, value);
                        else {
                            value = WNCalcValue(span.style.getPropertyValue(prop), value, signValue, span, 0, 1000);
                            span.style.setProperty(prop, value);
                        }
                    }

                    this._content.focus();


                }
            }
        }
        this.RecheckToolbar();
    }
    SetSelectionTag(value: string = null): HTMLElement {
        var elem: HTMLElement = undefined;
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                var rangeText = range.toString();
                var parent = null as HTMLElement;
                if (range.startOffset == range.endOffset) {
                    parent = this.getParentTagSelection();
                    rangeText = parent.innerText;
                }
                else {
                    parent = document.createElement("span");
                    parent.innerText = rangeText;
                    range.deleteContents();
                    range.insertNode(parent);
                    sel.removeAllRanges();
                    sel.addRange(range);
                }

                elem = range.commonAncestorContainer as HTMLElement;
                elem = document.createElement(value);
                elem.innerText = rangeText;
                parent.before(elem);
                parent.remove();
                this._content.focus();
            }
        }
        this.RecheckToolbar();
        return elem;
    }
    saveSelection() {
        if (window.getSelection) {
            let sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                var ranges = [];
                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
                    ranges.push(sel.getRangeAt(i));
                }
                return ranges;
            }
        } else if (document.getSelection() && document.createRange()) {
            return document.createRange();
        }
        return null;
    }

    restoreSelection(savedSel) {
        if (savedSel) {
            if (window.getSelection) {
                let sel = window.getSelection();
                sel.removeAllRanges();
                for (var i = 0, len = savedSel.length; i < len; ++i) {
                    sel.addRange(savedSel[i]);
                }
            } else if (document.getSelection() && savedSel.select) {
                savedSel.select();
            }
        }
    }

    cleanWordPaste(str: string): string {
        str = str.replace(/<o:p>\s*<\/o:p>/g, "");
        str = str.replace(/<o:p>.*?<\/o:p>/g, "&nbsp;");
        str = str.replace(/\s*mso-[^:]+:[^;"]+;?/gi, "");
        str = str.replace(/\s*MARGIN: 0cm 0cm 0pt\s*;/gi, "");
        str = str.replace(/\s*MARGIN: 0cm 0cm 0pt\s*"/gi, "\"");
        str = str.replace(/\s*TEXT-INDENT: 0cm\s*;/gi, "");
        str = str.replace(/\s*TEXT-INDENT: 0cm\s*"/gi, "\"");
        str = str.replace(/\s*TEXT-ALIGN: [^\s;]+;?"/gi, "\"");
        str = str.replace(/\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi, "\"");
        str = str.replace(/\s*FONT-VARIANT: [^\s;]+;?"/gi, "\"");
        str = str.replace(/\s*tab-stops:[^;"]*;?/gi, "");
        str = str.replace(/\s*tab-stops:[^"]*/gi, "");
        str = str.replace(/\s*face="[^"]*"/gi, "");
        str = str.replace(/\s*face=[^ >]*/gi, "");
        str = str.replace(/\s*FONT-FAMILY:[^;"]*;?/gi, "");
        str = str.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3");
        str = str.replace(/<(\w[^>]*) style="([^\"]*)"([^>]*)/gi, "<$1$3");
        str = str.replace(/\s*style="\s*"/gi, '');
        str = str.replace(/<SPAN\s*[^>]*>\s*&nbsp;\s*<\/SPAN>/gi, '&nbsp;');
        str = str.replace(/<SPAN\s*[^>]*><\/SPAN>/gi, '');
        str = str.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3");
        str = str.replace(/<SPAN\s*>(.*?)<\/SPAN>/gi, '$1');
        str = str.replace(/<FONT\s*>(.*?)<\/FONT>/gi, '$1');
        str = str.replace(/<\\?\?xml[^>]*>/gi, "");
        str = str.replace(/<\/?\w+:[^>]*>/gi, "");
        str = str.replace(/<H\d>\s*<\/H\d>/gi, '');
        str = str.replace(/<H1([^>]*)>/gi, '');
        str = str.replace(/<H2([^>]*)>/gi, '');
        str = str.replace(/<H3([^>]*)>/gi, '');
        str = str.replace(/<H4([^>]*)>/gi, '');
        str = str.replace(/<H5([^>]*)>/gi, '');
        str = str.replace(/<H6([^>]*)>/gi, '');
        str = str.replace(/<\/H\d>/gi, '<br>'); //remove this to take out breaks where Heading tags were 
        str = str.replace(/<(U|I|STRIKE)>&nbsp;<\/\1>/g, '&nbsp;');
        str = str.replace(/<(B|b)>&nbsp;<\/\b|B>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        //some RegEx code for the picky browsers
        var re = new RegExp("(<P)([^>]*>.*?)(<\/P>)", "gi");
        str = str.replace(re, "<div$2</div>");
        var re2 = new RegExp("(<font|<FONT)([^*>]*>.*?)(<\/FONT>|<\/font>)", "gi");
        str = str.replace(re2, "<div$2</div>");
        str = str.replace(/size|SIZE = ([\d]{1})/g, '');
        str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        str = str.replace(/¬/g, '\u200C');

        return str;
    }
    ColorPicker(parent: HTMLElement, style: string, selectTag: boolean = false) {
        if (this._colorpicker == undefined)
            this.CreateColorPickerObject();
        this._colorPickerStyle = style;
        this._colorPickerselectTag = selectTag;
        this._colorPickerDropDown.element = parent;
        this._colorPickerDropDown.SetPosition();
        this._colorpickerInput.value = this.rgb2hex(this.getCurrentStyle(style));
        this._colorPickerDropDown.Show();
    }
    private _colorPickerStyle = '';
    private _colorPickerselectTag = false;
    private _colorPickerDropDown: wndropdown;
    private _oldSelection: any;
    CreateColorPickerObject() {

        this._colorpicker = document.createElement('div');
        this._colorpicker.classList.add('dropdown');
        this._colorpicker.id = this.element.id + '_colorpicker';
        this._colorpicker.setAttribute('wn-dropdown', this._colorpicker.id);

        let _colorpicker = document.createElement('div');
        _colorpicker.classList.add('colorpicker');

        let colorpickerbody = document.createElement('div');
        colorpickerbody.className = 'colorpicker-body';

        let btnErase = document.createElement('button');
        btnErase.classList.add('editor-eraseformat');
        btnErase.addEventListener('click', () => {
            this.SetSelectionStyle(this._colorPickerStyle, '', false, this._colorPickerselectTag);
            this._colorPickerDropDown.Hide();
        });

        this._colorpickerInput = document.createElement('input');
        this._colorpickerInput.type = 'color';
        this._colorpickerInput.setAttribute('rgba', '');
        this._colorpickerInput.addEventListener('input', () => {
            this.SetSelectionStyle(this._colorPickerStyle, this._colorpickerInput.value, false, this._colorPickerselectTag);
            this._colorPickerDropDown.Hide();
        });

        for (var i = 0; i < this.DefaultColorPicker.length; i++) {
            let btn = document.createElement('button');
            btn.style.backgroundColor = this.DefaultColorPicker[i];
            btn.addEventListener('click', (e) => {
                let btn = <HTMLButtonElement>e.target;
                this._colorpickerInput.value = this.rgb2hex(btn.style.backgroundColor);
                this.SetSelectionStyle(this._colorPickerStyle, this._colorpickerInput.value, false, this._colorPickerselectTag);
            });
            colorpickerbody.appendChild(btn);
        }
        _colorpicker.appendChild(colorpickerbody);

        let colorpickerbody1 = document.createElement('div');
        colorpickerbody1.className = 'colorpicker-body';
        colorpickerbody1.appendChild(btnErase);
        colorpickerbody1.appendChild(this._colorpickerInput);
        _colorpicker.appendChild(colorpickerbody1);
        this._colorpicker.appendChild(_colorpicker);
        this._toolbar.append(this._colorpicker);
        this._colorPickerDropDown = new wndropdown(this._colorpicker);
    }

    private _insertLinkDropDown: wndropdown;
    InsertLink() {
        if (this._insertLink == undefined)
            this.CreateLinkObject();

        let elem = this.getParentTagSelection();

        this._insertLinkUrl.value = '';
        this._insertLinkTitle.value = '';
        this._insertLinkTarget.value = '';

        if (elem.tagName.toLowerCase() == 'a') {
            this._insertLinkUrl.value = (elem as HTMLLinkElement).href;
            this._insertLinkTitle.value = (elem as HTMLLinkElement).title;
            this._insertLinkTarget.value = (elem as HTMLLinkElement).target;
        }
        this._insertLinkDropDown.element = this._editor_link;
        this._insertLinkDropDown.SetPosition();
        this._oldSelection = this.saveSelection();

        this._insertLinkDropDown.Show();
    }
    CreateLinkObject() {

        this._insertLink = document.createElement('div');
        this._insertLink.classList.add('dropdown');
        this._insertLink.id = this.element.id + '_insertlink';
        this._insertLink.setAttribute('wn-dropdown', this._insertLink.id);

        let _insertLink = document.createElement('div');
        _insertLink.classList.add('linkpicker');

        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["editor"]["url"];
        field1.appendChild(urlLabel);
        this._insertLinkUrl = document.createElement('input');
        this._insertLinkUrl.type = "url";
        this._insertLinkUrl.style.direction = 'ltr';
        field1.appendChild(this._insertLinkUrl);
        _insertLink.appendChild(field1);

        let field2 = document.createElement('div');
        let targetLabel = document.createElement('label');
        targetLabel.innerText = this._lang["editor"]["target"];
        field2.appendChild(targetLabel);
        this._insertLinkTarget = document.createElement('select');
        this._insertLinkTarget.style.direction = 'ltr';
        this._insertLinkTarget.innerHTML = "<option></option><option>_blank</option><option>_parent</option><option>_self</option><option>_top</option>";
        field2.appendChild(this._insertLinkTarget);
        _insertLink.appendChild(field2);

        let field3 = document.createElement('div');
        let titleLabel = document.createElement('label');
        titleLabel.innerText = this._lang["editor"]["title"];
        field3.appendChild(titleLabel);
        this._insertLinkTitle = document.createElement('input');
        this._insertLinkTitle.type = "text";
        field3.appendChild(this._insertLinkTitle);
        _insertLink.appendChild(field3);

        let field4 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["editor"]["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertLinkUrl.value != '') {
                document.execCommand("unlink", false, '');
                let link = this.SetSelectionTag("a") as HTMLLinkElement;
                link.href = this._insertLinkUrl.value;
                link.title = this._insertLinkTitle.value;
                link.target = this._insertLinkTarget.value;
                this._insertLinkDropDown.Hide();
            }
        });
        field4.appendChild(insert);
        _insertLink.appendChild(field4);
        this._insertLink.appendChild(_insertLink);
        this._toolbar.append(this._insertLink);
        this._insertLinkDropDown = new wndropdown(this._insertLink);
        this._insertLinkDropDown.CheckOnlyDropDown = true;
    }

    private _insertImageDropDown: wndropdown;
    private _insertImageSelected: HTMLImageElement;
    InsertImage() {
        if (this._insertImage == undefined)
            this.CreateImageObject();

        let elem = this.getParentTagSelection();
        if (elem.tagName.toLowerCase() != 'img') {
            elem = elem.querySelector('img');
        }
        this._insertImageUrl.value = '';
        this._insertImageAlt.value = '';
        this._insertImageWidth.value = '';
        this._insertImageHeight.value = '';
        this._insertImageBorderWidth.value = '';
        this._insertImageBorderStyle.value = 'none';
        this._insertImageClass.value = '';

        if (elem?.tagName.toLowerCase() == 'img') {
            this._insertImageSelected = elem as HTMLImageElement;
            this._insertImageUrl.value = this._insertImageSelected.src;
            this._insertImageAlt.value = this._insertImageSelected.alt;
            this._insertImageWidth.value = this._insertImageSelected.style.width;
            this._insertImageHeight.value = this._insertImageSelected.style.height;
            this._insertImageBorderWidth.value = this._insertImageSelected.style.borderWidth;
            this._insertImageBorderStyle.value = this._insertImageSelected.style.borderStyle;
            this._insertImageClass.value = this._insertImageSelected.className;
        }
        else
            this._insertImageSelected = null;
        this._insertImageDropDown.element = this._editor_image;
        this._insertImageDropDown.SetPosition();
        this._oldSelection = this.saveSelection();

        this._insertImageDropDown.Show();
    }
    CreateImageObject() {

        this._insertImage = document.createElement('div');
        this._insertImage.classList.add('dropdown');
        this._insertImage.id = this.element.id + '_insertImage';
        this._insertImage.setAttribute('wn-dropdown', this._insertImage.id);

        let _insertImage = document.createElement('div');
        _insertImage.classList.add('imagepicker');

        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["editor"]["url"];
        field1.appendChild(urlLabel);
        this._insertImageUrl = document.createElement('input');
        this._insertImageUrl.type = "url";
        this._insertImageUrl.style.direction = 'ltr';
        field1.appendChild(this._insertImageUrl);
        _insertImage.appendChild(field1);

        let field2 = document.createElement('div');
        let altLabel = document.createElement('label');
        altLabel.innerText = this._lang["editor"]["alt"];
        field2.appendChild(altLabel);
        this._insertImageAlt = document.createElement('input');
        this._insertImageAlt.type = "text";
        field2.appendChild(this._insertImageAlt);
        _insertImage.appendChild(field2);

        let field3 = document.createElement('div');
        field3.className = "row";
        let field3ig1 = document.createElement('ig');
        field3ig1.className = "col-6";
        let widthLabel = document.createElement('label');
        widthLabel.innerText = this._lang["editor"]["width"];
        field3ig1.appendChild(widthLabel);
        this._insertImageWidth = document.createElement('input');
        this._insertImageWidth.style.direction = 'ltr';
        field3ig1.appendChild(this._insertImageWidth);
        field3.appendChild(field3ig1);
        let field3ig2 = document.createElement('ig');
        field3ig2.className = "col-6";
        let heightLabel = document.createElement('label');
        heightLabel.innerText = this._lang["editor"]["height"];
        field3ig2.appendChild(heightLabel);
        this._insertImageHeight = document.createElement('input');
        this._insertImageHeight.style.direction = 'ltr';
        field3ig2.appendChild(this._insertImageHeight);
        field3.appendChild(field3ig2);
        _insertImage.appendChild(field3);

        let field4 = document.createElement('div');
        field4.className = "row";
        let field4ig1 = document.createElement('ig');
        field4ig1.className = "col-6";
        let borderwidthLabel = document.createElement('label');
        borderwidthLabel.innerText = this._lang["editor"]["borderwidth"];
        field4ig1.appendChild(borderwidthLabel);
        this._insertImageBorderWidth = document.createElement('input');
        this._insertImageBorderWidth.style.direction = 'ltr';
        field4ig1.appendChild(this._insertImageBorderWidth);
        field4.appendChild(field4ig1);
        let field4ig2 = document.createElement('ig');
        field4ig2.className = "col-6";
        let borderstyleLabel = document.createElement('label');
        borderstyleLabel.innerText = this._lang["editor"]["borderstyle"];
        field4ig2.appendChild(borderstyleLabel);
        this._insertImageBorderStyle = document.createElement('select');
        this._insertImageBorderStyle.innerHTML = "<option>none</option><option>solid</option><option>dashed</option>";
        field4ig2.appendChild(this._insertImageBorderStyle);
        field4.appendChild(field4ig2);
        _insertImage.appendChild(field4);


        let field5 = document.createElement('div');
        let ClassLabel = document.createElement('label');
        ClassLabel.innerText = this._lang["editor"]["class"];
        field5.appendChild(ClassLabel);
        this._insertImageClass = document.createElement('input');
        this._insertImageClass.style.direction = 'ltr';
        field5.appendChild(this._insertImageClass);
        _insertImage.appendChild(field5);

        let field6 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["editor"]["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertImageUrl.value != '') {
                if (this._insertImageSelected == null) {
                    this._insertImageSelected = document.createElement('img');
                    window.getSelection().getRangeAt(0).insertNode(this._insertImageSelected);
                }


                this._insertImageSelected.src = this._insertImageUrl.value;
                this._insertImageSelected.alt = this._insertImageAlt.value;
                if (this._insertImageWidth.value != '') {
                    if (!(
                        this._insertImageWidth.value.includes('px') ||
                        this._insertImageWidth.value.includes('%') ||
                        this._insertImageWidth.value.includes('em') ||
                        this._insertImageWidth.value.includes('rem')))
                        this._insertImageWidth.value += 'px';
                    this._insertImageSelected.style.width = this._insertImageWidth.value;
                }
                if (this._insertImageHeight.value != '') {
                    if (!(
                        this._insertImageHeight.value.includes('px') ||
                        this._insertImageHeight.value.includes('%') ||
                        this._insertImageHeight.value.includes('em') ||
                        this._insertImageHeight.value.includes('rem')))
                        this._insertImageHeight.value += 'px';
                    this._insertImageSelected.style.height = this._insertImageHeight.value;
                }
                if (this._insertImageBorderWidth.value != '') {
                    if (!(
                        this._insertImageBorderWidth.value.includes('px') ||
                        this._insertImageBorderWidth.value.includes('%') ||
                        this._insertImageBorderWidth.value.includes('em') ||
                        this._insertImageBorderWidth.value.includes('rem')))
                        this._insertImageBorderWidth.value += 'px';
                    this._insertImageSelected.style.borderWidth = this._insertImageBorderWidth.value;
                }
                if (this._insertImageBorderStyle.value != '')
                    this._insertImageSelected.style.borderStyle = this._insertImageBorderStyle.value;
                this._insertImageSelected.className = this._insertImageClass.value;
                //a.remove();
                this._insertImageDropDown.Hide();
            }
        });
        field6.appendChild(insert);
        _insertImage.appendChild(field6);
        this._insertImage.appendChild(_insertImage);
        this._toolbar.append(this._insertImage);
        this._insertImageDropDown = new wndropdown(this._insertImage);
        this._insertImageDropDown.CheckOnlyDropDown = true;
    }

    private _insertMediaDropDown: wndropdown;
    private _insertMediaSelected: HTMLMediaElement;
    InsertMedia() {
        if (this._insertMedia == undefined)
            this.CreateMediaObject();

        let elem = this.getParentTagSelection();
        if (elem.tagName.toLowerCase() != 'video' && elem.tagName.toLowerCase() != 'audio') {
            let elemVideo = elem.querySelector('video');
            if (elemVideo == null)
                elem = elem.querySelector('audio');
            else
                elem = elemVideo;
        }
        this._insertMediaType.value = 'video';
        this._insertMediaUrl.value = '';
        this._insertMediaWidth.value = '';
        this._insertMediaHeight.value = '';
        this._insertMediaControls.checked = true;
        this._insertMediaMute.checked = false;
        this._insertMediaAutoPlay.checked = false;
        this._insertMediaBorderWidth.value = '';
        this._insertMediaBorderStyle.value = 'none';
        this._insertMediaClass.value = '';

        if (elem != null) {
            this._insertMediaSelected = elem as HTMLMediaElement;
            this._insertMediaType.value = this._insertMediaSelected.tagName.toLowerCase();
            this._insertMediaUrl.value = this._insertMediaSelected.src;
            this._insertMediaWidth.value = this._insertMediaSelected.style.width;
            this._insertMediaHeight.value = this._insertMediaSelected.style.height;
            this._insertMediaControls.checked = this._insertMediaSelected.hasAttribute('controls');
            this._insertMediaMute.checked = this._insertMediaSelected.hasAttribute('muted');
            this._insertMediaAutoPlay.checked = this._insertMediaSelected.hasAttribute('autoplay');
            this._insertMediaBorderWidth.value = this._insertMediaSelected.style.borderWidth;
            this._insertMediaBorderStyle.value = this._insertMediaSelected.style.borderStyle;
            this._insertMediaClass.value = this._insertMediaSelected.className;
        }
        else
            this._insertMediaSelected = null;
        this._insertMediaDropDown.element = this._editor_media;
        this._insertMediaDropDown.SetPosition();
        this._oldSelection = this.saveSelection();

        this._insertMediaDropDown.Show();
    }
    CreateMediaObject() {

        this._insertMedia = document.createElement('div');
        this._insertMedia.classList.add('dropdown');
        this._insertMedia.id = this.element.id + '_insertMedia';
        this._insertMedia.setAttribute('wn-dropdown', this._insertMedia.id);

        let _insertMedia = document.createElement('div');
        _insertMedia.classList.add('imagepicker');

        let field0 = document.createElement('div');
        let mediaLabel = document.createElement('label');
        mediaLabel.innerText = this._lang["editor"]["type"];
        field0.appendChild(mediaLabel);
        this._insertMediaType = document.createElement('select');
        this._insertMediaType.innerHTML = "<option>video</option><option>audio</option>";
        field0.appendChild(this._insertMediaType);
        _insertMedia.appendChild(field0);

        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["editor"]["url"];
        field1.appendChild(urlLabel);
        this._insertMediaUrl = document.createElement('input');
        this._insertMediaUrl.type = "url";
        this._insertMediaUrl.style.direction = 'ltr';
        field1.appendChild(this._insertMediaUrl);
        _insertMedia.appendChild(field1);

        let field3 = document.createElement('div');
        field3.className = "row";
        let field3ig1 = document.createElement('ig');
        field3ig1.className = "col-6";
        let widthLabel = document.createElement('label');
        widthLabel.innerText = this._lang["editor"]["width"];
        field3ig1.appendChild(widthLabel);
        this._insertMediaWidth = document.createElement('input');
        this._insertMediaWidth.style.direction = 'ltr';
        field3ig1.appendChild(this._insertMediaWidth);
        field3.appendChild(field3ig1);
        let field3ig2 = document.createElement('ig');
        field3ig2.className = "col-6";
        let heightLabel = document.createElement('label');
        heightLabel.innerText = this._lang["editor"]["height"];
        field3ig2.appendChild(heightLabel);
        this._insertMediaHeight = document.createElement('input');
        this._insertMediaHeight.style.direction = 'ltr';
        field3ig2.appendChild(this._insertMediaHeight);
        field3.appendChild(field3ig2);
        _insertMedia.appendChild(field3);

        let field2 = document.createElement('div');
        let controlsLabel = document.createElement('label');
        controlsLabel.innerText = this._lang["editor"]["controls"];
        this._insertMediaControls = document.createElement('input');
        this._insertMediaControls.type = "checkbox";
        controlsLabel.appendChild(this._insertMediaControls);
        field2.appendChild(controlsLabel);
        _insertMedia.appendChild(field2);


        let field7 = document.createElement('div');
        let MuteLabel = document.createElement('label');
        MuteLabel.innerText = this._lang["editor"]["mute"];
        this._insertMediaMute = document.createElement('input');
        this._insertMediaMute.type = "checkbox";
        MuteLabel.appendChild(this._insertMediaMute);
        field7.appendChild(MuteLabel);
        _insertMedia.appendChild(field7);

        let field8 = document.createElement('div');
        let AutoPlayLabel = document.createElement('label');
        AutoPlayLabel.innerText = this._lang["editor"]["autoplay"];
        this._insertMediaAutoPlay = document.createElement('input');
        this._insertMediaAutoPlay.type = "checkbox";
        AutoPlayLabel.appendChild(this._insertMediaAutoPlay);
        field8.appendChild(AutoPlayLabel);
        _insertMedia.appendChild(field8);

        let field4 = document.createElement('div');
        field4.className = "row";
        let field4ig1 = document.createElement('ig');
        field4ig1.className = "col-6";
        let borderwidthLabel = document.createElement('label');
        borderwidthLabel.innerText = this._lang["editor"]["borderwidth"];
        field4ig1.appendChild(borderwidthLabel);
        this._insertMediaBorderWidth = document.createElement('input');
        this._insertMediaBorderWidth.style.direction = 'ltr';
        field4ig1.appendChild(this._insertMediaBorderWidth);
        field4.appendChild(field4ig1);
        let field4ig2 = document.createElement('ig');
        field4ig2.className = "col-6";
        let borderstyleLabel = document.createElement('label');
        borderstyleLabel.innerText = this._lang["editor"]["borderstyle"];
        field4ig2.appendChild(borderstyleLabel);
        this._insertMediaBorderStyle = document.createElement('select');
        this._insertMediaBorderStyle.innerHTML = "<option>none</option><option>solid</option><option>dashed</option>";
        field4ig2.appendChild(this._insertMediaBorderStyle);
        field4.appendChild(field4ig2);
        _insertMedia.appendChild(field4);


        let field5 = document.createElement('div');
        let ClassLabel = document.createElement('label');
        ClassLabel.innerText = this._lang["editor"]["class"];
        field5.appendChild(ClassLabel);
        this._insertMediaClass = document.createElement('input');
        this._insertMediaClass.style.direction = 'ltr';
        field5.appendChild(this._insertMediaClass);
        _insertMedia.appendChild(field5);

        let field6 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["editor"]["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertMediaUrl.value != '') {
                if (this._insertMediaSelected == null) {
                    this._insertMediaSelected = document.createElement(this._insertMediaType.value) as HTMLMediaElement;
                    window.getSelection().getRangeAt(0).insertNode(this._insertMediaSelected);
                }

                if (this._insertMediaControls.checked)
                    this._insertMediaSelected.setAttribute('controls', '');
                else
                    this._insertMediaSelected.removeAttribute('controls');

                if (this._insertMediaMute.checked)
                    this._insertMediaSelected.setAttribute('muted', '');
                else
                    this._insertMediaSelected.removeAttribute('muted');

                if (this._insertMediaAutoPlay.checked)
                    this._insertMediaSelected.setAttribute('autoplay', '');
                else
                    this._insertMediaSelected.removeAttribute('autoplay');

                if (this._insertMediaWidth.value != '') {
                    if (!(
                        this._insertMediaWidth.value.includes('px') ||
                        this._insertMediaWidth.value.includes('%') ||
                        this._insertMediaWidth.value.includes('em') ||
                        this._insertMediaWidth.value.includes('rem')))
                        this._insertMediaWidth.value += 'px';
                    this._insertMediaSelected.setAttribute('width', this._insertMediaWidth.value);
                }
                if (this._insertMediaHeight.value != '') {
                    if (!(
                        this._insertMediaHeight.value.includes('px') ||
                        this._insertMediaHeight.value.includes('%') ||
                        this._insertMediaHeight.value.includes('em') ||
                        this._insertMediaHeight.value.includes('rem')))
                        this._insertMediaHeight.value += 'px';
                    this._insertMediaSelected.setAttribute('height', this._insertMediaHeight.value);
                }
                if (this._insertMediaBorderWidth.value != '') {
                    if (!(
                        this._insertMediaBorderWidth.value.includes('px') ||
                        this._insertMediaBorderWidth.value.includes('%') ||
                        this._insertMediaBorderWidth.value.includes('em') ||
                        this._insertMediaBorderWidth.value.includes('rem')))
                        this._insertMediaBorderWidth.value += 'px';
                    this._insertMediaSelected.style.borderWidth = this._insertMediaBorderWidth.value;
                }
                if (this._insertMediaBorderStyle.value != '')
                    this._insertMediaSelected.style.borderStyle = this._insertMediaBorderStyle.value;
                if (this._insertMediaClass.value != '')
                    this._insertMediaSelected.className = this._insertMediaClass.value;

                this._insertMediaUrl.value = this._insertMediaUrl.value.toLowerCase().trim();
                let MediaType = this._insertMediaSelected.tagName.toLocaleLowerCase() + '/';
                let ext = this._insertMediaUrl.value.substring(this._insertMediaUrl.value.lastIndexOf('.') + 1).toLocaleLowerCase();
                if (ext == 'mp3')
                    MediaType += 'mpeg';
                else
                    MediaType += ext;

                this._insertMediaSelected.innerHTML = "<source src='" + this._insertMediaUrl.value + "' type='" + MediaType + "'>" + this._lang["editor"]["medianotsupport"];

                this._insertMediaDropDown.Hide();
            }
        });
        field6.appendChild(insert);
        _insertMedia.appendChild(field6);
        this._insertMedia.appendChild(_insertMedia);
        this._toolbar.append(this._insertMedia);
        this._insertMediaDropDown = new wndropdown(this._insertMedia);
        this._insertMediaDropDown.CheckOnlyDropDown = true;
    }

    private _insertIFrameDropDown: wndropdown;
    private _insertIFrameSelected: HTMLIFrameElement;
    InsertIFrame() {
        if (this._insertIFrame == undefined)
            this.CreateIFrameObject();

        let elem = this.getParentTagSelection();
        if (elem.tagName.toLowerCase() != 'iframe') {
            elem = elem.querySelector('iframe');
        }
        this._insertIFrameUrl.value = '';
        this._insertIFrameTitle.value = '';
        this._insertIFrameWidth.value = '';
        this._insertIFrameHeight.value = '';
        this._insertIFrameBorderWidth.value = '';
        this._insertIFrameBorderStyle.value = 'none';
        this._insertIFrameClass.value = '';

        if (elem != null) {
            this._insertIFrameSelected = elem as HTMLIFrameElement;
            this._insertIFrameUrl.value = this._insertIFrameSelected.src;
            this._insertIFrameTitle.value = this._insertIFrameSelected.title;
            this._insertIFrameWidth.value = this._insertIFrameSelected.style.width;
            this._insertIFrameHeight.value = this._insertIFrameSelected.style.height;
            this._insertIFrameBorderWidth.value = this._insertIFrameSelected.style.borderWidth;
            this._insertIFrameBorderStyle.value = this._insertIFrameSelected.style.borderStyle;
            this._insertIFrameClass.value = this._insertIFrameSelected.className;
        }
        else
            this._insertIFrameSelected = null;
        this._insertIFrameDropDown.element = this._editor_iframe;
        this._insertIFrameDropDown.SetPosition();
        this._oldSelection = this.saveSelection();

        this._insertIFrameDropDown.Show();
    }
    CreateIFrameObject() {

        this._insertIFrame = document.createElement('div');
        this._insertIFrame.classList.add('dropdown');
        this._insertIFrame.id = this.element.id + '_insertIFrame';
        this._insertIFrame.setAttribute('wn-dropdown', this._insertIFrame.id);

        let _insertIFrame = document.createElement('div');
        _insertIFrame.classList.add('imagepicker');

        let field1 = document.createElement('div');
        let urlLabel = document.createElement('label');
        urlLabel.innerText = this._lang["editor"]["url"];
        field1.appendChild(urlLabel);
        this._insertIFrameUrl = document.createElement('input');
        this._insertIFrameUrl.type = "url";
        this._insertIFrameUrl.style.direction = 'ltr';
        field1.appendChild(this._insertIFrameUrl);
        _insertIFrame.appendChild(field1);

        let field2 = document.createElement('div');
        let titleLabel = document.createElement('label');
        titleLabel.innerText = this._lang["editor"]["title"];
        field2.appendChild(titleLabel);
        this._insertIFrameTitle = document.createElement('input');
        field2.appendChild(this._insertIFrameUrl);
        _insertIFrame.appendChild(field2);

        let field3 = document.createElement('div');
        field3.className = "row";
        let field3ig1 = document.createElement('ig');
        field3ig1.className = "col-6";
        let widthLabel = document.createElement('label');
        widthLabel.innerText = this._lang["editor"]["width"];
        field3ig1.appendChild(widthLabel);
        this._insertIFrameWidth = document.createElement('input');
        this._insertIFrameWidth.style.direction = 'ltr';
        field3ig1.appendChild(this._insertIFrameWidth);
        field3.appendChild(field3ig1);
        let field3ig2 = document.createElement('ig');
        field3ig2.className = "col-6";
        let heightLabel = document.createElement('label');
        heightLabel.innerText = this._lang["editor"]["height"];
        field3ig2.appendChild(heightLabel);
        this._insertIFrameHeight = document.createElement('input');
        this._insertIFrameHeight.style.direction = 'ltr';
        field3ig2.appendChild(this._insertIFrameHeight);
        field3.appendChild(field3ig2);
        _insertIFrame.appendChild(field3);

        let field4 = document.createElement('div');
        field4.className = "row";
        let field4ig1 = document.createElement('ig');
        field4ig1.className = "col-6";
        let borderwidthLabel = document.createElement('label');
        borderwidthLabel.innerText = this._lang["editor"]["borderwidth"];
        field4ig1.appendChild(borderwidthLabel);
        this._insertIFrameBorderWidth = document.createElement('input');
        this._insertIFrameBorderWidth.style.direction = 'ltr';
        field4ig1.appendChild(this._insertIFrameBorderWidth);
        field4.appendChild(field4ig1);
        let field4ig2 = document.createElement('ig');
        field4ig2.className = "col-6";
        let borderstyleLabel = document.createElement('label');
        borderstyleLabel.innerText = this._lang["editor"]["borderstyle"];
        field4ig2.appendChild(borderstyleLabel);
        this._insertIFrameBorderStyle = document.createElement('select');
        this._insertIFrameBorderStyle.innerHTML = "<option>none</option><option>solid</option><option>dashed</option>";
        field4ig2.appendChild(this._insertIFrameBorderStyle);
        field4.appendChild(field4ig2);
        _insertIFrame.appendChild(field4);


        let field5 = document.createElement('div');
        let ClassLabel = document.createElement('label');
        ClassLabel.innerText = this._lang["editor"]["class"];
        field5.appendChild(ClassLabel);
        this._insertIFrameClass = document.createElement('input');
        this._insertIFrameClass.style.direction = 'ltr';
        field5.appendChild(this._insertIFrameClass);
        _insertIFrame.appendChild(field5);

        let field6 = document.createElement('div');
        let insert = document.createElement('button');
        insert.innerText = this._lang["editor"]["insert"];
        insert.addEventListener("click", () => {
            this.restoreSelection(this._oldSelection);
            if (this._insertIFrameUrl.value != '') {
                if (this._insertIFrameSelected == null) {
                    this._insertIFrameSelected = document.createElement('iframe') as HTMLIFrameElement;
                    window.getSelection().getRangeAt(0).insertNode(this._insertIFrameSelected);
                }


                this._insertIFrameSelected.src = this._insertIFrameUrl.value;
                this._insertIFrameSelected.title = this._insertIFrameTitle.value;

                if (this._insertIFrameWidth.value != '') {
                    if (!(
                        this._insertIFrameWidth.value.includes('px') ||
                        this._insertIFrameWidth.value.includes('%') ||
                        this._insertIFrameWidth.value.includes('em') ||
                        this._insertIFrameWidth.value.includes('rem')))
                        this._insertIFrameWidth.value += 'px';
                    this._insertIFrameSelected.setAttribute('width', this._insertIFrameWidth.value);
                }
                if (this._insertIFrameHeight.value != '') {
                    if (!(
                        this._insertIFrameHeight.value.includes('px') ||
                        this._insertIFrameHeight.value.includes('%') ||
                        this._insertIFrameHeight.value.includes('em') ||
                        this._insertIFrameHeight.value.includes('rem')))
                        this._insertIFrameHeight.value += 'px';
                    this._insertIFrameSelected.setAttribute('height', this._insertIFrameHeight.value);
                }
                if (this._insertIFrameBorderWidth.value != '') {
                    if (!(
                        this._insertIFrameBorderWidth.value.includes('px') ||
                        this._insertIFrameBorderWidth.value.includes('%') ||
                        this._insertIFrameBorderWidth.value.includes('em') ||
                        this._insertIFrameBorderWidth.value.includes('rem')))
                        this._insertIFrameBorderWidth.value += 'px';
                    this._insertIFrameSelected.style.borderWidth = this._insertIFrameBorderWidth.value;
                }
                if (this._insertIFrameBorderStyle.value != '')
                    this._insertIFrameSelected.style.borderStyle = this._insertIFrameBorderStyle.value;
                if (this._insertIFrameClass.value != '')
                    this._insertIFrameSelected.className = this._insertIFrameClass.value;


                this._insertIFrameDropDown.Hide();
            }
        });
        field6.appendChild(insert);
        _insertIFrame.appendChild(field6);
        this._insertIFrame.appendChild(_insertIFrame);
        this._toolbar.append(this._insertIFrame);
        this._insertIFrameDropDown = new wndropdown(this._insertIFrame);
        this._insertIFrameDropDown.CheckOnlyDropDown = true;
    }
    get Html(): string {
        return this._content.innerHTML;
    }
    set Html(value: string) {
        this._content.innerHTML = value;
        if (value == '')
            this._content.innerHTML = `<${this.ParagraphSeparator}>&nbsp;</${this.ParagraphSeparator}>`;

    }


    ShowSource() {
        if (this._editor_source_mode == 'html') {
            this._editor_source_textarea.value = this._content.innerHTML;
            this._editor_source_textarea.classList.add('show');
            this._content.classList.add('hide');
            this._editor_source_mode = 'source';
        }
        else {
            const parser = new DOMParser();
            const doc3 = parser.parseFromString(this._editor_source_textarea.value, "text/html");
            this._content.innerHTML = doc3.body.innerHTML;
            this._editor_source_textarea.classList.remove('show');
            this._content.classList.remove('hide');
            this._editor_source_mode = 'html';
        }
    }
}