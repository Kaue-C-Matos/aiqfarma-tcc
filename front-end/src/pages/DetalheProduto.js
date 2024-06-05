import {Button, Image,Typography } from 'antd';
import Cabecalho from "../components/Cabecalho";
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const {Title, Text} = Typography;

function DetalheProduto(){

  const produtoEscolhido = useParams().produtoEscolhido
  const [produto, setProduto] = useState({})
  const [imagem, setImagem] = useState({})
  const [farmacia, setFarmacia] = useState({})

  const fetchData = useCallback(async () => {
    try {
      const produtoResponse = await axios.get(`http://localhost:3000/produtos/id/${produtoEscolhido}`)
      const produtoData = produtoResponse.data
      setProduto(produtoData)
      
      const imagemResponse = await axios.get(`http://localhost:3000/imagem/id/${produtoData.id_imagem}`)
      setImagem(imagemResponse.data)

      const farmaciaResponse= await axios.get(`http://localhost:3000/farmacia/${produtoData.id_farmacia}`)
      setFarmacia(farmaciaResponse.data)
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
  }, [produtoEscolhido]);

  useEffect(()=>{
    fetchData()
}, [fetchData])

  return(
    <div>
      <Cabecalho rota={"/catalogo"}/>
      <main>
        <div style={{width:"100%",backgroundColor:"#D9D9D9" ,display:"flex", justifyContent:"center", borderBottom:"5px solid "}}>
          <Image style={{width: 250}} src={imagem.imagem}/>
        </div>

        <Title level={3} style={{margin:"5px"}}>
          {produto.nome}  
        </Title>

        <Title style={{ color:"#B50000",margin: "20px 0 15px 15px",fontSize:"30px"}}>
          R${produto.preco}
        </Title>

        <Title style={{marginLeft:"10px",marginTop:"15px", fontSize:"18px"}}>
          Fornecedor: <b style={{color: "#B50000"}}>{farmacia.nome}</b>
        </Title>

        <div style={{margin: "0 18px", textAlign: "left"}}>
          <Title style={{marginTop:"30px", fontSize:"25px", fontWeight: "bold"}}>Detalhes:</Title>
          <Text style={{fontSize: 20}}>{produto.descricao}</Text>
        </div>
    
        <div style={{ display:"flex", justifyContent:"center"}}> 
          <Button type="primary"
            style={{borderRadius:"15px",
            height:"45px", 
            width:155,
            fontSize:25,
            margin:20,
            boxShadow:"2px 5px 10px black"}}
          >
            Comprar!
          </Button>
        </div>
      </main>
    </div>   
  )
}


export default DetalheProduto