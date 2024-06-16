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

    const botao = {backgroundColor: "#ffffff", color: "#B50100", width: "150px", height: "40px", fontWeight: "bold"}

    return (
        <div style={{height:"100vh" ,display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", background: "linear-gradient(#ffffff 40%, #B50100 75%)"}}>
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logotipo" width={250}/>
            <div style={{display: "flex", flexDirection: "column", gap: 25, alignItems: "center", width: "100%"}}>
                <Button onClick={handleClickFarmacia} style={botao}>Farmacia</Button>
                <Button onClick={handleClickCliente} style={botao}>Cliente</Button>
            </div>
        </div>
    )
}

export default Inicio