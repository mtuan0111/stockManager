class user {
    constructor(user) {
        this.name = name.username;
        // this.generateStockList();
        this.listStock = this.stockList;
    }

    set name(val) {
        this._name = name;
    }

    get name() {
        var _this = this;
        return _this._name;
    }

    set stockList(value) {
        this._stockList = value;
    }

    get stockList() {
        var _this = this;
        return _this._stockList;
    }

    set userStockList(stockList = []) {
        this._userStockList = stockList;
    }

    set listBoughtStock(val) {
        this._listBoughtStock = val;
    }

    get listBoughtStock() {
        var _this = this;
        if (isset(_this._listBoughtStock)) return _this._listBoughtStock;
        _this._listBoughtStock;
    }

    set targetAppend(element) {
        this._targetAppend = element;
    }

    get targetAppend() {
        var _this = this;
        if (isset(_this._targetAppend)) {
            return _this._targetAppend;
        }
        _this._targetAppend = document.getElementById("userProperties");
        return _this._targetAppend;
    }

    set listBoughtStock(val) {
        this._listBoughtStock = val;
    }

    get listBoughtStock() {
        var _this = this;
        if (isset(_this._listBoughtStock)) return _this._listBoughtStock;

        return [
            { code: "ACB", price: 33700, quantity: 600 },
            { code: "DXG", price: 23450, quantity: 1000 },
            { code: "FLC", price: 5125, quantity: 1950 },
            { code: "HKB", price: 1400, quantity: 2900 },
            { code: "NLG", price: 32400, quantity: 250 },
            { code: "STB", price: 12750, quantity: 500 },
            { code: "VHM", price: 91200, quantity: 250 },
            { code: "VIC", price: 118800, quantity: 100 }
        ];
    }

    // generateStockList() {
    //     var _this = this;
    //     // var listBoughtStock = [
    //     //     { stockCode: "FLC", price: 5000, quantity: 4000 },
    //     //     { stockCode: "ACB", price: 30000, quantity: 1000 },
    //     //     { stockCode: "DXG", price: 25000, quantity: 3000 }
    //     // ];
    //     // listBoughtStock = removeDups(listBoughtStock);

    //     var list = [];
    //     _this.listBoughtStock.forEach(element => {
    //         var stockInitialParam = { stockCode: element.stockCode };

    //         var elStock = new userStock(stockInitialParam);
    //         elStock.boughtDetails = element;
    //         list.push(elStock);
    //     });

    //     this.stockList = list;
    // }

    // set stock(val) {
    //     this._stock = new stockInfo(val);
    // }

    // get stock() {
    //     var _this = this;
    //     return this._stock;
    // }

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
            // "Max price",
            // "Min price",
            // "Open price",
            // "Reference price",
            "Bought price",
            "Holding quantity",
            "Total bought price",
            "Current market price",
            "Profit value"
        ];
    }

    // get intradayQuotes() {
    //     console.log("hahahaha");
    //     var _this = this;
    //     if (!isset(this._intradayQuotes)) {
    //         this._intradayQuotes = new intraDay(_this.stockCode);
    //     } else {
    //         this._intradayQuotes.stockCode = _this.stockCode;
    //     }

    //     if (isset(_this.intraDayQuotesTableElement)) {
    //         this._intradayQuotes.targetAppend =
    //             _this.intraDayQuotesTableElement;
    //     }

    //     var getData = this._intradayQuotes.getIntradayQuotes(
    //         function(data) {
    //             if (data && _this._intradayQuotes) {
    //                 this.currentPrice = _this._intradayQuotes.latestPrice;
    //                 this.maxPrice = _this._intradayQuotes.maxPrice;
    //                 this.minPrice = _this._intradayQuotes.minPrice;
    //                 this.openPrice = _this._intradayQuotes.firstPrice;
    //                 this.referencePrice = _this._intradayQuotes.referencePrice;
    //                 this.distinctPrice =
    //                     _this._intradayQuotes.arrayDistinctPrice;
    //             }
    //         },
    //         1,
    //         this
    //     );

    //     getData;
    //     return this._intradayQuotes;
    // }

    set listStock(list) {
        this._listStock = [];
        this._tableListStock = document.createElement("table");

        var caption = document.createElement("caption");
        caption.innerText = "User's watch list";
        this._tableListStock.appendChild(caption);

        var theadTable = document.createElement("thead");
        var tbodyTable = document.createElement("tbody");

        var tableRow = document.createElement("tr");
        var headColumns = this.filterColumn;

        headColumns.forEach(element => {
            var column = document.createElement("th");
            column.innerText = element;
            tableRow.appendChild(column);
        });

        theadTable.appendChild(tableRow);

        this.listBoughtStock.forEach(boughtStock => {
            var tableRow = document.createElement("tr");

            var colStockCode = document.createElement("td");
            colStockCode.className = "center-align";

            var colCurrentPrice = document.createElement("td");
            colCurrentPrice.className = "center-align";
            var colMaxPrice = document.createElement("td");
            colMaxPrice.className = "center-align";
            var colMinPrice = document.createElement("td");
            colMinPrice.className = "center-align";
            var colOpenPrice = document.createElement("td");
            colOpenPrice.className = "center-align";

            var colReferencePrice = document.createElement("td");
            colReferencePrice.className = "center-align";

            /**
             * Defining the column for User's stock
             */
            var colboughtValue = document.createElement("td");
            colboughtValue.className = "center-align";

            var colQuantityBought = document.createElement("td");
            colQuantityBought.className = "center-align";

            var colTotalBoughtValue = document.createElement("td");
            colTotalBoughtValue.className = "center-align";

            var colTotalCurrentValue = document.createElement("td");
            colTotalCurrentValue.className = "center-align";

            var colProfitValue = document.createElement("td");
            colProfitValue.className = "center-align";

            /**
             * Ending the define column for User's stock
             */

            var stockCodeElement = document.createElement("span");
            var stockCodePercentElement = document.createElement("span");
            addClass(stockCodePercentElement, "badge stockCodePercent");
            colStockCode.appendChild(stockCodeElement);
            colStockCode.appendChild(stockCodePercentElement);

            var currentPriceElement = document.createElement("span");
            var currentPricePercentElement = document.createElement("span");
            addClass(currentPricePercentElement, "badge currentPricePercent");
            colCurrentPrice.appendChild(currentPriceElement);
            colCurrentPrice.appendChild(currentPricePercentElement);

            /**
             * Remove unesessary columns
             */
            // var maxPriceElement = document.createElement("span");
            // var maxPricePercentElement = document.createElement("span");
            // addClass(maxPricePercentElement, "badge maxPricePercent");
            // colMaxPrice.appendChild(maxPriceElement);
            // colMaxPrice.appendChild(maxPricePercentElement);

            // var minPriceElement = document.createElement("span");
            // var minPricePercentElement = document.createElement("span");
            // addClass(minPricePercentElement, "badge minPricePercent");
            // colMinPrice.appendChild(minPriceElement);
            // colMinPrice.appendChild(minPricePercentElement);

            // var openPriceElement = document.createElement("span");
            // var openPricePercentElement = document.createElement("span");
            // addClass(openPricePercentElement, "badge openPricePercent");
            // colOpenPrice.appendChild(openPriceElement);
            // colOpenPrice.appendChild(openPricePercentElement);

            // var referencePriceElement = document.createElement("span");
            // var referencePricePercentElement = document.createElement("span");
            // addClass(
            //     referencePricePercentElement,
            //     "badge referencePricePercent"
            // );
            // colReferencePrice.appendChild(referencePriceElement);
            /**
             * End remove columns unused
             */

            var boughtValueElement = document.createElement("span");
            colboughtValue.appendChild(boughtValueElement);

            var quantityBoughtElement = document.createElement("span");
            colQuantityBought.appendChild(quantityBoughtElement);

            var totalBoughtValueElement = document.createElement("span");
            colTotalBoughtValue.appendChild(totalBoughtValueElement);

            var totalCurrentValueElement = document.createElement("span");
            colTotalCurrentValue.appendChild(totalCurrentValueElement);

            var profitValueElement = document.createElement("span");
            colProfitValue.appendChild(profitValueElement);

            var stockObject = new userStock(
                {
                    stockCode: boughtStock.code,
                    stockCodeInputElement: stockCodeElement,

                    currentIntradayPriceElement: currentPriceElement,
                    currentIntradayPricePercentElement: currentPricePercentElement

                    // maxIntradayPriceElement: maxPriceElement,
                    // maxIntradayPricePercentElement: maxPricePercentElement,

                    // minIntradayPriceElement: minPriceElement,
                    // minIntradayPricePercentElement: minPricePercentElement,

                    // openIntradayPriceElement: openPriceElement,
                    // openIntradayPricePercentElement: openPricePercentElement,

                    // roofIntradayPriceElement: _this.roofIntradayPrice,
                    // floorIntradayPriceElement: _this.floorIntradayPrice,

                    // referenceIntradayPriceElement: referencePriceElement

                    // intraDayQuotesTableElement: _this.intraDayQuotesTable,
                    // historicalQuotesTableElement: _this.historicalQuotesTable
                },
                /** Define the params element for User's stock */
                {
                    boughtValueTableElement: boughtValueElement,
                    quantityBoughtTableElement: quantityBoughtElement,
                    totalBoughtValueTableElement: totalBoughtValueElement,
                    totalCurrentValueTableElement: totalCurrentValueElement,
                    profitValueTableElement: profitValueElement
                    // totalBoughtValueTablePercentElement: totalBoughtValuePercentElement
                }
            );
            stockObject.boughtDetails = boughtStock;

            tableRow.appendChild(colStockCode);
            tableRow.appendChild(colCurrentPrice);

            // tableRow.appendChild(colMaxPrice);
            // tableRow.appendChild(colMinPrice);

            // tableRow.appendChild(colOpenPrice);
            // tableRow.appendChild(colReferencePrice);

            /** Adding row for User's stock */
            tableRow.appendChild(colboughtValue);
            tableRow.appendChild(colQuantityBought);
            tableRow.appendChild(colTotalBoughtValue);
            tableRow.appendChild(colTotalCurrentValue);
            tableRow.appendChild(colProfitValue);
            /** End adding row for User's stock */

            tbodyTable.appendChild(tableRow);

            this._listStock.push(stockObject);
        });

        this._tableListStock.appendChild(theadTable);
        this._tableListStock.appendChild(tbodyTable);

        this.targetAppend.innerHTML = "";
        this.targetAppend.appendChild(this._tableListStock);
    }
    x;
}
