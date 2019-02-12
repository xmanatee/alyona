
function log(smth) {
    const eval_smath = eval(smth);
    console.log("KPSO: " + smth + " = '" + eval_smath + "' [" + typeof eval_smath + "]");
}


function getAccessToken() {
    const parsedUrl = new URL(window.location.href);
    let access_token = parsedUrl.searchParams.get("access_token") || localStorage.getItem("access_token");

    log("parsedUrl.searchParams.get(\"access_token\")");
    log("localStorage.getItem(\"access_token\")");

    if (access_token === "") {
        access_token = null;
    }

    localStorage.setItem("access_token", access_token);
    return access_token;
}

function main() {

    const access_token = getAccessToken();

    log("access_token");

    if (access_token) {
        console.log("present");
        showMatches(access_token);
    } else {
        showAuth()
    }
}

window.onload = () => {
    main();
};
