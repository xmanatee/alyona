def get_poll(wall_post):
    if "attachments" not in wall_post:
        return None
    for attachment in wall_post["attachments"]:
        if attachment["type"] != "poll":
            continue
        poll = attachment["poll"]
        return poll
    return None