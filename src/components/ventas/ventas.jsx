import { React, useEffect, useState } from 'react';
import './ventas.css';
import { Link, useNavigate } from 'react-router-dom';
import { DeleteCourse, GetCoursesTeacher } from '../../servicesBDM/courses';
import { GetReports } from '../../servicesBDM/reports';
import { GetCategories } from '../../servicesBDM/categories';

function ItemCursoVentas({ curso, cantidadAlumnos, nivelPromedio, totalCurso, formaPago, totalVentas }) {
    return (
        <div className='row d-flex justify-content-center align-items border-bottom py-2'>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-dark texto-mobile fw-bold'>{curso}</small>
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
                <small className='text-dark texto-mobile'>{formaPago}</small>
            </div>
            <div className='col-2 d-flex justify-content-center align-items'>
                <small className='text-success texto-mobile'>{totalVentas}</small>
            </div>
        </div>
    );
}

function ListaCursosVentas({ reporteVentas }) {

    const [totalVentas, setTotalVentas] = useState(0);
    const [totalVentasAlumno, setTotalVentasAlumno] = useState(0);

    useState(() => {
        let totalVentas = 0;
        reporteVentas.forEach((item, index) => {
            totalVentas += item.total;
        })
        setTotalVentas(totalVentas);
    }, []);

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
                <div className='col-2 d-flex justify-content-center align-items'>
                    <small className='text-dark fw-bold texto-mobile'>forma pago</small>
                </div>
                <div className='col-2 d-flex justify-content-center align-items'>
                    <small className='text-dark fw-bold texto-mobile'>Total</small>
                </div>

            </div>
            <div className='altura-lista'>
                {

                    reporteVentas.map((item, index) => {

                        return (
                            <ItemCursoVentas
                                formaPago={item.forma_pago}
                                key={index}
                                curso={item.titulo}
                                cantidadAlumnos={item.cantidad_alumnos}
                                nivelPromedio={"%" + item.porcentaje_terminado}
                                totalCurso={"$" + item.total}
                                totalVentas={reporteVentas.length - 1 === index ? "$" + totalVentas : null}
                            />
                        );
                    })
                }


            </div>

        </div>
    );
}

function ItemAlumnoVentas({ curso, nombreAlumno, fechaInscripcion, nivelAvance, precioPagado, formaPago, total }) {
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
                <small className='text-success texto-mobile'>{total}</small>
            </div>
        </div>
    );
}

function ListaAlumnosVentas({ dataCursos, reporteVentasAlumno }) {

    const [idCurso, setIdCurso] = useState();

    const navigate = useNavigate();

    return (
        <div className='col-xl-12 d-flex flex-column justify-content-center alig-items-center pt-4'>
            <div className='row d-flex justify-content-center mb-2'>
                <select
                    onChange={(e) => {
                        setIdCurso(e.target.value);
                    }}
                    aria-describedby="curso-ventas"
                    className="form-select text-secondary w-25 mb-2"
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

                        DeleteCourse(idCurso).then((data) => {
                            alert(data.message);
                        })

                    }}
                    className="btn btn-danger text-white w-25 text-center">Desactivar curso</button>
                <button
                    disabled={idCurso && idCurso !== '' ? false : true}

                    onClick={() => {
                        navigate('/crear-curso');
                    }}

                    className="btn btn-success text-white w-25 text-center">Actualizar curso</button>
                <button onClick={() => {
                    navigate('/crear-curso');
                }} className="btn btn-dark text-white w-25 text-center w-25">
                    Crear curso
                </button>
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

                {reporteVentasAlumno.map((item, index) => {
                    console.log(item);
                    return (
                        <ItemAlumnoVentas
                            key={index}
                            curso={item.curso}
                            nombreAlumno={item.nombre}
                            fechaInscripcion={item.fecha_registro}
                            nivelAvance={"%" + item.porcentaje}
                            precioPagado={"$" + item.cantidad_pagada}
                            formaPago={item.forma_pago}
                            total={"$" + item.total}
                        />
                    );
                })}
            </div>


        </div>
    );

}

export default function Ventas() {

    const [dataCursos, setDataCursos] = useState();
    const [reportVentas, setReportVentas] = useState();
    const [reportVentasAlumno, setReportVentasAlumno] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {

        let formDataReports = new FormData();
        formDataReports.append('instructor', localStorage.getItem('userId'));
        formDataReports.append('fecha_inicio', '');
        formDataReports.append('fecha_fin', '');
        formDataReports.append('curso_activo', null);
        formDataReports.append('categoria', null);
        GetReports(formDataReports).then((reports) => {
            setReportVentas(reports.reporte_ventas);
            setReportVentasAlumno(reports.reporte_ventas_alumno);
        });

        let formData = new FormData();
        formData.append('usuario', localStorage.getItem('userId'));
        GetCoursesTeacher(formData).then((data) => {
            setDataCursos(data.courses);
        })

        GetCategories().then((categories) => {
            setCategories(categories.categories);
        });

    }, []);

    if (!dataCursos || !reportVentas || !reportVentasAlumno || !categories) {
        return (<div>Waiting for data...</div>);
    }
    else {
        return (
            <div className='container-fluid padre-ventas py-2'>
                <div className='row d-flex mb-2'>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            let formData = new FormData(document.getElementById('formulario-ventas'));
                            formData.append('instructor', localStorage.getItem('userId'));

                            GetReports(formData).then((reports) => {
                                setReportVentas(reports.reporte_ventas);
                                setReportVentasAlumno(reports.reporte_ventas_alumno);
                            });

                        }}
                        id='formulario-ventas'
                        className='d-flex justify-content-center'>
                        <div className='col-2'>
                            <input id="fecha_inicio" name='fecha_inicio' type={"date"} className='form-control' />
                        </div>
                        <div className='col-2'>
                            <input id="fecha_fin" name='fecha_fin' type={"date"} className='form-control' />
                        </div>
                        <div className='col-2'>
                            <select
                                aria-describedby="categorias-ventas"
                                className="form-select text-secondary"
                                aria-label="Categorias"
                                id="categoria"
                                name="categoria">
                                <option value="todas">Todas</option>
                                {
                                    categories.map((categorieData, index) => {
                                        return (
                                            <option
                                                key={index}
                                                id={categorieData.idCategoria}
                                                value={categorieData.idCategoria}>
                                                {categorieData.nombre}
                                            </option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className='col-2'>
                            <select
                                aria-describedby="categorias-ventas"
                                className="form-select text-secondary"
                                aria-label="Categorias"
                                name="curso_activo"
                                id="curso_activo">
                                <option value="todos">Todos</option>
                                <option value="1">Activos</option>
                            </select>
                        </div>
                        <div className='col-2'>
                            <input type='submit' value={'Filtrar'} className='btn btn-success w-100' />
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h5 className='fw-bold text-dark p-0 m-0 text-center'>Ventas</h5>
                    </div>
                </div>
                <div className='row'>
                    <ListaCursosVentas reporteVentas={reportVentas} />
                </div>
                <div className='row'>
                    <ListaAlumnosVentas dataCursos={dataCursos} reporteVentasAlumno={reportVentasAlumno} />
                </div>
            </div>
        );
    }
}