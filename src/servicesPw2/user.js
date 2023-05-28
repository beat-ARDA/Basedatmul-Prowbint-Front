import { endRegister, getUserProfile } from "./routes";

async function register(bodyData) {
    console.log(bodyData);
    return await fetch(endRegister, {
        method: 'POST',
        body: bodyData,
        //dataType: "json",
        body: new URLSearchParams(bodyData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); });
}

async function getUser() {
    return await fetch(getUserProfile, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

export { register, getUser };