import { Navigate, Outlet } from "react-router-dom";

export const RouteGuard = () => {
    function hasJWT() {
        let flag = false;
        localStorage.getItem("token") ? flag = true : flag = false
        return flag
    }

    return !hasJWT() ?
        <Navigate to="/ingresar" replace /> : <Outlet />;
};