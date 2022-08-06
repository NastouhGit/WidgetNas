function wnabout() {
    return `
/*--------------------------------------
 * Widgetnas Version: 1.3.0.0
 * Release Date: 1401-05-04 - 2022-07-26
 *--------------------------------------*/
`;
}
document.addEventListener("DOMContentLoaded", initComponents, true);
function initComponents() {
    WNDefaultLanguage = document.documentElement.lang;
    if (document.documentElement.lang.indexOf('fa') > -1 || window.navigator.languages.indexOf('fa') > -1) {
        WNDefaultCalendar = new wnPersianCalendar();
        WNDefaultCultureInfo = new wnCultureInfo_fa_IR();
        WNDefaultLanguage = 'fa';
    }
    else {
        WNDefaultCalendar = new wnGregorianCalendar();
        WNDefaultCultureInfo = new wnCultureInfo_en_US();
    }
    WNTagEvalScript(document.head);
    WNTagEvalScriptBody();
    CheckBrowserCompatibility();
    InitWNBlock(document);
}
function CheckBrowserCompatibility() {
    let objAgent = navigator.userAgent;
    let objbrowserName = navigator.appName;
    let objfullVersion = '' + parseFloat(navigator.appVersion);
    let objBrMajorVersion = parseInt(navigator.appVersion, 10);
    let objOffsetName, objOffsetVersion, ix;
    if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
        objbrowserName = "Chrome";
        objfullVersion = objAgent.substring(objOffsetVersion + 7);
    }
    else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
        objbrowserName = "Microsoft Internet Explorer";
        objfullVersion = objAgent.substring(objOffsetVersion + 5);
    }
    else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
        objbrowserName = "Firefox";
    }
    else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
        objbrowserName = "Safari";
        objfullVersion = objAgent.substring(objOffsetVersion + 7);
        if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
            objfullVersion = objAgent.substring(objOffsetVersion + 8);
    }
    else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) < (objOffsetVersion = objAgent.lastIndexOf('/'))) {
        objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
        objfullVersion = objAgent.substring(objOffsetVersion + 1);
        if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
            objbrowserName = navigator.appName;
        }
    }
    if ((ix = objfullVersion.indexOf(";")) != -1)
        objfullVersion = objfullVersion.substring(0, ix);
    if ((ix = objfullVersion.indexOf(" ")) != -1)
        objfullVersion = objfullVersion.substring(0, ix);
    objBrMajorVersion = parseInt('' + objfullVersion, 10);
    if (isNaN(objBrMajorVersion)) {
        objfullVersion = '' + parseFloat(navigator.appVersion);
        objBrMajorVersion = parseInt(navigator.appVersion, 10);
    }
    let error = true;
    if (objbrowserName == 'Chrome' && objBrMajorVersion >= 89)
        error = false;
    else if (objbrowserName == 'Firefox' && objBrMajorVersion >= 5)
        error = false;
    if (error)
        document.body.innerHTML = `<div class='alert warning'>` + WNlang[WNDefaultCultureInfo.TwoLetterISOLanguageName]["common"]["browsererror"] + ' ' + objbrowserName + ':' + objBrMajorVersion + `</div>` + document.body.innerHTML;
}
function InitWNBlock(elem = document) {
    InitWN(elem);
    SetComponentCompatibility(elem);
    WNTooltipAssign(elem);
}
function InitWN(masterelem = document) {
    let selectors = masterelem.querySelectorAll("[wn-type]");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        if (elem !== null) {
            let type = elem.getAttribute("wn-type");
            if (!elem.hasAttribute('id') || elem.getAttribute('is') == '') {
                elem.id = 'wn-' + type + (Object.keys(WN).length + 1).toString();
                elem.setAttribute('id', elem.id);
            }
            try {
                WN[elem.id] = null;
                WN[elem.id] = new Function('elem', 'return new wn' + type + '(elem)')(elem);
            }
            catch { }
        }
    }
}
function SetComponentCompatibility(elem = document) {
    let selectors = elem.querySelectorAll("*");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        if (elem !== null) {
            let st = getComputedStyle(elem);
            if (st.direction == 'ltr') {
                if (elem.tagName == "INPUT" && (elem.type == 'email')) {
                    if (getComputedStyle(elem.parentElement).direction == 'ltr')
                        elem.setAttribute('dir', 'ltr');
                    else
                        elem.setAttribute('dir', 'rtl');
                }
                else
                    elem.setAttribute('dir', 'ltr');
            }
        }
    }
}
function WNTagEvalScriptBody() { WNTagEvalScript(document.body); }
function WNTagEvalScript(elem) {
    const regexp = /\$\[([\s\S]*?)\]/img;
    let html = elem.innerHTML;
    let v = html.matchAll(regexp);
    for (const m of v) {
        try {
            html = html.replace(m[0], eval(m[1]));
        }
        catch (e) {
        }
    }
    elem.innerHTML = html;
}
var WNBaseFetchUri;
var WNElements = {};
class WNElement {
    constructor(element) {
        this.Element = element;
    }
    Ready(callBack, options = false) { this.Element.addEventListener("DOMContentLoaded", callBack, options); }
    Click(callBack) { this.Element.addEventListener("click", callBack); }
    Change(callBack) { this.Element.addEventListener("change", callBack); }
    Input(callBack) { this.Element.addEventListener("input", callBack); }
    Focus(callBack) { this.Element.addEventListener("focus", callBack); }
    FocusIn(callBack) { this.Element.addEventListener("focusin", callBack); }
    FocusOut(callBack) { this.Element.addEventListener("focusout", callBack); }
    Resize(callBack) { this.Element.addEventListener("resize", callBack); }
    Scroll(callBack) { this.Element.addEventListener("scroll", callBack); }
    Select(callBack) { this.Element.addEventListener("select", callBack); }
    ContextMenu(callBack) { this.Element.addEventListener("contextmenu", callBack); }
    Copy(callBack) { this.Element.addEventListener("copy", callBack); }
    Cut(callBack) { this.Element.addEventListener("cut", callBack); }
    Paste(callBack) { this.Element.addEventListener("paste", callBack); }
    DBLClick(callBack) { this.Element.addEventListener("dblclick", callBack); }
    Drag(callBack) { this.Element.addEventListener("drag", callBack); }
    Dragend(callBack) { this.Element.addEventListener("dragend", callBack); }
    Dragenter(callBack) { this.Element.addEventListener("dragenter", callBack); }
    Dragleave(callBack) { this.Element.addEventListener("dragleave", callBack); }
    Dragover(callBack) { this.Element.addEventListener("dragover", callBack); }
    Dragstart(callBack) { this.Element.addEventListener("dragstart", callBack); }
    Drop(callBack) { this.Element.addEventListener("drop", callBack); }
    Keydown(callBack) { this.Element.addEventListener("keydown", callBack); }
    Keypress(callBack) { this.Element.addEventListener("keypress", callBack); }
    Keyup(callBack) { this.Element.addEventListener("keyup", callBack); }
    Mousedown(callBack) { this.Element.addEventListener("mousedown", callBack); }
    Mouseenter(callBack) { this.Element.addEventListener("mouseenter", callBack); }
    Mouseleave(callBack) { this.Element.addEventListener("mouseleave", callBack); }
    Mousemove(callBack) { this.Element.addEventListener("mousemove", callBack); }
    Mouseover(callBack) { this.Element.addEventListener("mouseover", callBack); }
    Mouseout(callBack) { this.Element.addEventListener("mouseout", callBack); }
    Mouseup(callBack) { this.Element.addEventListener("mouseup", callBack); }
    Touchcancel(callBack) { this.Element.addEventListener("touchcancel", callBack); }
    Touchend(callBack) { this.Element.addEventListener("touchend", callBack); }
    Touchmove(callBack) { this.Element.addEventListener("touchmove", callBack); }
    Touchstart(callBack) { this.Element.addEventListener("touchstart", callBack); }
    Wheel(callBack) { this.Element.addEventListener("wheel", callBack); }
}
function WNE(element) {
    let id = '';
    let telement;
    if (typeof (element) == 'string') {
        if (WNElements[element] != undefined)
            return WNElements[element];
        telement = document.getElementById(element);
        if (telement == null) {
            let elem = document.getElementsByName(element);
            if (elem != undefined)
                telement = elem[0];
        }
        if (telement == null)
            telement = document.querySelector(element);
        if (telement == undefined)
            return null;
        id = telement.id;
    }
    else if (element == document) {
        telement = element;
        id = 'document';
    }
    else {
        telement = element;
        id = telement.id;
    }
    if (id === '')
        id = telement.name;
    if (id === '')
        id = element.toString();
    if (WNElements[id] == undefined) {
        WNElements[id] = new WNElement(telement);
    }
    return WNElements[id];
}
function GetFormData(Form) {
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
async function Post(data, postUrl) {
    let url = postUrl;
    if (url.startsWith('/'))
        url = url.substr(1);
    if (!url.toLowerCase().startsWith('http')) {
        if (WNBaseFetchUri !== undefined)
            url = WNBaseFetchUri + (!WNBaseFetchUri.endsWith('/') ? '/' : '') + url;
        else
            url = '/' + url;
    }
    return new Promise(async (resolve, reject) => {
        await fetch(url, {
            method: "post",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "manual",
            referrerPolicy: "origin",
            body: data,
            headers: {
                "Authorization": WNGetCookie('Token'),
                "Content-Encoding": "deflate, gzip",
                "Content-Type": "application/json",
                "Accept": "text/html, application/xhtml+xml, application/json, application/xml;q=0.9, image/webp, */*;q=0.8"
            }
        })
            .then(async (response) => {
            const res = await response.text();
            try {
                const r = JSON.parse(res);
                if (r)
                    resolve(r);
                else
                    resolve(res);
            }
            catch (e) {
                resolve(res);
            }
        })
            .catch((e) => {
            console.error(e);
            reject(e);
        });
    });
}
async function Get(data, postUrl) {
    let url = postUrl;
    if (url.startsWith('/'))
        url = url.substr(1);
    if (!url.toLowerCase().startsWith('http')) {
        if (WNBaseFetchUri !== undefined)
            url = WNBaseFetchUri + (!WNBaseFetchUri.endsWith('/') ? '/' : '') + url;
        else
            url = '/' + url;
    }
    if (data != undefined && data != '')
        url += "?" + encodeURIComponent(JSON.stringify(data));
    return new Promise(async (resolve, reject) => {
        await fetch(url, {
            method: "get",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "manual",
            referrerPolicy: "origin",
            headers: {
                "Authorization": WNGetCookie('Token'),
                "Content-Encoding": "deflate, gzip",
                "Content-Type": "application/json",
                "Accept": "text/html, application/xhtml+xml, application/json, application/xml;q=0.9, image/webp, */*;q=0.8"
            }
        })
            .then((response) => {
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
async function GetText(postUrl) {
    let url = postUrl;
    if (url.startsWith('/'))
        url = url.substr(1);
    if (!url.toLowerCase().startsWith('http')) {
        if (WNBaseFetchUri !== undefined)
            url = WNBaseFetchUri + (!WNBaseFetchUri.endsWith('/') ? '/' : '') + url;
        else
            url = '/' + url;
    }
    return new Promise(async (resolve, reject) => {
        await fetch(url, {
            method: "get",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "manual",
            referrerPolicy: "origin",
            headers: {
                "Authorization": WNGetCookie('Token'),
                "Content-Encoding": "deflate, gzip",
                "Content-Type": "application/json",
                "Accept": "text/html, application/xhtml+xml, application/json, application/xml;q=0.9, image/webp, */*;q=0.8"
            }
        })
            .then((response) => {
            try {
                resolve(response.text());
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
async function GetFile(path, postUrl) {
    let url = postUrl;
    if (url.startsWith('/'))
        url = url.substr(1);
    if (!url.toLowerCase().startsWith('http')) {
        if (WNBaseFetchUri !== undefined)
            url = WNBaseFetchUri + (!WNBaseFetchUri.endsWith('/') ? '/' : '') + url;
        else
            url = '/' + url;
    }
    url += "?" + encodeURIComponent(JSON.stringify(path));
    return new Promise(async (resolve, reject) => {
        await fetch(url, {
            method: "get",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "manual",
            referrerPolicy: "origin",
            headers: {
                "Authorization": WNGetCookie('Token'),
                "Content-Encoding": "deflate, gzip",
            }
        })
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
async function Upload(files, destination, postUrl) {
    let url = postUrl;
    if (url.startsWith('/'))
        url = url.substr(1);
    if (!url.toLowerCase().startsWith('http')) {
        if (WNBaseFetchUri !== undefined)
            url = WNBaseFetchUri + (!WNBaseFetchUri.endsWith('/') ? '/' : '') + url;
        else
            url = '/' + url;
    }
    const formData = new FormData();
    formData.append('destination', destination);
    if (files.length == undefined)
        formData.append(files.name, files);
    else
        for (var i = 0; i < files.length; i++)
            formData.append(files[i].name, files[i]);
    return new Promise(async (resolve, reject) => {
        await fetch(url, {
            method: "put",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            redirect: "manual",
            referrerPolicy: "origin",
            body: formData,
            headers: {
                "Authorization": "Bearer " + WNGetCookie('Token'),
                "Content-Encoding": "deflate, gzip",
                "Accept": "text/html, application/xhtml+xml, application/json, application/xml;q=0.9, image/webp, */*;q=0.8"
            }
        })
            .then((response) => {
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
function WNSetElementPosition(source, base, param) {
    let source_cs = getComputedStyle(source);
    let source_pos = source.getBoundingClientRect();
    let element_pos = base.getBoundingClientRect();
    let offsetLeft = element_pos.left;
    let offsetTop = element_pos.top;
    let marginTop = WNparseNumber(source_cs.marginTop.replace('px', ''), 0);
    let marginLeft = WNparseNumber(source_cs.marginLeft.replace('px', ''), 0);
    let marginRight = WNparseNumber(source_cs.marginRight.replace('px', ''), 0);
    let rtl = source_cs.direction == 'rtl';
    let top = offsetTop + element_pos.height;
    let start = 0;
    let width = source_pos.width;
    if (param.fit) {
        if (width < element_pos.width)
            width = element_pos.width;
    }
    if (element_pos.bottom + source_pos.height + marginTop * 2 > window.innerHeight || param.direction == 'top')
        top = offsetTop - source_pos.height - marginTop * 2;
    if (rtl) {
        start = element_pos.right - width;
        if (param.direction == 'end') {
            start = offsetLeft;
        }
    }
    else {
        start = offsetLeft;
        if (param.direction == 'end') {
            start = offsetLeft + element_pos.width - width;
        }
    }
    if (start < 0)
        start = offsetLeft;
    if (start + width > window.innerWidth)
        start = window.innerWidth - width;
    if (param.direction == 'start') {
        top = offsetTop - source_pos.height / 2;
        if (rtl)
            start = offsetLeft + base.offsetWidth;
        else
            start = offsetLeft - width - marginLeft - marginRight;
    }
    if (param.direction == 'end') {
        top = offsetTop - source_pos.height / 2;
        if (rtl)
            start = offsetLeft - width - marginLeft - marginRight;
        else
            start = offsetLeft + base.offsetWidth;
    }
    if (param.direction == 'bottom')
        top = offsetTop + element_pos.height;
    source.style.top = top + "px";
    source.style.left = start + "px";
    if (width != 0)
        source.style.width = width + "px";
}
function WNmod(a, b) { return a - (b * Math.floor(a / b)); }
function WNparseBoolean(value, Default) {
    if ((value === undefined || value == null) && Default != undefined)
        return Default;
    switch (value.toString().toLowerCase()) {
        case "true":
        case "1":
        case "on":
        case "yes":
            return true;
        case '':
            if (Default != undefined)
                return Default;
    }
    return false;
}
function WNparseNumber(value, Default, culture = WNDefaultCultureInfo) {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;
    value = WNDeNaitveDigit(value, culture);
    return parseInt(value);
}
function WNparseString(value, Default) {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;
    return value;
}
function WNTrim(value, trimstr = ' ') {
    while (value.startsWith(trimstr))
        value = value.substr(trimstr.length);
    while (value.endsWith(trimstr))
        value = value.substr(0, value.lastIndexOf(trimstr));
    return value;
}
function WNLimitRange(value, min, max) {
    if (value < min)
        value = min;
    if (value > max)
        value = max;
    return value;
}
function WNNaitveDigit(number, culture, convert) {
    let ret = number.toString();
    if (convert) {
        ret = ret.replace(/0/g, culture.NumberFormat.NativeDigits[0]);
        ret = ret.replace(/1/g, culture.NumberFormat.NativeDigits[1]);
        ret = ret.replace(/2/g, culture.NumberFormat.NativeDigits[2]);
        ret = ret.replace(/3/g, culture.NumberFormat.NativeDigits[3]);
        ret = ret.replace(/4/g, culture.NumberFormat.NativeDigits[4]);
        ret = ret.replace(/5/g, culture.NumberFormat.NativeDigits[5]);
        ret = ret.replace(/6/g, culture.NumberFormat.NativeDigits[6]);
        ret = ret.replace(/7/g, culture.NumberFormat.NativeDigits[7]);
        ret = ret.replace(/8/g, culture.NumberFormat.NativeDigits[8]);
        ret = ret.replace(/9/g, culture.NumberFormat.NativeDigits[9]);
    }
    return ret;
}
function WNDeNaitveDigit(value, culture = WNDefaultCultureInfo) {
    value = value.toString();
    for (var i = 0; i < 10; i++) {
        let r = new RegExp('(' + culture.NumberFormat.NativeDigits[i] + ')', "ig");
        value = value.replace(r, i.toString());
    }
    return value;
}
function WNGetNodesList(list, parent = document, thiselemnt = null) {
    let ret = Array();
    if (list != '') {
        let part = [];
        part = list.split(',');
        for (var p = 0; p < part.length; p++) {
            if (part[p].toLowerCase().trim() == 'this' && thiselemnt != null)
                ret.push(thiselemnt);
            else {
                let elems = parent.querySelectorAll(part[p].trim());
                for (var i = 0; i < elems.length; i++) {
                    ret.push(elems[i]);
                }
            }
        }
    }
    return ret;
}
function WNParentHaveClass(child, parentClassName) {
    var node = child.parentNode;
    while (node != null) {
        if (node.classList != undefined && node.classList.contains(parentClassName)) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}
function WNCalcValue(value1, value2, sign, elem = null, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    let v1 = { value: 0, unit: '' };
    let v2 = { value: 0, unit: '' };
    v1 = WNValueUnit(value1);
    v2 = WNValueUnit(value2);
    if (v1.unit != v2.unit) {
        if (v1.unit == 'px' && v2.unit == 'em')
            v1.value /= parseFloat(getComputedStyle(elem).fontSize);
        else if (v1.unit == 'px' && v2.unit == 'rem')
            v1.value /= parseFloat(getComputedStyle(document.documentElement).fontSize);
        else if (v1.unit == 'em' && v2.unit == 'px')
            v1.value *= parseFloat(getComputedStyle(elem).fontSize);
        else if (v1.unit == 'rem' && v2.unit == 'px')
            v1.value *= parseFloat(getComputedStyle(document.documentElement).fontSize);
        else if (v1.unit == 'em' && v2.unit == 'rem')
            v1.value *= parseFloat(getComputedStyle(elem).fontSize) / parseFloat(getComputedStyle(document.documentElement).fontSize);
        else if (v1.unit == 'rem' && v2.unit == 'em')
            v1.value *= parseFloat(getComputedStyle(document.documentElement).fontSize) / parseFloat(getComputedStyle(elem).fontSize);
    }
    if (sign == '+')
        v1.value += v2.value;
    else if (sign == '-')
        v1.value -= v2.value;
    else if (sign == '*')
        v1.value *= v2.value;
    else if (sign == '/')
        v1.value /= v2.value;
    if (v1.value < min)
        v1.value = min;
    if (v1.value > max)
        v2.value = max;
    return v1.value + v2.unit;
}
function WNContainElement(elem, findin) {
    for (var j = 0; j < findin.childNodes.length; j++) {
        if (findin.childNodes[j] == elem) {
            return true;
        }
        if (findin.childNodes[j].childNodes.length > 0)
            if (WNContainElement(elem, findin.childNodes[j]))
                return true;
    }
    return false;
}
function WNHtmlToEscape(src) {
    let txt = src;
    let out = '';
    let ht = false;
    let hv = false;
    txt = txt.replace('= ', '=');
    txt = txt.replace(' =', '=');
    for (var i = 0; i < txt.length; i++) {
        let ch = txt[i];
        let nch = '';
        if (i + 1 < txt.length)
            nch = txt[i + 1];
        if (ch == '<' && nch == '/') {
            out += '<span class="hv">&lt;/</span><span class="ht">';
            ht = true;
            i++;
        }
        else if (ch == '<') {
            out += '<span class="hv">&lt;</span><span class="ht">';
            ht = true;
        }
        else if (ch == '>') {
            if (ht) {
                out += '</span>';
                ht = false;
            }
            out += '<span class="hv">&gt;</span>';
        }
        else if (ch == '=' && (nch == '"' || nch == "'" || nch == '`') && !hv) {
            for (var j = out.length - 1; j >= 0; j--) {
                if (out[j] == ' ' || out[j] == '>' || j == 0) {
                    let te = out.substring(j, out.length);
                    out = out.substring(0, j);
                    out += '<span class="ha">' + te + '</span>';
                    break;
                }
            }
            out += '<span class="hv">' + ch + nch;
            i++;
            hv = true;
        }
        else if (ch == '"' || ch == "'" || ch == '`' && hv) {
            out += '</span>' + ch;
            hv = false;
        }
        else if (ch == ' ' || ch == '"' || ch == "'" || ch == '`') {
            if (ht) {
                out += '</span>';
                ht = false;
            }
            out += ' ';
        }
        else
            out += ch;
    }
    return out;
}
function WNValueUnit(value) {
    let v = 0;
    let unit = '';
    if (value.endsWith('px')) {
        unit = 'px';
        v = WNparseNumber(value.substring(0, value.length - 2));
    }
    else if (value.endsWith('em')) {
        unit = 'em';
        v = WNparseNumber(value.substring(0, value.length - 2));
    }
    else if (value.endsWith('rem')) {
        unit = 'rem';
        v = WNparseNumber(value.substring(0, value.length - 2));
    }
    return { value: v, unit: unit };
}
function WNGetCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function WNSetCookie(cname, cvalue, exdays) {
    const d = new Date();
    if (exdays > 0) {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    else
        document.cookie = cname + "=" + cvalue + ";path=/";
}
function WNGetStorage(key) {
    let ret = sessionStorage.getItem(key);
    if (ret == null)
        ret = localStorage.getItem(key);
    if (ret == null)
        ret = WNGetCookie(key);
    return ret;
}
function WNSetStorage(key, value, localstorage) {
    if (localstorage) {
        localStorage.setItem(key, value);
        return localStorage.getItem(key) == value;
    }
    else {
        sessionStorage.setItem(key, value);
        return sessionStorage.getItem(key) == value;
    }
}
function WNSleep(ms) {
    return new Promise(s => setTimeout(s, ms));
}
function WNWaitToLoad(e, timeout = 5000) {
    if (e.nodeName == "IMG") {
        new Promise(() => {
            if (e.complete) {
                return null;
            }
            e.onload = () => null;
            e.onerror = () => null;
        });
    }
    else
        e.childNodes.forEach(x => WNWaitToLoad(x, timeout));
}
function WNAddClassList(elem, classes) {
    if (classes == '' || elem == null || elem == undefined)
        return;
    classes.split(' ').forEach((s) => elem.classList.add(s));
}
function WNRemoveClassList(elem, classes) {
    if (classes == '' || elem == null || elem == undefined)
        return;
    classes.split(' ').forEach((s) => elem.classList.remove(s));
}
function WNGenerateFunction(body, params = '') {
    let ret = undefined;
    let pr = [];
    if (params !== '')
        pr = params.split(',');
    pr.push(body);
    if (pr.length == 5)
        ret = new Function(pr[0], pr[1], pr[2], pr[3], pr[4]);
    else if (pr.length == 4)
        ret = new Function(pr[0], pr[1], pr[2], pr[3]);
    else if (pr.length == 3)
        ret = new Function(pr[0], pr[1], pr[2]);
    else if (pr.length == 2)
        ret = new Function(pr[0], pr[1]);
    else if (pr.length == 1)
        ret = new Function(pr[0]);
    return ret;
}
function WNAddStringQuote(value) { return '"' + value + '"'; }
function WNisJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;
    try {
        item = JSON.parse(item);
    }
    catch (e) {
        return false;
    }
    if (typeof item === "object" && item !== null) {
        return true;
    }
    return false;
}
function WNtoTitleCase(text) {
    let s = text.split(' ');
    for (var i = 0; i < s.length; i++) {
        if (s.length > 0)
            s[i] = s[i][0].toUpperCase() + s[i].substr(1).toLowerCase();
    }
    return s.join(' ');
}
function WNNumberToString(num, culture = WNDefaultCultureInfo) {
    let negsign = num < 0 ? culture.NumberFormat.NegativeSign : '';
    num = WNparseNumber(num.toFixed(culture.NumberFormat.NumberDecimalDigits), 0);
    var decimal = Math.abs(num) - Math.floor(Math.abs(num));
    num = num - decimal;
    let grp = num.toString().split("").reverse().join("").match(new RegExp('.{1,' + culture.NumberFormat.NumberGroupSizes[0] + '}', 'ig'));
    let ret = negsign;
    for (var i = grp.length - 1; i > -1; i--)
        ret += grp[i].split("").reverse().join("") + (i != 0 ? culture.NumberFormat.NumberGroupSeparator : '');
    if (decimal > 0)
        ret += culture.NumberFormat.NumberDecimalSeparator + decimal.toString();
    return ret;
}
function WNStringFormat(text, format, culture = WNDefaultCultureInfo) {
    let ret = text.toString();
    if (format.includes('{0}'))
        ret = format.replace('{0}', ret);
    else if (format.toLowerCase() == 'l' || format.toLowerCase() == 'lowercase')
        ret = ret.toLowerCase();
    else if (format.toLowerCase() == 'u' || format.toLowerCase() == 'uppercase')
        ret = ret.toUpperCase();
    else if (format.toLowerCase() == 't' || format.toLowerCase() == 'titlecase')
        ret = WNtoTitleCase(ret);
    else if (format.toLowerCase() == 'number')
        ret = WNNumberToString(WNparseNumber(text), culture);
    else if (format.toLowerCase() == 'date')
        ret = new wnDate(culture, WNDefaultCalendar, new Date(ret)).toString();
    else if (format.toLowerCase() == 'longdate')
        ret = new wnDate(culture, WNDefaultCalendar, new Date(ret)).toLongDateString();
    else if (format.toLowerCase() == 'shortdate')
        ret = new wnDate(culture, WNDefaultCalendar, new Date(ret)).toShortDateString();
    else if (format.toLowerCase() == 'longtime')
        ret = new wnDate(culture, WNDefaultCalendar, new Date(ret)).toLongTimeString();
    else if (format.toLowerCase() == 'shorttime')
        ret = new wnDate(culture, WNDefaultCalendar, new Date(ret)).toShortTimeString();
    return ret;
}
var WNDefaultNaitveDigit = true;
var WNDefaultCalendar;
var WNDefaultCultureInfo;
var WNDefaultHijriAdjustment = 0;
var WNDefaultLanguage = 'en';
var WNlang = {};
var WN = {};
class wncalendar {
    constructor(elem) {
        this.Date = new wnDate();
        this.Date2 = new wnDate();
        this.NaitveDigit = WNDefaultNaitveDigit || false;
        this.DateRange = false;
        this.OnlyMonthYear = false;
        this.AllowComment = false;
        this.AllowDateHoliday = false;
        this.Comment = [];
        this.NoCommonComment = false;
        this._calendarname = '';
        this._rangestate = 0;
        this.ontextinput = false;
        this._viewcount = 1;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    get viewcount() { return this._viewcount; }
    set viewcount(value) {
        if (value < 1)
            value = 1;
        if (value > 10)
            value = 10;
        this._viewcount = value;
        this.refresh();
    }
    Init() {
        if (!this.element.classList.contains('calendar'))
            this.element.classList.add('calendar');
        if (this.element.hasAttribute('calendar'))
            this.Date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')();
        if (this.element.hasAttribute('cultureinfo'))
            this.Date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')();
        if (this.element.hasAttribute('naitvedigit'))
            this.NaitveDigit = WNparseBoolean(this.element.getAttribute('naitvedigit'), false);
        if (this.element.hasAttribute('viewcount')) {
            this._viewcount = WNparseNumber(this.element.getAttribute('viewcount'), 1);
            if (this._viewcount < 1)
                this._viewcount = 1;
        }
        if (this.element.hasAttribute('daterange'))
            this.DateRange = WNparseBoolean(this.element.getAttribute('daterange'), false);
        if (this.element.hasAttribute('onlymonthyear'))
            this.OnlyMonthYear = WNparseBoolean(this.element.getAttribute('onlymonthyear'), false);
        if (this.element.hasAttribute('display-id'))
            this.DisplayElement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.element.hasAttribute('display2-id'))
            this.Display2Element = document.getElementById(this.element.getAttribute('display2-id'));
        if (this.DisplayElement != undefined) {
            this.DisplayElement.addEventListener('input', () => { this.SetValueFromDisplay(); });
            this.DisplayElement.addEventListener('change', () => { this.RenderDisplay(); });
        }
        if (this.Display2Element != undefined) {
            this.Display2Element.addEventListener('input', () => { this.SetValueFromDisplay(); });
            this.Display2Element.addEventListener('change', () => { this.RenderDisplay(); });
        }
        this.DisplayFormat = this.Date.CultureInfo.DateTimeFormat.ShortDatePattern;
        if (this.element.hasAttribute('display-format'))
            this.DisplayFormat = WNparseString(this.element.getAttribute('display-format'), this.Date.CultureInfo.DateTimeFormat.ShortDatePattern);
        if (this.element.hasAttribute('value-id')) {
            this.ValueElement = document.getElementById(this.element.getAttribute('value-id'));
        }
        if (this.element.hasAttribute('value2-id')) {
            this.Value2Element = document.getElementById(this.element.getAttribute('value2-id'));
        }
        this._calendarname = this.Date.Calendar.constructor.name;
        this._lang = WNlang[this.Date.CultureInfo.TwoLetterISOLanguageName || WNDefaultLanguage];
        this.Date.SetDate(new Date(this.GetElementValue(this.ValueElement)));
        this.Date.DateChanged = () => {
            this.SetElementValue(this.ValueElement, this.SetDateValue(this.Date, this.ValueElement));
            this.RenderDisplay();
        };
        this.Date2 = new wnDate(this.Date);
        this.Date2.SetDate(new Date(this.GetElementValue(this.Value2Element)));
        this.Date2.DateChanged = () => {
            if (this.Date.GreaterThan(this.Date2)) {
                let l = this.Date.ToNumber();
                this.Date.Set(this.Date2);
                this.Date2.SetDateNumber(l);
                this.SetElementValue(this.ValueElement, this.SetDateValue(this.Date, this.ValueElement));
            }
            if (this.Value2Element != undefined)
                this.SetElementValue(this.Value2Element, this.SetDateValue(this.Date2, this.Value2Element));
            this.RenderDisplay();
        };
        this.CurrentDate = new wnDate(this.Date);
        if (this.Date.Year == 0)
            this.CurrentDate.SetDate(new Date());
        this.ToDayDate = new wnDate(this.Date);
        this.ToDayDate.SetDate(new Date());
        this.SecondDate = new wnDate(this.Date);
        this.ThirdDate = new wnDate(this.Date);
        if (this.element.hasAttribute('second-calendar'))
            this.SecondDate.Calendar = Function('return new ' + this.element.getAttribute('second-calendar') + '()')();
        if (this.element.hasAttribute('second-cultureinfo'))
            this.SecondDate.CultureInfo = Function('return new ' + this.element.getAttribute('second-cultureinfo') + '()')();
        if (this.element.hasAttribute('third-calendar'))
            this.ThirdDate.Calendar = Function('return new ' + this.element.getAttribute('third-calendar') + '()')();
        if (this.element.hasAttribute('third-cultureinfo'))
            this.ThirdDate.CultureInfo = Function('return new ' + this.element.getAttribute('third-cultureinfo') + '()')();
        if (this.element.hasAttribute('allowcomment'))
            this.AllowComment = WNparseBoolean(this.element.getAttribute('allowcomment'), false);
        this.AllowDateHoliday = this.AllowComment;
        if (this.element.hasAttribute('allowdateholiday'))
            this.AllowDateHoliday = WNparseBoolean(this.element.getAttribute('allowdateholiday'), false);
        if (this.element.hasAttribute('nocommoncomment'))
            this.NoCommonComment = WNparseBoolean(this.element.getAttribute('nocommoncomment'), false);
        this.Comment = [];
        let tmp = this.element.querySelectorAll('comment');
        for (var i = 0; i < tmp.length; i++) {
            let year = WNparseNumber(tmp[i].getAttribute('year'), 0);
            let month = WNparseNumber(tmp[i].getAttribute('month'), 0);
            let day = WNparseNumber(tmp[i].getAttribute('day'), 0);
            let holiday = WNparseBoolean(tmp[i].getAttribute('holiday'), false);
            let text = WNparseString(tmp[i].getAttribute('text'), '');
            this.Comment.push({ 'year': year, 'month': month, 'day': day, 'holiday': holiday, 'text': text });
        }
        this.AddHead();
        this.AddSelectMonthYear();
        this._body = document.createElement('div');
        this._body.className = 'calendar-body';
        this._body.dir = this.element.dir;
        this.element.appendChild(this._body);
        this.refresh();
    }
    get value() { return this.Date.ToDateTime(); }
    set value(value) {
        this.Date.SetDate(value);
        this.CurrentDate.Set(this.Date);
        this.refresh();
        this.RenderDisplay();
    }
    previous() {
        this.CurrentDate.AddMonths(-this._viewcount);
        this.refresh();
    }
    next() {
        this.CurrentDate.AddMonths(this._viewcount);
        this.refresh();
    }
    now() {
        this.CurrentDate.Set(this.ToDayDate);
        this.refresh();
    }
    SelectDate(date) {
        if (this.DateRange) {
            if (this._rangestate == 0) {
                this.Date.SetDateNumber(date);
                this.Date2.SetDateNumber(date);
                this._rangestate = 1;
                event.stopPropagation();
            }
            else {
                this.Date2.SetDateNumber(date);
                this._rangestate = 0;
            }
        }
        else {
            this.Date.SetDateNumber(date);
        }
        this.CurrentDate.Set(this.Date);
        this.refresh();
    }
    SetMonth(Month) {
        this.CurrentDate.Month = Month;
        this._selectmonthyear.classList.add('hide');
        this.refresh();
    }
    SetYear(Year) {
        this.CurrentDate.Year = Year;
        this.refresh();
    }
    showmonthyear() {
        if (this._body.classList.contains('hide')) {
            this._selectmonthyear.classList.add('hide');
            this._body.classList.remove('hide');
            return;
        }
        let months = WNGetNodesList(".calendar-select-month>button", this._selectmonthyear);
        for (var i = 0; i < months.length; i++) {
            months[i].classList.remove('button-active');
            if (i == this.CurrentDate.Month - 1)
                months[i].classList.add('button-active');
        }
        this._selectyear.innerHTML = '';
        for (var i = this.CurrentDate.Year - 50; i < this.CurrentDate.Year + 50; i++) {
            let button = document.createElement('button');
            button.textContent = WNNaitveDigit(i, this.Date.CultureInfo, this.NaitveDigit);
            const t = i;
            button.addEventListener('click', () => {
                this.SetYear(t);
                if (this.OnlyMonthYear) {
                    this.CurrentDate.Day = Math.floor(this.CurrentDate.DaysInMonth / 2);
                    this.SelectDate(this.CurrentDate.ToNumber());
                }
                else {
                    this._selectmonthyear.classList.add('hide');
                    this._body.classList.remove('hide');
                    event.stopPropagation();
                }
            });
            if (t == this.CurrentDate.Year) {
                button.classList.add('button-active');
            }
            this._selectyear.appendChild(button);
        }
        this._selectmonthyear.classList.remove('hide');
        this._body.classList.add('hide');
        this._selectyear.scrollTop = (this._selectyear.scrollHeight - this._selectyear.clientHeight) / 2;
    }
    AddHead() {
        let calendarhead = document.createElement('div');
        calendarhead.className = 'calendar-head';
        calendarhead.dir = this.element.dir;
        let prev = document.createElement('button');
        prev.className = 'primary';
        prev.addEventListener('click', () => {
            this.previous();
            event.stopPropagation();
        });
        calendarhead.appendChild(prev);
        let now = document.createElement('button');
        now.className = 'secondary';
        now.addEventListener('click', () => {
            this.now();
            event.stopPropagation();
        });
        calendarhead.appendChild(now);
        this._monthyearcaption = document.createElement('label');
        calendarhead.appendChild(this._monthyearcaption);
        if (!this.OnlyMonthYear) {
            let showmonthyear = document.createElement('button');
            showmonthyear.className = 'dropdown-toggle secondary';
            showmonthyear.addEventListener('click', () => {
                this.showmonthyear();
                event.stopPropagation();
            });
            calendarhead.appendChild(showmonthyear);
        }
        let next = document.createElement('button');
        next.className = 'primary';
        next.addEventListener('click', () => {
            this.next();
            event.stopPropagation();
        });
        calendarhead.appendChild(next);
        this.element.appendChild(calendarhead);
    }
    AddSelectMonthYear() {
        this._selectmonthyear = document.createElement('div');
        this._selectmonthyear.className = 'calendar-select-monthyear hide';
        this._selectmonthyear.dir = this.element.dir;
        let selectmonth = document.createElement('div');
        selectmonth.dir = this.element.dir;
        selectmonth.className = 'calendar-select-month';
        for (var i = 0; i <= this.Date.CultureInfo.DateTimeFormat.MonthNames[this._calendarname].length; i++) {
            let button = document.createElement('button');
            let s = this.Date.CultureInfo.DateTimeFormat.MonthNames[this._calendarname][i];
            if (s != '') {
                button.textContent = s;
                const t = i + 1;
                button.addEventListener('click', (e) => {
                    this._selectmonthyear.classList.add('hide');
                    this._body.classList.remove('hide');
                    this.SetMonth(t);
                    e.target.classList.add('button-active');
                    event.stopPropagation();
                });
                selectmonth.appendChild(button);
            }
        }
        this._selectmonthyear.appendChild(selectmonth);
        this._selectyear = document.createElement('div');
        this._selectyear.className = 'calendar-select-year';
        this._selectyear.dir = this.element.dir;
        this._selectmonthyear.appendChild(this._selectyear);
        this.element.appendChild(this._selectmonthyear);
    }
    AddMonthView(showDate, addWeekName) {
        let monthbody = document.createElement('div');
        monthbody.className = 'calendar-month';
        monthbody.dir = this.element.dir;
        let _holidayIndex = 0;
        for (var i = this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek; i < this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek + 7; i++) {
            let wdidx = i < 7 ? i : i - 7;
            if (wdidx == this.Date.CultureInfo.DateTimeFormat.Holiday) {
                _holidayIndex = i - this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek;
                break;
            }
        }
        if (addWeekName) {
            let weekname = document.createElement('div');
            weekname.dir = this.element.dir;
            weekname.className = 'calendar-weekname';
            for (var i = this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek; i < this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek + 7; i++) {
                let wdidx = i < 7 ? i : i - 7;
                let name = document.createElement('span');
                name.textContent = this.Date.CultureInfo.DateTimeFormat.ShortestDayNames[wdidx];
                if (wdidx == this.Date.CultureInfo.DateTimeFormat.Holiday) {
                    name.className = 'holiday';
                    _holidayIndex = i - this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek;
                }
                weekname.appendChild(name);
            }
            monthbody.appendChild(weekname);
        }
        let dayview = document.createElement('div');
        dayview.dir = this.element.dir;
        dayview.className = 'calendar-dayview';
        let monthname = document.createElement('div');
        monthname.className = 'calendar-month-name';
        monthname.dir = this.element.dir;
        monthname.textContent = this.Date.CultureInfo.DateTimeFormat.MonthNames[this._calendarname][showDate.Month - 1];
        dayview.appendChild(monthname);
        let weeknumber = document.createElement('div');
        weeknumber.className = 'calendar-week-number';
        weeknumber.dir = this.element.dir;
        showDate.Day = 1;
        let startweeknumber = showDate.WeekOfYear;
        showDate.Day = showDate.DaysInMonth;
        let endweeknumber = showDate.WeekOfYear;
        for (var i = startweeknumber; i <= endweeknumber; i++) {
            let name = document.createElement('span');
            name.textContent = WNNaitveDigit(i, this.Date.CultureInfo, this.NaitveDigit);
            weeknumber.appendChild(name);
        }
        dayview.appendChild(weeknumber);
        let days = document.createElement('div');
        days.dir = this.element.dir;
        days.className = 'calendar-days';
        showDate.Day = 1;
        let skip = (7 - this.Date.CultureInfo.DateTimeFormat.FirstDayOfWeek + showDate.DayOfWeek) % 7;
        for (var i = 0; i < skip; i++) {
            let button = document.createElement('button');
            button.className = 'readonly';
            days.appendChild(button);
        }
        let n1 = this.Date.ToNumberDate();
        let n2 = this.Date2.ToNumberDate();
        for (var i = 1; i <= showDate.DaysInMonth; i++) {
            showDate.Day = i;
            let button = document.createElement('button');
            if (((i + skip - 1) % 7) == _holidayIndex)
                button.classList.add('holiday');
            let s = WNNaitveDigit(i, this.Date.CultureInfo, this.NaitveDigit);
            if (this.SecondDate.Calendar != this.Date.Calendar) {
                this.SecondDate.SetDateNumber(showDate.ToNumberDate());
                s += '<span>' + WNNaitveDigit(this.SecondDate.Day, this.SecondDate.CultureInfo, this.NaitveDigit) + '</span>';
            }
            if (this.ThirdDate.Calendar != this.Date.Calendar) {
                this.ThirdDate.SetDateNumber(showDate.ToNumberDate());
                s += '<span>' + WNNaitveDigit(this.ThirdDate.Day, this.ThirdDate.CultureInfo, this.NaitveDigit) + '</span>';
            }
            button.innerHTML = s;
            if (showDate.Year == this.ToDayDate.Year && showDate.Month == this.ToDayDate.Month && showDate.Day == this.ToDayDate.Day)
                button.classList.add('today');
            const t = showDate.ToNumberDate();
            button.addEventListener('click', () => { this.SelectDate(t); });
            if (this.DateRange) {
                if (t == n1 && n1 == n2)
                    button.classList.add('active');
                else if (t == n1 && n1 != n2) {
                    button.classList.add('sel-start');
                }
                else if (t > n1 && t < n2)
                    button.classList.add('sel');
                else if (t == n2)
                    button.classList.add('sel-end');
                if (button.className.includes('sel'))
                    button.classList.remove('today');
            }
            else {
                if (t == n1)
                    button.classList.add('active');
            }
            days.appendChild(button);
            if (this.AllowDateHoliday || this.AllowComment) {
                let comment = this.GetAllowComment(showDate.ToNumber());
                if (comment[1])
                    button.classList.add('holiday');
                if (comment[0] && this.AllowComment) {
                    button.setAttribute('wn-tooltip', comment[0]);
                    button.setAttribute('wn-tooltip-class', 'tooltip-arrow w-max-1500r');
                    new wntooltip(button);
                }
            }
        }
        dayview.appendChild(days);
        monthbody.appendChild(dayview);
        this._body.appendChild(monthbody);
    }
    refresh() {
        this._monthyearcaption.textContent = this.CurrentDate.toString('MMMM yyyy');
        this._body.innerHTML = '';
        let tDate = new wnDate(this.CurrentDate);
        tDate.Day = 1;
        if (this.OnlyMonthYear) {
            tDate.Day = Math.floor(tDate.DaysInMonth / 2);
            this.showmonthyear();
        }
        else {
            if (this._viewcount > 2)
                tDate.AddMonths(Math.trunc(this._viewcount / -2));
            for (var i = 0; i < this._viewcount; i++) {
                this.AddMonthView(tDate, i == 0 || this.element.classList.contains('calendar-horizontal'));
                tDate.Day = 1;
                tDate.AddMonths(1);
            }
        }
    }
    GetAllowComment(date) {
        if (this._lang == null || this._lang == undefined)
            return ['', false];
        let ln = this._lang["cdd"];
        let holiday = false;
        let tooltip = '';
        if (ln != null && !this.NoCommonComment) {
            for (let ci in ln) {
                let m = new wnDate();
                m.Calendar = Function('return new ' + ci + '()')();
                m.SetDateNumber(date);
                if (ln[ci] != undefined) {
                    let f = ln[ci].filter(e => e.month == m.Month && e.day == m.Day);
                    for (var i = 0; i < f.length; i++) {
                        if (f[i]['holiday'] == true) {
                            holiday = true;
                            tooltip += '<b class="error-text">' + f[i]['text'] + '</b><br/>';
                        }
                        else
                            tooltip += f[i]['text'] + '<br/>';
                    }
                }
                tooltip = tooltip.trim() + '<hr/>';
            }
        }
        let m = new wnDate(this.Date);
        m.SetDateNumber(date);
        let f = this.Comment.filter(e => e.month == m.Month && e.day == m.Day);
        for (var i = 0; i < f.length; i++) {
            let add = true;
            if (f[i].year != undefined && f[i].year > 0 && f[i].year != m.Year)
                add = false;
            if (add) {
                if (f[i]['holiday'] == true) {
                    holiday = true;
                    tooltip += '<b class="error-text">' + f[i]['text'] + '</b><br/>';
                }
                else
                    tooltip += f[i]['text'] + '<br/>';
            }
        }
        tooltip = tooltip.replace(' - ', '<br/>');
        while (tooltip.includes('<hr/><hr/>'))
            tooltip = tooltip.replace('<hr/><hr/>', '<hr/>');
        while (tooltip.endsWith('<hr/>'))
            tooltip = tooltip.substring(0, tooltip.length - 5);
        while (tooltip.startsWith('<hr/>'))
            tooltip = tooltip.substring(5);
        return [tooltip, holiday];
    }
    RenderDisplay() {
        if (this.ontextinput)
            return;
        let ret1 = this.Date.toString(this.DisplayFormat, this.NaitveDigit);
        let ret2 = this.Date2.toString(this.DisplayFormat, this.NaitveDigit);
        if (this.DisplayElement != undefined) {
            if (this.DateRange) {
                if (this.Display2Element == undefined) {
                    this.SetElementValue(this.DisplayElement, ret1 + ' ~ ' + ret2);
                }
                else {
                    this.SetElementValue(this.DisplayElement, ret1);
                    this.SetElementValue(this.Display2Element, ret2);
                }
            }
            else
                this.SetElementValue(this.DisplayElement, ret1);
        }
    }
    SetValueFromDisplay() {
        this.ontextinput = true;
        let ret = ['', ''];
        ret[0] = this.GetElementValue(this.DisplayElement);
        if (this.DateRange) {
            ret[1] = this.GetElementValue(this.Display2Element);
        }
        if (ret[0].includes('~'))
            ret = ret[0].split('~');
        this.Date.SetDateString(WNDeNaitveDigit(ret[0], this.Date.CultureInfo));
        this.Date2.SetDateString(WNDeNaitveDigit(ret[1], this.Date.CultureInfo));
        this.CurrentDate.Set(this.Date);
        this.refresh();
        this.ontextinput = false;
    }
    SetValueFromValue() {
        this.ontextinput = true;
        this.Date.SetDate(new Date(this.GetElementValue(this.ValueElement)));
        if (this.DateRange) {
            this.Date2.SetDate(new Date(this.GetElementValue(this.Value2Element)));
        }
        this.CurrentDate.Set(this.Date);
        this.refresh();
        this.ontextinput = false;
        this.RenderDisplay();
    }
    SetElementValue(elem, value) {
        if (elem != undefined)
            if (elem.localName == 'input')
                elem.value = value;
            else
                elem.textContent = value;
    }
    GetElementValue(elem) {
        let ret = '';
        if (elem != undefined)
            if (elem.localName == 'input')
                ret = elem.value;
            else
                ret = elem.textContent;
        return ret;
    }
    SetDateValue(date, ValueElement) {
        let tDate = new wnDate(date);
        tDate.SetDate(new Date(this.GetElementValue(ValueElement)));
        tDate.SetYMD(date.Year, date.Month, date.Day);
        date.SetYMD(tDate.Year, tDate.Month, tDate.Day, tDate.Hour, tDate.Minute, tDate.Second, tDate.Milliseconds);
        return tDate.ToDateTime().toISOString();
    }
}
class wncarousel {
    constructor(elem) {
        this._interval = 10000;
        this._autoplay = true;
        this._playState = 'ready';
        this._hoverpause = true;
        this._oldindex = -1;
        this._index = 0;
        this._transitionDelay = 600;
        this._touch_x = 0;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
        if (this.autoplay) {
            this._playState = 'play';
            this.Play();
        }
    }
    get interval() { return this._interval; }
    set interval(value) { this._interval = value; }
    get autoplay() { return this._autoplay; }
    set autoplay(value) { this._autoplay = value; }
    get hoverpause() { return this._hoverpause; }
    set hoverpause(value) {
        this._hoverpause = value;
        if (this._hoverpause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play')
                this._playState = 'pause'; });
            this.element.addEventListener("mouseleave", () => { if (this._playState == 'pause')
                this._playState = 'play'; });
        }
    }
    ;
    Init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 5000);
        this.autoplay = WNparseBoolean(this.element.getAttribute("autoplay"), true);
        this.hoverpause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
        this._items = WNGetNodesList(".carousel-item", this.element);
        this._index = 0;
        for (var i = 0; i < this._items.length; i++) {
            if (this._items[i].classList.contains('active')) {
                this._index = i;
                break;
            }
        }
        let t = getComputedStyle(this._items[0]).transitionDuration.toLowerCase();
        if (t.endsWith('ms'))
            this._transitionDelay = parseInt(t.substring(0, t.length - 2));
        else if (t.endsWith('s'))
            this._transitionDelay = parseFloat(t.substring(0, t.length - 1)) * 1000;
        this.NextButton = this.element.querySelector('.carousel-next');
        this.NextButton?.addEventListener('click', () => { this.Next(); });
        this.PreviousButton = this.element.querySelector('.carousel-previous');
        this.PreviousButton?.addEventListener('click', () => { this.Previous(); });
        this.element.addEventListener("touchstart", (e) => { this._touch_x = e.touches[0].clientX; });
        this.element.addEventListener("touchend", (e) => {
            if (this._touch_x > e.changedTouches[0].clientX)
                this.Previous();
            if (this._touch_x < e.changedTouches[0].clientX)
                this.Next();
        });
        this.element.addEventListener("mousedown", (e) => { this._touch_x = e.clientX; });
        this.element.addEventListener("mouseup", (e) => {
            if (this._touch_x > e.clientX)
                this.Previous();
            if (this._touch_x < e.clientX)
                this.Next();
        });
        let indicators = this.element.querySelector('.carousel-indicators');
        if (indicators != null) {
            if (indicators.children.length == 0) {
                for (var i = 0; i < this._items.length; i++) {
                    let indicator = document.createElement('div');
                    indicator.className = 'indicator-item';
                    indicator.setAttribute('indicator-index', i.toString());
                    indicators.appendChild(indicator);
                }
            }
            this._indicators = WNGetNodesList(".indicator-item", indicators);
            this._indicators.forEach((e) => { e.addEventListener('click', () => { this.ShowSlide(e); }); });
            let t = this._index;
            this._index = -1;
            this.ShowSlide(this._indicators[t]);
        }
    }
    Play() {
        window.clearTimeout(this._durationHandle);
        let interval = this.interval;
        if (this._playState == 'pause') {
            this.Clear();
            this._items[this._index].classList.add('active');
        }
        else
            interval = this.Show();
        if (this._playState != 'ready')
            this._durationHandle = window.setTimeout(() => {
                if (this._playState == 'play')
                    this.AddIndex(1);
                this.Play();
            }, interval);
    }
    Show() {
        let oldElement = null;
        if (this._oldindex != -1) {
            oldElement = this._items[this._oldindex];
            oldElement.classList.remove('active');
            oldElement.classList.add('end');
        }
        let nextElement = this._items[this._index];
        nextElement.classList.add('start');
        if (this._indicators != null) {
            if (this._oldindex > -1 && this._oldindex < this._indicators.length)
                this._indicators[this._oldindex].classList.remove('active');
            if (this._index < this._indicators.length)
                this._indicators[this._index].classList.add('active');
        }
        this._effectHandle = setTimeout(() => {
            nextElement.classList.remove('start');
            nextElement.classList.add('active');
            if (oldElement != null)
                oldElement.classList.remove('end');
        }, this._transitionDelay);
        return WNparseNumber(nextElement.getAttribute("interval"), this.interval);
    }
    Clear() {
        window.clearTimeout(this._effectHandle);
        window.clearTimeout(this._durationHandle);
        for (var i = 0; i < this._items.length; i++) {
            this._items[i].classList.remove('start');
            this._items[i].classList.remove('end');
            this._items[i].classList.remove('active');
            if (this._indicators != null && i < this._indicators.length)
                this._indicators[i].classList.remove('active');
        }
    }
    Next() {
        this.AddIndex(1);
        if (this.autoplay)
            this._playState = 'play';
        this.Clear();
        this.Play();
    }
    Previous() {
        this.AddIndex(-1);
        if (this.autoplay)
            this._playState = 'play';
        this.Clear();
        this.Play();
    }
    AddIndex(skip) {
        this._oldindex = this._index;
        this._index += skip;
        if (this._index >= this._items.length)
            this._index = 0;
        if (this._index < 0)
            this._index = this._items.length - 1;
    }
    ShowSlide(element) {
        let index = WNparseNumber(element.getAttribute('indicator-index'), 0);
        if (this._index == index)
            return;
        this._oldindex = this._index;
        this._index = index;
        if (this.autoplay)
            this._playState = 'play';
        this.Clear();
        this.Play();
    }
}
class wnclosebutton {
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Render();
        }
    }
    Render() {
        this.element.addEventListener("click", (e) => {
            let elem = e.target;
            if (elem.hasAttribute('close-parent')) {
                if (this.element.parentElement.classList.contains('show'))
                    this.element.parentElement.classList.remove('show');
                else
                    this.element.parentElement.classList.add('hide');
            }
            else if (elem.hasAttribute('remove-id')) {
                let el = WNGetNodesList(elem.getAttribute('remove-id'));
                for (var i = 0; i < el.length; i++) {
                    el[i].remove();
                }
            }
            else if (elem.hasAttribute('target')) {
                let el = WNGetNodesList(elem.getAttribute('target'));
                let addclass = null;
                let removeclass = null;
                if (elem.hasAttribute('add-class'))
                    addclass = elem.getAttribute('add-class').split(' ');
                if (elem.hasAttribute('remove-class'))
                    removeclass = elem.getAttribute('remove-class').split(' ');
                for (var i = 0; i < el.length; i++) {
                    let elm = el[i];
                    if (addclass != null)
                        for (var j = 0; j < addclass.length; j++)
                            elm.classList.add(addclass[j]);
                    if (removeclass != null)
                        for (var j = 0; j < removeclass.length; j++)
                            elm.classList.remove(removeclass[j]);
                }
            }
        });
    }
}
class wncollapse {
    constructor(elem) {
        this._target = '';
        this._remove_control = '';
        this._target_mode = 'toggle';
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        this.element.removeEventListener("click", () => { this.collapse(); });
        if (this.element.hasAttribute('target'))
            this._target = this.element.getAttribute('target');
        if (this.element.hasAttribute('remove'))
            this._remove_control = this.element.getAttribute('remove');
        if (this.element.hasAttribute('target-mode')) {
            this._target_mode = this.element.getAttribute('target-mode').toLowerCase();
            if (this._target_mode != 'toggle' && this._target_mode != 'show' && this._target_mode != 'hide')
                this._target_mode = 'toggle';
        }
        if (this.element.hasAttribute('beforecollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('beforecollapse'));
        if (this.element.hasAttribute('aftercollapse'))
            this.beforecollapse = WNGenerateFunction(this.element.getAttribute('aftercollapse'));
        this.element.addEventListener("click", () => { this.collapse(); });
    }
    collapse() {
        if (this.beforecollapse)
            this.beforecollapse();
        this.HideControls(this._remove_control);
        let TargetNodes = WNGetNodesList(this._target, document, this.element);
        let countshow = 0;
        let counthide = 0;
        for (var i = 0; i < TargetNodes.length; i++) {
            if (TargetNodes[i].classList.contains('show'))
                countshow++;
            else
                counthide++;
        }
        let mode = this._target_mode;
        if (this._target_mode == 'toggle') {
            if (countshow > counthide) {
                mode = 'hide';
            }
            else {
                mode = 'show';
            }
        }
        if (this.element != null) {
            this.element.classList.remove('collapsing');
            if (mode == 'show') {
                this.element.classList.remove('collapsed');
            }
            else if (mode == 'hide')
                this.element.classList.add('collapsed');
        }
        for (var i = 0; i < TargetNodes.length; i++) {
            if (mode == 'show') {
                TargetNodes[i].classList.add('show');
            }
            else if (mode == 'hide') {
                if (TargetNodes[i].classList.contains('show')) {
                    TargetNodes[i].classList.add('collapsing');
                    if (getComputedStyle(TargetNodes[i]).animationName != 'none') {
                        TargetNodes[i].addEventListener('animationend', (e) => {
                            e.currentTarget.classList.remove('show');
                            e.currentTarget.classList.remove('collapsing');
                        }, { once: true, capture: true });
                    }
                    else {
                        TargetNodes[i].classList.remove('show');
                        TargetNodes[i].classList.remove('collapsing');
                    }
                }
            }
        }
        if (this.aftercollapse)
            this.aftercollapse();
    }
    HideControls(list) {
        let elems = WNGetNodesList(list);
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('show');
            elems[i].classList.add('collapsed');
        }
    }
    set target(value) { this._target = value; }
    get target() { return this._target; }
    set remove(value) { this._remove_control = value; }
    get remove() { return this._remove_control; }
    set targetmode(value) { this._target_mode = value; }
    get targetmode() { return this._target_mode; }
}
class wnconfirm {
    constructor() {
        this.title = '';
        this.body = '';
        this.buttons = [];
        this.modalclass = '';
        this.headclass = '';
        this.bodyclass = '';
        this.footerclass = '';
        this.showclass = "animation zoomIn";
        this.closebutton = true;
    }
    async show() {
        if (typeof (this.body) == 'object') {
            this.body = this.body.outerHTML;
        }
        this.element = document.createElement("div");
        this.element.className = `modal darkback ${this.modalclass}`;
        this.element.setAttribute("showclass", this.showclass);
        let modaldialog = document.createElement('div');
        modaldialog.className = "modal-dialog";
        modaldialog.innerHTML = `
        <div class="modal-header ${this.headclass}">
            <h5 class="modal-title">${this.title}</h5>` +
            (this.closebutton ? `<button class="close" close-parent=""></button>` : '') +
            `</div>
        <div class="modal-body ${this.bodyclass}">
            ${this.body}
        </div>`;
        let footer = document.createElement('div');
        footer.className = `modal-footer  ${this.footerclass}`;
        for (var i = 0; i < this.buttons.length; i++) {
            let btn = document.createElement("button");
            btn.className = this.buttons[i].class ?? '';
            btn.innerHTML = this.buttons[i].caption ?? '';
            let click = this.buttons[i]?.click;
            btn.onclick = async () => {
                if (click != null) {
                    let r = await click(this);
                    if (r) {
                        this.modal.hide();
                        this.element.remove();
                    }
                }
                else {
                    this.modal.hide();
                    this.element.remove();
                }
            };
            footer.appendChild(btn);
        }
        modaldialog.appendChild(footer);
        this.element.appendChild(modaldialog);
        document.body.appendChild(this.element);
        if (this.modal == null)
            this.modal = new wnmodal(this.element);
        else
            this.modal.element = this.element;
        await this.modal.show();
        modaldialog.focus();
        return "";
    }
    ;
}
class wncounter {
    constructor(elem) {
        this.countTo = 0;
        this.countNum = 0;
        this.countStep = 1;
        this.duration = 1000;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Render();
        }
    }
    Render() {
        if (this.element.hasAttribute('count'))
            this.countTo = WNparseNumber(this.element.getAttribute('count'));
        this.countNum = WNparseNumber(this.element.innerText, 0);
        if (this.element.hasAttribute('duration'))
            this.duration = WNparseNumber(this.element.getAttribute('duration'), 1000);
        this.countStep = (this.countTo - this.countNum) / this.duration;
        this.Start(this);
        window.addEventListener("scroll", () => this.Start(this));
    }
    Start(e) {
        if ((window.scrollY + window.innerHeight - e.element.offsetTop) > 0 && e.countNum < e.countTo) {
            let id = setInterval(() => {
                e.countNum += e.countStep;
                if (e.countNum > e.countTo) {
                    e.countNum = e.countTo;
                    clearInterval(id);
                }
                e.element.innerText = Math.floor(e.countNum).toString();
                window.requestAnimationFrame(() => { });
            }, e.duration / (e.countTo / e.countStep));
        }
    }
}
class wndateshow {
    constructor(elem) {
        this.format = '';
        this.today = false;
        this.Date = new wnDate();
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        if (this.element.hasAttribute('calendar'))
            this.Date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')();
        if (this.element.hasAttribute('cultureinfo'))
            this.Date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')();
        this.format = this.Date.CultureInfo.DateTimeFormat.FullDateTimePattern;
        if (this.element.hasAttribute('format'))
            this.format = this.element.getAttribute('format');
        if (this.element.hasAttribute('today'))
            this.today = WNparseBoolean(this.element.getAttribute('today'), false);
        if (this.today && this.format == this.Date.CultureInfo.DateTimeFormat.FullDateTimePattern) {
            this.format = this.Date.CultureInfo.DateTimeFormat.LongDatePattern;
        }
        if (this.element.hasAttribute('live')) {
            setInterval(() => {
                this.Date.SetDate(new Date());
            }, WNparseNumber(this.element.getAttribute('live')));
        }
        if (this.element.localName == 'input')
            this.value = new Date(this.element.value);
        else
            this.value = new Date(this.element.innerText);
        this.Date.DateChanged = () => { this.refresh(); };
    }
    get value() { return this._value; }
    set value(value) { this._value = value; this.Date.SetDate(this._value); this.refresh(); }
    refresh() {
        if (this.today)
            this.Date.SetDate(new Date());
        let disp = this.Date.toString(this.format);
        if (this.element.localName == 'input') {
            this.element.value = disp;
        }
        else
            this.element.innerHTML = disp;
    }
}
let DropdownClickHandled = false;
let WindowClickHandled = false;
let LastDropdownOpened = [];
class wndropdown {
    constructor(elem) {
        this.CheckOnlyDropDown = false;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            if (this.element.hasAttribute('wn-dropdown')) {
                this.dropdown = document.getElementById(this.element.getAttribute('wn-dropdown'));
            }
            else {
                this.dropdown = elem.querySelector("[class*='dropdown']");
                if (this.dropdown == null) {
                    if (this.element.nextElementSibling.classList.contains('dropdown'))
                        this.dropdown = this.element.nextElementSibling;
                }
            }
            this.Render();
        }
    }
    Render() {
        if (!DropdownClickHandled) {
            window.addEventListener("click", (e) => this.WindowClick(e));
            window.addEventListener("scroll", (e) => this.WindowClick(e));
            window.addEventListener("resize", (e) => this.WindowClick(e));
            DropdownClickHandled = true;
        }
        let defaultevent = "click";
        if (this.element.hasAttribute('wn-dropdown-event'))
            defaultevent = this.element.getAttribute('wn-dropdown-event');
        if (defaultevent !== '')
            defaultevent.split(',').forEach((s) => {
                this.element.addEventListener(s.trim(), (e) => {
                    if (this.CheckOnlyDropDown) {
                        if ((e.target == this.dropdown))
                            this._Toggle();
                    }
                    else
                        this._Toggle();
                });
            });
        if (this.element.hasAttribute('onbeforeshow'))
            this.beforeshow = new Function('t', this.element.getAttribute('onbeforeshow'));
        if (this.element.hasAttribute('onbeforehide'))
            this.beforehide = new Function('t', this.element.getAttribute('onbeforehide'));
        if (this.element.hasAttribute('onaftershow'))
            this.aftershow = new Function('t', this.element.getAttribute('onbaftershow'));
        if (this.element.hasAttribute('onafterhide'))
            this.afterhide = new Function('t', this.element.getAttribute('onafterhide'));
    }
    WindowClick(event) {
        if (WindowClickHandled || LastDropdownOpened == null) {
            WindowClickHandled = false;
            return;
        }
        let doHide = false;
        if (event.target == document || event.target == window)
            doHide = true;
        else if (event.target.getAttribute('wn-type') != 'dropdown' && !WNParentHaveClass(event.target, 'dropdown'))
            doHide = true;
        if (doHide) {
            while (LastDropdownOpened.length > 0) {
                let obj = LastDropdownOpened.pop();
                obj.classList.remove("show");
            }
        }
    }
    Toggle() {
        WindowClickHandled = true;
        this._Toggle();
    }
    _Toggle() {
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        let hide = true;
        for (var i = 0; i < LastDropdownOpened.length; i++) {
            if (WNContainElement(this.element, LastDropdownOpened[i])) {
                hide = false;
                break;
            }
        }
        if (hide)
            this._Hide();
        if (!this.dropdown.classList.contains("show"))
            this._Show();
        else
            this._Hide();
    }
    Hide() {
        this._Hide();
    }
    _Hide() {
        WindowClickHandled = true;
        if (this.dropdown.classList.contains('single') && this.dropdown.classList.contains('show')) {
            this.dropdown.classList.remove("show");
            return;
        }
        if (this.beforehide != null)
            this.beforehide(this);
        while (LastDropdownOpened.length > 0) {
            let obj = LastDropdownOpened.pop();
            obj.classList.remove("show");
        }
        if (this.afterhide != null)
            this.afterhide(this);
    }
    Show() {
        this._Show();
    }
    _Show() {
        WindowClickHandled = true;
        this.SetPosition();
        if (this.beforeshow != null)
            this.beforeshow(this);
        this.dropdown.classList.add("show");
        if (!this.dropdown.classList.contains('single')) {
            LastDropdownOpened.push(this.dropdown);
        }
        this.dropdown.focus();
        if (this.aftershow != null)
            this.aftershow(this);
    }
    HideAllDropDowns() {
        LastDropdownOpened.forEach((x) => { x.classList.remove('show'); });
    }
    SetPosition() {
        let dropdown_cs = getComputedStyle(this.dropdown);
        let dropdown_pos = this.dropdown.getBoundingClientRect();
        let element_pos = this.element.getBoundingClientRect();
        let offsetLeft = element_pos.left;
        let offsetTop = element_pos.top;
        let marginTop = +parseInt(dropdown_cs.marginTop);
        let rtl = dropdown_cs.direction == 'rtl';
        let top = offsetTop + element_pos.height;
        let start = 0;
        let width = dropdown_pos.width;
        if (this.dropdown.className.includes('align-fit')) {
            if (width < element_pos.width)
                width = element_pos.width;
        }
        if (element_pos.bottom + dropdown_pos.height + marginTop * 2 > window.innerHeight || this.element.className.includes('pos-top'))
            top = offsetTop - dropdown_pos.height - marginTop * 2;
        if (rtl) {
            start = element_pos.right - width;
            if (this.dropdown.className.includes('align-end')) {
                start = offsetLeft;
            }
        }
        else {
            start = offsetLeft;
            if (this.dropdown.className.includes('align-end')) {
                start = offsetLeft + element_pos.width - width;
            }
        }
        if (start < 0)
            start = offsetLeft;
        if (start + width > window.innerWidth)
            start = window.innerWidth - width;
        if (this.element.className.includes('pos-start')) {
            top = offsetTop - dropdown_pos.height / 2;
            if (rtl)
                start = offsetLeft + this.element.offsetWidth + marginTop;
            else
                start = offsetLeft - width - marginTop;
        }
        if (this.element.className.includes('pos-end')) {
            top = offsetTop - dropdown_pos.height / 2;
            if (rtl)
                start = offsetLeft - width - marginTop;
            else
                start = offsetLeft + this.element.offsetWidth + marginTop;
        }
        if (this.element.className.includes('pos-bottom'))
            top = offsetTop + element_pos.height;
        this.dropdown.style.top = top + "px";
        this.dropdown.style.left = start + "px";
        if (width > 0)
            this.dropdown.style.width = width + "px";
        else
            this.dropdown.style.width = '';
    }
}
class wneditor {
    constructor(elem) {
        this.DefaultFonts = 'Default On Page, Arial, Tahoma, Verdana, Helvetica, Trebuchet MS, Times New Roman, Georgia, Garamond, Courier New, Brush Script MT';
        this.DefaultFontSize = 'X Small:4px, Small:8px, Medium:12px, Normal:16px, Large:20px, X Large:24px,2X Large:32px,3X Large:48px';
        this.DefaultTags = 'Paragraph:p,Heading 1:h1,Heading 2:h2,Heading 3:h3,Heading 4:h4,Heading 5:h5,Heading 6:h6,Preformat:pre';
        this.DefaultColorPicker = [
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
        this.ParagraphSeparator = 'p';
        this._editorType = 'standard';
        this._editor_source_mode = 'html';
        this._colorPickerStyle = '';
        this._colorPickerselectTag = false;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    rgb2hex(rgb) {
        let ret = '';
        rgb = rgb.toLowerCase();
        if (rgb.includes('rgba'))
            ret = `#${rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
        else if (rgb.includes('rgb'))
            ret = `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
        return ret;
    }
    Init() {
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
            this.ValueElement = document.getElementById(WNparseString(this.element.getAttribute('value-id'), ''));
            this.Html = this.ValueElement?.value;
        }
        else
            this.Html = '';
        if (this.element.hasAttribute('onchange'))
            this.change = WNGenerateFunction(this.element.getAttribute('onchange'), 't');
        this.OldHtml = this.Html;
    }
    AddToolBar() {
        if (this._editorType == 'simple')
            return;
        if (this._editortoolbar == undefined || this._editortoolbar == null) {
            this._editortoolbar = document.createElement('div');
            this._editortoolbar.className = 'editor-toolbar';
            this.element.appendChild(this._editortoolbar);
        }
        if (this._toolbar == undefined || this._editortoolbar == null) {
            this._toolbar = document.createElement('div');
            this._toolbar.className = 'toolbar';
            this._editortoolbar.appendChild(this._toolbar);
        }
        if (this._editor_undo == null && this._editor_redo == null
            && (this._editorType == 'full')) {
            this._editor_undo = this.CreateElement('button', 'button editor-undo');
            this._editor_redo = this.CreateElement('button', 'button editor-redo');
            let grp = this.CreateElement('div', 'button-group');
            grp.appendChild(this._editor_undo);
            grp.appendChild(this._editor_redo);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_bold == null && this._editor_italic == null && this._editor_underline == null && this._editor_strikethrough == null
            && (this._editorType == 'full' || this._editorType == 'standard')) {
            this._editor_bold = this.CreateElement('input', '', 'checkbox');
            this._editor_italic = this.CreateElement('input', '', 'checkbox');
            this._editor_underline = this.CreateElement('input', '', 'checkbox');
            this._editor_strikethrough = this.CreateElement('input', '', 'checkbox');
            let grp = this.CreateElement('div', 'button-group');
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
        if (this._editor_font == null && this._editor_fontsize == null && this._editor_subscript == null && this._editor_superscript == null
            && (this._editorType == 'full')) {
            this._editor_font = this.CreateElement('select', '.editor-font');
            this.FontList = WNparseString(this.element.getAttribute('default-fonts'), this.DefaultFonts).split(',');
            for (var i = 0; i < this.FontList.length; i++) {
                this.FontList[i] = this.FontList[i].trim();
                let itm = document.createElement('option');
                itm.text = this.FontList[i];
                itm.value = this.FontList[i];
                this._editor_font.appendChild(itm);
            }
            this._editor_fontsize = this.CreateElement('select', '.editor-fontsize');
            this.FontSize = WNparseString(this.element.getAttribute('default-fonts'), this.DefaultFontSize).split(',');
            this.FontSize.forEach(x => {
                let xx = x.split(':');
                let itm = document.createElement('option');
                itm.text = xx[0].trim();
                itm.value = xx[1].trim();
                this._editor_fontsize.appendChild(itm);
            });
            this._editor_subscript = this.CreateElement('input', '', 'checkbox');
            this._editor_superscript = this.CreateElement('input', '', 'checkbox');
            this._editor_elementtag = this.CreateElement('select', '.editor-elementtag');
            this.TagList = WNparseString(this.element.getAttribute('default-tags'), this.DefaultTags).split(',');
            this.TagList.forEach(x => {
                let xx = x.split(':');
                let itm = document.createElement('option');
                itm.text = xx[0].trim();
                itm.value = xx[1].trim();
                this._editor_elementtag.appendChild(itm);
            });
            let grp = this.CreateElement('div', 'button-group');
            grp.appendChild(this._editor_font);
            grp.appendChild(this._editor_fontsize);
            grp.appendChild(this._editor_subscript);
            grp.appendChild(this.CreateElement('label', 'button editor-subscript'));
            grp.appendChild(this._editor_superscript);
            grp.appendChild(this.CreateElement('label', 'button editor-superscript'));
            grp.appendChild(this._editor_elementtag);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_alignleft == null && this._editor_aligncenter == null && this._editor_alignright == null &&
            this._editor_alignjustify == null && this._editor_ltr == null && this._editor_rtl == null
            && (this._editorType == 'full' || this._editorType == 'standard')) {
            this._editor_alignleft = this.CreateElement('input', '', 'checkbox');
            this._editor_aligncenter = this.CreateElement('input', '', 'checkbox');
            this._editor_alignright = this.CreateElement('input', '', 'checkbox');
            this._editor_alignjustify = this.CreateElement('input', '', 'checkbox');
            this._editor_ltr = this.CreateElement('input', '', 'checkbox');
            this._editor_rtl = this.CreateElement('input', '', 'checkbox');
            let grp = this.CreateElement('div', 'button-group');
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
        if (this._editor_indent == null && this._editor_outdent == null && this._editor_numberlist == null && this._editor_buletlist == null
            && (this._editorType == 'full')) {
            this._editor_indent = this.CreateElement('button', 'editor-indent');
            this._editor_outdent = this.CreateElement('button', 'editor-outdent');
            this._editor_numberlist = this.CreateElement('button', 'editor-numberlist');
            this._editor_buletlist = this.CreateElement('button', 'editor-buletlist');
            let grp = this.CreateElement('div', 'button-group');
            grp.appendChild(this._editor_indent);
            grp.appendChild(this._editor_outdent);
            grp.appendChild(this.CreateElement('div', 'separator'));
            grp.appendChild(this._editor_numberlist);
            grp.appendChild(this._editor_buletlist);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_textcolor == null && this._editor_background == null && this._editor_fill == null && this._editor_eraseformat == null
            && (this._editorType == 'full')) {
            this._editor_textcolor = this.CreateElement('button', 'dropdown-toggle editor-textcolor');
            this._editor_background = this.CreateElement('button', 'dropdown-toggle editor-background');
            this._editor_fill = this.CreateElement('button', 'dropdown-toggle editor-fill');
            this._editor_eraseformat = this.CreateElement('button', 'editor-eraseformat');
            let grp = this.CreateElement('div', 'button-group');
            grp.appendChild(this._editor_textcolor);
            grp.appendChild(this._editor_background);
            grp.appendChild(this._editor_fill);
            grp.appendChild(this.CreateElement('div', 'separator'));
            grp.appendChild(this._editor_eraseformat);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_link == null && this._editor_unlink == null && this._editor_image == null && this._editor_media == null && this._editor_iframe == null && this._editor_hr == null
            && (this._editorType == 'full')) {
            this._editor_link = this.CreateElement('button', 'dropdown-toggle editor-link');
            this._editor_unlink = this.CreateElement('button', 'editor-unlink');
            this._editor_image = this.CreateElement('button', 'dropdown-toggle editor-image');
            this._editor_media = this.CreateElement('button', 'dropdown-toggle editor-media');
            this._editor_iframe = this.CreateElement('button', 'dropdown-toggle editor-iframe');
            this._editor_hr = this.CreateElement('button', 'editor-hr');
            let grp = this.CreateElement('div', 'button-group');
            grp.appendChild(this._editor_link);
            grp.appendChild(this._editor_unlink);
            grp.appendChild(this._editor_image);
            grp.appendChild(this._editor_media);
            grp.appendChild(this._editor_iframe);
            grp.appendChild(this._editor_hr);
            this._toolbar.appendChild(grp);
        }
        if (this._editor_source == null
            && (this._editorType == 'full')) {
            this._editor_source = this.CreateElement('button', 'editor-source');
            let grp = this.CreateElement('div', 'button-group');
            grp.appendChild(this._editor_source);
            this._toolbar.appendChild(grp);
        }
    }
    AddContent() {
        if (this._content != null)
            return;
        let editorbody = document.createElement('div');
        editorbody.className = 'editor-body';
        this._content = document.createElement('div');
        this._content.className = 'editor-content';
        editorbody.appendChild(this._content);
        editorbody.addEventListener("click", () => {
            this._content.focus();
        });
        editorbody.addEventListener('paste', (event) => {
            let paste = (event.clipboardData).getData('text');
            paste = this.cleanWordPaste(paste);
            const selection = window.getSelection();
            if (!selection.rangeCount)
                return false;
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
    CreateElement(eltype, classname, type = null) {
        let r = document.createElement(eltype);
        r.className = classname;
        if (type != null)
            r.type = type;
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
            var value = e.target.value;
            if (value == this.FontList[0])
                this.SetSelectionStyle('font-family', '', false);
            else {
                this.SetSelectionStyle('font-family', value, false);
            }
        });
        this._editor_fontsize?.addEventListener("change", (e) => {
            var value = e.target.value;
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
            this.SetSelectionTag(e.target.value);
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
            if (this._content === document.activeElement) {
                this.RecheckToolbar();
            }
        });
    }
    RecheckToolbar() {
        if (this._editor_bold != undefined)
            this._editor_bold.checked = this.getCurrentStyle('font-weight') > '500';
        if (this._editor_italic != undefined)
            this._editor_italic.checked = this.getCurrentStyle('font-style') == 'italic';
        if (this._editor_underline != undefined)
            this._editor_underline.checked = this.getCurrentStyle('font-style') == 'underline';
        if (this._editor_strikethrough != undefined)
            this._editor_strikethrough.checked = this.getCurrentStyle('font-style') == 'line-through';
        if (this._editor_font != undefined) {
            let fontfamily = this.getCurrentStyle('font-family').toString();
            this._editor_font.value = this.FontList.find((e) => e == fontfamily) ?? this.FontList[0];
        }
        if (this._editor_fontsize != undefined) {
            let fontSize = this.getCurrentStyle('font-size').toString();
            this._editor_fontsize.value = (this.FontSize.find((e) => e.includes(fontSize)) ?? this.FontSize[3]).split(':')[1];
        }
        if (this._editor_subscript != undefined)
            this._editor_subscript.checked = this.isSelectionInTag('sub');
        if (this._editor_superscript != undefined)
            this._editor_superscript.checked = this.isSelectionInTag('sup');
        if (this._editor_alignleft != undefined)
            this._editor_alignleft.checked = this.getCurrentStyle('text-align') == 'start';
        if (this._editor_aligncenter != undefined)
            this._editor_aligncenter.checked = this.getCurrentStyle('text-align') == 'center';
        if (this._editor_alignright != undefined)
            this._editor_alignright.checked = this.getCurrentStyle('text-align') == 'end';
        if (this._editor_alignjustify != undefined)
            this._editor_alignjustify.checked = this.getCurrentStyle('text-align') == 'justify';
        if (this._editor_rtl != undefined)
            this._editor_rtl.checked = this.getCurrentStyle('direction') == 'rtl';
        if (this._editor_ltr != undefined)
            this._editor_ltr.checked = this.getCurrentStyle('direction') == 'ltr';
        if (this._editor_textcolor != undefined)
            this._editor_textcolor.style.borderBlockEndColor = this.getCurrentStyle('color');
        if (this._editor_background != undefined)
            this._editor_background.style.borderBlockEndColor = this.getCurrentStyle('background-color');
        if (this._editor_fill != undefined)
            this._editor_fill.style.borderBlockEndColor = getComputedStyle(this.getParentTagSelection()).getPropertyValue('background-color');
        if (this._editor_elementtag != undefined) {
            let tagName = this.getParentTagSelection().tagName.toLowerCase();
            this._editor_elementtag.value = (this.TagList.find((e) => e.includes(tagName)) ?? this.TagList[0]).split(':')[1];
        }
        if (this.ValueElement != undefined)
            this.ValueElement.value = this.Html;
        if (this.change != null && this.OldHtml != this.Html) {
            this.change(this);
            this.OldHtml = this.Html;
        }
    }
    isSelectionInTag(tag) {
        tag = tag.toUpperCase();
        let currentNode = window.getSelection().focusNode;
        while (!currentNode.classList?.contains('editor-content')) {
            if (currentNode.tagName == tag)
                return true;
            currentNode = currentNode.parentNode;
        }
        return false;
    }
    execCommand(cmd, value = null) {
        document.execCommand(cmd, false, value);
    }
    getCurrentStyle(prop) {
        let value = '';
        var element = document.getSelection().focusNode;
        for (var p = element; p; p = p.parentNode) {
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
    getParentTagSelection() {
        let currentNode = window.getSelection().focusNode;
        for (var i = 0; i < 2; i++) {
            if (!currentNode?.classList?.contains('editor-content')) {
                if (currentNode.tagName != undefined)
                    return currentNode;
                currentNode = currentNode.parentNode;
            }
        }
        return null;
    }
    SetSelectionStyle(prop, value = null, toggle, getParentTag = false) {
        let signValue = '';
        if (value.startsWith('+') || value.startsWith('-')) {
            signValue = value.substring(0, 1);
            value = value.substring(1);
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                var span = range.commonAncestorContainer;
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
                            x?.style.removeProperty(prop);
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
    SetSelectionTag(value = null) {
        var elem = undefined;
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                var rangeText = range.toString();
                var parent = null;
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
                elem = range.commonAncestorContainer;
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
        }
        else if (document.getSelection() && document.createRange()) {
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
            }
            else if (document.getSelection() && savedSel.select) {
                savedSel.select();
            }
        }
    }
    cleanWordPaste(str) {
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
        str = str.replace(/<\/H\d>/gi, '<br>');
        str = str.replace(/<(U|I|STRIKE)>&nbsp;<\/\1>/g, '&nbsp;');
        str = str.replace(/<(B|b)>&nbsp;<\/\b|B>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        str = str.replace(/<([^\s>]+)[^>]*>\s*<\/\1>/g, '');
        var re = new RegExp("(<P)([^>]*>.*?)(<\/P>)", "gi");
        str = str.replace(re, "<div$2</div>");
        var re2 = new RegExp("(<font|<FONT)([^*>]*>.*?)(<\/FONT>|<\/font>)", "gi");
        str = str.replace(re2, "<div$2</div>");
        str = str.replace(/size|SIZE = ([\d]{1})/g, '');
        str = str.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        str = str.replace(/¬/g, '\u200C');
        return str;
    }
    ColorPicker(parent, style, selectTag = false) {
        if (this._colorpicker == undefined)
            this.CreateColorPickerObject();
        this._colorPickerStyle = style;
        this._colorPickerselectTag = selectTag;
        this._colorPickerDropDown.element = parent;
        this._colorPickerDropDown.SetPosition();
        this._colorpickerInput.value = this.rgb2hex(this.getCurrentStyle(style));
        this._colorPickerDropDown.Show();
    }
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
                let btn = e.target;
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
    InsertLink() {
        if (this._insertLink == undefined)
            this.CreateLinkObject();
        let elem = this.getParentTagSelection();
        this._insertLinkUrl.value = '';
        this._insertLinkTitle.value = '';
        this._insertLinkTarget.value = '';
        if (elem.tagName.toLowerCase() == 'a') {
            this._insertLinkUrl.value = elem.href;
            this._insertLinkTitle.value = elem.title;
            this._insertLinkTarget.value = elem.target;
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
                let link = this.SetSelectionTag("a");
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
            this._insertImageSelected = elem;
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
                    if (!(this._insertImageWidth.value.includes('px') ||
                        this._insertImageWidth.value.includes('%') ||
                        this._insertImageWidth.value.includes('em') ||
                        this._insertImageWidth.value.includes('rem')))
                        this._insertImageWidth.value += 'px';
                    this._insertImageSelected.style.width = this._insertImageWidth.value;
                }
                if (this._insertImageHeight.value != '') {
                    if (!(this._insertImageHeight.value.includes('px') ||
                        this._insertImageHeight.value.includes('%') ||
                        this._insertImageHeight.value.includes('em') ||
                        this._insertImageHeight.value.includes('rem')))
                        this._insertImageHeight.value += 'px';
                    this._insertImageSelected.style.height = this._insertImageHeight.value;
                }
                if (this._insertImageBorderWidth.value != '') {
                    if (!(this._insertImageBorderWidth.value.includes('px') ||
                        this._insertImageBorderWidth.value.includes('%') ||
                        this._insertImageBorderWidth.value.includes('em') ||
                        this._insertImageBorderWidth.value.includes('rem')))
                        this._insertImageBorderWidth.value += 'px';
                    this._insertImageSelected.style.borderWidth = this._insertImageBorderWidth.value;
                }
                if (this._insertImageBorderStyle.value != '')
                    this._insertImageSelected.style.borderStyle = this._insertImageBorderStyle.value;
                this._insertImageSelected.className = this._insertImageClass.value;
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
            this._insertMediaSelected = elem;
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
                    this._insertMediaSelected = document.createElement(this._insertMediaType.value);
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
                    if (!(this._insertMediaWidth.value.includes('px') ||
                        this._insertMediaWidth.value.includes('%') ||
                        this._insertMediaWidth.value.includes('em') ||
                        this._insertMediaWidth.value.includes('rem')))
                        this._insertMediaWidth.value += 'px';
                    this._insertMediaSelected.setAttribute('width', this._insertMediaWidth.value);
                }
                if (this._insertMediaHeight.value != '') {
                    if (!(this._insertMediaHeight.value.includes('px') ||
                        this._insertMediaHeight.value.includes('%') ||
                        this._insertMediaHeight.value.includes('em') ||
                        this._insertMediaHeight.value.includes('rem')))
                        this._insertMediaHeight.value += 'px';
                    this._insertMediaSelected.setAttribute('height', this._insertMediaHeight.value);
                }
                if (this._insertMediaBorderWidth.value != '') {
                    if (!(this._insertMediaBorderWidth.value.includes('px') ||
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
            this._insertIFrameSelected = elem;
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
                    this._insertIFrameSelected = document.createElement('iframe');
                    window.getSelection().getRangeAt(0).insertNode(this._insertIFrameSelected);
                }
                this._insertIFrameSelected.src = this._insertIFrameUrl.value;
                this._insertIFrameSelected.title = this._insertIFrameTitle.value;
                if (this._insertIFrameWidth.value != '') {
                    if (!(this._insertIFrameWidth.value.includes('px') ||
                        this._insertIFrameWidth.value.includes('%') ||
                        this._insertIFrameWidth.value.includes('em') ||
                        this._insertIFrameWidth.value.includes('rem')))
                        this._insertIFrameWidth.value += 'px';
                    this._insertIFrameSelected.setAttribute('width', this._insertIFrameWidth.value);
                }
                if (this._insertIFrameHeight.value != '') {
                    if (!(this._insertIFrameHeight.value.includes('px') ||
                        this._insertIFrameHeight.value.includes('%') ||
                        this._insertIFrameHeight.value.includes('em') ||
                        this._insertIFrameHeight.value.includes('rem')))
                        this._insertIFrameHeight.value += 'px';
                    this._insertIFrameSelected.setAttribute('height', this._insertIFrameHeight.value);
                }
                if (this._insertIFrameBorderWidth.value != '') {
                    if (!(this._insertIFrameBorderWidth.value.includes('px') ||
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
    get Html() {
        return this._content.innerHTML;
    }
    set Html(value) {
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
let WNfilelistclipboard = [];
class wnfilelist {
    constructor(elem) {
        this._mode = "select";
        this._Url = "api/FileList";
        this._date = new wnDate();
        this._ExtCompress = [
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
        this._ExtAudio = ['.3gp',
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
        this._ExtExcel = [
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
        this._ExtWord = ['.doc',
            '.docm',
            '.docx',
            '.dot',
            '.dotm',
            '.dotx',
            '.rtf',
            '.txt',
            '.wps',
        ];
        this._ExtPowerPoint = ['.pot',
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
        this._ExtImage = [
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
        this._ExtPdf = ['.pdf'];
        this._ExtVideo = ['.webm',
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
        this.WaitPreLoad = false;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    async Init() {
        if (this.element.hasAttribute('calendar'))
            this._date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')();
        if (this.element.hasAttribute('cultureinfo'))
            this._date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')();
        if (this.element.hasAttribute('onselectionchange'))
            this.selectionchange = WNGenerateFunction(this.element.getAttribute('onselectionchange'), 't');
        if (this.element.hasAttribute('ondblclickitem'))
            this.dblclickitem = WNGenerateFunction(this.element.getAttribute('ondblclickitem'), 't');
        this._lang = WNlang[this._date.CultureInfo.TwoLetterISOLanguageName];
        if (!this.element.classList.contains('filelist'))
            this.element.classList.add('filelist');
        this._mode = this.element.getAttribute('mode').toLowerCase() ?? 'select';
        this._head = this.element.querySelector('.head');
        if (this._head == null)
            this.AddHead();
        this._body = this.element.querySelector('.body');
        if (this._body == null)
            this.AddBody();
        this._divfolders = this.element.querySelector('.folders');
        this._divfiles = this.element.querySelector('.files');
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
                ];
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
                else {
                    value = files.path ?? '';
                    let f = value.split('\\');
                    value = f[f.length - 1];
                }
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
                ];
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
                ];
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
                ];
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
                ];
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
            let th = t.target;
            this._files.tBodies[0].querySelectorAll("input[type=checkbox]").forEach((x) => x.checked = th.checked);
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
        close.addEventListener("click", () => { this._dragdrop.classList.remove('show'); });
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
            }
            else {
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
        this._toastbody = this._toastdiv.querySelector(".toast-body");
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
    async GetFolders(path) {
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
    async GetFiles(path) {
        if (this._foldersAddress != null) {
            let addr = '';
            path.split('\\').forEach((x) => addr += `<li>${x}</li>`);
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
                let checkbox = tr.querySelector('input[type=checkbox]');
                checkbox.addEventListener("change", () => {
                    if (this.selectionchange != null)
                        this.selectionchange(this);
                });
                tr.addEventListener('click', (t) => {
                    let el = t.target;
                    if (el.nodeName == 'INPUT')
                        return;
                    while (el.nodeName != 'TR')
                        el = el.parentElement;
                    let checkbox = el.querySelector('input[type=checkbox]');
                    if (checkbox != null)
                        checkbox.checked = !checkbox.checked;
                    if (this.selectionchange != null)
                        this.selectionchange(this);
                });
                tr.addEventListener('dblclick', (t) => {
                    this._files.tBodies[0].querySelectorAll("input[type=checkbox]").forEach((x) => x.checked = false);
                    let el = t.target;
                    if (el.nodeName == 'INPUT')
                        return;
                    while (el.nodeName != 'TR')
                        el = el.parentElement;
                    let checkbox = el.querySelector('input[type=checkbox]');
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
    async NewFolder(t) {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;
        this.PreLoad(true);
        let path = this._foldertree.currentvalue ?? '';
        let o = { command: "createfolder", path: path + '\\' + value };
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r = true) {
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
    async Rename(t) {
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
        let o = { command: "rename", source: oldName, destination: newfileName };
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r = true) {
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
    async Delete() {
        let files = this.GetSelectedItems();
        this.PreLoad(true);
        let items = files.files;
        if (items.length == 0)
            items.push(files.path);
        else
            for (var i = 0; i < items.length; i++)
                items[i] = files.path + '\\' + items[i];
        let o = { command: "delete", source: items.join('\n') };
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r = true) {
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
    async Paste() {
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
        let o = { command: cmd, source: src.join('\n'), destination: dst };
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r == true) {
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
            if (r == true) {
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
    async Compress(t) {
        let value = t.querySelector('input').value;
        if (value == '')
            return false;
        let files = this.GetSelectedItems();
        this.PreLoad(true);
        let items = files.files;
        if (items.length == 0)
            return false;
        let o = { command: "compress", sourcepath: files.path, source: items.join('\n'), destination: value };
        let ret = false;
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r == true) {
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
    async Decompress() {
        let files = this.GetSelectedItems();
        this.PreLoad(true);
        let items = files.files;
        if (items.length == 0)
            return false;
        for (var i = 0; i < files.files.length; i++)
            files.files[i] = WNTrim(files.path + '\\' + files.files[i], '\\');
        let o = { command: "decompress", source: items.join('\n') };
        await Post(JSON.stringify(o), this._Url).then(async (r) => {
            if (r == true) {
                await this.GetFolders('');
                this._foldertree.findbyvalue(files.path, true);
                this.ShowMessage("decompressed", "success");
            }
            else {
                this.ShowMessage("errorcommand", "error");
            }
        });
        this.PreLoad(false);
        return true;
    }
    ShowMessage(MessageId, className) {
        this.PreLoad(false);
        this._toastbody.className = "toast-body " + className;
        this._toastbody.innerHTML = this._lang["filelist"][MessageId];
        this._toast.show();
    }
    GetSelectedItems() {
        let path = this._foldertree.currentvalue;
        let files = [];
        this._files.tBodies[0].querySelectorAll(':checked').forEach((x) => {
            files.push(x.value);
        });
        return { path: path, files: files };
    }
    PreLoad(show) {
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
    GetSelectedFiles() {
        let ret = [];
        let files = this.GetSelectedItems();
        files.files.forEach((x) => ret.push(WNTrim(files.path + '\\' + x, '\\')));
        return ret;
    }
    GetSelectedFolder() {
        let files = this.GetSelectedItems();
        return files.path;
    }
}
class wnfilter {
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        this.buttons = this.element.querySelectorAll('[filter-value]');
        this.buttons.forEach((t) => {
            if (t.nodeName == 'INPUT' && t.type == "text") {
                t.addEventListener("input", () => {
                    WNFilter(this.element.querySelectorAll("[filter-category]"), 'contains(' + t.value + ')');
                });
            }
            if (t.nodeName == 'INPUT' && t.type == "checkbox") {
                t.addEventListener("click", () => {
                    this.CheckBoxFilter();
                });
                this.CheckBoxFilter();
            }
            else {
                t.addEventListener("click", (e) => {
                    WNFilter(this.element.querySelectorAll("[filter-category]"), '[filter-category*=' + e.target.getAttribute('filter-value') + ']');
                });
            }
        });
    }
    CheckBoxFilter() {
        let condition = '';
        this.buttons.forEach((x) => {
            if (x.nodeName == 'INPUT' && x.type == "checkbox" && x.checked)
                condition += '[filter-category*="' + x.getAttribute('filter-value') + '"], ';
        });
        condition = condition.trim();
        if (condition.length > 0)
            condition = condition.substring(0, condition.length - 1);
        WNFilter(this.element.querySelectorAll("[filter-category]"), condition);
    }
}
function WNFilter(selectors, filterby) {
    let list;
    if (typeof (selectors) == "string")
        list = document.querySelectorAll(selectors);
    else
        list = selectors;
    if (filterby.toLowerCase().startsWith('contains')) {
        filterby = filterby.substring(filterby.indexOf('('));
        filterby = filterby.substring(1, filterby.lastIndexOf(')')).toLowerCase();
        list.forEach((e) => {
            if (e.innerText.toLowerCase().indexOf(filterby) > -1)
                e.style.display = '';
            else
                e.style.display = 'none';
        });
    }
    else
        list.forEach((e) => {
            if (filterby == '' || filterby == "[filter-category*=]" || e.matches(filterby))
                e.style.display = '';
            else
                e.style.display = 'none';
            e.getAnimations().forEach(x => x.play());
        });
}
class wnlightbox {
    constructor(elem) {
        this.loop = true;
        this.close = true;
        this.modalclose = true;
        this.autoplay = true;
        this.SlideList = [];
        this.SlideListElem = [];
        this.TouchStart = -99999999;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        this.loop = WNparseBoolean(this.element.getAttribute('loop'), true);
        this.close = WNparseBoolean(this.element.getAttribute('close'), true);
        this.modalclose = WNparseBoolean(this.element.getAttribute('modalclose'), true);
        this.autoplay = WNparseBoolean(this.element.getAttribute('autoplay'), true);
        this.lightbox = this.element.querySelector(".lightbox");
        if (this.lightbox == null) {
            this.element.innerHTML += `
            <div class="lightbox">
                <div class="lightbox-slides">
                    <div class="media animate fadeIn">
                    </div>
                    <div class="content animate slideInUp">
                    </div>
                </div>
                <button class="close light"></button>
                <button class="button-previous"></button>
                <button class="button-next"></button>
            </div>
            `;
            this.lightbox = this.element.querySelector(".lightbox");
        }
        this.media = this.lightbox.querySelector(".media");
        this.content = this.lightbox.querySelector(".content");
        this.buttonprevious = this.lightbox.querySelector(".button-previous");
        this.buttonnext = this.lightbox.querySelector(".button-next");
        this.closebutton = this.lightbox.querySelector(".close");
        this.lightbox.addEventListener("touchstart", (e) => { this.TouchStart = e.changedTouches[0].screenX; });
        this.lightbox.addEventListener("touchend", (e) => {
            this.CheckTouch(this.TouchStart - e.changedTouches[0].screenX);
        });
        if (this.closebutton != null) {
            if (!this.close)
                this.closebutton.style.display = 'none';
            else
                this.closebutton.addEventListener("click", () => { this.Close(); });
        }
        if (this.buttonprevious != null) {
            this.buttonprevious.addEventListener("click", (e) => {
                this.ShowLightBox(e.target.getAttribute('url-value'));
            });
        }
        if (this.buttonnext != null) {
            this.buttonnext.addEventListener("click", (e) => {
                this.ShowLightBox(e.target.getAttribute('url-value'));
            });
        }
        if (this.modalclose)
            this.lightbox.addEventListener("click", () => {
                if (this.TouchStart == -99999999)
                    this.Close();
            }, true);
        this.buttons = this.element.querySelectorAll('[lightbox]');
        this.buttons.forEach((t) => {
            t.addEventListener("click", (e) => {
                this.ShowLightBox(e.target);
            });
        });
    }
    ShowLightBox(e) {
        if (e == null)
            return;
        let url = '';
        if (typeof (e) == "string") {
            url = e;
        }
        if (!this.lightbox.classList.contains('show')) {
            let buttons = this.element.querySelectorAll('[lightbox]');
            if (typeof (e) != "string") {
                if (e.hasAttribute('lightbox') && e.getAttribute('lightbox') != '')
                    url = e.getAttribute('lightbox');
                else if (e.nodeName == "A") {
                    url = e.href;
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
            this.SlideList = [];
            this.SlideListElem = [];
            buttons.forEach((x) => {
                let url = '';
                let show = true;
                let tx = x;
                while (tx != this.element) {
                    if (tx.style.display == 'none') {
                        show = false;
                        break;
                    }
                    tx = tx.parentElement;
                }
                if (show) {
                    if (x.hasAttribute('lightbox') && x.getAttribute('lightbox') != '')
                        url = x.getAttribute('lightbox');
                    else if (x.nodeName == "A")
                        url = x.href;
                    this.SlideList.push(url);
                    this.SlideListElem.push(x);
                }
            });
            this.lightbox.classList.add('show');
        }
        if (this.SlideList.length == 0)
            return;
        let idx = this.SlideList.indexOf(url);
        let pre = '';
        let next = '';
        if (idx < 1)
            pre = this.loop ? this.SlideList[this.SlideList.length - 1] : '';
        else
            pre = this.SlideList[idx - 1];
        if (idx == this.SlideList.length - 1)
            next = this.loop ? this.SlideList[0] : '';
        else
            next = this.SlideList[idx + 1];
        this.buttonprevious.setAttribute('url-value', pre);
        this.buttonnext.setAttribute('url-value', next);
        this.buttonprevious.style.display = pre == '' ? 'none' : '';
        this.buttonnext.style.display = next == '' ? 'none' : '';
        if (url.toLocaleLowerCase().endsWith('.mp4') || url.toLocaleLowerCase().endsWith('.avi')) {
            this.media.innerHTML = `<video controls><source src="` + url + `" type="video/` + url.toLocaleLowerCase().substring(url.length - 3) + `"></video>`;
            if (this.autoplay)
                this.Play();
        }
        else if (url.toLocaleLowerCase().endsWith('.mp3') || url.toLocaleLowerCase().endsWith('.wav')) {
            let filetype = 'mpeg';
            if (url.toLocaleLowerCase().endsWith('.wav'))
                filetype = 'wav';
            this.media.innerHTML = `<audio controls><source src="` + url + `" type="audio/` + filetype + `"></audio>`;
            if (this.autoplay)
                this.Play();
        }
        else
            this.media.innerHTML = `<img src="` + url + `" alt='' />`;
        this.mediain = this.media.firstChild;
        this.mediain.addEventListener("mousedown", (e) => {
            this.TouchStart = e.clientX;
            clearInterval(this.timeout);
            this.timeout = setInterval(() => { this.TouchStart = -99999999; }, 2000);
        });
        this.mediain.addEventListener("mouseup", (e) => {
            this.CheckTouch(this.TouchStart - e.clientX);
        });
        this.content.innerHTML = this.SlideListElem[idx].innerHTML;
        this.media.getAnimations().forEach((x) => x.play());
        this.content.getAnimations().forEach((x) => x.play());
    }
    Play() {
        this.media.querySelector('video')?.play();
        this.media.querySelector('audio')?.play();
    }
    Close() {
        this.media.innerHTML = '';
        this.lightbox.classList.remove('show');
    }
    CheckTouch(diff) {
        if (diff > 0) {
            if (this.buttonprevious != null)
                this.ShowLightBox(this.buttonprevious.getAttribute('url-value'));
        }
        else if (diff < 0) {
            if (this.buttonnext != null)
                this.ShowLightBox(this.buttonnext.getAttribute('url-value'));
        }
        this.TouchStart = -99999999;
        event.preventDefault();
        event.stopPropagation();
    }
}
class wnlist {
    constructor(elem) {
        this._currentSelect = null;
        this._listType = '';
        this._items = [];
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    get selecteditem() { return this._currentSelect; }
    set selecteditem(value) { this.select(value); }
    get selectedindex() { return WNparseNumber(this._currentSelect?.getAttribute('index'), -1); }
    set selectedindex(value) {
        this._items.forEach((x) => {
            if (WNparseNumber(x.getAttribute('index')) == value) {
                this.select(x);
                return;
            }
        });
    }
    get currentvalue() { return this._currentSelect?.getAttribute('wn-list-value'); }
    get currentcaption() { return this._currentSelect?.innerText; }
    Init() {
        this._listType = this.element.nodeName;
        this.element.classList.add('list');
        this.element.classList.add('list-hover');
        let _items;
        if (this._listType == 'UL')
            _items = this.element.querySelectorAll('li');
        else if (this._listType == 'DIV')
            _items = this.element.querySelectorAll('.list-item');
        else if (this._listType == 'TABLE')
            _items = this.element.querySelectorAll('tr');
        for (var i = 0; i < _items.length; i++) {
            _items[i].setAttribute('index', i.toString());
            _items[i].addEventListener('click', (e) => { this.click(e); });
            this._items.push(_items[i]);
        }
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeclick = new Function('t', 'e', this.element.getAttribute('onbeforeclick'));
        if (this.element.hasAttribute('onafterclick'))
            this.afterclick = new Function('t', 'e', this.element.getAttribute('onafterclick'));
        if (this.element.hasAttribute('onselectionchange'))
            this.selectionchange = new Function('t', 'n', this.element.getAttribute('onselectionchange'));
    }
    click(e) {
        let node = e.target;
        if (this._listType == 'TABLE') {
            if (node.parentElement.tagName == 'THEAD')
                return;
            if (node.tagName == 'TD')
                node = node.parentElement;
        }
        if (this.beforeclick != null)
            if (!this.beforeclick(this, e))
                return;
        this.select(node);
        if (this.afterclick != null)
            this.afterclick(this, e);
    }
    select(node) {
        if (node == this._currentSelect)
            return;
        this.element.querySelectorAll('.list-active').forEach((x) => x.classList.remove('list-active'));
        node.classList.add('list-active');
        this._currentSelect = node;
        if (this.selectionchange != null)
            this.selectionchange(this, node);
    }
    findbytext(text, contains = true, select = true) {
        let selectedNode = null;
        this._items.forEach((x) => {
            if (x.innerText == text || (x.innerText.includes(text) && contains)) {
                selectedNode = x;
                if (select)
                    this.select(selectedNode);
                return selectedNode;
            }
        });
        return selectedNode;
    }
    findbyvalue(value, select = true) {
        let selectedNode = null;
        this._items.forEach((x) => {
            if (x.getAttribute('value') == value) {
                selectedNode = x;
                if (select)
                    this.select(selectedNode);
                return selectedNode;
            }
        });
        return selectedNode;
    }
    filterbytext(text, contains = true) {
        text = text.toLowerCase();
        for (var i = 0; i < this._items.length; i++) {
            let s = this._items[i].innerText.toLowerCase();
            if ((contains && s.includes(text)) || (s == text))
                this._items[i].classList.remove('d-none');
            else
                this._items[i].classList.add('d-none');
        }
    }
    addrow(text, value = '') {
        let elem;
        if (this._listType == 'UL')
            elem = document.createElement('li');
        else if (this._listType == 'DIV') {
            elem = document.createElement('div');
            elem.classList.add('');
        }
        else if (this._listType == 'TABLE') {
            elem = document.createElement('tr');
        }
        elem.innerHTML = text;
        elem.setAttribute('index', this._items.length.toString());
        elem.setAttribute('value', value);
        elem.addEventListener('click', (e) => { this.click(e); });
        if (this._listType == 'TABLE') {
            let tbody = this.element.querySelector('tbody');
            if (tbody == null)
                this.element.appendChild(elem);
            else
                tbody.appendChild(elem);
        }
        else
            this.element.appendChild(elem);
        this._items.push(elem);
        return elem;
    }
    settext(text, index) {
        let elem = this.element.querySelector(`li[index='${index}']`);
        if (elem != null)
            elem.innerHTML = text;
    }
    setvalue(text, index) {
        let elem = this.element.querySelector(`li[index='${index}']`);
        if (elem != null)
            elem.setAttribute('value', text);
    }
    removerow(index) {
        if (index < 0 || index >= this._items.length)
            return;
        this._items[index].remove();
        this.reindex();
    }
    order(desc = false) {
        this._items.sort((x, y) => {
            if (x.innerText > y.innerText)
                return desc ? -1 : 1;
            else if (x.innerText < y.innerText)
                return desc ? 1 : -1;
            return 0;
        });
        this.reindex();
        this.refresh();
    }
    reindex() {
        for (var i = 0; i < this._items.length; i++) {
            this._items[i].setAttribute('index', i.toString());
        }
    }
    refresh() {
        let tbody = this.element.querySelector('tbody');
        if (this._listType == 'TABLE') {
            if (tbody == null)
                tbody = this.element;
        }
        else
            tbody = this.element;
        tbody.innerHTML = '';
        for (var i = 0; i < this._items.length; i++) {
            tbody.appendChild(this._items[i]);
        }
    }
    setdata(datasource, displayfield, valuefield, append = false) {
        if (!append) {
            this._items = [];
            this.refresh();
        }
        if (valuefield == '' && displayfield == '') {
            let keys = Object.keys(datasource);
            let values = Object.values(datasource);
            for (var i = 0; i < values.length; i++) {
                let k = '';
                if (i >= keys.length)
                    k = keys[i];
                this.addrow(values[i], k);
            }
        }
        else
            datasource.forEach((x) => {
                this.addrow(x[displayfield], x[valuefield]);
            });
    }
}
class wnmodal {
    constructor(elem) {
        this._backClose = true;
        this._showclass = "";
        this._hideclass = "";
        this._fadeIn = "animate fadeIn animation-duration-10";
        this._fadeOut = "animate fadeOut animation-duration-10";
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    get backclose() { return this._backClose; }
    set backclose(value) { this._backClose = value; }
    get showclass() { return this._showclass; }
    set showclass(value) { this._showclass = value; }
    get hideclass() { return this._hideclass; }
    set hideclass(value) { this._hideclass = value; }
    Init() {
        let elem = this.element.querySelectorAll('[close-parent]');
        for (var i = 0; i < elem.length; i++)
            elem[i].addEventListener('click', () => { this.hide(); });
        if (this.element.hasAttribute('back-close'))
            this._backClose = WNparseBoolean(this.element.getAttribute('back-close'), this._backClose);
        if (this.element.hasAttribute('showclass'))
            this._showclass = WNparseString(this.element.getAttribute('showclass'), this._showclass);
        if (this.element.hasAttribute('hideclass'))
            this._hideclass = WNparseString(this.element.getAttribute('hideclass'), this._hideclass);
        this.element.addEventListener('click', (e) => {
            if (e.target != this.element)
                return;
            if (this._backClose)
                this.hide();
        }, { passive: false });
        this.modaldialog = this.element.querySelector('.modal-dialog');
        if (this.element.hasAttribute('onbeforehide'))
            this.beforehide = new Function(this.element.getAttribute('onbeforehide'));
    }
    show() {
        WNRemoveClassList(this.element, this._fadeOut);
        WNRemoveClassList(this.modaldialog, this.hideclass);
        WNRemoveClassList(this.element, "show");
        new Promise((re) => {
            WNAddClassList(this.modaldialog, this.showclass);
            WNAddClassList(this.element, this._fadeIn + " show");
            let ani = this.modaldialog.getAnimations();
            if (ani.length > 0) {
                ani[ani.length - 1].finished.finally(() => {
                    WNRemoveClassList(this.modaldialog, this.showclass);
                });
            }
        });
    }
    toggle() {
        if (this.element.classList.contains('show'))
            this.hide();
        else
            this.show();
    }
    hide() {
        if (this.beforehide != null)
            if (!this.beforehide())
                return;
        new Promise(() => {
            WNRemoveClassList(this.element, this._fadeIn);
            WNRemoveClassList(this.modaldialog, this.showclass);
            WNAddClassList(this.modaldialog, this.hideclass);
            let ani = this.modaldialog.getAnimations();
            if (ani.length > 0) {
                ani[ani.length - 1].finished.finally(() => {
                    WNAddClassList(this.element, this._fadeOut);
                    if (this.element.getAnimations().length > 0)
                        this.element.getAnimations()[0].finished.finally(() => {
                            WNRemoveClassList(this.element, "show");
                        });
                    else
                        WNRemoveClassList(this.element, "show");
                });
            }
            else
                WNRemoveClassList(this.element, "show");
        });
    }
}
class wnmultiselect {
    constructor(elem) {
        this.max = 0;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        this.selecteditems = [];
        this.max = WNparseNumber(this.element.getAttribute('max'), 0);
        if (this.element.hasAttribute('onselectionchanged'))
            this.selectionchanged = new Function('t', this.element.getAttribute('onselectionchanged'));
        if (this.element.hasAttribute('onbeforedeselect'))
            this.beforedeselect = new Function('t', 'n', 'i', this.element.getAttribute('onbeforedeselect'));
        if (this.element.hasAttribute('onafterdeselect'))
            this.afterdeselect = new Function('t', 'i', this.element.getAttribute('onafterdeselect'));
        this.searchbox = this.element.querySelector('[type=search]');
        this.selectedarea = this.element.querySelector('.selecteditem');
        this.dropdownlist = this.element.querySelector('.dropdown');
        if (this.searchbox == null) {
            this.searchbox = document.createElement("input");
            this.searchbox.type = "search";
        }
        this.searchbox.autocomplete = 'off';
        if (this.selectedarea == null) {
            this.selectedarea = document.createElement("div");
            this.selectedarea.className = "selecteditem";
        }
        if (this.dropdownlist == null) {
            this.dropdownlist = document.createElement("div");
            this.dropdownlist.className = "dropdown";
        }
        this.element.setAttribute('wn-dropdown-event', '');
        this.dropdown = new wndropdown(this.element);
        this.search = new wnsearchlist(this.element);
        if (this.dropdownlist.hasChildNodes())
            this.search.listelement = this.dropdownlist.firstElementChild;
        this.search.filterchanged = async () => {
            this.dropdown.Show();
        };
        this.searchbox.addEventListener('focus', async () => {
            if (!this.dropdown.element.classList.contains('show')) {
                this.dropdown.HideAllDropDowns();
                this.dropdown.Show();
            }
        });
        this.WaitToInitList();
    }
    WaitToInitList() {
        let tim = setInterval(() => {
            if (WN[this.search.listelement.id] != null) {
                WN[this.search.listelement.id].selectionchange = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);
            }
        }, 100);
    }
    selectionchange(t, n) {
        let value = this.search.list.currentvalue;
        let caption = this.search.list.currentcaption;
        if (value == null)
            value = '';
        let item = { value: value, caption: caption };
        if (this.selecteditems.find((x) => x.value == item.value && x.caption == item.caption) == null) {
            if (this.max > 0 && this.selecteditems.length >= this.max)
                return;
            this.selecteditems.push(item);
            this.AddSelectedSpan(caption, value);
            if (this.selectionchanged != null)
                this.selectionchanged(this);
        }
    }
    AddSelectedSpan(caption, value) {
        let sp = document.createElement('span');
        sp.innerHTML = caption;
        sp.setAttribute('value', value);
        sp.dir = this.element.dir;
        sp.addEventListener('click', (t) => {
            let node = t.target;
            let item = { value: node.getAttribute('value'), caption: node.innerHTML };
            this.DeselectByItem(item);
        });
        this.selectedarea.appendChild(sp);
    }
    DeselectByItem(item) {
        if (item == null)
            return;
        let node;
        let nodes = this.selectedarea.querySelectorAll("span");
        nodes.forEach((x) => {
            if (x.getAttribute('value') == item.value && x.innerHTML == item.caption) {
                node = x;
            }
        });
        if (this.beforedeselect != null)
            if (!this.beforedeselect(this, node, item))
                return;
        let idx = this.selecteditems.findIndex((x) => x.value == item.value && x.caption == item.caption);
        if (idx > -1) {
            this.selecteditems.splice(idx, 1);
            node.remove();
            if (this.afterdeselect != null)
                this.afterdeselect(this, item);
        }
    }
    DeselectByCaption(caption) {
        let item = this.selecteditems.find((x) => x.caption == caption);
        this.DeselectByItem(item);
    }
    DeselectByValue(value) {
        let item = this.selecteditems.find((x) => x.value == value);
        this.DeselectByItem(item);
    }
    setdata(datasource) {
        this.selecteditems = datasource;
        this.selectedarea.innerHTML = '';
        this.selecteditems.forEach((x) => { this.AddSelectedSpan(x.caption, x.value); });
    }
}
class wnprogress {
    constructor(elem) {
        this._min = 0;
        this._max = 100;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Render();
        }
    }
    Render() {
        if (!this.element.classList.contains('progress'))
            this.element.classList.add('progress');
        if (this.element.children.length == 0)
            this.element.innerHTML = '<div class="progress-bar" max="100" ></div>';
        if (this.element.hasAttribute('min'))
            this._min = parseInt(this.element.getAttribute('min'));
        if (this.element.hasAttribute('max'))
            this._max = parseInt(this.element.getAttribute('max'));
        this._bar = this.element.querySelectorAll('div.progress-bar');
        this._caption = this.element.querySelector('div.progress-caption');
        let max = 0;
        for (var i = 0; i < this._bar.length; i++) {
            if (this._bar[i].hasAttribute('max'))
                max = parseInt(this._bar[i].getAttribute('max'));
            else {
                let step = (100 - max) / (this._bar.length - i);
                max += step;
                this._bar[i].setAttribute('max', max.toString());
            }
        }
    }
    ShowProgress() {
        let percent = (this._value - this._min) / (this._max - this._min) * 100;
        if (percent > 100)
            percent = 100;
        if (this._caption != null) {
            this._caption.innerHTML = Math.floor(percent) + "%";
        }
        let min = 0;
        for (var i = 0; i < this._bar.length; i++) {
            let max = parseInt(this._bar[i].getAttribute('max')) - min;
            if (percent >= max)
                this._bar[i].style.width = max + '%';
            else if (percent > 0)
                this._bar[i].style.width = percent + '%';
            else
                this._bar[i].style.width = '0%';
            min = max;
            percent -= max;
        }
    }
    set value(value) { this._value = value; this.ShowProgress(); }
    get value() { return this._value; }
    set min(value) { this._min = value; this.ShowProgress(); }
    get min() { return this._min; }
    set max(value) { this._max = value; this.ShowProgress(); }
    get max() { return this._max; }
}
class wnscroll {
    constructor(elem) {
        this.value = 0;
        this.addclass = '';
        this.removeclass = '';
        this.toggleclass = '';
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Render();
        }
    }
    Render() {
        if (this.element.hasAttribute('scroll-value'))
            this.value = WNparseNumber(this.element.getAttribute('scroll-value'), 50);
        if (this.element.hasAttribute('add-class'))
            this.addclass = WNparseString(this.element.getAttribute('add-class'), '');
        if (this.element.hasAttribute('remove-class'))
            this.removeclass = WNparseString(this.element.getAttribute('remove-class'), '');
        if (this.element.hasAttribute('toggle-class'))
            this.toggleclass = WNparseString(this.element.getAttribute('toggle-class'), '');
        this.Start();
        window.addEventListener("scroll", () => this.Start());
    }
    Start() {
        if (window.scrollY >= this.value) {
            if (this.toggleclass != '') {
                if (!this.element.classList.contains(this.toggleclass))
                    this.element.classList.add(this.toggleclass);
            }
            if (this.addclass != '')
                this.element.classList.add(this.addclass);
            if (this.removeclass != '')
                this.element.classList.remove(this.removeclass);
        }
        else {
            if (this.toggleclass != '') {
                if (this.element.classList.contains(this.toggleclass))
                    this.element.classList.remove(this.toggleclass);
            }
        }
    }
}
class wnsearchlist {
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        this.searchbox = this.element.querySelector('[type=search]');
        this.searchbox.autocomplete = 'off';
        this.listelement = this.searchbox.nextElementSibling;
        if (this.listelement == null)
            this.listelement = this.searchbox.previousElementSibling;
        if (this.listelement == null)
            return;
        if (this.element.hasAttribute('display-id'))
            this.displayelement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.element.hasAttribute('value-id'))
            this.valueelement = document.getElementById(this.element.getAttribute('value-id'));
        this._Url = WNparseString(this.element.getAttribute('url'), this._Url);
        this.searchbox.addEventListener('input', async (e) => {
            let v = e.target.value;
            if (this._Url == null || this._Url == '') {
                WNFilter(this.listelement.querySelectorAll('tr'), 'contains(' + v + ')');
                WNFilter(this.listelement.querySelectorAll('li'), 'contains(' + v + ')');
                if (this.listelement.getAttribute('wn-type') == 'tree') {
                    this.FixedTreeDisplay();
                }
            }
            else {
                await Post(WNAddStringQuote(v), this._Url).then((r) => {
                    if (this.listelement.getAttribute('wn-type') == 'list') {
                        let l = this.list;
                        l.setdata(r, WNparseString(this.element.getAttribute('field-display'), ''), WNparseString(this.element.getAttribute('field-value'), ''), false);
                    }
                    if (this.listelement.getAttribute('wn-type') == 'tree') {
                        let fs = WNparseString(this.element.getAttribute('fieldset'), '').split(',');
                        if (fs.length == 6) {
                            let l = this.list;
                            l.setdata(r, fs[0], fs[1], fs[2], fs[3], fs[4], fs[5], false);
                        }
                    }
                }).catch((e) => {
                    console.log(e);
                });
            }
            if (this.filterchanged != null)
                this.filterchanged();
        });
        this.WaitToInitList();
    }
    WaitToInitList() {
        let tim = setInterval(() => {
            if (WN[this.listelement.id] != null) {
                this.list = WN[this.listelement.id];
                this.list.selectionchange = (t, n) => this.selectionchange(t, n);
                clearInterval(tim);
            }
        }, 100);
    }
    FixedTreeDisplay() {
        let nodes = this.listelement.querySelectorAll('li:not([style*="display:none"]):not([style*="display: none"])');
        nodes.forEach((x) => {
            let p = x.parentElement;
            while (p != this.listelement) {
                p.style.display = '';
                p.classList.remove('collapsed');
                let pp = p.querySelectorAll('[class*="tree-item"]');
                pp.forEach((xx) => { xx.style.display = ''; });
                p = p.parentElement;
            }
        });
    }
    selectionchange(t, n) {
        if (this.displayelement != null) {
            this.displayelement.value = this.list.currentcaption;
        }
        if (this.valueelement != null) {
            this.valueelement.value = this.list.currentvalue;
        }
    }
}
class wnslicker {
    constructor(elem) {
        this._interval = 20000;
        this._autoplay = false;
        this._playState = 'ready';
        this._hoverpause = true;
        this._itemalign = 'center';
        this._loop = true;
        this._slides = [];
        this._slidesWidth = [];
        this._itemsCount = 0;
        this._index = 0;
        this._touch_pos = -1;
        this._width = 0;
        this._position = 0;
        this._oldposition = 0;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
        if (this.autoplay) {
            this._playState = 'play';
            setInterval(() => {
                if (this._playState == 'play')
                    this.Next();
            }, this.interval);
        }
    }
    get interval() { return this._interval; }
    set interval(value) { this._interval = value; }
    get autoplay() { return this._autoplay; }
    set autoplay(value) { this._autoplay = value; }
    get hoverpause() { return this._hoverpause; }
    set hoverpause(value) {
        this._hoverpause = value;
        if (this._hoverpause) {
            this.element.addEventListener("mouseenter", () => { if (this._playState == 'play')
                this._playState = 'pause'; });
            this.element.addEventListener("mouseleave", () => { if (this._autoplay)
                this._playState = 'play'; });
        }
    }
    ;
    get slidewidth() { return this._slidewidth; }
    set slidewidth(value) { this._slidewidth = value.toLowerCase(); }
    get itemshow() { return this._itemshow; }
    set itemshow(value) { this._itemshow = value; }
    get itemalign() { return this._itemalign; }
    set itemalign(value) { this._itemalign = value.toLowerCase(); }
    get loop() { return this._loop; }
    set loop(value) { this._loop = value; }
    Init() {
        this.interval = WNparseNumber(this.element.getAttribute("interval"), 20000);
        this.autoplay = WNparseBoolean(this.element.getAttribute("autoplay"), false);
        this.hoverpause = WNparseBoolean(this.element.getAttribute("hoverpause"), true);
        this.slidewidth = WNparseString(this.element.getAttribute("slidewidth"), '');
        this.itemshow = WNparseNumber(this.element.getAttribute("itemshow"), 0);
        this.itemalign = WNparseString(this.element.getAttribute("align"), 'center');
        this._slidesHolder = this.element.querySelector('.slicker-slides');
        this._slides = [];
        WNGetNodesList(".slicker-item", this.element).forEach((x, i) => {
            if (x.classList.contains('active')) {
                this._index = i;
                x.classList.remove('active');
            }
            this._slides.push(x);
        });
        this._itemsCount = this._slides.length;
        this._slidesHolder.innerHTML = '';
        this._index = 0;
        if (this._loop) {
            for (var i = 0; i < this._itemsCount; i++)
                this._slides.push(this._slides[i].cloneNode(true));
            for (var i = 0; i < this._itemsCount; i++)
                this._slides.push(this._slides[i].cloneNode(true));
            this._index = this._itemsCount;
        }
        this._slidesWidth = new Array(this._slides.length);
        this._slides.forEach((e) => this._slidesHolder.appendChild(e));
        window.addEventListener("resize", () => this.Resize());
        this.NextButton = this.element.querySelector('.slicker-next');
        this.NextButton?.addEventListener('click', () => { this.Next(); });
        this.PreviousButton = this.element.querySelector('.slicker-previous');
        this.PreviousButton?.addEventListener('click', () => { this.Previous(); });
        this.element.addEventListener("touchstart", e => { this.PanStart(e.touches[0].clientX - this.element.offsetLeft); }, true);
        this.element.addEventListener("touchmove", e => { this.PanMove(e.touches[0].clientX - this.element.offsetLeft); }, true);
        this.element.addEventListener("touchend", e => { this.PanEnd(); }, true);
        this.element.addEventListener("touchcancel", e => { this.PanEnd(); }, true);
        this.element.addEventListener("mousedown", e => (e.which == 1) ? this.PanStart(e.clientX - this.element.offsetLeft) : null);
        this.element.addEventListener("mousemove", e => (e.which == 1) ? this.PanMove(e.clientX - this.element.offsetLeft) : null);
        this.element.addEventListener("mouseup", e => this.PanEnd());
        let indicators = this.element.querySelector('.slicker-indicators');
        if (indicators != null) {
            if (indicators.children.length == 0) {
                for (var i = 0; i < this._itemsCount; i++) {
                    let indicator = document.createElement('div');
                    indicator.className = 'indicator-item';
                    indicator.setAttribute('indicator-index', i.toString());
                    indicators.appendChild(indicator);
                }
            }
            this._indicators = WNGetNodesList(".indicator-item", indicators);
            this._indicators.forEach((e) => {
                e.addEventListener('click', (e) => {
                    this.Goto(WNparseNumber(e.target.getAttribute('indicator-index'), 0));
                });
            });
        }
        this.Resize();
        this.ShowActiveIndicator();
    }
    Resize() {
        this._width = this.element.parentElement.clientWidth;
        if (this.itemshow > 0) {
            this.CalcSlidesWidth();
            this._width = WNparseNumber(this._slides[0].style.width) * this.itemshow;
        }
        this.element.style.width = this._width + 'px';
        this._totalWidth = 0;
        this.CalcSlidesWidth();
        this._slidesHolder.style.width = this._totalWidth + 'px';
        this._position = this.GetPosition(this._index);
        this._oldposition = this._position;
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";
    }
    CalcSlidesWidth() {
        this._slides.forEach((e, i) => {
            let el = e;
            WNWaitToLoad(el, 5000);
            if (this._slidewidth == 'auto')
                this._slidesWidth[i] = el.clientWidth;
            else if (this._slidewidth != '')
                this._slidesWidth[i] = WNValueUnit(WNCalcValue(this._slidewidth, "1px", "*", this.element)).value;
            else
                this._slidesWidth[i] = this._width;
            el.style.width = this._slidesWidth[i] + 'px';
            this._totalWidth += this._slidesWidth[i];
        });
    }
    GetPosition(index) {
        let t = 0;
        for (var i = 0; i < index; i++)
            t += this._slidesWidth[i];
        if (this._itemalign == 'center')
            t -= (this._width - this._slidesWidth[index]) / 2;
        else if (this._itemalign == 'right')
            t = t - this._width + this._slidesWidth[index];
        if (getComputedStyle(this.element).direction == 'ltr')
            t = t * -1;
        return t;
    }
    async PanStart(x) {
        this._touch_pos = x;
    }
    async PanMove(x) {
        if (this._touch_pos == -1)
            return;
        let third = this._width / 5;
        let diff = this._position - this._oldposition;
        console.log(diff);
        if (Math.abs(diff) > 10 && ((x < third && diff > 0) ||
            (x > (this._width - third) && diff < 0)))
            this.PanEnd();
        else {
            this._oldposition = this._position + x - this._touch_pos;
            this._slidesHolder.style.transform = "translate3d(" + this._oldposition + "px,0px, 0px)";
        }
    }
    async PanEnd() {
        let diff = Math.abs(this._position - this._oldposition);
        if (diff < 10)
            this._touch_pos = -1;
        if (this._touch_pos == -1)
            return;
        let direction = (this._position > this._oldposition) ? 1 : -1;
        if (getComputedStyle(this.element).direction == 'rtl')
            direction *= -1;
        let t = 0;
        for (var i = 1; i < 1000; i++) {
            t += this._slidesWidth[this._index];
            if (t > diff) {
                this._index += i * direction;
                break;
            }
        }
        this._touch_pos = -1;
        await this.AnimateSlide();
    }
    async AnimateSlide() {
        let newposition = this.GetPosition(this._index);
        let i = this._oldposition;
        while (true) {
            if ((newposition < this._oldposition)) {
                i--;
                if (i < newposition)
                    break;
            }
            else {
                i++;
                if (i > newposition)
                    break;
            }
            this._slidesHolder.style.transform = "translate3d(" + i + "px,0px, 0px)";
            if (WNmod(i, 10) == 0)
                await WNSleep(0);
        }
        this._index = this._itemsCount + WNmod(this._index, this._itemsCount);
        this._oldposition = this._position = this.GetPosition(this._index);
        this._slidesHolder.style.transform = "translate3d(" + this._position + "px,0px, 0px)";
        this.ShowActiveIndicator();
    }
    ShowActiveIndicator() {
        this._indicators.forEach((x) => x.classList.remove('active'));
        let idx = WNmod(this._index, this._itemsCount);
        this.element.querySelector("div[indicator-index='" + idx + "']").classList.add('active');
    }
    async Next() {
        this._touch_pos = -1;
        this._index++;
        await this.AnimateSlide();
    }
    async Previous() {
        this._touch_pos = -1;
        this._index--;
        await this.AnimateSlide();
    }
    async Goto(index) {
        if (index == this._index)
            return;
        this._index = index;
        await this.AnimateSlide();
    }
}
class wnsticky {
    constructor(elem) {
        this._position = 'top';
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
            this.CheckSticky();
        }
    }
    get position() { return this._position; }
    set position(value) { this._position = value; }
    Init() {
        if (this.element.classList.contains('sticky-top'))
            this._position = 'top';
        else if (this.element.classList.contains('sticky-bottom'))
            this._position = 'bottom';
        window.addEventListener('scroll', () => { this.CheckSticky(); });
    }
    CheckSticky() {
        let addstickyOnfly = false;
        if (this._position == 'top' && this.element.offsetTop > this.element.clientHeight)
            addstickyOnfly = true;
        if (this._position == 'bottom' && (document.body.clientHeight - this.element.offsetTop) > this.element.clientHeight)
            addstickyOnfly = true;
        if (addstickyOnfly)
            this.element.classList.add("sticky-onfly");
        else
            this.element.classList.remove("sticky-onfly");
    }
}
;
class wntable {
    constructor(elem) {
        this.date = new wnDate();
        this.pagesize = -1;
        this.currentPage = 1;
        this.totalPages = 1;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        if (this.element.hasAttribute("cultureinfo"))
            this.date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')();
        if (this.element.hasAttribute("calendar"))
            this.date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')();
        if (!this.element.classList.contains('pointer'))
            this.element.classList.add('pointer');
        if (this.element.hasAttribute('onbeforefilter'))
            this.beforefilter = new Function('t', this.element.getAttribute('onbeforefilter'));
        if (this.element.hasAttribute('onbafterfilter'))
            this.afterfilter = new Function('t', this.element.getAttribute('onafterfilter'));
        if (this.element.hasAttribute('onbeforesort'))
            this.beforesort = new Function('t', this.element.getAttribute('onbeforesort'));
        if (this.element.hasAttribute('onbaftersort'))
            this.aftersort = new Function('t', this.element.getAttribute('onaftersort'));
        if (this.element.hasAttribute('onbeforeselected'))
            this.beforeselected = new Function('t,newselected', this.element.getAttribute('onbeforeselected'));
        if (this.element.hasAttribute('onselectedchanged'))
            this.selectedchanged = new Function('t,newselected,oldselected', this.element.getAttribute('onselectedchanged'));
        this.FindHeader();
        this.FilterHeaderRow();
        this.ReadStaticData();
        this.Pagination();
        this.SetFilter();
        this.refresh();
    }
    FindHeader() {
        this.headcols = [];
        this.cols = [];
        this.headtable = this.element.querySelector('thead');
        this.headtable?.querySelectorAll('tr:first-child td,th').forEach((x) => {
            this.headcols.push(x);
        });
        let i = 1;
        let colindex = 0;
        this.headcols?.forEach((x) => {
            let col = { index: 0, caption: '', field: '', datatype: '', sortable: '', filterable: '', format: '', class: '' };
            col.caption = x.innerText;
            if (x.hasAttribute('data-field'))
                col.field = WNparseString(x.getAttribute('data-field'), '');
            if (x.hasAttribute('data-type'))
                col.datatype = WNparseString(x.getAttribute('data-type'), 'string');
            if (x.hasAttribute('data-format'))
                col.format = WNparseString(x.getAttribute('data-format'), '');
            col.class = x.className;
            col.sortable = WNparseString(x.getAttribute('sortable'), 'value').toLowerCase();
            col.index = colindex;
            x.setAttribute('index', colindex.toString());
            if (col.sortable != '') {
                if (!x.classList.contains('sort'))
                    x.classList.add('sort');
                x.addEventListener('click', (t) => {
                    this.Sort(WNparseNumber(t.target.getAttribute('index')));
                    this.refresh();
                });
            }
            col.filterable = WNparseString(x.getAttribute('filterable'), 'value').toLowerCase();
            if (col.field == '') {
                col.field = 'f' + i;
                i++;
            }
            colindex++;
            this.cols.push(col);
        });
    }
    FilterHeaderRow() {
        this.filterinput = [];
        let addfilter = false;
        let tr = document.createElement('tr');
        this.cols.forEach((x) => {
            let td = document.createElement('td');
            if (x.filterable != '') {
                let inp = document.createElement('input');
                inp.type = 'text';
                inp.setAttribute('index', x.index.toString());
                inp.addEventListener('input', (t) => { this.SetFilter(); this.refresh(); });
                td.appendChild(inp);
                addfilter = true;
                this.filterinput.push(inp);
            }
            else
                this.filterinput.push(null);
            tr.appendChild(td);
        });
        if (addfilter) {
            this.headtable?.appendChild(tr);
        }
    }
    ReadStaticData() {
        let rows = [];
        this.bodytable = this.element.querySelector('tbody');
        if (this.bodytable == null) {
            this.bodytable = document.createElement('tbody');
            this.element.appendChild(this.bodytable);
        }
        let tr = this.bodytable?.querySelectorAll('tr');
        tr.forEach((x) => {
            let cols = x.querySelectorAll('td,th');
            let r = {};
            for (var i = 0; i < cols.length; i++) {
                r[this.cols[i].field] = cols[i].innerHTML;
            }
            rows.push(r);
        });
        this.setdata(rows, false);
    }
    Pagination() {
        let paginationElement = this.element.querySelector('.pagination');
        if (paginationElement == null)
            return;
        let btn = paginationElement.querySelectorAll('button');
        if (btn == null)
            return;
        if (paginationElement.hasAttribute('rows'))
            this.pagesize = WNparseNumber(paginationElement.getAttribute('rows'), -1);
        this.paginationButtons = [];
        for (var i = 0; i < btn.length; i++) {
            if (btn[i].classList.contains('first'))
                btn[i].addEventListener('click', () => {
                    this.currentPage = 1;
                    this.refresh();
                });
            else if (btn[i].classList.contains('previous'))
                btn[i].addEventListener('click', () => {
                    this.currentPage--;
                    if (this.currentPage < 1)
                        this.currentPage = 1;
                    this.refresh();
                });
            else if (btn[i].classList.contains('next'))
                btn[i].addEventListener('click', () => {
                    this.currentPage++;
                    if (this.currentPage > this.totalPages)
                        this.currentPage = this.totalPages;
                    this.refresh();
                });
            else if (btn[i].classList.contains('last'))
                btn[i].addEventListener('click', () => {
                    this.currentPage = this.totalPages;
                    this.refresh();
                });
            else {
                btn[i].style.display = 'none';
                btn[i].addEventListener('click', (t) => {
                    this.currentPage = WNparseNumber(t.target.innerText);
                    this.refresh();
                });
                this.paginationButtons.push(btn[i]);
            }
        }
    }
    SetPaginationElements() {
        if (this.pagesize > 0) {
            this.paginationButtons.forEach((x) => x.style.display = 'none');
            let maxPages = this.paginationButtons.length;
            this.totalPages = Math.ceil(this.renderdata.length / this.pagesize);
            if (this.totalPages < 1)
                this.totalPages = 1;
            if (this.currentPage < 1)
                this.currentPage = 1;
            else if (this.currentPage > this.totalPages)
                this.currentPage = this.totalPages;
            let startPage, endPage;
            if (this.totalPages <= maxPages) {
                startPage = 1;
                endPage = this.totalPages;
            }
            else {
                let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
                let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
                if (this.currentPage <= maxPagesBeforeCurrentPage) {
                    startPage = 1;
                    endPage = maxPages;
                }
                else if (this.currentPage + maxPagesAfterCurrentPage >= this.totalPages) {
                    startPage = this.totalPages - maxPages + 1;
                    endPage = this.totalPages;
                }
                else {
                    startPage = this.currentPage - maxPagesBeforeCurrentPage;
                    endPage = this.currentPage + maxPagesAfterCurrentPage;
                }
            }
            for (var i = startPage; i <= endPage; i++) {
                this.paginationButtons[i - startPage].innerText = (i).toString();
                this.paginationButtons[i - startPage].style.display = '';
                if (i == this.currentPage)
                    this.paginationButtons[i - startPage].classList.add('pagination-active');
                else
                    this.paginationButtons[i - startPage].classList.remove('pagination-active');
            }
        }
    }
    fixedData(r, c) {
        if (c.datatype == 'number') {
            r.value = WNparseNumber(r.value, 0);
            r.caption = r.value.toString();
        }
        if (c.datatype == 'date') {
            r.value = new Date(r.value);
            this.date.SetDate(r.value);
            r.caption = this.date.toString(c.format);
        }
        else if (c.format != '')
            r.caption = WNStringFormat(r.value, c.format, this.date.CultureInfo);
        return r;
    }
    refresh() {
        if (this.bodytable == null)
            return;
        this.bodytable.innerHTML = '';
        let startrow = 0;
        let maxrow = this.renderdata.length;
        if (this.pagesize > -1) {
            startrow = this.pagesize * (this.currentPage - 1);
            maxrow = this.pagesize * this.currentPage;
            if (maxrow > this.renderdata.length)
                maxrow = this.renderdata.length;
        }
        for (var row = startrow; row < maxrow; row++) {
            let x = this.renderdata[row];
            let tr = document.createElement('tr');
            tr.setAttribute('index', row.toString());
            if (this.selecteditem != undefined && x["__privatekey"] == this.selecteditem["__privatekey"])
                tr.classList.add('active');
            tr.addEventListener('click', (t) => {
                let tr = t.target;
                while (tr.tagName == 'TD')
                    tr = tr.parentElement;
                let rowidx = WNparseNumber(tr.getAttribute('index'), -1);
                let newselected = this.renderdata[rowidx];
                let oldselected = this.selecteditem;
                if (this.beforeselected)
                    if (!this.beforeselected(this, newselected))
                        return;
                this.bodytable.querySelectorAll('tr').forEach((x) => x.classList.remove('active'));
                tr.classList.add('active');
                this.selecteditem = newselected;
                this.selectedrow = tr;
                if (this.selectedchanged)
                    this.selectedchanged(this, newselected, oldselected);
            }, false);
            for (var i = 0; i < this.cols.length; i++) {
                let td = document.createElement('td');
                td.innerHTML = x[this.cols[i].field].caption;
                tr.appendChild(td);
            }
            this.bodytable.appendChild(tr);
        }
        ;
        this.SetPaginationElements();
        if (this.bodytable.querySelector('tr.active') == null) {
            let old = this.selecteditem;
            this.selecteditem = undefined;
            this.selectedrow = undefined;
            if (this.selectedchanged)
                this.selectedchanged(this, undefined, old);
        }
    }
    SetFilter() {
        let filtervalue = [];
        for (var i = 0; i < this.cols.length; i++) {
            if (this.cols[i].filterable != '' && this.filterinput[i].value != '') {
                filtervalue.push({ field: this.cols[i].field, filterable: this.cols[i].filterable, value: this.filterinput[i].value.toLowerCase() });
            }
        }
        this.renderdata = [];
        for (var row = 0; row < this.data.length; row++) {
            let x = this.data[row];
            let ret = true;
            for (var i = 0; i < filtervalue.length; i++) {
                if (filtervalue[i].filterable == 'value')
                    ret = ret && x[filtervalue[i].field].value.toLowerCase().includes(filtervalue[i].value);
                else if (filtervalue[i].filterable == 'caption')
                    ret = ret && x[filtervalue[i].field].caption.toLowerCase().includes(filtervalue[i].value);
                if (!ret)
                    break;
            }
            if (ret)
                this.renderdata.push(x);
        }
    }
    Sort(colIndex) {
        let sortby = this.cols[colIndex].sortable;
        if (sortby == '')
            return;
        if (this.beforesort != null)
            if (!this.beforesort(this))
                return;
        let desc = !this.headcols[colIndex].classList.contains('desc');
        if (!(this.headcols[colIndex].classList.contains('desc') || this.headcols[colIndex].classList.contains('asc')))
            desc = false;
        let field = this.cols[colIndex].field;
        this.renderdata.sort((x, y) => {
            if (sortby == 'value') {
                if (x[field].value > y[field].value)
                    return desc ? -1 : 1;
                else if (x[field].value < y[field].value)
                    return desc ? 1 : -1;
            }
            else if (sortby == 'caption') {
                if (x[field].caption > y[field].caption)
                    return desc ? -1 : 1;
                else if (x[field].caption < y[field].caption)
                    return desc ? 1 : -1;
            }
            return 0;
        });
        this.headcols.forEach((x) => x.classList.remove('desc', 'asc'));
        this.headcols[colIndex].classList.add(desc ? 'desc' : 'asc');
        if (this.aftersort != null)
            this.aftersort(this);
    }
    setdata(r, append) {
        if (append == false)
            this.data = [];
        let privatekey = 1;
        this.data = r.map((x) => {
            let k = {};
            k['__privatekey'] = { caption: privatekey, value: privatekey };
            for (var i = 0; i < this.cols.length; i++) {
                if (this.cols[i].field != '__privatekey') {
                    let v = { caption: x[this.cols[i].field], value: x[this.cols[i].field] };
                    v = this.fixedData(v, this.cols[i]);
                    k[this.cols[i].field] = v;
                }
            }
            privatekey++;
            return k;
        });
        this.SetFilter();
        this.refresh();
    }
}
class wntime {
    constructor(elem) {
        this.Date = new wnDate();
        this.NaitveDigit = WNDefaultNaitveDigit || false;
        this.DisplayFormat = 'HH:mm';
        this.InputFormat = 'hm';
        this.HourLongStep = 5;
        this.MinuteLongStep = 15;
        this.ontextinput = false;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    Init() {
        if (this.element.hasAttribute('calendar'))
            this.Date.Calendar = Function('return new ' + this.element.getAttribute('calendar') + '()')();
        if (this.element.hasAttribute('cultureinfo'))
            this.Date.CultureInfo = Function('return new ' + this.element.getAttribute('cultureinfo') + '()')();
        if (this.element.hasAttribute('naitvedigit'))
            this.NaitveDigit = WNparseBoolean(this.element.getAttribute('naitvedigit'), false);
        if (this.element.hasAttribute('input-format'))
            this.InputFormat = WNparseString(this.element.getAttribute('input-format'), 'hm');
        if (this.element.hasAttribute('display-id'))
            this.DisplayElement = document.getElementById(this.element.getAttribute('display-id'));
        if (this.DisplayElement != undefined) {
            this.DisplayElement.addEventListener('input', () => { this.SetValueFromDisplay(); });
            this.DisplayElement.addEventListener('change', () => { this.RenderDisplay(); });
        }
        this.DisplayFormat = this.Date.CultureInfo.DateTimeFormat.ShortTimePattern;
        if (this.element.hasAttribute('display-format'))
            this.DisplayFormat = WNparseString(this.element.getAttribute('display-format'), this.Date.CultureInfo.DateTimeFormat.ShortTimePattern);
        if (this.element.hasAttribute('value-id'))
            this.ValueElement = document.getElementById(this.element.getAttribute('value-id'));
        this.Date.SetDate(new Date(this.GetElementValue(this.ValueElement)));
        this.Date.DateChanged = () => {
            let tDate = new wnDate(this.Date);
            tDate.SetDate(new Date(this.GetElementValue(this.ValueElement)));
            tDate.Hour = this.Date.Hour;
            tDate.Minute = this.Date.Minute;
            tDate.Second = this.Date.Second;
            this.SetElementValue(this.ValueElement, this.SetDateValue(this.Date, this.ValueElement));
            this.RenderDisplay();
        };
        this.AddObjects();
        this.refresh();
    }
    get value() { return this.Date.ToDateTime(); }
    set value(value) { this.Date.SetDate(value); this.refresh(); }
    SetHour(value) {
        if (value > 24)
            value -= 24;
        if (value < 0)
            value += 24;
        this.Date.Hour = value;
        this.refresh();
    }
    SetMinute(value) {
        if (value > 59)
            value -= 60;
        if (value < 0)
            value += 60;
        this.Date.Minute = value;
        this.refresh();
    }
    SetSecond(value) {
        if (value > 59)
            value -= 60;
        if (value < 0)
            value += 60;
        this.Date.Second = value;
        this.refresh();
    }
    AddObjects() {
        if (!this.element.classList.contains('time'))
            this.element.classList.add('time');
        this._selectlabel = document.createElement('label');
        this._selectlabel.className = 'time-result';
        this.element.appendChild(this._selectlabel);
        let timeinput = document.createElement('div');
        timeinput.className = 'time-input';
        if (this.InputFormat.toLocaleLowerCase().includes('h')) {
            let a = this.AddSection();
            a[1].addEventListener('click', () => {
                this.SetHour(this.Date.Hour + this.HourLongStep);
                event.stopPropagation();
            });
            a[2].addEventListener('click', () => {
                this.SetHour(this.Date.Hour + 1);
                event.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.SetHour(parseInt(e.target.value));
            });
            a[4].addEventListener('click', () => {
                this.SetHour(this.Date.Hour - 1);
                event.stopPropagation();
            });
            a[5].addEventListener('click', () => {
                this.SetHour(this.Date.Hour - this.HourLongStep);
                event.stopPropagation();
            });
            this._inputhour = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.InputFormat.toLocaleLowerCase().includes('m')) {
            let a = this.AddSection();
            a[1].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute + this.MinuteLongStep);
                event.stopPropagation();
            });
            a[2].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute + 1);
                event.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.SetMinute(parseInt(e.target.value));
            });
            a[4].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute - 1);
                event.stopPropagation();
            });
            a[5].addEventListener('click', () => {
                this.SetMinute(this.Date.Minute - this.MinuteLongStep);
                event.stopPropagation();
            });
            this._inputminute = a[3];
            timeinput.appendChild(a[0]);
        }
        if (this.InputFormat.toLocaleLowerCase().includes('s')) {
            let a = this.AddSection();
            a[1].addEventListener('click', () => {
                this.SetSecond(this.Date.Second + this.MinuteLongStep);
                event.stopPropagation();
            });
            a[2].addEventListener('click', () => {
                this.SetSecond(this.Date.Second + 1);
                event.stopPropagation();
            });
            a[3].addEventListener('input', (e) => {
                this.SetSecond(parseInt(e.target.value));
            });
            a[4].addEventListener('click', () => {
                this.SetSecond(this.Date.Second - 1);
                event.stopPropagation();
            });
            a[5].addEventListener('click', () => {
                this.SetSecond(this.Date.Second - this.MinuteLongStep);
                event.stopPropagation();
            });
            this._inputsecond = a[3];
            timeinput.appendChild(a[0]);
        }
        this.element.appendChild(timeinput);
    }
    AddSection() {
        let div = document.createElement('div');
        let doubleup = document.createElement('button');
        div.appendChild(doubleup);
        let up = document.createElement('button');
        div.appendChild(up);
        let input = document.createElement('input');
        input.type = 'number';
        div.appendChild(input);
        let down = document.createElement('button');
        div.appendChild(down);
        let doubledown = document.createElement('button');
        div.appendChild(doubledown);
        return [div, doubleup, up, input, down, doubledown];
    }
    refresh() {
        this._selectlabel.textContent = this.Date.toString(this.Date.CultureInfo.DateTimeFormat.LongTimePattern, this.NaitveDigit);
        if (this._inputhour != null)
            this._inputhour.value = this.Date.Hour.toString();
        if (this._inputminute != null)
            this._inputminute.value = this.Date.Minute.toString();
        if (this._inputsecond != null)
            this._inputsecond.value = this.Date.Second.toString();
    }
    RenderDisplay() {
        if (this.ontextinput)
            return;
        let ret1 = this.Date.toString(this.DisplayFormat, this.NaitveDigit);
        if (this.DisplayElement != undefined) {
            this.SetElementValue(this.DisplayElement, ret1);
        }
    }
    SetValueFromDisplay() {
        this.ontextinput = true;
        let ret = this.GetElementValue(this.DisplayElement);
        this.Date.SetDateString(WNDeNaitveDigit(ret, this.Date.CultureInfo));
        this.refresh();
        this.ontextinput = false;
    }
    SetElementValue(elem, value) {
        if (elem != undefined)
            if (elem.localName == 'input')
                elem.value = value;
            else
                elem.textContent = value;
    }
    GetElementValue(elem) {
        let ret = '';
        if (elem != undefined)
            if (elem.localName == 'input')
                ret = elem.value;
            else
                ret = elem.textContent;
        return ret;
    }
    SetDateValue(date, ValueElement) {
        let tDate = new wnDate(date);
        tDate.SetDate(new Date(this.GetElementValue(ValueElement)));
        tDate.Hour = date.Hour;
        tDate.Minute = date.Minute;
        tDate.Second = date.Second;
        tDate.Milliseconds = date.Milliseconds;
        date.SetYMD(tDate.Year, tDate.Month, tDate.Day, tDate.Hour, tDate.Minute, tDate.Second, tDate.Milliseconds);
        return tDate.ToDateTime().toISOString();
    }
}
class wntoast {
    constructor(elem) {
        this._timeout = 0;
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    get timeout() { return this._timeout; }
    set timeout(value) { this._timeout = value; }
    Init() {
        let elem = this.element.querySelectorAll('[close-parent]');
        for (var i = 0; i < elem.length; i++)
            elem[i].addEventListener('click', () => { this.hide(); });
        if (this.element.hasAttribute('timeout'))
            this._timeout = WNparseNumber(this.element.getAttribute('timeout'), 0);
        if (this.element.hasAttribute('onbeforehide'))
            this.beforehide = new Function(this.element.getAttribute('onbeforehide'));
    }
    show() {
        clearTimeout(this._timeouthandle);
        this.element.classList.add('show');
        if (this._timeout > 0) {
            this._timeouthandle = setTimeout(() => { this.hide(); }, this._timeout);
        }
    }
    toggle() {
        if (this.element.classList.contains('show'))
            this.hide();
        else
            this.show();
    }
    hide() {
        clearTimeout(this._timeouthandle);
        if (this.beforehide != null)
            if (!this.beforehide())
                return;
        this.element.classList.remove('show');
    }
}
class wntooltip {
    constructor(elem) {
        this._delay = 500;
        this._hideafter = 3000;
        this._classes = '';
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    get delay() { return this._delay; }
    set delay(value) { this._delay = value; }
    get hideafter() { return this._hideafter; }
    set hideafter(value) { this._hideafter = value; }
    get tooltipclass() { return this._classes; }
    set tooltipclass(value) { this._classes = value; }
    get target() { return this._target; }
    set target(value) { this._target = value; }
    get events() { return this._events; }
    set events(value) { this._events = value; this.SetEvents(); }
    get lostevents() { return this._lostevents; }
    set lostevents(value) { this._lostevents = value; this.SetEvents(); }
    Init() {
        let text = this.element.getAttribute('wn-tooltip');
        this._target = document.getElementById(text);
        if (this._target != null && !this._target.classList.contains('tooltip'))
            this._target = null;
        if (this._target == null) {
            this.CreateTarget(text);
        }
        if (this.element.hasAttribute('wn-tooltip-delay')) {
            this._delay = WNparseNumber(this.element.getAttribute('wn-tooltip-delay'), 500);
        }
        if (this.element.hasAttribute('wn-tooltip-hideafter')) {
            this._hideafter = WNparseNumber(this.element.getAttribute('wn-tooltip-hideafter'), 3000);
        }
        if (this.element.hasAttribute('wn-tooltip-events')) {
            this._events = this.element.getAttribute('wn-tooltip-events');
            if (this.element.hasAttribute('wn-tooltip-events-lost'))
                this._lostevents = this.element.getAttribute('wn-tooltip-events-lost');
        }
        else {
            this._events = 'mouseenter';
            if (!this.element.hasAttribute('wn-tooltip-nolost'))
                this._lostevents = 'mouseleave';
        }
        this.SetEvents();
    }
    CreateTarget(content) {
        this._target = document.createElement('div');
        this._target.className = 'tooltip tooltip-arrow-bottom';
        this._target.innerHTML = content;
        if (this.element.hasAttribute('wn-tooltip-class')) {
            let t = this.element.getAttribute('wn-tooltip-class');
            if (t.includes('tooltip-arrow'))
                this._target.className = 'tooltip';
            this._target.className += ' ' + t;
        }
        if (this.element.dir == 'ltr')
            this._target.setAttribute('dir', 'ltr');
        this.element.after(this._target);
    }
    SetEvents() {
        if (this._events != null) {
            let eventlist = this._events.split(',');
            eventlist.forEach((e) => {
                this.element.addEventListener(e.trim(), () => {
                    this.autoshow();
                });
            });
        }
        if (this._lostevents != null) {
            let eventlist = this._lostevents.split(',');
            eventlist.forEach((e) => {
                this.element.addEventListener(e.trim(), () => {
                    this.hide();
                });
            });
        }
        window.addEventListener("scroll", () => { this._target.classList.remove('show'); });
        window.addEventListener("resize", () => { this._target.classList.remove('show'); });
    }
    autoshow() {
        this._delayhandle = setTimeout(() => {
            this.show();
            if (this._hideafter != 0)
                this._hideafterhandle = setTimeout(() => {
                    this.hide();
                }, this._hideafter);
        }, this._delay);
    }
    show() {
        if (this._target.classList.contains('show'))
            return;
        if (this._classes != null && this._classes != "") {
            this._target.className = 'tooltip ' + this._classes;
        }
        let param = { fit: false, direction: '' };
        param.direction = 'top';
        if (this.target.classList.contains('tooltip-arrow-bottom'))
            param.direction = 'top';
        else if (this.target.classList.contains('tooltip-arrow-top'))
            param.direction = 'bottom';
        else if (this.target.classList.contains('tooltip-arrow-start'))
            param.direction = 'start';
        else if (this.target.classList.contains('tooltip-arrow-end'))
            param.direction = 'end';
        WNSetElementPosition(this._target, this.element, param);
        this._target.classList.add('show');
    }
    hide() {
        clearTimeout(this._hideafterhandle);
        clearTimeout(this._delayhandle);
        this._target.classList.remove('show');
    }
}
function WNTooltipAssign(elem = document) {
    let selectors = elem.querySelectorAll("[wn-tooltip]");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        let id = elem.id;
        if (id == '')
            id = 'wn-' + elem.tagName + (Object.keys(WN).length + 1).toString();
        WN[id + '-tooltip'] = new wntooltip(elem);
    }
}
class wntree {
    constructor(elem) {
        this._currentSelect = null;
        this._treeexpanditem = false;
        this.lastClickID = '';
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Init();
        }
    }
    get currentselect() { return this._currentSelect; }
    set currentselect(value) { this._currentSelect = value; }
    get currentvalue() { return this._currentSelect?.getAttribute('wn-tree-value'); }
    get currentcaption() { return this._currentSelect?.getAttribute('wn-tree-caption'); }
    get treeexpanditem() { return this._treeexpanditem; }
    set treeexpanditem(value) { this._treeexpanditem = value; }
    Init() {
        this._treeexpanditem = this.element.classList.contains('tree-expand-item');
        let items = this.element.querySelectorAll('li');
        for (var i = 0; i < items.length; i++) {
            this.checkitemstatus(items[i]);
        }
        if (this.element.classList.contains('collapsed-all'))
            this.collapsedall();
        if (this.element.hasAttribute('onbeforeclick'))
            this.beforeclick = new Function('t', 'e', this.element.getAttribute('onbeforeclick'));
        if (this.element.hasAttribute('onafterclick'))
            this.afterclick = new Function('t', 'e', this.element.getAttribute('onafterclick'));
        if (this.element.hasAttribute('onselectionchange'))
            this.selectionchange = new Function('t', 'n', this.element.getAttribute('onselectionchange'));
        if (this.element.hasAttribute('onbeforecollapse'))
            this.beforecollapse = new Function('t', 'n', this.element.getAttribute('onbeforecollapse'));
        if (this.element.hasAttribute('onaftercollapse'))
            this.aftercollapse = new Function('t', 'n', this.element.getAttribute('onaftercollapse'));
        if (this.element.hasAttribute('onbeforeexpand'))
            this.beforeexpand = new Function('t', 'n', this.element.getAttribute('onbeforeexpand'));
        if (this.element.hasAttribute('onafterexpand'))
            this.afterexpand = new Function('t', 'n', this.element.getAttribute('onafterexpand'));
        if (this.element.hasAttribute('onbeforetoggle'))
            this.beforetoggle = new Function('t', 'n', this.element.getAttribute('onbeforetoggle'));
        if (this.element.hasAttribute('onaftertoggle'))
            this.aftertoggle = new Function('t', 'n', this.element.getAttribute('onaftertoggle'));
    }
    checkitemstatus(node) {
        node.addEventListener('click', (e) => {
            this.click(e);
        }, false);
        if (node.querySelector('ul') != null) {
            node.classList.add('expandable');
        }
        else {
            node.classList.remove('expandable');
        }
        let treeitem = node.querySelector('.tree-item, .tree-link');
        if (treeitem != null) {
            if (!treeitem.hasAttribute('wn-tree-caption'))
                treeitem.setAttribute('wn-tree-caption', treeitem.innerText);
            if (!treeitem.hasAttribute('wn-tree-value')) {
                if (treeitem.localName == 'a')
                    treeitem.setAttribute('wn-tree-value', treeitem.getAttribute('href'));
                else
                    treeitem.setAttribute('wn-tree-value', treeitem.innerText);
            }
            if (!this._treeexpanditem && treeitem.classList.contains('tree-item'))
                treeitem.addEventListener('click', (e) => {
                    this.select(e.target);
                }, true);
            if (treeitem.classList.contains('active'))
                this._currentSelect = treeitem;
        }
    }
    findLI(node) {
        while (node.localName != 'li')
            node = node.parentElement;
        return node;
    }
    click(e) {
        let ClickID = '' + e.clientX + e.clientY;
        if (ClickID == this.lastClickID)
            return;
        this.lastClickID = ClickID;
        if (this.beforeclick != null)
            this.beforeclick(this, e);
        let node = e.target;
        if (!node.classList.contains('tree-link')) {
        }
        node = this.findLI(node);
        if (node.classList.contains('expandable')) {
            if ((this._treeexpanditem) ||
                ((node.dir == 'ltr' && e.offsetX < parseInt(getComputedStyle(node).paddingInlineStart)) ||
                    (node.clientWidth - e.offsetX < parseInt(getComputedStyle(node).paddingInlineStart)))) {
                this.toggle(node);
                event.stopPropagation();
            }
        }
        if (this.afterclick != null)
            this.afterclick(this, e);
    }
    select(node) {
        if (node == this._currentSelect)
            return;
        if (this._currentSelect != null)
            this._currentSelect.classList.remove('active');
        node.classList.add('active');
        this._currentSelect = node;
        if (this.selectionchange != null)
            this.selectionchange(this, node);
    }
    toggle(node) {
        node = this.findLI(node);
        if (this.beforetoggle != null)
            this.beforetoggle(this, node);
        node.classList.toggle('collapsed');
        if (this.aftertoggle != null)
            this.aftertoggle(this, node);
    }
    collapse(node) {
        node = this.findLI(node);
        if (node.classList.contains('collapsed'))
            return;
        if (this.beforecollapse != null)
            this.beforecollapse(this, node);
        node.classList.add('collapsed');
        if (this.aftercollapse != null)
            this.aftercollapse(this, node);
    }
    expand(node) {
        node = this.findLI(node);
        if (!node.classList.contains('collapsed'))
            return;
        if (this.beforeexpand != null)
            this.beforeexpand(this, node);
        node.classList.remove('collapsed');
        if (this.afterexpand != null)
            this.afterexpand(this, node);
    }
    expandtoparent(node) {
        node = this.findLI(node);
        this.expand(node);
        while (node != null) {
            node = node.parentElement;
            if (node.classList.contains('tree'))
                break;
            node = this.findLI(node);
            this.expand(node);
        }
    }
    collapsewithchild(node) {
        node = this.findLI(node);
        this.collapse(node);
        let items = node.querySelectorAll('.expandable');
        items.forEach((itm) => { itm.classList.add('collapsed'); });
    }
    collapsedall() {
        let items = this.element.querySelectorAll('.expandable');
        items.forEach((itm) => { itm.classList.add('collapsed'); });
    }
    expandall() {
        let items = this.element.querySelectorAll('.collapsed');
        items.forEach((itm) => { itm.classList.remove('collapsed'); });
    }
    findbytext(text, contains = true, select = false) {
        let selectedNode = null;
        let n = null;
        if (contains)
            n = this.element.querySelector('[wn-tree-caption*="' + text + '"]');
        else
            n = this.element.querySelector('[wn-tree-caption="' + text + '"]');
        selectedNode = n;
        if (select)
            this.select(selectedNode);
        return selectedNode;
    }
    findbyvalue(value, select = false) {
        let selectedNode = null;
        let n = this.element.querySelector('[wn-tree-value="' + value.replaceAll('\\', '\\\\') + '"]');
        selectedNode = n;
        if (select) {
            this._currentSelect = null;
            this.select(selectedNode);
        }
        return selectedNode;
    }
    filterbytext(text, contains = true) {
        let selectedNode = Array();
        text = text.toLowerCase();
        let treeitem = this.element.querySelectorAll('.tree-item, .tree-link');
        for (var i = 0; i < treeitem.length; i++) {
            let s = treeitem[i].getAttribute('wn-tree-caption').toLowerCase();
            if ((contains && s.includes(text)) || (s == text)) {
                let node = treeitem[i];
                node = this.findLI(node);
                while (node != null) {
                    if (node.classList.contains('tree'))
                        break;
                    if (node.localName == 'li')
                        selectedNode.push(node);
                    node = node.parentElement;
                }
            }
        }
        treeitem = this.element.querySelectorAll('li');
        for (var i = 0; i < treeitem.length; i++) {
            if (selectedNode.includes(treeitem[i]))
                treeitem[i].classList.remove('hide');
            else
                treeitem[i].classList.add('hide');
        }
    }
    addrow(node, type, text, value = '', image = '') {
        let html = '';
        if (type == 'tree-item' || type == 'item') {
            html = "<div class='tree-item'";
            if (value != '')
                html += " wn-tree-value='" + value + "'";
            html += ">";
            if (image != '')
                html += "<img src='" + image + "' />";
            html += text;
            html += "</div>";
        }
        if (type == 'tree-link' || type == 'link') {
            html = "<a class='tree-link' wn-tree-caption='" + text + "' wn-tree-value='" + value + "' href='" + value + "'>";
            if (image != '')
                html += "<img src='" + image + "' />";
            html += text;
            html += "</a>";
        }
        return this.addrowhtml(node, html);
    }
    addrowhtml(node, html) {
        let li;
        let ul;
        if (typeof (node) == 'string') {
            if (node == '')
                node = this.element;
            else {
                node = this.findbyvalue(node, false);
                node = this.findLI(node);
            }
        }
        if (node.localName != 'ul') {
            li = this.findLI(node);
            ul = li.querySelector('ul');
        }
        else {
            li = node;
            ul = node;
        }
        if (ul == null) {
            ul = document.createElement('ul');
            if (li.dir == 'ltr')
                ul.setAttribute('dir', 'ltr');
            li.appendChild(ul);
        }
        let subli = document.createElement('li');
        if (li.dir == 'ltr')
            subli.setAttribute('dir', 'ltr');
        subli.innerHTML = html;
        ul.appendChild(subli);
        this.checkitemstatus(subli);
        li.classList.add('expandable');
        this.checkitemstatus(li);
        return subli;
    }
    setdata(datasource, idfield, parentfield, typefield, displayfield, valuefield, imagefield, append = false) {
        if (typeof (datasource) == 'string')
            return;
        if (!append) {
            this.element.innerHTML = '';
        }
        this.adddschilds(this.element, datasource, null, idfield, parentfield, typefield, displayfield, valuefield, imagefield);
    }
    adddschilds(element, datasource, parentvalue, idfield, parentfield, typefield, displayfield, valuefield, imagefield) {
        let dp = datasource.filter((x) => { return x[parentfield] == parentvalue; });
        dp.forEach((x) => {
            let n = this.addrow(element, x[typefield], x[displayfield], x[valuefield], x[imagefield]);
            this.adddschilds(n, datasource, x[idfield], idfield, parentfield, typefield, displayfield, valuefield, imagefield);
        });
    }
}
class wnvalidator {
    constructor(elem) {
        if (elem !== undefined && elem !== null) {
            this.element = elem;
            this.Render();
        }
    }
    Render() {
        this.element.addEventListener('submit', (event) => {
            this.Validate(event.srcElement, event);
        });
        this.element.addEventListener('reset', (event) => {
            this.Reset(event.srcElement);
        });
    }
    Validate(form, event) {
        if (form == undefined || form == null)
            form = this.element;
        wnValidator_onvalidationcheck(form.children, event);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('validated');
        return form.checkValidity();
    }
    IsValid() {
        wnValidator_onvalidationcheck(this.element.children, event);
        this.element.classList.add('validated');
        return this.element.checkValidity();
    }
    Reset(form) {
        form.classList.remove('validated');
    }
}
function wnValidator_onvalidationcheck(children, event) {
    for (var i = 0; i < children.length; i++) {
        let x = children.item(i);
        let elems = x.querySelectorAll('[norequired]');
        elems.forEach((x) => {
            x.setAttribute('required', '');
            x.removeAttribute('norequired');
        });
        if (!(getComputedStyle(x).display == 'none' || getComputedStyle(x).visibility == 'hidden')) {
            if (x.hasAttribute('onvalidation')) {
                let func = x.getAttribute('onvalidation');
                let ret = false;
                if (func.includes('=>'))
                    ret = new Function('t', 'e', 'return ' + func)()(x, event);
                else
                    ret = new Function(func)();
                if (!ret)
                    x.setCustomValidity('Error');
                else
                    x.setCustomValidity('');
            }
            if (x.childElementCount > 0)
                wnValidator_onvalidationcheck(x.children, event);
        }
        else {
            if (x.hasAttribute('required'))
                x.setCustomValidity('');
            let elems = x.querySelectorAll('[required]');
            elems.forEach((x) => {
                x.setAttribute('norequired', '');
                x.removeAttribute('required');
            });
        }
    }
    ;
}
class wnCultureInfo_en_US {
    constructor() {
        this.DisplayName = 'English';
        this.EnglishName = 'English';
        this.ThreeLetterISOLanguageName = 'eng';
        this.TwoLetterISOLanguageName = 'en';
        this.DateTimeFormat = {
            AMDesignator: 'AM',
            AbbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            AbbreviatedMonthNames: {
                "wnGregorianCalendar": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                "wnJulianCalendar": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""],
                "wnPersianCalendar": ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf", ""],
                "wnHijriCalendar": ["Muh", "Saf", "RAw", "RTh", "JAw", "JTh", "Raj", "Sha", "Ram", "Shw", "ZQa", "ZHi", ""],
            },
            DateSeparator: '-',
            DayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            FirstDayOfWeek: 0,
            FullDateTimePattern: 'dddd, MMMM d, yyyy h:mm:ss tt',
            LongDatePattern: 'dddd, MMMM d, yyyy',
            LongTimePattern: 'h:mm:ss tt',
            MonthDayPattern: 'MMMM d',
            MonthNames: {
                "wnGregorianCalendar": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                "wnJulianCalendar": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""],
                "wnPersianCalendar": ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand", ""],
                "wnHijriCalendar": ["al-Muharram", "Safar", "Rabi al-Awwal", "Rabi ath-Thani", "Jumada al-Awwal", "Jumada ath-Thaniyah", "Rajab", "Shaban", "Ramadan", "Shawwal", "Zu al-Qadah", "Zu al-Hijjah", ""],
            },
            PMDesignator: 'PM',
            ShortDatePattern: "M-d-yyyy",
            ShortTimePattern: "h:mm tt",
            ShortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            TimeSeparator: ':',
            YearMonthPattern: 'MMMM yyyy',
            Holiday: 0
        };
        this.NumberFormat = {
            CurrencyDecimalDigits: 2,
            CurrencyDecimalSeparator: ".",
            CurrencyGroupSeparator: ",",
            CurrencyGroupSizes: [3],
            CurrencyNegativePattern: 0,
            CurrencyPositivePattern: 0,
            CurrencySymbol: "$",
            NaNSymbol: "NaN",
            NativeDigits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            NegativeInfinitySymbol: "-∞",
            NegativeSign: "-",
            NumberDecimalDigits: 2,
            NumberDecimalSeparator: ".",
            NumberGroupSeparator: ",",
            NumberGroupSizes: [3],
            NumberNegativePattern: 1,
            PerMilleSymbol: "‰",
            PercentDecimalDigits: 2,
            PercentDecimalSeparator: ".",
            PercentGroupSeparator: ",",
            PercentGroupSizes: [3],
            PercentNegativePattern: 1,
            PercentPositivePattern: 1,
            PercentSymbol: "%",
            PositiveInfinitySymbol: "∞",
            PositiveSign: "+"
        };
        this.TextInfo = {
            ANSICodePage: 1252,
            CultureName: "en-US",
            EBCDICCodePage: 37,
            IsRightToLeft: false,
            LCID: 1033,
            ListSeparator: ",",
            MacCodePage: 10000,
            OEMCodePage: 437
        };
    }
}
class wnCultureInfo_fa_IR {
    constructor() {
        this.DisplayName = 'پارسی';
        this.EnglishName = 'Persian';
        this.ThreeLetterISOLanguageName = 'fas';
        this.TwoLetterISOLanguageName = 'fa';
        this.DateTimeFormat = {
            AMDesignator: 'ق.ظ',
            AbbreviatedDayNames: ["يكش", "دوش", "س.ش", "چ.ش", "پنج", "جمع", "شنب"],
            AbbreviatedMonthNames: {
                "wnPersianCalendar": ["فرو", "ارد", "خرد", "تیر", "مرد", "شهر", "مهر", "آبا", "آذر", "دی", "بهم", "اسف", ""],
                "wnGregorianCalendar": ["ژان", "فور", "مار", "آپر", "می", "جون", "جول", "آگو", "سپت", "اکت", "نوا", "دسا", ""],
                "wnJulianCalendar": ["ژان", "فور", "مار", "آپر", "می", "جون", "جول", "آگو", "سپت", "اکت", "نوا", "دسا", ""],
                "wnHijriCalendar": ["محر", "صفر", "راول", "رثانی", "جاول", "جثانی", "رجب", "شعب", "رمض", "شوا", "ذقعده", "ذحجه", ""],
            },
            DateSeparator: '/',
            DayNames: ["يكشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"],
            FirstDayOfWeek: 6,
            FullDateTimePattern: 'dddd, d MMMM yyyy hh:mm:ss tt',
            LongDatePattern: 'dddd, d MMMM yyyy',
            LongTimePattern: 'h:mm:ss tt',
            MonthDayPattern: 'd MMMM',
            MonthNames: {
                "wnPersianCalendar": ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند", ""],
                "wnGregorianCalendar": ["ژانویه", "فوریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر", ""],
                "wnJulianCalendar": ["ژانویه", "فوریه", "مارچ", "آپریل", "می", "جون", "جولای", "آگوست", "سپتامبر", "اکتبر", "نوامبر", "دسامبر", ""],
                "wnHijriCalendar": ["محرم", "صفر", "ربیع الاول", "ربیع الثانی", "جمادی الاول", "جمادی الثانی", "رجب", "شعبان", "رمضان", "شوال", "ذوالقعده", "ذوالحجه", ""],
            },
            PMDesignator: 'ب.ظ',
            ShortDatePattern: "dd/MM/yyyy",
            ShortTimePattern: "hh:mm tt",
            ShortestDayNames: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            TimeSeparator: ':',
            YearMonthPattern: 'MMMM, yyyy',
            Holiday: 5
        };
        this.NumberFormat = {
            CurrencyDecimalDigits: 2,
            CurrencyDecimalSeparator: "/",
            CurrencyGroupSeparator: ",",
            CurrencyGroupSizes: [3],
            CurrencyNegativePattern: 6,
            CurrencyPositivePattern: 1,
            CurrencySymbol: "ريال",
            NaNSymbol: "ناعدد",
            NativeDigits: ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"],
            NegativeInfinitySymbol: "-∞",
            NegativeSign: "-",
            NumberDecimalDigits: 2,
            NumberDecimalSeparator: "/",
            NumberGroupSeparator: ",",
            NumberGroupSizes: [3],
            NumberNegativePattern: 1,
            PerMilleSymbol: "‰",
            PercentDecimalDigits: 2,
            PercentDecimalSeparator: "/",
            PercentGroupSeparator: ",",
            PercentGroupSizes: [3],
            PercentNegativePattern: 1,
            PercentPositivePattern: 1,
            PercentSymbol: "%",
            PositiveInfinitySymbol: "∞",
            PositiveSign: "+"
        };
        this.TextInfo = {
            ANSICodePage: 1256,
            CultureName: "fa-IR",
            EBCDICCodePage: 20420,
            IsRightToLeft: true,
            LCID: 1065,
            ListSeparator: "؛",
            MacCodePage: 10004,
            OEMCodePage: 720
        };
    }
}
class wnGregorianCalendar {
    constructor() {
        this.GREGORIAN_EPOCH = 1721425.5;
        this.LeapMonth = 2;
        this.MonthsInYear = 12;
    }
    GetDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.GetDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    GetDayOfYear(Year, Month, Day) {
        return this.GetDaysFromBase(Year, Month, Day) - this.GetDaysFromBase(Year, 1, 1);
    }
    GetDaysInMonth(Year, Month) {
        return this.GetMonthsDays(this.IsLeapYear(Year))[Month - 1];
    }
    GetDaysInYear(Year) { return this.IsLeapYear(Year) ? 366 : 365; }
    GetWeekOfYear(Year, Month, Day) {
        let dayDiff = this.GetDayOfYear(Year, Month, Day) + this.GetDayOfWeek(Year, 1, 1);
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    IsLeapDay(Year, Month, Day) {
        return this.IsLeapMonth(Year, Month) && Day === 29;
    }
    IsLeapMonth(Year, Month) { return this.IsLeapYear(Year) && Month === this.LeapMonth; }
    IsLeapYear(Year) {
        return ((Year % 4) == 0) &&
            (!(((Year % 100) == 0) && ((Year % 400) != 0)));
    }
    GetMonthsDays(mLeapYear) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    GetDaysFromBase(Year, Month, Day) {
        return (this.GREGORIAN_EPOCH - 1) +
            (365 * (Year - 1)) +
            Math.floor((Year - 1) / 4) +
            (-Math.floor((Year - 1) / 100)) +
            Math.floor((Year - 1) / 400) +
            Math.floor((((367 * Month) - 362) / 12) +
                ((Month <= 2) ? 0 :
                    (this.IsLeapYear(Year) ? -1 : -2)) +
                Day);
    }
    GetYearMontDayFromDays(jd) {
        let wjd, depoch, quadricent, dqc, cent, dcent, quad, dquad, yindex, year, yearday, leapadj, month, day;
        wjd = Math.floor(jd - 0.5) + 0.5;
        depoch = wjd - this.GREGORIAN_EPOCH;
        quadricent = Math.floor(depoch / 146097);
        dqc = WNmod(depoch, 146097);
        cent = Math.floor(dqc / 36524);
        dcent = WNmod(dqc, 36524);
        quad = Math.floor(dcent / 1461);
        dquad = WNmod(dcent, 1461);
        yindex = Math.floor(dquad / 365);
        year = (quadricent * 400) + (cent * 100) + (quad * 4) + yindex;
        if (!((cent == 4) || (yindex == 4))) {
            year++;
        }
        yearday = wjd - this.GetDaysFromBase(year, 1, 1);
        leapadj = ((wjd < this.GetDaysFromBase(year, 3, 1)) ? 0
            :
                (this.IsLeapYear(year) ? 1 : 2));
        month = Math.floor((((yearday + leapadj) * 12) + 373) / 367);
        day = (wjd - this.GetDaysFromBase(year, month, 1)) + 1;
        return { Year: year, Month: month, Day: day };
    }
}
class wnHijriCalendar {
    constructor() {
        this.ISLAMIC_EPOCH = 1948439.5;
        this.HijriAdjustment = WNDefaultHijriAdjustment;
        this.LeapMonth = 12;
        this.MonthsInYear = 12;
    }
    GetDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.GetDaysFromBase(Year, Month, Day) + 1.5 - this.HijriAdjustment)), 7);
    }
    GetDayOfYear(Year, Month, Day) {
        return this.GetDaysFromBase(Year, Month, Day) - this.GetDaysFromBase(Year, 1, 1);
    }
    GetDaysInMonth(Year, Month) {
        return this.GetMonthsDays(this.IsLeapYear(Year))[Month - 1];
    }
    GetDaysInYear(Year) { return this.IsLeapYear(Year) ? 355 : 354; }
    GetWeekOfYear(Year, Month, Day) {
        let dayDiff = this.GetDayOfYear(Year, Month, Day) + this.GetDayOfWeek(Year, 1, 1) + 1;
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    IsLeapDay(Year, Month, Day) {
        return this.IsLeapMonth(Year, Month) && Day === 30;
    }
    IsLeapMonth(Year, Month) { return this.IsLeapYear(Year) && Month === this.LeapMonth; }
    IsLeapYear(Year) {
        return (((Year * 11) + 14) % 30) < 11;
    }
    GetDaysFromBase(Year, Month, Day) {
        return (Day +
            Math.ceil(29.5 * (Month - 1)) +
            (Year - 1) * 354 +
            Math.floor((3 + (11 * Year)) / 30) +
            this.ISLAMIC_EPOCH) - 1;
    }
    GetYearMontDayFromDays(jd) {
        let year, month, day;
        jd = Math.floor(jd) + 0.5 + this.HijriAdjustment;
        year = Math.floor(((30 * (jd - this.ISLAMIC_EPOCH)) + 10646) / 10631);
        month = Math.min(12, Math.ceil((jd - (29 + this.GetDaysFromBase(year, 1, 1))) / 29.5) + 1);
        day = (jd - this.GetDaysFromBase(year, month, 1)) + 1;
        return { Year: year, Month: month, Day: day };
    }
    GetMonthsDays(mLeapYear) {
        return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, mLeapYear ? 30 : 29, 0];
    }
}
class wnJulianCalendar {
    constructor() {
        this.LeapMonth = 2;
        this.MonthsInYear = 12;
    }
    GetDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.GetDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    GetDayOfYear(Year, Month, Day) {
        return this.GetDaysFromBase(Year, Month, Day) - this.GetDaysFromBase(Year, 1, 1);
    }
    GetDaysInMonth(Year, Month) {
        return this.GetMonthsDays(this.IsLeapYear(Year))[Month - 1];
    }
    GetDaysInYear(Year) { return this.IsLeapYear(Year) ? 366 : 365; }
    GetWeekOfYear(Year, Month, Day) {
        let FirstWeekDay = this.GetDayOfWeek(Year, 1, 1);
        let dayDiff = this.GetDayOfYear(Year, Month, Day);
        dayDiff += FirstWeekDay;
        let weekNr = Math.ceil(dayDiff / 7);
        return weekNr;
    }
    IsLeapDay(Year, Month, Day) {
        return this.IsLeapMonth(Year, Month) && Day === 29;
    }
    IsLeapMonth(Year, Month) { return this.IsLeapYear(Year) && Month === this.LeapMonth; }
    IsLeapYear(Year) {
        return WNmod(Year, 4) == ((Year > 0) ? 0 : 3);
    }
    GetMonthsDays(mLeapYear) {
        return [31, mLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 0];
    }
    GetDaysFromBase(Year, Month, Day) {
        if (Year < 1) {
            Year++;
        }
        if (Month <= 2) {
            Year--;
            Month += 12;
        }
        return ((Math.floor((365.25 * (Year + 4716))) +
            Math.floor((30.6001 * (Month + 1))) +
            Day) - 1524.5);
    }
    GetYearMontDayFromDays(jd) {
        let a, b, c, d, e, year, month, day;
        jd += 0.5;
        a = Math.floor(jd);
        b = a + 1524;
        c = Math.floor((b - 122.1) / 365.25);
        d = Math.floor(365.25 * c);
        e = Math.floor((b - d) / 30.6001);
        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
        day = b - d - Math.floor(30.6001 * e);
        if (year < 1) {
            year--;
        }
        return { Year: year, Month: month, Day: day };
    }
}
class wnPersianCalendar {
    constructor() {
        this.PERSIAN_EPOCH = 1948320.5;
        this.LeapMonth = 12;
        this.MonthsInYear = 12;
    }
    GetDayOfWeek(Year, Month, Day) {
        return WNmod(Math.floor((this.GetDaysFromBase(Year, Month, Day) + 1.5)), 7);
    }
    GetDayOfYear(Year, Month, Day) {
        return this.GetDaysFromBase(Year, Month, Day) - this.GetDaysFromBase(Year, 1, 1);
    }
    GetDaysInMonth(Year, Month) {
        return this.GetMonthsDays(this.IsLeapYear(Year))[Month - 1];
    }
    GetDaysInYear(Year) { return this.IsLeapYear(Year) ? 366 : 365; }
    GetWeekOfYear(Year, Month, Day) {
        let dayDiff = this.GetDayOfYear(Year, Month, Day) + this.GetDayOfWeek(Year, 1, 1) + 1;
        let weekNr = ((dayDiff - (dayDiff % 7)) / 7) + 1;
        return weekNr;
    }
    IsLeapDay(Year, Month, Day) {
        return this.IsLeapMonth(Year, Month) && Day === 30;
    }
    IsLeapMonth(Year, Month) { return this.IsLeapYear(Year) && Month === this.LeapMonth; }
    IsLeapYear(Year) {
        return ((((((Year - ((Year > 0) ? 474 : 473)) % 2820) + 474) + 38) * 682) % 2816) < 682;
    }
    GetDaysFromBase(Year, Month, Day) {
        let epbase, epyear;
        epbase = Year - ((Year >= 0) ? 474 : 473);
        epyear = 474 + WNmod(epbase, 2820);
        return Day +
            ((Month <= 7) ?
                ((Month - 1) * 31) :
                (((Month - 1) * 30) + 6)) +
            Math.floor(((epyear * 682) - 110) / 2816) +
            (epyear - 1) * 365 +
            Math.floor(epbase / 2820) * 1029983 +
            (this.PERSIAN_EPOCH - 1);
    }
    GetYearMontDayFromDays(jd) {
        let year, month, day, depoch, cycle, cyear, ycycle, aux1, aux2, yday;
        jd = Math.floor(jd) + 0.5;
        depoch = jd - this.GetDaysFromBase(475, 1, 1);
        cycle = Math.floor(depoch / 1029983);
        cyear = WNmod(depoch, 1029983);
        if (cyear == 1029982) {
            ycycle = 2820;
        }
        else {
            aux1 = Math.floor(cyear / 366);
            aux2 = WNmod(cyear, 366);
            ycycle = Math.floor(((2134 * aux1) + (2816 * aux2) + 2815) / 1028522) +
                aux1 + 1;
        }
        year = ycycle + (2820 * cycle) + 474;
        if (year <= 0) {
            year--;
        }
        yday = (jd - this.GetDaysFromBase(year, 1, 1)) + 1;
        month = (yday <= 186) ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
        day = (jd - this.GetDaysFromBase(year, month, 1)) + 1;
        return { Year: year, Month: month, Day: day };
    }
    GetMonthsDays(mLeapYear) {
        return [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, mLeapYear ? 30 : 29, 0];
    }
}
class wnDate {
    constructor(lCultureInfo, lCalendar, lDate) {
        this.GregorianCalnedar = new wnGregorianCalendar();
        this._Year = 0;
        this._Month = 0;
        this._Day = 0;
        this._Hour = 0;
        this._Minute = 0;
        this._Second = 0;
        this._Millisecond = 0;
        this._DayOfWeek = 0;
        this.DateChanged = undefined;
        if (lCultureInfo != undefined && lCultureInfo.Calendar != undefined) {
            let Template = lCultureInfo;
            this.CultureInfo = Template.CultureInfo;
            this.Calendar = Template.Calendar;
            this.SetDateNumber(Template.ToNumber());
        }
        else {
            if (!lCultureInfo)
                lCultureInfo = WNDefaultCultureInfo || new wnCultureInfo_en_US();
            if (!lCalendar)
                lCalendar = WNDefaultCalendar || new wnGregorianCalendar();
            this.CultureInfo = lCultureInfo;
            this.Calendar = lCalendar;
            if (lDate != null)
                this.SetDate(lDate);
        }
    }
    AddDays(value) { this._Day += value; this.FixedDate(); }
    AddHours(value) { this._Hour += value; this.FixedDate(); }
    AddMilliseconds(value) { this._Millisecond += value; this.FixedDate(); }
    AddMinutes(value) { this._Minute += value; this.FixedDate(); }
    AddMonths(value) { this._Month += value; this.FixedDate(); }
    AddSeconds(value) { this._Second += value; this.FixedDate(); }
    AddYears(value) { this._Year += value; this.FixedDate(); }
    AddWeeks(value) { this.AddDays(value * 7); this.FixedDate(); }
    set Year(value) { this._Year = value; this.FixedDate(); }
    get Year() { return this._Year; }
    set Month(value) { this._Month = value; this.FixedDate(); }
    get Month() { return this._Month; }
    set Day(value) { this._Day = value; this.FixedDate(); }
    get Day() { return this._Day; }
    set Hour(value) { this._Hour = value; this.FixedDate(); }
    get Hour() { return this._Hour; }
    set Minute(value) { this._Minute = value; this.FixedDate(); }
    get Minute() { return this._Minute; }
    set Second(value) { this._Second = value; this.FixedDate(); }
    get Second() { return this._Second; }
    set Milliseconds(value) { this._Millisecond = value; this.FixedDate(); }
    get Milliseconds() { return this._Millisecond; }
    get DayOfWeek() { return this._DayOfWeek; }
    get DayOfYear() { return this.Calendar.GetDayOfYear(this._Year, this._Month, this._Day); }
    get DaysInMonth() { return this.Calendar.GetDaysInMonth(this._Year, this._Month); }
    get DaysInYear() { return this.Calendar.GetDaysInYear(this._Year); }
    get IsLeapYear() { return this.Calendar.IsLeapYear(this._Year); }
    get LeapMonth() { return this.Calendar.LeapMonth; }
    get MonthsInYear() { return this.Calendar.MonthsInYear; }
    get IsLeapMonth() { return this.Calendar.IsLeapMonth(this._Year, this._Month); }
    get IsLeapDay() { return this.Calendar.IsLeapDay(this._Year, this._Month, this._Day); }
    get WeekOfYear() { return this.Calendar.GetWeekOfYear(this._Year, this._Month, this._Day); }
    SetDate(date) {
        if (date == undefined || isNaN(date.getTime())) {
            this.SetDateNumber(undefined);
            return;
        }
        let days = this.GregorianCalnedar.GetDaysFromBase(date.getFullYear(), date.getMonth() + 1, date.getDate());
        let ret = this.Calendar.GetYearMontDayFromDays(days);
        this._Year = ret.Year;
        this._Month = ret.Month;
        this._Day = ret.Day;
        this._Hour = date.getHours();
        this._Minute = date.getMinutes();
        this._Second = date.getSeconds();
        this._Millisecond = date.getMilliseconds();
        this._DayOfWeek = this.Calendar.GetDayOfWeek(this._Year, this._Month, this._Day);
        if (this.DateChanged != undefined)
            this.DateChanged();
    }
    SetDateYMD(Year, Month, Day, Hour = 0, Minute = 0, Second = 0, Millisecond = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
        this.FixedDate();
    }
    SetYMD(Year, Month, Day, Hour = 0, Minute = 0, Second = 0, Millisecond = 0) {
        this._Year = Year;
        this._Month = Month;
        this._Day = Day;
        this._Hour = Hour;
        this._Minute = Minute;
        this._Second = Second;
        this._Millisecond = Millisecond;
    }
    SetDateNumber(jd) {
        if (jd === undefined) {
            this._Year = 0;
            this._Month = 0;
            this._Day = 0;
            this._Hour = 0;
            this._Minute = 0;
            this._Second = 0;
            this._Millisecond = 0;
            this._DayOfWeek = 0;
            if (this.DateChanged != undefined)
                this.DateChanged();
            return;
        }
        let ret = this.Calendar.GetYearMontDayFromDays(jd);
        this._Year = ret.Year;
        this._Month = ret.Month;
        this._Day = ret.Day;
        jd -= 0.5;
        let ij = (jd - Math.floor(jd)) * 1000000000;
        this._Hour = Math.floor(ij / 3600000);
        ij = ij % 3600000;
        this._Minute = Math.floor(ij / 60000);
        ij = ij % 60000;
        this._Second = Math.floor(ij / 1000);
        this._Millisecond = Math.round(ij % 1000);
        this._DayOfWeek = this.Calendar.GetDayOfWeek(this._Year, this._Month, this._Day);
        if (this.DateChanged != undefined)
            this.DateChanged();
    }
    SetDateString(s) {
        if (s == undefined) {
            this.SetDateNumber(undefined);
            return;
        }
        let Year = 0;
        let Month = 0;
        let Day = 0;
        let Hour = 0;
        let Minute = 0;
        let Second = 0;
        let Millisecond = 0;
        s = decodeURIComponent(s).trim();
        let d = s.match(/(\d+)/ig);
        if (d != null) {
            if (d.length < 4 && s.indexOf(this.CultureInfo.DateTimeFormat.TimeSeparator) > -1) {
                if (d.length > 0)
                    Hour = parseInt(d[0]);
                if (d.length > 1)
                    Minute = parseInt(d[1]);
                if (d.length > 2)
                    Second = parseInt(d[2]);
            }
            else {
                if (d.length > 2) {
                    Year = parseInt(d[0]);
                    Month = parseInt(d[1]);
                    Day = parseInt(d[2]);
                }
                if (d.length > 4) {
                    Hour = parseInt(d[3]);
                    Minute = parseInt(d[4]);
                }
                if (d.length > 5) {
                    Second = parseInt(d[5]);
                }
                if (d.length > 6) {
                    Millisecond = parseInt(d[6]);
                }
            }
            if (s.indexOf(this.CultureInfo.DateTimeFormat.PMDesignator) > -1 && Hour < 13)
                Hour += 12;
        }
        if (Day > 31 && Year < Day) {
            [Year, Day] = [Day, Year];
        }
        this.SetDateYMD(Year, Month, Day, Hour, Minute, Second, Millisecond);
    }
    Set(value) {
        if (this.Calendar == value.Calendar) {
            this.SetDateYMD(value.Year, value.Month, value.Day, value.Hour, value.Minute, value.Second, value.Milliseconds);
        }
        else
            this.SetDateNumber(value.ToNumber());
    }
    set Value(value) {
        if (value == undefined)
            this.SetDateNumber(undefined);
        else if (typeof (value) == 'number')
            this.SetDateNumber(value);
        else if (typeof (value) == 'object' && value.getDate != undefined)
            this.SetDate(value);
        else if (typeof (value) == 'object' && value.ToNumber != undefined)
            this.Set(value);
        else if (typeof (value) == 'string')
            this.SetDateString(value);
    }
    get Value() {
        return this.ToNumber();
    }
    ToDateTime() {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0)
            return undefined;
        let days = this.Calendar.GetDaysFromBase(this._Year, this._Month, this._Day);
        let ret = this.GregorianCalnedar.GetYearMontDayFromDays(days);
        return new Date(ret.Year, ret.Month - 1, ret.Day, this._Hour, this._Minute, this._Second, this._Millisecond);
    }
    ToNumber() {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0)
            return undefined;
        let ret = this.Calendar.GetDaysFromBase(this._Year, this._Month, this._Day);
        ret += (this._Millisecond + this._Second * 1000 + this.Minute * 60000 + this.Hour * 3600000) / 1000000000;
        return ret;
    }
    ToNumberDate() {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0)
            return undefined;
        return this.Calendar.GetDaysFromBase(this._Year, this._Month, this._Day);
    }
    ToNumberYMD(Year, Month, Day) {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0)
            return undefined;
        let ret = this.Calendar.GetDaysFromBase(Year, Month, Day);
        return ret;
    }
    toString(format = this.CultureInfo.DateTimeFormat.FullDateTimePattern, naitvedigit = WNDefaultNaitveDigit) {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0)
            return '';
        if (format == 'shortdatetime')
            format = this.CultureInfo.DateTimeFormat.ShortDatePattern + ' ' + this.CultureInfo.DateTimeFormat.ShortTimePattern;
        else if (format == 'shortdate')
            format = this.CultureInfo.DateTimeFormat.ShortDatePattern;
        else if (format == 'shorttime')
            format = this.CultureInfo.DateTimeFormat.ShortTimePattern;
        else if (format == 'longdatettime' || format == 'date' || format == '')
            format = this.CultureInfo.DateTimeFormat.LongDatePattern + ' ' + this.CultureInfo.DateTimeFormat.LongTimePattern;
        else if (format == 'longdate')
            format = this.CultureInfo.DateTimeFormat.LongDatePattern;
        else if (format == 'longtime')
            format = this.CultureInfo.DateTimeFormat.LongTimePattern;
        let ret = format;
        ret = ret.replace(/yyyy/g, '{u1}');
        ret = ret.replace(/yy/g, '{u2}');
        ret = ret.replace(/y/g, '{u1}');
        ret = ret.replace(/u/g, 'y');
        ret = ret.replace(/MMMM/g, '{u4}');
        ret = ret.replace(/MMM/g, '{u3}');
        ret = ret.replace(/MM/g, '{u2}');
        ret = ret.replace(/M/g, '{u1}');
        ret = ret.replace(/u/g, 'M');
        ret = ret.replace(/dddd/g, '{u4}');
        ret = ret.replace(/ddd/g, '{u3}');
        ret = ret.replace(/dd/g, '{u2}');
        ret = ret.replace(/d/g, '{u1}');
        ret = ret.replace(/u/g, 'd');
        ret = ret.replace(/hh/g, '{u2}');
        ret = ret.replace(/h/g, '{u1}');
        ret = ret.replace(/u/g, 'h');
        ret = ret.replace(/HH/g, '{u2}');
        ret = ret.replace(/H/g, '{u1}');
        ret = ret.replace(/u/g, 'H');
        ret = ret.replace(/mm/g, '{u2}');
        ret = ret.replace(/m/g, '{u1}');
        ret = ret.replace(/u/g, 'm');
        ret = ret.replace(/ss/g, '{u2}');
        ret = ret.replace(/s/g, '{u1}');
        ret = ret.replace(/u/g, 's');
        ret = ret.replace(/f/g, '{f}');
        ret = ret.replace(/tt/g, '{tt}');
        ret = ret.replace(/{y2}/g, (this._Year % 100).toString());
        ret = ret.replace(/{y1}/g, this._Year.toString());
        ret = ret.replace(/{M4}/g, (this.CultureInfo.DateTimeFormat.MonthNames[this.Calendar.constructor.name] || this.CultureInfo.DateTimeFormat.MonthNames[0])[this._Month - 1]);
        ret = ret.replace(/{M3}/g, (this.CultureInfo.DateTimeFormat.AbbreviatedMonthNames[this.Calendar.constructor.name] || this.CultureInfo.DateTimeFormat.AbbreviatedMonthNames[0])[this._Month - 1]);
        if (this._Month < 10)
            ret = ret.replace(/{M2}/g, '0' + this._Month.toString());
        else
            ret = ret.replace(/{M2}/g, this._Month.toString());
        ret = ret.replace(/{M1}/g, this._Month.toString());
        ret = ret.replace(/{d4}/g, this.CultureInfo.DateTimeFormat.DayNames[this._DayOfWeek]);
        ret = ret.replace(/{d3}/g, this.CultureInfo.DateTimeFormat.AbbreviatedDayNames[this._DayOfWeek]);
        if (this._Day < 10)
            ret = ret.replace(/{d2}/g, '0' + this._Day);
        else
            ret = ret.replace(/{d2}/g, this._Day.toString());
        ret = ret.replace(/{d1}/g, this._Day.toString());
        if (this._Hour % 12 < 10)
            ret = ret.replace(/{h2}/g, '0' + this._Hour % 12);
        else
            ret = ret.replace(/{h2}/g, (this._Hour % 12).toString());
        ret = ret.replace(/{h1}/g, (this._Hour % 12).toString());
        if (this._Hour < 10)
            ret = ret.replace(/{H2}/g, '0' + this._Hour.toString());
        else
            ret = ret.replace(/{H2}/g, this._Hour.toString());
        ret = ret.replace(/{H1}/g, this._Hour.toString());
        if (this._Minute < 10)
            ret = ret.replace(/{m2}/g, '0' + this._Minute.toString());
        else
            ret = ret.replace(/{m2}/g, this._Minute.toString());
        ret = ret.replace(/{m1}/g, this._Minute.toString());
        if (this._Second < 10)
            ret = ret.replace(/{s2}/g, '0' + this._Second.toString());
        else
            ret = ret.replace(/{s2}/g, this._Second.toString());
        ret = ret.replace(/{s1}/g, this._Second.toString());
        ret = ret.replace(/{f}/g, this._Millisecond.toString());
        if (this._Hour > 11)
            ret = ret.replace(/{tt}/g, this.CultureInfo.DateTimeFormat.PMDesignator);
        else
            ret = ret.replace(/{tt}/g, this.CultureInfo.DateTimeFormat.AMDesignator);
        ret = WNNaitveDigit(ret, this.CultureInfo, naitvedigit);
        return ret;
    }
    toLongDateString(naitvedigit = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.LongDatePattern, naitvedigit); }
    toShortDateString(naitvedigit = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.ShortDatePattern, naitvedigit); }
    toLongTimeString(naitvedigit = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.LongTimePattern, naitvedigit); }
    toShortTimeString(naitvedigit = WNDefaultNaitveDigit) { return this.toString(this.CultureInfo.DateTimeFormat.ShortTimePattern, naitvedigit); }
    Convert(value, format = this.CultureInfo.DateTimeFormat.FullDateTimePattern, naitvedigit = WNDefaultNaitveDigit) { this.Value = value; return this.toString(format, naitvedigit); }
    FixedDate() {
        if (this.Year == 0 && this.Month == 0 && this.Day == 0 && this.Hour == 0 && this.Minute == 0 && this.Second == 0 && this.Milliseconds == 0)
            return;
        [this._Millisecond, this._Second] = this.LimitToRange(0, 999, this._Millisecond, this._Second);
        [this._Second, this._Minute] = this.LimitToRange(0, 59, this._Second, this._Minute);
        [this._Minute, this._Hour] = this.LimitToRange(0, 59, this._Minute, this._Hour);
        [this._Hour, this._Day] = this.LimitToRange(0, 23, this._Hour, this._Day);
        for (var i = 0; i < 2; i++) {
            [this._Month, this._Year] = this.LimitToRange(1, this.Calendar.MonthsInYear, this._Month, this._Year);
            [this._Day, this._Month] = this.LimitToRange(1, this.Calendar.GetDaysInMonth(this._Year, this._Month), this._Day, this._Month);
        }
        this._DayOfWeek = this.Calendar.GetDayOfWeek(this._Year, this._Month, this._Day);
        if (this.DateChanged != undefined)
            this.DateChanged();
    }
    LimitToRange(Min, Max, Value, NextValue) {
        let Range = Max - Min + 1;
        let mod = ((Value - Min) % Range) + Min;
        if (mod < Min)
            mod += Max;
        let div = (Value - mod) / Range;
        return [mod, NextValue + div];
    }
    LessThan(rhs) {
        return this.ToNumberDate() < rhs.ToNumberDate();
    }
    LessThanEqual(rhs) {
        return this.ToNumberDate() <= rhs.ToNumberDate();
    }
    GreaterThan(rhs) {
        return this.ToNumberDate() > rhs.ToNumberDate();
    }
    GreaterThanEqual(rhs) {
        return this.ToNumberDate() >= rhs.ToNumberDate();
    }
    Equal(rhs) {
        return this.ToNumberDate() === rhs.ToNumberDate();
    }
    NotEqual(rhs) {
        return this.ToNumberDate() !== rhs.ToNumberDate();
    }
    LessThanExact(rhs) {
        return this.ToNumber() < rhs.ToNumber();
    }
    LessThanEqualExact(rhs) {
        return this.ToNumber() <= rhs.ToNumber();
    }
    GreaterThanExact(rhs) {
        return this.ToNumber() > rhs.ToNumber();
    }
    GreaterThanEqualExact(rhs) {
        return this.ToNumber() >= rhs.ToNumber();
    }
    EqualExact(rhs) {
        return this.ToNumber() === rhs.ToNumber();
    }
    NotEqualExact(rhs) {
        return this.ToNumber() !== rhs.ToNumber();
    }
}
WNlang['en'] = {
    'common': {
        'browsererror': 'Please use a new browser with proper w3 support. Chrome version 89 and above or FireFox version 55 and above.',
        'close': 'Close',
        'ok': 'Ok',
        'cancel': 'Cancel',
    },
    "inputdatettime": {
        "previousmonth": "Previous Month",
        "nextmonth": "Next Month",
        "monthyear": "Select Month Year",
        "today": "Today"
    },
    "editor": {
        "url": "Addres",
        "target": "Target",
        "title": "Title",
        "insert": "Insert",
        "alt": "Alt",
        "width": "Width",
        "height": "Height",
        "borderwidth": "Border Width",
        "borderstyle": "Border Style",
        "class": "Class",
        "type": "Type",
        "controls": "Controls",
        "mute": "Muted",
        "autoplay": "Auto Play",
        "medianotsupport": "Your browser does not support the media element."
    },
    "filelist": {
        "refresh": "Refresh",
        "newfolder": "New folder",
        "rename": "Rename",
        "delete": "Delete",
        "copy": "Copy",
        "cut": "Cut",
        "paste": "Paste",
        "upload": "Upload file",
        "download": "Download file",
        "compress": "Compress files",
        "decompress": "Extract files",
        "root": "root",
        "filename": "File name",
        "ext": "Ext",
        "size": "Size",
        "date": "Date",
        "name": "Name",
        "errorcommand": "While execute command, i received an error.",
        "foldercreated": "Folder created",
        "renamesuccess": "Rename Successed",
        "deletefiles": "Do you want to delete selected files?",
        "files": "file(s)",
        "deletefolder": "Do you want to delete selected folder?",
        "renamed": "Renamed successed.",
        "deleted": "Deleted successed.",
        "clipboarded": "Data set in clipboard.",
        "pasted": "Files or folder pasted.",
        "drophere": "Drop files here.",
        "uploaded": "Files uploaded.",
        "compressed": "Files are compressed.",
        "decompressmessage": "Do you want to decompressed all files and over write them?",
        "decompressed": "Files are decompressed.",
    }
};
WNlang['fa'] = {
    'common': {
        'browsererror': 'لطفا از یک مرورگر جدید با قابلیت پشتیبانی درست از w3 استفاده کنید. Chrome نسخه 89 به بالا یا FireFox نسخه 55 به بالا.',
        'close': 'بستن',
        'ok': 'تایید',
        'cancel': 'لغو',
    },
    "inputdatettime": {
        "previousmonth": "ماه قبل",
        "nextmonth": "ماه بعد",
        "monthyear": "انتخاب سال و ماه",
        "today": "امروز"
    },
    "cdd": {
        "wnPersianCalendar": [
            { month: 1, day: 1, holiday: true, text: 'آغاز نوروز' },
            { month: 1, day: 2, holiday: true, text: 'عید نوروز - هجوم مأموران ستم‌شاهی پهلوی به مدرسه‌ی فیضیه‌ی قم (۱۳۴۲ ه‍.ش) - آغاز عملیات فتح‌المبین (۱۳۶۱ ه‍.ش)' },
            { month: 1, day: 3, holiday: true, text: 'عید نوروز' },
            { month: 1, day: 4, holiday: true, text: 'عید نوروز' },
            { month: 1, day: 6, holiday: false, text: 'ولادت زرتشت' },
            { month: 1, day: 7, holiday: false, text: 'روز هنرهای نمایشی' },
            { month: 1, day: 12, holiday: true, text: 'روز جمهوری اسلامی' },
            { month: 1, day: 13, holiday: true, text: 'سیزده نوروز - روز طبیعت' },
            { month: 1, day: 15, holiday: false, text: 'روز ذخایر ژنتیکی و زیستی' },
            { month: 1, day: 18, holiday: false, text: 'روز سلامتی' },
            { month: 1, day: 19, holiday: false, text: 'شهادت آیت‌اللّه سیدمحمدباقر صدر و خواهر ایشان بنت‌الهدی به دست حکومت بعث عراق (۱۳۵۹ ه‍.ش)' },
            { month: 1, day: 20, holiday: false, text: 'روز ملّی فنّاوری هسته‌ای - روز هنر انقلاب اسلامی (سالروز شهادت سیدمرتضی آوینی) (۱۳۷۲ ه‍.ش)' },
            { month: 1, day: 21, holiday: false, text: 'شهادت امیر سپهبد علی صیاد شیرازی (۱۳۷۸ ه‍.ش) - سالروز افتتاح حساب شماره‌ی ۱۰۰ به فرمان امام خمینی (رحمة‌اللّه علیه) و تأسیس بنیاد مسکن انقلاب اسلامی (۱۳۵۸ ه‍.ش)' },
            { month: 1, day: 25, holiday: false, text: 'روز بزرگداشت عطّار نیشابوری ‌' },
            { month: 1, day: 29, holiday: false, text: 'روز ارتش جمهوری اسلامی و نیروی زمینی' },
            { month: 2, day: 1, holiday: false, text: 'روز بزرگداشت سعدی' },
            { month: 2, day: 2, holiday: false, text: 'تأسیس سپاه پاسداران انقلاب اسلامی (۱۳۵۸ ه‍.ش) - سالروز اعلام انقلاب فرهنگی (۱۳۵۹ ه‍.ش) - روز زمین پاک' },
            { month: 2, day: 3, holiday: false, text: 'روز بزرگداشت شیخ بهایی - روز معماری - سالروز شهادت امیر سپهبد قرنی (۱۳۵۸ ه‍.ش)' },
            { month: 2, day: 5, holiday: false, text: 'شکست حمله نظامی آمریکا به ایران در طبس (۱۳۵۹ ه‍.ش)' },
            { month: 2, day: 7, holiday: false, text: 'روز ایمنی حمل و نقل' },
            { month: 2, day: 9, holiday: false, text: 'روز شورا' },
            { month: 2, day: 10, holiday: false, text: 'روز ملی خلیج فارس - آغاز عملیات بیت المقدس (۱۳۶۱ ه‍.ش)' },
            { month: 2, day: 12, holiday: false, text: 'شهادت استاد مرتضی مطهری و روز معلم (۱۳۵۸ ه‍.ش)' },
            { month: 2, day: 15, holiday: false, text: 'روز بزرگداشت شیخ صدوق' },
            { month: 2, day: 18, holiday: false, text: 'روز بیماری‌های خاص و صعب‌العلاج' },
            { month: 2, day: 19, holiday: false, text: 'روز بزرگداشت شیخ کلینی - روز اسناد ملی و میراث مکتوب' },
            { month: 2, day: 24, holiday: false, text: 'لغو امتیاز تنباکو به فتوای آیت‌اللّه میرزا حسن شیرازی (۱۲۷۰ ه‍.ش)' },
            { month: 2, day: 25, holiday: false, text: 'روز پاسداشت زبان فارسی و بزرگداشت حکیم ابوالقاسم فردوسی' },
            { month: 2, day: 27, holiday: false, text: 'روز ارتباطات و روابط عمومی' },
            { month: 2, day: 28, holiday: false, text: 'روز بزرگداشت حکیم عمر خیام' },
            { month: 2, day: 30, holiday: false, text: 'روز ملی جمعیت' },
            { month: 2, day: 31, holiday: false, text: 'روز اهدای عضو، اهدای زندگی' },
            { month: 3, day: 1, holiday: false, text: 'روز بهره‌وری و بهینه‌سازی مصرف - روز بزرگداشت ملّاصدرا (صدرالمتألهین)' },
            { month: 3, day: 3, holiday: false, text: 'فتح خرمشهر در عملیات بیت‌المقدس و روز مقاومت، ایثار و پیروزی (۱۳۶۱ ه‍.ش)' },
            { month: 3, day: 4, holiday: false, text: 'روز دزفول ‌- روز مقاومت و پایداری' },
            { month: 3, day: 5, holiday: false, text: 'روز نسیم مهر (روز حمایت از خانواده زندانیان)' },
            { month: 3, day: 7, holiday: false, text: 'افتتاح اولین دوره‌ی مجلس شورای اسلامی (۱۳۵۹ ه‍.ش)' },
            { month: 3, day: 14, holiday: true, text: 'رحلت حضرت امام خمینی (رحمة‌اللّه علیه) رهبر کبیر انقلاب و بنیان‌گذار جمهوری اسلامی ایران (۱۳۶۸ ه‍.ش) - انتخاب حضرت آیت‌اللّه امام خامنه‌ای به رهبری (۱۳۶۸ ه‍.ش)' },
            { month: 3, day: 15, holiday: true, text: 'قیام خونین ۱۵ خرداد (۱۳۴۲ ه‍.ش) - زندانی شدن حضرت امام خمینی (رحمة‌اللّه علیه) به دست مأموران ستم‌شاهی پهلوی (۱۳۴۲ ه‍.ش)' },
            { month: 3, day: 20, holiday: false, text: 'روز صنایع دستی - شهادت آیت‌اللّه سعیدی به دست مأموران ستم‌شاهی پهلوی (۱۳۴۹ ه‍.ش)' },
            { month: 3, day: 26, holiday: false, text: 'شهادت سربازان دلیر اسلام :بخارایی، امانی، صفار هرندی و نیک‌نژاد (۱۳۴۴ ه‍.ش)' },
            { month: 3, day: 27, holiday: false, text: 'روز جهاد کشاورزی (تشکیل جهاد سازندگی به فرمان حضرت امام خمینی رحمة‌اللّه علیه) (۱۳۵۸ ه‍.ش)' },
            { month: 3, day: 29, holiday: false, text: 'درگذشت دکتر علی شریعتی (۱۳۵۶ ه‍.ش)' },
            { month: 3, day: 30, holiday: false, text: 'شهادت زائران حرم رضوی علیه‌السلام به دست ایادی آمریکا در روز عاشورا (۱۳۷۳ ه‍.ش)' },
            { month: 3, day: 31, holiday: false, text: 'شهادت دکتر مصطفی چمران (۱۳۶۰ ه‍.ش) - روز بسیج استادان' },
            { month: 4, day: 1, holiday: false, text: 'روز تبلیغ و اطلاع‌رسانی دینی (سالروز صدور فرمان امام خمینی رحمة‌اللّه علیه مبنی بر تأسیس سازمان تبلیغات اسلامی) (۱۳۶۰ ه‍.ش) - روز اصناف' },
            { month: 4, day: 7, holiday: false, text: 'شهادت مظلومانه‌ی آیت‌اللّه دکتر بهشتی و ۷۲ تن از یاران امام با انفجار بمب به دست منافقان در دفتر مرکزی حزب جمهوری اسلامی (۱۳۶۰ ه‍.ش) - روز قوه‌ی قضائیه - سالروز بمباران شیمیایی شهر سردشت (۱۳۶۶ ه‍.ش)' },
            { month: 4, day: 8, holiday: false, text: 'روز مبارزه با سلاح‌های شیمیایی و میکروبی' },
            { month: 4, day: 10, holiday: false, text: 'روز صنعت و معدن - روز آزادسازی شهر مهران - روز بزرگداشت صائب تبریزی' },
            { month: 4, day: 11, holiday: false, text: 'شهادت آیت‌اللّه صدوقی چهارمین شهید محراب به دست منافقان (۱۳۶۱ ه‍.ش)' },
            { month: 4, day: 12, holiday: false, text: 'حمله‌ی ددمنشانه‌ی ناوگان آمریکای جنایتکار به هواپیمای مسافربری جمهوری اسلامی ایران (۱۳۶۷ ه‍.ش) - روز افشای حقوق بشر آمریکایی - روز بزرگداشت علامه امینی (۱۳۴۹ ه‍.ش)' },
            { month: 4, day: 14, holiday: false, text: 'روز قلم - روز شهرداری و دهیاری' },
            { month: 4, day: 16, holiday: false, text: 'روز مالیات' },
            { month: 4, day: 18, holiday: false, text: 'روز ادبیات کودکان و نوجوانان - کشف توطئه‌ی آمریکایی در پایگاه هوایی شهید نوژه (کودتای نافرجام نقاب) (۱۳۵۹ ه‍.ش)' },
            { month: 4, day: 21, holiday: false, text: 'روز عفاف و حجاب - حمله به مسجد گوهرشاد و کشتار مردم به دست رضاخان (۱۳۱۴ ه‍.ش)' },
            { month: 4, day: 23, holiday: false, text: 'سالروز اشتباه برجام، مایه‌ی عبرت آیندگان (۱۳۹۴ ه‍.ش) - گشایش نخستین مجلس خبرگان رهبری (۱۳۶۲ ه‍.ش)' },
            { month: 4, day: 25, holiday: false, text: 'روز بهزیستی و تأمین اجتماعی' },
            { month: 4, day: 26, holiday: false, text: 'سالروز تأسیس نهاد شورای نگهبان (۱۳۵۹ ه‍.ش)' },
            { month: 4, day: 27, holiday: false, text: 'اعلام پذیرش قطعنامه‌ی ۵۹۸ شورای امنیت از سوی ایران (۱۳۶۷ ه‍.ش)' },
            { month: 4, day: 30, holiday: false, text: 'روز بزرگداشت آیت‌اللّه سید ابوالقاسم کاشانی' },
            { month: 5, day: 4, holiday: false, text: 'روز بزرگداشت شیخ صفی‌الدین اردبیلی' },
            { month: 5, day: 5, holiday: false, text: 'سالروز عملیات افتخار‌آفرین مرصاد (۱۳۶۷ ه‍.ش)' },
            { month: 5, day: 6, holiday: false, text: 'روز کارآفرینی و آموزش‌های فنّی‌و‌حرفه‌ای' },
            { month: 5, day: 8, holiday: false, text: 'روز بزرگداشت شیخ شهاب‌الدین سهروردی (شیخ اشراق)' },
            { month: 5, day: 9, holiday: false, text: 'روز اهدای خون' },
            { month: 5, day: 11, holiday: false, text: 'شهادت آیت‌اللّه شیخ فضل‌اللّه نوری (۱۲۸۸ ه‍.ش)' },
            { month: 5, day: 14, holiday: false, text: 'صدور فرمان مشروطیت (۱۲۸۵ ه‍.ش) ‌- روز حقوق بشر اسلامی و کرامت انسانی' },
            { month: 5, day: 15, holiday: false, text: 'انفجار بمب اتمی آمریکا در هیروشیما با بیش از ۱۶۰هزار کشته و مجروح در سال ۱۹۴۵ میلادی - سالروز شهادت امیر سرلشکر خلبان عباس بابایی (۱۳۶۶ ه‍.ش)' },
            { month: 5, day: 16, holiday: false, text: 'تشکیل جهاد دانشگاهی (۱۳۵۹ ه‍.ش)' },
            { month: 5, day: 17, holiday: false, text: 'روز خبرنگار' },
            { month: 5, day: 18, holiday: false, text: 'روز بزرگداشت شهدای مدافع حرم' },
            { month: 5, day: 21, holiday: false, text: 'روز حمایت از صنایع کوچک' },
            { month: 5, day: 22, holiday: false, text: 'روز تشکّل‌ها و مشارکت‌های اجتماعی' },
            { month: 5, day: 23, holiday: false, text: 'روز مقاومت اسلامی' },
            { month: 5, day: 26, holiday: false, text: 'آغاز بازگشت آزادگان به میهن اسلامی (۱۳۶۹ ه‍.ش)' },
            { month: 5, day: 28, holiday: false, text: 'کودتای آمریکا برای بازگرداندن شاه (۱۳۳۲ ه‍.ش) - گشایش مجلس خبرگان برای بررسی نهایی قانون اساسی جمهوری اسلامی ایران (۱۳۵۸ ه‍.ش)' },
            { month: 5, day: 30, holiday: false, text: 'روز بزرگداشت علامه مجلسی' },
            { month: 5, day: 31, holiday: false, text: 'روز صنعت دفاعی' },
            { month: 6, day: 1, holiday: false, text: 'روز بزرگداشت ابوعلی سینا - روز پزشک' },
            { month: 6, day: 2, holiday: false, text: 'آغاز هفته‌ی دولت - شهادت سید‌علی اندرزگو (در روز ۱۹ ماه مبارک رمضان) (۱۳۵۷ ه‍.ش)' },
            { month: 6, day: 3, holiday: false, text: 'اِشغال ایران توسّط متّفقین و فرار رضاخان (۱۳۲۰ ه‍.ش)' },
            { month: 6, day: 4, holiday: false, text: 'روز کارمند' },
            { month: 6, day: 5, holiday: false, text: 'روز بزرگداشت محمّدبن زکریای رازی ‌ - روز داروسازی - روز کشتی' },
            { month: 6, day: 8, holiday: false, text: 'روز مبارزه با تروریسم (انفجار دفتر نخست‌وزیری به دست منافقان و شهادت مظلومانه‌ی شهیدان رجایی و باهنر) (۱۳۶۰ ه‍.ش)' },
            { month: 6, day: 10, holiday: false, text: 'روز بانکداری اسلامی (سالروز تصویب قانون عملیات بانکی بدون ربا) (۱۳۶۲ ه‍.ش) - روز تشکیل قرارگاه پدافند هوایی حضرت خاتم‌الانبیا صلی اللّه علیه و آله (۱۳۷۱ ه‍.ش)' },
            { month: 6, day: 11, holiday: false, text: 'روز صنعت چاپ' },
            { month: 6, day: 12, holiday: false, text: 'روز مبارزه بااستعمار انگلیس (سالروز شهادت رئیسعلی دلواری - ۱۲۹۴ هـ.ش) - روز بهوَرز' },
            { month: 6, day: 13, holiday: false, text: 'روز تعاون - روز بزرگداشت ابوریحان بیرونی - روز مردم‌شناسی' },
            { month: 6, day: 14, holiday: false, text: 'شهادت آیت‌اللّه قدّوسی و سرتیپ وحید دستجردی (۱۳۶۰ ه‍.ش)' },
            { month: 6, day: 17, holiday: false, text: 'قیام ۱۷ شهریور و کشتار جمعی از مردم به‌دست مأموران ستم‌شاهی پهلوی (۱۳۵۷ ه‍.ش)' },
            { month: 6, day: 19, holiday: false, text: 'وفات آیت‌اللّه سیدمحمود طالقانی اوّلین امام جمعه‌ی تهران (۱۳۵۸ ه‍.ش)' },
            { month: 6, day: 20, holiday: false, text: 'شهادت دومین شهید محراب آیت‌اللّه مدنی به دست منافقان (۱۳۶۰ ه‍.ش)' },
            { month: 6, day: 21, holiday: false, text: 'روز سینما' },
            { month: 6, day: 27, holiday: false, text: 'روز شعر و ادب فارسی - روز بزرگداشت استاد سید‌محمّد‌حسین شهریار' },
            { month: 6, day: 31, holiday: false, text: 'آغاز جنگ تحمیلی (۱۳۵۹ ه‍.ش) ‌ - آغاز هفته‌ی دفاع مقدّس' },
            { month: 7, day: 5, holiday: false, text: 'شکست حصر آبادان در عملیات ثامن‌الائمه علیه‌السلام (۱۳۶۰ ه‍.ش)' },
            { month: 7, day: 7, holiday: false, text: 'روز بزرگداشت فرماندهان شهید دفاع مقدّس - شهادت سرداران اسلام: فلاحی، فکوری، نامجو، کلاهدوز و جهان‌آرا (۱۳۶۰ ه‍.ش) - روز آتش‌نشانی و ایمنی - روز بزرگداشت شمس' },
            { month: 7, day: 8, holiday: false, text: 'روز بزرگداشت مولوی' },
            { month: 7, day: 9, holiday: false, text: 'روز همبستگی و همدردی با کودکان و نوجوانان فلسطینی' },
            { month: 7, day: 13, holiday: false, text: 'هجرت حضرت امام خمینی (رحمة‌اللّه علیه) از عراق به پاریس (۱۳۵۷ ه‍.ش) - روز نیروی انتظامی' },
            { month: 7, day: 14, holiday: false, text: 'روز دامپزشکی' },
            { month: 7, day: 15, holiday: false, text: 'روز روستا و عشایر' },
            { month: 7, day: 20, holiday: false, text: 'روز بزرگداشت حافظ' },
            { month: 7, day: 23, holiday: false, text: 'شهادت پنجمین شهید محراب آیت‌اللّه اشرفی اصفهانی به دست منافقان (۱۳۶۱ ه‍.ش)' },
            { month: 7, day: 24, holiday: false, text: 'روز ملی پارالمپیک - روز پیوند اولیا و مربیان - سالروز واقعه‌ی به‌آتش‌کشیدن مسجد جامع شهر کرمان به دست دژخیمان حکومت پهلوی (۱۳۵۷ ه‍.ش)' },
            { month: 7, day: 26, holiday: false, text: 'روز تربیت‌بدنی و ورزش' },
            { month: 7, day: 29, holiday: false, text: 'روز صادرات' },
            { month: 8, day: 1, holiday: false, text: 'شهادت مظلومانه‌ی آیت‌اللّه حاج سید مصطفی خمینی (۱۳۵۶ ه‍.ش) - روز آمار و برنامه‌ریزی' },
            { month: 8, day: 4, holiday: false, text: 'اعتراض و افشاگری حضرت امام خمینی (ره) علیه پذیرش کاپیتولاسیون (۱۳۴۳ ه‍.ش)' },
            { month: 8, day: 8, holiday: false, text: 'شهادت محمّدحسین فهمیده (بسیجی ۱۳ ساله) (۱۳۵۹ ه‍.ش) ‌- روز نوجوان و بسیج دانش‌آموزی - روز پدافند غیرعامل' },
            { month: 8, day: 10, holiday: false, text: 'شهادت آیت‌اللّه قاضی طباطبایی، اوّلین شهید محراب به دست منافقان (۱۳۵۸ ه‍.ش)' },
            { month: 8, day: 13, holiday: false, text: 'تسخیر لانه‌ی جاسوسی آمریکا به دست دانشجویان پیرو خط امام (۱۳۵۸ ه‍.ش) - روز ملی مبارزه با استکبار جهانی - روز دانش‌آموز - تبعید حضرت امام خمینی (رحمة‌اللّه علیه) از ایران به ترکیه (۱۳۴۳ ه‍.ش)' },
            { month: 8, day: 14, holiday: false, text: 'روز فرهنگ عمومی' },
            { month: 8, day: 18, holiday: false, text: 'روز کیفیت' },
            { month: 8, day: 24, holiday: false, text: 'روز کتاب، کتاب‌خوانی و کتابدار - روز بزرگداشت آیت‌اللّه علامه سیدمحمّدحسین طباطبایی (۱۳۶۰ ه‍.ش)' },
            { month: 8, day: 26, holiday: false, text: 'سالروز آزادسازی سوسنگرد (۱۳۵۹ ه‍.ش)' },
            { month: 9, day: 5, holiday: false, text: 'روزبسیج مستضعفان (تشکیل بسیج مستضعفان به فرمان حضرت امام خمینی رحمة‌اللّه علیه) (۱۳۵۸ ه‍.ش) - سالروز قیام مردم گرگان (۱۳۵۷ ه‍.ش)' },
            { month: 9, day: 7, holiday: false, text: 'روز نیروی دریایی' },
            { month: 9, day: 9, holiday: false, text: 'روز بزرگداشت شیخ مفید' },
            { month: 9, day: 10, holiday: false, text: 'شهادت آیت‌اللّه سید‌حسن مدرّس و روز مجلس (۱۳۱۶ ه‍.ش)' },
            { month: 9, day: 11, holiday: false, text: 'شهادت میرزا‌کوچک‌خان جنگلی (۱۳۰۰ ه‍.ش)' },
            { month: 9, day: 12, holiday: false, text: 'روز قانون اساسی جمهوری اسلامی ایران (تصویب قانون اساسی جمهوری اسلامی ایران) (۱۳۵۸ ه‍.ش)' },
            { month: 9, day: 13, holiday: false, text: 'روز بیمه' },
            { month: 9, day: 16, holiday: false, text: 'روز دانشجو' },
            { month: 9, day: 18, holiday: false, text: 'معرّفی عراق به عنوان مسئول و آغازگر جنگ از سوی سازمان ملل (۱۳۷۰ ه‍.ش)' },
            { month: 9, day: 19, holiday: false, text: 'تشکیل شورای عالی انقلاب فرهنگی به فرمان حضرت امام خمینی (رحمة‌اللّه علیه) (۱۳۶۳ ه‍.ش)' },
            { month: 9, day: 20, holiday: false, text: 'شهادت آیت‌اللّه دستغیب، سومین شهید محراب به دست منافقان (۱۳۶۰ ه‍.ش)' },
            { month: 9, day: 25, holiday: false, text: 'روز پژوهش' },
            { month: 9, day: 26, holiday: false, text: 'روز حمل‌و‌نقل و رانندگان' },
            { month: 9, day: 27, holiday: false, text: 'شهادت آیت‌اللّه دکتر محمّد مفتّح (۱۳۵۸ ه‍.ش) - روز وحدت حوزه و دانشگاه' },
            { month: 9, day: 29, holiday: false, text: 'روز تجلیل از شهید تندگویان' },
            { month: 9, day: 30, holiday: false, text: 'شب یلدا' },
            { month: 10, day: 3, holiday: false, text: 'روز ثبت‌احوال' },
            { month: 10, day: 5, holiday: false, text: 'روز ایمنی در برابر زلزله و کاهش اثرات بلایای طبیعی' },
            { month: 10, day: 7, holiday: false, text: 'سالروز تشکیل نهضت سوادآموزی به فرمان حضرت امام خمینی (رحمة‌اللّه علیه) (۱۳۵۸ ه‍.ش) - شهادت آیت‌اللّه حسین غفّاری به دست مأموران ستم‌شاهی پهلوی (۱۳۵۳ ه‍.ش)' },
            { month: 10, day: 8, holiday: false, text: 'روز صنعت پتروشیمی' },
            { month: 10, day: 9, holiday: false, text: 'روز بصیرت و میثاق امّت با ولایت (سالروز حماسه‌ی ۹ دی ۸۸)' },
            { month: 10, day: 13, holiday: false, text: 'روز جهانی مقاومت - شهادت الگوی اخلاص و عمل، سردار سپهبد حاج قاسم سلیمانی و هم‌رزمان ایشان به دست استکبار جهانی (۱۳۹۸ ه‍.ش) - ابلاغ پیام تاریخی حضرت امام خمینی (ره) به گورباچف رهبر شوروی سابق (۱۳۶۷ ه‍.ش)' },
            { month: 10, day: 17, holiday: false, text: 'اجرای طرح استعماری حذف حجاب (کشف حجاب) به دست رضاخان دیکتاتور (۱۳۱۴ ه‍.ش) - روز بزرگداشت خواجوی کرمانی' },
            { month: 10, day: 19, holiday: false, text: 'قیام خونین مردم قم (۱۳۵۶ ه‍.ش)' },
            { month: 10, day: 20, holiday: false, text: 'شهادت میرزا تقی خان امیرکبیر (۱۲۳۰ ه‍.ش)' },
            { month: 10, day: 22, holiday: false, text: 'تشکیل شورای انقلاب به فرمان حضرت امام خمینی (رحمة‌اللّه علیه) (۱۳۵۷ ه‍.ش)' },
            { month: 10, day: 26, holiday: false, text: 'فرار شاه معدوم (۱۳۵۷ ه‍.ش)' },
            { month: 10, day: 27, holiday: false, text: 'شهادت شهیدان: نواب صفوی، طهماسبی، برادران واحدی و ذوالقدر از فدائیان اسلام (۱۳۳۴ ه‍.ش)' },
            { month: 10, day: 29, holiday: false, text: 'روز غزه' },
            { month: 11, day: 5, holiday: false, text: 'انتخابات اولین دوره ریاست جمهوری' },
            { month: 11, day: 6, holiday: false, text: 'سالروز حماسه‌ی مردم آمل' },
            { month: 11, day: 12, holiday: false, text: 'سالروز بازگشت حضرت امام خمینی (رحمة‌اللّه علیه) به ایران و آغاز دهه‌ی مبارک فجر انقلاب اسلامی' },
            { month: 11, day: 14, holiday: false, text: 'روز فنّاوری فضایی' },
            { month: 11, day: 19, holiday: false, text: 'روز نیروی هوایی' },
            { month: 11, day: 21, holiday: false, text: 'شکسته‌شدن حکومت‌نظامی به فرمان امام خمینی (رحمة‌اللّه علیه) (۱۳۵۷ ه‍.ش)' },
            { month: 11, day: 22, holiday: true, text: 'پیروزی انقلاب اسلامی ایران و سقوط نظام شاهنشاهی (۱۳۵۷ ه‍.ش)' },
            { month: 11, day: 25, holiday: false, text: 'صدور حکم تاریخی حضرت امام خمینی (رحمة‌اللّه علیه) مبنی بر ارتداد سلمان‌رشدی نویسنده‌ی خائن کتاب آیات شیطانی (۱۳۶۷ ه‍.ش)' },
            { month: 11, day: 29, holiday: false, text: 'قیام مردم تبریز به مناسبت چهلمین روز شهادت شهدای قم (۱۳۵۶ ه‍.ش) - روز اقتصاد مقاومتی و کارآفرینی' },
            { month: 12, day: 1, holiday: false, text: 'انتخابات اولین دوره فقهای شورای نگهبان' },
            { month: 12, day: 3, holiday: false, text: 'کودتای انگلیسی رضاخان (۱۲۹۹ ه‍.ش)' },
            { month: 12, day: 5, holiday: false, text: 'روز بزرگداشت خواجه‌نصیرالدّین طوسی - روز مهندسی' },
            { month: 12, day: 8, holiday: false, text: 'روز امور تربیتی و تربیت اسلامی ‌- روز بزرگداشت حکیم حاج ملاهادی سبزواری' },
            { month: 12, day: 9, holiday: false, text: 'روز حمایت از حقوق مصرف‌کنندگان' },
            { month: 12, day: 14, holiday: false, text: 'روز احسان و نیکوکاری - روز ترویج فرهنگ قرض‌الحسنه' },
            { month: 12, day: 15, holiday: false, text: 'روز درختکاری' },
            { month: 12, day: 18, holiday: false, text: 'روز بزرگداشت سید‌جمال‌الدّین اسدآبادی - سالروز تأسیس کانون‌های فرهنگی‌و‌هنری مساجد کشور' },
            { month: 12, day: 20, holiday: false, text: 'روز راهیان نور' },
            { month: 12, day: 21, holiday: false, text: 'روز بزرگداشت نظامی گنجوی' },
            { month: 12, day: 22, holiday: false, text: 'روز بزرگداشت شهدا (سالروز صدور فرمان حضرت امام خمینی رحمة‌اللّه علیه، مبنی بر تأسیس بنیاد شهید انقلاب اسلامی) (۱۳۵۸ ه‍.ش)' },
            { month: 12, day: 25, holiday: false, text: 'بمباران شیمیایی حلبچه به دست ارتش بعث عراق (۱۳۶۶ ه‍.ش)' },
            { month: 12, day: 29, holiday: true, text: 'روز ملّی‌شدن صنعت نفت ایران (۱۳۲۹ ه‍.ش)' },
            { month: 12, day: 30, holiday: false, text: 'روز سال کبیسه' },
        ],
        "wnHijriCalendar": [
            { month: 1, day: 1, holiday: false, text: 'آغاز سال هجری قمری (اوّل ماه محرّم)' },
            { month: 1, day: 9, holiday: true, text: 'تاسوعای حسینی' },
            { month: 1, day: 10, holiday: true, text: 'عاشورای حسینی' },
            { month: 1, day: 11, holiday: false, text: 'روز تجلیل از اسرا و مفقودان' },
            { month: 1, day: 12, holiday: false, text: 'شهادت حضرت امام زین‌العابدین علیه‌السلام (۹۵ ه‍.ق) ‌' },
            { month: 1, day: 25, holiday: false, text: 'شهادت حضرت امام زین‌العابدین علیه‌السلام :به روایتی (۹۵ ه‍.ق)' },
            { month: 2, day: 7, holiday: false, text: 'شهادت حضرت امام حسن مجتبی علیه‌السلام :به روایتی (۵۰ ه‍.ق) - روز بزرگداشت سلمان فارسی' },
            { month: 2, day: 20, holiday: true, text: 'اربعین حسینی' },
            { month: 2, day: 27, holiday: true, text: 'روز وقف' },
            { month: 2, day: 28, holiday: true, text: 'رحلت حضرت رسول اکرم صلی اللّه علیه و آله (۱۱ ه‍.ق) - شهادت حضرت امام حسن مجتبی علیه‌السلام (۵۰ ه‍.ق)' },
            { month: 2, day: 29, holiday: false, text: 'شهادت حضرت امام رضا علیه‌السلام' },
            { month: 3, day: 1, holiday: false, text: 'هجرت حضرت رسول اکرم صلی اللّه علیه و آله از مکّه به مدینه' },
            { month: 3, day: 8, holiday: true, text: 'شهادت حضرت امام حسن عسکری علیه‌السلام (۲۶۰ ه‍.ق) - آغاز امامت حضرت ولی‌عصر (عج) (۲۶۰ ه‍.ق)' },
            { month: 3, day: 12, holiday: false, text: 'ولادت حضرت رسول اکرم صلی اللّه علیه و آله :به روایت اهل سنت (-۵۳ ه‍.ق) - آغاز هفته‌ی وحدت' },
            { month: 3, day: 17, holiday: true, text: 'ولادت حضرت رسول اکرم صلی اللّه علیه و آله - روز اخلاق و مهرورزی (-۵۳ ه‍.ق)  - ولادت حضرت امام جعفر صادق علیه‌السلام، مؤسس مذهب جعفری (۸۳ ه‍.ق)' },
            { month: 4, day: 4, holiday: false, text: 'ولادت حضرت عبدالعظیم حسنی علیه‌السلام' },
            { month: 4, day: 8, holiday: false, text: 'ولادت حضرت امام حسن عسکری علیه‌السلام (۲۳۲ ه‍.ق)' },
            { month: 4, day: 10, holiday: false, text: 'وفات حضرت معصومه سلام‌اللّه علیها (۲۰۱ ه‍.ق)' },
            { month: 5, day: 5, holiday: false, text: 'ولادت حضرت زینب سلام‌اللّه علیها و روز پرستار' },
            { month: 5, day: 13, holiday: false, text: 'شهادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها :به روایتی (۱۱ ه‍.ق)' },
            { month: 6, day: 3, holiday: true, text: 'شهادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها (۱۱ ه‍.ق)' },
            { month: 6, day: 13, holiday: false, text: 'سالروز وفات حضرت اُم‌البنین سلام‌اللّه علیها - روز تکریم مادران و همسران شهدا' },
            { month: 6, day: 20, holiday: false, text: 'ولادت حضرت فاطمه‌ی زهرا سلام‌اللّه علیها و روز زن (-۸ ه‍.ق) - تولّد حضرت امام خمینی (رحمة‌اللّه علیه)، رهبر کبیر انقلاب اسلامی (۱۳۲۰ ه‍.ق) ‌ - روز مادر - روز زن' },
            { month: 7, day: 1, holiday: false, text: 'ولادت حضرت امام محمّد باقر علیه‌السلام (۵۷ ه‍.ق)' },
            { month: 7, day: 3, holiday: false, text: 'شهادت حضرت امام علی نقی «هادی» علیه‌السلام (۲۵۴ ه‍.ق)' },
            { month: 7, day: 10, holiday: false, text: 'ولادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۱۹۵ ه‍.ق)' },
            { month: 7, day: 13, holiday: true, text: 'ولادت حضرت امام علی علیه‌السلام (-۲۳ ه‍.ق) - آغاز ایام البیض (اعتکاف) - روز پدر - روز مرد' },
            { month: 7, day: 15, holiday: false, text: 'ارتحال حضرت زینب کبری سلام‌اللّه علیها (۶۲ ه‍.ق) - تغییر قبله‌ی مسلمین از بیت‌المقدس به مکّه‌ی معظّمه (۲ ه‍.ق)' },
            { month: 7, day: 25, holiday: false, text: 'شهادت حضرت امام موسی کاظم علیه‌السلام (۱۸۳ ه‍.ق)' },
            { month: 7, day: 27, holiday: true, text: 'مبعث حضرت رسول اکرم صلی‌اللّه علیه و آله (-۱۳ ه‍.ق)' },
            { month: 8, day: 3, holiday: false, text: 'ولادت حضرت امام حسین علیه‌السلام و روز پاسدار (۴ ه‍.ق)' },
            { month: 8, day: 4, holiday: false, text: 'ولادت حضرت ابوالفضل‌العباس علیه‌السلام و روز جانباز (۲۶ ه‍.ق)' },
            { month: 8, day: 5, holiday: false, text: 'ولادت حضرت امام زین‌العابدین علیه‌السلام (۳۸ ه‍.ق)' },
            { month: 8, day: 11, holiday: false, text: 'ولادت حضرت علی‌اکبر علیه‌السلام و روز جوان (۳۳ ه‍.ق)' },
            { month: 8, day: 15, holiday: true, text: 'ولادت حضرت قائم عجل‌اللّه تعالی فرجه (جشن صاحب‌الزّمان) و روز جهانی مستضعفان (۲۵۵ ه‍.ق) - روز سربازان گمنام امام زمان (عج)' },
            { month: 9, day: 10, holiday: false, text: 'وفات حضرت خدیجه سلام‌اللّه علیها (-۳ ه‍.ق)' },
            { month: 9, day: 15, holiday: false, text: 'ولادت حضرت امام حسن مجتبی علیه‌السلام (۳ ه‍.ق) - روز اکرام و تکریم خیّرین' },
            { month: 9, day: 18, holiday: false, text: 'شب قدر' },
            { month: 9, day: 19, holiday: false, text: 'ضربت خوردن حضرت علی (ع)' },
            { month: 9, day: 20, holiday: false, text: 'شب قدر' },
            { month: 9, day: 21, holiday: true, text: 'شهادت امیر‌المؤمنین، حضرت امام علی علیه‌السلام (۴۰ ه‍.ق)' },
            { month: 9, day: 22, holiday: false, text: 'شب قدر' },
            { month: 10, day: 1, holiday: true, text: 'عید سعید فطر' },
            { month: 10, day: 2, holiday: true, text: 'تعطیل به مناسبت عید سعید فطر' },
            { month: 10, day: 17, holiday: false, text: 'روز فرهنگ پهلوانی و ورزش زورخانه‌ای' },
            { month: 10, day: 21, holiday: false, text: 'فتح اندلس به دست مسلمانان (۹۲ ه‍.ق)' },
            { month: 10, day: 25, holiday: true, text: 'شهادت حضرت امام جعفر صادق علیه‌السلام (۱۴۸ ه‍.ق) ' },
            { month: 11, day: 1, holiday: false, text: 'ولادت حضرت معصومه سلام‌اللّه علیها و روز دختران (۱۷۳ ه‍.ق)' },
            { month: 11, day: 5, holiday: false, text: 'روز تجلیل از امام‌زادگان و بقاع متبرکه - روز بزرگداشت حضرت صالح بن موسی کاظم علیه‌السلام' },
            { month: 11, day: 6, holiday: false, text: 'روز بزرگداشت حضرت احمد بن موسی شاهچراغ علیه‌السلام' },
            { month: 11, day: 11, holiday: false, text: 'ولادت حضرت امام رضا علیه‌السلام (۱۴۸ ه‍.ق)' },
            { month: 11, day: 29, holiday: false, text: 'آخرین روز (۲۹ یا ۳۰) ماه ذی‌القعده: شهادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۱۴۸ ه‍.ق)' },
            { month: 11, day: 30, holiday: true, text: 'شهادت حضرت امام محمد تقی علیه‌السلام «جوادالائمه» (۲۲۰ ه‍.ق)' },
            { month: 12, day: 1, holiday: false, text: 'سالروز ازدواج حضرت امام علی علیه‌السلام و حضرت فاطمه سلام‌اللّه علیها (۲ ه‍.ق) - روز ازدواج' },
            { month: 12, day: 6, holiday: false, text: 'شهادت مظلومانه‌ی زائران خانه‌ی خدا به دست مأموران آل‌سعود در سال ۱۳۶۶ هجری‌شمسی (۱۴۰۷ ه‍.ق)' },
            { month: 12, day: 7, holiday: false, text: 'شهادت حضرت امام محمد باقر علیه‌السلام (۱۱۴ ه‍.ق)' },
            { month: 12, day: 9, holiday: false, text: 'روز عرفه (روز نیایش) ‌' },
            { month: 12, day: 10, holiday: true, text: 'عید سعید قربان' },
            { month: 12, day: 15, holiday: false, text: 'ولادت حضرت امام علی نقی «هادی» علیه‌السلام (۲۱۲ ه‍.ق)' },
            { month: 12, day: 18, holiday: true, text: 'عید سعید غدیر خم (۱۰ ه‍.ق)' },
            { month: 12, day: 20, holiday: false, text: 'ولادت حضرت امام موسی کاظم علیه‌السلام (۱۲۸ ه‍.ق)' },
            { month: 12, day: 24, holiday: false, text: 'روز مباهله پیامبر اسلام (ص)' },
            { month: 12, day: 25, holiday: false, text: 'روز خانواده و تکریم بازنشستگان' },
        ],
        'wnGregorianCalendar': [
            { month: 1, day: 1, holiday: false, text: 'آغاز سال جدید میلادی' },
            { month: 1, day: 26, holiday: false, text: 'روز جهانی گمرک' },
            { month: 3, day: 22, holiday: false, text: 'روز جهانی آب' },
            { month: 3, day: 23, holiday: false, text: 'روز جهانی هواشناسی' },
            { month: 5, day: 1, holiday: false, text: 'روز جهانی کار و کارگر' },
            { month: 5, day: 5, holiday: false, text: 'روز جهانی ماما' },
            { month: 5, day: 8, holiday: false, text: 'روز جهانی صلیب‌سرخ و هلال‌احمر' },
            { month: 5, day: 18, holiday: false, text: 'روز جهانی موزه و میراث‌فرهنگی' },
            { month: 5, day: 31, holiday: false, text: 'روز جهانی بدون دخانیات' },
            { month: 6, day: 5, holiday: false, text: 'روز جهانی محیط زیست' },
            { month: 6, day: 17, holiday: false, text: 'روز جهانی بیابان‌زدایی' },
            { month: 6, day: 26, holiday: false, text: 'روز جهانی مبارزه با مواد‌مخدر' },
            { month: 8, day: 1, holiday: false, text: 'روز جهانی شیر مادر' },
            { month: 8, day: 21, holiday: false, text: 'روز جهانی مسجد' },
            { month: 9, day: 27, holiday: false, text: 'روز جهانی جهانگردی - روز گردشگری' },
            { month: 9, day: 30, holiday: false, text: 'روز جهانی دریانوردی - روز جهانی ناشنوایان' },
            { month: 10, day: 1, holiday: false, text: 'روز جهانی سالمندان' },
            { month: 10, day: 8, holiday: false, text: 'روز جهانی کودک' },
            { month: 10, day: 9, holiday: false, text: 'روز جهانی پست' },
            { month: 10, day: 14, holiday: false, text: 'روز جهانی استاندارد' },
            { month: 10, day: 15, holiday: false, text: 'روز جهانی نابینایان (عصای سفید)' },
            { month: 10, day: 16, holiday: false, text: 'روز جهانی غذا' },
            { month: 11, day: 10, holiday: false, text: 'روز جهانی علم در خدمت صلح و توسعه' },
            { month: 12, day: 1, holiday: false, text: 'روز جهانی مبارزه با ایدز' },
            { month: 12, day: 3, holiday: false, text: 'روز جهانی معلولان' },
            { month: 12, day: 7, holiday: false, text: 'روز جهانی هواپیمایی' },
            { month: 12, day: 25, holiday: false, text: 'ولادت حضرت عیسی مسیح علیه‌السلام' },
        ]
    },
    "editor": {
        "url": "آدرس",
        "target": "روش باز شدن",
        "title": "عنوان",
        "insert": "درج",
        "alt": "شرح",
        "width": "طول",
        "height": "ازتفاع",
        "borderwidth": "کلفتی کادر",
        "borderstyle": "نوع کادر",
        "class": "کلاس",
        "type": "نوع",
        "controls": "کنترل ها",
        "mute": "بی صدا",
        "autoplay": "پخش خودکار",
        "medianotsupport": "مرورگر شما از مدیا پشتیبانی نمیکند",
    },
    "filelist": {
        "refresh": "نمایش مجدد",
        "newfolder": "فهرست جدید",
        "rename": "تغییر نام",
        "delete": "حذف",
        "copy": "کپی",
        "cut": "برش",
        "paste": "چسباندن",
        "upload": "ارسال فایل",
        "download": "دریافت فایل",
        "compress": "فشرده سازی",
        "decompress": "بازیابی فایل فشرده",
        "root": "ریشه",
        "filename": "نام فایل",
        "ext": "پسوند",
        "size": "حجم",
        "date": "تاریخ",
        "name": "نام",
        "errorcommand": "در هنگام اجرا دستور، دچار خطا شدیم.",
        "foldercreated": "فهرست ساخته شد.",
        "renamesuccess": "تغییر نام موفق بود.",
        "deletefiles": "آیا مایل به حذف فایلهای انتخاب شده هستید؟",
        "files": "فایل",
        "deletefolder": "آیا مایل به حذف فهرست انتخاب شده هستید؟",
        "renamed": "تغییر نام انجام شد.",
        "deleted": "حذف انجام شد.",
        "clipboarded": "اطلاعات در حافظه قرار گرفت.",
        "pasted": "عملیات چسباندن انجام شد.",
        "drophere": "فایلهای مد نظر را اینجا رها کنید.",
        "uploaded": "فایلها آپلود شدند.",
        "compressed": "فایلها فشرده شدند.",
        "decompressmessage": "آیا مایل هستید فایل از فشرده در آمده و فایلهای درون آن رونویسی شوند؟",
        "decompressed": "فایلها از فشرده درآمدند.",
    }
};
//# sourceMappingURL=WidgetNas.js.map