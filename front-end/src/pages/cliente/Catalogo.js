import { Carousel, Typography } from "antd"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Cabecalho from "../../components/Cabecalho"
import CardProduto from "../../components/CardProduto"
const {Title} = Typography

function Catalogo(){
    const navigate = useNavigate()

    const [produtos, setProdutos] = useState([])
    const [imagens, setImagens] = useState([])
    
    const fetchData = useCallback(async () => {
        try {
            const [produtosResponse, imagensResponse] = await Promise.all([
                axios.get('http://localhost:3000/produtos'),
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

    const produtosFiltrados = produtos.filter(produto => produto.quantidade !== 0 && produto.status === true)

    const titulo = {backgroundColor: '#EE0200', height: 50, margin: "20px 0 0 0", color: "white"}
    const carrossel = {backgroundColor: '#EE0200', padding: "20px 5px"}

    return(
        <div>
            <Cabecalho rota={"/"}/>
            <Title level={3} style={titulo}>Medicamentos</Title>
            <Carousel slidesToShow={2.02} style={carrossel} >
                {produtosFiltrados
                .filter(produtos => produtos.categoria === "medicamento")
                .map((produtos)=>{
                    const imagem = imagens.find((imagem)=> imagem.idimagem === produtos.id_imagem)
                    return(<CardProduto
                        imagem={imagem.imagem} 
                        nome={produtos.nome} 
                        preco={produtos.preco}
                        imgDescricao={imagem.descricao}
                        key={produtos.id_produto}
                        clique={() =>navigate(`/detalhes/${produtos.id_produto}`)}
                    />)
                })}
            </Carousel>

            <Title level={3} style={titulo}>Higiene</Title>
            <Carousel slidesToShow={2.02} style={carrossel} >
                {produtos
                .filter(produtos => produtos.categoria === "higiene")
                .map((produtos)=>{
                    const imagem = imagens.find((imagem)=> imagem.idimagem === produtos.id_imagem)
                    return(<CardProduto 
                        imagem={imagem.imagem} 
                        nome={produtos.nome} 
                        preco={produtos.preco}
                        imgDescricao={imagem.descricao}
                        key={produtos.id_produto}
                        clique={() =>navigate(`/detalhes/${produtos.id_produto}`)}
                    />)
                })}
            </Carousel>

        </div>
    )
}

export default Catalogo