import { Button, Divider, Typography } from "antd";
import { ArrowLeftOutlined, PlusSquareFilled } from '@ant-design/icons'
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

    const btnCadastrar = {color: "#B60000", height: "auto" ,width: "90%", fontSize: "25px", borderWidth: "5px",borderColor: "#B60000" , padding: "10px",
    boxSizing: "border-box", marginBottom: "40px"}

    return(
        <Divider>
                <Divider orientation="left">
                    <ArrowLeftOutlined onClick={()=>navigate("/")} style={{fontSize: "25px"}}/>
                </Divider>
            <Title type="primary" style={{color: "#B60000"}}>Produtos Cadastrados</Title>
            <Button type="dashed" icon={<PlusSquareFilled/>} iconPosition={"position"} 
            style={btnCadastrar}>
                Cadastrar novo produto
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
        </Divider>
    )
}

export default ProdutosCadastrados