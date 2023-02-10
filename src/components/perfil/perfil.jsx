import { React, useState } from 'react';
import './perfil.css';
import perfilImage from '../../images/perfil.jpg'

export default function Perfil() {

    const [nombresPerfil, setNombresPerfil] = useState('Alvaro Ramses');
    const [apellidosPerfil, setApellidosPerfil] = useState('Duron Alejo');
    const [fechaNacimientoPerfil, setFechaNacimientoPerfil] = useState('1996-05-17');

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center pt-1'>
                    <div className='perfil-imagen' style={{ backgroundImage: `url(${perfilImage})` }}></div>
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='nombresPerfil' className=' fw-bold'>Nombre(s): </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="nombresPerfil" id="nombresPerfil" className='form-control' value={nombresPerfil} onChange={(e) => setNombresPerfil(e.target.value)} type="text" />
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='apellidosPerfil' className='fw-bold'>Apellido(s): </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="apellidosPerfil" id="apellidosPerfil" className='form-control' value={apellidosPerfil} type="text" onChange={(e) => setApellidosPerfil(e.target.value)} />
                </div>
            </div>
            <div className='row pt-1'>
                <div className='col-1 d-flex justify-content-start align-items-center p-0 m-0'>
                    <label htmlFor='fechaNacimientoPerfil' className='fw-bold'>Fecha nacimiento: </label>
                </div>
                <div className='col-11 d-flex justify-content-center align-items-center p-0 m-0'>
                    <input name="fechaNacimientoPerfil" id="fechaNacimientoPerfil" className='form-control' defaultValue={fechaNacimientoPerfil} type="date" onChange={(e) => setFechaNacimientoPerfil(e.target.value)} />
                </div>
            </div>
            
        </div>
    );
}