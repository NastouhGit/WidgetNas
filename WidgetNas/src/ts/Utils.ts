function WNmod(a: number, b: number) { return a - (b * Math.floor(a / b)); }
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
function WNparseNumber(value: any, Default?: number, culture: wnCultureInfo = WNDefaultCultureInfo): number {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;
    value = WNDeNaitveDigit(value, culture);
    return parseInt(value);
}
function WNparseString(value: any, Default?: string): string {
    if ((value == undefined || value == null || value == '') && Default != undefined && Default != null)
        return Default;

    return value;
}
function WNTrim(value: string, trimstr: string = ' ') {
    while (value.startsWith(trimstr))
        value = value.substr(trimstr.length);
    while (value.endsWith(trimstr))
        value = value.substr(0, value.lastIndexOf(trimstr));
    return value;
}
function WNLimitRange(value: number, min: number, max: number) {
    if (value < min)
        value = min;
    if (value > max)
        value = max;
    return value;
}
function WNNaitveDigit(number: number | string, culture: wnCultureInfo, convert: boolean): string {
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
function WNDeNaitveDigit(value: string, culture: wnCultureInfo = WNDefaultCultureInfo): string {
    value = value.toString();
    for (var i = 0; i < 10; i++) {
        let r = new RegExp('(' + culture.NumberFormat.NativeDigits[i] + ')', "ig");
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
function WNSetCookie(cname: string, cvalue: string, exdays: number): void {
    const d = new Date();
    if (exdays > 0) {
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    else
        document.cookie = cname + "=" + cvalue + ";path=/";
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
function WNWaitToLoad(e: HTMLElement, timeout: number = 5000) {
    if (e.nodeName == "IMG") {
        new Promise(() => {
            if ((<HTMLImageElement>e).complete) {
                return null;
            }
            (<HTMLImageElement>e).onload = () => null;
            (<HTMLImageElement>e).onerror = () => null;
        });
    }
    else
        e.childNodes.forEach(x => WNWaitToLoad(x as HTMLElement, timeout));
}

function WNAddClassList(elem: HTMLElement, classes: string) {
    if (classes == '' || elem == null || elem == undefined) return;
    classes.split(' ').forEach((s) => elem.classList.add(s));
}
function WNRemoveClassList(elem: HTMLElement, classes: string) {
    if (classes == '' || elem == null || elem == undefined) return;
    classes.split(' ').forEach((s) => elem.classList.remove(s));
}

function WNGenerateFunction(body: string, params: string = ''): any {
    let ret = undefined;
    let pr: string[] = [];

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

function WNtoTitleCase(text: string) {
    let s = text.split(' ');
    for (var i = 0; i < s.length; i++) {
        if (s.length > 0)
            s[i] = s[i][0].toUpperCase() + s[i].substr(1).toLowerCase();
    }
    return s.join(' ');
}
function WNNumberToString(num: number, culture: wnCultureInfo = WNDefaultCultureInfo): string {
    let negsign = num < 0 ? culture.NumberFormat.NegativeSign : '';
    num = WNparseNumber(num.toFixed(culture.NumberFormat.NumberDecimalDigits), 0);
    var decimal = Math.abs(num) - Math.floor(Math.abs(num))
    num = num - decimal;
    let grp = num.toString().split("").reverse().join("").match(new RegExp('.{1,' + culture.NumberFormat.NumberGroupSizes[0] + '}', 'ig'));
    let ret = negsign;
    for (var i = grp.length - 1; i > -1; i--)
        ret += grp[i].split("").reverse().join("") + (i != 0 ? culture.NumberFormat.NumberGroupSeparator : '');

    if (decimal > 0)
        ret += culture.NumberFormat.NumberDecimalSeparator + decimal.toString();
    return ret;

}
function WNStringFormat(text: string | number, format: string, culture: wnCultureInfo = WNDefaultCultureInfo) {
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