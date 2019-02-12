
function log(name, value) {
    console.log("KPSO| " + name + " = '" + value + "' [" + typeof value + "]");
}

function getAccessToken() {
    const parsedUrl = new URL(window.location.href);
    let access_token = parsedUrl.searchParams.get("access_token") || sessionStorage.getItem("access_token");

    log("parsedUrl.searchParams.get(\"access_token\")", parsedUrl.searchParams.get("access_token"));
    log("sessionStorage.getItem(\"access_token\")", sessionStorage.getItem("access_token"));

    if (access_token === "null" || access_token === "") {
        access_token = null;
    }

    sessionStorage.setItem("access_token", access_token);
    return access_token;
}

function main() {

    const access_token = getAccessToken();

    log("access_token", access_token);

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
