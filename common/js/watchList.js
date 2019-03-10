class watchList {
    constructor({ listStockCode, targetAppend }) {
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

    set listStock(list) {
        this._listStock = [];
        this._tableListStock = document.createElement("table");

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

        list.forEach(stockCode => {
            var tableRow = document.createElement("tr");

            var colStockCode = document.createElement("td");
            var colCurrentPrice = document.createElement("td");
            var colMaxPrice = document.createElement("td");
            var colMinPrice = document.createElement("td");
            var colOpenPrice = document.createElement("td");
            var colReferencePrice = document.createElement("td");

            var stockObject = new stockInfo({
                stockCode: stockCode,
                stockCodeInputElement: colStockCode,

                currentIntradayPriceElement: colCurrentPrice,
                // currentIntradayPricePercentElement: _this.currentIntradayPricePercent,

                maxIntradayPriceElement: colMaxPrice,
                // maxIntradayPricePercentElement: _this.maxIntradayPricePercent,

                minIntradayPriceElement: colMinPrice,
                // minIntradayPricePercentElement: _this.minIntradayPricePercent,

                openIntradayPriceElement: colOpenPrice,
                // openIntradayPricePercentElement: _this.openIntradayPricePercent,

                // roofIntradayPriceElement: _this.roofIntradayPrice,
                // floorIntradayPriceElement: _this.floorIntradayPrice,

                referenceIntradayPriceElement: colReferencePrice

                // intraDayQuotesTableElement: _this.intraDayQuotesTable,
                // historicalQuotesTableElement: _this.historicalQuotesTable
            });

            tableRow.appendChild(colStockCode);
            tableRow.appendChild(colCurrentPrice);

            tableRow.appendChild(colMaxPrice);
            tableRow.appendChild(colMinPrice);

            tableRow.appendChild(colOpenPrice);
            tableRow.appendChild(colReferencePrice);

            // console.log("tableRow: ", tableRow);
            tbodyTable.appendChild(tableRow);

            this._listStock.push(stockObject);
        });

        this._tableListStock.appendChild(theadTable);
        this._tableListStock.appendChild(tbodyTable);

        // console.log("this._tableListStock: ", this._tableListStock);
        // this._tableListStock.appendChild(tableRow);

        console.log("this.targetAppend: ", this.targetAppend);
        this.targetAppend.innerHTML = "";
        this.targetAppend.appendChild(this._tableListStock);
    }

    get tableListStock() {
        var _this = this;
        return this._tableListStock;
        // var listData = _this.
    }
}
