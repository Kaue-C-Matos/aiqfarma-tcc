
function CardProduto(props) {
    return(
        <div style={{width: 109, background: "white", textAlign: "center", borderRadius: 15}} onClick={props.clique}>
            <img src={props.imagem} alt={props.imgDescricao}
            style={{width: "100%", borderRadius: 15}} />
            <h4 style={{margin: 1}}>{props.nome}</h4>
            <p>R${props.preco}</p>
        </div>
    )
}

export default CardProduto;