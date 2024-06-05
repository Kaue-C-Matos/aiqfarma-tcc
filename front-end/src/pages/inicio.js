import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Inicio(){
    const navigate = useNavigate()

    function handleClickFarmacia(){
        navigate("/produtos")
    }

    function handleClickCliente(){
        navigate("/catalogo")
    }

    const botao = {backgroundColor: "#B50100", color: "#fff", width: "100px"}

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logotipo" width={250}/>
            <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                <Button onClick={handleClickFarmacia} style={botao}>Farmacia</Button>
                <Button onClick={handleClickCliente} style={botao}>Cliente</Button>
            </div>
        </div>
    )
}

export default Inicio