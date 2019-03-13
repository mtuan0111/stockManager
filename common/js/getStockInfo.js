class stockInfo {
    constructor(
        stockCode = "ACB",
        stockCodeInputElement = null,
        currentIntradayPriceElement = null,
        currentIntradayPricePercentElement = null,
        maxIntradayPriceElement = null,
        maxIntradayPricePercentElement = null,
        minIntradayPriceElement = null,
        minIntradayPricePercentElement = null,
        openIntradayPriceElement = null,
        openIntradayPricePercentElement = null,
        roofIntradayPriceElement = null,
        floorIntradayPriceElement = null,
        referenceIntradayPriceElement = null,
        intraDayQuotesTableElement = null,
        historicalQuotesTableElement = null
    ) {
        // var _this = this;
        var params = stockCode;

        if (params.stockCodeInputElement) {
            this.stockCodeInputElement = params.stockCodeInputElement;
        }

        if (params.currentIntradayPriceElement) {
            this.currentIntradayPriceElement =
                params.currentIntradayPriceElement;
        }

        if (params.currentIntradayPricePercentElement) {
            this.currentIntradayPricePercentElement =
                params.currentIntradayPricePercentElement;
        }

        if (params.maxIntradayPriceElement) {
            this.maxIntradayPriceElement = params.maxIntradayPriceElement;
        }

        if (params.maxIntradayPricePercentElement) {
            this.maxIntradayPricePercentElement =
                params.maxIntradayPricePercentElement;
        }
        if (params.minIntradayPriceElement) {
            this.minIntradayPriceElement = params.minIntradayPriceElement;
        }

        if (params.minIntradayPricePercentElement) {
            this.minIntradayPricePercentElement =
                params.minIntradayPricePercentElement;
        }

        if (params.openIntradayPriceElement) {
            this.openIntradayPriceElement = params.openIntradayPriceElement;
        }

        if (params.openIntradayPricePercentElement) {
            this.openIntradayPricePercentElement =
                params.openIntradayPricePercentElement;
        }

        if (params.roofIntradayPriceElement) {
            this.roofIntradayPriceElement = params.roofIntradayPriceElement;
        }

        if (params.floorIntradayPriceElement) {
            this.floorIntradayPriceElement = params.floorIntradayPriceElement;
        }

        if (params.referenceIntradayPriceElement) {
            this.referenceIntradayPriceElement =
                params.referenceIntradayPriceElement;
        }

        if (params.intraDayQuotesTableElement) {
            this.intraDayQuotesTableElement = params.intraDayQuotesTableElement;
        }

        if (params.historicalQuotesTableElement) {
            this.historicalQuotesTableElement =
                params.historicalQuotesTableElement;
        }

        // Load quotes

        if (params.stockCode) {
            this.searchStock(params.stockCode);
        }
    }

    set stockCode(stockCode) {
        if (this._stockCode != stockCode) {
            this._stockCode = stockCode;
            this.stockCodeInput = stockCode;
            // console.log("stockCode: ", stockCode);
        }
    }

    get stockCode() {
        var _this = this;
        return _this._stockCode;
    }

    set stockBoughtPrice(Price) {
        if (this._stockBoughtPrice != Price) {
            this._stockBoughtPrice = Price;
        }
    }

    get stockBoughtPrice() {
        var _this = this;
        return _this._stockBoughtPrice;
    }

    set stockCodeInputElement(el) {
        if (this._stockCodeInputElement != el) {
            this._stockCodeInputElement = el;
        }
    }

    get stockCodeInputElement() {
        var _this = this;
        if (isset(_this._stockCodeInputElement))
            return _this._stockCodeInputElement;
        return null;
    }

    set stockCodeInput(stockCode) {
        var _this = this;

        if (_this.stockCodeInputElement) {
            // _this.stockCodeInputElement.value = stockCode;
            setValueElement(_this.stockCodeInputElement, stockCode);
            // _this.stockCodeInputElement.focus();
        }
    }

    // get stockCodeInput() {
    //     var inputElement = document.getElementsByName("stockCode")[0];
    //     return inputElement;
    // }

    set currentPrice(price) {
        var _this = this;
        _this._currentPrice = price;

        if (isset(_this.currentIntradayPriceElement)) {
            var inputElement = _this.currentIntradayPriceElement;
            // inputElement.setAttribute("value", price.value);
            // console.log("inputElement: ", inputElement);
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.currentIntradayPricePercentElement)) {
            var inputElementPercent = _this.currentIntradayPricePercentElement;
            // inputElementPercent.innerText = price.increasePercent + "%";
            // inputElementPercent.setAttribute(
            //     "data-value",
            //     price.increasePercent
            // );
            setValueElement(inputElementPercent, price.increasePercent);
        }
    }

    get currentPrice() {
        var _this = this;
        if (!isset(_this._currentPrice)) return 0;
        return _this._currentPrice;
    }

    set maxPrice(price) {
        var _this = this;
        _this._maxPrice = price;

        if (isset(_this.maxIntradayPriceElement)) {
            var inputElement = _this.maxIntradayPriceElement;
            // inputElement.setAttribute("value", price.value);
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.maxIntradayPricePercentElement)) {
            var inputElementPercent = _this.maxIntradayPricePercentElement;

            // inputElementPercent.innerText = price.increasePercent + "%";
            // inputElementPercent.setAttribute(
            //     "data-value",
            //     price.increasePercent
            // );
            setValueElement(inputElementPercent, price.increasePercent);
        }
    }

    get maxPrice() {
        var _this = this;
        if (!isset(_this._maxPrice)) return 0;
        return _this._maxPrice;
    }

    set minPrice(price) {
        var _this = this;
        _this._minPrice = price;

        if (isset(_this.minIntradayPriceElement)) {
            var inputElement = _this.minIntradayPriceElement;
            // inputElement.setAttribute("value", price.value);
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.minIntradayPricePercentElement)) {
            var inputElementPercent = _this.minIntradayPricePercentElement;
            // inputElementPercent.innerText = price.increasePercent + "%";
            // inputElementPercent.setAttribute(
            //     "data-value",
            //     price.increasePercent
            // );
            setValueElement(inputElementPercent, price.increasePercent);
        }
    }

    get minPrice() {
        var _this = this;
        if (!isset(_this._minPrice)) return 0;
        return _this._minPrice;
    }

    set openPrice(price) {
        var _this = this;
        this._openPrice = price;

        if (isset(_this.openIntradayPriceElement)) {
            var inputElement = _this.openIntradayPriceElement;
            // inputElement.setAttribute("value", price.value);
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.openIntradayPricePercentElement)) {
            var inputElementPercent = _this.openIntradayPricePercentElement;
            // inputElementPercent.innerText = price.increasePercent + "%";
            // inputElementPercent.setAttribute(
            //     "data-value",
            //     price.increasePercent
            // );
            setValueElement(inputElementPercent, price.increasePercent);
        }
    }

    get openPrice() {
        var _this = this;
        if (!isset(_this._openPrice)) return 0;
        return _this._openPrice;
    }

    get roofPrice() {
        // return 0;
        var _this = this;
        if (!isset(_this._referencePrice)) {
            return 0;
        }
        return Math.floor((_this._referencePrice / 100) * 1.07) * 100;
    }

    get floorPrice() {
        // return 0;
        var _this = this;
        if (!isset(_this._referencePrice)) {
            return 0;
        }
        return Math.floor((_this._referencePrice / 100) * 0.93) * 100;
    }

    set referencePrice(price) {
        var _this = this;
        this._referencePrice = price;

        if (isset(_this.roofIntradayPriceElement)) {
            var inputElement = _this.roofIntradayPriceElement;
            // inputElement.innerText = _this.roofPrice;
            // inputElement.setAttribute("value", _this.roofPrice);
            setValueElement(inputElement, _this.roofPrice);
        }

        if (isset(_this.floorIntradayPriceElement)) {
            var inputElement = _this.floorIntradayPriceElement;
            // inputElement.innerText = _this.floorPrice;
            // inputElement.setAttribute("value", _this.floorPrice);
            setValueElement(inputElement, _this.floorPrice);
        }

        if (isset(_this.referenceIntradayPriceElement)) {
            var inputElement = _this.referenceIntradayPriceElement;
            // inputElement.setAttribute("value", price);
            setValueElement(inputElement, price);
        }
    }

    get intradayQuotes() {
        var _this = this;
        if (!isset(this._intradayQuotes)) {
            this._intradayQuotes = new intraDay(_this.stockCode);
        } else {
            this._intradayQuotes.stockCode = _this.stockCode;
        }

        if (isset(_this.intraDayQuotesTableElement)) {
            this._intradayQuotes.targetAppend =
                _this.intraDayQuotesTableElement;
        }
        // console.log("this._intradayQuotes: ", this._intradayQuotes);
        // if (isset(this._intradayQuotes.intervalLoop)) {
        //     clearInterval(this._intradayQuotes.intervalLoop);
        // }
        this._intradayQuotes.getIntradayQuotes(function(data) {
            // console.log("_this. this h", _this);
            if (data && _this._intradayQuotes) {
                _this.currentPrice = _this._intradayQuotes.latestPrice;
                _this.maxPrice = _this._intradayQuotes.maxPrice;
                _this.minPrice = _this._intradayQuotes.minPrice;
                _this.openPrice = _this._intradayQuotes.firstPrice;
                _this.referencePrice = _this._intradayQuotes.referencePrice;
                _this.distinctPrice = _this._intradayQuotes.arrayDistinctPrice;
            }
        }, 1);
        return this._intradayQuotes;
    }

    get historicalQuotes() {
        var _this = this;
        if (!isset(_this._historicalQuotes)) {
            _this._historicalQuotes = new historicalQuotes(_this.stockCode);
        } else {
            console.log("Update historical: ", _this.stockCode);
            _this._historicalQuotes.stockCode = _this.stockCode;
        }

        if (isset(_this.historicalQuotesTableElement)) {
            _this._historicalQuotes.targetAppend =
                _this.historicalQuotesTableElement;
        }

        _this._historicalQuotes.getHistoricalQuotes(function(data) {}, 1);
        return true;
    }

    searchStock(stockCode) {
        this.stockCode = stockCode.toUpperCase();
        // setInterval(() => {
        this.intradayQuotes;
        // }, interval);
        this.historicalQuotes;
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
