import { DeleteFilled } from "@ant-design/icons"
import { Flex, Typography } from "antd"
const {Text, Title} = Typography

function ProdutosFarmacia(props){
    const card = {padding: "0", background: "#B60000", position: "relative", border: "3px solid"}

    return(
        <Flex style={card}>
            <img src={props.imagem} alt={props.imgDescricao} width="175px" style={{backgroundColor: "#fff"}}/>
            <div style={{marginLeft: "10px", textAlign: "left"}}>
                <Title style={{color: "#fff", fontSize: "25px"}}>{props.nome}</Title>
                <Text style={{color: "#fff", fontSize: "20px"}}>R$ {props.preco}</Text>
            </div>
            <div style={{position: "absolute", bottom: "10px", right: "10px"}}>
                <DeleteFilled style={{color: "#fff", fontSize: "20px"}}/>
            </div>
        </Flex>
    )
}

export default ProdutosFarmacia