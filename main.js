
const HTML_ADDRESS = "https://xmanatee.github.io/kpso_matches";

function getAccessToken() {
    console.log("a");
    const parsedUrl = new URL(window.location.href);
    console.log("a");
    let access_token = parsedUrl.searchParams.get("access_token");
    access_token = access_token ? access_token : localStorage.getItem("access_token");
    access_token = access_token ? access_token : null;

    localStorage.setItem("access_token", access_token);
    return access_token;
}

function main() {
    const access_token = getAccessToken();

    if (access_token) {
        showMatches(access_token);
    } else {
        showAuth();
    }
}

window.onload = () => {

    console.log("before");
    VK.init(function() {
        console.log("suc");
        // API initialization succeeded
        // Your code here
        main();
    }, function() {
        console.log("failed");
        // API initialization failed
        // Can reload page here
    }, '5.92');
};
