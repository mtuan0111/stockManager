// Create the XHR object.
function createCORSRequest(method, url) {
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

// Helper method to parse the title tag from the response.
// function getTitle(text) {
//     return text.match("<title>(.*)?</title>")[1];
// }

// Make the actual CORS request.
function makeCorsRequest(url = "", callback) {
    // This is a sample server that supports CORS.
    // var url =
    // "http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html";

    var xhr = createCORSRequest("GET", url);
    if (!xhr) {
        alert("CORS not supported");
        return;
    }

    // Response handlers.
    xhr.onload = function() {
        var textReturned = xhr.responseText;
        // var title = getTitle(text);
        // alert("Response from CORS request");

        data = JSON.parse(textReturned);
        if (data.length) callback(data);
        else {
            window.alertError = alert("Please input the valid stock Code");
            return;
        }
    };

    xhr.onerror = function() {
        // alert("Woops, there was an error making the request.");
    };

    xhr.send();
}

function compare(a, b) {
    if (a["Date"] < b["Date"]) return -1;
    if (a["Date"] > b["Date"]) return 1;
    return 0;
}
