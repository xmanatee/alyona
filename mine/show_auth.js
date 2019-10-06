function buildAuthLink() {
    return "https://oauth.vk.com/authorize"
        + "?client_id=" + APP_ID
        // + "&display=page"
        + "&redirect_uri=" + HTML_ADDRESS
        + "&scope=" + REQUESTED_PERMISSIONS
        + "&response_type=token"
        + "&v=" +
        + "&state=123456";
}

function showNonAuthorized() {
    const vkButton = document.getElementById("vk_authorize");
    vkButton.href = buildAuthLink();

    const authorizedSection = document.getElementById("authorized-section");
    authorizedSection.style.display = "none";
}