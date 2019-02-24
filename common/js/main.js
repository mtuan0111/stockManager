jsFilesImport = ["extention.js", "xhr.js", "getStockInfo.js"];

jsFilesImport.forEach(file => {
    var imported = document.createElement("script");
    imported.src = "common/js/" + file;
    document.head.appendChild(imported);
});

setTimeout(function() {
    VCB = new stockInfo("VCB");
}, 10);
// HAG.loadIntradayQuotes();
// HNG = new stockInfo("HNG");
