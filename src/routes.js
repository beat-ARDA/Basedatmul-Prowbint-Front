import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import ErrorPage from "./components/error/error";
import Registro from './components/registro/registro';
import Dashboard from './components/dashboard/dashboard';

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/ingresar' element={<Login />} />
            <Route path='/registrarse' element={<Registro />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}