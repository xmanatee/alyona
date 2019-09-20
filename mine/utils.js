function jsonp(url, callback) {
    const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    const script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

function log(name, value) {
    console.log("KPSO| " + name + " = '" + value + "' [" + typeof value + "]");
}

function load_file(url, callback) {
    const client = new XMLHttpRequest();
    client.open('GET', url);
    client.onload = function () {
        callback(client.responseText.trim());
    };
    client.send();
}
