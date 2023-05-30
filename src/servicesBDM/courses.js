async function InsertCourse(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/courses.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); })
        .catch(error => console.warn(error));
}

async function InsertShopingCourse(bodyData, idCourse) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getCourse.php/${idCourse}`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); })
        .catch(error => console.warn(error));
}

async function GetCourses(formData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getCourses.php`, {
        method: 'POST',
        body: formData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetCoursesBestSellers() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/coursesBestSellers.php`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetCoursesMostRecents() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/coursesMostRecents.php`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetCoursesBestCalificated() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/courseBestCalificated.php`, {
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

async function GetKardex(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/kardex.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); })
        .catch(error => console.warn(error));
}

async function SearchCourses() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/searchCourses.php`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function VerifyCourseComplete(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/verifyCourseCompleteAlumn.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetPurchasedLevels(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getPurchasedLevels.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function DeleteCourse(course) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/deleteCourse.php/${course}`, {
        method: 'POST',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetCoursesTeacher(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getCoursesTeacher.php`, {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetCourseFinished(course, bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getCourseFinished.php/${course}`, {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function InsertCourseFinished(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/insertCourseFinished.php`, {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function GetCalCourse(course) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/GetCalCourse.php/${course}`, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}


export {
    InsertCourse,
    GetCourses,
    GetCourse,
    InsertShopingCourse,
    GetKardex,
    GetCoursesBestSellers,
    GetCoursesMostRecents,
    GetCoursesBestCalificated,
    SearchCourses,
    VerifyCourseComplete,
    GetPurchasedLevels,
    DeleteCourse,
    GetCoursesTeacher,
    GetCourseFinished,
    InsertCourseFinished,
    GetCalCourse
}