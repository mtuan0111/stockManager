class intraDay {
    constructor(stockCode) {
        var _this = this;
        _this.stockCode = stockCode;
        _this.referencePrice;
    }

    set stockCode(code) {
        var _this = this;
        _this._stockCode = code;
    }

    get stockCode() {
        var _this = this;
        return _this._stockCode;
    }

    get url() {
        var _this = this;
        return (
            "https://www.fireant.vn/api/Data/Markets/IntradayQuotes?symbol=" +
            _this.stockCode
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
        return "Intraday Quotes: " + _this.stockCode;
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
            // "ID",
            // "Symbol",
            "Date",
            "Price",
            "Volume",
            // "TotalVolume",
            "Side"
        ];
    }

    set intradayQuotes(array) {
        this._intradayQuotes = array;
    }

    get intradayQuotes() {
        var _this = this;
        if (isset(_this._intradayQuotes)) {
            return _this._intradayQuotes;
        }
        return null;
    }

    get latestPrice() {
        var _this = this;

        var column = "Price";
        var data = _this.intradayQuotes;

        var priceResult =
            _this.intradayQuotes[_this.intradayQuotes.length - 1][column];
        var increasePercent = roundPercent(
            comparePercent(_this.referencePrice, priceResult)
        );

        var result = {
            value: priceResult,
            increasePercent: increasePercent
        };

        return result;
    }

    get firstPrice() {
        var _this = this;

        var column = "Price";
        var data = _this.intradayQuotes;
        var priceResult = _this.intradayQuotes[0][column];

        var increasePercent = roundPercent(
            comparePercent(_this.referencePrice, priceResult)
        );

        var result = {
            value: priceResult,
            increasePercent: increasePercent
        };

        return result;
    }

    get maxPrice() {
        var _this = this;
        var column = "Price";
        var data = _this.intradayQuotes;

        var priceResult = getMaxOfArray(getCol(data, column));
        var increasePercent = roundPercent(
            comparePercent(_this.referencePrice, priceResult)
        );

        var result = {
            value: priceResult,
            increasePercent: increasePercent
        };

        return result;
    }

    get minPrice() {
        var _this = this;
        var column = "Price";
        var data = _this.intradayQuotes;

        var priceResult = getMinOfArray(getCol(data, column));
        var increasePercent = roundPercent(
            comparePercent(_this.referencePrice, priceResult)
        );

        var result = {
            value: priceResult,
            increasePercent: increasePercent
        };

        return result;
    }

    get referencePrice() {
        var _this = this;
        if (isset(_this._referencePrice)) return _this._referencePrice;
        else {
            var refSelectHistoricalPrice = new historicalQuotes(this.stockCode);
            var beginDate = new Date();
            beginDate.setDate(beginDate.getDate() - 5);
            refSelectHistoricalPrice.beginDateString = beginDate;
            refSelectHistoricalPrice.getHistoricalQuotes(function() {
                // var lenghtHistoricalQuotes =
                //     refSelectHistoricalPrice.historicalQuotes.length;

                _this._referencePrice =
                    refSelectHistoricalPrice.historicalQuotes[1]["Close"];
            });
            return _this._referencePrice;
        }
    }

    get arrayDistinctPrice() {
        var _this = this;
        var column = "Price";
        var data = getCol(_this.intradayQuotes, "Price");

        var index = 0;

        while (data[index] && data[index + 1]) {
            if (data[index] == data[index + 1]) {
                data.splice(index + 1, 1);
            } else index++;
        }

        return data;
        // data.forEach(element => {});
        // return Array.from(new Set(data.map(s => s.Price)));
    }

    set targetAppend(element) {
        this._targetAppend = element;
    }

    get targetAppend() {
        if (isset(this._targetAppend)) {
            return this._targetAppend;
        }

        // throw new Error("You are not select the table element yet!");
        return null;
        // return document.getElementById("containerIntradayQuotes");
    }

    set targetChart(element) {
        var _this = this;
        _this._targetChart = element;
    }

    get targetChart() {
        if (isset(this._targetChart)) {
            return this._targetChart;
        }
        return document.getElementById("IntradayChart");
    }

    getIntradayQuotes(callback, appendTable = 0, stockCode2 = this.stockCode) {
        var _this = this;
        setInterval(function(stockCode33 = stockCode2) {
            // _this = this;
            // console.log("stock", stock);
            // console.log("_this.url: ", _this.url);
            // console.log("this: ", _this);
            // var url =
            //     "https://www.fireant.vn/api/Data/Markets/IntradayQuotes?symbol=" +
            //     stockCode;
            // console.log("stockCode: ", stockCode33);
            var getData = new getDataURL(_this.url);
            getData.makeCorsRequest(function(data) {
                _this.intradayQuotes = data;

                if (
                    appendTable &&
                    isset(_this.targetAppend) &&
                    _this.targetAppend
                ) {
                    var table = loadIntradayQuotes(
                        _this.intradayQuotes.slice(0).reverse(),
                        _this.filterColumn,
                        _this.log,
                        dateToLocaleTimeString
                    );
                    // Append table
                    var targetAppend = _this.targetAppend;

                    targetAppend.innerHTML = "";
                    targetAppend.appendChild(table);
                }
                // // Append chart
                // var targetChart = _this.targetChart;

                // // targetAppend.innerHTML = "";
                // var charDataSliced = _this.intradayQuotes.reverse();
                // var chartData = getCol(charDataSliced, "Price");
                // var chartLabel = getCol(charDataSliced, "Date");
                // var chart = new ChartDrawing(targetChart, chartLabel, chartData);

                // callBack
                callback(data);
            });
        }, TIME_REFRESH_DATA);
        return true;
    }
}
