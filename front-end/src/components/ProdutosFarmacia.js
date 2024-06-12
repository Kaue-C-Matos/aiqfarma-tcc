import { DeleteFilled, EditOutlined } from "@ant-design/icons"
import { Flex, Typography } from "antd"
const {Text, Title} = Typography

function ProdutosFarmacia({imagem, imgDescricao, nome, preco, quantidade, editar}){
    const card = {padding: "0", background: "#B60000", position: "relative", border: "3px solid", maxWidth: "100%"}

    return(
        <Flex style={card}>
            <img src={imagem} alt={imgDescricao} width="100px" style={{backgroundColor: "#fff"}}/>
            <div style={{marginLeft: "10px", textAlign: "left"}}>
                <Title style={{color: "#fff", fontSize: "18px", whiteSpace: "pre-wrap"}}>{nome}</Title>
                <Text style={{color: "#fff", fontSize: "16px"}}>R$ {preco}</Text><br/>
                <Text style={{color: "#fff", fontSize: "16px"}}>unidades: {quantidade}</Text>
            </div>
            <div style={{position: "absolute", bottom: "10px", right: "10px", display: "flex", gap: 10}}>
                <EditOutlined onClick={editar} style={{color: "#fff", fontSize: "18px"}}/>
                <DeleteFilled style={{color: "#fff", fontSize: "18px"}}/>
            </div>
        </Flex>
    )
}

export default ProdutosFarmacia