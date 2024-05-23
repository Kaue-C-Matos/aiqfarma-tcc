import { Button, Divider } from "antd";
import { useNavigate } from "react-router-dom";

function Inicio(){
    const navigate = useNavigate()

    function handleClick(){
        navigate("/produtos")
    }

    return (
    <Divider>
        <Button onClick={handleClick}>teste</Button>
    </Divider>)
}

export default Inicio