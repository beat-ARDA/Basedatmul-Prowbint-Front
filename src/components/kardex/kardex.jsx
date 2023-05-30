import { React, useEffect, useState } from 'react';
import './kardex.css';
import { GetKardex } from '../../servicesBDM/courses';
import { GetCategories } from '../../servicesBDM/categories';
import { Link } from 'react-router-dom';

function TarjetaKardex({ progreso, imagen, titulo, instructor, fechaInscripcion, fechaUltimaVista, fechaTerminacionCurso, idCurso }) {
    return (
        <div className='col-xl-4 border my-1'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <img className='imagen-tarjeta-kardex' src={imagen} />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <Link to={`curso/${idCurso}`}>
                        <h6 className='fw-bold text-dark p-0 m-0'>{titulo}</h6>
                    </Link>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center align-items-center'>
                    <h6 className='fw-bold text-secondary p-0 m-0'>Progreso: %{progreso ? progreso : '0'}</h6>
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
                    <small className='fw-bold text-secondary p-0 m-0'>Fecha termino: {fechaTerminacionCurso ? fechaTerminacionCurso : 'NA'}</small>
                </div>
            </div>
        </div>
    );
}

export default function Kardex() {

    const [categories, setCategories] = useState();
    const [kardex, setKardex] = useState();

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
        let formData = new FormData();
        formData.append('alumno', localStorage.getItem('userId'));
        formData.append('fecha_inicio', '');
        formData.append('fecha_fin', '');
        formData.append('categoria', null);
        formData.append('curso_terminado', null);
        formData.append('curso_activo', null);

        GetKardex(formData).then((data) => {
            const filterKardex = data.kardex.reduce((resultado, elemento) => {
                if (!resultado.find(e => e.idCurso === elemento.idCurso)) {
                    resultado.push(elemento);
                }
                return resultado;
            }, []);
            setKardex(filterKardex);
        });

        GetCategories().then((categories) => {
            setCategories(categories.categories);
        });

    }, []);

    if (kardex && categories) {
        return (
            <div className='container-fluid padre-kardex pt-2 d-flex justify-content-center align-items-center'>
                <div className='row w-75'>
                    <div className='col-12'>
                        <h5 className='fw-bold text-dark text-center'>Kardex</h5>
                    </div>
                    <div className='col-12'>
                        <form
                            id='form-filtros-mis-cursos'
                            onSubmit={(e) => {
                                e.preventDefault();
                                let formData = new FormData(document.getElementById('form-filtros-mis-cursos'));
                                formData.append('alumno', localStorage.getItem('userId'));

                                GetKardex(formData).then((data) => {
                                    const filterKardex = data.kardex.reduce((resultado, elemento) => {
                                        if (!resultado.find(e => e.idCurso === elemento.idCurso)) {
                                            resultado.push(elemento);
                                        }
                                        return resultado;
                                    }, []);

                                    setKardex(filterKardex);
                                });

                            }}
                            className='row d-flex justify-content-center'>
                            <div className='col-xl-2 col-12 d-flex flex-column'>
                                <label className='text-center fw-bold' htmlFor="fecha_inicio">Fecha inicio: </label>
                                <input id="fecha_inicio" name='fecha_inicio' type="date" className='form-control' />
                            </div>
                            <div className='col-xl-2 col-12 d-flex flex-column'>
                                <label className='text-center fw-bold' htmlFor="fecha_fin">Fecha fin: </label>
                                <input id="fecha_fin" name='fecha_fin' type="date" className='form-control' />
                            </div>
                            <div className='col-xl-2 col-12 d-flex flex-column'>
                                <label className='text-center fw-bold' htmlFor="categoria">Categorias: </label>
                                <select
                                    id='categoria'
                                    defaultValue={"todas"}
                                    aria-describedby="categoria"
                                    className="form-select text-secondary"
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
                            </div>
                            <div className='col-xl-2 col-12 d-flex flex-column'>
                                <label className='text-center fw-bold' htmlFor="curso_terminado">Terminados: </label>
                                <select
                                    id='curso_terminado'
                                    defaultValue={"todos"}
                                    aria-describedby="curso_terminado"
                                    className="form-select text-secondary"
                                    aria-label="curso_terminado"
                                    name="curso_terminado">
                                    <option value="todos">Todos</option>
                                    <option value="1">Terminados</option>
                                </select>
                            </div>
                            <div className='col-xl-2 col-12 d-flex flex-column'>
                                <label
                                    className='text-center fw-bold'
                                    htmlFor="curso_activo">
                                    Activos:
                                </label>
                                <select
                                    id='curso_activo'
                                    defaultValue={"todos"}
                                    aria-describedby="curso_activo"
                                    className="form-select text-secondary"
                                    aria-label="curso_activo"
                                    name="curso_activo">
                                    <option value="todos">Todos</option>
                                    <option value="1">activos</option>
                                </select>
                            </div>
                            <div className='col-xl-2 col-12 d-flex justify-content-start align-items-end'>
                                <button className='btn btn-success w-100' type='submit'>Filtrar</button>
                            </div>
                        </form >
                    </div>
                    <div className='col-12 d-flex justify-content-center mt-4'>
                        <div className='row w-100'>
                            {
                                kardex.map((course, index) => {
                                    const pathImage =
                                        'data:image/' +
                                        getImageType(course.imagen) +
                                        ';base64,' +
                                        course.imagen;
                                    return (
                                        <TarjetaKardex
                                            idCurso={course.idCurso}
                                            key={index}
                                            progreso={course.porcentaje}
                                            imagen={pathImage}
                                            titulo={course.titulo}
                                            instructor={course.nombre_instructor}
                                            fechaInscripcion={course.fecha_registro}
                                            fechaUltimaVista={course.ultimo_ingreso}
                                            fechaTerminacionCurso={course.fecha_terminacion}
                                        />
                                    );
                                })

                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}