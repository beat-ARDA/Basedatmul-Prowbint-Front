async function register(bodyData) {
    return await fetch(process.env.REACT_APP_PATH_API + 'register', {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); });
}

async function getUser() {
    return await fetch(process.env.REACT_APP_PATH_API + `user/${localStorage.getItem('userId')}`, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

async function updateUser(bodyData) {
    return await fetch(process.env.REACT_APP_PATH_API + `user/${localStorage.getItem('userId')}`, {
        method: 'PUT',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

export { register, getUser, updateUser };