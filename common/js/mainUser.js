jsFilesImport = [
    "stockHelper.js",
    "getDataURL.js",
    "extention.js",
    "getStockInfo.js",
    "watchList.js",
    "chartDrawing.js",
    "Intraday.js",
    "historical.js"
];

jsFilesImport.forEach(file => {
    var imported = document.createElement("script");
    imported.src = "../common/js/" + file;
    document.head.appendChild(imported);
});

$(document).ready(function() {
    setTimeout(function() {
        var behavior = new userBehavior();
        behavior.createSearchEvent();
    }, 200);

    setTimeout(function() {
        var listStockCode = ["HAG", "FLC", "ACB", "HUT"];
        var userWatchList = new watchList({
            listStockCode: listStockCode,
            targetAppend: document.getElementById("watchList")
        });
        // userWatchList.targetAppend = document.getElementById("watchList");
        // userWatchList.listStock;
        // console.log("userWatchList.listStock: ", userWatchList.listStock);
        // userWatchList.ListStockData;
        // console.log(
        //     "userWatchList.listStockData: ",
        //     userWatchList.listStockData
        // );
    }, 200);

    // console.log("userWatchList: ", userWatchList);
});
