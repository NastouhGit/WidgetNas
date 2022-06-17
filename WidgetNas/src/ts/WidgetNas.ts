function wnabout() {
    return `
/*--------------------------------------
 * Widgetnas Version: 1.2.0.2
 * Release Date: 1401-02-24 - 2022-05-14
 *--------------------------------------*/
`}

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

    CheckBrowserCompatibility();

    InitWNBlock(document);

    WNTagEvalScript(document.head);
    WNTagEvalScriptBody();


    
}

function CheckBrowserCompatibility() {
    let objAgent = navigator.userAgent;
    let objbrowserName = navigator.appName;
    let objfullVersion = '' + parseFloat(navigator.appVersion);
    let objBrMajorVersion = parseInt(navigator.appVersion, 10);
    let objOffsetName, objOffsetVersion, ix;
    // In Chrome
    if ((objOffsetVersion = objAgent.indexOf("Chrome")) != -1) {
        objbrowserName = "Chrome";
        objfullVersion = objAgent.substring(objOffsetVersion + 7);
    }
    // In Microsoft internet explorer
    else if ((objOffsetVersion = objAgent.indexOf("MSIE")) != -1) {
        objbrowserName = "Microsoft Internet Explorer";
        objfullVersion = objAgent.substring(objOffsetVersion + 5);
    }
    // In Firefox
    else if ((objOffsetVersion = objAgent.indexOf("Firefox")) != -1) {
        objbrowserName = "Firefox";
    }
    // In Safari
    else if ((objOffsetVersion = objAgent.indexOf("Safari")) != -1) {
        objbrowserName = "Safari";
        objfullVersion = objAgent.substring(objOffsetVersion + 7);
        if ((objOffsetVersion = objAgent.indexOf("Version")) != -1)
            objfullVersion = objAgent.substring(objOffsetVersion + 8);
    }
    // For other browser "name/version" is at the end of userAgent
    else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) < (objOffsetVersion = objAgent.lastIndexOf('/'))) {
        objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
        objfullVersion = objAgent.substring(objOffsetVersion + 1);
        if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
            objbrowserName = navigator.appName;
        }
    }
    // trimming the fullVersion string at semicolon/space if present
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

function InitWNBlock(elem: HTMLElement | HTMLDocument = document) {
    InitWN(elem);
    SetComponentCompatibility(elem);
    WNTooltipAssign(elem);
}
function InitWN(masterelem: HTMLElement | HTMLDocument = document) {
    let selectors: NodeListOf<HTMLDivElement> = masterelem.querySelectorAll("[wn-type]");
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
function SetComponentCompatibility(elem: HTMLElement | HTMLDocument = document) {
    //Select
    let selectors: NodeListOf<HTMLSelectElement> = elem.querySelectorAll("*");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        if (elem !== null) {
            let st = getComputedStyle(elem);
            if (st.direction == 'ltr')
                elem.setAttribute('dir', 'ltr');
        }
    }
}
function WNTagEvalScriptBody() { WNTagEvalScript(document.body); }
function WNTagEvalScript(elem: HTMLElement) {
    const regexp = /\$\[([\s\S]*?)\]/img;
    let html = elem.innerHTML;
    let v = html.matchAll(regexp);
    for (const m of v) {
        try {
            html = html.replace(m[0], eval(m[1]));
        } catch (e) {

        }
    }
    elem.innerHTML = html;
}

