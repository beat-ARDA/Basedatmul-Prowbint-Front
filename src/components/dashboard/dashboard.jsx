import { React, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './dashboard.css';
import TarjetaDashboard from '../tarjeta-dashboard/tarjeta-dashboard';
import '../tarjeta-dashboard/tarjeta-dashboard.css'
import reactImage from "../../images/react.jpg";
import cImage from "../../images/c++.png";
import angularImage from "../../images/angular.png";
import phpImage from "../../images/php.png";
import mySqlImage from "../../images/mysql.png";
import ajaxImage from "../../images/ajax.png";
import { GetCourses } from '../../servicesBDM/courses';
import { useState } from 'react';

const arreglo = [
    { titulo: "C++", descripcion: "Curso para aprender C++", instructor: "Alvaro Duron", imagen: cImage, estrellas: 0, fecha: "2023-12-05", precio: "$200" },
    { titulo: "React", descripcion: "Curso para aprender React", instructor: "Alvaro Duron", imagen: reactImage, estrellas: 1, fecha: "2023-12-05", precio: "$1000" },
    { titulo: "Angular", descripcion: "Curso para aprender Angular", instructor: "Mateo Duron", imagen: angularImage, estrellas: 2, fecha: "2023-12-05", precio: "$900" },
    { titulo: "Php", descripcion: "Curso para aprender Php", instructor: "Mariana Lopez", imagen: phpImage, estrellas: 3, fecha: "2023-12-05", precio: "$120" },
    { titulo: "Mysql", descripcion: "Curso para aprender Mysql", instructor: "Veronica Alejo", imagen: mySqlImage, estrellas: 4, fecha: "2023-12-05", precio: "$400" },
    { titulo: "Ajax", descripcion: "Curso para aprender Ajax", instructor: "Homero Duron", imagen: ajaxImage, estrellas: 5, fecha: "2023-12-05", precio: "$1000" }]

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

    if (dataCursos) {
        return (
            <div className='container-fluid padre-dashboard'>
                <div className='row mt-4'>
                    <div className='col-12 border-bottom border-secondary'>
                        <h4 className='fw-bold m-0 p-0 text-center'>Titulo de la busqueda</h4>
                    </div>
                </div>
                <form className='row border-bottom border-secondary py-2 '>
                    <div className='col-3 d-flex justify-content-end align-items-center'>
                        <button className='btn btn-dark w-100 texto-boton p-0 m-0' type="submit">Todos</button>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button className='btn btn-dark w-100 texto-boton p-0 m-0' type="submit">Mejor calificados</button>
                    </div>
                    <div className='col-3 d-flex justify-content-center align-items-center'>
                        <button className='btn btn-dark w-100 texto-boton p-0 m-0' type="submit">Mas vendidos</button>
                    </div>
                    <div className='col-3 d-flex justify-content-start align-items-center'>
                        <button className='btn btn-dark w-100 texto-boton p-0 m-0' type="submit">Mas recientes</button>
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