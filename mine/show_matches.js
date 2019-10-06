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

    const wallButton = document.getElementById("wall_button");
    wallButton.onclick = () => {
        jsonp(
            buildGroupWallURL(access_token),
            response => {
                // const items = response.response.items;
                const items = response.response;
                const polls = [];
                for (let i = 1; i < items.length; ++i) {
                    const item = items[i];
                    for (let j = 0; j < item.attachments.length; ++j) {
                        const attachment = item.attachments[j];
                        if (attachment.type == "poll") {
                            polls.push(attachment.poll);
                        }
                    }
                }
                console.log(response);
                console.log(polls);
                document.getElementById("matches_list_p").innerText = JSON.stringify(polls);
                document.getElementById("poll_button").onclick = () => {
                    jsonp(
                        buildPollInfoUrl(access_token, polls[0].poll_id),
                        response => {
                            console.log(response);
                            document.getElementById("poll_p").innerText = JSON.stringify(response);
                        }
                    )
                };

            });
    }
}