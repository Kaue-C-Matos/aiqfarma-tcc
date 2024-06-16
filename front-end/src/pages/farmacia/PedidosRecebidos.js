import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import PedidosFarmacia from '../../components/PedidosFarmacia/PedidosFarmacia'

const { Title } = Typography;

function PedidosRecebidos() {
    const navigate = useNavigate();

    const [pedidos, setPedidos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [imagens, setImagens] = useState([]);
    const [enderecos, setEnderecos] = useState([]);

    const fetchData = useCallback(async () => {
        try {
            const [pedidosResponse, produtosResponse, imagensResponse, enderecoResponse] = await Promise.all([
                axios.get('http://localhost:3000/pedidos/farmacia/1'),
                axios.get('http://localhost:3000/produtos'),
                axios.get('http://localhost:3000/imagem'),
                axios.get('http://localhost:3000/endereco')
            ]);

            setPedidos(pedidosResponse.data);
            setProdutos(produtosResponse.data);
            setImagens(imagensResponse.data);
            setEnderecos(enderecoResponse.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "90%", display: "flex", justifyContent: "flex-start", margin: 10 }}>
                <ArrowLeftOutlined onClick={() => navigate("/produtos")} style={{ fontSize: "30px" }} />
            </div>
            <Title type="primary" style={{ color: "#B60000", textAlign: "center" }}>Pedidos Recebidos</Title>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {pedidos.map((pedido) => {
                    const produto = produtos.find(produto => produto.id_produto === pedido.id_produto);
                    const imagem = imagens.find(imagem => imagem.idimagem === produto.id_imagem);
                    const endereco = enderecos.find(endereco => endereco.id_endereco === pedido.id_endereco_cliente);

                    return (
                        <PedidosFarmacia
                            key={pedido.id_pedido}
                            imagem={imagem.imagem}
                            descricaoImg={imagem.descricao}
                            produto={produto.nome}
                            unidades={pedido.quantidade}
                            preco={pedido.valor_total}
                            mtdPagamento={pedido.met_pagamento}
                            cliente={pedido.cliente}
                            bairro={endereco.bairro}
                            rua={endereco.rua}
                            numero={endereco.numero}
                            retirada={pedido.retirada}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PedidosRecebidos;
