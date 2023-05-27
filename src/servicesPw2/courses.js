async function getCoursesActive() {
    return await fetch(process.env.REACT_APP_PATH_API + `curso/mostrar/active`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => {
            return JSON.parse(data)
        })
        .catch(error => console.warn(error));
};

async function getCourseById(idCurso) {
    return await fetch(process.env.REACT_APP_PATH_API + `curso/${idCurso}`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

async function postCourse(bodyData) {
    return await fetch(process.env.REACT_APP_PATH_API + `curso/crear-curso`, {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => {
            return JSON.parse(data)
        })
        .catch(error => console.warn(error));
};

async function postCourseAlumn(idCurso, bodyData) {
    return await fetch(process.env.REACT_APP_PATH_API + `curso-alumn/${idCurso}`, {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => {
            return JSON.parse(data)
        })
        .catch(error => console.warn(error));
};

export { getCoursesActive, getCourseById, postCourse, postCourseAlumn };