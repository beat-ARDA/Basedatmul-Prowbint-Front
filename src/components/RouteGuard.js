import { Navigate, Outlet } from "react-router-dom";

export const RouteGuard = ({ sesion }) => {
    function hasJWT() {
        let flag = false;
        localStorage.getItem("token") ? flag = true : flag = false;
        return flag
    }
    return !sesion ? (
        !hasJWT() ?
            <Navigate to="/ingresar" replace /> : <Outlet />) :
        (hasJWT() ?
            <Navigate to="/" replace /> : <Outlet />);
};