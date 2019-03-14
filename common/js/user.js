class user {
    constructor({ name = "" }) {
        this.name = name;
    }

    set name(val) {
        this._name = name;
    }

    get name() {
        var _this = this;
        return _this._name;
    }
}
