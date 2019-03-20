class userBehavior {
    constructor() {
        var _this = this;
        _this.searchingStock = "ACB";
    }

    set searchingStock(stockCode) {
        var _this = this;
        if (!isset(this._searchingStock)) {
            this._searchingStock = new stockInfo({
                stockCode: stockCode,
                stockCodeInputElement: _this.inputStockCode,

                currentIntradayPriceElement: _this.currentIntradayPrice,
                currentIntradayPricePercentElement:
                    _this.currentIntradayPricePercent,

                maxIntradayPriceElement: _this.maxIntradayPrice,
                maxIntradayPricePercentElement: _this.maxIntradayPricePercent,

                minIntradayPriceElement: _this.minIntradayPrice,
                minIntradayPricePercentElement: _this.minIntradayPricePercent,

                openIntradayPriceElement: _this.openIntradayPrice,
                openIntradayPricePercentElement: _this.openIntradayPricePercent,

                roofIntradayPriceElement: _this.roofIntradayPrice,
                floorIntradayPriceElement: _this.floorIntradayPrice,

                referenceIntradayPriceElement: _this.referenceIntradayPrice,

                intraDayQuotesTableElement: _this.intraDayQuotesTable,
                historicalQuotesTableElement: _this.historicalQuotesTable
            });
        } else {
            this._searchingStock.searchStock(stockCode);
        }
    }

    get inputStockCode() {
        var _this = this;
        if (isset(_this._inputStockCode)) {
            return _this._inputStockCode;
        }
        return document.getElementById("stockCode");
    }

    set inputStockCode(element) {
        this._inputStockCode = element;
    }

    get currentIntradayPrice() {
        var _this = this;
        if (isset(_this._currentIntradayPrice)) {
            return _this._currentIntradayPrice;
        }
        return document.getElementsByClassName("currentIntradayPrice")[0];
    }

    set currentIntradayPrice(element) {
        this._currentIntradayPrice = element;
    }

    get currentIntradayPricePercent() {
        var _this = this;
        if (isset(_this._currentIntradayPricePercent)) {
            return _this._currentIntradayPricePercent;
        }
        return document.getElementsByClassName(
            "currentIntradayPricePercent"
        )[0];
    }

    set currentIntradayPricePercent(element) {
        this._currentIntradayPricePercent = element;
    }

    get maxIntradayPrice() {
        var _this = this;
        if (isset(_this._maxIntradayPrice)) {
            return _this._maxIntradayPrice;
        }
        return document.getElementsByClassName("maxIntradayPrice")[0];
    }

    set maxIntradayPrice(element) {
        this._maxIntradayPrice = element;
    }

    get maxIntradayPricePercent() {
        var _this = this;
        if (isset(_this._maxIntradayPricePercent)) {
            return _this._maxIntradayPricePercent;
        }
        return document.getElementsByClassName("maxIntradayPricePercent")[0];
    }

    set maxIntradayPricePercent(element) {
        this._maxIntradayPricePercent = element;
    }

    get minIntradayPrice() {
        var _this = this;
        if (isset(_this._minIntradayPrice)) {
            return _this._minIntradayPrice;
        }
        return document.getElementsByClassName("minIntradayPrice")[0];
    }

    set minIntradayPrice(element) {
        this._minIntradayPrice = element;
    }
    get minIntradayPricePercent() {
        var _this = this;
        if (isset(_this._minIntradayPricePercent)) {
            return _this._minIntradayPricePercent;
        }
        return document.getElementsByClassName("minIntradayPricePercent")[0];
    }

    set minIntradayPricePercent(element) {
        this._minIntradayPricePercent = element;
    }

    get openIntradayPrice() {
        var _this = this;
        if (isset(_this._openIntradayPrice)) {
            return _this._openIntradayPrice;
        }
        return document.getElementsByClassName("openIntradayPrice")[0];
    }

    set openIntradayPrice(element) {
        this._openIntradayPrice = element;
    }

    get openIntradayPricePercent() {
        var _this = this;
        if (isset(_this._openIntradayPricePercent)) {
            return _this._openIntradayPricePercent;
        }
        return document.getElementsByClassName("openIntradayPricePercent")[0];
    }

    set openIntradayPricePercent(element) {
        this._openIntradayPricePercent = element;
    }

    get referenceIntradayPrice() {
        var _this = this;
        if (isset(_this._referenceIntradayPrice)) {
            return _this._referenceIntradayPrice;
        }
        return document.getElementsByClassName("referenceIntradayPrice")[0];
    }

    set openIntradayPricePercent(element) {
        this._openIntradayPricePercent = element;
    }

    get roofIntradayPrice() {
        var _this = this;
        if (isset(_this.roofrIntradayPrice)) {
            return _this.roofrIntradayPrice;
        }
        return document.getElementsByClassName("roofIntradayPrice")[0];
    }

    set roofIntradayPrice(element) {
        this.roofrIntradayPrice = element;
    }

    get floorIntradayPrice() {
        var _this = this;
        if (isset(_this._floorIntradayPrice)) {
            return _this._floorIntradayPrice;
        }
        return document.getElementsByClassName("floorIntradayPrice")[0];
    }

    set floorIntradayPrice(element) {
        this._floorIntradayPrice = element;
    }

    get referenceIntradayPrice() {
        var _this = this;
        if (isset(_this._referenceIntradayPrice)) {
            return _this._referenceIntradayPrice;
        }
        return document.getElementsByClassName("referenceIntradayPrice")[0];
    }

    set referenceIntradayPrice(element) {
        this._referenceIntradayPrice = element;
    }

    get intraDayQuotesTable() {
        var _this = this;
        if (isset(_this._intraDayQuotesTable)) {
            return _this._intraDayQuotesTable;
        }
        return document.getElementById("containerIntradayQuotes");
    }

    set intraDayQuotesTable(element) {
        this._intraDayQuotesTable = element;
    }

    get historicalQuotesTable() {
        var _this = this;
        if (isset(_this._historicalQuotesTable)) {
            return _this._historicalQuotesTable;
        }
        return document.getElementById("containerHistoricalQuotes");
    }

    set historicalQuotesTable(element) {
        this._historicalQuotesTable = element;
    }

    createSearchEvent() {
        var _this = this;

        var btnSearch = document.getElementById("btnSearch");
        btnSearch.addEventListener("click", function() {
            var inputStockCode = document.getElementsByName("stockCode")[0]
                .value;
            _this.searchingStock = inputStockCode;
        });

        var inputStockCode = document.getElementById("stockCode");
        var stockCodeLength = 3;

        inputStockCode.addEventListener("keyup", function(e) {
            switch (e.keyCode) {
                case 13:
                    btnSearch.click();
                    break;
                default:
                    if (inputStockCode.value.length >= stockCodeLength) {
                        inputStockCode.value = inputStockCode.value.substring(
                            0,
                            stockCodeLength
                        );
                    }
                    break;
            }
        });
    }
}

// function behavior() {
//     this.getMainNavItems();
//     console.log("this.getMainNavItems: ", this.getMainNavItems);
// }

// behavior.prototype.getMainNavItems = function() {
//     _this = this;
//     leftFrame1 = document.getElementsByName("leftFrame1");
//     this.getMainNavItems = _this.iframeRef(leftFrame1[0]);
//     // this.getMainNavItems = this.getMainNavItems.getElementsByTagName("tr");
//     // _this.getMainNavItems = document.get;
// };

// behavior.prototype.iframeRef = function(frameRef) {
//     return frameRef.contentWindow
//         ? frameRef.contentWindow.document
//         : frameRef.contentDocument;
// };

// testBehavior = new behavior();
