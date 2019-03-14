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

        if (params.stockCode) {
            this.searchStock(params.stockCode);
        }
    }

    set stockCode(stockCode) {
        if (this._stockCode != stockCode) {
            this._stockCode = stockCode;
            this.stockCodeInput = stockCode;
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
            setValueElement(_this.stockCodeInputElement, stockCode);
            _this.stockCodeInputElement.focus();
        }
    }

    set currentPrice(price) {
        var _this = this;
        _this._currentPrice = price;

        if (isset(_this.currentIntradayPriceElement)) {
            var inputElement = _this.currentIntradayPriceElement;
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.currentIntradayPricePercentElement)) {
            var inputElementPercent = _this.currentIntradayPricePercentElement;
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
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.maxIntradayPricePercentElement)) {
            var inputElementPercent = _this.maxIntradayPricePercentElement;

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
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.minIntradayPricePercentElement)) {
            var inputElementPercent = _this.minIntradayPricePercentElement;
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
            setValueElement(inputElement, price.value);
        }

        if (isset(_this.openIntradayPricePercentElement)) {
            var inputElementPercent = _this.openIntradayPricePercentElement;
            setValueElement(inputElementPercent, price.increasePercent);
        }
    }

    get openPrice() {
        var _this = this;
        if (!isset(_this._openPrice)) return 0;
        return _this._openPrice;
    }

    get roofPrice() {
        var _this = this;
        if (!isset(_this._referencePrice)) {
            return 0;
        }
        return Math.floor((_this._referencePrice / 100) * 1.07) * 100;
    }

    get floorPrice() {
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
            setValueElement(inputElement, _this.roofPrice);
        }

        if (isset(_this.floorIntradayPriceElement)) {
            var inputElement = _this.floorIntradayPriceElement;
            setValueElement(inputElement, _this.floorPrice);
        }

        if (isset(_this.referenceIntradayPriceElement)) {
            var inputElement = _this.referenceIntradayPriceElement;
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
        this._intradayQuotes.getIntradayQuotes(function(data) {
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
        this.intradayQuotes;
        this.historicalQuotes;
    }
}
