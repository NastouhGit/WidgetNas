class wncaptcha {
    element: HTMLElement;
    Length = 4;
    UniqeLetter = true;

    private image: HTMLImageElement;
    private refreshButton: HTMLButtonElement;
    private input: HTMLInputElement;
    private url: string;
    private key: string = '';
    constructor(elem: HTMLElement) {
        if (elem !== undefined && elem !== null) {
            this.element = elem as HTMLElement;
            this.Init();
            this.refresh();
        }
    }
    value() { return { Key: this.key, Value: this.input.value } }

    private Init() {
        let imagebar = this.element.querySelector(".imagebar");
        this.image = this.element.querySelector(".image");
        this.refreshButton = this.element.querySelector(".refresh");
        this.input = this.element.querySelector("input");
        if (imagebar == null && this.image==null) {
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
    }
    async refresh() {
        await Post(JSON.stringify({
            Method: 'Captcha',
            Width: this.image.width,
            Height: this.image.height,
            Length: this.Length,
            UniqeLetter: this.UniqeLetter
        }), this.url).then(async (r) => {
            this.image.src = r.Image;
            this.key = r.Key;
            this.input.value = "";
        }).catch((e) => console.error(e.message));
    }
    async validate() {
        await Post(JSON.stringify({
            Method: 'Validate',
            Key: this.key,
            Value: this.input.value
        }), this.url).then(async (r) => {
            if (r.Validate == 'true') {
                this.input.classList.add('valid');
                this.element.classList.remove('hide-valid');
            }
            else {
                this.input.classList.remove('valid');
                this.element.classList.add('hide-valid');
            }

        }).catch((e) => console.error(e.message));
    }

}