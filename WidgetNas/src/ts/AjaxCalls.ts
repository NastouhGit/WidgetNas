function getFormData(Form: HTMLFormElement) {
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

function getRequestInit(): any {
    return {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "manual",
        referrerPolicy: "origin",
        headers: {
            "Authorization": wnConfig.authorizationToken,
            "Content-Encoding": "deflate, gzip",
            "Content-Type": "application/json",
            "Accept": "text/html, application/xhtml+xml, application/json, application/xml;q=0.9, image/webp, */*;q=0.8"
        }
    };
}
function getRequestFormInit(): any {
    return {
        method: "post",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        redirect: "manual",
        referrerPolicy: "origin",
        headers: {
            "Authorization": wnConfig.authorizationToken,
        }
    };
}
function getPostUrl(postUrl: string) {
    let url = postUrl;
    if (!url.startsWith('/') && !url.split('?')[0].toLowerCase().includes(':')) {
        if (wnConfig.baseFetchUri !== undefined)
            url = wnConfig.baseFetchUri + url;
        else
            url = '/' + url;

    }
    else if (url.startsWith('~'))
        url = wnConfig.baseFetchUri + url;
    return url;
}

async function Post(data: any, postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined)
        init = getRequestInit();

    init.method = "post";
    init.body = data;

    return new Promise<any>(async (resolve, reject) => {
        await fetch(getPostUrl(postUrl), init)
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
                    else if (response.status >= 400 && response.status < 600) {
                        if (res == undefined || res == null || res == '')
                            reject(new Error(wnConfig.language['error'][response.status.toString()]));
                        else
                            reject(new Error(res));
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
        init = getRequestInit();

    init.method = "get";
    let url = getPostUrl(postUrl);
    if (data != undefined && data != '')
        url += "?" + encodeURIComponent(JSON.stringify(data));

    return new Promise<any>(async (resolve, reject) => {
        await fetch(url, init)
            .then(async (response) => {
                try {
                    if (response.ok) {
                        let data = await response.json();
                        resolve(data);
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
async function getText(postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined)
        init = getRequestInit();

    init.method = "get";

    return new Promise<any>(async (resolve, reject) => {
        await fetch(getPostUrl(postUrl), init)
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
async function getFile(path: any, postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined) {
        init = getRequestInit();
        init.headers = {
            "Content-Encoding": "deflate, gzip",
        }
    }

    init.method = "get";
    let url = getPostUrl(postUrl);
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
async function upload(files: any, destination: string, postUrl: string, init: any = undefined): Promise<any> {

    if (init == undefined) {
        init = getRequestFormInit();
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
        await fetch(getPostUrl(postUrl), init)
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
