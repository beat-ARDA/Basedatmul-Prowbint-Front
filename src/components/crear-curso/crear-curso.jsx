import React from "react";
import './crear-curso.css';
import { useState } from "react";
import { useEffect } from "react";
import { GetCategories } from "../../servicesBDM/categories";

export default function CrearCurso() {

    const [dataCategories, setDataCategories] = useState();

    useEffect(() => {
        GetCategories().then(response => {
            console.log(response);
            setDataCategories(response.categories);
        });
    }, []);

    if (dataCategories)
        return (
            <div className="container-fluid pt-2 padre-crear-curso">
                <div className="row">
                    <div className="col-12">
                        <h5 className='fw-bold text-dark text-center'>Crear curso</h5>
                    </div>
                </div>
                <form id="curso-form">
                    <div className="row">
                        <div className="col-6 pb-2">
                            <select
                                defaultValue={"none"}
                                aria-describedby="categoria-crear-curso"
                                className="form-select text-secondary me-1"
                                aria-label="categoria-crear-curso"
                                name="categoria-crear-curso">
                                <option defaultValue={"none"}>Selecciona las categorias</option>
                                {
                                    dataCategories.map((category, index) => {
                                        return (
                                            <option key={index} value={category.nombre}>{category.nombre}</option>
                                        );
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-6 ">
                            <input name="nombre-curso-crear" type={"text"} className="form-control ms-1" placeholder="Nombre del curso" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <input type={"text"} className="form-control w-100 me-1" placeholder="Titulo nivel" />
                            <svg
                                id="icono-add-curso"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                            </svg>
                        </div>
                        <div className="col-6 d-flex justify-content-center align-items-center">
                            <input type={"text"} className="form-control w-100 me-1" placeholder="Titulo seccion" />
                            <svg
                                id="icono-add-curso"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512">
                                <path
                                    d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                            </svg>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="table-responsive">
                                <table className="table table-style">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Titulo nivel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className=" d-flex justify-content-between align-items-center">
                                                Titulo nivel
                                                <svg
                                                    className="icono-delete-nivel"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className=" d-flex justify-content-between align-items-center">
                                                Titulo nivel
                                                <svg
                                                    className="icono-delete-nivel"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="table-responsive">
                                <table className="table table-style">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Titulo seccion</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className=" d-flex justify-content-between align-items-center">
                                                Titulo seccion
                                                <svg
                                                    className="icono-delete-nivel"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                                <svg
                                                    id="icono-add-curso"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path
                                                        d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                                                </svg>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td className=" d-flex justify-content-between align-items-center">
                                                Titlo seccion
                                                <svg
                                                    className="icono-delete-nivel"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
                                                <svg
                                                    id="icono-add-curso"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512">
                                                    <path
                                                        d="M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z" />
                                                </svg>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-end mt-2">
                        <button type="submit" className="btn-dark btn me-2">Cancelar</button>
                        <button type="submit" className="btn-danger ms-2 btn">Publicar</button>
                    </div>
                </form>
            </div>
        );
}