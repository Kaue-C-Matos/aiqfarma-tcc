import { Carousel, Typography } from "antd"
import Cabecalho from "../components/Cabecalho"
import CardProduto from "../components/CardProduto"
import { useCallback, useEffect, useState } from "react"
import axios from "axios"
const {Title} = Typography

function Catalogo(){    
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
    return(
        <div>
            <Cabecalho/>
            <Title level={3} style={{backgroundColor: "red", height: 50, margin: "20px 0 0 0", color: "white"}}>Medicamentos</Title>
            <Carousel slidesToShow={2.02} style={{backgroundColor: "red", padding: "20px 5px"}} >
                {produtos.map((produtos)=>{
                    const imagem = imagens.find((imagem)=> imagem.idimagem === produtos.id_imagem)
                    return(<CardProduto 
                        imagem={imagem.imagem} 
                        nome={produtos.nome} 
                        preco={produtos.preco}
                        imgDescricao={imagem.descricao}
                        key={produtos.id_produto}
                    />)
                })}
            </Carousel>

        </div>
    )
}

export default Catalogo