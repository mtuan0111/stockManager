class boughtInfo {
    constructor(stockCode, price, quantity, date) {
        this.stockCode = stockCode;
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }

    set stockCode(val) {
        this._stockCode = val;
    }

    get stockCode() {
        var _this = this;
        return _this._stockCode;
    }

    set price(val) {
        this._price = val;
    }

    get price() {
        var _this = this;
        return _this._price;
    }

    set quantity(val) {
        this._quantity = val;
    }

    get quantity() {
        var _this = this;
        return _this._quantity;
    }
    set date(val) {
        this._date = val;
    }

    get date() {
        var _this = this;
        return _this._date;
    }

    get totalBoughtValue() {
        var _this = this;
        return _this.price * _this.quan;
    }
}
