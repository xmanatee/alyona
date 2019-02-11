function buildAuthLink() {
    const requested_permissions = 2 + 262144;
    return "https://oauth.vk.com/authorize"
        + "?client_id=6857247"
        + "&display=page"
        + "&redirect_uri=" + HTML_ADDRESS
        + "&scope=" + requested_permissions
        + "&response_type=token"
        + "&v=5.92"
        + "&state=123456";
}

function showAuth() {

    const vkButton = document.getElementById("vk_button");
    vkButton.href = buildAuthLink();

}