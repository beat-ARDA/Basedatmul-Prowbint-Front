async function InsertCategory(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/categories.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); });
}

async function GetCategories() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/categories.php`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function UpdateCategory(bodyData, idCategory) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/updateCategory.php/${idCategory}`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
}


async function DeleteCategory(idCategory) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/deleteCategory.php/${idCategory}`, {
        method: 'POST'
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
}

export { InsertCategory, GetCategories, UpdateCategory, DeleteCategory }