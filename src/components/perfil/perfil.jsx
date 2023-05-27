import { React, useState, useEffect } from 'react';
import './perfil.css';
import perfilImageVacia from '../../images/perfilSola.jpg'
import { useNavigate } from 'react-router-dom';
import { regexNombres, regexCorreo, regexContraseña } from '../../helpers';
import { GetUserProfileBDM, UpdateUserProfileBDM } from '../../servicesBDM/userService';
import { getUser, updateUser } from '../../servicesPw2/user';

export default function Perfil() {
    const [nombresPerfil, setNombresPerfil] = useState('');
    const [apellidosPerfil, setApellidosPerfil] = useState('');
    const [fechaNacimientoPerfil, setFechaNacimientoPerfil] = useState('');
    const [imagenPerfil, setImagenPerfil] = useState('');
    const [correoPerfil, setCorreoPerfil] = useState('');
    const [contraseñaPerfil, setContraseñaPerfil] = useState('');
    const [tipoUsuarioPerfil, setTipoUsuarioPerfil] = useState('');
    const [generoPerfil, setGeneroPerfil] = useState('');
    const [textoModal, setTextoModal] = useState('');
    const [nombresPerfilBool, setNombresPerfilBool] = useState(true);
    const [apellidosPerfilBool, setApellidosPerfilBool] = useState(true);
    const [fechaNacimientoPerfilBool, setFechaNacimientoPerfilBool] = useState(true);
    const [correoPerfilBool, setCorreoPerfilBool] = useState(true);
    const [contraseñaPerfilBool, setContraseñaPerfilBool] = useState(true);
    const [tipoUsuarioPerfilBool, setTipoUsuarioPerfilBool] = useState(true);
    const [generoPerfilBool, setGeneroPerfilBool] = useState(true);
    const [imagenPerfilBool, setImagenPerfilBool] = useState(true);
    const [dataPerfil, setDataPerfil] = useState();
    const [borroImagen, setBorroImagen] = useState(false);
    const [imagenServidor, setImagenServidor] = useState(true);

    const api = localStorage.getItem('api');

    const navigate = useNavigate();

    function calcularEdad(fecha) {
        var hoy = new Date();
        var cumpleanos = new Date(fecha);
        var edad = hoy.getFullYear() - cumpleanos.getFullYear();
        var m = hoy.getMonth() - cumpleanos.getMonth();

        if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
            edad--;
        }

        return edad;
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
        setBorroImagen(false);
        setImagenServidor(false);
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

    function validarCorreo(correo) {
        return regexCorreo.test(correo) ? true : false;
    }

    function validarContraseña(contraseña) {
        return regexContraseña.test(contraseña) ? true : false;
    }

    function validarNombres(nombres) {
        return regexNombres.test(nombres) ? true : false;
    }

    useEffect(() => {
        //Obtener el perfil del usuario

        api == 'pw2' ? getUser().then(jsonData => {
            let dateBirth = new Date(jsonData.user.birthdate);
            const year = dateBirth.getFullYear();
            const month = String(dateBirth.getMonth() + 1).padStart(2, '0');
            const day = String(dateBirth.getDate()).padStart(2, '0');

            const date = `${year}-${month}-${day}`;

            console.log(jsonData.user.firstNames);
            console.log(jsonData.user.lastNames);

            setDataPerfil(jsonData);
            setImagenPerfil(jsonData.user.imageProfile);
            setNombresPerfil(jsonData.user.firstNames);
            setApellidosPerfil(jsonData.user.lastNames);
            setCorreoPerfil(jsonData.user.email);
            setContraseñaPerfil(jsonData.user.pass);
            setGeneroPerfil(jsonData.user.gender);
            setTipoUsuarioPerfil(jsonData.user.userType);
            setFechaNacimientoPerfil(date);
        }) :
            GetUserProfileBDM()
                .then(jsonData => {
                    setDataPerfil(jsonData);
                    setImagenPerfil(jsonData.user.imageProfile);
                    setNombresPerfil(jsonData.user.firstNames);
                    setApellidosPerfil(jsonData.user.lastNames);
                    setCorreoPerfil(jsonData.user.email);
                    setContraseñaPerfil(jsonData.user.pass);
                    setGeneroPerfil(jsonData.user.gender);
                    setTipoUsuarioPerfil(jsonData.user.userType);
                    setFechaNacimientoPerfil(jsonData.user.birthDate);
                });
    }, []);

    if (dataPerfil) {
        return (
            <form
                id='perfilForm'
                encType="multipart/form-data"
                onSubmit={(e) => {
                    e.preventDefault();
                    let comprobacion =
                        nombresPerfilBool &&
                            apellidosPerfilBool &&
                            fechaNacimientoPerfilBool &&
                            correoPerfilBool &&
                            contraseñaPerfilBool &&
                            tipoUsuarioPerfilBool &&
                            generoPerfilBool ? true : false;

                    const bodyData = new FormData(document.getElementById('perfilForm'));

                    const bodyDatapw2 = new FormData(document.getElementById('perfilForm'));
                    bodyDatapw2.append('pass', contraseñaPerfil);

                    bodyData.append('borroImagen', borroImagen ? true : false);

                    comprobacion ? (api == 'pw2' ? updateUser(bodyDatapw2).then((response) => {
                        console.log(response);
                    }) : UpdateUserProfileBDM(bodyData).then(response => {
                        setTextoModal(response.message);
                    })) : setTextoModal("Faltan campos por rellenar");
                }}
                className='container-fluid perfil-padre px-xl-4 pb-2'>
                <div className='row d-flex flex-column justify-content-center align-items-center'>
                    <div className='col-12 d-flex justify-content-center pt-1'>
                        <div className='row d-flex flex-row p-0 m-0'>
                            <div className='col-10 p-0 m-0'>
                                <div
                                    className='perfil-imagen'
                                    style={{ backgroundImage: `url(${imagenPerfil !== "" ? (imagenServidor ? `data:image/jpeg;base64,${imagenPerfil}` : imagenPerfil) : perfilImageVacia})` }}>
                                </div>
                            </div>
                            <div className='col-2 p-0 m-0'>
                                <svg
                                    onClick={() => {
                                        setImagenPerfil('');
                                        setImagenPerfilBool(false);
                                        setBorroImagen(true);
                                        setImagenServidor(false);
                                    }}
                                    className='basura-icon'
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <h6 className='fw-bold p-0 m-0'>{calcularEdad(dataPerfil.user.birthdate)} años</h6>
                    </div>
                    <div className='col-12 d-flex justify-content-center align-items-center'>
                        <input
                            onChange={(e) => {
                                manejoImagenPerfil(e);
                            }}
                            className="d-none"
                            id="imagen-perfil"
                            accept="image/png, image/jpg, image/jpeg"
                            name="imagen-perfil"
                            type="file" />
                        <label className="btn btn-dark" htmlFor="imagen-perfil">Selecciona una imagen de perfil</label>
                    </div>
                </div>
                <div className='row pt-1'>
                    <div className='col-xl-1 col-3 d-flex justify-content-xl-start justify-content-center align-items-center p-0 m-0'>
                        <label htmlFor='nombresPerfil' className=' fw-bold'>Nombre(s): </label>
                    </div>
                    <div className='col-xl-11 col-9 d-flex justify-content-center align-items-center p-0 m-0'>
                        <input
                            aria-describedby="reglas-nombres"
                            name="nombresPerfil"
                            id="nombresPerfil"
                            className='form-control'
                            value={nombresPerfil}
                            onInput={e => {
                                e.target.value == " " ? setNombresPerfil("") : setNombresPerfil(e.target.value.replace(/(\s{2,})/g, ' '));
                                e.target.value ? setNombresPerfilBool(validarNombres(e.target.value)) : setNombresPerfilBool(false);
                            }}
                            type="text" />
                    </div>
                </div>
                <div id="reglas-nombres" className={`form-text row ${nombresPerfilBool ? 'text-success' : 'text-danger'}`}>
                    <div className='col-xl-12 col-6 '>
                        {nombresPerfilBool ? '¡Campo validado!' : '¡El texto no coincide o esta vacio!'}
                    </div>
                </div>
                <div className='row pt-1'>
                    <div className='col-xl-1 col-3 d-flex justify-content-xl-start justify-content-center align-items-center p-0 m-0'>
                        <label htmlFor='apellidosPerfil' className='fw-bold'>Apellido(s): </label>
                    </div>
                    <div className='col-xl-11 col-9 d-flex justify-content-center align-items-center p-0 m-0'>
                        <input
                            aria-describedby="reglas-apellidos"
                            name="apellidosPerfil"
                            id="apellidosPerfil"
                            className='form-control'
                            value={apellidosPerfil}
                            type="text"
                            onInput={e => {
                                e.target.value == " " ? setApellidosPerfil("") : setApellidosPerfil(e.target.value.replace(/(\s{2,})/g, ' '));
                                e.target.value ? setApellidosPerfilBool(validarNombres(e.target.value)) : setApellidosPerfilBool(false);
                            }} />
                    </div>
                    <div id="reglas-apellidos" className={`form-text row ${apellidosPerfilBool ? 'text-success' : 'text-danger'}`}>
                        <div className='col-xl-12 col-6 '>
                            {apellidosPerfilBool ? '¡Campo validado!' : '¡El texto no coincide o esta vacio!'}
                        </div>
                    </div>
                </div>
                <div className='row pt-1'>
                    <div className='col-xl-1 col-3 d-flex justify-content-xl-start justify-content-center align-items-center p-0 m-0'>
                        <label htmlFor='fechaNacimientoPerfil' className='fw-bold'>Fecha: </label>
                    </div>
                    <div className='col-xl-11 col-9 d-flex justify-content-center align-items-center p-0 m-0'>
                        <input
                            value={fechaNacimientoPerfil}
                            max={maxFechaNacimiento()}
                            name="fechaNacimientoPerfil"
                            id="fechaNacimientoPerfil"
                            className="form-control"
                            type="date"
                            onInput={e => {
                                setFechaNacimientoPerfil(e.target.value);
                                setFechaNacimientoPerfilBool(validarEdad(e.target.value));
                            }}
                            aria-describedby="reglas-fecha-nacmiento-perfil"
                        />
                    </div>
                    <div id="reglas-fecha-nacmiento" className={`form-text row ${fechaNacimientoPerfilBool ? 'text-success' : 'text-danger'}`}>
                        <div className='col-xl-12 col-6 '>
                            {fechaNacimientoPerfilBool ? '¡Edad valida!' : 'Debes de ser mayor de 18 años'}
                        </div>
                    </div>
                </div>
                <div className='row pt-1'>
                    <div className='col-xl-1 col-3 d-flex justify-content-xl-start justify-content-center align-items-center p-0 m-0'>
                        <label htmlFor='correoPerfil' className='fw-bold'>Correo: </label>
                    </div>
                    <div className='col-xl-11 col-9 d-flex justify-content-center align-items-center p-0 m-0'>
                        <input
                            value={correoPerfil}
                            onChange={(e) => setCorreoPerfil(e.target.value)}
                            onInput={(e) => {
                                e.target.value ?
                                    setCorreoPerfilBool(validarCorreo(e.target.value)) :
                                    setCorreoPerfilBool(false);
                            }}
                            aria-describedby="reglas-correo-perfil"
                            placeholder='Correo...'
                            name="correoPerfil"
                            id="correoPerfil"
                            className='form-control'
                            type="email" />
                    </div>
                    <div id="reglas-correo-perfil" className={`form-text row ${correoPerfilBool ? 'text-success' : 'text-danger'}`}>
                        <div className='col-xl-12 col-6 '>
                            {correoPerfilBool ? '¡Correo valido!' : 'Introduce un correo valido'}
                        </div>
                    </div>
                </div>
                <div className='row pt-1'>
                    <div className='col-xl-1 col-3 d-flex justify-content-xl-start justify-content-center align-items-center p-0 m-0'>
                        <label htmlFor='contraseñaPerfil' className='fw-bold'>Contraseña: </label>
                    </div>
                    <div className='col-xl-11 col-9 d-flex justify-content-center align-items-center p-0 m-0'>
                        <input
                            aria-describedby="reglas-contraseña-perfil"
                            name="contraseñaPerfil"
                            id="contraseñaPerfil"
                            className='form-control'
                            value={contraseñaPerfil}
                            type="password"
                            onChange={(e) => setContraseñaPerfil(e.target.value)}
                            onInput={e => {
                                e.target.value ?
                                    setContraseñaPerfilBool(validarContraseña(e.target.value)) :
                                    setContraseñaPerfilBool(false)
                            }}
                        />
                    </div>
                    <div id="reglas-contraseña-perfil" className={`form-text row ${contraseñaPerfilBool ? 'text-success' : 'text-danger'}`}>
                        <div className='col-xl-12 col-6 '>
                            {contraseñaPerfilBool ? '¡Contraseña valida!' : '8 caracteres al menos, una mayuscula, un caracter especial y un numero al menos.'}
                        </div>
                    </div>
                </div>
                <div className='row pt-1'>
                    <div className='col-xl-1 col-3 d-flex justify-content-xl-start justify-content-center align-items-center p-0 m-0'>
                        <label htmlFor='tipo-usuario' className='fw-bold'>Tipo usuario:</label>
                    </div>
                    <div className='col-xl-11 col-9 d-flex justify-content-center align-items-center p-0 m-0'>
                        <select

                            onChange={(e) => setTipoUsuarioPerfil(e.target.value)}
                            onInput={e => {
                                e.target.value && e.target.value != "Selecciona el tipo de usuario" ?
                                    setTipoUsuarioPerfilBool(true) :
                                    setTipoUsuarioPerfilBool(false)
                            }}
                            defaultValue={tipoUsuarioPerfil}
                            aria-describedby="reglas-tipo-usuario-perfil"
                            className="form-select text-secondary"
                            aria-label="Tipo de usuario"
                            name="tipo-usuario-perfil"
                            id="tipo-usuario-perfil">
                            <option defaultValue={''}>Selecciona el tipo de usuario</option>
                            <option value="Alumno">Alumno</option>
                            <option value="Instructor">Instructor</option>
                        </select>
                    </div>
                    <div id="reglas-tipo-usuario-perfil" className={`form-text row ${tipoUsuarioPerfilBool ? 'text-success' : 'text-danger'}`}>
                        <div className='col-xl-12 col-6 '>
                            {tipoUsuarioPerfilBool ? '¡Campo validado!' : 'Este campo es (Obligatorio)'}
                        </div>
                    </div>
                </div>
                <div className='row pt-1'>
                    <div className='col-xl-1 col-3 d-flex justify-content-xl-start justify-content-center align-items-center p-0 m-0'>
                        <label htmlFor='genero-perfil' className='fw-bold'>Genero:</label>
                    </div>
                    <div className='col-xl-11 col-9 d-flex justify-content-center align-items-center p-0 m-0'>
                        <select
                            onChange={(e) => setGeneroPerfil(e.target.value)}
                            onInput={e => {
                                e.target.value && e.target.value != "Selecciona tu genero" ?
                                    setGeneroPerfilBool(true) :
                                    setGeneroPerfilBool(false)
                            }}
                            defaultValue={generoPerfil}
                            aria-describedby="reglas-genero-perfil"
                            className="form-select text-secondary"
                            aria-label="Genero"
                            name="genero-perfil"
                            id="genero-perfil">
                            <option defaultValue={"none"}>Selecciona tu genero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                        </select>
                    </div>
                    <div id="reglas-genero-perfil" className={`form-text row ${generoPerfilBool ? 'text-success' : 'text-danger'}`}>
                        <div className='col-xl-12 col-6 '>
                            {generoPerfilBool ? '¡Campo validado!' : 'Este campo es (Obligatorio)'}
                        </div>
                    </div>
                </div>
                <div className='row pt-3 m-0'>
                    <div className='col-12 d-flex justify-content-end p-0 m-0'>
                        <button onClick={() => navigate('/')} className='btn btn-dark w-xl-25 w-100 me-2' type="button">Volver</button>
                        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-dark w-xl-25 w-100' type="submit">Actualizar</button>
                    </div>
                </div>
                <div className="modal fade modal-xd" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Mensaje</h1>
                                <button onClick={() => location.reload()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {textoModal}
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => location.reload()} type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}