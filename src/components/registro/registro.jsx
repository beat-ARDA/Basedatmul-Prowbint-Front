import React from 'react';

export default function Registro() {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <form className='w-50'>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <h4 className='fw-bold'>Empieza hoy con tu cuenta de cursos!</h4>
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input aria-describedby="reglas-nombres" name="nombres" className='form-control' type={"text"} placeholder="Nombres..." />
                    </div>
                    <div id="reglas-nombres" class="form-text">
                        Este campo es (Obligatorio)
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input aria-describedby="reglas-apellidos" name="apellidos" className='form-control' type={"text"} placeholder="Apellidos..." />
                    </div>
                    <div id="reglas-apellidos" class="form-text">
                        Este campo es (Obligatorio)
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input aria-describedby="reglas-fecha-nacmiento" className='form-control' type="date" name="Fecha nacimiento" />
                    </div>
                    <div id="reglas-fecha-nacmiento" className="form-text">
                        Este campo es (Obligatorio)
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input className="form-control text-secondary" type="file" id="foto-perfil" name="foto-perfil" />
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input aria-describedby="reglas-correo" placeholder='Correo...' className="form-control" type="email" id="correo" name="correo" />
                    </div>
                    <div id="reglas-correo" className="form-text">
                        Este campo es (Obligatorio)
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <input aria-describedby="reglas-contraseña" placeholder='Contraseña...' className="form-control" type="password" id="contraseña" name="contraseña" />
                    </div>
                    <div id="reglas-contraseña" class="form-text">
                        8 caracteres al menos, una mayuscula, un caracter especial y un numero al menos.
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <select aria-describedby="reglas-tipo-usuario" className="form-select text-secondary" aria-label="Tipo de usuario" name="tipo-usuario">
                            <option selected>Selecciona el tipo de usuario</option>
                            <option value="Alumno">Alumno</option>
                            <option value="Instructor">Instructor</option>
                        </select>
                    </div>
                    <div id="reglas-tipo-usuario" className="form-text">
                        Este campo es (Obligatorio)
                    </div>
                </div>
                <div className='row m-0 pb-1'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <select aria-describedby="reglas-genero" className="form-select text-secondary" aria-label="Tipo de usuario" name="tipo-usuario">
                            <option selected>Selecciona un genero</option>
                            <option value="Masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                        </select>
                    </div>
                    <div id="reglas-genero" className="form-text">
                        Este campo es (Obligatorio)
                    </div>
                </div>
                <div className='row m-0 p-0'>
                    <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                        <button type="submit" class="btn btn-dark w-100">Registrarse</button>
                    </div>
                </div>
            </form>
        </div>
    );
}