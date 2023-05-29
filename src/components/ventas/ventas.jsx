import { React, useEffect, useState } from 'react';
import './ventas.css';
import { Link } from 'react-router-dom';
import { DeleteCourse, GetCoursesTeacher } from '../../servicesBDM/courses';

function ItemCursoVentas({ curso, cantidadAlumnos, nivelPromedio, totalCurso }) {
    return (
        <div className='row d-flex justify-content-center align-items border-bottom py-2'>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{curso}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{cantidadAlumnos}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{nivelPromedio}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{totalCurso}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>

            </div>
            <div className='col-2 d-flex justify-content-center align-items'>

            </div>
        </div>
    );
}

function ListaCursosVentas() {
    return (
        <div className='col-xl-12 d-flex flex-column justify-content-center alig-items-center pt-4'>
            <div className='row d-flex justify-content-center align-items border-bottom border-dark'>
                <div className='col-2 d-flex justify-content-center align-items'>
                    <small className='text-dark fw-bold texto-mobile'>Curso</small>
                </div>
                <div className='col-2  d-flex justify-content-center align-items'>
                    <small className='text-dark fw-bold texto-mobile'>Cantidad de alumnos inscritos</small>
                </div>
                <div className='col-2  d-flex justify-content-center align-items'>
                    <small className='text-dark fw-bold texto-mobile'>Nivel promedio cursado</small>
                </div>
                <div className='col-2 d-flex justify-content-center align-items'>
                    <small className='text-dark fw-bold texto-mobile'>Total por curso</small>
                </div>
                <div className='col-4 d-flex justify-content-center align-items'>
                    <small className='text-dark fw-bold texto-mobile'>Total</small>
                </div>

            </div>
            <div className='altura-lista'>
                <ItemCursoVentas curso={"react"} cantidadAlumnos={"50"} nivelPromedio={"4"} totalCurso={"$5000"} />
                <ItemCursoVentas curso={"react"} cantidadAlumnos={"50"} nivelPromedio={"4"} totalCurso={"$5000"} />
                <ItemCursoVentas curso={"react"} cantidadAlumnos={"50"} nivelPromedio={"4"} totalCurso={"$5000"} />
                <ItemCursoVentas curso={"react"} cantidadAlumnos={"50"} nivelPromedio={"4"} totalCurso={"$5000"} />
                <ItemCursoVentas curso={"react"} cantidadAlumnos={"50"} nivelPromedio={"4"} totalCurso={"$5000"} />
            </div>
            <div className='row w-100 d-flex justify-content-center align-items border-bottom'>
                <div className='col-2 d-flex justify-content-center align-items'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items'>
                </div>
                <div className='col-2 d-flex justify-content-center align-items'>
                    <small className='text-danger fw-bold'>{"$25,000"}</small>
                </div>
            </div>
        </div>
    );
}

function ItemAlumnoVentas({ curso, nombreAlumno, fechaInscripcion, nivelAvance, precioPagado, formaPago }) {
    return (
        <div className='row w-100 d-flex justify-content-center align-items border-bottom py-2'>
            <div className='col-1 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{curso}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{nombreAlumno}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{fechaInscripcion}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{nivelAvance}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{precioPagado}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile'>{formaPago}</small>
            </div>
            <div className='col-1 d-flex justify-content-center align-items'>

            </div>
        </div>
    );
}

