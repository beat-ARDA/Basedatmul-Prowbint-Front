async function buscar(bodyData) {
    
    return await fetch(process.env.REACT_APP_PATH_API + 'busqueda', {
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

async function MasReciente() {
    return await fetch(process.env.REACT_APP_PATH_API + `MasReciente`, {
        method: 'GET',
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => {
            return JSON.parse(data)
        })
        .catch(error => console.warn(error));
};

export { buscar,MasReciente};