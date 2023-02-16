import { React, useState } from 'react';
import './kardex.css';
import imagen from '../../images/c++.png'

function Filtros() {
    return (
        <form className='row'>
            <div className='col-xl-3 col-12'>
                <input name='fecha-inicial' type="date" className='form-control' />
            </div>
            <div className='col-xl-3 col-12'>
                <input name='fecha-final' type="date" className='form-control' />
            </div>
            <div className='col-xl-3 col-12'>
                <select
                    defaultValue={"Todos"}
                    aria-describedby="categorias"
                    className="form-select text-secondary"
                    aria-label="Categorias"
                    name="categorias">
                    <option value="Todos">Todas las categorias</option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="Base de datos">Base de datos</option>
                </select>
            </div>
            <div className='col-xl-3 col-12'>
                <select
                    defaultValue={"Todos"}
                    aria-describedby="Cursos"
                    className="form-select text-secondary"
                    aria-label="Cursos"
                    name="cursos">
                    <option value="Todos">Todos los cursos</option>
                    <option value="Tecnologia">Terminados</option>
                    <option value="Base de datos">Activos</option>
                </select>
            </div>
        </form >
    );
}

function TarjetaKardex({ progreso, imagen, titulo, instructor, fechaInscripcion, fechaUltimaVista, fechaTerminacionCurso }) {
    return (
        <div className='col-xl-4 border my-1'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <img className='imagen-tarjeta-kardex' src={imagen} />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <h6 className='fw-bold text-dark p-0 m-0'>{titulo}</h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <h6 className='fw-bold text-dark p-0 m-0'>{progreso}</h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <small className='fw-bold text-secondary p-0 m-0'>{instructor}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <small className='fw-bold text-secondary p-0 m-0'>Fecha inscripcion: {fechaInscripcion}</small>

                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <small className='fw-bold text-secondary p-0 m-0'>Ultima visita: {fechaUltimaVista}</small>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <small className='fw-bold text-secondary p-0 m-0'>Fecha terminacion del curso: {fechaTerminacionCurso}</small>
                </div>
            </div>
        </div>
    );
}

export default function Kardex() {
    return (
        <div className='container-fluid padre-kardex pt-2 d-flex justify-content-center align-items-center'>
            <div className='row w-75'>
                <div className='col-12'>
                    <h5 className='fw-bold text-dark text-center'>Kardex</h5>
                </div>
                <div className='col-12'>
                    <Filtros />
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='row w-100'>
                        <TarjetaKardex progreso={"20%"} imagen={imagen} titulo={"Titulo de la tarjeta"} instructor={"Alvaro Duron"} fechaInscripcion={"17/05/1996"} fechaUltimaVista={"17/06/1996"} fechaTerminacionCurso={"15/06/1996"} />
                        <TarjetaKardex progreso={"20%"} imagen={imagen} titulo={"Titulo de la tarjeta"} instructor={"Alvaro Duron"} fechaInscripcion={"17/05/1996"} fechaUltimaVista={"17/06/1996"} fechaTerminacionCurso={"15/06/1996"} />
                        <TarjetaKardex progreso={"20%"} imagen={imagen} titulo={"Titulo de la tarjeta"} instructor={"Alvaro Duron"} fechaInscripcion={"17/05/1996"} fechaUltimaVista={"17/06/1996"} fechaTerminacionCurso={"15/06/1996"} />
                        <TarjetaKardex progreso={"20%"} imagen={imagen} titulo={"Titulo de la tarjeta"} instructor={"Alvaro Duron"} fechaInscripcion={"17/05/1996"} fechaUltimaVista={"17/06/1996"} fechaTerminacionCurso={"15/06/1996"} />
                    </div>
                </div>
            </div>
        </div>
    );
}