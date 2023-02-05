import { React, useState } from "react";
import './login.css';

function Login() {
    return (
        <form className="d-flex flex-column w-100 align-items-center justify-content-center" action="#">
            <input type="text" />
            <input type="password" />
            <button type="submit">Ingresar</button>
            <a href="./">¿No tienes cuenta? registrate!</a>
        </form>
    );
}

export default Login;