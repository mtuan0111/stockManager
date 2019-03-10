class historicalQuotes {
    constructor(stockCode) {
        var _this = this;
        _this.stockCode = stockCode;
    }

    set stockCode(code) {
        var _this = this;
        _this._stockCode = code;
    }

    get stockCode() {
        var _this = this;
        return _this._stockCode;
    }

    get beginDateString() {
        var _this = this;
        if (isset(_this._beginDateString)) return _this._beginDateString;

        var newDate = new Date();
        newDate.setYear(newDate.getFullYear() - 1);

        return convertDateString(newDate);
    }

    set beginDateString(Date) {
        this._beginDateString = convertDateString(Date);
    }

    get currentDateString() {
        return convertDateString(new Date());
    }

    get url() {
        var _this = this;
        return (
            "https://www.fireant.vn/api/Data/Markets/HistoricalQuotes?symbol=" +
            _this.stockCode +
            "&startDate=" +
            _this.beginDateString +
            "&endDate=" +
            _this.currentDateString
        );
    }

    set log(log) {
        this._log = log;
    }

    get log() {
        var _this = this;
        if (isset(_this._log)) {
            return _this._log;
        }
        return "Historical Quotes: " + _this.stockCode;
    }

    set filterColumn(array) {
        this._filterColumn = array;
    }

    get filterColumn() {
        var _this = this;
        if (isset(_this._filterColumn)) {
            return _this._filterColumn;
        }
        return [
            // "Symbol",
            "Date",
            "Open",
            "Close",
            "High",
            "Low",
            "Volume"
            // "Value"
        ];
    }

    set historicalQuotes(array) {
        this._historicalQuotes = array;
    }

    get historicalQuotes() {
        var _this = this;
        if (isset(_this._historicalQuotes)) {
            return _this._historicalQuotes;
        }
        return null;
    }

    // get latestPrice() {
    //     var _this = this;
    //     console.log("_this.historicalQuotes: ", _this.historicalQuotes);
    //     return _this.historicalQuotes[_this.historicalQuotes.length - 1][
    //         "Close"
    //     ];
    // }

    set targetAppend(element) {
        this._targetAppend = element;
    }

    get targetAppend() {
        if (isset(this._targetAppend)) {
            return this._targetAppend;
        }
        return null;
        // return document.getElementById("containerHistoricalQuotes");
    }

    set targetChart(element) {
        var _this = this;
        _this._targetChart = element;
    }

    get targetChart() {
        if (isset(this._targetChart)) {
            return this._targetChart;
        }

        throw new Error("You are not select the table element yet!");
        return null;
        // return document.getElementById("HistoricalChart");
    }

    getHistoricalQuotes(callback, appendTable = 0) {
        var _this = this;

        var getData = new getDataURL(_this.url);

        getData.makeCorsRequest(function(data) {
            // _this.currentPrice = data[data.length - 1]["Price"];
            _this.historicalQuotes = data.reverse();

            if (
                appendTable &&
                isset(_this.targetAppend) &&
                _this.targetAppend
            ) {
                var table = loadIntradayQuotes(
                    _this.historicalQuotes,
                    _this.filterColumn,
                    _this.log,
                    dateToLocaleDateString
                );
                // Append table
                var targetAppend = _this.targetAppend;

                targetAppend.innerHTML = "";
                targetAppend.appendChild(table);
            }

            // // Append chart
            // var targetChart = _this.targetChart;

            // // targetAppend.innerHTML = "";
            // var charDataSliced = _this.historicalQuotes.reverse();
            // var chartData = getCol(charDataSliced, "Close");
            // var chartLabel = getCol(charDataSliced, "Date");
            // var chart = new ChartDrawing(targetChart, chartLabel, chartData);

            // callBack
            callback(data);
        });
        return true;
    }
}
