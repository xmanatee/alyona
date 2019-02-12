


function getAccessToken() {
    const parsedUrl = new URL(window.location.href);
    const access_token = parsedUrl.searchParams.get("access_token") || localStorage.getItem("access_token");

    localStorage.setItem("access_token", access_token);
    return access_token;
}

function main() {
    const access_token = getAccessToken();

    if (access_token) {
        showAuth();
    } else {
        showMatches(access_token);
    }
}

window.onload = () => {
    // VK.init({
    //     apiId: 6857247
    // });
    // VK.Auth.login()
    main();
};
