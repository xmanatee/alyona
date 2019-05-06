
function parseParams() {
    const callbackResponse = window.location.href.split("#")[1];
    if (callbackResponse === undefined) {
        return [];
    }
    const responseParameters = (callbackResponse).split("&");
    const parameterMap = [];
    for (let i = 0; i < responseParameters.length; i++) {
        parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
    }
    return parameterMap;
}

function getAccessToken() {
    const parsedUrl = new URL(window.location.href);
    let access_token = parseParams().access_token
        || parsedUrl.searchParams.get("access_token")
        || sessionStorage.getItem("access_token");

    log("parsedUrl.searchParams.get(\"access_token\")", parsedUrl.searchParams.get("access_token"));
    log("sessionStorage.getItem(\"access_token\")", sessionStorage.getItem("access_token"));

    if (!access_token || access_token === "null" || access_token === "") {
        return null;
    }

    sessionStorage.setItem("access_token", access_token);
    return access_token;
}

function initialize() {

    set_chart(
        "best_voters",
        "icon-social-reddit",
        "Лучшие Воутеры",
        "asdasd",
        ["Mikhail Nemilov", "Natalia Bobrovskaya", "Elin Rin", "Stepan Zuev", "Kolyun'a Makeenkov"]);
    set_chart(
        "best_couples",
        "icon-people",
        "Лучшые Парочки",
        "asdasd",
        ["Mikhail Nemilov", "Natalia Bobrovskaya", "Elin Rin", "Stepan Zuev", "Kolyun'a Makeenkov"]);
    set_chart(
        "yes_fellas",
        "icon-like",
        "ДАшки",
        "asdasd",
        ["Mikhail Nemilov", "Natalia Bobrovskaya", "Elin Rin", "Stepan Zuev", "Kolyun'a Makeenkov"]);
    set_chart(
        "no_fellas",
        "icon-dislike",
        "НЕТушки",
        "asdasd",
        ["Mikhail Nemilov", "Natalia Bobrovskaya", "Elin Rin", "Stepan Zuev", "Kolyun'a Makeenkov"]);

    const access_token = getAccessToken();

    log("access_token", access_token);

    if (access_token) {
        console.log("present");
        showMatches(access_token);
    } else {
        showAuth()
    }
}

window.onload = initialize;
