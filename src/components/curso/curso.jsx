import { React, useState, useRef } from 'react';
import './curso.css';
import perfil from '../../images/perfil.jpg';
import { useEffect } from 'react';
import {
    GetCourse,
    GetPurchasedLevels,
    InsertShopingCourse,
    VerifyCourseComplete,
    GetCourseFinished,
    InsertCourseFinished,
    GetCalCourse
} from '../../servicesBDM/courses';
import { useParams } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import * as PDFJS from "pdfjs-dist/build/pdf";
import jsPDF from 'jspdf';
import { GetComments, InsertComment } from '../../servicesBDM/comentarios';
import { GetCertificated } from '../../servicesBDM/certificated';

function TarjetaComentarios({
    imagen,
    alumno,
    comentario,
    estrellasComentario
}) {
    return (
        <div className='row w-75 py-2 border-secondary border-bottom m-0'>
            <div className='col-1 d-0 m-0 d-flex justify-content-end'>
                <img src={`data:image/jpeg;base64,${imagen}`} className='imagen-comentario rounded-circle' />
            </div>
            <div className='col-xl-11 col-10'>
                <div className='row'>
                    <div className='col-12'>
                        <h6 className='text-dark fw-bold p-0 m-0'>{alumno}</h6>
                    </div>
                </div>
                {/*Una estrella*/}
                <div className={`row py-1 m-0 justify-content-start align-items-center ${estrellasComentario == 1 ? 'd-flex' : 'd-none'}`}>
                    <div className='col-xl-2 col-12 p-0 m-0 d-flex justify-content-start align-items-center'>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                    </div>
                </div>
                {/*Dos estrellas*/}
                <div className={`row py-1 m-0 justify-content-start align-items-start d-flex ${estrellasComentario == 2 ? 'd-flex' : 'd-none'}`}>
                    <div className='col-xl-2 col-12 p-0 m-0 d-flex justify-content-start align-items-center'>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                    </div>
                </div>
                {/*Tres estrellas*/}
                <div className={`row py-1 m-0 justify-content-start align-items-start d-flex ${estrellasComentario == 3 ? 'd-flex' : 'd-none'}`}>
                    <div className='col-xl-2 col-12 p-0 m-0 d-flex justify-content-start align-items-center'>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                    </div>
                </div>
                {/*Cuatro estrellas*/}
                <div className={`row py-1 m-0 justify-content-start align-items-start d-flex ${estrellasComentario == 4 ? 'd-flex' : 'd-none'}`}>
                    <div className='col-xl-2 col-12 p-0 m-0 d-flex justify-content-start align-items-center'>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z" />
                        </svg>
                    </div>
                </div>
                {/*Cinco estrellas*/}
                <div className={`row py-1 m-0 justify-content-start align-items-start d-flex ${estrellasComentario == 5 ? 'd-flex' : 'd-none'}`}>
                    <div className='col-xl-2 col-12 p-0 m-0 d-flex justify-content-start align-items-center'>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                        <svg
                            className='estrella-icon-tarjeta'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512">
                            <path
                                d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                        </svg>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h6 className='text-secondary text-dark p-0 m-0'>{comentario}</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Valoraciones({
    display,
    comments,
    promedio,
    terminoCurso }) {

    const { idCurso } = useParams();

    const [valoracion, setValoracion] = useState('');
    const [comentario, setComentario] = useState('');
    const [textoModal, setTextModal] = useState('');

    useEffect(() => {

    }, []);

    return (
        <div className={`container-fluid flex-column align-items-center p-0 m-0 ${display ? 'd-flex' : 'd-none'}`}>

            <div className='row p-0 m-0 w-100 d-flex justify-content-center border-bottom border-dark'>
                <div className='col-xl-2 col-6 p-0 m-0 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='text-center fw-bold p-0 m-0'>Valoracion del curso</h3>
                    <svg
                        className='w-25 h-25 py-1'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512">
                        <path
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                    <h3 className='text-center fw-bold p-0 m-0'>{promedio}</h3>
                </div>

            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    if (comentario !== '' && valoracion !== '') {
                        let bodyComment = new FormData();
                        bodyComment.append('curso', idCurso);
                        bodyComment.append('usuario', localStorage.getItem('userId'));
                        bodyComment.append('comentario', comentario);
                        bodyComment.append('calificacion', valoracion);
                        InsertComment(bodyComment).then((data) => {
                            setTextModal(data.message);
                        })
                    } else {
                        setTextModal('Verifica que los campos valoracion y comentario no esten vacios!');
                    }

                    setComentario('');
                    setValoracion('');
                }}

                className={`${terminoCurso.course.termino_curso === 1 ? 'row p-0 m-0 w-50 d-flex justify-content-center mt-2 text-center' : 'd-none'}`}>
                <svg
                    onClick={() => {
                        setValoracion(1);
                    }}
                    className='w-25 h-25 star-valoraciones'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                    onClick={() => {
                        setValoracion(2);
                    }}
                    className='w-25 h-25 star-valoraciones'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                    onClick={() => {
                        setValoracion(3);
                    }}
                    className='w-25 h-25 star-valoraciones'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                    onClick={() => {
                        setValoracion(4);
                    }}
                    className='w-25 h-25 star-valoraciones'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <svg
                    onClick={() => {
                        setValoracion(5);
                    }}
                    className='w-25 h-25 star-valoraciones'
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512">
                    <path
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                <label className='p-0 m-0 fw-bold' htmlFor='comentario'>Inserta un comentario y una valoracion!</label>
                <input
                    onChange={(e) => {
                        setComentario(e.target.value);
                    }}
                    value={comentario}
                    id='comentario'
                    type='text'
                    className='form-control text-center mt-1'
                    placeholder='Envianos un comentario!'
                    name='comentario'
                />
                <input
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    className='btn btn-dark mt-1'
                    type='submit'
                    value={'Enviar comentario!'} />
            </form>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Mensaje</h1>
                            <button
                                onClick={() => {
                                    window.location.reload();
                                }}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {textoModal}
                        </div>
                        <div className="modal-footer">
                            <button
                                onClick={() => {
                                    window.location.reload();
                                }}
                                type="button"
                                className="btn btn-dark"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                comments.map((comment, index) => {
                    return (
                        <TarjetaComentarios
                            key={index}
                            imagen={comment.imageProfile}
                            alumno={comment.nombre}
                            estrellasComentario={comment.calificaion}
                            comentario={comment.comentario} />
                    );
                })

            }
        </div>
    );

}

