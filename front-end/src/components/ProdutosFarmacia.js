import { DeleteFilled, EditOutlined } from "@ant-design/icons"
import { Flex, Modal, Typography } from "antd"
import axios from "axios"
import { useState } from "react"
const {Text, Title} = Typography

function ProdutosFarmacia({imagem, imgDescricao, nome, preco, quantidade, editar, id}){
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const showModal = () =>{
        setOpen(true)
    }

    const handleCancel = () =>{
        setOpen(false)
    }

    const handleOk = async() =>{
        setLoading(true)
        await axios.delete(`http://localhost:3000/produtos/${id}`).then(console.log(`${id} deletado`))
        localStorage.setItem("sucesso" , 'Produto deletado com sucesso')
        setTimeout(()=>{
            setOpen(false)
            setLoading(false)
            window.location.reload()
        }, 2000)
    }

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
                <DeleteFilled onClick={showModal} style={{color: "#fff", fontSize: "18px"}}/>
            </div>
            <Modal open={open} title={`Deseja deletar este produto?`} onCancel={handleCancel} onOk={handleOk} confirmLoading={loading}>
                {nome}
            </Modal>
        </Flex>
    )
}

export default ProdutosFarmacia