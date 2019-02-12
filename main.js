


function getAccessToken() {
    const parsedUrl = new URL(window.location.href);
    const access_token = parsedUrl.searchParams.get("access_token") || localStorage.getItem("access_token");

    localStorage.setItem("access_token", access_token);
    return access_token;
}

function main() {
    showAuth();

    const access_token = getAccessToken();
    console.log(access_token);
    if (access_token) {
        console.log("present");
        showMatches(access_token);
    }
}

window.onload = () => {
    console.log("in window.onload");
    // VK.init({
    //     apiId: 6857247
    // });
    // VK.Auth.login()
    main();
};
