if (!wnConfig)
    wnConfig = new WNConfig();

document.addEventListener("DOMContentLoaded", initComponents, true);

function initComponents() {


    CheckBrowserCompatibility();
    WNSetViewSize();
    InitWNBlock(document);

}

function CheckBrowserCompatibility() {
    let objAgent = navigator.userAgent;
    let objbrowserName = '';
    let objfullVersion = '';
    let objBrMajorVersion = 0;
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
        objfullVersion = objAgent.substring(objOffsetVersion + 8);
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
            objbrowserName = 'Netscape';
        }
    }
    if ((ix = objfullVersion.indexOf(";")) != -1)
        objfullVersion = objfullVersion.substring(0, ix);
    if ((ix = objfullVersion.indexOf(" ")) != -1)
        objfullVersion = objfullVersion.substring(0, ix);
    objBrMajorVersion = parseInt('' + objfullVersion, 10);
    if (isNaN(objBrMajorVersion)) {
        objfullVersion = '1.0';
        objBrMajorVersion = 0;
    }
    let error = true;
    if (objbrowserName == 'Chrome' && objBrMajorVersion >= 89)
        error = false;
    else if (objbrowserName == 'Firefox' && objBrMajorVersion >= 5)
        error = false;
    if (error)
        document.body.innerHTML = `<div class='alert warning'>` + wnConfig.language["common"]["browsererror"] + ' ' + objbrowserName + ':' + objBrMajorVersion + `</div>` + document.body.innerHTML;
}
function InitWNBlock(elem: HTMLElement | Document = document) {
    InitWN(elem);
    SetComponentCompatibility(elem);
    WNTooltipAssign(elem as HTMLElement);
    WNAnimationSetup();
}
function InitWN(masterelem: HTMLElement | Document = document) {
    //let selectors: NodeListOf<HTMLDivElement> = masterelem.querySelectorAll("[wn-type]");
    let selectors: NodeListOf<HTMLElement> = masterelem.querySelectorAll("*");
    let idIndex = 1;
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        if (elem !== null) {
            let type = elem.getAttribute("wn-type");
            let id = type;
            if (id == null)
                id = elem.tagName.toLowerCase() + '-';
            else
                id = 'wn-' + id;
            if (!elem.hasAttribute('id') || elem.getAttribute('is') == '') {
                elem.id = id + (idIndex).toString();
                elem.setAttribute('id', elem.id);
                idIndex++;
            }
            try {
                if (type != null) {

                    let welem = WN(elem);
                    if (welem.wn == null) {
                        let wn = new Function('elem', 'return new WN' + type[0].toUpperCase() + type.substring(1) + '(elem)')(elem);
                        welem.wn = wn;
                    }
                    else
                        console.error('Duplicated WNElement ID! ' + elem.id + ' ' + type)
                }
            }
            catch (e) { console.error(e); }
        }
    }
}
function SetComponentCompatibility(elem: HTMLElement | Document = document) {
    //Select
    let selectors: NodeListOf<HTMLSelectElement> = elem.querySelectorAll("*");
    for (var i = 0; i < selectors.length; i++) {
        let elem = selectors[i];
        if (elem !== null) {
            let st = getComputedStyle(elem);
            if (st.direction == 'ltr') {
                if (elem.tagName == "INPUT" && (elem.type == 'email')) {
                    if (getComputedStyle(<HTMLElement>elem.parentElement).direction == 'ltr')
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
