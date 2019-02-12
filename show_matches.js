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

function getGroupWallURL(access_token) {
    return "https://api.vk.com/method/wall.get"
        + "?owner_id=" + POLLS_GROUP_ID
        + "&access_token=" + access_token;
}

function showMatches(access_token) {
    const matchesP = document.getElementById("matches_list_p");
    httpGetAsync(getGroupWallURL(access_token), responseText => {
        matchesP.innerText = responseText;
    });
}