const POLLS_GROUP_NAME = "asurveys";
const POLLS_GROUP_ID = "172053584";

function httpGetAsync(theUrl, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            callback(xmlHttp.responseText);
    };
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function getGroupWall() {

}

function buildVoteList(access_token) {

}

function showMatches() {

}