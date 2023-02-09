import React from 'react';
import './tarjeta-dashboard.css';
import reactImage from "../../images/react.jpg";

export default function TarjetaDashboard({ imagen, titulo, descripcion, instructor }) {
    return (
        <div className='row border-bottom border-secondary'>
            <div className='col-2'>
                <div className='imagen-curso d-flex justify-content-start' style={{
                    backgroundImage: `url(${imagen})`
                }}></div>
            </div>
            <div className='col-10'>
                <h5 className='fw-bold'>{titulo}</h5>
                <h6>{descripcion}</h6>
                <h6 className='form-text'>{instructor}</h6>
            </div>
        </div >
    )
}