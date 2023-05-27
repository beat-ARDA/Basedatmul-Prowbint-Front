async function getKardexById(id) {
    return await fetch(process.env.REACT_APP_PATH_API + `Kardex/${id}`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

export { getKardexById };