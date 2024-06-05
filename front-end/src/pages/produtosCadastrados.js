import { Button, Typography } from "antd";
import { ArrowLeftOutlined, PlusSquareFilled, SnippetsOutlined } from '@ant-design/icons'
import ProdutosFarmacia from "../components/ProdutosFarmacia";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const {Title} = Typography

function ProdutosCadastrados() {
    const navigate = useNavigate()
    
    const [produtos, setProdutos] = useState([])
    const [imagens, setImagens] = useState([])
    
    const fetchData = useCallback(async () => {
        try {
            const [produtosResponse, imagensResponse] = await Promise.all([
                axios.get('http://localhost:3000/produtos/farmacia/1'),
                axios.get('http://localhost:3000/imagem')
            ]);
            setProdutos(produtosResponse.data);
            setImagens(imagensResponse.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }, []);
    
    useEffect(()=>{
        fetchData()
    }, [fetchData])

    const btnCadastrar = {color: "#B60000", height: "100px" ,width: "90%", fontSize: "25px", borderWidth: "5px",borderColor: "#B60000" , padding: "10px",
    boxSizing: "border-box", marginBottom: "40px"}

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{display: "flex", justifyContent: "space-between", margin: 10, width: "90%"}}>
                <ArrowLeftOutlined onClick={()=>navigate("/")} style={{fontSize: "30px"}}/>
                <SnippetsOutlined onClick={()=>navigate("/pedidos")} style={{fontSize: "30px"}}/>
            </div>
            <Title type="primary" style={{color: "#B60000", textAlign: "center"}}>Produtos Cadastrados</Title>
            <Button type="dashed" icon={<PlusSquareFilled/>} iconPosition={"position"} 
            style={btnCadastrar}>
                Cadastrar novo<br/>produto
            </Button>
            <div>
                {produtos.map((produtos)=>{
                    const imagem = imagens.find((imagem)=> imagem.idimagem === produtos.id_imagem)
                    return(<ProdutosFarmacia 
                        imagem={imagem.imagem} 
                        nome={produtos.nome} 
                        preco={produtos.preco}
                        imgDescricao={imagem.descricao}
                        key={produtos.id_produto}
                    />)
                })}
            </div>
        </div>
    )
}

export default ProdutosCadastrados