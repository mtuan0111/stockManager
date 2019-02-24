function stockInfo(stockCode = "") {
    var _this = this;
    _this.stockCode = stockCode;

    var currentDate = new Date();
    _this.currentDateString = currentDate.toISOString();
    _this.currentDateString = _this.currentDateString.slice(
        0,
        _this.currentDateString.search("T")
    );

    beginDate = currentDate;
    // beginDate.setFullYear = beginDate.getFullYear() - 1;
    beginDate.setYear(beginDate.getFullYear() - 1);
    _this.beginDateString = beginDate.toISOString();
    _this.beginDateString = _this.beginDateString.slice(
        0,
        _this.beginDateString.search("T")
    );

    // console.log("_this.beginDateString: ", _this.beginDateString);
    this.getIntradayQuotes();
    this.getHistoricalQuotes();
}

stockInfo.prototype.getIntradayQuotes = function() {
    var _this = this;
    url =
        "https://www.fireant.vn/api/Data/Markets/IntradayQuotes?symbol=" +
        _this.stockCode;

    makeCorsRequest(url, function(data) {
        _this.currentPrice = data[data.length - 1]["Price"];
        _this.intradayQuotes = data;
        table = _this.loadIntradayQuotes(data);

        targetAppend = document.getElementById("containerIntradayQuotes");
        targetAppend.appendChild(table);
    });
};

stockInfo.prototype.getHistoricalQuotes = function(
    beginDate = this.beginDateString,
    currentDate = this.currentDateString
) {
    var _this = this;
    url =
        "https://www.fireant.vn/api/Data/Markets/HistoricalQuotes?symbol=" +
        _this.stockCode +
        "&startDate=" +
        beginDate +
        "&endDate=" +
        currentDate;

    makeCorsRequest(url, function(data) {
        _this.historicalQuotes = data;
        table = _this.loadIntradayQuotes(data);

        targetAppend = document.getElementById("containerHistoricalQuotes");
        targetAppend.appendChild(table);
    });
};

stockInfo.prototype.loadIntradayQuotes = function(data = null) {
    appendParent = document.getElementById("containerLoading");
    table = document.createElement("table");

    tableKeys = Object.keys(data[0]);
    titleRow = document.createElement("tr");
    tableKeys.forEach(key => {
        th = document.createElement("th");
        th.innerText = key;
        titleRow.appendChild(th);
    });
    table.appendChild(titleRow);

    data.forEach(item => {
        row = document.createElement("tr");
        tableKeys.forEach(key => {
            td = document.createElement("td");
            td.innerText = item[key];
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    return table;
};
