async function InsertMessage(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/insertMessage.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); });
}

async function GetMessages(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getMessages.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); });
}

export { InsertMessage, GetMessages };