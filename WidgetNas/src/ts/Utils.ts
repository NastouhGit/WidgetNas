﻿function WNmod(a: number, b: number) { return a - (b * Math.floor(a / b)); }
function WNdtr(d) { return (d * Math.PI) / 180.0; }
function WNrtd(r) { return (r * 180.0) / Math.PI;}
function WNdcos(d) { return Math.cos(WNdtr(d)); }
function WNdsin(d) { return Math.sin(WNdtr(d)); }
function WNfixangle(a) { return a - 360.0 * (Math.floor(a / 360.0)); }
function WNfixangr(a) {return a - (2 * Math.PI) * (Math.floor(a / (2 * Math.PI)));}
function WNparseBoolean(value: any, Default?: boolean): boolean {
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
function WNparseNumber(value: any, Default?: number, culture: IWNCultureInfo = wnConfig.cultureInfo): number {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;
    value = WNDenativeDigit(value, culture);
    let v = parseInt(value);
    if (isNaN(v))
        return Default;
    return v;
}
function WNparseFloat(value: any, Default?: number, culture: IWNCultureInfo = wnConfig.cultureInfo): number {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;
    value = WNDenativeDigit(value, culture);
    let v = parseFloat(value);
    if (isNaN(v))
        return Default;
    return v;
}
function WNparseString(value: any, Default?: string): string {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;

    return value + '';
}
function WNTrim(value: string, trimstr: string = ' ') {
    while (value.startsWith(trimstr))
        value = value.substring(trimstr.length);
    while (value.endsWith(trimstr))
        value = value.substring(0, value.lastIndexOf(trimstr));
    return value;
}
function WNTrimStart(value: string, trimstr: string = ' ') {
    while (value.startsWith(trimstr))
        value = value.substring(trimstr.length);
    return value;
}
function WNTrimEnd(value: string, trimstr: string = ' ') {
    while (value.endsWith(trimstr))
        value = value.substring(0, value.lastIndexOf(trimstr));
    return value;
}
function WNLimitRange(value: number, min: number, max: number) {
    if (value < min)
        value = min;
    if (value > max)
        value = max;
    return value;
}
function WNnativeDigit(number: number | string, culture: IWNCultureInfo, convert: boolean): string {
    let ret = number.toString();
    if (convert) {
        ret = ret.replace(/0/g, culture.NumberFormat.nativeDigits[0]);
        ret = ret.replace(/1/g, culture.NumberFormat.nativeDigits[1]);
        ret = ret.replace(/2/g, culture.NumberFormat.nativeDigits[2]);
        ret = ret.replace(/3/g, culture.NumberFormat.nativeDigits[3]);
        ret = ret.replace(/4/g, culture.NumberFormat.nativeDigits[4]);
        ret = ret.replace(/5/g, culture.NumberFormat.nativeDigits[5]);
        ret = ret.replace(/6/g, culture.NumberFormat.nativeDigits[6]);
        ret = ret.replace(/7/g, culture.NumberFormat.nativeDigits[7]);
        ret = ret.replace(/8/g, culture.NumberFormat.nativeDigits[8]);
        ret = ret.replace(/9/g, culture.NumberFormat.nativeDigits[9]);
    }
    return ret;
}
function WNDenativeDigit(value: string, culture: IWNCultureInfo = wnConfig.cultureInfo): string {
    value = value.toString();
    for (var i = 0; i < 10; i++) {
        let r = new RegExp('(' + culture.NumberFormat.nativeDigits[i] + ')', "ig");
        value = value.replace(r, i.toString());
    }
    return value;
}
function WNGetNodesList(list: string, parent: any = document, thiselemnt: HTMLElement = null): HTMLElement[] {
    let ret = Array<HTMLElement>();
    if (list != '') {
        let part = []
        part = list.split(',');
        for (var p = 0; p < part.length; p++) {
            if (part[p].toLowerCase().trim() == 'this' && thiselemnt != null)
                ret.push(thiselemnt);
            else {
                let elems = parent.querySelectorAll(part[p].trim()) as NodeListOf<HTMLElement>;
                for (var i = 0; i < elems.length; i++) {
                    ret.push(elems[i]);
                }
            }
        }
    }
    return ret;
}
function WNParentHaveClass(child: HTMLElement, parentClassName: string) {
    var node = child.parentNode as HTMLElement;
    while (node != null) {
        if (node.classList != undefined && node.classList.contains(parentClassName)) {
            return true;
        }
        node = node.parentNode as HTMLElement;
    }
    return false;
}
function WNCalcValue(value1: string, value2: string, sign: string, elem: HTMLElement = null, min: number = Number.MIN_VALUE, max: number = Number.MAX_VALUE): string {
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
    if (v1.value < min) v1.value = min;
    if (v1.value > max) v2.value = max;
    return v1.value + v2.unit;
}
function WNContainElement(elem: HTMLElement, findin: HTMLElement): boolean {
    for (var j = 0; j < findin.childNodes.length; j++) {
        if (findin.childNodes[j] == elem) {
            return true;
        }
        if (findin.childNodes[j].childNodes.length > 0)
            if (WNContainElement(elem, findin.childNodes[j] as HTMLElement))
                return true;
    }
    return false;
}
function WNHtmlToEscape(src: string): string {
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
function WNHtmlToText(src: string): string {
    var regex = /(<([^>]+)>)/ig;
    return src.replace(regex, "");
}
function WNValueUnit(value: string): { value: number, unit: string } {
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
function WNGetCookie(cname: string): string {
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
function WNSetCookie(cname: string, cvalue: string, exdays: number, samesite: string = 'lax', secure: boolean = false, HTTPOnly: boolean = false): void {
    let cookie = cname + "=" + cvalue + ";";
    const d = new Date();
    if (exdays > 0) {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        cookie += expires + ";";
    }
    cookie += "path=/;"
    cookie += "samesite=" + samesite + ";";
    if (secure) cookie += "secure;";
    if (HTTPOnly) cookie += "httponly;";
    cookie = WNTrim(cookie, ';');
    document.cookie = cookie;
}
function WNGetStorage(key: string): string {
    let ret: string = sessionStorage.getItem(key);
    if (ret == null)
        ret = localStorage.getItem(key);
    if (ret == null)
        ret = WNGetCookie(key);
    return ret;
}
function WNSetStorage(key: string, value: string, localstorage: boolean): boolean {
    if (localstorage) {
        localStorage.setItem(key, value);
        return localStorage.getItem(key) == value;
    }
    else {
        sessionStorage.setItem(key, value);
        return sessionStorage.getItem(key) == value;
    }
}
function WNSleep(ms: number) {
    return new Promise(s => setTimeout(s, ms));
}

function WNAddClassList(elem: HTMLElement, classes: string) {
    if (classes == '' || elem == null || elem == undefined) return;
    classes.split(' ').forEach((s) => { if (!elem.classList.contains(s)) elem.classList.add(s) });
}
function WNRemoveClassList(elem: HTMLElement, classes: string) {
    if (classes == '' || elem == null || elem == undefined) return;
    classes.split(' ').forEach((s) => { if (elem.classList.contains(s)) elem.classList.remove(s) });
}
function WNCalendarFunction(name: string): IWNCalendar {
    let cal = name.toLowerCase();
    if (!cal.toLowerCase().startsWith('wn'))
        cal = 'WN' + cal[0].toUpperCase() + cal.substring(1);
    else
        cal = 'WN' + cal[2].toUpperCase() + cal.substring(3);
    if (!cal.includes('calendar')) cal += 'calendar';
    cal = cal.replace('calendar', 'Calendar');
    return WNGenerateFunction('return new ' + cal + '()')() as IWNCalendar;
}
function WNCultureInfoFunction(name: string): IWNCultureInfo {
    let cul = name.toLowerCase().replace('-', '_').split('_');
    if (cul.length == 1) return null;
    name = 'WNCultureInfo_' + cul[cul.length - 2].toLowerCase() + '_' + cul[cul.length - 1].toUpperCase();
    return WNGenerateFunction('return new ' + name + '()')() as IWNCultureInfo;
}

function WNGenerateFunction(body: string, params: string = ''): any {
    let ret = undefined;
    let pr: string[] = [];

    if (params !== '')
        pr = params.split(',');
    pr.push(body);
    if (body.trim().startsWith('('))
        ret = new Function(body);
    else if (pr.length == 5)
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
function WNToDictionary(value: string): WNDictionary {
    value = value.trim();
    if (!value.startsWith('{')) value = '{' + value;
    if (!value.endsWith('}')) value = value + '}';

    return WNGenerateFunction('return ' + value)();
}
function WNStringToObject(value: string): any {
    value = value.trim();
    if (!value.startsWith('{') && !value.startsWith('[')) value = '{' + value;
    if (!value.endsWith('}') && !value.endsWith(']')) value = value + '}';

    return WNGenerateFunction('return ' + value)();
}
function WNAddStringQuote(value: string) { return '"' + value + '"'; }

function WNisJson(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        item = JSON.parse(item);
    } catch (e) {
        return false;
    }

    if (typeof item === "object" && item !== null) {
        return true;
    }

    return false;
}
function WNJSONparse(item) {
    item = typeof item !== "string"
        ? JSON.stringify(item)
        : item;

    try {
        let item2 = JSON.parse(item);
        return item2;
    } catch (e) {
    }
    return item;
}
function WNtoTitleCase(text: string) {
    let s = text.split(' ');
    for (var i = 0; i < s.length; i++) {
        if (s.length > 0)
            s[i] = s[i][0].toUpperCase() + s[i].substring(1).toLowerCase();
    }
    return s.join(' ');
}
function WNNumberToString(num: number, culture: IWNCultureInfo = wnConfig.cultureInfo): string {
    let negsign = num < 0 ? culture.NumberFormat.negativeSign : '';
    num = WNparseNumber(num.toFixed(culture.NumberFormat.numberDecimalDigits), 0);
    var decimal = Math.abs(num) - Math.floor(Math.abs(num))
    num = num - decimal;
    let grp = num.toString().split("").reverse().join("").match(new RegExp('.{1,' + culture.NumberFormat.numberGroupSizes[0] + '}', 'ig'));
    let ret = negsign;
    for (var i = grp.length - 1; i > -1; i--)
        ret += grp[i].split("").reverse().join("") + (i != 0 ? culture.NumberFormat.numberGroupSeparator : '');

    if (decimal > 0)
        ret += culture.NumberFormat.numberDecimalSeparator + decimal.toString();
    return ret;

}
function WNStringFormat(text: string | number, format: string, culture: IWNCultureInfo = wnConfig.cultureInfo) {
    let ret: string = text.toString();
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
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toString();
    else if (format.toLowerCase() == 'longdate')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toLongDateString();
    else if (format.toLowerCase() == 'shortdate')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toShortDateString();
    else if (format.toLowerCase() == 'longtime')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toLongTimeString();
    else if (format.toLowerCase() == 'shorttime')
        ret = new WNDate(culture, wnConfig.calendar, new Date(ret)).toShortTimeString();
    return ret;
}
function WNToggleClass(elem: string | HTMLElement, setclass: string, classes: string[]) {
    let el = WN(elem).htmlElement;
    classes.forEach(x => el.classList.remove(x));
    el.classList.add(setclass);
}

window.addEventListener("resize", WNSetViewSize);
function WNSetViewSize() {
    let width;
    width = window.visualViewport.width;
    document.body.style.setProperty('--view-width', getComputedStyle(document.body).width);
    return width;
}
function WNGetWNType(elem: HTMLElement): string {
    let tElem = elem;

    while (tElem != null) {
        if (tElem.hasAttribute('wn-type'))
            return tElem.getAttribute('wn-type');
        tElem = tElem.parentElement;
    }
    return '';
}
function WNGetParentsElementsTag(elem: HTMLElement, untilTag: string, untilClass: string): string[] {
    let ret = [];
    let tElem = elem;
    untilTag = (untilTag ?? '').toLowerCase().trim();

    let luntilTag: string[];
    luntilTag = untilTag.split(' ');
    untilClass = (untilClass ?? '').toLowerCase().trim();
    let luntilClass: string[];
    luntilClass = untilClass.split(' ');

    while (tElem != null) {
        let tag = tElem.tagName.toLowerCase();
        let classList = tElem.classList
        ret.push(tag);
        if (luntilTag.find((x) => x == tag) != null)
            break;
        if (luntilClass.find((x) => classList.contains(x)) != null)
            break;
        tElem = tElem.parentElement;
    }
    return ret;
}
function WNFindParentsTag(elem: HTMLElement, untilTag: string): HTMLElement {
    let tElem = elem;
    untilTag = (untilTag ?? '').toLowerCase().trim();

    let luntilTag: string[];
    luntilTag = untilTag.split(' ');

    while (tElem != null) {
        let tag = tElem.tagName.toLowerCase();
        if (luntilTag.find((x) => x == tag) != null)
            return tElem;
        tElem = tElem.parentElement;
    }
    return null;
}
function WNRGB2HEX(rgb: string): string {
    let ret = '';
    rgb = rgb.toLowerCase();
    if (rgb.includes('rgba'))
        ret = `#${rgb.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
    else if (rgb.includes('rgb'))
        ret = `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`;
    return ret;
}

function WNFindTreeArray(source: any, fieldName1: string, fieldName2: string = '', value: string, contain: boolean = false, ignoreCase: boolean = false, childsFieldName: string): any[] {
    let find = [];
    for (var i = 0; i < source.length; i++) {
        let item = source[i];
        let tValue = <string>item[fieldName1];
        if (fieldName2 != '')
            tValue += <string>item[fieldName2];
        if (ignoreCase) {
            tValue = tValue.toLowerCase();
            value = value.toLowerCase();
        }
        if (contain && tValue.includes(value))
            find.push(item);
        else if (tValue == value)
            find.push(item);
        if (item[childsFieldName].length > 0) {
            find = find.concat(WNFindTreeArray(item[childsFieldName], fieldName1, fieldName2, value, contain, ignoreCase, childsFieldName));
        }
    }
    return find;
}
function WNChangeFieldTreeArray(source: any, childsFieldName: string, parent: any, call: Function): void {
    for (var i = 0; i < source.length; i++) {
        let item = source[i];
        call?.(item, parent);

        if (item[childsFieldName].length > 0) {
            WNChangeFieldTreeArray(item[childsFieldName], childsFieldName, item, call);
        }
    }
}
async function WNFileToString(input: HTMLInputElement): Promise<string> {
    if (!input.files || !input.files[0]) return '';

    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(input.files[0]);
    });

    return result_base64 as string;
}
async function WNSetImageBase(input: HTMLInputElement, img: HTMLImageElement | string) {
    if (typeof (img) == 'string') {
        img = document.getElementById(img) as HTMLImageElement;
    }

    img.src = await WNFileToString(input);
}

function WNCheckReadOnlyDisabled(element: HTMLElement, readOnly = true, disabled = true) {
    let ret = false;
    if (readOnly)
        ret = ret || element.hasAttribute('readonly') || element.classList.contains('readonly');
    if (disabled)
        ret = ret || element.hasAttribute('disabled') || element.classList.contains('disabled');
    return ret;

}

function WNQueryString(key: string): string {
    let q = new URLSearchParams(window.location.search);
    if (q.has(key))
        return q.get(key)
    return '';
}

function WNToBase64String(str: string): string {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode(parseInt(p1, 16));
        }));
}
function WNFromBase64String(str: string): string {
    return decodeURIComponent(atob(str).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function WNIsStringArray(input: any[]): boolean {
    return Array.isArray(input) && input.every(item => typeof item === 'string');
}