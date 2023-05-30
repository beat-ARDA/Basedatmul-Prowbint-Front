async function InsertComment(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/comments.php`, {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetComments(idCourse) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/comments.php/${idCourse}`, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

export { InsertComment, GetComments };