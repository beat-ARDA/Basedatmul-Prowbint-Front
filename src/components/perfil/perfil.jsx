import { React, useState } from 'react';
import './perfil.css';
import perfilImageVacia from '../../images/perfilSola.jpg'
import { Link } from 'react-router-dom';

export default function Perfil() {

    const [nombresPerfil, setNombresPerfil] = useState('Alvaro Ramses');
    const [apellidosPerfil, setApellidosPerfil] = useState('Duron Alejo');
    const [fechaNacimientoPerfil, setFechaNacimientoPerfil] = useState('1996-05-17');
    const [imagenPerfil, setImagenPerfil] = useState('');
    const [correoPerfil, setCorreoPerfil] = useState('alvaro_07051@outlook.com');
    const [contraseñaPerfil, setContraseñaPerfil] = useState('LinkinBeatlesBu$1');


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

    return (
        <form className='container'>
            <div className='row d-flex flex-column justify-content-center align-items-center'>
                <div className='col-12 d-flex justify-content-center pt-1'>
                    <div className='row d-flex flex-row p-0 m-0'>
                        <div className='col-10 p-0 m-0'>
                            <div
                                className='perfil-imagen'
                                style={{ backgroundImage: `url(${imagenPerfil !== "" ? imagenPerfil : perfilImageVacia})` }}>
                            </div>
                        </div>
                        <div className='col-2 p-0 m-0'>
                            <svg
                                onClick={() => setImagenPerfil('')}
                                className='basura-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex justify-content-center align-items-center'>

                    <h6 className='fw-bold p-0 m-0'>26 años</h6>
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
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='nombresPerfil' className=' fw-bold'>Nombre(s): </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="nombresPerfil" id="nombresPerfil" className='form-control' value={nombresPerfil} onChange={(e) => setNombresPerfil(e.target.value)} type="text" />
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='apellidosPerfil' className='fw-bold'>Apellido(s): </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="apellidosPerfil" id="apellidosPerfil" className='form-control' value={apellidosPerfil} type="text" onChange={(e) => setApellidosPerfil(e.target.value)} />
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='fechaNacimientoPerfil' className='fw-bold'>Fecha nacimiento: </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="fechaNacimientoPerfil" id="fechaNacimientoPerfil" className='form-control' defaultValue={fechaNacimientoPerfil} type="date" onChange={(e) => setFechaNacimientoPerfil(e.target.value)} />
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='correoPerfil' className='fw-bold'>Correo: </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="correoPerfil" id="correoPerfil" className='form-control' value={correoPerfil} type="email" onChange={(e) => setCorreoPerfil(e.target.value)} />
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='contraseñaPerfil' className='fw-bold'>Contraseña: </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="contraseñaPerfil" id="contraseñaPerfil" className='form-control' value={contraseñaPerfil} type="password" onChange={(e) => setContraseñaPerfil(e.target.value)} />
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='tipo-usuario' className='fw-bold'>Tipo usuario:</label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <select
                        defaultValue={""}
                        aria-describedby="reglas-tipo-usuario"
                        className="form-select text-secondary"
                        aria-label="Tipo de usuario"
                        name="tipo-usuario"
                        id="tipo-usuario">
                        <option defaultValue={"none"}>Selecciona el tipo de usuario</option>
                        <option value="Alumno">Alumno</option>
                        <option value="Instructor">Instructor</option>
                    </select>
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='genero-perfil' className='fw-bold'>Genero:</label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <select
                        defaultValue={""}
                        aria-describedby="reglas-genero"
                        className="form-select text-secondary"
                        aria-label="Genero"
                        name="genero-perfil"
                        id="genero-perfil">
                        <option defaultValue={"none"}>Selecciona tu genero</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </div>
            </div>
            <div className='row pt-3 m-0'>
                <div className='col-12 d-flex justify-content-end p-0 m-0'>
                    <button className='btn btn-dark w-25 me-2' type="button">Volver</button>
                    <button className='btn btn-dark w-25' type="submit">Actualizar</button>
                </div>
            </div>
        </form>
    );
}