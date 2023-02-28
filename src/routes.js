import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import ErrorPage from "./components/error/error";
import Registro from './components/registro/registro';
import Dashboard from './components/dashboard/dashboard';
import Perfil from './components/perfil/perfil';
import Curso from './components/curso/curso';
import Layout from './Layout';
import Messages from './components/messages/messages';
import Categorias from './components/categorias/categorias';
import Kardex from './components/kardex/kardex.jsx';
import Ventas from './components/ventas/ventas';
import CrearCurso from './components/crear-curso/crear-curso';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Dashboard />} />
                <Route path='ingresar' element={<Login />} />
                <Route path='registrarse' element={<Registro />} />
                <Route path='perfil' element={<Perfil />} />
                <Route path='curso' element={<Curso />} />
                <Route path="messages" element={<Messages />} />
                <Route path="categorias" element={<Categorias />} />
                <Route path="mis-cursos" element={<Kardex />} />
                <Route path="ventas" element={<Ventas />} />
                <Route path="crear-curso" element={<CrearCurso />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}