function ListaAlumnosVentas({ dataCursos }) {

    const [idCurso, setIdCurso] = useState();

    return (
        <div className='col-xl-12 d-flex flex-column justify-content-center alig-items-center pt-4'>
            <div className='row d-flex justify-content-center'>
                <select
                    onChange={(e) => {
                        setIdCurso(e.target.value);
                    }}
                    aria-describedby="curso-ventas"
                    className="form-select text-secondary w-50 mb-2"
                    aria-label="Curso"
                    name="curso-ventas"
                    id="curso-ventas">
                    <option defaultValue={""}>Selecciona un curso</option>
                    {
                        dataCursos.map((curso, index) => {
                            return (
                                <option key={index} value={curso.idCurso}>{curso.titulo}</option>
                            );
                        })
                    }
                </select>
                <button
                    disabled={idCurso && idCurso !== '' ? false : true}
                    onClick={() => {
                        console.log(idCurso);
                        DeleteCourse(idCurso).then((data) => {
                            console.log(data);
                        })

                    }}
                    className="btn btn-danger text-white w-25 h-75">Desactivar curso</button>
                <Link className="btn btn-dark text-white w-25 h-75" to="/crear-curso">
                    Crear curso
                </Link>
            </div>
            <div className='row w-100 d-flex justify-content-center align-items border-bottom border-dark'>
                <div className='col-1 d-flex justify-content-center align-items-center'>
                    <small className='text-dark fw-bold texto-mobile'>Curso</small>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <small className='text-dark fw-bold texto-mobile'>Nombre alumno</small>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <small className='text-dark fw-bold texto-mobile'>Fecha inscripcion</small>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <small className='text-dark fw-bold texto-mobile'>Nivel avance</small>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <small className='text-dark fw-bold texto-mobile'>Precio pagado</small>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <small className='text-dark fw-bold texto-mobile'>Forma de pago</small>
                </div>
                <div className='col-1 d-flex justify-content-center align-items-center'>
                    <small className='text-dark fw-bold texto-mobile'>Total</small>
                </div>
            </div>
            <div className='altura-lista'>
                <ItemAlumnoVentas
                    curso={"react"}
                    nombreAlumno={"Alvaro Duron"}
                    fechaInscripcion={"17-May-1996"}
                    nivelAvance={"50%"}
                    precioPagado={"$100"}
                    formaPago={"Debito"} />
                <ItemAlumnoVentas
                    curso={"react"}
                    nombreAlumno={"Alvaro Duron"}
                    fechaInscripcion={"17-May-1996"}
                    nivelAvance={"50%"}
                    precioPagado={"$100"}
                    formaPago={"Debito"} />
                <ItemAlumnoVentas
                    curso={"react"}
                    nombreAlumno={"Alvaro Duron"}
                    fechaInscripcion={"17-May-1996"}
                    nivelAvance={"50%"}
                    precioPagado={"$100"}
                    formaPago={"Debito"} />
                <ItemAlumnoVentas
                    curso={"react"}
                    nombreAlumno={"Alvaro Duron"}
                    fechaInscripcion={"17-May-1996"}
                    nivelAvance={"50%"}
                    precioPagado={"$100"}
                    formaPago={"Debito"} />
                <ItemAlumnoVentas
                    curso={"react"}
                    nombreAlumno={"Alvaro Duron"}
                    fechaInscripcion={"17-May-1996"}
                    nivelAvance={"50%"}
                    precioPagado={"$100"}
                    formaPago={"Debito"} />
            </div>
            <div className='row w-100 d-flex justify-content-center align-items border-bottom'>
                <div className='col-1 d-flex justify-content-center align-items-center'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>

                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>

                </div>
                <div className='col-1 d-flex justify-content-center align-items-center'>
                    <small className='text-danger fw-bold'>$25000</small>
                </div>
            </div>

        </div>
    );
}

function Filtros() {
    return (
        <form className='d-flex'>
            <div className='col-3'>
                <input type={"date"} className='form-control' name="fecha-inicio" />
            </div>
            <div className='col-3'>
                <input type={"date"} className='form-control' name="fecha-termina" />
            </div>
            <div className='col-3'>
                <select
                    aria-describedby="categorias-ventas"
                    className="form-select text-secondary"
                    aria-label="Categorias"
                    name="categorias-ventas"
                    id="categorias-ventas">
                    <option value={"Todas"}>Todas las categorias</option>
                    <option value="Programacion">Programacion</option>

                </select>
            </div>
            <div className='col-3'>
                <select
                    aria-describedby="categorias-ventas"
                    className="form-select text-secondary"
                    aria-label="Categorias"
                    name="categorias-ventas"
                    id="categorias-ventas">
                    <option value={"Todos"}>Todos los cursos</option>
                    <option value="Activos">Activos</option>
                </select>
            </div>
        </form>
    );
}

export default function Ventas() {

    const [dataCursos, setDataCursos] = useState();

    useEffect(() => {
        let formData = new FormData();
        formData.append('usuario', localStorage.getItem('userId'));
        GetCoursesTeacher(formData).then((data) => {
            setDataCursos(data.courses);
        })
    }, []);

    if (!dataCursos) {
        return (<h5>Waitin for data</h5>);
    }
    else {
        return (
            <div className='container-fluid padre-ventas py-2'>
                <div className='row d-flex mb-2'>
                    <Filtros />
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className='fw-bold text-dark p-0 m-0 text-center'>Ventas</h5>
                    </div>
                </div>
                <div className='row'>
                    <ListaCursosVentas />
                </div>
                <div className='row'>
                    <ListaAlumnosVentas dataCursos={dataCursos} />
                </div>
            </div>
        );
    }
}