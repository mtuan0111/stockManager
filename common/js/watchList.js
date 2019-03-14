class watchList extends stockList {
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

        list.forEach(stockCode => {
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

            var maxPriceElement = document.createElement("span");
            var maxPricePercentElement = document.createElement("span");
            addClass(maxPricePercentElement, "badge maxPricePercent");
            colMaxPrice.appendChild(maxPriceElement);
            colMaxPrice.appendChild(maxPricePercentElement);

            var minPriceElement = document.createElement("span");
            var minPricePercentElement = document.createElement("span");
            addClass(minPricePercentElement, "badge minPricePercent");
            colMinPrice.appendChild(minPriceElement);
            colMinPrice.appendChild(minPricePercentElement);

            var openPriceElement = document.createElement("span");
            var openPricePercentElement = document.createElement("span");
            addClass(openPricePercentElement, "badge openPricePercent");
            colOpenPrice.appendChild(openPriceElement);
            colOpenPrice.appendChild(openPricePercentElement);

            var referencePriceElement = document.createElement("span");
            var referencePricePercentElement = document.createElement("span");
            addClass(
                referencePricePercentElement,
                "badge referencePricePercent"
            );
            colReferencePrice.appendChild(referencePriceElement);
            // colReferencePrice.appendChild(referencePricePercentElement);

            var stockObject = new stockInfo({
                stockCode: stockCode,
                stockCodeInputElement: stockCodeElement,

                currentIntradayPriceElement: currentPriceElement,
                currentIntradayPricePercentElement: currentPricePercentElement,

                maxIntradayPriceElement: maxPriceElement,
                maxIntradayPricePercentElement: maxPricePercentElement,

                minIntradayPriceElement: minPriceElement,
                minIntradayPricePercentElement: minPricePercentElement,

                openIntradayPriceElement: openPriceElement,
                openIntradayPricePercentElement: openPricePercentElement,

                // roofIntradayPriceElement: _this.roofIntradayPrice,
                // floorIntradayPriceElement: _this.floorIntradayPrice,

                referenceIntradayPriceElement: referencePriceElement

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

        // console.log("this.targetAppend: ", this.targetAppend);
        this.targetAppend.innerHTML = "";
        this.targetAppend.appendChild(this._tableListStock);
    }
}
