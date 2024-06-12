
function CardProduto({clique, imagem, imgDescricao, nome, preco}) {
    return(
        <div style={{width: 109, background: "white", textAlign: "center", borderRadius: 15, height: 225, position: "relative", display: "flex", flexDirection: "column", alignItems: "center"}} 
        onClick={clique}>
            <img src={imagem} alt={imgDescricao}
            style={{width: "100%", height: "45%", borderRadius: 15}} />
            <h4 style={{margin: 1}}>{nome}</h4>
            <p style={{position: "absolute", bottom: 1, color: "#B50000"}}>R${preco}</p>
        </div>
    )
}

export default CardProduto;