function DescripcionGeneral({ display, dataCurso }) {

    return (
        <div className={`container-fluid p-0 m-0 ${display ? 'd-flex' : 'd-none'}`}>
            <div className='row p-0 m-0 w-100'>
                <div className='col-12'>
                    <h5 className='fw-bold text-center py-4'>Descripcion</h5>
                </div>
                <div className='col-12'>
                    <p>{dataCurso.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

function Certificado({ display, terminoCurso, certificado }) {

    if (localStorage.getItem('userType') == 'Instructor') {
        return <h5 className={`${display ? 'fw-bold text-danger mt-3 d-flex justify-content-center' : 'd-none'}`}>
            Debes de ser estudiante para obtener el certificado del curso!
        </h5>
    }
    else if (localStorage.getItem('userType') == 'Alumno') {
        return (
            <div className={`col-12 justify-content-center flex-column align-items-center py-3 m-0 ${display ? 'd-flex' : 'd-none'}`}>
                <h6 className='fw-bold text-dark p-0 m-0 text-center py-2'>Consigue el certificado al completar todo el curso (No completado)</h6>
                <button
                    disabled={terminoCurso.course.termino_curso === 1 ? false : true}
                    onClick={() => {
                        PDFJS.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.js`;
                        const windowWidth = window.innerWidth;
                        const windowHeight = window.innerHeight;
                        PDFJS.getDocument(process.env.REACT_APP_PATH_FRONT + '/certificado.pdf').promise.then(function (pdf) {
                            return pdf.getPage(1);
                        }).then(function (page) {

                            // Crear un contexto de renderizado
                            var canvas = document.createElement('canvas');
                            var context = canvas.getContext('2d');
                            var viewport = page.getViewport({ scale: 1 });

                            // Establecer dimensiones para el lienzo
                            canvas.width = 3400;
                            canvas.height = 1200;

                            // Renderizar la página en el lienzo
                            page.render({ canvasContext: context, viewport: viewport }).promise.then(function () {
                                // Escribir texto en el lienzo
                                context.font = '20px Arial';
                                context.fillStyle = 'black';

                                ///////////////////////////////////////////////////////
                                //                     NOMBRE ALUMNO                 //
                                ///////////////////////////////////////////////////////
                                context.fillText(certificado.nombre_alumno, 150, 330);

                                ///////////////////////////////////////////////////////
                                //                        FECHA                      //
                                ///////////////////////////////////////////////////////
                                const fechaActual = new Date();

                                // Obtener los componentes de la fecha
                                const año = fechaActual.getFullYear();
                                const mes = fechaActual.getMonth() + 1; // Los meses se indexan desde 0, por lo tanto se suma 1
                                const dia = fechaActual.getDate();

                                // Formatear la fecha como una cadena en el formato deseado
                                const fechaFormateada = `${año}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;

                                context.fillText(certificado.fecha, 650, 50);

                                ///////////////////////////////////////////////////////
                                //                     NOMBRE CURSO                  //
                                ///////////////////////////////////////////////////////

                                context.fillText(certificado.titulo, 320, 200);

                                ///////////////////////////////////////////////////////
                                //                     NOMBRE INSTRUCTOR             //
                                ///////////////////////////////////////////////////////

                                context.fillText(certificado.nombre_instructor, 550, 550);

                                // Convertir el lienzo a una imagen base64
                                var imageData = canvas.toDataURL('image/png');

                                // Crear un objeto PDF en memoria
                                var doc = new jsPDF();

                                // Agregar la imagen al documento PDF
                                doc.addImage(imageData, 'PNG', 0, 0, viewport.width, viewport.height);

                                // Guardar el archivo PDF
                                doc.save('nuevo-archivo.pdf');
                            });
                        });
                    }}
                    className='btn btn-dark w-50' type='button'>Certificado del curso</button>
            </div>
        );
    }
}

