class user {
    constructor(name) {
        this.name = name;

        this.stock = new userStock({ stockCode: "FLC" });
        this.stock.boughtDetails = ["FLC", 5000, 500];
    }

    set name(val) {
        this._name = name;
    }

    get name() {
        var _this = this;
        return _this._name;
    }

    // set stock(val) {
    //     this._stock = new stockInfo(val);
    // }

    // get stock() {
    //     var _this = this;
    //     return this._stock;
    // }
}
