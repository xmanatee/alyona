import json
import os

def build_main_mapping(data_dir):
    poll_id_to_answer_id_to_user_ids = {}
    user_id_to_user = {}

    for filename in os.listdir(data_dir):
        if "poll_" not in filename:
            continue
        try:
            poll_id = int(filename.split("poll_")[1].split(".")[0])
        except:
            continue
        poll_id_to_answer_id_to_user_ids[poll_id] = {}

        with open(data_dir + filename, "r") as f:
            poll = json.load(f)

        if not isinstance(poll, list):
            print("error")

        answers_to_ids = []
        for answer in poll:
            voted_users = answer["users"]["items"]

            answer_id = answer["answer_id"]
            voted_user_ids = list(map(lambda voted_user: voted_user["id"], voted_users))

            for voted_user in voted_users:
                user_id_to_user[voted_user["id"]] = voted_user

            poll_id_to_answer_id_to_user_ids[poll_id][answer_id] = voted_user_ids
    
    return poll_id_to_answer_id_to_user_ids, user_id_to_user