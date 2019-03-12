const dateToLocationString = 0;
const dateToLocaleDateString = 1;
const dateToLocaleTimeString = 2;

function compare(a, b) {
    if (a["Date"] < b["Date"]) return -1;
    if (a["Date"] > b["Date"]) return 1;
    return 0;
}

function isset(variable) {
    if (typeof variable != "undefined") {
        return true;
    }
    return false;
}

function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
}

function getMinOfArray(numArray) {
    return Math.min.apply(null, numArray);
}

function loadIntradayQuotes(
    data = null,
    filterColumn = [],
    caption = null,
    typeTimeFormat = dateToLocationString
) {
    var appendParent = document.getElementById("containerLoading");
    var table = document.createElement("table");

    var tableKeys = Object.keys(data[0]);
    var filterLength = filterColumn.length;
    if (filterLength) {
        tableKeys = filterColumn;
    }

    var titleRow = document.createElement("tr");
    tableKeys.forEach(key => {
        var th = document.createElement("th");
        th.innerText = key;
        titleRow.appendChild(th);
    });

    var tableHead = document.createElement("thead");
    tableHead.appendChild(titleRow);
    table.appendChild(tableHead);

    var tableBody = document.createElement("tbody");

    data.forEach(item => {
        var row = document.createElement("tr");
        tableKeys.forEach(key => {
            var td = document.createElement("td");

            if (key.search("Date") != -1) {
                var date = new Date(item[key]);
                item[key] = date.toLocaleString();
                switch (typeTimeFormat) {
                    case dateToLocaleDateString:
                        item[key] = date.toLocaleDateString();
                        break;
                    case dateToLocaleTimeString:
                        item[key] = date.toLocaleTimeString();
                        break;
                    default:
                        item[key] = date.toLocaleString();
                        break;
                }
            }

            td.innerText = !isNaN(item[key])
                ? Math.round(item[key])
                : item[key];
            row.appendChild(td);
        });
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);

    if (caption) {
        var captionEl = document.createElement("caption");
        captionEl.innerText = caption;
        table.appendChild(captionEl);
    }

    return table;
}

function comparePercent(referenceValue, compareValue) {
    var ratioValue = compareValue / referenceValue;
    return ratioValue - 1;
}

function roundPercent(number, round = 3) {
    var rounded = Math.pow(10, round);
    var percent = Math.round(number * rounded);
    return percent / (rounded / 100);
}

function setValueElement(element, value) {
    var typeElement = element.tagName.toLowerCase();
    var changed = false;
    var decrease = false;
    switch (typeElement) {
        case "input":
            if (element.getAttribute("value") != value) {
                element.setAttribute("value", value);
                changed = true;
                decrease = element.getAttribute("value") < value;
            }
            break;
        case "span":
            if (element.getAttribute("data-value") != value) {
                element.setAttribute("data-value", value);
                changed = true;
                decrease = element.getAttribute("data-value") < value;
            }
            if (element.innerText != value) {
                element.innerText = value;
                changed = true;
                decrease = element.innerText < value;
            }
            break;

        case "td":
            if (element.getAttribute("data-value") != value) {
                element.setAttribute("data-value", value);
                changed = true;
                decrease = element.getAttribute("data-value") < value;
            }
            if (element.innerText != value) {
                element.innerText = value;
                changed = true;
                decrease = element.innerText < value;
            }
            break;

        default:
            if (element.innerText != value) {
                element.innerText = value;
                changed = true;
                decrease = element.innerText < value;
            }
            break;
    }

    if (changed) {
        addClass(element, "changed");
        setTimeout(function() {
            removeClass(element, "changed");
        }, TIME_CHANGED_STATUS);
    }
}

function removeDups(names) {
    let unique = {};
    names.forEach(function(i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}

function addClass(element, className) {
    arr = "";
    if (isset(element.className)) {
        arr = element.className.split(" ");
    }

    if (arr.indexOf(className) == -1) {
        element.className += " " + className;
    }
}

function removeClass(element, className) {
    arr = "";
    indexClass = -1;
    if (isset(element.className)) {
        arr = element.className.split(" ");
        indexClass = arr.indexOf(className);
    }
    if (indexClass != -1) {
        arr.splice(indexClass, 1);
        element.className = arr.join(" ");
    }
}
