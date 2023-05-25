import { React, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "../../servicesBDM/userService";
import { Toast } from "bootstrap";
import './login.css';

function Login() {

    const [sesionValida, setSesionValida] = useState(false);
    var [toast, setToast] = useState(false);
    const [mensajeApi, setMensajeApi] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const api = localStorage.getItem('api');

    const toastRef = useRef();

    const handleLogInPwa = (event) => {
        event.preventDefault();
        if (email != '' && password != '') {
            const data = new FormData(document.getElementById('loginForm'));
            fetch(process.env.REACT_APP_PATH_API + 'login', {
                method: 'POST',
                body: new URLSearchParams(data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                }
            })
                .then(response => response.text())
                .then(data => {
                    let dataJson = JSON.parse(data);
                    // dataJson.token ? localStorage.setItem('token', 'ASDFASDFASDFASDF') : null;
                    localStorage.setItem('token', 'ASDFASDFASDFASDF');
                    // dataJson.token ? setSesionValida(true) : null;
                    setSesionValida(true);
                    setMensajeApi(dataJson.message ? dataJson.message : null);
                    dataJson.userId ? localStorage.setItem('userId', dataJson.userId) : null;
                });
        }
        else { setMensajeApi('Te faltan campos por rellenar'); }
    };

    const handleLogInBDM = (event) => {
        event.preventDefault();
        if (email != '' && password != '') {
            const data = new FormData(document.getElementById('loginForm'));
            LogIn(data)
                .then(data => {
                    let dataJson = data;
                    dataJson.token ? localStorage.setItem('token', dataJson.token) : null;
                    dataJson.token ? setSesionValida(true) : null;
                    setMensajeApi(dataJson.message ? dataJson.message : null);
                    dataJson.userId ? localStorage.setItem('userId', dataJson.userId) : null;
                });
        }
        else { setMensajeApi('Te faltan campos por rellenar'); }
    };

    useEffect(() => {

        sesionValida ? location.href = '/' : null;
        var myToast = toastRef.current
        var bsToast = Toast.getInstance(myToast);

        if (!bsToast) {
            bsToast = new Toast(myToast, { autohide: false })
            bsToast.hide();
            toast = setToast(false);
        }
        else {
            // toggle
            toast ? bsToast.show() : bsToast.hide()
        }
    });

    return (
        <>
            <form
                onSubmit={api === 'pw2' ? handleLogInPwa : handleLogInBDM}
                className="d-flex flex-column w-100 h-75 align-items-center justify-content-center login-padre"
                action="#"
                id="loginForm">
                <div className="toast toast-pos toast-backColor text-center" role="alert" ref={toastRef}>
                    <div className="toast-header toast-backColor fw-bold fw-dark text-center">
                        <strong className="me-auto">Mensaje</strong>
                        <button type="button" className="btn-close" onClick={() => setToast(false)} aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        {mensajeApi}
                    </div>
                </div>
                <h5>¡Ingresa tu cuenta de cursos!</h5>
                <svg
                    className="login-icon mb-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <path
                        d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z" /></svg>
                <div className="row w-100 p-0 m-0 d-flex flex-column align-items-center justify-content-center">
                    <div className="col-xl-4 col-9">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="text" className="mb-2 login-input w-100" placeholder="Correo..." />
                    </div>
                    <div className="col-xl-4 col-9">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="mb-2 login-input w-100" placeholder="Contraseña..." />
                    </div>
                    <div className="col-xl-4 col-9">
                        <button onClick={() => setToast(toast => !toast)} type="submit" className="mb-2 ingresar-button w-100">Ingresar</button>
                    </div>
                </div>
                <Link to="/registrarse">¿No tienes cuenta? registrate!</Link>
            </form>
        </>
    );
}

export default Login;