function Contentido({ display, enviarVideo, dataNiveles, dataSecciones }) {

    const { idCurso } = useParams();

    const [purchasedIdLevels, setPurchasedIdLevels] = useState([]);

    useEffect(() => {

        const formData = new FormData();

        formData.append('curso', idCurso);
        formData.append('alumno', localStorage.getItem('userId'));

        GetPurchasedLevels(formData).then((data) => {
            const arrIdLevels = data.levels.map((level) => {
                return level.nivel
            });
            setPurchasedIdLevels(arrIdLevels);
        });

    }, []);

    return (
        <>
            <div className={`col-12 d-flex flex-column justify-content-center align-items-center py-3 ${display ? 'd-flex' : 'd-none'}`}>
                <div className='row w-75 border-bottom border-secondary mb-2'>
                    <div className='col-12'>
                        <h5
                            className={`${localStorage.getItem('userType') == 'Instructor' ? 'text-danger fw-bold p-0 m-0 text-center' : 'd-none'}`} >
                            Debes de ser estudiante para comprar este curso!
                        </h5>
                        <h5
                            className={`${localStorage.getItem('userType') == 'Alumno' ? 'text-dark fw-bold p-0 m-0 text-center' : 'd-none'}`} >
                            Contenido del curso
                        </h5>
                    </div>
                </div>
                <div className='row w-50 border border-dark'>
                    <div className='col-12 w-100 d-flex justify-content-center d-flex flex-column'>
                        {
                            dataNiveles.map((nivel, indexNivel) => {
                                return (
                                    <div key={indexNivel}>
                                        <div className='row text-center d-flex'>
                                            <div className='col-12 d-flex justify-content-center'>
                                                <h3
                                                    className='fw-bold text-dark'>
                                                    {nivel.titulo}
                                                    <small
                                                        className='text-success'>
                                                        $ {nivel.costo}
                                                    </small>
                                                </h3>
                                                <div className={
                                                    purchasedIdLevels.includes(nivel.idNivelCurso) ||
                                                        localStorage.getItem('userType') == 'Instructor'
                                                        ? 'd-none' : 'd-block'
                                                }>
                                                    <PayPalScriptProvider
                                                        options={{ "client-id": process.env.REACT_APP_CLIENT_ID_PAYPAL }}>
                                                        <PayPalButtons
                                                            createOrder={(data, actions) => {
                                                                return actions.order.create({
                                                                    purchase_units: [
                                                                        {
                                                                            amount: {
                                                                                value: `${nivel.costo}`,
                                                                            },
                                                                        },
                                                                    ],
                                                                });
                                                            }}

                                                            onApprove={(data, actions) => {

                                                                const formData = new FormData();

                                                                formData.append('alumno', localStorage.getItem('userId'));
                                                                formData.append('compro_completo',
                                                                    dataNiveles.length - purchasedIdLevels.length === 1 ||
                                                                        dataNiveles.length === 1 ? 1 : 0
                                                                );
                                                                purchasedIdLevels.push(nivel.idNivelCurso);
                                                                formData.append('termino_curso', 0);
                                                                formData.append('forma_pago', 'PayPal');
                                                                formData.append('cantidad_pagada', nivel.costo);
                                                                formData.append('idLevels', JSON.stringify(dataNiveles));
                                                                formData.append('levels', JSON.stringify(purchasedIdLevels));
                                                                formData.append('idSeccions', JSON.stringify(dataSecciones));

                                                                InsertShopingCourse(formData, idCurso).then((data) => {
                                                                    alert('Nivel comprado con exito!');
                                                                    window.location.reload();
                                                                });

                                                                return actions.order.capture().then((details) => {
                                                                    const name = details.payer.name.given_name;

                                                                });
                                                            }}
                                                        />
                                                    </PayPalScriptProvider>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            dataSecciones.map((seccion, indexSeccion) => {
                                                if (seccion.nivel === nivel.idNivelCurso) {
                                                    return (
                                                        <div
                                                            key={indexSeccion}
                                                            className='row text-center'>
                                                            <h4
                                                                className='text-dark m-0'>
                                                                {seccion.titulo}
                                                            </h4>
                                                            <button
                                                                disabled={
                                                                    purchasedIdLevels.includes(nivel.idNivelCurso) ? false : true
                                                                }
                                                                onClick={() => {
                                                                    let formCourse = new FormData();
                                                                    formCourse.append('curso', idCurso);
                                                                    formCourse.append('nivel', nivel.idNivelCurso);
                                                                    formCourse.append('seccion', seccion.idSecciones);
                                                                    formCourse.append('alumno', localStorage.getItem('userId'));

                                                                    InsertCourseFinished(formCourse).then((data) => {
                                                                        console.log(data);
                                                                    });

                                                                    enviarVideo(seccion.video);
                                                                }}
                                                                className={`${seccion.video ? 'd-block btn btn-secondary' : 'd-none'}`}>
                                                                Ver video
                                                            </button>
                                                            <a
                                                                onClick={() => {
                                                                    let formCourse = new FormData();
                                                                    formCourse.append('curso', idCurso);
                                                                    formCourse.append('nivel', nivel.idNivelCurso);
                                                                    formCourse.append('seccion', seccion.idSecciones);
                                                                    formCourse.append('alumno', localStorage.getItem('userId'));

                                                                    InsertCourseFinished(formCourse).then((data) => {
                                                                        console.log(data);
                                                                    });
                                                                }}
                                                                className={
                                                                    `${seccion.contenido || seccion.link ? 'display-block ' : 'd-none'}
                                                                        ${purchasedIdLevels.includes(nivel.idNivelCurso) ? false : 'disabled-a'}`
                                                                }
                                                                download={'archivo_curso'}
                                                                href={
                                                                    seccion.contenido ?
                                                                        `data:${seccion.mime};base64,${seccion.contenido}` : (seccion.link ? seccion.link : '')}>
                                                                {
                                                                    seccion.contenido ? 'Contenido' : (seccion.link ? 'link' : '')
                                                                }
                                                            </a>
                                                        </div>
                                                    )

                                                }
                                            })
                                        }
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div >
        </>
    );
}

function SectionContenido({ nombreSeccion }) {

    const [up, setUp] = useState(true);

    return (
        <>
            <div className='row w-25 d-flex justify-content-center py-2 border-bottom border-secondary bg-primary-subtle fondo-seccion-contenido'>
                <div className='col-10 d-flex justify-content-center'>
                    <h6 className='p-0 m-0 text-dark fw-bold text-center'>{nombreSeccion}</h6>
                </div>
                <div className='col-2'>
                    <svg
                        onClick={() => setUp(false)}
                        className={`icono-up-section-contenido ${up ? 'd-flex' : 'd-none'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path
                            d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" /></svg>
                    <svg
                        onClick={() => setUp(true)}
                        className={`icono-up-section-contenido ${!up ? 'd-flex' : 'd-none'}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512">
                        <path
                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
                </div>
            </div>
            <div className={`row w-25 fondo-contenido-seccion ${!up ? 'd-flex' : 'd-none'}`}>
                <div className="col-12">
                    <p className='p-0 m-0 text-dark'>1-Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className='col-12 d-flex border-bottom border-secondary'>
                    <svg
                        className='icono-video-section-contenido me-2'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512">
                        <path
                            d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                    <svg
                        className='icono-video-section-contenido d-none me-2 '
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path
                            d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>
                    <small className='p-0 m-0 text-secondary fw-bold'>Duracion del video</small>
                </div>
                <div className="col-12">
                    <p className='p-0 m-0 text-dark'>2-Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
                <div className='col-12 d-flex border-bottom border-secondary'>
                    <svg
                        className='icono-video-section-contenido d-none me-2'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512">
                        <path
                            d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>
                    <svg
                        className='icono-video-section-contenido me-2'
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512">
                        <path
                            d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>
                    <small className='p-0 m-0 text-secondary fw-bold'>Documento</small>
                </div>
            </div>
        </>
    );
}

function Comprar({ display, dataSecciones, dataNiveles, dataCurso }) {

    const { idCurso } = useParams();
    const [courseComplete, setCourseComplete] = useState(0);
    const [textoModal, setTextoModal] = useState('');

    useEffect(() => {
        const formData = new FormData();

        formData.append('curso', idCurso);
        formData.append('alumno', localStorage.getItem('userId'));

        VerifyCourseComplete(formData).then((data) => {
            setCourseComplete(data.compro_completo);
        });
    }, []);

    if (localStorage.getItem('userType') == 'Instructor') {
        return <h5
            className={`${display ? 'd-flex justify-content-center mt-3 text-danger fw-bold' : 'd-none'}`}>Debes de ser estudiante para comprar este curso!</h5>
    }
    else if (localStorage.getItem('userType') == 'Alumno') {
        return (
            <>
                <div className={`col-12 justify-content-center flex-column align-items-center py-3 m-0 ${display && courseComplete === 1 ? 'd-flex' : 'd-none'}`}>
                    <h6 className='fw-bold text-dark p-0 m-0 text-center py-2'>Tienes este curso!</h6>
                </div>
                <div className={`col-12 justify-content-center flex-column align-items-center py-3 m-0 ${display && courseComplete !== 1 ? 'd-flex' : 'd-none'}`}>
                    <h6 className='fw-bold text-dark p-0 m-0 text-center py-2'>Consigue el curso ahora por ${dataCurso.cost}</h6>
                    <PayPalScriptProvider
                        options={{ "client-id": process.env.REACT_APP_CLIENT_ID_PAYPAL }}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: `${dataCurso.cost <= 0 ? 1 : dataCurso.cost}`,
                                            },
                                        },
                                    ],
                                });
                            }}

                            onApprove={(data, actions) => {

                                const formData = new FormData();

                                formData.append('alumno', localStorage.getItem('userId'));
                                formData.append('compro_completo', 1);
                                formData.append('termino_curso', 0);
                                formData.append('forma_pago', 'PayPal');
                                formData.append('cantidad_pagada', dataCurso.cost);
                                formData.append('idLevels', JSON.stringify(dataNiveles));
                                formData.append('levels', JSON.stringify([]));
                                formData.append('idSeccions', JSON.stringify(dataSecciones));

                                InsertShopingCourse(formData, idCurso).then((data) => {
                                    alert('Curso comprado con exito!');
                                    location.reload();
                                });

                                return actions.order.capture().then((details) => {
                                    const name = details.payer.name.given_name;
                                });
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            </>
        );
    }
}

