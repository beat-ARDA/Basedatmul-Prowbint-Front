import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import ErrorPage from "./components/error/error";
import Registro from './components/registro/registro';
import Dashboard from './components/dashboard/dashboard';
import Perfil from './components/perfil/perfil';
import Curso from './components/curso/curso';
import Layout from './Layout';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Dashboard />} />
                <Route path='ingresar' element={<Login />} />
                <Route path='registrarse' element={<Registro />} />
                <Route path='perfil' element={<Perfil />} />
                <Route path='curso' element={<Curso />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}