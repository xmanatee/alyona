// function httpGetAsync(theUrl, callback) {
//     const xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() {
//         if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
//             callback(xmlHttp.responseText);
//     };
//     xmlHttp.open("GET", theUrl, true); // true for asynchronous
//     xmlHttp.send(null);
// }

function buildGroupWallURL(access_token) {
    return "https://api.vk.com/method/wall.get"
        + "?version=" + VK_API_VERSION
        + "&owner_id=" + POLLS_GROUP_ID
        + "&count=100"
        + "&access_token=" + access_token;
}

// function buildUserGetUrl(accessToken, userId) {
//     return "https://api.vk.com/method/users.get"
//         + "?version=" + VK_API_VERSION
//         + "&user_ids=" + userId
//         + "&access_token=" + accessToken;
// }

function buildPollInfoUrl(accessToken, pollId) {
    return "https://api.vk.com/method/polls.getById"
        + "?version=" + VK_API_VERSION
        + "&owner_id=" + POLLS_GROUP_ID
        + "&poll_id=" + pollId
        + "&friends_count=0"
        + "&access_token=" + accessToken;
}


function showAuthorized(access_token) {

    const authButton = document.getElementById("vk_authorize");
    authButton.style.display = "none";

    const downloadSection = document.getElementById("download-section");
    downloadSection.style.display = "none";

}