function NavegacionVideo({ dataCurso, dataNiveles, dataSecciones, enviarVideo, terminoCurso, comments, promedio, certificadoData }) {

    const [descripcionGeneral, setDescrpcionGeneral] = useState(true);
    const [valoraciones, setValoraciones] = useState(false);
    const [certificado, setCertificado] = useState(false);
    const [contenidoCurso, setContenidoCurso] = useState(false);
    const [comprar, setComprar] = useState(false);

    useEffect(() => {

    }, []);


    return (
        <div className='bg-transparent d-flex flex-column justify-content-center py-2'>
            <div className='row p-0 m-0 w-100'>
                <div className='col-2 h-100 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(true);
                            setValoraciones(false);
                            setCertificado(false);
                            setContenidoCurso(false);
                            setComprar(false);
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
                <div className='col-2 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(false);
                            setValoraciones(false);
                            setCertificado(false);
                            setContenidoCurso(true);
                            setComprar(false);
                        }}
                        className={`
                text-center 
                form-text 
                text-secondary 
                fs-6 
                fw-bold 
                m-0 texto-navegacion ${contenidoCurso ? 'texto-navegacion-click' : null}`}>
                        Contenido del curso
                    </h6>
                </div>
                <div className='col-2 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(false);
                            setValoraciones(true);
                            setCertificado(false);
                            setContenidoCurso(false);
                            setComprar(false);
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
                <div className='col-2 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(false);
                            setValoraciones(false);
                            setCertificado(true);
                            setContenidoCurso(false);
                            setComprar(false);
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
                <div className='col-2 p-0 m-0'>
                    <h6
                        onClick={() => {
                            setDescrpcionGeneral(false);
                            setValoraciones(false);
                            setCertificado(false);
                            setContenidoCurso(false);
                            setComprar(true);
                        }}
                        className={`
                text-center 
                form-text 
                text-secondary 
                fs-6 
                fw-bold 
                m-0 texto-navegacion ${comprar ? 'texto-navegacion-click' : null}`}>
                        Comprar
                    </h6>
                </div>
            </div>
            <div className='row p-0 m-0 w-100'>
                <DescripcionGeneral
                    dataCurso={dataCurso}
                    display={descripcionGeneral} />
                <Contentido
                    dataNiveles={dataNiveles}
                    dataSecciones={dataSecciones}
                    enviarVideo={enviarVideo}
                    display={contenidoCurso}
                />
                <Valoraciones
                    display={valoraciones}
                    comments={comments}
                    promedio={promedio}
                    terminoCurso={terminoCurso}
                />
                <Certificado
                    certificado={certificadoData}
                    display={certificado}
                    terminoCurso={terminoCurso} />
                <Comprar
                    display={comprar}
                    dataSecciones={dataSecciones}
                    dataNiveles={dataNiveles}
                    dataCurso={dataCurso} />
            </div>
        </div>
    );

}

