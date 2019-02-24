Date.prototype.cutLeftT = function() {
    var _this = this;
    ISODateString = _this.toISOString();
    ISODateString = ISODateString.slice(0, ISODateString.search("T"));
    return ISODateString;
};

function convertDateString(date = new Date()) {
    var stringRS =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    return stringRS;
}
