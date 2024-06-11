
function CardProduto(props) {
    return(
        <div style={{width: 109, background: "white", textAlign: "center", borderRadius: 15, height: 225, position: "relative", display: "flex", flexDirection: "column", alignItems: "center"}} 
        onClick={props.clique}>
            <img src={props.imagem} alt={props.imgDescricao}
            style={{width: "100%", height: "45%", borderRadius: 15}} />
            <h4 style={{margin: 1}}>{props.nome}</h4>
            <p style={{position: "absolute", bottom: 1, color: "#B50000"}}>R${props.preco}</p>
        </div>
    )
}

export default CardProduto;