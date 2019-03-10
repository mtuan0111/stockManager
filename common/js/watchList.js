class watchList {
    constructor(listStock) {
        this.listStock = listStock;
    }

    set listStock(list) {
        // this._listStock = list;
        if (list.length > 1) {
            console.log(list);
            this._listStock = list;
        }
        this._listStock = [];
    }

    get listStock() {
        var _this = this;
        return _this.listStock;
    }
}
