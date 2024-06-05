import style from './PedidosFarmacia.module.css'
import { Typography } from "antd";
const {Title, Text} = Typography

function PedidosFarmacia({imagem, descricaoImg, produto, unidades, preco, mtdPagamento, cliente, bairro, rua, numero}){
    
    const texto = {color: "#fff", fontSize: "18px"}

    return(
        <div className={style.card}>
            <img src={imagem} alt={descricaoImg} height="75px" style={{backgroundColor: "#fff", borderRadius: "15px 0 0 0"}}/>
            <div>
                <Title style={{color: "#fff", fontSize: "20px", whiteSpace: "pre-wrap"}}>{produto}</Title>
                <Text style={texto}>{unidades} unidades</Text><br/>
                <Text style={texto}>total: R$ {preco}</Text><br/>
                <Text style={texto}>Pagamento: {mtdPagamento}</Text><br/><br/>
                
                <Text style={texto}>{cliente}</Text><br/>
                <Text style={texto}>{bairro}, {rua}, {numero}</Text>
            </div>
        </div>
    )
}

export default PedidosFarmacia;