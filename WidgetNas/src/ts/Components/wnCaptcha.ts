class WNCaptcha implements IWNCaptcha {
    public readonly nameType: string = 'WNCaptcha';
    public element: HTMLElement;

    private image: HTMLImageElement;
    private refreshButton: HTMLButtonElement;
    private input: HTMLInputElement;
    private url: string;
    private key: string = '';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.init();
            this.refresh();
        }
    }
    public get value(): { key: string, value: string } { return { key: this.key ?? '', value: this.input.value ?? '' } }

    private init() {
        let imagebar = this.element.querySelector(".imagebar");
        this.image = this.element.querySelector(".image");
        this.refreshButton = this.element.querySelector(".refresh");
        this.input = this.element.querySelector("input");
        if (imagebar == null && this.image == null) {
            imagebar = document.createElement("div");
            imagebar.className = "imagebar";
            this.element.appendChild(imagebar);
        }
        if (this.image == null) {
            this.image = document.createElement("img");
            this.image.className = "image";
            imagebar.appendChild(this.image);
        }
        if (this.refreshButton == null) {
            this.refreshButton = document.createElement("button");
            this.refreshButton.className = "refresh";
            imagebar.appendChild(this.refreshButton);
        }
        if (this.input == null) {
            this.input = document.createElement("input");
            this.element.appendChild(this.input);
        }
        if (this.element.hasAttribute('url'))
            this.url = this.element.getAttribute('url') ?? '';
        this.refreshButton.addEventListener("click", () => this.refresh());
        this.key = '';

        this.element.classList.add('hide-valid');

        this.input.addEventListener("change", async () => await this.validate());
        this.input.addEventListener("", async () => await this.validate());
    }
    public async refresh() {
        await Post(JSON.stringify({
            Method: 'Captcha',
            Width: this.image.width,
            Height: this.image.height
        }), this.url).then(async (r) => {
            this.image.src = r.Image;
            this.key = r.Key;
            this.input.value = "";
        }).catch((e) => console.error(e.message));
    }
    public async validate(): Promise<boolean> {
        let ret = false;
        await Post(JSON.stringify({
            Method: 'Validate',
            Key: this.key ?? '',
            Value: this.input.value
        }), this.url).then(async (r) => {
            if (r.Validate == 'true') {
                this.input.classList.add('valid');
                this.element.classList.remove('hide-valid');
                this.input.classList.remove('invalid');
                ret = true;
            }
            else {
                this.input.classList.remove('valid');
                this.element.classList.add('hide-valid');
                this.input.classList.add('invalid');
                await this.refresh();
            }

        }).catch((e) => console.error(e.message));
        return ret;
    }

}