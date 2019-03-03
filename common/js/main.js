jsFilesImport = [
    "getDataURL.js",
    "extention.js",
    "helper.js",
    "getStockInfo.js",
    "chartDrawing.js",
    "Intraday.js",
    "historical.js"
];

jsFilesImport.forEach(file => {
    var imported = document.createElement("script");
    imported.src = "common/js/" + file;
    document.head.appendChild(imported);
});

$(document).ready(function() {
    var behavior = new userBehavior();
});
