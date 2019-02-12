const POLLS_GROUP_NAME = "asurveys";
const POLLS_GROUP_ID = "-172053584";

function httpGetAsync(theUrl, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function buildGroupWallURL(access_token) {
    return "https://api.vk.com/method/wall.get"
        + "?owner_id=" + POLLS_GROUP_ID
        + "&access_token=" + access_token;
}

function buildUserGetUrl(accessToken, userId) {
    return "https://api.vk.com/method/users.get"
        + "?version=5.57"
        + "&access_token=" + accessToken
        + "&user_ids=" + userId;
}

function showMatches(access_token) {
    const wallButton = document.getElementById("wall_button");

    // wallButton.onclick = () => {
        jsonp(
            buildGroupWallURL(access_token),
            response => {
                console.log(response);
                document.getElementById("matches_p").innerText = response;
            });
    // }
}