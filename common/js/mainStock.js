jsFilesImport = [
    "constant.js",
    "stockHelper.js",
    "getDataURL.js",
    "extention.js",
    "getStockInfo.js",
    // "chartDrawing.js",
    "Intraday.js",
    "historical.js"
];

jsFilesImport.forEach(file => {
    var imported = document.createElement("script");
    imported.src = "../common/js/" + file;
    document.head.appendChild(imported);
});

$(document).ready(function() {
    // var stockHelper = new stockHelper();
    setTimeout(function() {
        var behavior = new userBehavior();
        behavior.createSearchEvent();
    }, 200);
});
