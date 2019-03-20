class stockList {
    constructor({ listStockCode, targetAppend }) {
        super();
        this.targetAppend = targetAppend;
        this.listStockCode = listStockCode;
        this.listStock = listStockCode;
    }

    set targetAppend(element) {
        this._targetAppend = element;
    }

    get targetAppend() {
        var _this = this;
        if (isset(_this._targetAppend)) {
            return _this._targetAppend;
        }
        return null;
    }

    set listStockCode(list) {
        if (list.length > 1) {
            this._listStockCode = list;
        } else this._listStockCode = [];
    }

    get listStockCode() {
        var _this = this;
        return _this._listStockCode;
    }

    get listStock() {
        var _this = this;
        return _this._listStock;
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
            "Symbol",
            "Current price",
            "Max price",
            "Min price",
            "Open price",
            "Reference price"
        ];
    }
}
