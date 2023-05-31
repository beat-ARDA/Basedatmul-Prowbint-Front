import React from "react";
import './crear-curso.css';
import { useState } from "react";
import { useEffect } from "react";
import { GetCategories } from "../../servicesBDM/categories";
import { InsertCourse } from "../../servicesBDM/courses";
import { useNavigate } from "react-router-dom";

export default function CrearCurso() {

    const [videos, setVideos] = useState([]);
    const [contadorVideos, setContadorVideos] = useState(-1);

    const [dataCategories, setDataCategories] = useState([]);
    const [sectionsArray, setSectionsArray] = useState([]);
    const [nivelArray, setNivelArray] = useState([]);
    const [currentLevel, setCurrentLevel] = useState(true);
    const [currentSection, setCurrentSection] = useState(true);
    const [textButtonLevel, setTextButtonLevel] = useState('Guardar');

    const [tituloCurso, setTituloCurso] = useState('');
    const [precioCurso, setPrecioCurso] = useState();
    const [imgCurso, setImgCurso] = useState();
    const [descripcionCurso, setDescripcionCurso] = useState('');
    const [instructor, setInscturctor] = useState(localStorage.getItem('userId'));

    const [imagenBoll, setImagenBool] = useState(false);
    const [precioBool, setPrecioBool] = useState(false);
    const [nombreCursoBool, setNombreCursoBool] = useState(false);
    const [descripcionBool, setDescripcionBool] = useState(false);

    const [tituloNivelBool, setTituloNivelBool] = useState(false);
    const [precioNivelBool, setPrecioNivelBool] = useState(false);

    const [categoriesArray, setCategoriesArray] = useState([]);

    const [archivoBool, setArchivoBool] = useState(false);
    const [contenidoBool, setContenidoBool] = useState(false);
    const [linkBool, setLinkBool] = useState(false);

    const [textoModal, setTextoModal] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        GetCategories().then(response => {
            response.categories ?
                setDataCategories(response.categories) : setDataCategories([]);
        });
    }, []);

    if (dataCategories)
        return (
            <form
                encType="multipart/form-data"
                onSubmit={(e) => {

                    e.preventDefault();

                    const formData = new FormData(document.getElementById('form-curso'));

                    formData.append('instructor', instructor);
                    formData.append('levels', JSON.stringify(nivelArray));
                    formData.append('sections', JSON.stringify(sectionsArray));

                    videos.forEach((video, index) => {
                        formData.append(`video${index}`, video);
                    });

                    InsertCourse(formData).then((dato) => {
                        if (dato.status == 200) {
                            setTextoModal(dato.message);
                            alert(dato.message);
                            navigate('/');
                        }
                    });

                }}
                id="form-curso"
                className="container-fluid pt-2 padre-crear-curso">
                <div className="row">
                    <div className="col-12">
                        <h5 className='fw-bold text-dark text-center'>Crear curso</h5>
                    </div>
                </div>
                <div className="row m-3">
                    <select
                        name="categorias[]"
                        multiple={true}
                        className="form-control overflow-auto altura-categorias">
                        <option value="" disabled >{dataCategories.length > 0 ? 'Seleccion las categorias...' : 'No hay categorias ...'}</option>
                        {
                            dataCategories.map((category, index) => {
                                return (
                                    <option key={index} value={category.idCategoria}>
                                        {category.nombre}
                                    </option>);
                            })
                        }
                    </select>
                </div>
                <div className="row m-1">
                    <div className="col-6 pe-1">
                        <input
                            id="imagen"
                            onChange={(e) => {
                                const archivo = e.target.files[0];

                                var allowedExtensions = /(.jpg|.jpeg|.png)$/i;
                                if (!allowedExtensions.exec(archivo.name)) {
                                    alert("Extension de imagen no permitida");
                                    return;
                                }

                                if (archivo == undefined || archivo == null) {
                                    return;
                                }

                                const objectURL = URL.createObjectURL(archivo);
                                setImgCurso(objectURL);
                                setImagenBool(true);
                            }
                            }
                            className="form-control"
                            type="file"
                            accept="image/*"
                            name="imagen" />
                    </div>
                    <div className="col-6 ps-1 d-flex flex-row justify-content-center align-items-center">
                        <label className="small fs-4 text-success fw-bold" htmlFor="costo">$</label>
                        <input
                            onChange={(e) => {
                                setPrecioCurso(e.target.value);
                                if (e.target.value !== '')
                                    setPrecioBool(true);
                                else
                                    setDescripcionBool(false);
                            }}
                            id="costo"
                            name="costo"
                            value={precioCurso}
                            className="form-control"
                            type="number"
                            placeholder="Ingresa el precio del curso..." />
                    </div>
                </div>
                <div className="row m-1">
                    <div className="col-12 pe-1 ps-1 d-flex justify-content-center">
                        <img
                            src={`${imgCurso}`}
                            className={`${imgCurso === '' ? 'd-none' : 'img-curso mt-1'}`}
                            id="image-curso"
                            name="imagen-prev" />
                    </div>
                </div>
                <div className="d-flex justify-content-center alig-items-center flex-column">
                    <div className="row m-1">
                        <div className="col-6 pe-1">
                            <input
                                onChange={(e) => {
                                    setTituloCurso(e.target.value);
                                    if (e.target.value !== '')
                                        setNombreCursoBool(true);
                                    else
                                        setDescripcionBool(false);
                                }}
                                value={tituloCurso}
                                name="titulo"
                                className="form-control text-center"
                                placeholder="Nombre del curso"
                            />
                        </div>
                        <div className="col-6 ps-1">
                            <input
                                onChange={(e) => {
                                    setDescripcionCurso(e.target.value);
                                    if (e.target.value !== '')
                                        setDescripcionBool(true);
                                    else
                                        setDescripcionBool(false);
                                }}
                                value={descripcionCurso}
                                name="descripcion"
                                className="form-control text-center "
                                placeholder="Descripcion del curso"
                            />
                        </div>
                    </div>
                    <div className="row m-1 d-flex justify-content-center">
                        <div className="col-12 pe-1">
                            <button
                                type="button"
                                onClick={() => {

                                    setNivelArray([...nivelArray, {
                                        "idLevel": nivelArray.length + 1,
                                        "curso": null,
                                        "costo": null,
                                        "titulo": null
                                    }]);
                                    //setCurrentLevel(false);

                                }}
                                className="btn btn-dark w-100">
                                Nuevo nivel
                            </button>
                        </div>
                    </div>
                    {
                        nivelArray.map((nivel, indexLevel) => {
                            return (
                                <div key={indexLevel} className="row m-1" id="nivel-container">
                                    <div className="col-6 pe-1">
                                        <input
                                            onChange={(e) => {
                                                nivel.titulo = e.target.value;

                                                if (e.target.value !== '')
                                                    setTituloNivelBool(true);
                                                else
                                                    setTituloNivelBool(false);
                                            }}
                                            name="nivel"
                                            className="form-control text-center"
                                            placeholder="Titulo del nivel"
                                        />
                                    </div>
                                    <div className="col-2 ps-1 d-flex justify-content-center align-items-center">
                                        <label
                                            className="label fs-4 text-success fw-bold"
                                            htmlFor="precio-nivel">$</label>
                                        <input
                                            onChange={(e) => {
                                                nivel.costo = e.target.value;
                                                if (e.target.value !== '')
                                                    setPrecioNivelBool(true);
                                                else
                                                    setPrecioNivelBool(false);
                                            }}
                                            id="precio-nivel"
                                            className="text-center form-control"
                                            type="text"
                                            name="precio-nivel"
                                            placeholder="Precio nivel"
                                        />
                                    </div>
                                    <div className="col-2 p-0">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setCurrentSection(false);
                                                setCurrentLevel(false);
                                                setSectionsArray([...sectionsArray, {
                                                    "level": nivel.idLevel,
                                                    "titulo": null,
                                                    "contenido": null,
                                                    "archivo": null,
                                                    "mime": null,
                                                    "link": null,
                                                    "idUsuario": instructor,
                                                    "saveButton": false,
                                                    "filesButtons": false
                                                }]);

                                                setTextButtonLevel('Nueva seccion');
                                            }}
                                            className="btn btn-success w-100">
                                            {textButtonLevel}
                                        </button>
                                    </div>
                                    <div className="col-2 pe-1">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                let nuevoArreglo = [...nivelArray];
                                                nuevoArreglo.splice(indexLevel, 1);
                                                setNivelArray(nuevoArreglo);
                                                setCurrentLevel(true);
                                                let array = sectionsArray.filter((element) => {
                                                    return element.level !== nivel.idLevel;
                                                });

                                                setSectionsArray(array);
                                            }}
                                            className="btn btn-danger w-100">
                                            Eliminar nivel
                                        </button>
                                    </div>
                                    {
                                        sectionsArray.map((section, indexSection) => {
                                            if (section.level === nivel.idLevel)
                                                return (
                                                    <div key={indexSection} id="seccion-container" className="row m-1 overflow-auto altura-seccion">
                                                        <div className="col-10 pe-1">
                                                            <div className="d-flex justify-content-center align-items-center flex-column border border-dark">
                                                                <input
                                                                    value={section.titulo}
                                                                    onChange={(e) => {
                                                                        section.titulo = e.target.value;
                                                                    }}
                                                                    name="seccion"
                                                                    className="form-control text-center mb-1"
                                                                    placeholder="Nombre de la seccion"
                                                                />
                                                                <div className="d-flex row m-0 w-100">
                                                                    <div className="col-6 text-center">
                                                                        <label
                                                                            className="w-100 bg-info text-white form-control"
                                                                            htmlFor="video">
                                                                            Selecciona un video
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input
                                                                            disabled={section.filesButtons}
                                                                            onChange={(e) => {
                                                                                let suma = contadorVideos + 1;
                                                                                section.contenido = 'video' + suma;
                                                                                setContadorVideos(suma);

                                                                                const newArray = [...videos];
                                                                                newArray.push(e.target.files[0]);
                                                                                setVideos(newArray);

                                                                                // const fileReader = new FileReader();
                                                                                // fileReader.readAsDataURL(e.target.files[0]);

                                                                                // // Cuando se carga el archivo
                                                                                // fileReader.onload = function () {
                                                                                //     // Obtener los datos en base64
                                                                                //     const base64Data = fileReader.result.substr(fileReader.result.indexOf(',') + 1);

                                                                                //     // //Dividir base 64
                                                                                //     // const fragmentSize = 1000;
                                                                                //     // const fragments = [];
                                                                                //     // for (let i = 0; i < base64String.length; i += fragmentSize) {
                                                                                //     //     fragments.push(base64String.substr(i, fragmentSize));
                                                                                //     // }

                                                                                //     section.contenido = 'll';
                                                                                section.filesButtons = true;
                                                                                setContenidoBool(true);
                                                                                // }
                                                                            }
                                                                            }
                                                                            placeholder="Selecciona un video"
                                                                            type="file" accept="video/*"
                                                                            className="btn btn-secondary btn-sm w-100"
                                                                            name={`video`} />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex row m-0 w-100">
                                                                    <div className="col-6 text-center">
                                                                        <label
                                                                            className="w-100 bg-info text-white form-control"
                                                                            htmlFor="archivo">
                                                                            Selecciona un archivo
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input
                                                                            disabled={section.filesButtons}
                                                                            onChange={(e) => {
                                                                                section.mime = e.target.files[0].type;
                                                                                const fileReader = new FileReader();
                                                                                fileReader.readAsDataURL(e.target.files[0]);
                                                                                // Cuando se carga el archivo
                                                                                fileReader.onload = function () {
                                                                                    // Obtener los datos en base64
                                                                                    const base64Data = fileReader.result.substr(fileReader.result.indexOf(',') + 1);
                                                                                    section.archivo = base64Data;
                                                                                    section.filesButtons = true;
                                                                                    setArchivoBool(true);
                                                                                }
                                                                            }
                                                                            }
                                                                            placeholder="Selecciona un archivo"
                                                                            type="file" accept=".txt,.pdf,.doc,.docx,image/jpeg,image/png,image/gif"
                                                                            className="btn btn-secondary btn-sm w-100"
                                                                            name="archivo" />
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex row m-0 w-100">
                                                                    <div className="col-6 text-center">
                                                                        <label
                                                                            className="w-100 bg-info text-white form-control"
                                                                            htmlFor="link">
                                                                            Ingresa link a pagina externa
                                                                        </label>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <input
                                                                            onChange={(e) => {
                                                                                if (e.target.value !== '') {
                                                                                    setLinkBool(true);
                                                                                    section.filesButtons = true;
                                                                                    section.link = e.target.value;
                                                                                }
                                                                                else {
                                                                                    setLinkBool(false);
                                                                                    section.filesButtons = false;
                                                                                    section.link = null;
                                                                                }
                                                                            }
                                                                            }
                                                                            placeholder="Selecciona un archivo"
                                                                            type="text"
                                                                            className="btn btn-secondary btn-sm w-100"
                                                                            name="link" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-1 pe-1">
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    setCurrentSection(true);
                                                                    setCurrentLevel(true);
                                                                    section.saveButton = true;
                                                                }}
                                                                className="btn btn-success w-100">
                                                                Guardar
                                                            </button>
                                                        </div>
                                                        <div className="col-1 ps-1">
                                                            <button
                                                                type="button"
                                                                onClick={() => {
                                                                    let nuevoArreglo = [...sectionsArray];
                                                                    nuevoArreglo.splice(indexSection, 1);
                                                                    setSectionsArray(nuevoArreglo);
                                                                }}
                                                                className="btn btn-danger w-100">
                                                                Eliminar
                                                            </button>
                                                        </div>
                                                    </div>
                                                );
                                        })
                                    }
                                </div>
                            );
                        })

                    }
                    <div className="row m-1">
                        <div className="col-12 text-end">
                            <button

                                className="btn-primary btn w-100"
                                type="submit">Publicar</button>
                        </div>
                    </div>
                    <div className="row m-1">
                        <div className="col-12 text-end">
                            <button
                                type="button"
                                onClick={() => navigate('/')}
                                className="btn-danger btn w-100">Cancelar</button>
                        </div>
                    </div>
                </div>

            </form >
        );
}