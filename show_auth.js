const HTML_ADDRESS = "https://xmanatee.github.io/kpso_matches";
// const HTML_ADDRESS = "http://localhost:63342/kpso_matches/index.html";
const REQUESTED_PERMISSIONS = 2 + 262144;
const APP_ID = 6857247;


function buildAuthLink() {
    return "https://oauth.vk.com/authorize"
        + "?client_id=" + APP_ID
        + "&display=page"
        + "&redirect_uri=" + HTML_ADDRESS
        + "&scope=" + REQUESTED_PERMISSIONS
        + "&response_type=token"
        + "&v=5.92"
        + "&state=123456";
}

function showAuth() {

    const vkButton = document.getElementById("vk_button");
    vkButton.href = buildAuthLink();

}