function buildAuthLink() {
    const REQUESTED_PERMISSIONS = 2 + 262144;
    const APP_ID = 6857247;
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