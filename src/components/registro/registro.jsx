import { React, useState } from 'react';
import './registro.css';

export default function Registro() {

    const regexNombres = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+(\s[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/;
    const regexCorreo = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const regexContraseña = /^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/;

    function validarNombres(nombres) {
        return regexNombres.test(nombres) ? true : false;
    }

    function validarCorreo(correo) {
        return regexCorreo.test(correo) ? true : false;
    }

    function validarContraseña(contraseña) {
        return regexContraseña.test(contraseña) ? true : false;
    }

    function validarEdad(fechaParam) {
        let hoy = new Date();
        let fechaNacimiento = new Date(fechaParam);
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
        if (
            diferenciaMeses < 0 ||
            (diferenciaMeses === 0 && hoy.getDate() <= fechaNacimiento.getDate())
        ) {
            edad--;
        }

        return edad < 18 ? false : true;
    }

    function maxFechaNacimiento() {
        let fecha = new Date;
        let today = new Date;
        var dd = fecha.getDate();
        var mm = fecha.getMonth() + 1;
        var yyyy = fecha.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = yyyy + '-' + mm + '-' + dd;

        return today;
    }

    function manejoImagenPerfil(e) {
        const archivo = e.target.files[0];

        var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
        if (!allowedExtensions.exec(archivo.name)) {
            alert("Extension de imagen no permitida");
            return;
        }

        if (archivo == undefined || archivo == null) {
            return;
        }

        const objectURL = URL.createObjectURL(archivo);
        setImagenPerfil(objectURL);

    }

    const [nombresCompleto, setNombresCompleto] = useState(false);
    const [apellidosCompleto, setApellidosCompleto] = useState(false);
    const [fechaCompleto, setFechaCompleto] = useState(false);
    const [correoCompleto, setCorreoCompleto] = useState(false);
    const [contraseñaCompleto, setContraseñaCompleto] = useState(false);
    const [tipoUsuarioCompleto, setTipoUsuarioCompleto] = useState(false);
    const [generoCompleto, setGeneroCompleto] = useState(false);

    const [nombres, setNombres] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [fecha, setFecha] = useState('');
    const [imagenPerfil, setImagenPerfil] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [genero, setGenero] = useState('');

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <form className='w-50 padre-registro'>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <h4 className='fw-bold'>Empieza hoy con tu cuenta de cursos!</h4>
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input
                            value={nombres}
                            onInput={e => {
                                e.target.value == " " ? setNombres("") : setNombres(e.target.value.replace(/(\s{2,})/g, ' '));
                                e.target.value ? setNombresCompleto(validarNombres(e.target.value)) : setNombresCompleto(false);
                            }}
                            aria-describedby="reglas-nombres"
                            name="nombres"
                            className='form-control'
                            type={"text"}
                            placeholder="Nombres..."
                        />
                    </div>
                    <div id="reglas-nombres" className={`form-text ${nombresCompleto ? 'text-success' : 'text-danger'}`}>
                        {nombresCompleto ? '¡Campo validado!' : '¡El texto no coincide o esta vacio!'}
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input
                            value={apellidos}
                            onInput={e => {
                                e.target.value == " " ? setApellidos("") : setApellidos(e.target.value.replace(/(\s{2,})/g, ' '));
                                e.target.value ? setApellidosCompleto(validarNombres(e.target.value)) : setApellidosCompleto(false);
                            }}
                            aria-describedby="reglas-apellidos"
                            name="apellidos"
                            className='form-control'
                            type={"text"}
                            placeholder="Apellidos..." />
                    </div>
                    <div id="reglas-apellidos" className={`form-text ${apellidosCompleto ? 'text-success' : 'text-danger'}`}>
                        {apellidosCompleto ? '¡Campo validado!' : '¡El texto no coincide o esta vacio!'}
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input
                            value={fecha}
                            max={maxFechaNacimiento()}
                            onInput={e => {
                                setFecha(e.target.value);
                                setFechaCompleto(validarEdad(e.target.value));
                            }}
                            aria-describedby="reglas-fecha-nacmiento"
                            className='form-control'
                            type="date"
                            name="Fecha nacimiento"
                        />
                    </div>
                    <div id="reglas-fecha-nacmiento" className={`form-text ${fechaCompleto ? 'text-success' : 'text-danger'}`}>
                        {fechaCompleto ? '¡Edad valida!' : 'Debes de ser mayor de 18 años'}
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input
                            onChange={(e) => {
                                manejoImagenPerfil(e);
                            }}
                            className="d-none"
                            id="imagen-perfil"
                            accept="image/png, image/jpg, image/jpeg"
                            name="imagen-perfil"
                            type="file" />
                        <label id="imagen-perfil-fake" className="btn btn-dark" htmlFor="imagen-perfil">Selecciona una imagen de perfil</label>
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <img id="imagen-perfil-prev" className="texto-perfil-fake w-25 h-100 rounded" src={imagenPerfil} alt="Imagen prev"></img>
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input
                            onInput={e => {
                                e.target.value ?
                                    setCorreoCompleto(validarCorreo(e.target.value)) :
                                    setCorreoCompleto(false)
                            }}
                            aria-describedby="reglas-correo"
                            placeholder='Correo...'
                            className="form-control"
                            type="email"
                            id="correo"
                            name="correo" />
                    </div>
                    <div id="reglas-correo" className={`form-text ${correoCompleto ? 'text-success' : 'text-danger'}`}>
                        {correoCompleto ? '¡Correo valido!' : 'Introduce un correo valido'}
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input
                            onInput={e => {
                                e.target.value ?
                                    setContraseñaCompleto(validarContraseña(e.target.value)) :
                                    setContraseñaCompleto(false)
                            }}
                            aria-describedby="reglas-contraseña"
                            placeholder='Contraseña...'
                            className="form-control"
                            type="password"
                            id="contraseña"
                            name="contraseña" />
                    </div>
                    <div id="reglas-contraseña" className={`form-text ${contraseñaCompleto ? 'text-success' : 'text-danger'}`}>
                        {contraseñaCompleto ? '¡Contraseña valida!' : '8 caracteres al menos, una mayuscula, un caracter especial y un numero al menos.'}
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <select
                            onInput={e => {
                                e.target.value && e.target.value != "Selecciona el tipo de usuario" ?
                                    setTipoUsuarioCompleto(true) :
                                    setTipoUsuarioCompleto(false)
                            }}
                            defaultValue={"none"}
                            aria-describedby="reglas-tipo-usuario"
                            className="form-select text-secondary"
                            aria-label="Tipo de usuario"
                            name="tipo-usuario">
                            <option defaultValue={"none"}>Selecciona el tipo de usuario</option>
                            <option value="Alumno">Alumno</option>
                            <option value="Instructor">Instructor</option>
                        </select>
                    </div>
                    <div id="reglas-tipo-usuario" className={`form-text ${tipoUsuarioCompleto ? 'text-success' : 'text-danger'}`}>
                        {tipoUsuarioCompleto ? '¡Campo validado!' : 'Este campo es (Obligatorio)'}
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <select
                            onInput={e => {
                                e.target.value && e.target.value != "Selecciona un genero" ?
                                    setGeneroCompleto(true) :
                                    setGeneroCompleto(false)
                            }}
                            defaultValue={"none"}
                            aria-describedby="reglas-genero"
                            className="form-select text-secondary"
                            aria-label="Tipo de usuario"
                            name="tipo-usuario">
                            <option defaultValue={"none"}>Selecciona un genero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div id="reglas-genero" className={`form-text ${generoCompleto ? 'text-success' : 'text-danger'}`}>
                        {generoCompleto ? '¡Campo validado!' : 'Este campo es (Obligatorio)'}
                    </div>
                </div>
                <div className='row m-0 p-0'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" className="btn btn-dark w-100">Registrarse</button>
                    </div>
                </div>
            </form>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Error</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Faltan campos por rellenar
                        </div>
                        <div class="modal-footer">
                            <button type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}