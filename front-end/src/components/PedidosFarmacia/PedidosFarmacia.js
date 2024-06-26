import style from './PedidosFarmacia.module.css'
import { Typography } from "antd";
const {Title, Text} = Typography

function PedidosFarmacia({imagem, descricaoImg, produto, unidades, preco, mtdPagamento, cliente, endereco, retirada, icone, status}){
    
    const texto = {color: "#fff", fontSize: "18px"}

    return(
        <div className={style.card}>
            <img src={imagem} alt={descricaoImg} height="75px" style={{backgroundColor: "#fff", borderRadius: "15px 0 0 0"}}/>
            <div className={style.concluido}>
                <Text style={{color: "#fff"}}>Marcar como concluído</Text>
                <div onClick={status}>
                    {icone}
                </div>
            </div>
            <div>
                <Title style={{color: "#fff", fontSize: "20px", whiteSpace: "pre-wrap"}}>{produto}</Title>
                <Text style={texto}>{unidades} unidades</Text><br/>
                <Text style={texto}>total: R$ {preco}</Text><br/>
                <Text style={texto}>Pagamento: {mtdPagamento}</Text><br/>
                <Text style={texto}>{retirada}</Text><br/><br/>
                
                <Text style={texto}>{cliente}</Text><br/>
                <Text style={texto}>{endereco}</Text>
            </div>
        </div>
    )
}

export default PedidosFarmacia;