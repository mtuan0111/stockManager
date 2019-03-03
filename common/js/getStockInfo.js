class stockInfo {
    constructor(stockCode = "") {
        var _this = this;
        _this.stockCode = stockCode.toUpperCase();
        _this.intradayQuotes;
        _this.historicalQuotes;
    }

    set stockCode(stockCode) {
        var _this = this;
        _this._stockCode = stockCode;
        _this.stockCodeInput = stockCode;
    }

    get stockCode() {
        var _this = this;
        return _this._stockCode;
    }

    set stockCodeInput(stockCode) {
        var _this = this;
        _this.stockCodeInput.value = stockCode;
        _this.stockCodeInput.focus();
    }

    get stockCodeInput() {
        var inputElement = document.getElementsByName("stockCode")[0];
        return inputElement;
    }

    set currentPrice(price) {
        var _this = this;
        var inputElement = document.getElementsByClassName(
            "currentIntradayPrice"
        )[0];

        var inputElementPercent = document.getElementsByClassName(
            "currentIntradayPricePercent"
        )[0];

        _this._currentPrice = price;
        inputElement.setAttribute("value", price.value);
        inputElementPercent.innerText = price.increasePercent + "%";
        inputElementPercent.setAttribute("data-value", price.increasePercent);
    }

    get currentPrice() {
        var _this = this;
        if (typeof _this._currentPrice != "undefined") return 0;
        return _this._currentPrice;
    }

    set maxPrice(price) {
        var _this = this;
        var inputElement = document.getElementsByClassName(
            "maxIntradayPrice"
        )[0];

        var inputElementPercent = document.getElementsByClassName(
            "maxIntradayPricePercent"
        )[0];

        _this._maxPrice = price;
        inputElement.setAttribute("value", price.value);
        inputElementPercent.innerText = price.increasePercent + "%";
        inputElementPercent.setAttribute("data-value", price.increasePercent);
    }

    get maxPrice() {
        var _this = this;
        if (typeof _this._maxPrice != "undefined") return 0;
        return _this._maxPrice;
    }

    set minPrice(price) {
        var _this = this;
        var inputElement = document.getElementsByClassName(
            "minIntradayPrice"
        )[0];

        var inputElementPercent = document.getElementsByClassName(
            "minIntradayPricePercent"
        )[0];

        _this._minPrice = price;
        inputElement.setAttribute("value", price.value);
        inputElementPercent.innerText = price.increasePercent + "%";
        inputElementPercent.setAttribute("data-value", price.increasePercent);
    }

    get minPrice() {
        var _this = this;
        if (typeof _this._minPrice != "undefined") return 0;
        return _this._minPrice;
    }

    set openPrice(price) {
        var _this = this;
        var inputElement = document.getElementsByClassName(
            "openIntradayPrice"
        )[0];

        var inputElementPercent = document.getElementsByClassName(
            "openIntradayPricePercent"
        )[0];

        this._openPrice = price;
        inputElement.setAttribute("value", price.value);
        inputElementPercent.innerText = price.increasePercent + "%";
        inputElementPercent.setAttribute("data-value", price.increasePercent);
    }

    get openPrice() {
        var _this = this;
        if (typeof _this._openPrice != "undefined") return 0;
        return _this._openPrice;
    }

    set referencePrice(price) {
        var _this = this;
        var inputElement = document.getElementsByClassName(
            "referenceIntradayPrice"
        )[0];

        this._referencePrice = price;
        inputElement.setAttribute("value", price);
    }

    get intradayQuotes() {
        var _this = this;
        this._intradayQuotes = new intraDay(this.stockCode);
        this._intradayQuotes.getIntradayQuotes(function(data) {
            _this.currentPrice = _this._intradayQuotes.latestPrice;
            _this.maxPrice = _this._intradayQuotes.maxPrice;
            // console.log("_this.maxPrice: ", _this.maxPrice);
            // console.log("_this._intradayQuotes.maxPrice: ", _this._intradayQuotes.maxPrice);
            _this.minPrice = _this._intradayQuotes.minPrice;
            _this.openPrice = _this._intradayQuotes.firstPrice;
            _this.referencePrice = _this._intradayQuotes.referencePrice;
            console.log("_this.openPrice: ", _this.openPrice);
            _this.distinctPrice = _this._intradayQuotes.arrayDistinctPrice;
        }, 1);
        return this._intradayQuotes;
    }

    get historicalQuotes() {
        var _this = this;
        this._historicalQuotes = new historicalQuotes(this.stockCode);
        this._historicalQuotes.getHistoricalQuotes(function(table) {}, 1);
        return true;
    }
    // getIntradayQuotes() {
    //     var _this = this;
    //     var log = "Intraday Quotes: " + _this.stockCode;

    //     var url =
    //         "https://www.fireant.vn/api/Data/Markets/IntradayQuotes?symbol=" +
    //         _this.stockCode;

    //     var getData = new getDataURL(url);

    //     getData.makeCorsRequest(function(data) {
    //         _this.currentPrice = data[data.length - 1]["Price"];
    //         _this.intradayQuotes = data.reverse();
    //         var filterColumn = [
    //             // "ID",
    //             // "Symbol",
    //             "Date",
    //             "Price",
    //             "Volume",
    //             "TotalVolume",
    //             "Side"
    //         ];
    //         var table = loadIntradayQuotes(
    //             _this.intradayQuotes,
    //             filterColumn,
    //             log
    //         );

    //         // Append table
    //         var targetAppend = document.getElementById(
    //             "containerIntradayQuotes"
    //         );

    //         targetAppend.innerHTML = "";
    //         targetAppend.appendChild(table);

    //         // Append chart
    //         var targetChart = document.getElementById("IntradayChart");

    //         // targetAppend.innerHTML = "";
    //         var charDataSliced = _this.intradayQuotes.reverse();
    //         var chartData = getCol(charDataSliced, "Price");
    //         var chartLabel = getCol(charDataSliced, "Date");
    //         var chart = new ChartDrawing(targetChart, chartLabel, chartData);
    //     });
    //     return true;
    // }

    // getHistoricalQuotes(beginDate = null, currentDate = new Date()) {
    //     var _this = this;
    //     var log = "Historical Quotes: " + _this.stockCode;

    //     // _this.currentDateString = currentDate.toISOString();
    //     _this.currentDateString = convertDateString(currentDate);

    //     if (!beginDate) {
    //         beginDate = currentDate;
    //         beginDate.setYear(beginDate.getFullYear() - 1);
    //     }
    //     _this.beginDateString = convertDateString(beginDate);

    //     var url =
    //         "https://www.fireant.vn/api/Data/Markets/HistoricalQuotes?symbol=" +
    //         _this.stockCode +
    //         "&startDate=" +
    //         _this.beginDateString +
    //         "&endDate=" +
    //         _this.currentDateString;

    //     var getData = new getDataURL(url);

    //     getData.makeCorsRequest(function(data) {
    //         _this.historicalQuotes = data.reverse();
    //         var filterColumn = [
    //             // "Symbol",
    //             "Date",
    //             "Open",
    //             "Close",
    //             "High",
    //             "Low",
    //             "Volume",
    //             "Value"
    //         ];
    //         var table = loadIntradayQuotes(
    //             _this.historicalQuotes,
    //             filterColumn,
    //             log
    //         );

    //         var targetAppend = document.getElementById(
    //             "containerHistoricalQuotes"
    //         );

    //         // Append table
    //         targetAppend.innerHTML = "";
    //         targetAppend.appendChild(table);

    //         // Append chart
    //         var targetChart = document.getElementById("HistoricalChart");

    //         // targetAppend.innerHTML = "";
    //         var charDataSliced = _this.historicalQuotes.reverse();
    //         var chartData = getCol(charDataSliced, "Close");
    //         var chartLabel = getCol(charDataSliced, "Date");
    //         var chart = new ChartDrawing(targetChart, chartLabel, chartData);
    //     });

    //     return true;
    // }
}
