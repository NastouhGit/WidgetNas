let WNfilelistclipboard: string[] = [];

class wnfilelist {
    element: HTMLElement;
    selectionchange: any;
    dblclickitem: any;

    private _mode: string = "select";
    private _Url: string = "api/FileList";

    private _head: HTMLDivElement;
    private _foldersAddress: HTMLOListElement;
    private _body: HTMLDivElement;
    private _divfolders: HTMLDivElement;
    private _divfiles: HTMLDivElement;
    private _folders: HTMLUListElement;
    private _files: HTMLTableElement;
    private _dragdrop: HTMLDivElement;
    private _preloader: HTMLDivElement;
    private _toastdiv: HTMLDivElement;
    private _toastbody: HTMLDivElement;
    private _foldertree: wntree;
    private _toast: wntoast;
    private _lang: any;

    private _date: wnDate = new wnDate();


    private _ExtCompress = [
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

    ];
    private _ExtAudio = ['.3gp',
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
    ];
    private _ExtExcel = [
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
    ];
    private _ExtWord = ['.doc',
        '.docm',
        '.docx',
        '.dot',
        '.dotm',
        '.dotx',
        '.rtf',
        '.txt',
        '.wps',
    ];
    private _ExtPowerPoint = ['.pot',
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
    ];
    private _ExtImage = [
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
    ];
    private _ExtPdf = ['.pdf']
    private _ExtVideo = ['.webm',
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
    ];
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLFormElement;
            this.Init();
        }
    }
    private async Init() {
        if (this.element.hasAttribute('calendar'))
            this._date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')() as wnCalendar;
        if (this.element.hasAttribute('cultureinfo'))
            this._date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')() as wnCultureInfo;

        if (this.element.hasAttribute('onselectionchange'))
            this.selectionchange = WNGenerateFunction(this.element.getAttribute('onselectionchange'), 't');
        if (this.element.hasAttribute('ondblclickitem'))
            this.dblclickitem = WNGenerateFunction(this.element.getAttribute('ondblclickitem'), 't');

        this._lang = WNlang[this._date.CultureInfo.TwoLetterISOLanguageName];

        if (!this.element.classList.contains('filelist'))
            this.element.classList.add('filelist')
        this._mode = this.element.getAttribute('mode').toLowerCase() ?? 'select';

        this._head = this.element.querySelector('.head') as HTMLDivElement;
        if (this._head == null)
            this.AddHead();

        this._body = this.element.querySelector('.body') as HTMLDivElement;
        if (this._body == null)
            this.AddBody();

        this._divfolders = this.element.querySelector('.folders') as HTMLDivElement;
        this._divfiles = this.element.querySelector('.files') as HTMLDivElement;

        this._Url = WNparseString(this.element.getAttribute('url'), this._Url);
        await this.GetFolders("");
        this._foldertree.collapsedall();
        this._foldertree.expand(this._foldertree.findbyvalue('\\'));

    }
    AddHead() {

        this._head = document.createElement('div');
        this._head.className = 'head';

        let toolbar = document.createElement('div');
        toolbar.className = "toolbar";

        let refresh = document.createElement('button');
        refresh.title = this._lang["filelist"]["refresh"];
        refresh.className = "refresh";
        refresh.addEventListener("click", () => {
            this.GetFolders("");
        });
        toolbar.appendChild(refresh);

        if (this._mode == 'full') {

            let g1 = document.createElement('div');
            g1.className = "button-group";

            let newfolder = document.createElement('button');
            newfolder.title = this._lang["filelist"]["newfolder"];
            newfolder.className = "newfolder";
            newfolder.addEventListener("click", () => {
                let d = new wnconfirm();
                d.title = this._lang["filelist"]["newfolder"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["newfolder"], class: 'success',
                        click: async (t) => {
                            return await this.NewFolder(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });

            g1.appendChild(newfolder);

            let _Rename = document.createElement('button');
            _Rename.title = this._lang["filelist"]["rename"];
            _Rename.className = "rename";
            _Rename.addEventListener("click", () => {
                let value = '';
                let files = this.GetSelectedItems();
                if (files.files.length > 0)
                    value = files.files[0];
                else
                    value = files.path ?? '';
                if (value == '' || value == '\\')
                    return;

                let d = new wnconfirm();
                d.title = this._lang["filelist"]["rename"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr' value='${value}'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["rename"], class: 'success',
                        click: async (t) => {
                            return await this.Rename(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });

            g1.appendChild(_Rename);

            let _Delete = document.createElement('button');
            _Delete.title = this._lang["filelist"]["delete"];
            _Delete.className = "delete";
            _Delete.addEventListener("click", () => {
                let f = this.GetSelectedItems();
                if (f.files.length == 0 && f.path == '\\')
                    return;

                let d = new wnconfirm();
                d.headclass = "danger";
                d.title = this._lang["filelist"]["delete"];
                if (f.files.length > 0)
                    d.body = this._lang["filelist"]["deletefiles"] + '<br/>' + f.files.length.toString() + ' ' + this._lang["filelist"]["files"];
                else
                    d.body = this._lang["filelist"]["deletefolder"] + '<br/><span class="ltr">' + f.path + "</span>";

                d.buttons = [
                    {
                        caption: this._lang["common"]["ok"], class: 'error',
                        click: async () => {
                            return await this.Delete();
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });

            g1.appendChild(_Delete);
            toolbar.appendChild(g1);

            let g2 = document.createElement('div');
            g2.className = "button-group";

            let _Copy = document.createElement('button');
            _Copy.title = this._lang["filelist"]["copy"];
            _Copy.className = "copy";
            _Copy.addEventListener("click", () => {
                WNfilelistclipboard = ['copy'];

                let f = this.GetSelectedItems();

                if (f.files.length > 0)
                    f.files.forEach((x) => WNfilelistclipboard.push(WNTrim(f.path + '\\' + x, '\\')));
                else
                    WNfilelistclipboard.push(f.path);
                this.ShowMessage("clipboarded", "success");
            });
            g2.appendChild(_Copy);

            let _Cut = document.createElement('button');
            _Cut.title = this._lang["filelist"]["cut"];
            _Cut.className = "cut";
            _Cut.addEventListener("click", () => {
                WNfilelistclipboard = ['cut'];

                let f = this.GetSelectedItems();

                if (f.files.length > 0)
                    f.files.forEach((x) => WNfilelistclipboard.push(WNTrim(f.path + '\\' + x, '\\')));
                else
                    WNfilelistclipboard.push(f.path);
                this.ShowMessage("clipboarded", "success");
            });
            g2.appendChild(_Cut);

            let _Paste = document.createElement('button');
            _Paste.title = this._lang["filelist"]["paste"];
            _Paste.className = "paste";
            _Paste.addEventListener("click", () => {
                return this.Paste();
            });

            g2.appendChild(_Paste);
            toolbar.appendChild(g2);

            let g3 = document.createElement('div');
            g3.className = "button-group";

            let _Upload = document.createElement('button');
            _Upload.title = this._lang["filelist"]["upload"];
            _Upload.className = "upload";
            _Upload.addEventListener("click", () => {
                if (this._foldertree.currentvalue == undefined)
                    return;
                this._dragdrop.classList.add('show');
            });
            g3.appendChild(_Upload);

            let _Download = document.createElement('button');
            _Download.title = this._lang["filelist"]["download"];
            _Download.className = "download";
            _Download.addEventListener("click", () => {
                this.Download();
            });
            g3.appendChild(_Download);

            let _Compress = document.createElement('button');
            _Compress.title = this._lang["filelist"]["compress"];
            _Compress.className = "compress";
            _Compress.addEventListener("click", () => {
                let d = new wnconfirm();
                d.title = this._lang["filelist"]["compress"];
                d.body = `<ig class='floating'><input placeholder='.' class='ltr'/><label>${this._lang["filelist"]["name"]}</label></ig>`;
                d.buttons = [
                    {
                        caption: this._lang["filelist"]["compress"], class: 'success',
                        click: async (t) => {
                            return await this.Compress(t.element);
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });
            g3.appendChild(_Compress);

            let _Decompress = document.createElement('button');
            _Decompress.title = this._lang["filelist"]["decompress"];
            _Decompress.className = "decompress";
            _Decompress.addEventListener("click", () => {
                let f = this.GetSelectedItems();
                if (f.files.length == 0 && f.path == '\\')
                    return;

                let d = new wnconfirm();
                d.headclass = "danger";
                d.title = this._lang["filelist"]["decompress"];
                d.body = this._lang["filelist"]["decompressmessage"];

                d.buttons = [
                    {
                        caption: this._lang["common"]["ok"], class: 'error',
                        click: async () => {
                            return await this.Decompress();
                        }
                    },
                    { caption: this._lang["common"]["cancel"] },
                ]
                d.show();
            });
            g3.appendChild(_Decompress);
            toolbar.appendChild(g3);

        }
        this._head.appendChild(toolbar);

        this._foldersAddress = document.createElement('ol');
        this._foldersAddress.className = "breadcrumb address ltr";
        this._head.appendChild(this._foldersAddress);

        this.element.appendChild(this._head);
    }

    AddBody() {
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
            let th = t.target as HTMLInputElement;
            this._files.tBodies[0].querySelectorAll("input[type=checkbox]").forEach((x) => (<HTMLInputElement>x).checked = th.checked);
            if (this.selectionchange != null)
                this.selectionchange(this);

        });

        this._divfiles.appendChild(this._files);
        this._body.appendChild(this._divfiles);

        this._dragdrop = document.createElement('div');
        this._dragdrop.className = "dropfile";
        this._dragdrop.innerHTML = `</button><div class="filearea"><label for='${this.element.id}_UploadInput'>${this._lang["filelist"]["upload"]}</lable><input id='${this.element.id}_UploadInput' class='d-none' type="file" multiple="true" class="s-m opacity-100"/><hr/><div>${this._lang["filelist"]["drophere"]}</div></div>`;
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

                await this.UploadFile(files);
            } else {
                await this.UploadFile(ev.dataTransfer.files[i]);
            }
        });

        this.element.appendChild(this._body);

        WNE(this.element.id + '_UploadInput').Change(async (ev) => {
            this._dragdrop.classList.remove('show');
            await this.UploadFile(ev.target.files);
        });

        this._foldertree = new wntree(this._folders);
        this._foldertree.selectionchange = async (t, n) => {
            await this.GetFiles(n.getAttribute('wn-tree-value'));
            if (this.selectionchange != null)
                this.selectionchange(this);

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
        this._toast = new wntoast(this._toastdiv);

        this._preloader = document.createElement("div");
        this._preloader.className = 'preloader hide';
        this._preloader.innerHTML = `
<div class="loader">
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
        this.element.appendChild(this._preloader);



    }
    async GetFolders(path: string) {
        this.PreLoad(true);
        let o = { command: "getfolders", path: path };
        await Post(JSON.stringify(o), this._Url).then((r) => {
            if (path == '') {
                this._foldertree.element.innerHTML = '';
                this._foldertree.addrow('', 'item', this._lang["filelist"]["root"], '\\', '');
            }
            for (var i = 0; i < r.length; i++) {
                let it = r[i].split('\\');
                if (it.length == 1) {
                    this._foldertree.addrow('\\', 'item', r[i], r[i], '');
                }
                else {
                    let v = it.pop();
                    this._foldertree.addrow(it.join('\\'), 'item', v, r[i], '');
                }
            }
        }).catch((e) => {
            this.ShowMessage("errorcommand", "error");
            console.log(e);
        });
        this.PreLoad(false);
    }
    async GetFiles(path: string) {
        if (this._foldersAddress != null) {
            let addr = '';
            path.split('\\').forEach((x) => addr += `<li>${x}</li>`)
            this._foldersAddress.innerHTML = addr;
        }
        this.PreLoad(true);
        let o = { command: "getfiles", path: path };
        await Post(JSON.stringify(o), this._Url).then((r) => {
            this._files.tBodies[0].innerHTML = '';

            for (var i = 0; i < r.length; i++) {
                let className = '';
                let tr = document.createElement('tr');
                if (this._ExtCompress.includes(r[i].ext))
                    className = "compress";
                else if (this._ExtAudio.includes(r[i].ext))
                    className = "audio";
                else if (this._ExtExcel.includes(r[i].ext))
                    className = "excel";
                else if (this._ExtWord.includes(r[i].ext))
                    className = "word";
                else if (this._ExtPowerPoint.includes(r[i].ext))
                    className = "powerpoint";
                else if (this._ExtImage.includes(r[i].ext))
                    className = "image";
                else if (this._ExtPdf.includes(r[i].ext))
                    className = "pdf";
                else if (this._ExtVideo.includes(r[i].ext))
                    className = "video";
                tr.innerHTML = `<td><input type="checkbox" value='${r[i].filename}'/></td><td class='${className}'>${r[i].filename}</td><td>${r[i].ext}</td><td>${r[i].size}</td><td>${this._date.Convert(new Date(r[i].date), 'shortdatetime')}</td>`;
                let checkbox = tr.querySelector('input[type=checkbox]') as HTMLInputElement;
                checkbox.addEventListener("change", () => {
                    if (this.selectionchange != null)
                        this.selectionchange(this);
                });

                tr.addEventListener('click', (t) => {
                    let el = (<HTMLElement>t.target);
                    if (el.nodeName == 'INPUT')
                        return;

                    while (el.nodeName != 'TR')
                        el = el.parentElement;
                    let checkbox = el.querySelector('input[type=checkbox]') as HTMLInputElement;
                    if (checkbox != null)
                        checkbox.checked = !checkbox.checked;
                    if (this.selectionchange != null)
                        this.selectionchange(this);
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

                    if (this.selectionchange != null)
                        this.selectionchange(this);
                    if (this.dblclickitem != null)
                        this.dblclickitem(this);
                });

                this._files.tBodies[0].appendChild(tr);
            }
        }).catch((e) => {
            this.ShowMessage("errorcommand", "error");
            console.log(e);
        });
        this.PreLoad(false);
    }
    async NewFolder(t: HTMLElement): Promise<boolean> {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;

        this.PreLoad(true);

        let path = this._foldertree.currentvalue ?? '';

        let o = { command: "createfolder", path: path + '\\' + value };
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r) {
                await this.GetFolders("");
                path = path + '\\' + value;
                path = WNTrim(path, '\\');
                this._foldertree.findbyvalue(path, true);
                this.ShowMessage("foldercreated", "success");
                ret = true;
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        });
        this.PreLoad(false);
        return ret;
    }
    async Rename(t: HTMLElement): Promise<boolean> {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;
        this.PreLoad(true);

        let files = this.GetSelectedItems();

        let oldName = (files.path + '\\' + (files.files[0] ?? ''));
        if (oldName.endsWith('\\'))
            oldName = oldName.substr(0, oldName.length - 1);
        let newfileName = oldName;
        if (newfileName.lastIndexOf('\\') == -1)
            newfileName = value;
        else
            newfileName = newfileName.substr(0, newfileName.lastIndexOf('\\') + 1) + value;


        let o = { command: "rename", source: oldName, destination: newfileName }
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r) {
                if (files.path == oldName) {
                    await this.GetFolders('');
                    this._foldertree.findbyvalue(newfileName, true);
                }
                else {
                    this.GetFiles(files.path);
                }
                this.ShowMessage("renamed", "success");
                ret = true;
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        }).catch(() => this.ShowMessage("errorcommand", "error"));
        this.PreLoad(false);
        return ret;
    }
    async Delete(): Promise<boolean> {
        let files = this.GetSelectedItems();
        this.PreLoad(true);
        let items = files.files;
        if (items.length == 0)
            items.push(files.path);
        else
            for (var i = 0; i < items.length; i++) items[i] = files.path + '\\' + items[i];

        let o = { command: "delete", source: items.join('\n') }
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r) {
                if (files.path == items[0]) {
                    await this.GetFolders('');
                }
                else {
                    this.GetFiles(files.path);
                }
                this.ShowMessage("deleted", "success");
                ret = true;
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        });
        this.PreLoad(false);
        return ret;
    }
    async Paste(): Promise<boolean> {
        if (WNfilelistclipboard.length < 2)
            return false;
        this.PreLoad(true);
        let cmd = 'copy';
        if (WNfilelistclipboard[0] == 'cut')
            cmd = 'move';

        let src = [];
        let dst = this._foldertree.currentvalue;
        for (var i = 1; i < WNfilelistclipboard.length; i++)
            src.push(WNfilelistclipboard[i]);


        let o = { command: cmd, source: src.join('\n'), destination: dst }
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r) {
                await this.GetFolders('');
                this._foldertree.findbyvalue(dst, true);
                this.ShowMessage("pasted", "success");
                ret = true;
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        });
        this.PreLoad(false);
        return ret;
    }
    async UploadFile(files) {
        this.PreLoad(true);
        await Upload(files, this._foldertree.currentvalue, this._Url).then(async (r) => {
            if (r) {
                await this.GetFiles(this._foldertree.currentvalue);
                this.ShowMessage("uploaded", "success");
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        });
        this.PreLoad(false);
    }
    async Download() {
        let files = this.GetSelectedFiles();
        let filesName = this.GetSelectedItems();
        if (files.length == 0)
            return;
        this.PreLoad(true);
        for (var i = 0; i < files.length; i++) {
            await GetFile(files[i], this._Url).then(async (r) => {
                if (r) {
                    var a = document.createElement("a");
                    a.href = r;
                    a.download = filesName.files[i];
                    a.click();
                    window.URL.revokeObjectURL(r);
                }
            });
        }
        this.PreLoad(false);
        return;

    }

    async Compress(t: HTMLElement): Promise<boolean> {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;

        let files = this.GetSelectedItems();
        this.PreLoad(true);
        let items = files.files;
        if (items.length == 0)
            return false;

        let o = { command: "compress", source: items.join('\n'), destination: value }
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r) {
                this.GetFiles(files.path);
                this.ShowMessage("compressed", "success");
                ret = true;
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        });
        this.PreLoad(false);
        return ret;
    }
    async Decompress(): Promise<boolean> {
        let files = this.GetSelectedItems();
        this.PreLoad(true);
        let items = files.files;
        if (items.length == 0)
            return false;
        for (var i = 0; i < files.files.length; i++)
            files.files[i] = WNTrim(files.path + '\\' + files.files[i], '\\');

        let o = { command: "decompress", source: items.join('\n') }
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r) {
                this.GetFolders('');
                this._foldertree.findbyvalue(files.path, true);

                this.ShowMessage("decompressed", "success");
                ret = true;
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        });
        this.PreLoad(false);
        return ret;
    }
    ShowMessage(MessageId: string, className: string) {
        this.PreLoad(false);
        this._toastbody.className = "toast-body " + className;
        this._toastbody.innerHTML = this._lang["filelist"][MessageId];
        this._toast.show();
    }
    GetSelectedItems() {
        let path = this._foldertree.currentvalue;
        let files: string[] = [];
        this._files.tBodies[0].querySelectorAll(':checked').forEach((x: HTMLInputElement) => {
            files.push(x.value);
        });
        return { path: path, files: files };
    }

    private WaitPreLoad: boolean = false;
    PreLoad(show: boolean): void {
        if (show) {
            this.WaitPreLoad = true;
            setTimeout(() => {
                if (this.WaitPreLoad)
                    this._preloader.classList.remove('hide');
            }, 500);
        }
        else {
            this._preloader.classList.add('hide');
            this.WaitPreLoad = false;
        }
    }

    GetSelectedFiles(): string[] {
        let ret = [];
        let files = this.GetSelectedItems();
        files.files.forEach((x) => ret.push(WNTrim(files.path + '\\' + x, '\\')));
        return ret;
    }
    GetSelectedFolder(): string {
        let files = this.GetSelectedItems();
        return files.path;
    }
}
