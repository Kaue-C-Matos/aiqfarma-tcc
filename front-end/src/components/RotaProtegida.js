import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AutorizaçãoContext";

function RotaProtegida({children}){
    const {estaAutorizado} = useAuth()

    if(!estaAutorizado){
        return <Navigate to="/catalogo" replace/>
    }

    return children
}

export default RotaProtegida