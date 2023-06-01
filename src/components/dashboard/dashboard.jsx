import { React, useEffect } from 'react';
import './dashboard.css';
import TarjetaDashboard from '../tarjeta-dashboard/tarjeta-dashboard';
import '../tarjeta-dashboard/tarjeta-dashboard.css'
import { GetCourses, GetCoursesBestCalificated, GetCoursesBestSellers, GetCoursesMostRecents, GetCalCourse } from '../../servicesBDM/courses';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetCategories } from '../../servicesBDM/categories';
import { GetDashboardUsers } from '../../servicesBDM/userService';

const Dashboard = () => {

    const { word } = useParams();

    const [dataCursos, setDataCursos] = useState();
    const [promedio, setPromedio] = useState();
    const [categories, setCategories] = useState();
    const [users, setUsers] = useState();

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

        GetDashboardUsers().then((data) => {
            setUsers(data.users);
        });

        let newForm = new FormData();

        newForm.append('buscador', '');
        newForm.append('fecha_inicio', '');
        newForm.append('fecha_fin', '');
        newForm.append('categoria', null);
        newForm.append('users', null);

        GetCourses(newForm).then((courses) => {
            setDataCursos(courses.courses);
        });

        GetCategories().then((categories) => {
            setCategories(categories.categories);
        });

    }, []);

    if (!dataCursos || !categories || !users) {
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
                    <div className='col-12 '>
                        <h4 className='fw-bold m-0 p-0 text-center'>Busqueda</h4>
                    </div>
                    <div className='col-12 d-flex justify-content-center'>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                let form = new FormData(document.getElementById('dashboard-filters'));



                                GetCourses(form).then((courses) => {
                                    setDataCursos(courses.courses);
                                });
                            }}
                            id='dashboard-filters' className="d-flex align-items-center justify-content-center h-100 search-form px-2">
                            <input id="fecha_inicio" name='fecha_inicio' type="date" className='form-control mx-1' />
                            <input id="fecha_fin" name='fecha_fin' type="date" className='form-control mx-1' />
                            <select
                                id='categoria'
                                defaultValue={""}
                                aria-describedby="categoria"
                                className="form-select text-secondary mx-1"
                                aria-label="categoria"
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
                            <select
                                id='users'
                                defaultValue={""}
                                aria-describedby="users"
                                className="form-select text-secondary mx-1"
                                aria-label="users"
                                name="users">
                                <option value="todos">Todos</option>
                                {
                                    users.map((user, index) => {
                                        return (
                                            <option
                                                key={index}
                                                id={index}
                                                value={user.instructor}>
                                                {user.nombre}
                                            </option>
                                        );
                                    })
                                }
                            </select>

                            <input
                                onChange={(e) => { console.log(e.target.value) }}
                                id="buscador"
                                className=" search-input from-control mx-1"
                                type="search"
                                placeholder="Busca lo que sea..."
                                name='buscador' />
                            <button type='submit' className="search-button">
                                <svg
                                    className="search-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512">
                                    <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <form
                    className='row border-bottom border-secondary py-2 '>
                    <div className='col-3 d-flex justify-content-end align-items-center'>
                        <button
                            onClick={() => {
                                let newForm = new FormData();

                                newForm.append('buscador', '');
                                newForm.append('fecha_inicio', '');
                                newForm.append('fecha_fin', '');
                                newForm.append('categoria', null);
                                newForm.append('users', null);
                        
                                GetCourses(newForm).then((courses) => {
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

                        // GetCalCourse(curso.idCurso).then((data) => {

                        // });

                        const pathImage = 'data:image/' + getImageType(curso.imagen) + ';base64,' + curso.imagen;
                        return (
                            <TarjetaDashboard
                                id={curso.idCurso}
                                key={index}
                                imagen={pathImage}
                                titulo={curso.titulo}
                                descripcion={curso.descripcion}
                                instructor={curso.nombre}
                                estrellas={curso.promedio}
                                fecha={curso.fecha_creacion}
                                precio={parseInt(curso.cost).toLocaleString()}
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