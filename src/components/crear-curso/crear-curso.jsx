import React from "react";
import './crear-curso.css';

export default function CrearCurso() {
    return (
        <div className="container-fluid pt-2 padre-crear-curso">
            <div className="row">
                <div className="col-12">
                    <h5 className='fw-bold text-dark text-center'>Crear curso</h5>
                </div>
            </div>
            <form className="row">
                <div className="col-12 text-end pb-2 d-flex">
                    <select
                        defaultValue={"none"}
                        aria-describedby="categoria-crear-curso"
                        className="form-select text-secondary me-1"
                        aria-label="categoria-crear-curso"
                        name="categoria-crear-curso">
                        <option defaultValue={"none"}>Selecciona las categorias</option>
                        <option value="Categoria 1">Categoria 1</option>
                        <option value="Categoria 2">Categoria 2</option>
                    </select>

                    <input name="nombre-curso-crear" type={"text"} className="form-control ms-1" value={""} placeholder="Nombre del curso" />
                </div>
                <div className="col-12 text-end">
                    <button type="submit" className="btn-dark btn me-2">Cancelar</button>
                    <button type="submit" className="btn-danger ms-2 btn">Publicar</button>
                </div>
            </form>
        </div>
    );
}