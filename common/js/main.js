jsFilesImport = [
    "extention.js",
    "xhr.js",
    "getStockInfo.js",
    "chartDrawing.js"
];

jsFilesImport.forEach(file => {
    var imported = document.createElement("script");
    imported.src = "common/js/" + file;
    document.head.appendChild(imported);
});

$(document).ready(function() {
    var behavior = new userBehavior();
});
