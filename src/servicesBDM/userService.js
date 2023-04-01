import { getUserProfileById, postUserProfile, updateUserProfileById } from "../components/apiRoutes";

async function GetUserProfileBDM() {
    return await fetch(getUserProfileById, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

async function UpdateUserProfileBDM(bodyData) {
    return await fetch(updateUserProfileById, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); });
}

async function PostUserProfile(bodyData) {
    return await fetch(postUserProfile, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); });
}

export { GetUserProfileBDM, UpdateUserProfileBDM, PostUserProfile }