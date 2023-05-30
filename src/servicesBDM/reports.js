async function GetReports(bodyData) {
    return await fetch(`${process.env.REACT_APP_PATH_API}/getReports.php`, {
        method: 'POST',
        body: bodyData,
        dataType: "json"
    })
        .then(response => response.text())
        .then(data => { return JSON.parse(data); })
        .catch(error => console.warn(error));
}

export { GetReports }