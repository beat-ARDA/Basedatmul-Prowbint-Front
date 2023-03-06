import { usuariosPath } from './rutas';

export const handleLogIn = (event, data) => {
    event.preventDefault();
    fetch(usuariosPath, {
        method: 'POST',
        body: data
     })
        .then(response => response.text())
        .then(data => console.log(data))
};