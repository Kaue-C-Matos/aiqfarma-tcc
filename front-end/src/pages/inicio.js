import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";

function Inicio(){
    const navigate = useNavigate()

    function handleClickFarmacia(){
        navigate("/produtos")
    }

    function handleClickCliente(){
        navigate("/catalogo")
    }

    return (
        <Divider>
            <Button onClick={handleClickFarmacia}>Farmacia</Button>
            <Button onClick={handleClickCliente}>Cliente</Button>
        </Divider>
    )
}

export default Inicio