export default function Curso() {

    const { idCurso } = useParams();

    const [dataCurso, setDataCurso] = useState();
    const [dataNiveles, setDataNiveles] = useState();
    const [dataSecciones, setDataSecciones] = useState();
    const [terminoCurso, setDataTerminoCurso] = useState();
    const [video, setVideo] = useState();
    const [comments, setComments] = useState();
    const [promedio, setPromedio] = useState();
    const [certificado, setCertificado] = useState();

    const enviarVideo = (dataVideo) => {
        setVideo(dataVideo);
    };

    const iframeRef = useRef(null);

    useEffect(() => {

        let formDataCertificado = new FormData();
        formDataCertificado.append('alumno', localStorage.getItem('userId'));
        formDataCertificado.append('curso', idCurso);

        GetCertificated(formDataCertificado).then((data) => {
            if (data.status == 200)
                setCertificado(data.certificado);
        });

        GetComments(idCurso).then((data) => {
            if (data.status == 200)
                setComments(data.comments);
        });

        GetCalCourse(idCurso).then((data) => {
            data.promedio !== null ?
                setPromedio(data.promedio) : setPromedio(0);
        });

        let formData = new FormData();

        formData.append('usuario', localStorage.getItem('userId'));

        GetCourseFinished(idCurso, formData).then((data) => {
            setDataTerminoCurso(data);
        });

        GetCourse(idCurso).then((course) => {
            setDataCurso(course.course);
            setDataNiveles(course.levels);
            setDataSecciones(course.sections);
        });

        const iframe = iframeRef.current;

        const handleVideoEnded = () => {
            console.log('El usuario llegó al final del video');
        };

        if (iframe) {
            iframe.onload = () => {
                const video = iframe.contentWindow.document.querySelector('video');
                if (video) {
                    video.addEventListener('ended', handleVideoEnded);
                }
            };
        }

        return () => {
            if (iframe) {
                const video = iframe.contentWindow.document.querySelector('video');
                if (video) {
                    video.removeEventListener('ended', handleVideoEnded);
                }
            }
        };

    }, []);


    if (!dataCurso || 
        !dataNiveles || 
        !dataSecciones || 
        !terminoCurso || 
        !comments || 
        certificado === undefined || certificado === null || promedio === undefined || promedio === null) {
        return <h5 className=''>Wating for data</h5>;

    } else {
        return (
            <div className='container-fluid p-0 m-0'>
                <div className='row p-0 m-0'>
                    <div className='col-12 p-0 m-0 d-flex justify-content-center'>
                        <iframe
                            ref={iframeRef}
                            className='mt-5'
                            width="100%"
                            height="500"
                            src={video ? `${process.env.REACT_APP_PATH_API_VIDEOS}/${video}` : ''}
                            title="Video curso"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                <div className='row p-0 m-0'>
                    <div className='col-12 p-0 m-0'>
                        <NavegacionVideo
                            certificadoData={certificado}
                            terminoCurso={terminoCurso}
                            enviarVideo={enviarVideo}
                            dataCurso={dataCurso}
                            dataNiveles={dataNiveles}
                            dataSecciones={dataSecciones}
                            comments={comments}
                            promedio={promedio}
                        />
                    </div>
                </div>
            </div>
        );
    }
}