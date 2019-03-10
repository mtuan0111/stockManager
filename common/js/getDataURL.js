class getDataURL {
    constructor(url) {
        this.url = url;
        // console.log(url);
    }

    set url(url) {
        this._url = url;
    }

    get url() {
        var _this = this;
        return _this._url;
    }

    set dataURL(data) {
        this._data = data;
    }

    get dataURL() {
        var _this = this;
        return _this._data;
    }

    // Create the XHR object.
    _createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Firefox/Opera/Safari.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // CORS not supported.
            xhr = null;
        }
        return xhr;
    }

    // Make the actual CORS request.
    makeCorsRequest(callback) {
        var _this = this;
        var url = _this.url;
        // This is a sample server that supports CORS.
        // var url =
        // "http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html";

        var xhr = _this._createCORSRequest("GET", url);
        if (!xhr) {
            alert("CORS not supported");
            return;
        }

        // Response handlers.
        xhr.onload = function() {
            var textReturned = xhr.responseText;
            // var title = getTitle(text);
            // alert("Response from CORS request");

            var data = JSON.parse(textReturned);
            this.dataURL = data;
            if (data.length) {
                callback(data);
            } else {
                // this.dataURL = null;
                // window.alertError = alert("Please input the valid stock Code");
                throw new Error(
                    "Something went badly wrong!\nPlease input the valid stock Code"
                );
                return;
            }
        };

        xhr.onerror = function() {
            // alert("Woops, there was an error making the request.");
        };

        xhr.send();
    }
}
