import { React, useState } from "react";
import { Link } from "react-router-dom";
import './login.css';

function Login() {
    return (
        <form className="d-flex flex-column w-100 h-75 align-items-center justify-content-center login-padre" action="#">
            <h5>¡Ingresa tu cuenta de cursos!</h5>
            <svg
                className="login-icon mb-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512">
                <path
                    d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM512 256c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM256 272c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72z" /></svg>
            <div className="row w-100 p-0 m-0 d-flex flex-column align-items-center justify-content-center">
                <div className="col-xl-4 col-9">
                    <input name="correo" type="text" className="mb-2 login-input w-100" placeholder="Correo..." />
                </div>
                <div className="col-xl-4 col-9">
                    <input name="contraseña" type="password" className="mb-2 login-input w-100" placeholder="Contraseña..." />
                </div>
                <div className="col-xl-4 col-9">
                    <button type="submit" className="mb-2 ingresar-button w-100">Ingresar</button>
                </div>
            </div>
            <Link to="/registrarse">¿No tienes cuenta? registrate!</Link>
        </form>
    );
}

export default Login;