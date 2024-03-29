import { React, useEffect, useState } from "react";
import './header.css';
import { Link, useNavigate } from "react-router-dom";
import { GetUserProfileBDM } from "../../servicesBDM/userService";
import perfilImageVacia from '../../images/perfilSola.jpg';
import { GetCategories } from "../../servicesBDM/categories";

function Header() {
    const navigate = useNavigate();
    const [mobileActive, setMobileActive] = useState(false);
    const [sesionActive, setSesionActive] = useState(false);
    const [dataPerfil, setDataPerfil] = useState();
    const [dataCategories, setCategories] = useState([]);

    useEffect(() => {
        
        GetUserProfileBDM()
            .then(response => {
                if (response.status === 200) {
                    localStorage.setItem('userType', response.user.userType);
                    setDataPerfil(response);
                }
            });

        GetCategories().then(response => {
            response.categories ?
                setCategories(response.categories) : null;
        });

        localStorage.getItem('token') ? setSesionActive(true) : null;

    }, []);


    return (
        <>
            {
                !sesionActive ?
                    /*Desktop no sesion*/
                    <nav className="container-fluid header">
                        <div className="row py-2 m-0">
                            <div className="col-xl-1 m-0 p-0 d-flex justify-content-center">
                                <Link to="./">
                                    <svg
                                        className="header-logo"
                                        version="1.0"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1024.000000 768.000000"
                                        preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
                                            fill="#000000" stroke="none">
                                            <path d="M6230 7654 c-165 -22 -309 -25 -1410 -30 -747 -3 -1083 -8 -1102 -15 -41 -17 -95 -82 -108 -130 -22 -80 14 -165 87 -210 l38 -24 940 -3 c909 -4 1274 3 1550 29 179 17 228 37 264 107 42 82 35 154 -21 218 -58 66 -100 76 -238 58z" />
                                            <path d="M3221 7119 c-125 -76 -130 -247 -9 -326 36 -24 52 -27 181 -34 235 -12 3470 -11 3504 2 70 26 113 95 113 180 0 75 -34 130 -102 163 l-53 25 -1804 3 c-1643 3 -1806 2 -1830 -13z" />
                                            <path d="M2687 6550 c-65 -20 -118 -82 -133 -157 -14 -71 51 -181 119 -202 18 -5 156 -12 307 -16 151 -3 316 -10 365 -14 50 -5 973 -9 2051 -10 1706 -1 1975 1 2070 14 127 18 168 36 209 94 26 37 30 52 30 106 0 54 -4 69 -30 106 -35 49 -89 81 -143 82 -20 1 -73 -4 -116 -11 -121 -19 -3819 -16 -4156 3 -272 16 -530 18 -573 5z" />
                                            <path d="M2095 6046 c-79 -34 -125 -131 -104 -219 17 -70 65 -116 159 -150 141 -50 229 -52 3311 -52 l2805 0 41 27 c73 48 105 128 83 207 -13 48 -67 113 -108 130 -19 7 -848 12 -2842 14 -2863 5 -3096 8 -3183 42 -46 18 -122 19 -162 1z" />
                                            <path d="M6760 5379 c-41 -5 -120 -20 -176 -34 -439 -110 -806 -411 -1003 -825 -60 -127 -92 -222 -122 -360 -20 -90 -23 -135 -23 -310 0 -175 3 -220 23 -310 44 -205 128 -402 242 -572 84 -124 266 -305 388 -387 187 -124 416 -215 635 -253 157 -26 408 -22 560 11 347 74 631 237 848 486 88 101 189 242 218 307 22 48 26 138 8 156 -15 15 -92 16 -118 2 -10 -6 -41 -48 -69 -95 -103 -175 -262 -359 -400 -463 -152 -114 -379 -211 -583 -247 -96 -17 -347 -19 -363 -3 -9 9 -9 2728 0 2736 15 16 310 6 394 -12 336 -72 616 -244 817 -502 35 -45 71 -85 80 -88 34 -13 94 -6 114 14 52 52 7 146 -144 296 -215 214 -406 329 -681 409 -170 49 -440 67 -645 44z" />
                                            <path d="M2275 3850 l0 -1450 113 0 112 0 0 1450 0 1450 -112 0 -113 0 0 -1450z" />
                                            <path d="M2680 3850 l0 -1450 95 0 95 0 0 1450 0 1450 -95 0 -95 0 0 -1450z" />
                                            <path d="M3050 3850 l0 -1450 90 0 90 0 0 1450 0 1450 -90 0 -90 0 0 -1450z" />
                                            <path d="M3410 3850 l0 -1450 85 0 85 0 0 251 0 251 63 -6 c34 -4 155 -9 268 -12 242 -7 349 5 521 62 184 62 338 161 469 303 314 338 405 854 226 1277 -151 358 -429 595 -814 695 -184 47 -493 79 -770 79 l-133 0 0 -1450z m501 1270 c236 -24 398 -64 548 -136 124 -59 199 -113 294 -213 300 -314 376 -747 198 -1127 -168 -357 -510 -582 -916 -601 -119 -5 -286 6 -397 28 l-58 12 0 797 c0 438 3 899 7 1023 l6 227 108 0 c59 0 153 -5 210 -10z" />
                                            <path d="M2075 2204 c-47 -26 -66 -46 -86 -89 -22 -48 -24 -113 -5 -158 17 -43 76 -93 123 -106 25 -7 474 -11 1328 -13 709 -1 1391 -5 1515 -10 391 -14 3351 -21 3398 -8 83 22 142 97 142 180 0 75 -37 138 -101 170 -33 18 -114 19 -1605 24 -863 3 -1591 8 -1619 11 -27 3 -727 8 -1555 11 -1383 4 -1507 3 -1535 -12z" />
                                            <path d="M2782 1669 c-119 -21 -182 -89 -182 -195 0 -47 25 -108 56 -135 48 -42 85 -52 169 -45 80 6 161 1 495 -31 155 -15 402 -17 2173 -21 l1999 -3 54 26 c70 34 104 88 104 164 0 28 -6 66 -14 85 -17 41 -81 94 -121 101 -16 3 -921 7 -2010 8 -1391 3 -2010 7 -2080 15 -274 31 -565 45 -643 31z" />
                                            <path d="M4425 1100 l-1140 -5 -38 -24 c-103 -64 -124 -197 -45 -287 65 -74 -110 -68 1888 -60 l1795 6 53 26 c68 33 102 88 102 165 0 66 -22 112 -73 153 l-39 31 -681 0 c-375 0 -1195 -2 -1822 -5z" />
                                            <path d="M3948 550 c-96 -29 -154 -133 -128 -229 13 -48 67 -113 108 -130 20 -8 360 -11 1259 -9 l1231 3 39 31 c51 41 73 87 73 153 0 77 -33 131 -102 165 l-52 26 -1200 -1 c-661 0 -1213 -4 -1228 -9z" />
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center p-0 m-0">
                                <div className="categorias-link">
                                    <Link to="/categorias">
                                        <h6 className="m-0 p-0 text-black col-12" href="./">Categorías</h6>
                                    </Link>
                                    <ul className="lista-categorias p-2 mx-2 w-25 ">
                                        {
                                            dataCategories.map((category, index) => {
                                                return (
                                                    <div key={index} className="row pb-2 m-0">
                                                        <div className="col-xl-12 d-flex justify-content-between categoria-item">
                                                            <li>{category.nombre}</li>
                                                            <svg
                                                                className="categoria-icon"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 384 512">
                                                                <path
                                                                    d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-7 m-0 p-0">
                                {/* <form className="d-flex align-items-center justify-content-center h-100 search-form px-2">
                                    <input
                                        onChange={(e) => { console.log(e.target.value) }}
                                        id="buscador"
                                        className="w-100 search-input"
                                        type="search"
                                        placeholder="Busca lo que sea..." />
                                    <button className="search-button">
                                        <svg
                                            className="search-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                                        </svg>
                                    </button>
                                </form> */}
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center m-0 p-0">
                                <Link to="/messages">
                                    <svg
                                        className="cart-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
                                </Link>
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center m-0 p-0 pe-1">
                                <button onClick={() => navigate("/registrarse")} className="register-button w-100">
                                    Registrarse
                                </button>
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center m-0 p-0 ps-1">
                                <button onClick={() => navigate("/ingresar")} className="login-button w-100">
                                    Ingresar
                                </button>
                            </div>
                        </div>
                    </nav>
                    :
                    /*Desktop sesion*/
                    <nav className="container-fluid header">
                        <div className="row py-2 m-0">
                            <div className="col-xl-1 m-0 p-0 d-flex justify-content-center">
                                <svg
                                    onClick={() => navigate("/")}
                                    className="header-logo"
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024.000000 768.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M6230 7654 c-165 -22 -309 -25 -1410 -30 -747 -3 -1083 -8 -1102 -15 -41 -17 -95 -82 -108 -130 -22 -80 14 -165 87 -210 l38 -24 940 -3 c909 -4 1274 3 1550 29 179 17 228 37 264 107 42 82 35 154 -21 218 -58 66 -100 76 -238 58z" />
                                        <path d="M3221 7119 c-125 -76 -130 -247 -9 -326 36 -24 52 -27 181 -34 235 -12 3470 -11 3504 2 70 26 113 95 113 180 0 75 -34 130 -102 163 l-53 25 -1804 3 c-1643 3 -1806 2 -1830 -13z" />
                                        <path d="M2687 6550 c-65 -20 -118 -82 -133 -157 -14 -71 51 -181 119 -202 18 -5 156 -12 307 -16 151 -3 316 -10 365 -14 50 -5 973 -9 2051 -10 1706 -1 1975 1 2070 14 127 18 168 36 209 94 26 37 30 52 30 106 0 54 -4 69 -30 106 -35 49 -89 81 -143 82 -20 1 -73 -4 -116 -11 -121 -19 -3819 -16 -4156 3 -272 16 -530 18 -573 5z" />
                                        <path d="M2095 6046 c-79 -34 -125 -131 -104 -219 17 -70 65 -116 159 -150 141 -50 229 -52 3311 -52 l2805 0 41 27 c73 48 105 128 83 207 -13 48 -67 113 -108 130 -19 7 -848 12 -2842 14 -2863 5 -3096 8 -3183 42 -46 18 -122 19 -162 1z" />
                                        <path d="M6760 5379 c-41 -5 -120 -20 -176 -34 -439 -110 -806 -411 -1003 -825 -60 -127 -92 -222 -122 -360 -20 -90 -23 -135 -23 -310 0 -175 3 -220 23 -310 44 -205 128 -402 242 -572 84 -124 266 -305 388 -387 187 -124 416 -215 635 -253 157 -26 408 -22 560 11 347 74 631 237 848 486 88 101 189 242 218 307 22 48 26 138 8 156 -15 15 -92 16 -118 2 -10 -6 -41 -48 -69 -95 -103 -175 -262 -359 -400 -463 -152 -114 -379 -211 -583 -247 -96 -17 -347 -19 -363 -3 -9 9 -9 2728 0 2736 15 16 310 6 394 -12 336 -72 616 -244 817 -502 35 -45 71 -85 80 -88 34 -13 94 -6 114 14 52 52 7 146 -144 296 -215 214 -406 329 -681 409 -170 49 -440 67 -645 44z" />
                                        <path d="M2275 3850 l0 -1450 113 0 112 0 0 1450 0 1450 -112 0 -113 0 0 -1450z" />
                                        <path d="M2680 3850 l0 -1450 95 0 95 0 0 1450 0 1450 -95 0 -95 0 0 -1450z" />
                                        <path d="M3050 3850 l0 -1450 90 0 90 0 0 1450 0 1450 -90 0 -90 0 0 -1450z" />
                                        <path d="M3410 3850 l0 -1450 85 0 85 0 0 251 0 251 63 -6 c34 -4 155 -9 268 -12 242 -7 349 5 521 62 184 62 338 161 469 303 314 338 405 854 226 1277 -151 358 -429 595 -814 695 -184 47 -493 79 -770 79 l-133 0 0 -1450z m501 1270 c236 -24 398 -64 548 -136 124 -59 199 -113 294 -213 300 -314 376 -747 198 -1127 -168 -357 -510 -582 -916 -601 -119 -5 -286 6 -397 28 l-58 12 0 797 c0 438 3 899 7 1023 l6 227 108 0 c59 0 153 -5 210 -10z" />
                                        <path d="M2075 2204 c-47 -26 -66 -46 -86 -89 -22 -48 -24 -113 -5 -158 17 -43 76 -93 123 -106 25 -7 474 -11 1328 -13 709 -1 1391 -5 1515 -10 391 -14 3351 -21 3398 -8 83 22 142 97 142 180 0 75 -37 138 -101 170 -33 18 -114 19 -1605 24 -863 3 -1591 8 -1619 11 -27 3 -727 8 -1555 11 -1383 4 -1507 3 -1535 -12z" />
                                        <path d="M2782 1669 c-119 -21 -182 -89 -182 -195 0 -47 25 -108 56 -135 48 -42 85 -52 169 -45 80 6 161 1 495 -31 155 -15 402 -17 2173 -21 l1999 -3 54 26 c70 34 104 88 104 164 0 28 -6 66 -14 85 -17 41 -81 94 -121 101 -16 3 -921 7 -2010 8 -1391 3 -2010 7 -2080 15 -274 31 -565 45 -643 31z" />
                                        <path d="M4425 1100 l-1140 -5 -38 -24 c-103 -64 -124 -197 -45 -287 65 -74 -110 -68 1888 -60 l1795 6 53 26 c68 33 102 88 102 165 0 66 -22 112 -73 153 l-39 31 -681 0 c-375 0 -1195 -2 -1822 -5z" />
                                        <path d="M3948 550 c-96 -29 -154 -133 -128 -229 13 -48 67 -113 108 -130 20 -8 360 -11 1259 -9 l1231 3 39 31 c51 41 73 87 73 153 0 77 -33 131 -102 165 l-52 26 -1200 -1 c-661 0 -1213 -4 -1228 -9z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center p-0 m-0">
                                <div className="categorias-link">
                                    <Link to="/categorias">
                                        <h6 className="m-0 p-0 text-black col-12" href="./">Categorías</h6>
                                    </Link>
                                    <ul className="lista-categorias p-2 mx-2 w-25 ">
                                        {
                                            dataCategories.map((category, index) => {
                                                return (
                                                    <div key={index} className="row pb-2 m-0">
                                                        <div className="col-xl-12 d-flex justify-content-between categoria-item">
                                                            <li>{category.nombre}</li>
                                                            <svg
                                                                className="categoria-icon"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 384 512">
                                                                <path
                                                                    d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                                        </div>
                                                    </div>);
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-7 m-0 p-0">
                                {/* <form className="d-flex align-items-center justify-content-center h-100 search-form px-2">
                                    <input
                                        onChange={(e) => { console.log(e.target.value) }}
                                        id="buscador"
                                        className="w-100 search-input"
                                        type="search"
                                        placeholder="Busca lo que sea..." />
                                    <button className="search-button">
                                        <svg
                                            className="search-icon"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512">
                                            <path
                                                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                                        </svg>
                                    </button>
                                </form> */}
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center m-0 p-0">
                                <Link to={"/messages"}>
                                    <svg
                                        className="cart-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path
                                            d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
                                </Link>
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center m-0 p-0">
                                <small className="text-black fw-bold">{dataPerfil ? dataPerfil.user.firstNames + ' ' + dataPerfil.user.lastNames : 'waitin for data'}</small>
                            </div>
                            <div className="col-xl-1 d-flex justify-content-center align-items-center m-0 p-0 perfil-menu">
                                <div
                                    onClick={() => navigate(`/perfil/${localStorage.getItem('userId')}`)}
                                    className="perfil-image p-0 m-0"
                                    style={{ backgroundImage: `url(${dataPerfil ? (dataPerfil.user.imageProfile !== "" ? `data:image/jpeg;base64,${dataPerfil.user.imageProfile}` : perfilImageVacia) : perfilImageVacia}` }}></div>
                                <ul className="lista-perfil w-25 p-2 mx-2">
                                    <div className="row pb-2 m-0">
                                        <div
                                            onClick={() => navigate(`/perfil/${localStorage.getItem('userId')}`)}
                                            className="col-xl-12 d-flex justify-content-between perfil-item">
                                            <li>Perfil</li>
                                            <svg
                                                className="categoria-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512">
                                                <path
                                                    d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                        </div>
                                    </div>
                                    <div className="row pb-2 m-0">
                                        <div
                                            onClick={() => navigate("/mis-cursos")}
                                            className={`${localStorage.getItem('userType') === 'Alumno' ? "col-xl-12 d-flex justify-content-between perfil-item" : "d-none"}`}>
                                            <li>Mis cursos</li>
                                            <svg
                                                className="categoria-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512">
                                                <path
                                                    d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                        </div>
                                    </div>
                                    <div
                                        className={`${localStorage.getItem('userType') === 'Alumno' ? 'd-none' : 'row pb-2 m-0'}`}>
                                        <div
                                            onClick={() => navigate("/ventas")}
                                            className="col-xl-12 d-flex justify-content-between perfil-item">
                                            <li>Ventas</li>
                                            <svg
                                                className="categoria-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512">
                                                <path
                                                    d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                        </div>
                                    </div>
                                    <div className="row pb-2 m-0">
                                        <div onClick={() => {
                                            localStorage.removeItem('token');
                                            location.href = '/ingresar';

                                        }} className="col-xl-12 d-flex justify-content-between perfil-item">
                                            <li>Cerrar sesion</li>
                                            <svg
                                                className="categoria-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512">
                                                <path
                                                    d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
            }
            {
                !sesionActive ?
                    /*Mobile no sesion*/
                    <nav className="container-fluid header-mobile">
                        <div className="row m-0 py-2">
                            <div className="col-sm-6 col-6 m-0 p-0 d-flex justify-content-start">
                                <svg
                                    onClick={() => navigate("/")}
                                    className="header-logo"
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024.000000 768.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M6230 7654 c-165 -22 -309 -25 -1410 -30 -747 -3 -1083 -8 -1102 -15 -41 -17 -95 -82 -108 -130 -22 -80 14 -165 87 -210 l38 -24 940 -3 c909 -4 1274 3 1550 29 179 17 228 37 264 107 42 82 35 154 -21 218 -58 66 -100 76 -238 58z" />
                                        <path d="M3221 7119 c-125 -76 -130 -247 -9 -326 36 -24 52 -27 181 -34 235 -12 3470 -11 3504 2 70 26 113 95 113 180 0 75 -34 130 -102 163 l-53 25 -1804 3 c-1643 3 -1806 2 -1830 -13z" />
                                        <path d="M2687 6550 c-65 -20 -118 -82 -133 -157 -14 -71 51 -181 119 -202 18 -5 156 -12 307 -16 151 -3 316 -10 365 -14 50 -5 973 -9 2051 -10 1706 -1 1975 1 2070 14 127 18 168 36 209 94 26 37 30 52 30 106 0 54 -4 69 -30 106 -35 49 -89 81 -143 82 -20 1 -73 -4 -116 -11 -121 -19 -3819 -16 -4156 3 -272 16 -530 18 -573 5z" />
                                        <path d="M2095 6046 c-79 -34 -125 -131 -104 -219 17 -70 65 -116 159 -150 141 -50 229 -52 3311 -52 l2805 0 41 27 c73 48 105 128 83 207 -13 48 -67 113 -108 130 -19 7 -848 12 -2842 14 -2863 5 -3096 8 -3183 42 -46 18 -122 19 -162 1z" />
                                        <path d="M6760 5379 c-41 -5 -120 -20 -176 -34 -439 -110 -806 -411 -1003 -825 -60 -127 -92 -222 -122 -360 -20 -90 -23 -135 -23 -310 0 -175 3 -220 23 -310 44 -205 128 -402 242 -572 84 -124 266 -305 388 -387 187 -124 416 -215 635 -253 157 -26 408 -22 560 11 347 74 631 237 848 486 88 101 189 242 218 307 22 48 26 138 8 156 -15 15 -92 16 -118 2 -10 -6 -41 -48 -69 -95 -103 -175 -262 -359 -400 -463 -152 -114 -379 -211 -583 -247 -96 -17 -347 -19 -363 -3 -9 9 -9 2728 0 2736 15 16 310 6 394 -12 336 -72 616 -244 817 -502 35 -45 71 -85 80 -88 34 -13 94 -6 114 14 52 52 7 146 -144 296 -215 214 -406 329 -681 409 -170 49 -440 67 -645 44z" />
                                        <path d="M2275 3850 l0 -1450 113 0 112 0 0 1450 0 1450 -112 0 -113 0 0 -1450z" />
                                        <path d="M2680 3850 l0 -1450 95 0 95 0 0 1450 0 1450 -95 0 -95 0 0 -1450z" />
                                        <path d="M3050 3850 l0 -1450 90 0 90 0 0 1450 0 1450 -90 0 -90 0 0 -1450z" />
                                        <path d="M3410 3850 l0 -1450 85 0 85 0 0 251 0 251 63 -6 c34 -4 155 -9 268 -12 242 -7 349 5 521 62 184 62 338 161 469 303 314 338 405 854 226 1277 -151 358 -429 595 -814 695 -184 47 -493 79 -770 79 l-133 0 0 -1450z m501 1270 c236 -24 398 -64 548 -136 124 -59 199 -113 294 -213 300 -314 376 -747 198 -1127 -168 -357 -510 -582 -916 -601 -119 -5 -286 6 -397 28 l-58 12 0 797 c0 438 3 899 7 1023 l6 227 108 0 c59 0 153 -5 210 -10z" />
                                        <path d="M2075 2204 c-47 -26 -66 -46 -86 -89 -22 -48 -24 -113 -5 -158 17 -43 76 -93 123 -106 25 -7 474 -11 1328 -13 709 -1 1391 -5 1515 -10 391 -14 3351 -21 3398 -8 83 22 142 97 142 180 0 75 -37 138 -101 170 -33 18 -114 19 -1605 24 -863 3 -1591 8 -1619 11 -27 3 -727 8 -1555 11 -1383 4 -1507 3 -1535 -12z" />
                                        <path d="M2782 1669 c-119 -21 -182 -89 -182 -195 0 -47 25 -108 56 -135 48 -42 85 -52 169 -45 80 6 161 1 495 -31 155 -15 402 -17 2173 -21 l1999 -3 54 26 c70 34 104 88 104 164 0 28 -6 66 -14 85 -17 41 -81 94 -121 101 -16 3 -921 7 -2010 8 -1391 3 -2010 7 -2080 15 -274 31 -565 45 -643 31z" />
                                        <path d="M4425 1100 l-1140 -5 -38 -24 c-103 -64 -124 -197 -45 -287 65 -74 -110 -68 1888 -60 l1795 6 53 26 c68 33 102 88 102 165 0 66 -22 112 -73 153 l-39 31 -681 0 c-375 0 -1195 -2 -1822 -5z" />
                                        <path d="M3948 550 c-96 -29 -154 -133 -128 -229 13 -48 67 -113 108 -130 20 -8 360 -11 1259 -9 l1231 3 39 31 c51 41 73 87 73 153 0 77 -33 131 -102 165 l-52 26 -1200 -1 c-661 0 -1213 -4 -1228 -9z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="col-sm-6 col-6 m-0 p-0 d-flex justify-content-end">
                                <svg
                                    onClick={() => setMobileActive(mobileActive => !mobileActive)}
                                    className="bars-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            </div>
                        </div>
                        {
                            mobileActive ?
                                <div className="content-header-mobile pt-2">
                                    <div className="row m-0 pb-2">
                                        <div className="col-sm-6 col-6 d-flex justify-content-center align-items-center m-0 p-0">
                                            <div className="categorias-link">
                                                <Link to="/categorias">
                                                    <h6 className="m-0 p-0 text-black col-12" href="./">Categorías</h6>
                                                </Link>
                                                <ul className="lista-categorias p-2 mx-2 w-75 ">
                                                    {
                                                        dataCategories.map((category, index) => {

                                                            return (
                                                                <div key={index} className="row pb-2 m-0">
                                                                    <div className="col-xl-12 d-flex justify-content-between categoria-item">
                                                                        <li>{category.nombre}</li>
                                                                        <svg
                                                                            className="categoria-icon"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 384 512">
                                                                            <path
                                                                                d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })

                                                    }
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-6 d-flex justify-content-center align-items-center m-0 p-0">
                                            {/* <button className="cart-button m-0 p-0" type="button"> */}
                                            <Link to="/messages">
                                                <svg
                                                    className="cart-icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path
                                                        d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
                                            </Link>
                                            {/* </button> */}
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-12 m-0 pb-2 d-flex justify-content-center">
                                        {/* <form className="d-flex align-items-center justify-content-center h-100 w-100 search-form px-2">
                                            <input
                                                onChange={(e) => { console.log(e.target.value) }}
                                                id="buscador"
                                                className="w-100 search-input"
                                                type="search"
                                                placeholder="Busca lo que sea..." />
                                            <button className="search-button">
                                                <svg
                                                    className="search-icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path
                                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                                                </svg>
                                            </button>
                                        </form> */}
                                    </div>

                                    <div className="col-sm-12 col-12 d-flex justify-content-center align-items-center m-0 pb-2">
                                        <button onClick={() => navigate("/registrarse")} className="register-button w-100">
                                            Registrarse
                                        </button>
                                    </div>
                                    <div className="col-sm-12 col-12 d-flex justify-content-center align-items-center m-0 pb-2">
                                        <button onClick={() => navigate("ingresar")} className="login-button w-100">
                                            Ingresar
                                        </button>
                                    </div>
                                </div> : null
                        }
                    </nav>
                    :
                    <nav className="container-fluid header-mobile">
                        <div className="row m-0 py-2">
                            <div className="col-sm-6 col-6 m-0 p-0 d-flex justify-content-start">
                                <svg
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                    className="header-logo"
                                    version="1.0"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 1024.000000 768.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,768.000000) scale(0.100000,-0.100000)"
                                        fill="#000000" stroke="none">
                                        <path d="M6230 7654 c-165 -22 -309 -25 -1410 -30 -747 -3 -1083 -8 -1102 -15 -41 -17 -95 -82 -108 -130 -22 -80 14 -165 87 -210 l38 -24 940 -3 c909 -4 1274 3 1550 29 179 17 228 37 264 107 42 82 35 154 -21 218 -58 66 -100 76 -238 58z" />
                                        <path d="M3221 7119 c-125 -76 -130 -247 -9 -326 36 -24 52 -27 181 -34 235 -12 3470 -11 3504 2 70 26 113 95 113 180 0 75 -34 130 -102 163 l-53 25 -1804 3 c-1643 3 -1806 2 -1830 -13z" />
                                        <path d="M2687 6550 c-65 -20 -118 -82 -133 -157 -14 -71 51 -181 119 -202 18 -5 156 -12 307 -16 151 -3 316 -10 365 -14 50 -5 973 -9 2051 -10 1706 -1 1975 1 2070 14 127 18 168 36 209 94 26 37 30 52 30 106 0 54 -4 69 -30 106 -35 49 -89 81 -143 82 -20 1 -73 -4 -116 -11 -121 -19 -3819 -16 -4156 3 -272 16 -530 18 -573 5z" />
                                        <path d="M2095 6046 c-79 -34 -125 -131 -104 -219 17 -70 65 -116 159 -150 141 -50 229 -52 3311 -52 l2805 0 41 27 c73 48 105 128 83 207 -13 48 -67 113 -108 130 -19 7 -848 12 -2842 14 -2863 5 -3096 8 -3183 42 -46 18 -122 19 -162 1z" />
                                        <path d="M6760 5379 c-41 -5 -120 -20 -176 -34 -439 -110 -806 -411 -1003 -825 -60 -127 -92 -222 -122 -360 -20 -90 -23 -135 -23 -310 0 -175 3 -220 23 -310 44 -205 128 -402 242 -572 84 -124 266 -305 388 -387 187 -124 416 -215 635 -253 157 -26 408 -22 560 11 347 74 631 237 848 486 88 101 189 242 218 307 22 48 26 138 8 156 -15 15 -92 16 -118 2 -10 -6 -41 -48 -69 -95 -103 -175 -262 -359 -400 -463 -152 -114 -379 -211 -583 -247 -96 -17 -347 -19 -363 -3 -9 9 -9 2728 0 2736 15 16 310 6 394 -12 336 -72 616 -244 817 -502 35 -45 71 -85 80 -88 34 -13 94 -6 114 14 52 52 7 146 -144 296 -215 214 -406 329 -681 409 -170 49 -440 67 -645 44z" />
                                        <path d="M2275 3850 l0 -1450 113 0 112 0 0 1450 0 1450 -112 0 -113 0 0 -1450z" />
                                        <path d="M2680 3850 l0 -1450 95 0 95 0 0 1450 0 1450 -95 0 -95 0 0 -1450z" />
                                        <path d="M3050 3850 l0 -1450 90 0 90 0 0 1450 0 1450 -90 0 -90 0 0 -1450z" />
                                        <path d="M3410 3850 l0 -1450 85 0 85 0 0 251 0 251 63 -6 c34 -4 155 -9 268 -12 242 -7 349 5 521 62 184 62 338 161 469 303 314 338 405 854 226 1277 -151 358 -429 595 -814 695 -184 47 -493 79 -770 79 l-133 0 0 -1450z m501 1270 c236 -24 398 -64 548 -136 124 -59 199 -113 294 -213 300 -314 376 -747 198 -1127 -168 -357 -510 -582 -916 -601 -119 -5 -286 6 -397 28 l-58 12 0 797 c0 438 3 899 7 1023 l6 227 108 0 c59 0 153 -5 210 -10z" />
                                        <path d="M2075 2204 c-47 -26 -66 -46 -86 -89 -22 -48 -24 -113 -5 -158 17 -43 76 -93 123 -106 25 -7 474 -11 1328 -13 709 -1 1391 -5 1515 -10 391 -14 3351 -21 3398 -8 83 22 142 97 142 180 0 75 -37 138 -101 170 -33 18 -114 19 -1605 24 -863 3 -1591 8 -1619 11 -27 3 -727 8 -1555 11 -1383 4 -1507 3 -1535 -12z" />
                                        <path d="M2782 1669 c-119 -21 -182 -89 -182 -195 0 -47 25 -108 56 -135 48 -42 85 -52 169 -45 80 6 161 1 495 -31 155 -15 402 -17 2173 -21 l1999 -3 54 26 c70 34 104 88 104 164 0 28 -6 66 -14 85 -17 41 -81 94 -121 101 -16 3 -921 7 -2010 8 -1391 3 -2010 7 -2080 15 -274 31 -565 45 -643 31z" />
                                        <path d="M4425 1100 l-1140 -5 -38 -24 c-103 -64 -124 -197 -45 -287 65 -74 -110 -68 1888 -60 l1795 6 53 26 c68 33 102 88 102 165 0 66 -22 112 -73 153 l-39 31 -681 0 c-375 0 -1195 -2 -1822 -5z" />
                                        <path d="M3948 550 c-96 -29 -154 -133 -128 -229 13 -48 67 -113 108 -130 20 -8 360 -11 1259 -9 l1231 3 39 31 c51 41 73 87 73 153 0 77 -33 131 -102 165 l-52 26 -1200 -1 c-661 0 -1213 -4 -1228 -9z" />
                                    </g>
                                </svg>
                            </div>
                            <div className="col-sm-6 col-6 m-0 p-0 d-flex justify-content-end">
                                <svg
                                    onClick={() => setMobileActive(mobileActive => !mobileActive)}
                                    className="bars-icon"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512">
                                    <path
                                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                            </div>
                        </div>
                        {
                            mobileActive ?
                                <div className="content-header-mobile pt-2">
                                    <div className="col-sm-12 col-12 d-flex justify-content-start align-items-center m-0 pb-1 perfil-menu">
                                        <div
                                            className="perfil-image-mobile p-0 m-0"
                                            style={{ backgroundImage: `url(${dataPerfil ? (dataPerfil.user.imageProfile !== "" ? `data:image/jpeg;base64,${dataPerfil.user.imageProfile}` : perfilImageVacia) : perfilImageVacia})` }}></div>
                                        <ul className="lista-perfil-mobile w-25 p-2 mx-2">
                                            <div className="row pb-2 m-0">
                                                <div
                                                    onClick={() => navigate(`/perfil/${localStorage.getItem('userId')}`)}
                                                    className="col-xl-12 d-flex justify-content-between perfil-item">
                                                    <li>Perfil</li>
                                                    <svg
                                                        className="categoria-icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 384 512">
                                                        <path
                                                            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                                </div>
                                            </div>
                                            <div className="row pb-2 m-0">
                                                <div
                                                    onClick={() => navigate("/mis-cursos")}
                                                    className={`${localStorage.getItem('userType') === 'Alumno' ? "col-xl-12 d-flex justify-content-between perfil-item" : "d-none"}`}>
                                                    <li>Mis cursos</li>
                                                    <svg
                                                        className="categoria-icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 384 512">
                                                        <path
                                                            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                                </div>
                                            </div>
                                            <div className="row pb-2 m-0">
                                                <div onClick={() => {
                                                    localStorage.removeItem('token');
                                                    location.href = '/ingresar';
                                                }} className="col-xl-12 d-flex justify-content-between perfil-item">
                                                    <li>Cerrar sesion</li>
                                                    <svg
                                                        className="categoria-icon"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 384 512">
                                                        <path
                                                            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="col-sm-12 col-12 d-flex justify-content-start align-items-center m-0 pb-1">
                                        <Link to="/perfil/:userId" className="text-black">{dataPerfil ? dataPerfil.user.firstNames + ' ' + dataPerfil.user.lastNames : 'waitin for data'}</Link>
                                    </div>
                                    <div className="col-sm-12 col-12 d-flex justify-content-start align-items-center m-0 pb-1">
                                        <Link to="/mis-cursos" className="text-black">Mis cursos</Link>
                                    </div>
                                    <div className="col-sm-12 col-12 d-flex justify-content-start align-items-center m-0 pb-1">
                                        <Link
                                            to="/ventas"
                                            className={`${localStorage.getItem('userType') === 'Alumno' ? 'd-none' : 'text-black'}`} >
                                        </Link>
                                    </div>
                                    <div className="col-sm-12 col-12 d-flex justify-content-start align-items-center m-0 pb-1">
                                        <div className="categorias-link">
                                            <Link to="/categorias">
                                                <h6 className="m-0 p-0 text-black col-12" href="./">Categorías</h6>
                                            </Link>
                                            <ul className="lista-categorias p-2 mx-2 w-75 ">
                                                {
                                                    dataCategories.map((category, index) => {

                                                        return (
                                                            <div key={index} className="row pb-2 m-0">
                                                                <div className="col-xl-12 d-flex justify-content-between categoria-item">
                                                                    <li>{category.nombre}</li>
                                                                    <svg
                                                                        className="categoria-icon"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 384 512">
                                                                        <path
                                                                            d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" /></svg>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-12 d-flex justify-content-start align-items-center m-0 pb-2">

                                        <Link to="/messages">
                                            <svg
                                                className="cart-icon"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512">
                                                <path
                                                    d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" /></svg>
                                        </Link>
                                    </div>
                                    <div className="col-sm-12 col-12 m-0 pb-2 d-flex justify-content-center">
                                        {/* <form className="d-flex align-items-center justify-content-center h-100 w-100 search-form px-2">
                                            <input
                                                onChange={(e) => { console.log(e.target.value) }}
                                                id="buscador"
                                                className="w-100 search-input"
                                                type="search"
                                                placeholder="Busca lo que sea..." />
                                            <button className="search-button">
                                                <svg
                                                    className="search-icon"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512">
                                                    <path
                                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                                                </svg>
                                            </button>
                                        </form> */}
                                    </div>
                                </div> : null
                        }
                    </nav>
            }
        </>
    );
}


export default Header;