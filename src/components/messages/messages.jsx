import { React, useState } from 'react';
import './messages.css';
import imagenPerfil from '../../images/perfil.jpg';
import { useEffect } from 'react';
import { GetUsers } from '../../servicesBDM/userService';
import { InsertMessage, GetMessages } from '../../servicesBDM/messages';

export default function Messages() {

    const [ws, setWs] = useState();
    const [users, setUsers] = useState();
    const [receptor, setReceptor] = useState();
    const [messages, setMessages] = useState([]);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {

        GetUsers().then((data) => {
            setUsers(data.users);
        });

        const ws1 = new WebSocket('ws://localhost:8081'); // Reemplaza la URL con la URL de tu servidor WebSocket

        ws1.onopen = () => {

            let dataConnect = {
                "codeMessage": "userConnect",
                "message": {
                    "userId": localStorage.getItem('userId')
                }
            }

            let jsonDataConnect = JSON.stringify(dataConnect);

            ws1.send(jsonDataConnect);
        };

        ws1.onmessage = (message) => {
            setMessages((prevMessages) => {
                const newMessages = [...prevMessages, JSON.parse(message.data)];
                return newMessages;
            });
        };

        ws1.onclose = () => {

        };

        setWs(ws1);

        return () => {
            if (ws1 && ws1.readyState === WebSocket.OPEN) {

                let dataDisconnect = {
                    "codeMessage": "userDisconnect",
                    "message": {
                        "userId": localStorage.getItem('userId')
                    }
                }

                let jsonDataDisconnect = JSON.stringify(dataDisconnect);

                ws1.send(jsonDataDisconnect);

                ws1.close();
            }
        }

    }, []);


    if (!ws || !users) {
        return (<div>waiting for data</div>);
    } else {

        return (
            <div className="container-fluid padre-messages pt-2">
                <div className='row'>
                    <div className='col-12'>
                        <h5 className='fw-bold text-dark text-center'>Mensajes</h5>
                    </div>
                    <div className='col-12'>
                        <form
                            id='form-users-messages'>
                            <select
                                onChange={(e) => {
                                    setReceptor(e.target.value);

                                    if (e.target.value === '-1')
                                        return;

                                    let formMessages = new FormData();
                                    formMessages.append('usuario1', localStorage.getItem('userId'));
                                    formMessages.append('usuario2', e.target.value);

                                    GetMessages(formMessages).then((data) => {
                                        setMessages(data.messages);
                                    });

                                }}
                                id='users'
                                defaultValue={""}
                                aria-describedby="users"
                                className="form-select text-secondary mx-1 my-2"
                                aria-label="users"
                                name="users">
                                <option value="-1">Selecciona un usuario...</option>
                                {
                                    users.map((user, index) => {
                                        if (user.userId !== parseInt(localStorage.getItem('userId')))
                                            return (
                                                <option
                                                    key={index}
                                                    id={index}
                                                    value={user.userId}>
                                                    {user.nombre} ({user.userType})
                                                </option>
                                            );
                                    })
                                }
                            </select>

                        </form>
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-12 d-flex justify-content-center'>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();

                                let mensajeCheck = mensaje.replace(/\s/g, "");

                                if (mensajeCheck === '') {
                                    alert('Te faltan datos');
                                    return;
                                }

                                const fechaHoraActual = new Date();

                                let dataMensaje = {
                                    "codeMessage": "userMessage",
                                    "userIdEmiter": localStorage.getItem('userId'),
                                    "userIdReceptor": receptor,
                                    "message": mensaje,
                                    "dateTime": fechaHoraActual.toLocaleString()
                                }

                                let jsonDataMensaje = JSON.stringify(dataMensaje);

                                ws.send(jsonDataMensaje);

                                setMessages((prevMessages) => {
                                    const newMessages = [...prevMessages, JSON.parse(jsonDataMensaje)];
                                    return newMessages;
                                });

                                let formMessage = new FormData();

                                formMessage.append('usuario1', localStorage.getItem('userId'));
                                formMessage.append('usuario2', receptor);
                                formMessage.append('mensaje', mensaje);

                                InsertMessage(formMessage).then((data) => {
                                    console.log(data);
                                })

                            }}
                            className={`${!receptor || receptor === '-1' ? 'd-none' : 'row w-100'}`}
                        >
                            <div className='col-12 mensajes-area border'>
                                {
                                    messages.map((message, index) => {

                                        if ((message.userIdEmiter == receptor && message.userIdReceptor == localStorage.getItem('userId')) ||
                                            (message.userIdEmiter == localStorage.getItem('userId') && message.userIdReceptor == receptor))
                                            return (
                                                <div key={index}
                                                    className={`row d-flex py-2 ${message.userIdEmiter == localStorage.getItem('userId') ?
                                                        'justify-content-end' : 'justify-content-start'}`}>
                                                    <div className={`col-6 texto-mensaje rounded ${message.userIdEmiter == localStorage.getItem('userId') ?
                                                        'bg-primary' : 'bg-danger'}`}>
                                                        <h6 className='text-white py-2 m-0 text-center'>{message.message}</h6>
                                                    </div>
                                                </div>
                                            );
                                    })
                                }
                            </div>
                            <div className='col-12 p-0 m-0 h-50'>
                                <textarea

                                    onChange={(e => {
                                        setMensaje(e.target.value);
                                    })}

                                    value={mensaje}
                                    className='form-control p-0 m-0'
                                    name="mensaje-area"
                                    cols="40"
                                    rows="5">

                                </textarea>
                            </div>
                            <div className='col-12 p-0 m-0 d-flex justify-content-end'>
                                <button
                                    className='btn btn-dark w-50 boton-enviar-mensaje'
                                    type="submit">Enviar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div >
        );
    }
}