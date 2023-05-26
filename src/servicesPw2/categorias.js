
async function register(bodyData) {
    console.log(bodyData);
    return await fetch(process.env.REACT_APP_PATH_API + 'categorias/register', {
        method: 'POST',
        body: bodyData,
        body: new URLSearchParams(bodyData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); });
}

//conseguir id
async function modify(bodyData,idCategory) {
    console.log(bodyData);
    return await fetch(process.env.REACT_APP_PATH_API + `categorias/update/${idCategory}`, {
        method: 'PUT',
        body: bodyData,
        body: new URLSearchParams(bodyData),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); });
}
//conseguir id
async function deleteById(idCategory) {
    return await fetch(process.env.REACT_APP_PATH_API + `categorias/delete/${idCategoria}`, {
        method: 'DELETE',
    })
        .then(response => response.text())
        .then(data => { console.log(data); return JSON.parse(data); });
}

async function getCategoriasActivas() {
    return await fetch(process.env.REACT_APP_PATH_API + 'categorias/mostrar/active', {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};

async function GetCategories() {
    return await fetch(`${process.env.REACT_APP_PATH_API}/categories.php`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

async function getAllCategorias() {
    return await fetch(process.env.REACT_APP_PATH_API + `categorias`, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};


async function getCategoriasById(idCategory) {
    return await fetch(process.env.REACT_APP_PATH_API + `categorias/${idCategory}`, {
        method: 'GET',
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
};


export { register, modify, deleteById,getCategoriasActivas,getAllCategorias,getCategoriasById};