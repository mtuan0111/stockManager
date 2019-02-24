class userBehavior {
    constructor() {
        var _this = this;
        _this.createSearchEvent();
        setTimeout(function() {
            new stockInfo("ACB");
        }, 500);
    }

    createSearchEvent() {
        var _this = this;

        $(document).on("click", "#btnSearch", function() {
            var inputStockCode = document.getElementsByName("stockCode")[0]
                .value;
            // console.log("inputStockCode: ", inputStockCode);
            new stockInfo(inputStockCode);
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
