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

function buildUserGetUrl(accessToken, userId) {
    return "https://api.vk.com/method/users.get"
        + "?version=" + VK_API_VERSION
        + "&user_ids=" + userId
        + "&access_token=" + accessToken;
}

function showMatches(access_token) {
    const wallButton = document.getElementById("wall_button");

    // wallButton.onclick = () => {
        jsonp(
            buildGroupWallURL(access_token),
            response => {
                const items = response.response.items;
                const polls = [];
                for (let item in items) {
                    for (let attachment in item.attachments) {
                        if (attachment.type == "poll") {
                            polls.push(attachment.poll);
                        }
                    }
                }
                console.log(response);
                console.log(polls);
                document.getElementById("matches_list_p").innerText = polls;
            });
    // }
}