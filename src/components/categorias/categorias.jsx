import { React, useState } from 'react';
import './categorias.css';
import { DeleteCategory, GetCategories, InsertCategory, UpdateCategory } from '../../servicesBDM/categories';
import { useEffect } from 'react';

export default function Categorias() {
    const [dataCategories, setDataCategories] = useState([]);
    const [textoModal, setTextoModal] = useState();
    const [nombreCategoriaBool, setNombreCategoriaBool] = useState();
    const [descripcionCategoriaBool, setDescripcionCategoriaBool] = useState();

    const [nombreCategoria, setNombreCategoria] = useState('');
    const [idCategoria, setIdCategoria] = useState();
    const [descripcionCategoria, setDescripcionCategoria] = useState('');
    const [bd, setBd] = useState('bdm');
    const [categoryMode, setCategoryMode] = useState('newCategory');


    useEffect(() => {
        GetCategories().
            then(response =>
                response.categories ?
                    setDataCategories(response.categories) :
                    setDataCategories([]))
    }, []);



    return (
        <div className='container-fluid padre-categorias pt-2'>
            <div className='row'>
                <div className='col-12'>
                    <h5 className='fw-bold text-dark text-center'>Categorias</h5>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-4 col-12 border caja-categorias'>
                    {
                        dataCategories.length > 0 ?
                            dataCategories.map((category, index) => {

                                return (
                                    <div
                                        onClick={() => {
                                            setNombreCategoria(category.nombre);
                                            setDescripcionCategoria(category.descripcion);
                                            setIdCategoria(category.idCategoria);
                                            setCategoryMode('editCategory');
                                            setNombreCategoriaBool(true);
                                            setDescripcionCategoriaBool(true);
                                        }}
                                        key={category.idCategoria}
                                        className="row border-bottom w-100 d-flex align-items-center tarjeta-categoria mt-2">
                                        <div className='col-12' id={category.idCategoria}>
                                            <h6 className='fw-bold text-dark'>{index + 1}- {category.nombre}</h6>
                                            <h6 className='text-dark'>{category.descripcion}</h6>
                                            <h6 className='text-secondary'>{category.fecha}</h6>
                                        </div>
                                    </div>
                                );
                            }) : <h5 className='d-flex justify-content-center'>No hay categorias registradas</h5>
                    }

                </div>
                <form id='categoryForm' className='col-xl-8 col-12 pt-2 d-flex flex-column'>
                    <div className='mb-2'>
                        <button
                            type='button'
                            onClick={() => {
                                setCategoryMode('newCategory');
                                setNombreCategoria('');
                                setDescripcionCategoria('');
                                setIdCategoria('');
                            }} className={`btn btn-dark ${categoryMode === 'editCategory' ? 'w-50' : 'd-none'}`}>Nueva categoria</button>
                        <button
                            type='button'
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={() => {
                                setCategoryMode('deleteCategory');
                                setTextoModal('Deseas eliminar esta categoria?');
                            }}
                            className={`btn btn-danger w-50 ${categoryMode === 'editCategory' ? '' : 'd-none'}`}>
                            Eliminar categoria
                        </button>
                    </div>
                    <div className='row'>
                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <label className='fw-bold text-dark' htmlFor='nombre-categoria'>Nombre categoria: </label>
                        </div>
                        <div className='col-9'>
                            <input
                                value={nombreCategoria}
                                onChange={(e) => setNombreCategoria(e.target.value)}
                                onInput={(e) => {
                                    e.target.value == " " ? setNombreCategoria("") : setNombreCategoria(e.target.value.replace(/(\s{2,})/g, ' '));
                                    e.target.value ? setNombreCategoriaBool(true) : setNombreCategoriaBool(false);
                                }}
                                className='form-control'
                                name="nombre"
                                placeholder='Nombre categoria...' />
                        </div>
                    </div>
                    <div className='row pt-2'>
                        <div className='col-3 d-flex align-items-center justify-content-center'>
                            <label className='fw-bold text-dark' htmlFor='descripcion-categoria'>Descripcion: </label>
                        </div>
                        <div className='col-9'>
                            <input
                                value={descripcionCategoria}
                                onChange={(e) => setDescripcionCategoria(e.target.value)}
                                onInput={(e) => {
                                    e.target.value == " " ? setDescripcionCategoria("") : setDescripcionCategoria(e.target.value.replace(/(\s{2,})/g, ' '));
                                    e.target.value ? setDescripcionCategoriaBool(true) : setDescripcionCategoriaBool(false);
                                }}
                                className='form-control'
                                name="descripcion"
                                placeholder='Descripcion categoria...' />
                        </div>
                    </div>
                    <div className={`row pt-2 px-2 d-flex justify-content-end align-items-end h-100 ${categoryMode === 'newCategory' ? '' : 'd-none'}`}>
                        <button
                            onClick={() => {
                                setCategoryMode('newCategory');
                                setTextoModal('Deseas agregar esta categoria?');
                            }}
                            type='button'
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className='btn-dark btn'
                        >Agregar categoria
                        </button>
                    </div>
                    <div className={`row pt-2 px-2 d-flex justify-content-end align-items-end h-100 ${categoryMode === 'editCategory' ? '' : 'd-none'}`}>
                        <button
                            onClick={() => {
                                setCategoryMode('updateCategory');
                                setTextoModal('Deseas actualizar esta categoria?');
                            }}
                            type='button'
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            className='btn-dark btn'>
                            Actualizar categoria
                        </button>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Mensaje</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {textoModal}
                                </div>
                                <div className="modal-footer">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();

                                            const bodyData = new FormData(document.getElementById('categoryForm'));
                                            let comprobacion =
                                                nombreCategoriaBool && descripcionCategoriaBool ? true : false;

                                            if (categoryMode === 'deleteCategory') {
                                                DeleteCategory(idCategoria).then((response) => {
                                                });
                                            } else if (categoryMode === 'newCategory') {
                                                if (comprobacion) {
                                                    InsertCategory(bodyData).then((response) => {
                                                    });
                                                } else {
                                                    setTextoModal('Faltan campos por rellenar');
                                                }
                                            } else if (categoryMode === 'updateCategory') {
                                                if (comprobacion) {
                                                    UpdateCategory(bodyData, idCategoria).then((response) => {
                                                    });
                                                } else {
                                                    setTextoModal('Faltan campos por rellenar');
                                                }
                                            }

                                            window.location.reload();

                                            setNombreCategoria('');
                                            setDescripcionCategoria('');
                                            setIdCategoria('');
                                        }}
                                        type="button"
                                        className="btn btn-dark"
                                        data-bs-dismiss="modal">
                                        Aceptar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
}