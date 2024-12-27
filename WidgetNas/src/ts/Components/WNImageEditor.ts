class WNImageEditor implements IWNImageEditor {
    public readonly nameType: string = 'WNImageEditor';
    public element: HTMLCanvasElement;

    private _Image: HTMLImageElement;
    //private context: CanvasRenderingContext2D;
    private tmpImage: HTMLCanvasElement;
    private tmpContext: CanvasRenderingContext2D;

    private isDown = false;
    private startX = 0;
    private startY = 0;
    private offsetX = 0;
    private offsetY = 0;

    private canScale = true;
    private canPan = true;

    private _scale = 1;
    private _rotate = 0;
    private _flip = 0;
    private _filter = '';
    private _mask = '';
    private _anchor = false;
    private _anchorRec = { x: 0, y: 0, w: 0, h: 0 };
    private _anchorBoxSize = 8;
    private _anchorBox = {
        xy1: { x: 0, y: 0 },
        y1: { x: 0, y: 0 },
        xy2: { x: 0, y: 0 },
        x1: { x: 0, y: 0 },
        x2: { x: 0, y: 0 },
        xy3: { x: 0, y: 0 },
        y2: { x: 0, y: 0 },
        xy4: { x: 0, y: 0 }
    };
    private _anchorSizeMode = '';
    private _anchorIsDown = false;

    private isActive = false;
    public x: number = undefined;
    public y: number = undefined;

    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            if (elem.tagName != 'CANVAS') return;
            this.element = elem as HTMLCanvasElement;
            this.element.style.cursor = 'grab';


            this.Init();

        }
    }
    private async Init() {
        this.element.onmouseenter = () => this.isActive = true;
        this.element.onmouseleave = () => this.isActive = false;
        if (this.element.hasAttribute('scale')) {
            if (this.element.getAttribute('scale') == 'false')
                this.canScale = false;
            else
                this.scale = WNparseFloat(this.element.getAttribute('scale'), this.scale);
        }
        if (this.element.hasAttribute('rotate')) {
            this.rotate = WNparseFloat(this.element.getAttribute('rotate'), this.rotate);
        }
        if (this.element.hasAttribute('flip')) {
            this.flip = WNparseFloat(this.element.getAttribute('flip'), this.flip);
        }

        if (this.element.hasAttribute('pan')) this.canPan = WNparseBoolean(this.element.getAttribute('pan'), true);
        if (this.element.hasAttribute('mask')) this.mask = this.element.getAttribute('mask');
        if (this.element.hasAttribute('filter')) this.filter = this.element.getAttribute('filter');

        if (this.element.hasAttribute('src')) {
            this.load(this.element.getAttribute('src'));
        }
        this.element.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.mousedown(e.touches[0].clientX, e.touches[0].clientY);
        });
        this.element.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.stopPropagation();

            this.mousedown(e.clientX, e.clientY);
        });

        this.element.addEventListener("touchend", (e) => { this.mouseup(e); });
        this.element.addEventListener("touchcancel", (e) => { this.mouseup(e); });
        this.element.addEventListener("mouseup", (e) => this.mouseup(e));
        this.element.addEventListener("mouseout", (e) => this.mouseup(e));

        this.element.addEventListener("touchmove", (e: TouchEvent) => {
            e.preventDefault();
            let [x, y] = this.translateMouse(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
            this.checkAnchor(x, y);
            this.checkPan(x, y);
        });
        this.element.addEventListener("mousemove", (e) => {
            e.preventDefault();
            e.stopPropagation();
            let [x, y] = this.translateMouse(e.clientX, e.clientY);
            this.checkAnchor(x, y);
            this.checkPan(x, y);
        });

        document.addEventListener("paste", (e: ClipboardEvent) => {
            if (!this.isActive) return;
            var items = (e.clipboardData).items;
            for (let i = 0; i < items.length; i++) {
                var item = items[i];
                if (item.kind === 'file') {
                    var blob = item.getAsFile();
                    var reader = new FileReader();
                    let imgedit = this;
                    reader.onload = function (event) {
                        imgedit.load(event.target.result.toString())
                    };
                    reader.readAsDataURL(blob);
                }
            }
        });

        if (this.canScale == true) {

            this.element.addEventListener("gesturechange", (e: any) => {
                e.preventDefault();
                e.stopPropagation();
                if (this._anchor == true) return;
                this.scale += e.scale * -0.0005;

            });
            this.element.addEventListener("wheel", (e: WheelEvent) => {
                e.preventDefault();
                e.stopPropagation();
                if (this._anchor == true) return;
                this.scale += e.deltaY * -0.0005;

            });
        }




    }
    checkPan(x: number, y: number) {
        if (!this.tmpImage) return;
        if (this.canPan != true) return;
        if (this.isDown == false) return;


        this.offsetX = x - this.startX;
        this.offsetY = y - this.startY;

        if (this.x + this.offsetX + this.tmpImage.width * this.scale < this.element.width * 0.5)
            this.offsetX = -this.x - this.tmpImage.width * this.scale + this.element.width * 0.5;

        if (this.x + this.offsetX > this.element.width - this.element.width * 0.5)
            this.offsetX = (this.element.width - this.element.width * 0.5) - this.x;

        if (this.y + this.offsetY + this.tmpImage.height * this.scale < this.element.height * 0.5)
            this.offsetY = -this.y - this.tmpImage.height * this.scale + this.element.height * 0.5;

        if (this.y + this.offsetY > this.element.height - this.element.height * 0.5)
            this.offsetY = (this.element.height - this.element.height * 0.5) - this.y;

        this.refresh();
    }
    private checkAnchor(x: number, y: number) {
        if (this._anchor != true) return;

        if (this._anchorIsDown == false) {
            this.anchorSetSizeMode(x, y);

            if (this._anchorSizeMode == 'x1' || this._anchorSizeMode == 'x2')
                this.element.style.cursor = 'e-resize';
            else if (this._anchorSizeMode == 'xy1' || this._anchorSizeMode == 'xy4')
                this.element.style.cursor = 'nw-resize';
            else if (this._anchorSizeMode == 'y1' || this._anchorSizeMode == 'y2')
                this.element.style.cursor = 'n-resize';
            else if (this._anchorSizeMode == 'xy2' || this._anchorSizeMode == 'xy3')
                this.element.style.cursor = 'ne-resize';
            else if (this._anchorSizeMode == 'xy')
                this.element.style.cursor = 'move';
            else
                this.element.style.cursor = 'default';
        }
        if (this._anchorIsDown == false || this._anchorSizeMode == '') return;

        if (this._anchorSizeMode == 'x1' || this._anchorSizeMode == 'xy1' || this._anchorSizeMode == 'xy3') {
            if (this._anchorRec.w - (x - this._anchorRec.x) < this._anchorBoxSize * 2) return;
            this._anchorRec.w -= x - this._anchorRec.x;
            this._anchorRec.x = x;
        }
        if (this._anchorSizeMode == 'x2' || this._anchorSizeMode == 'xy2' || this._anchorSizeMode == 'xy4') {
            if (x - this._anchorRec.x < this._anchorBoxSize * 2) return;
            this._anchorRec.w = x - this._anchorRec.x;
        }
        if (this._anchorSizeMode == 'y1' || this._anchorSizeMode == 'xy1' || this._anchorSizeMode == 'xy2') {
            if (this._anchorRec.h - (y - this._anchorRec.y) < this._anchorBoxSize * 2) return;
            this._anchorRec.h -= y - this._anchorRec.y;
            this._anchorRec.y = y;
        }
        if (this._anchorSizeMode == 'y2' || this._anchorSizeMode == 'xy3' || this._anchorSizeMode == 'xy4') {
            if (y - this._anchorRec.y < this._anchorBoxSize * 2) return;
            this._anchorRec.h = y - this._anchorRec.y;
        }
        if (this._anchorSizeMode == 'xy') {
            this._anchorRec.x = this._anchorRec.x + x - this.startX;
            this._anchorRec.y = this._anchorRec.y + y - this.startY;
            if (this._anchorRec.x < 0) this._anchorRec.x = 0;
            if (this._anchorRec.y < 0) this._anchorRec.y = 0;
            if (this._anchorRec.x + this._anchorRec.w > this.element.width) this._anchorRec.x = this.element.width - this._anchorRec.w;
            if (this._anchorRec.y + this._anchorRec.h > this.element.height) this._anchorRec.y = this.element.height - this._anchorRec.h;
            this.startX = x;
            this.startY = y;
        }
        this.refresh();
    }
    private translateMouse(x: number, y: number) {
        let context = this.element.getContext('2d');
        let r = this.element.getBoundingClientRect();
        let scx = (context.canvas.width / r.width);
        let scy = (context.canvas.height / r.height);
        x = (x - r.left) * scx;
        y = (y - r.top) * scy;
        return [x, y];
    }
    public async load(src: string) {
        let canRefresh = false;
        await new Promise((resolve, reject) => {
            this._Image = new Image();
            this._Image.onload = () => resolve(this._Image.height)
            this._Image.onerror = reject
            this._Image.src = src;
        }).then(() => { canRefresh = true });
        if (canRefresh) {
            if (!this.tmpImage) {
                this.tmpImage = document.createElement('canvas');
            }
            this.tmpImage.width = this._Image.width * 2;
            this.tmpImage.height = this._Image.height * 2;
            this.tmpContext = this.tmpImage.getContext('2d');

            if (this.element.width / this._Image.width < this.element.height / this._Image.height)
                this.scale = this.element.width / this._Image.width;
            else
                this.scale = this.element.height / this._Image.height;
            this.x = undefined;
            this.y = undefined;
            this.refresh();
        }

    }
    private mousedown(x: number, y: number) {
        [this.startX, this.startY] = this.translateMouse(x, y);

        if (this._anchor == true) {
            this.anchorStartMouse(this.startX, this.startY);
        }
        else if (this.canPan == true) {
            this.isDown = true;
            this.element.style.cursor = 'grabbing';
        }
    }
    private mouseup(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this._anchor == true) {
            this._anchorIsDown = false;
        }
        else if (this.canPan == true) {
            this.x += this.offsetX;
            this.y += this.offsetY;
            this.offsetX = 0;
            this.offsetY = 0;
            this.isDown = false;
            this.element.style.cursor = this.canPan ? 'grab' : 'auto';

        }
        this.refresh();
    }

    public get scale() { return this._scale; }
    public set scale(value: number) {
        if (!this.canScale) return;
        value = Math.min(Math.max(0.125, value), 5)
        this._scale = value; this.refresh();
    }
   
    public get rotate() { return this._rotate; }
    public set rotate(value: number) {
        value = Math.min(Math.max(-365, value), 365)
        this._rotate = value; this.refresh();
    }

    public get flip() { return this._flip; }
    public set flip(value: number) {
        value = Math.min(Math.max(0, value), 3)
        this._flip = value; this.refresh();
    }

    public get filter() { return this._filter; }
    public set filter(value: string) {
        this._filter = value.replace(/[\r\n]*/g, "").replace(/\s+/g, " ").trim();
        this.refresh();
    }

    public get mask() { return this._mask; }
    public set mask(value: string) {
        this._mask = value;
        this.refresh();
    }

    private refresh() {
        if (!this._Image) return;
        if (!this.tmpContext) return;
        let context = this.element.getContext('2d');

        context.reset();

        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = "high";

        this.tmpContext.reset();

        this.tmpContext.setTransform(1, 0, 0, 1, 0, 0);
        this.tmpContext.clearRect(0, 0, this.tmpImage.width, this.tmpImage.height);

        this.tmpContext.translate(this._Image.width, this._Image.height);
        if (this.rotate != 0) {
            this.tmpContext.rotate(this.rotate * Math.PI / 180);
        }

        if (this.flip == 1) {
            this.tmpContext.scale(-1, 1);
        }
        else if (this.flip == 2) {
            this.tmpContext.scale(1, -1);
        }
        else if (this.flip == 3) {
            this.tmpContext.scale(-1, -1);
        }

        this.tmpContext.filter = this.filter;
        this.tmpContext.drawImage(this._Image, -this._Image.width / 2, -this._Image.height / 2);

        let imageWidth = this._Image.width * this.scale * 2;
        let imageHeight = this._Image.height * this.scale * 2;

        if (!this.x) this.x = (this.element.width - imageWidth) / 2;
        if (!this.y) this.y = (this.element.height - imageHeight) / 2;
        context.clearRect(0, 0, this.element.width, this.element.height);
        context.drawImage(this.tmpImage, this.x + this.offsetX, this.y + this.offsetY, imageWidth, imageHeight);

        context.save();
        if (this.mask != '') {
            let mp = this.mask.split(',');
            context.globalAlpha = 0.5;
            context.fillStyle = '#000';
            context.fillRect(0, 0, this.element.width, this.element.height);
            context.globalAlpha = 1;
            context.beginPath();
            if (mp[0].trim().toLowerCase() == 'circle')
                context.arc(this.element.width / 2, this.element.height / 2, WNparseNumber(mp[1], 32), 0, 2 * Math.PI, false);
            else if (mp[0].trim().toLowerCase() == 'rect') {
                if (mp.length == 2)
                    mp.push(mp[1]);
                let w = WNparseNumber(mp[1], 32);
                let h = WNparseNumber(mp[2], 32);
                context.rect(this.element.width / 2 - w / 2, this.element.height / 2 - h / 2, w, h);
            }
            context.clip();
        }
        context.drawImage(this.tmpImage, this.x + this.offsetX, this.y + this.offsetY, imageWidth, imageHeight);
        context.restore();

        this.tmpContext.setTransform(1, 0, 0, 1, 0, 0);


        if (this._anchor == true) {
            this._anchorBox = {
                xy1: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2,
                    y: this._anchorRec.y - this._anchorBoxSize / 2
                },
                y1: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2 + this._anchorRec.w / 2,
                    y: this._anchorRec.y - this._anchorBoxSize / 2
                },
                xy2: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2 + this._anchorRec.w,
                    y: this._anchorRec.y - this._anchorBoxSize / 2
                },
                x1: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2,
                    y: this._anchorRec.y - this._anchorBoxSize / 2 + this._anchorRec.h / 2
                },
                x2: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2 + this._anchorRec.w,
                    y: this._anchorRec.y - this._anchorBoxSize / 2 + this._anchorRec.h / 2
                },
                xy3: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2,
                    y: this._anchorRec.y - this._anchorBoxSize / 2 + this._anchorRec.h
                },
                y2: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2 + this._anchorRec.w / 2,
                    y: this._anchorRec.y - this._anchorBoxSize / 2 + this._anchorRec.h
                },
                xy4: {
                    x: this._anchorRec.x - this._anchorBoxSize / 2 + this._anchorRec.w,
                    y: this._anchorRec.y - this._anchorBoxSize / 2 + this._anchorRec.h
                }
            }

            context.beginPath();
            context.strokeStyle = "#fff";
            context.setLineDash([]);
            context.rect(this._anchorRec.x, this._anchorRec.y, this._anchorRec.w, this._anchorRec.h);
            context.stroke();

            context.beginPath();
            context.strokeStyle = "#000";
            context.setLineDash([5, 5]);
            context.rect(this._anchorRec.x, this._anchorRec.y, this._anchorRec.w, this._anchorRec.h);
            context.stroke();

            context.beginPath();
            context.setLineDash([]);
            context.rect(this._anchorBox.xy1.x, this._anchorBox.xy1.y, this._anchorBoxSize, this._anchorBoxSize);
            context.rect(this._anchorBox.y1.x, this._anchorBox.y1.y, this._anchorBoxSize, this._anchorBoxSize);
            context.rect(this._anchorBox.xy2.x, this._anchorBox.xy2.y, this._anchorBoxSize, this._anchorBoxSize);
            context.rect(this._anchorBox.x1.x, this._anchorBox.x1.y, this._anchorBoxSize, this._anchorBoxSize);
            context.rect(this._anchorBox.x2.x, this._anchorBox.x2.y, this._anchorBoxSize, this._anchorBoxSize);
            context.rect(this._anchorBox.xy3.x, this._anchorBox.xy3.y, this._anchorBoxSize, this._anchorBoxSize);
            context.rect(this._anchorBox.y2.x, this._anchorBox.y2.y, this._anchorBoxSize, this._anchorBoxSize);
            context.rect(this._anchorBox.xy4.x, this._anchorBox.xy4.y, this._anchorBoxSize, this._anchorBoxSize);

            context.stroke();
        }
    }
    public anchorStart() {
        this._anchor = true;
        this._anchorRec = { x: this.element.width * 0.1, y: this.element.height * 0.1, w: this.element.width - this.element.width * 0.2, h: this.element.height - this.element.height * 0.2 };
        this.element.style.cursor = 'auto';
        this.refresh();
    }
    public anchorStop() {
        this._anchor = false;
        this.element.style.cursor = this.canPan ? 'grab' : 'auto';
        this.refresh();
    }
    private anchorStartMouse(x: number, y: number): void {
        this.anchorSetSizeMode(x, y);
        this._anchorIsDown = true;
        this.refresh();
    }
    private anchorSetSizeMode(x: number, y: number): void {
        this._anchorSizeMode = '';
        let y1 = this._anchorBox.y1.y - this._anchorBoxSize / 2;
        let y2 = this._anchorBox.y2.y - this._anchorBoxSize / 2;
        let x1 = this._anchorBox.x1.x - this._anchorBoxSize / 2;
        let x2 = this._anchorBox.x2.x - this._anchorBoxSize / 2;

        let y1e = y1 + this._anchorBoxSize * 2;
        let y2e = y2 + this._anchorBoxSize * 2;
        let x1e = x1 + this._anchorBoxSize * 2;
        let x2e = x2 + this._anchorBoxSize * 2;

        if (y >= y1 && y <= y1e && x >= x1 && x <= x2e) {
            this._anchorSizeMode = 'y1';
        }
        else if (y >= y2 && y <= y2e && x >= x1 && x <= x2e) {
            this._anchorSizeMode = 'y2';
        }

        if (x >= x1 && x <= x1e) {
            if (y >= y1 && y <= y1e) {
                this._anchorSizeMode = 'xy1';
            }
            else if (y >= y2 && y <= y2e) {
                this._anchorSizeMode = 'xy3';
            }
            else if (y >= y1 && y <= y2e)
                this._anchorSizeMode = 'x1';
        }
        else if (x >= x2 && x <= x2e) {
            if (y >= y1 && y <= y1e) {
                this._anchorSizeMode = 'xy2';
            }
            else if (y >= y2 && y <= y2e) {
                this._anchorSizeMode = 'xy4';
            }
            else if (y >= y1 && y <= y2e)
                this._anchorSizeMode = 'x2';
        }
        else if (x > x1e && x < x2 && y > y1e && y < y2) {
            this._anchorSizeMode = 'xy';
        }
    }

    public crop() {
        if (this._anchor == false) return;
        this._anchor = false;
        this.element.style.cursor = this.canPan ? 'grab' : 'auto';
        this.anchorSetSizeMode(0, 0);
        let x = this._anchorRec.x - (this.x + (this._Image.width / 2 * this._scale));
        let y = this._anchorRec.y - (this.y + (this._Image.height / 2 * this._scale));

        let w = this._anchorRec.w;
        let h = this._anchorRec.h;

        x = Math.round(x / this._scale)
        y = Math.round(y / this._scale);
        w = Math.round(w / this._scale);
        h = Math.round(h / this._scale);

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x + w > this._Image.width) w = this._Image.width - x;
        if (y + h > this._Image.height) h = this._Image.height - y;

        this.tmpContext.reset();
        this.tmpImage.width = w;
        this.tmpImage.height = h;
        this.tmpContext.setTransform(1, 0, 0, 1, 0, 0);
        this.tmpContext.drawImage(this._Image, x, y, w, h, 0, 0, w, h);

        this.load(this.tmpImage.toDataURL('image/png'));
    }

    private _divCamera: HTMLDivElement;
    private _videoCamera: HTMLVideoElement;
    private createCameraArea() {
        if (!this._divCamera) {
            this._divCamera = document.createElement('div');
            this._divCamera.className = 'camera';
            this.element.parentElement.appendChild(this._divCamera);
        }

        let rect = this.element.getBoundingClientRect();
        this._divCamera.style.left = rect.x + 'px';
        this._divCamera.style.top = rect.y + 'px';
        this._divCamera.style.width = rect.width + 'px';
        this._divCamera.style.height = rect.height + 'px';
        window.addEventListener("scroll", () => {
            let rect = this.element.getBoundingClientRect();
            this._divCamera.style.left = rect.x + 'px';
            this._divCamera.style.top = rect.y + 'px';
            this._divCamera.style.width = rect.width + 'px';
            this._divCamera.style.height = rect.height + 'px';

        });

        if (!this._videoCamera) {
            this._videoCamera = document.createElement('video');
            this._videoCamera.addEventListener("click", () => {
                if (!this.tmpImage) {
                    this.tmpImage = document.createElement('canvas');
                    this.tmpContext = this.tmpImage.getContext('2d');
                }
                this.tmpImage.width = this._videoCamera.videoWidth;
                this.tmpImage.height = this._videoCamera.videoHeight;
                this.tmpContext.drawImage(this._videoCamera, 0, 0, this.tmpImage.width, this.tmpImage.height);
                this.load(this.tmpImage.toDataURL('image/png'));
                this.stopCamera();
            });
            this._videoCamera.onloadedmetadata = async () => {
                this._videoCamera.play();
                this._divCamera.classList.add('show');
            };
            this._divCamera.appendChild(this._videoCamera);

        }

        let cameraSwitch = this._divCamera.querySelector('.switch') as HTMLButtonElement;
        if (!cameraSwitch) {
            cameraSwitch = document.createElement('button');
            cameraSwitch.className = 'switch';
            cameraSwitch.onclick = () => {
                if (this._videoCamera.srcObject) {
                    if (this._cameraDeviceId.length < 2) return;
                    let idx = this._cameraDeviceId.indexOf(this._cameraOldId);
                    if (idx != -1) idx++;
                    if (idx >= this._cameraDeviceId.length) idx = 0;
                    this.stopCamera();
                    this.startCamera(this._cameraDeviceId[idx]);
                }
            };
            this._divCamera.appendChild(cameraSwitch);
        }
        if (this._cameraDeviceId.length < 2)
            cameraSwitch.style.display = 'none';
        else
            cameraSwitch.style.display = '';

        let cameraBack = this._divCamera.querySelector('.back') as HTMLButtonElement;
        if (!cameraBack) {
            cameraBack = document.createElement('button');
            cameraBack.className = 'back';
            cameraBack.onclick = () => {
                this.stopCamera();
            };
            this._divCamera.appendChild(cameraBack);
        }
    }
    private _cameraDeviceId = [];
    private _cameraOldId = '';
    public async stopCamera() {
        (this._videoCamera.srcObject as MediaStream).getTracks().forEach(function (track) {
            track.stop();
        });
        this._videoCamera.srcObject = null;
        this._divCamera.classList.remove('show');
    }
    public async startCamera(id?: string) {
        if (this._cameraDeviceId.length == 0) {
            await navigator.mediaDevices.enumerateDevices().then(
                (devices) => devices.forEach((x) => {
                    if (x.kind == "videoinput")
                        this._cameraDeviceId.push(x.deviceId)
                }));
        }
        let option: MediaStreamConstraints = { audio: false, video: { facingMode: "user" } };
        if (id == undefined && this._cameraOldId != '') id = this._cameraOldId;
        if (id)
            option = { audio: false, video: { deviceId: id } };

        await navigator.mediaDevices.getUserMedia(option)
            .then((stream) => {
                this.createCameraArea();
                this._cameraOldId = stream.getVideoTracks()[0]?.getSettings()?.deviceId;
                this._videoCamera.srcObject = stream;
            })
            .catch((error) => {
                console.error("Error accessing the camera: ", error);
            });
    }
    private _saveImage: HTMLCanvasElement;
    public save(): string {
        if (!this._saveImage)
            this._saveImage = document.createElement('canvas');
        let x = 0;
        let y = 0;
        let w = this.element.width;
        let h = this.element.height;
        let oldMask = this.mask;
        this.mask = '';
        let mp = oldMask.split(',');
        if (mp[0].trim().toLowerCase() == 'circle') {
            let r = WNparseNumber(mp[1], 32);
            x = this.element.width / 2 - r;
            y = this.element.height / 2 - r;
            w = r * 2;
            h = r * 2;
        }
        else if (mp[0].trim().toLowerCase() == 'rect') {
            if (mp.length == 2)
                mp.push(mp[1]);
            w = WNparseNumber(mp[1], 32);
            h = WNparseNumber(mp[2], 32);
            x = this.element.width / 2 - w / 2;
            y = this.element.height / 2 - h / 2;
        }
        this._saveImage.width = w;
        this._saveImage.height = h;
        let ctx = this._saveImage.getContext("2d");
        ctx.drawImage(this.element, x, y, w, h, 0, 0, w, h);
        this.mask = oldMask;

        return this._saveImage.toDataURL('image/png');
    }
}