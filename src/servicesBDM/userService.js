async function GetUserProfileBDM() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/users.php/${localStorage.getItem('userId')}`, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

async function UpdateUserProfileBDM(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/users.php/${localStorage.getItem('userId')}`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); });
}

async function LogIn(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/userInitSesion.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); });
}

async function PostUserProfile(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/userRegister.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); });
}

export { GetUserProfileBDM, UpdateUserProfileBDM, PostUserProfile, LogIn }