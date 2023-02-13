import { React, useState } from 'react';
import './curso.css';
import perfil from '../../images/perfil.jpg';

function TarjetaComentarios({ imagen, titulo, texto, valoracion }) {
    return (
        <div className='row p-0 m-0'>
            <div className='col-2 d-0 m-0'>
                <div className='imagen-comentario' style={{ backgroundImage: "url(" + perfil + ")" }}></div>
            </div>
        </div>
    );
}
function Valoraciones({
    display,
    numeroEstrellas,
    porcentajeUnaEstrella,
    porcentajeDosEstrella,
    porcentajeTresEstrella,
    porcentajeCuatroEstrella,
    porcentajeCincoEstrella }) {
    return (
        <div className={`container-fluid flex-column p-0 m-0 ${display ? 'd-flex' : 'd-none'}`}>
            <div className='row p-0 m-0 w-100'>
                <div className='col-12'>
                    <h5 className='text-center fw-bold py-4'>Comentarios de los estudiantes</h5>
                </div>
            </div>
            <div className='row p-0 m-0 w-100 d-flex justify-content-center border-bottom border-dark'>
                <div className='col-3 p-0 m-0 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='text-center fw-bold p-0 m-0'>Valoracion del curso</h3>
                    <svg
                        className='w-25 h-25 estrella-icon py-1'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512">
                        <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <h3 className='text-center fw-bold p-0 m-0'>{numeroEstrellas}</h3>
                </div>
                <div className='col-4 p-0 m-0 d-flex flex-column justify-content-center align-items-center'>
                    {/*Una estrella*/}
                    <div className={`row py-1 m-0 justify-content-center align-items-center d-flex`}>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary text-start fw-bold p-0 m-0'>{porcentajeUnaEstrella}</h6>
                        </div>
                    </div>
                    {/*Dos estrellas*/}
                    <div className={`row py-1 m-0 justify-content-center align-items-center d-flex`}>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary text-start fw-bold p-0 m-0'>{porcentajeDosEstrella}</h6>
                        </div>
                    </div>
                    {/*Tres estrellas*/}
                    <div className={`row py-1 m-0 justify-content-center align-items-center d-flex`}>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary text-start fw-bold p-0 m-0'>{porcentajeTresEstrella}</h6>
                        </div>
                    </div>
                    {/*Cuatro estrellas*/}
                    <div className={`row py-1 m-0 justify-content-center align-items-center d-flex`}>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='w-25 h-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary text-start fw-bold p-0 m-0'>{porcentajeCuatroEstrella}</h6>
                        </div>
                    </div>
                    {/*Cinco estrellas*/}
                    <div className={`row py-1 m-0 justify-content-center align-items-center d-flex`}>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <svg
                                className='h-25 w-25 estrella-icon'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path
                                    d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                            </svg>
                        </div>
                        <div className='col-2 p-0 m-0 d-flex justify-content-end align-items-center'>
                            <h6 className='text-primary text-start fw-bold p-0 m-0'>{porcentajeCincoEstrella}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <TarjetaComentarios />
        </div>
    );
}

function DescripcionGeneral({ display }) {
    return (
        <div className={`container-fluid p-0 m-0 ${display ? 'd-flex' : 'd-none'}`}>
            <div className='row p-0 m-0 w-100'>
                <div className='col-12'>
                    <h5 className='fw-bold text-center py-4'>Descripcion</h5>
                </div>
                <div className='col-12'>
                    <p>Why do we use it?
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </div>
        </div>
    );
}


function Certificado({ display }) {
    return (
        <div className={`container-fluid p-0 m-0 ${display ? 'd-flex' : 'd-none'}`}>

        </div>
    );
}

function NavegacionVideo() {
    const [descripcionGeneral, setDescrpcionGeneral] = useState(true);
    const [valoraciones, setValoraciones] = useState(false);
    const [certificado, setCertificado] = useState(false);

    return (
        <div className='bg-transparent d-flex flex-column justify-content-center py-2'>
            <div className='row p-0 m-0 w-100'>
                <div className='col-4 h-100 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(true);
                            setValoraciones(false);
                            setCertificado(false);
                        }}
                        className={`
                text-center 
                form-text 
                text-secondary 
                fs-6 
                fw-bold 
                m-0 texto-navegacion ${descripcionGeneral ? 'texto-navegacion-click' : null}`}>
                        Descripcion general
                    </h6>
                </div>
                <div className='col-4 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(false);
                            setValoraciones(true);
                            setCertificado(false);
                        }}
                        className={`
                text-center 
                form-text 
                text-secondary 
                fs-6 
                fw-bold 
                m-0 texto-navegacion ${valoraciones ? 'texto-navegacion-click' : null}`}>
                        Valoraciones
                    </h6>
                </div>
                <div className='col-4 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(false);
                            setValoraciones(false);
                            setCertificado(true);
                        }}
                        className={`
                text-center 
                form-text 
                text-secondary 
                fs-6 
                fw-bold 
                m-0 texto-navegacion ${certificado ? 'texto-navegacion-click' : null}`}>
                        Certificado
                    </h6>
                </div>
            </div>
            <div className='row p-0 m-0 w-100'>
                <DescripcionGeneral display={descripcionGeneral} />
                <Valoraciones
                    display={valoraciones}
                    numeroEstrellas={"4.5"}
                    porcentajeUnaEstrella={"10%"}
                    porcentajeDosEstrella={"10%"}
                    porcentajeTresEstrella={"5%"}
                    porcentajeCuatroEstrella={"5%"}
                    porcentajeCincoEstrella={"70%"} />
                <Certificado display={certificado} />
            </div>
        </div>);
}

export default function Curso() {
    return (
        <div className='container-fluid p-0 m-0'>
            <div className='row p-0 m-0'>
                <div className='col-12 p-0 m-0 d-flex justify-content-center'>
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/MTEPjRTPW0g"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
            </div>
            <div className='row p-0 m-0'>
                <div className='col-12 p-0 m-0'>
                    <NavegacionVideo />
                </div>
            </div>
        </div>
    );
}