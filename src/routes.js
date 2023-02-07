import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import ErrorPage from "./components/error/error";

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<div>Pagina principal</div>} />
            <Route path='/Login' element={<Login />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
}