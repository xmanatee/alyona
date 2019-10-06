
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

function process_stat_request(stat_raw) {
    const stat = JSON.parse(stat_raw);
    set_chart(
        stat["stat_id"],
        stat["stat_icon"],
        stat["stat_name"],
        stat["stat_description"],
        stat["user_ids"]);
}

function initialize() {

    set_chart(
        "best_voters",
        "icon-social-reddit",
        "Лучшие Воутеры",
        "asdasd",
        ["Mikhail Nemilov", "Natalia Bobrovskaya", "Elin Rin", "Stepan Zuev", "Kolyun'a Makeenkov"]);

    load_file("datax/stat_best_couples.json", process_stat_request);
    load_file("datax/stat_yes_fellas.json", process_stat_request);
    load_file("datax/stat_no_fellas.json", process_stat_request);

    const access_token = getAccessToken();

    log("access_token", access_token);

    if (access_token) {
        showAuthorized(access_token);
        // load_file("datax/stat_best_matches_for_U.json", process_stat_request);
        // load_file("datax/stat_worst_matches_for_U.json", process_stat_request);
        // load_file("datax/stat_best_friends_for_U.json", process_stat_request);
    } else {
        showNonAuthorized()
    }
}

window.onload = initialize;
