import { DeleteFilled } from "@ant-design/icons"
import { Flex, Typography } from "antd"
const {Text, Title} = Typography

function ProdutosFarmacia(props){
    const card = {padding: "0", background: "#B60000", position: "relative", border: "3px solid", maxWidth: "100%"}

    return(
        <Flex style={card}>
            <img src={props.imagem} alt={props.imgDescricao} width="100px" style={{backgroundColor: "#fff"}}/>
            <div style={{marginLeft: "10px", textAlign: "left"}}>
                <Title style={{color: "#fff", fontSize: "20px", whiteSpace: "pre-wrap"}}>{props.nome}</Title>
                <Text style={{color: "#fff", fontSize: "18px"}}>R$ {props.preco}</Text>
            </div>
            <div style={{position: "absolute", bottom: "10px", right: "10px"}}>
                <DeleteFilled style={{color: "#fff", fontSize: "20px"}}/>
            </div>
        </Flex>
    )
}

export default ProdutosFarmacia