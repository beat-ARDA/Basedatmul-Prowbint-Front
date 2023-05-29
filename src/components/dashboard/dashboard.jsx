import { React, useEffect } from 'react';
import './dashboard.css';
import TarjetaDashboard from '../tarjeta-dashboard/tarjeta-dashboard';
import '../tarjeta-dashboard/tarjeta-dashboard.css'
import { GetCourses, GetCoursesBestCalificated, GetCoursesBestSellers, GetCoursesMostRecents } from '../../servicesBDM/courses';
import { useState } from 'react';


const Dashboard = () => {

    const [dataCursos, setDataCursos] = useState([]);

    function getImageType(base64Image) {
        const header = base64Image.substring(0, 23);
        if (header.startsWith('iVBORw0KGg')) {
            return 'png';
        } else if (header.startsWith('/9j/')) {
            return 'jpeg';
        } else {
            return false;
        }
    }

    useEffect(() => {
        GetCourses().then((courses) => {
            setDataCursos(courses.courses);
        });
    }, []);

    if (!dataCursos) {
        return (
            <div className='container-fluid padre-dashboard'>
                <div className='row mt-4'>
                    <div className='col-12 border-bottom border-secondary'>
                        <h4 className='fw-bold m-0 p-0 text-center'>Titulo de la busqueda</h4>
                    </div>
                </div>
                <form
                    className='row border-bottom border-secondary py-2 '>
                    <div className='col-3 d-flex justify-content-end align-items-center'>
                        <button
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Todos</button>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Mejor calificados</button>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Mas vendidos</button>
                    </div>
                    <div className='col-3 d-flex justify-content-start align-items-center'>
                        <button
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Mas recientes</button>
                    </div>
                </form>
                <div>
                    <div className='d-flex justify-content-center'>
                        <h4 className='mt-2'>No hay cursos en la base de datos! </h4>
                    </div>
                </div>
                <nav aria-label="Page navigation example" className='d-flex justify-content-center'>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
    else {
        return (
            <div className='container-fluid padre-dashboard'>
                <div className='row mt-4'>
                    <div className='col-12 border-bottom border-secondary'>
                        <h4 className='fw-bold m-0 p-0 text-center'>Titulo de la busqueda</h4>
                    </div>
                </div>
                <form
                    className='row border-bottom border-secondary py-2 '>
                    <div className='col-3 d-flex justify-content-end align-items-center'>
                        <button
                            onClick={() => {
                                GetCourses().then((courses) => {
                                    setDataCursos(courses.courses);
                                });
                            }}
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Todos</button>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button
                            onClick={() => {
                                GetCoursesBestCalificated().then((courses) => {
                                    setDataCursos(courses.courses);
                                });
                            }}
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Mejor calificados</button>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button
                            onClick={() => {
                                GetCoursesBestSellers().then((courses) => {
                                    setDataCursos(courses.courses);
                                });
                            }}
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Mas vendidos</button>
                    </div>
                    <div className='col-3 d-flex justify-content-start align-items-center'>
                        <button
                            onClick={() => {
                                GetCoursesMostRecents().then((courses) => {
                                    setDataCursos(courses.courses);
                                });
                            }}
                            className='btn btn-dark w-100 texto-boton p-0 m-0' type="button">Mas recientes</button>
                    </div>
                </form>
                <div>
                    {dataCursos.map((curso, index) => {

                        const pathImage = 'data:image/' + getImageType(curso.imagen) + ';base64,' + curso.imagen;

                        return (
                            <TarjetaDashboard
                                id={curso.idCurso}
                                key={index}
                                imagen={pathImage}
                                titulo={curso.titulo}
                                descripcion={curso.descripcion}
                                instructor={curso.instructor}
                                estrellas={curso.promedio}
                                fecha={curso.fecha_creacion}
                                precio={curso.cost}
                            />
                        )
                    })}
                </div>
                <nav aria-label="Page navigation example" className='d-flex justify-content-center'>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Dashboard;