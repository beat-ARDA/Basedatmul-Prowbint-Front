import { React, useState } from 'react';
import './messages.css';
import imagenPerfil from '../../images/perfil.jpg';

function TarjetaMessage({ imagen, nombrePersona, ultimomensaje }) {
    return (
        <div className='row border-bottom py-2 tarjeta-mensaje'>
            <div className='col-12 d-flex align-items-center'>
                <img className='imagen-tarjeta-mensaje rounded-circle me-4' src={imagen} />
                <h6 className='p-0 m-0 text-dark fw-bold'>{nombrePersona}</h6>
            </div>
            <div className='col-12 d-flex align-items-center pt-2'>
                <h6 className='text-dark p-0 m-0 texto-ultimo-mensaje'>{ultimomensaje}</h6>
            </div>
        </div>
    );
}

function CajaMensaje({ imagen, nombrePersona }) {
    return (
        <form className='row'>
            <div className='col-12 d-flex align-items-center border'>
                <img className='imagen-caja-mensaje rounded-circle me-4' src={imagen} />
                <h6 className='p-0 m-0 text-dark fw-bold'>{nombrePersona}</h6>
            </div>
            <div className='col-12 mensajes-area border'>
                <MessageInBox mensaje={"Hola como estas"} mio={false} />
                <MessageInBox mensaje={"Bien y tu"} mio={true} />
            </div>
            <div className='col-12 p-0 m-0 h-75'>
                <textarea className='form-control p-0 m-0' name="mensaje-area" cols="40" rows="5"></textarea>
            </div>
            <div className='col-12 p-0 m-0 d-flex justify-content-end'>
                <button className='btn btn-dark w-50 boton-enviar-mensaje' type="submit">Enviar</button>
            </div>
        </form>
    );
}

function MessageInBox({ mensaje, mio }) {
    return (
        <div className={`row d-flex py-2 ${mio ? 'justify-content-end' : 'justify-content-start'}`}>
            <div className={`col-6 texto-mensaje rounded ${mio ? 'bg-primary' : 'bg-danger'}`}>
                <h6 className='text-white py-2 m-0 text-center'>{mensaje}</h6>
            </div>
        </div>
    )
}

export default function Messages() {
    return (
        <div className="container-fluid padre-messages pt-2">
            <div className='row'>
                <div className='col-12'>
                    <h5 className='fw-bold text-dark text-center'>Mensajes</h5>
                </div>
            </div>
            <div className='row'>
                <div className="col-xl-4 col-12 border box-messages">
                    <TarjetaMessage
                        imagen={imagenPerfil}
                        nombrePersona="Alvaro Ramses Duron Alejo"
                        ultimomensaje={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                    <TarjetaMessage
                        imagen={imagenPerfil}
                        nombrePersona="Alvaro Ramses Duron Alejo"
                        ultimomensaje={"Hola buenos dias Alvaro Duron"} />
                    <TarjetaMessage
                        imagen={imagenPerfil}
                        nombrePersona="Alvaro Ramses Duron Alejo"
                        ultimomensaje={"Hola buenos dias Alvaro Duron"} />
                    <TarjetaMessage
                        imagen={imagenPerfil}
                        nombrePersona="Alvaro Ramses Duron Alejo"
                        ultimomensaje={"Hola buenos dias Alvaro Duron"} />
                    <TarjetaMessage
                        imagen={imagenPerfil}
                        nombrePersona="Alvaro Ramses Duron Alejo"
                        ultimomensaje={"Hola buenos dias Alvaro Duron"} />
                    <TarjetaMessage
                        imagen={imagenPerfil}
                        nombrePersona="Alvaro Ramses Duron Alejo"
                        ultimomensaje={"Hola buenos dias Alvaro Duron"} />
                </div>
                <div className='col-xl-8 col-12'>
                    <CajaMensaje
                        imagen={imagenPerfil}
                        nombrePersona="Alvaro Ramses Duron Alejo" />
                </div>
            </div>
        </div >
    );
}