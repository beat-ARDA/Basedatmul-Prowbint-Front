async function GetCertificated(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getCertificated.php`, {
        method: 'POST',
        body: bodyData
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data) })
        .catch(error => console.warn(error));
}

export { GetCertificated };