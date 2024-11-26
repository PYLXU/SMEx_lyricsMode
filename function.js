function insertAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}
function includeScriptElement(scripts) {
    var script = document.createElement("script");
    script.textContent = scripts;
    document.body.appendChild(script);
}
function includeStyleElement(styles) {
    var style = document.createElement("style");
    (document.getElementsByTagName("head")[0] || document.body).appendChild(style);
    if (style.styleSheet) {
        style.styleSheet.cssText = styles;
    } else {
        style.appendChild(document.createTextNode(styles));
    }
}