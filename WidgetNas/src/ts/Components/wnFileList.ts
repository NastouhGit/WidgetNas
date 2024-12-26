
class WNFileList implements IWNFilelist {
    public readonly nameType: string = 'WNFileList';
    public element: HTMLElement;
    public mode: string = "select";
    public url: string = "";
    public multiSelect: boolean = false;

    public selectionChanged: (t: IWNFilelist) => {};
    public dblClick: (t: IWNFilelist) => {};


    private basepath: string = '/';

    private _head: HTMLDivElement;
    private _foldersAddress: HTMLOListElement;
    private _body: HTMLDivElement;
    private _divfolders: HTMLDivElement;
    private _divfiles: HTMLDivElement;
    private _folders: HTMLUListElement;
    private _files: HTMLTableElement;
    private _dragdrop: HTMLDivElement;
    private _preLoader: HTMLDivElement;
    private _toastdiv: HTMLDivElement;
    private _toastbody: HTMLDivElement;
    private _foldertree: IWNTree;
    private _toast: IWNToast;
    private _lang: any;

    private _date: IWNDate = new WNDate();

    static _clipboard: string[] = [];
    static _classExt = [
        {
            className: 'compress',
            ext: [
                '.7z',
                '.7z.001',
                '.7z.002',
                '.a00',
                '.a01',
                '.a02',
                '.ace',
                '.agg',
                '.ain',
                '.alz',
                '.apex',
                '.apz',
                '.ar',
                '.arc',
                '.arc',
                '.archiver',
                '.arduboy',
                '.arh',
                '.ari',
                '.arj',
                '.arj',
                '.ark',
                '.as',
                '.ayt',
                '.b1',
                '.b64',
                '.b64',
                '.b6z',
                '.ba',
                '.bdoc',
                '.bh',
                '.bndl',
                '.boo',
                '.btoa',
                '.bundle',
                '.bz',
                '.bz',
                '.bz2',
                '.bza',
                '.bzip',
                '.bzip2',
                '.c00',
                '.c01',
                '.c02',
                '.c10',
                '.cab',
                '.car',
                '.cb7',
                '.cba',
                '.cbr',
                '.cbt',
                '.cbz',
                '.cdz',
                '.comppkg.hauptwerk.rar',
                '.comppkg_hauptwerk_rar',
                '.cp9',
                '.cpgz',
                '.cpt',
                '.cpt',
                '.ctx',
                '.ctz',
                '.cxarchive',
                '.czip',
                '.daf',
                '.dar',
                '.dd',
                '.deb',
                '.dgc',
                '.dist',
                '.dl_',
                '.dz',
                '.ecar',
                '.ecs',
                '.ecsbx',
                '.edz',
                '.efw',
                '.egg',
                '.epi',
                '.f',
                '.f3z',
                '.fcx',
                '.fdp',
                '.fp8',
                '.fzpz',
                '.gar',
                '.gca',
                '.gmz',
                '.gz',
                '.gz',
                '.gz2',
                '.gza',
                '.gzi',
                '.gzip',
                '.ha',
                '.hbc',
                '.hbc2',
                '.hbe',
                '.hki',
                '.hki1',
                '.hki2',
                '.hki3',
                '.hpk',
                '.hpkg',
                '.hqx',
                '.htmi',
                '.hyp',
                '.iadproj',
                '.ice',
                '.ipg',
                '.ipk',
                '.ish',
                '.iso',
                '.isx',
                '.ita',
                '.ize',
                '.j',
                '.jar.pack',
                '.jex',
                '.jgz',
                '.jhh',
                '.jic',
                '.jsonlz4',
                '.kextraction',
                '.kgb',
                '.kz',
                '.layout',
                '.lbr',
                '.lemon',
                '.lha',
                '.lha',
                '.lhzd',
                '.libzip',
                '.lnx',
                '.lpkg',
                '.lqr',
                '.lz',
                '.lz4',
                '.lzh',
                '.lzh',
                '.lzm',
                '.lzma',
                '.lzo',
                '.lzx',
                '.mbz',
                '.md',
                '.memo',
                '.mim',
                '.mint',
                '.mlproj',
                '.mme',
                '.mou',
                '.movpkg',
                '.mozlz4',
                '.mpkg',
                '.mzp',
                '.mzp',
                '.nar',
                '.nex',
                '.npk',
                '.nz',
                '.oar',
                '.opk',
                '.oz',
                '.p01',
                '.p19',
                '.p7z',
                '.pa',
                '.pack.gz',
                '.package',
                '.pae',
                '.pak',
                '.pak',
                '.paq6',
                '.paq7',
                '.paq8',
                '.paq8f',
                '.paq8l',
                '.paq8p',
                '.par',
                '.par2',
                '.pax',
                '.pbi',
                '.pcv',
                '.pea',
                '.pet',
                '.pf',
                '.pf',
                '.pim',
                '.pima',
                '.pit',
                '.piz',
                '.pkg',
                '.pkg.tar.xz',
                '.pkpass',
                '.prs',
                '.psz',
                '.pup',
                '.pup',
                '.puz',
                '.pvmz',
                '.pwa',
                '.q',
                '.qda',
                '.r0',
                '.r00',
                '.r01',
                '.r02',
                '.r03',
                '.r04',
                '.r1',
                '.r2',
                '.r21',
                '.r30',
                '.rar',
                '.rar',
                '.rev',
                '.rk',
                '.rnc',
                '.rp9',
                '.rpm',
                '.rpm',
                '.rss',
                '.rte',
                '.rz',
                '.s00',
                '.s01',
                '.s02',
                '.s09',
                '.s7z',
                '.sar',
                '.sbx',
                '.sbx',
                '.sdc',
                '.sdn',
                '.sdoc',
                '.sdocx',
                '.sea',
                '.sea',
                '.sen',
                '.sfg',
                '.sfm',
                '.sfs',
                '.sfx',
                '.sh',
                '.shar',
                '.shk',
                '.shr',
                '.si',
                '.sifz',
                '.sit',
                '.sit',
                '.sitx',
                '.sitx',
                '.smpf',
                '.snappy',
                '.snb',
                '.snz',
                '.spa',
                '.spd',
                '.spl',
                '.spm',
                '.spt',
                '.sqf',
                '.sqx',
                '.sqz',
                '.srep',
                '.stproj',
                '.sy_',
                '.tar.bz2',
                '.tar.gz',
                '.tar.gz',
                '.tar.gz2',
                '.tar.lz',
                '.tar.lzma',
                '.tar.xz',
                '.tar.z',
                '.taz',
                '.tbz',
                '.tbz',
                '.tbz2',
                '.tbz2',
                '.tcx',
                '.tg',
                '.tgs',
                '.tgz',
                '.tgz',
                '.tlz',
                '.tlzma',
                '.tpsr',
                '.trs',
                '.tx_',
                '.txz',
                '.tz',
                '.tzst',
                '.ubz',
                '.uc2',
                '.ufdr',
                '.ufs.uzip',
                '.uha',
                '.uu',
                '.uue',
                '.uzed',
                '.uzip',
                '.vem',
                '.vfs',
                '.vip',
                '.vmcz',
                '.vms',
                '.voca',
                '.vpk',
                '.vrpackage',
                '.vsi',
                '.vwi',
                '.wa',
                '.waff',
                '.war',
                '.warc',
                '.wastickers',
                '.wdz',
                '.whl',
                '.wick',
                '.wlb',
                '.wot',
                '.wux',
                '.xapk',
                '.xar',
                '.xef',
                '.xez',
                '.xip',
                '.xmcdz',
                '.xoj',
                '.xopp',
                '.xx',
                '.xz',
                '.xzm',
                '.y',
                '.yz',
                '.yz1',
                '.z',
                '.z',
                '.z00',
                '.z01',
                '.z02',
                '.z03',
                '.z04',
                '.zap',
                '.zed',
                '.zfsendtotarget',
                '.zi',
                '.zi_',
                '.zim',
                '.zip',
                '.zip',
                '.zipx',
                '.zipx',
                '.zix',
                '.zl',
                '.zoo',
                '.zoo',
                '.zpi',
                '.zsplit',
                '.zst',
                '.zw',
                '.zz',
                '.zz',
            ]
        },
        {
            className: 'audio',
            ext: ['.3gp',
                '.8svx',
                '.aa',
                '.aac',
                '.aax',
                '.act',
                '.aiff',
                '.alac',
                '.amr',
                '.ape',
                '.au',
                '.awb',
                '.cda',
                '.dss',
                '.dvf',
                '.flac',
                '.gsm',
                '.iklax',
                '.ivs',
                '.m4a',
                '.m4b',
                '.m4p',
                '.mmf',
                '.mogg',
                '.mp3',
                '.mpc',
                '.msv',
                '.nmf',
                '.oga',
                '.ogg',
                '.opus',
                '.ra, .rm',
                '.raw',
                '.rf64',
                '.sln',
                '.tta',
                '.voc',
                '.vox',
                '.wav',
                '.webm',
                '.wma',
                '.wv',
            ]
        },
        {
            className: 'excel',
            ext: [
                '.csv',
                '.dbf',
                '.dif',
                '.ods',
                '.slk',
                '.xla',
                '.xlam',
                '.xls',
                '.xlsb',
                '.xlsm',
                '.xlsx',
                '.xlt',
                '.xltm',
                '.xltx',
                '.xlw',
                '.xml',
            ]
        },
        {
            className: 'word',
            ext: ['.doc',
                '.docm',
                '.docx',
                '.dot',
                '.dotm',
                '.dotx',
                '.rtf',
                '.txt',
                '.wps',
            ]
        },
        {
            className: 'powerpoint',
            ext: ['.pot',
                '.potm',
                '.potx',
                '.ppa',
                '.ppam',
                '.pps',
                '.ppsm',
                '.ppsx',
                '.ppt',
                '.pptm',
                '.pptx',
                '.pptx',
                '.pptx',
                '.thmx',
            ]
        },
        {
            className: 'image',
            ext: [
                '.bmp',
                '.dds',
                '.dib',
                '.fw.png',
                '.gif',
                '.itc2',
                '.jpg',
                '.png',
                '.psd',
                '.ai',
                '.arw',
                '.cdr',
                '.cdt',
                '.cpl',
                '.cpt',
                '.drw',
                '.dxb',
                '.eps',
                '.exr',
                '.fbx',
                '.flm',
                '.fpf',
                '.fxg',
                '.ithmb',
                '.jxr',
                '.mdi',
                '.mpf',
                '.pcd',
                '.pct',
                '.pdn',
                '.ppsx',
                '.ps',
                '.ps',
                '.pspimage',
                '.psq',
                '.qxd',
                '.rw2',
                '.sdk',
                '.svg',
                '.svgz',
                '.targa',
                '.tga',
                '.tif',
                '.tiff',
                '.006',
                '.007',
                '.abm',
                '.abr',
                '.bil',
                '.blend',
                '.bmc',
                '.ccx',
                '.cdx',
                '.cgm',
                '.comicdoc',
                '.cps',
                '.cr2',
                '.dae',
                '.design',
                '.drg',
                '.drwdot',
                '.dt2',
                '.dwf',
                '.ec3',
                '.edp',
                '.emf',
                '.epsf',
                '.epsi',
                '.fh11',
                '.fit',
                '.flic',
                '.gtx',
                '.iges',
                '.igr',
                '.indd',
                '.jpeg',
                '.jpg2',
                '.jps',
                '.lda',
                '.ldm',
                '.let',
                '.lva',
                '.lvf',
                '.mgx',
                '.mpo',
                '.neu',
                '.opd',
                '.p21',
                '.pcx',
                '.pef',
                '.pic',
                '.pic',
                '.pictclipping',
                '.pl0',
                '.pl2',
                '.psf',
                '.pwd',
                '.px',
                '.qtif',
                '.rlc',
                '.rle',
                '.sdr',
                '.sec',
                '.sig',
                '.skp',
                '.sldasm',
                '.slddrw',
                '.sldprt',
                '.snx',
                '.tcw',
                '.upx',
                '.utx',
                '.vfs',
                '.vga',
                '.webp',
                '.wmf',
                '.x_b',
                '.x_t',
                '.zdl',
                '.zif',
                '.zprf',
                '.aex',
                '.bob',
                '.cmx',
                '.easm',
                '.icl',
                '.ilm',
                '.ima',
                '.ime',
                '.imi',
                '.ims',
                '.ncr',
                '.nth',
                '.ora',
                '.pi2',
                '.pmb',
                '.pxr',
                '.ric',
                '.sst',
                '.tn',
                '.tpf',
                '.tpx',
                '.wi',
                '.xip',
                '.albm',
                '.dwb',
                '.trif',
                '.trx',
                '.3dmf',
                '.3dx',
                '.8pbs',
                '.adi',
                '.ais',
                '.amu',
                '.ard',
                '.art',
                '.asat',
                '.b16',
                '.blkrt',
                '.blz',
                '.bmc',
                '.br4',
                '.br5',
                '.c4',
                '.cadrg',
                '.catpart',
                '.cht',
                '.cm2',
                '.cmz',
                '.csf',
                '.cv5',
                '.cvg',
                '.cvi',
                '.cvi',
                '.cvx',
                '.dcim',
                '.dcm',
                '.dcr',
                '.dcs',
                '.djv',
                '.djvu',
                '.dng',
                '.dvl',
                '.edrw',
                '.edw',
                '.eprt',
                '.fac',
                '.face',
                '.fbm',
                '.fc2',
                '.fcz',
                '.fd2',
                '.fhd',
                '.fm',
                '.fs',
                '.graffle',
                '.hd2',
                '.hdz',
                '.hpd',
                '.hpi',
                '.hr2',
                '.htz4',
                '.ics',
                '.idw',
                '.ief',
                '.ilbm',
                '.indt',
                '.ipj',
                '.irf',
                '.j2k',
                '.jiff',
                '.jng',
                '.jpf',
                '.jpw',
                '.jt',
                '.jwl',
                '.kdc',
                '.kodak',
                '.kpg',
                '.lt2',
                '.ltz',
                '.lxf',
                '.mac',
                '.macp',
                '.mcs',
                '.mcz',
                '.mgs',
                '.mic',
                '.mip',
                '.mng',
                '.mtz',
                '.mur',
                '.mur',
                '.nav',
                '.nff',
                '.njb',
                '.ntc',
                '.odi',
                '.odif',
                '.ola',
                '.ota',
                '.otb',
                '.otc',
                '.otg',
                '.oti',
                '.ovw',
                '.p2z',
                '.pat',
                '.pc6',
                '.pc7',
                '.picnc',
                '.pln',
                '.pol',
                '.pp2',
                '.prw',
                '.psb',
                '.psg',
                '.psp',
                '.pvl',
                '.pws',
                '.pz2',
                '.pz3',
                '.qtz',
                '.sfw',
                '.srf',
                '.sun',
                '.tcx',
                '.tex',
                '.tjp',
                '.u3d',
                '.urt',
                '.v00',
                '.v3d',
                '.vhd',
                '.vis',
                '.vrl',
                '.vtx',
                '.wb1',
                '.wbc',
                '.wbd',
                '.wbz',
                '.wgs',
                '.wnk',
                '.xdw',
                '.xsi',
                '.zno',
                '.zt',
            ]
        },
        {
            className: 'pdf',
            ext: ['.pdf']
        },
        {
            className: 'video',
            ext: ['.webm',
                '.mkv',
                '.flv',
                '.vob',
                '.ogv',
                '.ogg',
                '.rrc',
                '.gifv',
                '.mng',
                '.mov',
                '.avi',
                '.qt',
                '.wmv',
                '.yuv',
                '.rm',
                '.asf',
                '.amv',
                '.mp4',
                '.m4p',
                '.m4v',
                '.mpg',
                '.mp2',
                '.mpeg',
                '.mpe',
                '.mpv',
                '.m4v',
                '.svi',
                '.3gp',
                '.3g2',
                '.mxf',
                '.roq',
                '.nsv',
                '.flv',
                '.f4v',
                '.f4p',
                '.f4a',
                '.f4b',
            ]
        },
    ];

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.init();
        }
    }
    private async init() {
        if (this.element.hasAttribute('calendar'))
            this._date.calendar = WNCalendarFunction(this.element.getAttribute('calendar'));
        if (this.element.hasAttribute('cultureinfo'))
            this._date.cultureInfo = WNCultureInfoFunction(this.element.getAttribute('cultureinfo'));

        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionChanged = WNGenerateFunction(this.element.getAttribute('onselectionchanged'), 't');
        if (this.element.hasAttribute('ondblclick')) {
            this.dblClick = WNGenerateFunction(this.element.getAttribute('ondblclick'), 't');
            this.element.ondblclick = null;
        }

        this._lang = WNLanguage[this._date.cultureInfo.twoLetterISOLanguageName];

        if (this.element.className == '')
            this.element.classList.add('filelist')
        this.mode = this.element.getAttribute('mode').toLowerCase() ?? 'select';
        this.multiSelect = WNparseBoolean(this.element.getAttribute('multi-select'), false);
        this.basepath = this.element.getAttribute('basepath') ?? '/';
        if (this.basepath != '' && !this.basepath.endsWith('/'))
            this.basepath = this.basepath + '/';

        this._head = this.element.querySelector('.head') as HTMLDivElement;
        if (this._head == null)
            this.addHead();

        this._body = this.element.querySelector('.body') as HTMLDivElement;
        if (this._body == null)
            this.addBody();

        this._divfolders = this.element.querySelector('.folders') as HTMLDivElement;
        this._divfiles = this.element.querySelector('.files') as HTMLDivElement;



        this.url = WNparseString(this.element.getAttribute('url'), this.url);
        await this.getFolders("");
        this._foldertree.collapsedAll();
        this._foldertree.expandToParent(this._foldertree.findByValue('/'));

    }
    private addHead() {

        this._head = document.createElement('div');
        this._head.className = 'head';

        let toolbar = document.createElement('div');
        toolbar.className = "toolbar";

        let refresh = document.createElement('button');
        refresh.title = this._lang["filelist"]["refresh"];
        refresh.className = "refresh";
        refresh.addEventListener("click", async () => {
            let s = WNTrimStart(this.selectedFolder, '/');
            await this.getFolders("");
            this._foldertree.collapsedAll();
            this._foldertree.expandToParent(this._foldertree.findByValue(s));
        });
        toolbar.appendChild(refresh);

        if (this.mode == 'full') {

            let g1 = document.createElement('div');
            g1.className = "button-group";

            let newFolder = document.createElement('button');
            newFolder.title = this._lang["filelist"]["newfolder"];
            newFolder.className = "newfolder";
            newFolder.addEventListener("click", () => {
                let d = new WNConfirm();
                d.parentElement = this.element;
                d.title = this._lang["filelist"]["newfolder"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["newfolder"], class: 'success',
                        click: async (t) => {
                            return await this.newFolder(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });

            g1.appendChild(newFolder);

            let _rename = document.createElement('button');
            _rename.title = this._lang["filelist"]["rename"];
            _rename.className = "rename";
            _rename.addEventListener("click", () => {
                let value = '';
                let files = this.selectedItems;
                if (files.files.length > 0)
                    value = files.files[0];
                else {
                    value = files.path ?? '';
                    let f = value.split('/');
                    value = f[f.length - 1];
                }
                if (value == '' || value == '/')
                    return;

                let d = new WNConfirm();
                d.parentElement = this.element;
                d.title = this._lang["filelist"]["rename"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr' value='${value}'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["rename"], class: 'success',
                        click: async (t) => {
                            return await this.rename(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });

            g1.appendChild(_rename);

            let _delete = document.createElement('button');
            _delete.title = this._lang["filelist"]["delete"];
            _delete.className = "delete";
            _delete.addEventListener("click", () => {
                let f = this.selectedItems;
                if (f.files.length == 0 && f.path == '/')
                    return;

                let d = new WNConfirm();
                d.parentElement = this.element;
                d.headClass = "danger";
                d.title = this._lang["filelist"]["delete"];
                if (f.files.length > 0)
                    d.body = this._lang["filelist"]["deletefiles"] + '<br/>' + f.files.length.toString() + ' ' + this._lang["filelist"]["files"];
                else
                    d.body = this._lang["filelist"]["deletefolder"] + '<br/><span class="ltr">' + f.path + "</span>";

                d.buttons = [
                    {
                        caption: this._lang["common"]["ok"], class: 'error',
                        click: async () => {
                            return await this.delete();
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });

            g1.appendChild(_delete);
            toolbar.appendChild(g1);

            let g2 = document.createElement('div');
            g2.className = "button-group";

            let _Copy = document.createElement('button');
            _Copy.title = this._lang["filelist"]["copy"];
            _Copy.className = "copy";
            _Copy.addEventListener("click", () => {
                WNFileList._clipboard = ['copy'];

                let f = this.selectedItems;

                if (f.files.length > 0)
                    f.files.forEach((x) => WNFileList._clipboard.push(WNTrim(f.path + '/' + x, '/')));
                else
                    WNFileList._clipboard.push(f.path);
                this.showMessage("clipboarded", "success");
            });
            g2.appendChild(_Copy);

            let _Cut = document.createElement('button');
            _Cut.title = this._lang["filelist"]["cut"];
            _Cut.className = "cut";
            _Cut.addEventListener("click", () => {
                WNFileList._clipboard = ['cut'];

                let f = this.selectedItems;

                if (f.files.length > 0)
                    f.files.forEach((x) => WNFileList._clipboard.push(WNTrim(f.path + '/' + x, '/')));
                else
                    WNFileList._clipboard.push(f.path);
                this.showMessage("clipboarded", "success");
            });
            g2.appendChild(_Cut);

            let _paste = document.createElement('button');
            _paste.title = this._lang["filelist"]["paste"];
            _paste.className = "paste";
            _paste.addEventListener("click", () => {
                return this.paste();
            });

            g2.appendChild(_paste);
            toolbar.appendChild(g2);

            let g3 = document.createElement('div');
            g3.className = "button-group";

            let _Upload = document.createElement('button');
            _Upload.title = this._lang["filelist"]["upload"];
            _Upload.className = "upload";
            _Upload.addEventListener("click", () => {
                if (this._foldertree.selectedItem == null)
                    return;
                this._dragdrop.classList.add('show');
            });
            g3.appendChild(_Upload);

            let _download = document.createElement('button');
            _download.title = this._lang["filelist"]["download"];
            _download.className = "download";
            _download.addEventListener("click", () => {
                this.download();
            });
            g3.appendChild(_download);

            let _compress = document.createElement('button');
            _compress.title = this._lang["filelist"]["compress"];
            _compress.className = "compress";
            _compress.addEventListener("click", () => {
                if (this.selectedItems.files.length == 0)
                    return;
                let d = new WNConfirm();
                d.parentElement = this.element;
                d.title = this._lang["filelist"]["compress"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["compress"], class: 'success',
                        click: async (t) => {
                            return await this.compress(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });
            g3.appendChild(_compress);

            let _decompress = document.createElement('button');
            _decompress.title = this._lang["filelist"]["decompress"];
            _decompress.className = "decompress";
            _decompress.addEventListener("click", () => {
                let f = this.selectedItems;
                if (f.files.length == 0 && f.path == '/')
                    return;

                let d = new WNConfirm();
                d.parentElement = this.element;
                d.headClass = "danger";
                d.title = this._lang["filelist"]["decompress"];
                d.body = this._lang["filelist"]["decompressmessage"];

                d.buttons = [
                    {
                        caption: this._lang["common"]["ok"], class: 'error',
                        click: async () => {
                            return await this.decompress();
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });
            g3.appendChild(_decompress);
            toolbar.appendChild(g3);

        }
        this._head.appendChild(toolbar);

        this._foldersAddress = document.createElement('ol');
        this._foldersAddress.className = "breadcrumb address ltr";
        this._head.appendChild(this._foldersAddress);

        this.element.appendChild(this._head);

        this.element.addEventListener("dragover", (e) => {
            this._dragdrop.classList.add('show');
        });
    }

    private addBody() {
        this._body = document.createElement('div');
        this._body.className = 'body';

        this._divfolders = document.createElement('div');
        this._divfolders.className = "folders";

        this._folders = document.createElement('ul');
        this._folders.className = "tree";
        this._folders.id = this.element.id + "_folders";
        this._divfolders.appendChild(this._folders);

        this._body.appendChild(this._divfolders);

        this._divfiles = document.createElement('div');
        this._divfiles.className = "files";
        this._files = document.createElement('table');
        this._files.className = "striped hover";
        this._files.createTHead();
        this._files.tHead.innerHTML = `<tr><td><input type="checkbox"/></td><td>${this._lang["filelist"]["filename"]}</td><td>${this._lang["filelist"]["ext"]}</td><td>${this._lang["filelist"]["size"]}</td><td>${this._lang["filelist"]["date"]}</td></tr>`;
        this._files.createTBody();
        this._files.tHead.querySelector("input[type=checkbox]").addEventListener("click", (t) => {
            if (WNCheckReadOnlyDisabled(this.element)) return;
            if (!this.multiSelect)
                return;
            let th = t.target as HTMLInputElement;
            this._files.tBodies[0].querySelectorAll("input[type=checkbox]").forEach((x) => (<HTMLInputElement>x).checked = th.checked);
            this.selectionChanged?.(this);

        });

        this._divfiles.appendChild(this._files);
        this._body.appendChild(this._divfiles);

        this._dragdrop = document.createElement('div');
        this._dragdrop.className = "dropfile";
        this._dragdrop.innerHTML = `</button><div class='filearea'><label for='${this.element.id}_UploadInput'>${this._lang['filelist']['upload']}</lable><input id='${this.element.id}_UploadInput' class='d-none' type='file' multiple='true' class='s-m opacity-100'/><hr/><div>${this._lang['filelist']['drophere']}</div></div>`;

        let close = document.createElement('button');
        close.className = "close";
        close.addEventListener("click", () => { this._dragdrop.classList.remove('show') });
        this._dragdrop.appendChild(close);
        this.element.appendChild(this._dragdrop);

        this._dragdrop.addEventListener("dragover", (ev) => { ev.preventDefault(); });
        this._dragdrop.addEventListener("drop", async (ev) => {
            this._dragdrop.classList.remove('show');
            ev.preventDefault();

            if (ev.dataTransfer.items) {
                let files = [];
                for (var i = 0; i < ev.dataTransfer.items.length; i++)
                    if (ev.dataTransfer.items[i].kind === 'file')
                        files.push(ev.dataTransfer.items[i].getAsFile());

                await this.uploadFile(files);
            } else {
                await this.uploadFile(ev.dataTransfer.files[i]);
            }
        });

        this.element.appendChild(this._body);

        WN(this.element.id + '_UploadInput').change(async (ev) => {
            this._dragdrop.classList.remove('show');
            await this.uploadFile(ev.target.files);
        });

        this._foldertree = new WNTree(this._folders);
        this._foldertree.selectionChanged = async (t, n) => {
            await this.getFiles(n.value);
            if (WNCheckReadOnlyDisabled(this.element)) return;
            this.selectionChanged?.(this);

        };

        let tc = document.createElement('div');
        tc.className = "toast-container toast-inline-end toast-block-end";

        this._toastdiv = document.createElement('div');
        this._toastdiv.className = "toast w-1500r";
        this._toastdiv.setAttribute("timeout", "3000");
        this._toastdiv.innerHTML = `<div class="toast-body"></div>`;

        tc.appendChild(this._toastdiv);
        this.element.appendChild(tc);

        this._toastbody = this._toastdiv.querySelector(".toast-body") as HTMLDivElement;
        this._toast = new WNToast(this._toastdiv);

        this._preLoader = document.createElement("div");
        this._preLoader.className = 'preloader hide';
        this._preLoader.innerHTML = `<div class="loader">
    <div class="spinner">
        <div class="p-be-50r">
            <div class="indicator indicator-effect-grow red-800-cb-i s-xs"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-10 red-500-cb-i s-s"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-20 red-100-cb-i s-m"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-30 red-500-cb-i s-s"></div>
            <div class="indicator indicator-effect-grow animate-delay-start-40 red-800-cb-i s-xs"></div>
        </div>
    </div>
</div>
`;
        this.element.appendChild(this._preLoader);



    }
    private async getFolders(path: string) {
        this.preLoad(true);
        let o = { command: "getFolders", path: path };
        await Post(JSON.stringify(o), this.url).then((r) => {
            let root;
            if (path == '') {
                this._foldertree.element.innerHTML = '';
                root = this._foldertree.dataSource = [];
                root = this._foldertree.addToDataSource(null, this._lang["filelist"]["root"], '', '', '');
            }
            for (var i = 0; i < r.length; i++) {
                let it = r[i].split('/');
                if (it.length == 1) {
                    this._foldertree.addToDataSource(root, r[i], '', r[i], '');
                }
                else {
                    let v = it.pop();
                    let n = this._foldertree.findByValue(it.join('/'));
                    this._foldertree.addToDataSource(n, v, '', r[i], '');
                }
            }
        }).catch((e) => {
            this.showMessage("errorcommand", "error");
            console.log(e);
        });
        this.preLoad(false);
    }
    private async getFiles(path: string) {
        if (this._foldersAddress != null) {
            let addr = '';
            path.split('/').forEach((x) => addr += `<li>${x}</li>`)
            this._foldersAddress.innerHTML = addr;
        }
        this.preLoad(true);
        let o = { command: "getFiles", path: path };
        await Post(JSON.stringify(o), this.url).then((r) => {
            this._files.tBodies[0].innerHTML = '';

            for (var i = 0; i < r.length; i++) {
                let className = '';
                let tr = document.createElement('tr');
                let ext: string = r[i].ext.toString() ?? '';

                className = WNFileList._classExt.find((x) => x.ext.includes(ext))?.className;

                tr.innerHTML = `<td><input type="checkbox" value='${r[i].fileName}'/></td><td class='${className}'>${r[i].fileName}</td><td>${r[i].ext}</td><td>${r[i].size}</td><td>${this._date.convert(new Date(r[i].date), 'shortdatetime')}</td>`;
                let checkbox = tr.querySelector('input[type=checkbox]') as HTMLInputElement;
                checkbox.addEventListener("change", () => {
                    this.selectionChanged?.(this);
                });

                tr.addEventListener('click', (t) => {
                    let tr = t.target as HTMLElement;
                    while (tr.nodeName != 'TR')
                        tr = tr.parentElement;
                    let checkbox = tr.querySelector('input[type=checkbox]') as HTMLInputElement;
                    let checked = checkbox?.checked;
                    if (!this.multiSelect) {
                        let tbody = tr.parentElement;
                        while (tbody.nodeName != 'TBODY')
                            tbody = tbody.parentElement;
                        tbody.querySelectorAll('input[type=checkbox]').forEach((x: HTMLInputElement) => x.checked = false);
                    }
                    checkbox.checked = !checked;
                    this.selectionChanged?.(this);
                })

                tr.addEventListener('dblclick', (t) => {
                    this._files.tBodies[0].querySelectorAll("input[type=checkbox]").forEach((x) => (<HTMLInputElement>x).checked = false);


                    let el = (<HTMLElement>t.target);
                    if (el.nodeName == 'INPUT')
                        return;

                    while (el.nodeName != 'TR')
                        el = el.parentElement;


                    let checkbox = el.querySelector('input[type=checkbox]') as HTMLInputElement;
                    if (checkbox != null)
                        checkbox.checked = true;

                    this.selectionChanged?.(this);
                    this.dblClick?.(this);
                });

                this._files.tBodies[0].appendChild(tr);
            }
        }).catch((e) => {
            this.showMessage("errorcommand", "error");
            console.log(e);
        });
        this.preLoad(false);
    }
    private async newFolder(t: HTMLElement): Promise<boolean> {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;

        this.preLoad(true);

        let path = this._foldertree.selectedItem?.value ?? '';


        let o = { command: "createfolder", path: path + '/' + value };
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r = true) {
                await this.getFolders("");
                this._foldertree.collapsedAll();
                path = path + '/' + value;
                path = WNTrim(path, '/');
                this._foldertree.expandToParent(this._foldertree.findByValue(path, true));
                this.showMessage("foldercreated", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    private async rename(t: HTMLElement): Promise<boolean> {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;
        this.preLoad(true);

        let files = this.selectedItems;

        let oldName = (files.path + '/' + (files.files[0] ?? ''));
        if (oldName.endsWith('/'))
            oldName = oldName.substring(0, oldName.length - 1);
        let newfileName = oldName;
        if (newfileName.lastIndexOf('/') == -1)
            newfileName = value;
        else
            newfileName = newfileName.substring(0, newfileName.lastIndexOf('/') + 1) + value;


        let o = { command: "rename", source: oldName, destination: newfileName }
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r = true) {
                if (files.path == oldName) {
                    await this.getFolders('');
                    this._foldertree.collapsedAll();
                    newfileName = WNTrimStart(newfileName, '/');
                    this._foldertree.expandToParent(this._foldertree.findByValue(newfileName, true));
                }
                else {
                    this.getFiles(files.path);
                }
                this.showMessage("renamed", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        }).catch(() => this.showMessage("errorcommand", "error"));
        this.preLoad(false);
        return ret;
    }
    private async delete(): Promise<boolean> {
        let files = this.selectedItems;
        this.preLoad(true);
        let items = files.files;
        if (items.length == 0)
            items.push(files.path);
        else
            for (var i = 0; i < items.length; i++) items[i] = files.path + '/' + items[i];

        let o = { command: "delete", source: items.join('\n') }
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r = true) {
                if (files.path == items[0]) {
                    let s = this.selectedFolder;
                    await this.getFolders('');
                    this._foldertree.collapsedAll();
                    let o = this._foldertree.findByValue(s, true);
                    while (o == null) {
                        let t = s.split('/');
                        t.pop();
                        s = t.join('/');
                        o = this._foldertree.findByValue(s, true);
                    }
                    if (o != null)
                        this._foldertree.expandToParent(o);
                }
                else {
                    this.getFiles(files.path);
                }
                this.showMessage("deleted", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    private async paste(): Promise<boolean> {
        if (WNFileList._clipboard.length < 2)
            return false;
        this.preLoad(true);
        let cmd = 'copy';
        if (WNFileList._clipboard[0] == 'cut')
            cmd = 'move';

        let src = [];
        let dst = this._foldertree.selectedItem.value;
        for (var i = 1; i < WNFileList._clipboard.length; i++)
            src.push(WNFileList._clipboard[i]);


        let o = { command: cmd, source: src.join('\n'), destination: dst }
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r == true) {
                await this.getFolders('');
                this._foldertree.collapsedAll();
                this._foldertree.expandToParent(this._foldertree.findByValue(dst, true));
                this.showMessage("pasted", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    private async uploadFile(files) {
        this.preLoad(true);
        await upload(files, this._foldertree.selectedItem?.value ?? '', this.url).then(async (r) => {
            if (r == true) {
                await this.getFiles(this._foldertree.selectedItem?.value ?? '');
                this.showMessage("uploaded", "success");
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
    }
    private async download() {
        let files = this.selectedFiles;
        let filesName = this.selectedItems;
        if (files.length == 0)
            return;
        this.preLoad(true);
        for (var i = 0; i < files.length; i++) {
            await getFile(files[i], this.url).then(async (r) => {
                if (r) {
                    var a = document.createElement("a");
                    a.href = r;
                    a.download = filesName.files[i];
                    a.click();
                    window.URL.revokeObjectURL(r);
                }
            });
        }
        this.preLoad(false);
        return;

    }

    private async compress(t: HTMLElement): Promise<boolean> {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;

        let files = this.selectedItems;
        this.preLoad(true);
        let items = files.files;
        if (items.length == 0)
            return false;

        let o = { command: "compress", sourcePath: files.path, source: items.join('\n'), destination: value }
        let ret = false;
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r == true) {
                this.getFiles(files.path);
                this.showMessage("compressed", "success");
                ret = true;
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return ret;
    }
    private async decompress(): Promise<boolean> {
        let files = this.selectedItems;
        let items = files.files;
        if (items.length == 0)
            return false;
        this.preLoad(true);
        for (var i = 0; i < files.files.length; i++)
            files.files[i] = WNTrim(files.path + '/' + files.files[i], '/');

        let o = { command: "decompress", source: items.join('\n') }
        await Post(JSON.stringify(o), this.url).then(async (r) => {
            if (r == true) {
                await this.getFolders('');
                this._foldertree.collapsedAll();
                files.path = WNTrimStart(files.path, '/');
                this._foldertree.expandToParent(this._foldertree.findByValue(files.path, true));
                this.showMessage("decompressed", "success");
            }
            else {
                this.showMessage("errorcommand", "error");
            }
        });
        this.preLoad(false);
        return true;
    }
    private showMessage(MessageId: string, className: string) {
        this.preLoad(false);
        this._toastbody.className = "toast-body " + className;
        this._toastbody.innerHTML = this._lang["filelist"][MessageId];
        this._toast.show();
    }
    private WaitpreLoad: boolean = false;
    private preLoad(show: boolean): void {
        if (show) {
            this.WaitpreLoad = true;
            setTimeout(() => {
                if (this.WaitpreLoad)
                    this._preLoader.classList.remove('hide');
            }, 500);
        }
        else {
            this._preLoader.classList.add('hide');
            this.WaitpreLoad = false;
        }
    }

    get selectedItems(): { path, files } {
        let path = this.basepath + this._foldertree.selectedItem.value;
        let files: string[] = [];
        this._files.tBodies[0].querySelectorAll(':checked').forEach((x: HTMLInputElement) => {
            files.push(x.value);
        });
        return { path: path, files: files };
    }

    public get selectedFiles(): string[] {
        let ret = [];
        let files = this.selectedItems;
        files.files.forEach((x) => ret.push(WNTrim(files.path + '/' + x, '/')));
        return ret;
    }
    public set selectedFiles(value: string[]) {
        if (value.length < 1 || value[0] == '')
            return;
        let steps = value[0].split('/');
        steps.pop();
        let path = WNTrimStart(steps.join('/'), '/');
        this._foldertree.expandToParent(this._foldertree.findByValue(path, true));
        this.getFiles(path).finally(() => {
            for (var i = 0; i < value.length; i++) {
                steps = value[i].split('/');
                let file = steps.pop();
                let elem = this._files.tBodies[0].querySelector(`input[value='${file}']`) as HTMLInputElement;
                if (elem != null)
                    elem.checked = true;
            }
        });
    }
    set selectedFolder(value: string) {
        this._foldertree.findByValue(value, true);
    }
    get selectedFolder(): string {
        return this.basepath + this._foldertree.selectedItem.value;
    }
}
