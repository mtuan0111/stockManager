class userStock extends stockInfo {
    constructor(stockCode = {}, userstockElement = {}) {
        super(stockCode);

        var userParam = userstockElement;

        if (isset(userParam.boughtValueTableElement)) {
            this.boughtValueElement = userParam.boughtValueTableElement;
        }

        if (isset(userParam.quantityBoughtTableElement)) {
            this.quantityBoughtElement = userParam.quantityBoughtTableElement;
        }

        if (isset(userParam.totalBoughtValueTableElement)) {
            this.totalBoughtValueElement =
                userParam.totalBoughtValueTableElement;
        }

        if (isset(userParam.totalCurrentValueTableElement)) {
            this.totalCurrentValueElement =
                userParam.totalCurrentValueTableElement;
        }

        if (isset(userParam.profitValueTableElement)) {
            this.profitValueElement = userParam.profitValueTableElement;
        }

        // if (isset(userParam.totalboughtValueTablePercentElement)) {
        //     this.totalboughtValueTablePercentElement =
        //         userParam.totalboughtValueTablePercentElement;
        // }
    }

    get tradeBuyFee() {
        return 3 / 100;
    }

    get tradeSaleFee() {
        return 3 / 100;
    }

    set boughtDetails(bought) {
        var stockCode = isset(bought.code) ? bought.code : 0;
        var price = isset(bought.price) ? bought.price : 0;
        var quantity = isset(bought.quantity) ? bought.quantity : 0;

        this._boughtDetails = new boughtInfo(
            stockCode,
            price,
            quantity,
            new Date()
        );
    }

    get boughtDetails() {
        var _this = this;

        return _this._boughtDetails;
    }

    get boughtValue() {
        var _this = this;

        var resultValue = _this.boughtDetails.price;

        if (isset(_this.boughtValueElement)) {
            var inputElement = _this.boughtValueElement;
            setValueElement(inputElement, resultValue);
        }

        return resultValue;
    }

    get quantityBought() {
        var _this = this;

        var resultValue = _this.boughtDetails.quantity;

        if (isset(_this.quantityBoughtElement)) {
            var inputElement = _this.quantityBoughtElement;
            setValueElement(inputElement, resultValue);
        }

        return resultValue;
    }

    get totalBoughtValue() {
        var _this = this;

        var resultValue = _this.boughtValue * _this.quantityBought;

        if (isset(_this.totalBoughtValueElement)) {
            var inputElement = _this.totalBoughtValueElement;
            setValueElement(inputElement, resultValue);
        }

        // if (isset(_this.totalBoughtValuePercentElement)) {
        //     var inputElementPercent = _this.totalBoughtValuePercentElement;
        //     setValueElement(inputElementPercent, price.increasePercent);
        // }

        return resultValue;
    }

    get totalCurrentValue() {
        var _this = this;
        var resultValue = _this.currentPrice.value * _this.quantityBought;

        if (isset(_this.totalCurrentValueElement)) {
            var inputElement = _this.totalCurrentValueElement;
            setValueElement(inputElement, resultValue);
        }

        return resultValue;
    }

    // get totalBoughtValue() {
    //     var _this = this;
    //     return _this.boughtDetails.price * _this.boughtDetails.quantity;
    // }

    //

    get profitValue() {
        var _this = this;

        if (!isset(_this._boughtDetails)) {
            return 0;
        }

        var resultValue = _this.totalCurrentValue - _this.totalBoughtValue;

        if (isset(_this.profitValueElement)) {
            var inputElement = _this.profitValueElement;
            setValueElement(inputElement, resultValue);
        }

        return resultValue;
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

        var getData = this._intradayQuotes.getIntradayQuotes(
            function(data) {
                if (data && _this._intradayQuotes) {
                    this.currentPrice = _this._intradayQuotes.latestPrice;
                    this.maxPrice = _this._intradayQuotes.maxPrice;
                    this.minPrice = _this._intradayQuotes.minPrice;
                    this.openPrice = _this._intradayQuotes.firstPrice;
                    this.referencePrice = _this._intradayQuotes.referencePrice;
                    this.distinctPrice =
                        _this._intradayQuotes.arrayDistinctPrice;
                }
                // this.boughtValue;
                // this.quantityBought;
                // this.totalBoughtValue;
                // this.totalCurrentValue;
                this.profitValue;
            },
            1,
            this
        );

        getData;
        return this._intradayQuotes;
    }
}
