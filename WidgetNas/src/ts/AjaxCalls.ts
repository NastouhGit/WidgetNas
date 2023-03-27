var WNBaseFetchUri: string;
var WNElements: { [id: string]: WNElement; } = {};

class WNElement {
    Element: Document | HTMLElement;
    Ready(callBack: any, options: boolean = false): void { this.Element.addEventListener("DOMContentLoaded", callBack, options); }
    Click(callBack: any): void { this.Element.addEventListener("click", callBack); }
    Change(callBack: any): void { this.Element.addEventListener("change", callBack); }
    Input(callBack: any): void { this.Element.addEventListener("input", callBack); }
    Focus(callBack: any): void { this.Element.addEventListener("focus", callBack); }
    FocusIn(callBack: any): void { this.Element.addEventListener("focusin", callBack); }
    FocusOut(callBack: any): void { this.Element.addEventListener("focusout", callBack); }
    Resize(callBack: any): void { this.Element.addEventListener("resize", callBack); }
    Scroll(callBack: any): void { this.Element.addEventListener("scroll", callBack); }
    Select(callBack: any): void { this.Element.addEventListener("select", callBack); }
    ContextMenu(callBack: any): void { this.Element.addEventListener("contextmenu", callBack); }
    Copy(callBack: any): void { this.Element.addEventListener("copy", callBack); }
    Cut(callBack: any): void { this.Element.addEventListener("cut", callBack); }
    Paste(callBack: any): void { this.Element.addEventListener("paste", callBack); }
    DBLClick(callBack: any): void { this.Element.addEventListener("dblclick", callBack); }
    Drag(callBack: any): void { this.Element.addEventListener("drag", callBack); }
    Dragend(callBack: any): void { this.Element.addEventListener("dragend", callBack); }
    Dragenter(callBack: any): void { this.Element.addEventListener("dragenter", callBack); }
    Dragleave(callBack: any): void { this.Element.addEventListener("dragleave", callBack); }
    Dragover(callBack: any): void { this.Element.addEventListener("dragover", callBack); }
    Dragstart(callBack: any): void { this.Element.addEventListener("dragstart", callBack); }
    Drop(callBack: any): void { this.Element.addEventListener("drop", callBack); }
    Keydown(callBack: any): void { this.Element.addEventListener("keydown", callBack); }
    Keypress(callBack: any): void { this.Element.addEventListener("keypress", callBack); }
    Keyup(callBack: any): void { this.Element.addEventListener("keyup", callBack); }
    Mousedown(callBack: any): void { this.Element.addEventListener("mousedown", callBack); }
    Mouseenter(callBack: any): void { this.Element.addEventListener("mouseenter", callBack); }
    Mouseleave(callBack: any): void { this.Element.addEventListener("mouseleave", callBack); }
    Mousemove(callBack: any): void { this.Element.addEventListener("mousemove", callBack); }
    Mouseover(callBack: any): void { this.Element.addEventListener("mouseover", callBack); }
    Mouseout(callBack: any): void { this.Element.addEventListener("mouseout", callBack); }
    Mouseup(callBack: any): void { this.Element.addEventListener("mouseup", callBack); }
    Touchcancel(callBack: any): void { this.Element.addEventListener("touchcancel", callBack); }
    Touchend(callBack: any): void { this.Element.addEventListener("touchend", callBack); }
    Touchmove(callBack: any): void { this.Element.addEventListener("touchmove", callBack); }
    Touchstart(callBack: any): void { this.Element.addEventListener("touchstart", callBack); }
    Wheel(callBack: any): void { this.Element.addEventListener("wheel", callBack); }

    constructor(element: Document | HTMLElement) {
        this.Element = element;
    }
}

function WNEReset() {
    WNElements = {};
}

function WNE(element: HTMLElement | Document | string): WNElement {
    let id = '';
    let telement: HTMLElement | Document;
    if (typeof (element) == 'string') {
        if (WNElements[element.toLocaleLowerCase()] != undefined)
            return WNElements[element.toLocaleLowerCase()];

        telement = document.querySelector(`[id='${element}' i]`) as HTMLElement;

        if (telement == null) {
            telement = document.querySelector(`[name='${element}' i]`) as HTMLElement;
        }

        if (telement == null)
            telement = document.querySelector(element) as HTMLElement;

        if (telement == undefined)
            return null;
        id = telement.id.toLocaleLowerCase();
    }
    else if (element == document) {
        telement = element;
        id = 'document';
    }
    else {
        telement = element;
        id = (<HTMLElement>telement).id.toLocaleLowerCase();
    }
    if (id === '')
        id = (<any>telement).name.toLocaleLowerCase();
    if (id === '')
        id = element.toString().toLocaleLowerCase();

    if (WNElements[id] == undefined) {
        WNElements[id] = new WNElement(telement);
    }
    return WNElements[id];
}

