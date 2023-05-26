import { React, useState } from 'react';
import './categorias.css';
import { DeleteCategory, GetCategories, InsertCategory, UpdateCategory } from '../../servicesBDM/categories';
import { useEffect } from 'react';
import {getCategoriasActivas} from '../../servicesPw2/categorias.js';



export default function Categorias() {
    const api = localStorage.getItem('api');
    const [dataCategories, setDataCategories] = useState();
    const [textoModal, setTextoModal] = useState();
    const [nombreCategoriaBool, setNombreCategoriaBool] = useState();
    const [descripcionCategoriaBool, setDescripcionCategoriaBool] = useState();

    const [nombreCategoria, setNombreCategoria] = useState();
    const [idCategoria, setIdCategoria] = useState();
    const [descripcionCategoria, setDescripcionCategoria] = useState();
    const [bd, setBd] = useState('bdm');
    const [categoryMode, setCategoryMode] = useState('newCategory');

    const handleSubmitBdm = (e) => {
        e.preventDefault();
        const bodyData = new FormData(document.getElementById('categoryForm'));
        let comprobacion =
            nombreCategoriaBool && descripcionCategoriaBool ? true : false;

        if (comprobacion) {
            InsertCategory(bodyData).then(response => {
                setTextoModal(response.message);
            })
            setNombreCategoria('');
            setDescripcionCategoria('');
        }

        comprobacion ? setTextoModal("Categoria registrada") : setTextoModal("Faltan campos por rellenar");
        return comprobacion;
    }

    useEffect(() => {
        if(api=='pw2'){
            getCategoriasActivas().then(response=> setDataCategories(response.categories))//meter servicio mio
        }else{
            GetCategories().then(response => setDataCategories(response.categories))
        }
        
    }, []);


    if (dataCategories)//checar que esta variable agarre bien los valores se setea cn setDataCategories
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
                            })
                        }

                    </div>
                    <form id='categoryForm' className='col-xl-8 col-12 pt-2 d-flex flex-column'
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (api == 'pw2')
                                null;
                            else {
                                const bodyData = new FormData(document.getElementById('categoryForm'));
                                let comprobacion =
                                    nombreCategoriaBool && descripcionCategoriaBool ? true : false;

                                if (comprobacion) {
                                    if (categoryMode === 'newCategory') {
                                        InsertCategory(bodyData).then(response => {
                                            setTextoModal(response.message);
                                        })
                                    }
                                    else {
                                        UpdateCategory(bodyData, idCategoria).then(response => {
                                            setTextoModal(response.message);
                                        })
                                    }

                                    setNombreCategoria('');
                                    setDescripcionCategoria('');
                                    setIdCategoria('');
                                }

                                comprobacion ? setTextoModal("Categoria registrada") : setTextoModal("Faltan campos por rellenar");

                            }
                        }

                        }>
                        <div className='mb-2'>
                            <button onClick={() => {
                                setCategoryMode('newCategory');
                                setNombreCategoria('');
                                setDescripcionCategoria('');
                                setIdCategoria('');
                            }} className={`btn btn-dark ${categoryMode === 'editCategory' ? 'w-50' : 'd-none'}`}>Nueva categoria</button>
                            <button
                                data-bs-toggle="modal" data-bs-target="#exampleModal"
                                onClick={() => {
                                    DeleteCategory(idCategoria).then((response) => {
                                        console.log(response);
                                        setTextoModal(response.message);
                                        setCategoryMode('newCategory');
                                        setNombreCategoria('');
                                        setDescripcionCategoria('');
                                        setIdCategoria('');
                                    });

                                }}
                                className={`btn btn-danger w-50 ${categoryMode === 'editCategory' ? '' : 'd-none'}`}>Eliminar categoria</button>
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
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn-dark btn'>Agregar categoria</button>
                        </div>
                        <div className={`row pt-2 px-2 d-flex justify-content-end align-items-end h-100 ${categoryMode === 'editCategory' ? '' : 'd-none'}`}>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn-dark btn'>Actualizar categoria</button>
                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Error</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        {textoModal}
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={() => window.location.reload()} type="button" className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        );
}