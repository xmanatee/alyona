


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
    setupCallbacks();
};

function buildUserGetUrl(accessToken, userId) {
    return "https://api.vkontakte.ru/method/users.get"
        + "?version=5.57"
        + "&access_token=" + accessToken
        + "&user_ids=" + userId;
}


function setupCallbacks() {
    const callbackResponse = (document.URL).split("#")[1];
    const responseParameters = (callbackResponse).split("&");
    const parameterMap = [];
    for (let i = 0; i < responseParameters.length; i++) {
        parameterMap[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
    }
    if (parameterMap.access_token !== undefined && parameterMap.access_token !== null) {
        jsonp(
            buildUserGetUrl(parameterMap.access_token, parameterMap.user_id),
            function(userInfo) {
                console.log(userInfo);
                userInfo = userInfo.response[0];
                console.log(userInfo);
            });
    } else {
        console.log("Ошибка авторизации в ВК");
    }
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
}