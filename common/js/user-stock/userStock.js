class userStock extends stockInfo {
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
        super(
            stockCode,
            stockCodeInputElement,
            currentIntradayPriceElement,
            currentIntradayPricePercentElement,
            maxIntradayPriceElement,
            maxIntradayPricePercentElement,
            minIntradayPriceElement,
            minIntradayPricePercentElement,
            openIntradayPriceElement,
            openIntradayPricePercentElement,
            roofIntradayPriceElement,
            floorIntradayPriceElement,
            referenceIntradayPriceElement,
            intraDayQuotesTableElement,
            historicalQuotesTableElement
        );
    }

    set boughtDetails(bought) {
        var stockCode = isset(bought[0]) ? bought[0] : 0;
        var price = isset(bought[1]) ? bought[1] : 0;
        var quantity = isset(bought[2]) ? bought[2] : 0;
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

    get profitValue() {
        var _this = this;
        if (!isset(_this._boughtDetails)) {
            return 0;
        }

        var totalCurrentValue =
            _this.currentPrice.value * _this.boughtDetails.quantity;

        console.log("this.currentPrice : ", this.currentPrice);

        console.log("totalCurrentValue: ", totalCurrentValue);

        var totalBoughtValue = _this.boughtDetails.totalBoughtValue;

        return totalCurrentValue - totalBoughtValue;
    }
}