function GetFormData(Form: HTMLFormElement) {
    let data = new FormData();
    if (Form != undefined) {
        data = new FormData(Form);
        data.delete("__RequestVerificationToken");
    }
    var object = {};
    data.forEach(function (value, key) {
        object[key] = value;
    });
    return JSON.stringify(object);
}

function GetRequestInit() {
    return {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "manual",
        referrerPolicy: "origin",
        headers: {
            "Content-Encoding": "deflate, gzip",
            "Content-Type": "application/json",
            "Accept": "text/html, application/xhtml+xml, application/json, application/xml;q=0.9, image/webp, */*;q=0.8"
        }
    };
}

function GetPostUrl(postUrl) {
    let url = postUrl;
    if (!url.startsWith('/') && !url.toLowerCase().startsWith('http')) {
        if (WNBaseFetchUri !== undefined)
            url = WNBaseFetchUri + (!WNBaseFetchUri.endsWith('/') ? '/' : '') + url;
        else
            url = '/' + url;
    }
    return url;
}

async function Post(data: any, postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined)
        init = GetRequestInit();

    init.method = "post";
    init.body = data;

    return new Promise<any>(async (resolve, reject) => {
        await fetch(GetPostUrl(postUrl), init)
            .then(async (response) => {
                const res = await response.text();
                try {
                    if (response.ok) {
                        const r = JSON.parse(res);
                        if (r)
                            resolve(r);
                        else
                            resolve(res);
                    }
                    else {
                        const r = JSON.parse(res);
                        if (r)
                            reject(new Error(r?.detail));
                        else
                            reject(res);
                    }
                } catch (e) {
                    resolve(res);
                }

            })
            .catch((e) => {
                console.error(e);
                reject(e);
            });
    });
}

async function Get(data: any, postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined)
        init = GetRequestInit();

    init.method = "get";
    let url = GetPostUrl(postUrl);
    if (data != undefined && data != '')
        url += "?" + encodeURIComponent(JSON.stringify(data));

    return new Promise<any>(async (resolve, reject) => {
        await fetch(url, init)
            .then(async (response) => {
                if (response.ok) {
                    resolve(response.json());
                }
                else {
                    const r = await response.json();
                    if (r)
                        reject(new Error(r?.detail));
                    else
                        reject(response);
                }
                try {
                    resolve(response.json());
                }
                catch (e) {
                    console.error(e);
                    reject(e);
                }

            })
            .catch((e) => {
                console.error(e);
                reject(e);
            });
    });
}
async function GetText(postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined)
        init = GetRequestInit();

    init.method = "get";

    return new Promise<any>(async (resolve, reject) => {
        await fetch(GetPostUrl(postUrl), init)
            .then(async (response) => {
                try {
                    if (response.ok) {
                        resolve(response.text());
                    }
                    else {
                        const r = await response.json();
                        if (r)
                            reject(new Error(r?.detail));
                        else
                            reject(response);
                    }
                }
                catch (e) {
                    console.error(e);
                    reject(e);
                }
            })
            .catch((e) => {
                console.error(e);
                reject(e);
            });
    });
}
async function GetFile(path: any, postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined) {
        init = GetRequestInit();
        init.headers = {
            "Content-Encoding": "deflate, gzip",
        }
    }

    init.method = "get";
    let url = GetPostUrl(postUrl);
    url += "?" + encodeURIComponent(JSON.stringify(path));

    return new Promise<any>(async (resolve, reject) => {
        await fetch(url, init)
            .then(response => response.blob())
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                resolve(objectURL);
            })
            .catch((e) => {
                console.error(e);
                reject(e);
            });
    });
}
async function Upload(files: any, destination: string, postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined) {
        init = GetRequestInit();
    }

    init.method = "put";

    const formData = new FormData()
    formData.append('destination', destination);
    if (files.length == undefined)
        formData.append(files.name, files);
    else
        for (var i = 0; i < files.length; i++)
            formData.append(files[i].name, files[i]);

    init.body = formData;

    return new Promise<any>(async (resolve, reject) => {
        await fetch(GetPostUrl(postUrl), init)
            .then((response) => {
                try {
                    if (response.ok) {
                        resolve(response.json());
                    }
                    else
                        reject(response.statusText);
                }
                catch (e) {
                    console.error(e);
                    reject(e);
                }
            })
            .catch((e) => {
                console.error(e);
                reject(e);
            });
    });
}
