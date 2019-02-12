


function getAccessToken() {
    const parsedUrl = new URL(window.location.href);
    let access_token = parsedUrl.searchParams.get("access_token") || localStorage.getItem("access_token");

    if (access_token === "") {
        access_token = null;
    }

    localStorage.setItem("access_token", access_token);
    return access_token;
}

function main() {

    const access_token = getAccessToken();

    console.log("access_token = " + access_token);

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
