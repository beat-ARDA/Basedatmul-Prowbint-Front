import { React, useState } from 'react';
import './dashboard.css';
import TarjetaDashboard from '../tarjeta-dashboard/tarjeta-dashboard';
import reactImage from "../../images/react.jpg";

const arreglo = [{ texto: "texto" }, { texto: "texto" }, { texto: "texto" }, { texto: "texto" }, { texto: "texto" }]

export default function Dashboard() {
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-12'>
                    <h6 className='fw-bold m-0 p-0'>Titulo de la busqueda</h6>
                </div>
            </div>
            <form className='row border-bottom border-secondary pb-1'>
                <div className='col-5 d-flex justify-content-end align-items-center'>
                    <button className='btn btn-dark' type="submit">Mejor calificados</button>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <button className='btn btn-dark' type="submit">Mas vendidos</button>
                </div>
                <div className='col-5 d-flex justify-content-start align-items-center'>
                    <button className='btn btn-dark' type="submit">Mas recientes</button>
                </div>
            </form>
            <div>
                {arreglo.map((dato, index) => {
                    return (
                        <TarjetaDashboard
                            key={index}
                            imagen={reactImage}
                            titulo="textp"
                            descripcion="descripcion"
                            instructor="instructor" />)
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