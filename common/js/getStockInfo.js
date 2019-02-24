class stockInfo {
    constructor(stockCode = "") {
        var _this = this;
        _this.stockCode = stockCode.toUpperCase();
        _this.getIntradayQuotes();
        _this.getHistoricalQuotes();
    }

    getIntradayQuotes() {
        var _this = this;
        var log = "Intraday Quotes: " + _this.stockCode;
        console.log(log);

        var url =
            "https://www.fireant.vn/api/Data/Markets/IntradayQuotes?symbol=" +
            _this.stockCode;

        makeCorsRequest(url, function(data) {
            _this.currentPrice = data[data.length - 1]["Price"];
            _this.intradayQuotes = data.reverse();
            var filterColumn = [
                // "ID",
                // "Symbol",
                "Date",
                "Price",
                "Volume",
                "TotalVolume",
                "Side"
            ];
            var table = _this.loadIntradayQuotes(
                _this.intradayQuotes,
                filterColumn,
                log
            );

            var targetAppend = document.getElementById(
                "containerIntradayQuotes"
            );

            targetAppend.innerHTML = "";
            targetAppend.appendChild(table);
        });
    }

    getHistoricalQuotes = function(beginDate = null, currentDate = new Date()) {
        var _this = this;
        var log = "Historical Quotes: " + _this.stockCode;
        console.log(log);

        // _this.currentDateString = currentDate.toISOString();
        _this.currentDateString = convertDateString(currentDate);

        if (!beginDate) {
            beginDate = currentDate;
            beginDate.setYear(beginDate.getFullYear() - 1);
        }
        _this.beginDateString = convertDateString(beginDate);

        var url =
            "https://www.fireant.vn/api/Data/Markets/HistoricalQuotes?symbol=" +
            _this.stockCode +
            "&startDate=" +
            _this.beginDateString +
            "&endDate=" +
            _this.currentDateString;

        makeCorsRequest(url, function(data) {
            _this.historicalQuotes = data.reverse();
            var filterColumn = [
                // "Symbol",
                "Date",
                "Open",
                "Close",
                "High",
                "Low",
                "Volume",
                "Value"
            ];
            var table = _this.loadIntradayQuotes(
                _this.historicalQuotes,
                filterColumn,
                log
            );

            var targetAppend = document.getElementById(
                "containerHistoricalQuotes"
            );
            targetAppend.innerHTML = "";
            targetAppend.appendChild(table);
        });
    };

    loadIntradayQuotes(
        data = null,
        filterColumn = [],
        caption = null,
        timeFormat = ""
    ) {
        var appendParent = document.getElementById("containerLoading");
        var table = document.createElement("table");

        var tableKeys = Object.keys(data[0]);
        var filterLength = filterColumn.length;
        if (filterLength) {
            tableKeys = filterColumn;
        }

        var titleRow = document.createElement("tr");
        tableKeys.forEach(key => {
            var th = document.createElement("th");
            th.innerText = key;
            titleRow.appendChild(th);
        });

        var tableHead = document.createElement("thead");
        tableHead.appendChild(titleRow);
        table.appendChild(tableHead);

        var tableBody = document.createElement("tbody");

        data.forEach(item => {
            var row = document.createElement("tr");
            tableKeys.forEach(key => {
                var td = document.createElement("td");

                if (key.search("Date") != -1) {
                    var date = new Date(item[key]);
                    item[key] = date.toLocaleString();
                }

                td.innerText = !isNaN(item[key])
                    ? Math.round(item[key])
                    : item[key];
                row.appendChild(td);
            });
            tableBody.appendChild(row);
        });

        table.appendChild(tableBody);

        if (caption) {
            var captionEl = document.createElement("caption");
            captionEl.innerText = caption;
            table.appendChild(captionEl);
        }

        return table;
    }
}
