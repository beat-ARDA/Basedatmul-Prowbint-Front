import { React, useEffect, useState } from 'react';
import './kardex.css';
import { GetKardex } from '../../servicesBDM/courses';
import { GetCategories } from '../../servicesBDM/categories';
import { getKardexById } from '../../servicesPw2/kardex';
import { getCategoriasActivas } from '../../servicesPw2/categorias';


function TarjetaKardex({ progreso, imagen, titulo, instructor, fechaInscripcion, descripcion, fechaTerminacionCurso }) {
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
                    <small className='fw-bold text-secondary p-0 m-0'>Descripcion: {descripcion}</small>
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
        const api = localStorage.getItem('api');
        var idUser = localStorage.getItem('userId');
        let formData = new FormData();
        formData.append('alumno', localStorage.getItem('userId'));
        formData.append('fecha_inicio', '');
        formData.append('fecha_fin', '');
        formData.append('categoria', null);
        formData.append('curso_terminado', null);
        formData.append('curso_activo', null);
        if (api == 'pw2') {
            getKardexById(idUser).then((data) => {
                console.log(data)
                const filterKardex = data.reduce((resultado, elemento) => {
                    if (!resultado.find(e => e.idCurso === elemento.idCurso)) {
                        resultado.push(elemento);
                    }
                    return resultado;
                }, []);

                setKardex(filterKardex);
            });

            getCategoriasActivas().then((categories) => {

                setCategories(categories);
            });
        } else {
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
        }






    }, []);
    console.log(categories)
    if (kardex && categories) {
        return (
            <div className='container-fluid padre-kardex pt-2 d-flex justify-content-center align-items-center'>
                <div className='row w-75'>
                    <div className='col-12'>
                        <h5 className='fw-bold text-dark text-center'>Kardex</h5>
                    </div>
                    <div className='col-12'>

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
                                            key={index}
                                            progreso={course.promedio}
                                            imagen={pathImage}
                                            titulo={course.titulo}
                                            instructor={course.nombre_instructor}
                                            fechaInscripcion={formatearFecha(course.cursoalumno[0].fecha_registro)}
                                            descripcion={course.descripcion}
                                            fechaTerminacionCurso={FechaVacia(formatearFecha(course.cursoalumno[0].fecha_terminacion))}
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

function formatearFecha(fecha) {
    const date = new Date(fecha);

    const dia = date.getUTCDate();
    const mes = date.getUTCMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
    const anio = date.getUTCFullYear();

    // Asegurarse de que el día y el mes tengan dos dígitos
    const diaFormateado = dia.toString().padStart(2, '0');
    const mesFormateado = mes.toString().padStart(2, '0');

    // Devolver la fecha formateada
    return `${diaFormateado}-${mesFormateado}-${anio}`;
}

function FechaVacia(fecha) {
    if (fecha=='01-01-1970') {
        return 'NA';
    }

    const date = new Date(fecha);

    const dia = date.getUTCDate();
    const mes = date.getUTCMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
    const anio = date.getUTCFullYear();

    // Asegurarse de que el día y el mes tengan dos dígitos
    const diaFormateado = dia.toString().padStart(2, '0');
    const mesFormateado = mes.toString().padStart(2, '0');

    // Devolver la fecha formateada
    return `${diaFormateado}-${mesFormateado}-${anio}`;
}