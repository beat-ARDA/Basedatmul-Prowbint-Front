async function InsertCourse(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/courses.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); })
        .catch(error => console.warn(error));
}

async function GetCourses() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/courses.php`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetCourse(idCourse) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getCourse.php/${idCourse}`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); })
        .catch(error => console.warn(error));
}

export { InsertCourse, GetCourses, GetCourse }