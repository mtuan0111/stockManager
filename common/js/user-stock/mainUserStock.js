jsFilesImport = [
    "constant.js",
    "stockHelper.js",
    "getDataURL.js",
    "extention.js",
    "stockInfo.js",

    "user-stock/boughtInfo.js",
    "user-stock/userStock.js",
    "user-stock/user.js",
    // "chartDrawing.js",
    "intraDay.js",
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
        var bom = new user({ username: "BomNguyen" });

        // setInterval(function() {
        //     bom.generateStockList();
        // }, 500);
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
