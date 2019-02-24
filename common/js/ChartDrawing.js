class ChartDrawing {
    constructor(element, label, data) {
        var _this = this;
        _this.element = element;
        _this.chartData = data;
        _this.chartLabel = label;
        _this.draw();
    }

    set chartData(data) {
        var _this = this;
        _this._chartData = data;
    }

    get chartData() {
        var _this = this;
        return _this._chartData;
    }

    set element(el) {
        var _this = this;
        _this._element = el;
    }

    get element() {
        var _this = this;
        return _this._element;
    }

    set chartLabel(Labels) {
        var _this = this;
        _this._chartLabel = Labels;
    }

    get chartLabel() {
        var _this = this;
        return _this._chartLabel;
    }

    draw() {
        var _this = this;
        console.log("_this._chartLabel: ", _this.chartLabel);
        console.log("_this._chartData: ", _this.chartData);
        new Chart(_this.element, {
            type: "line",
            data: {
                labels: _this._chartLabel,
                datasets: [
                    {
                        label: "Price",
                        data: _this.chartData,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(255, 206, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(255, 159, 64, 0.2)"
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                            "rgba(54, 162, 235, 1)",
                            "rgba(255, 206, 86, 1)",
                            "rgba(75, 192, 192, 1)",
                            "rgba(153, 102, 255, 1)",
                            "rgba(255, 159, 64, 1)"
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
    }
}
