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

    wallButton.onclick = () => {
        jsonp(
            buildGroupWallURL(access_token),
            response => {
                // const items = response.response.items;
                const items = response.response;
                log("items", items);
                const polls = [];
                for (let i = 1; i < items.length; ++i) {
                    const item = items[i];
                    log("item", item);
                    for (let j = 0; j < item.attachments.length; ++j) {
                        const attachment = item.attachments[j];
                        log("attachment", attachment);
                        if (attachment.type == "poll") {
                            polls.push(attachment.poll);
                        }
                    }
                }
                log("response", response);
                log("polls", polls);
                console.log(polls);
                document.getElementById("matches_list_p").innerText = polls;
            });
    }
}