import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftOutlined, BorderOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { Select, Typography } from 'antd';
import PedidosFarmacia from '../../components/PedidosFarmacia/PedidosFarmacia'

const { Title, Text } = Typography;

function PedidosRecebidos() {
    const navigate = useNavigate();

    const [pedidos, setPedidos] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [imagens, setImagens] = useState([]);
    const [filtro, setFiltro] = useState("");

    const fetchData = useCallback(async () => {
        try {
            const [pedidosResponse, produtosResponse, imagensResponse] = await Promise.all([
                axios.get('http://localhost:3000/pedidos/farmacia/1'),
                axios.get('http://localhost:3000/produtos'),
                axios.get('http://localhost:3000/imagem'),
            ]);

            setPedidos(pedidosResponse.data);
            setProdutos(produtosResponse.data);
            setImagens(imagensResponse.data);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }, []);

    const alterarStatus = useCallback(async (id, status) => {
        try {
            const novoStatus = !status;
            await axios.patch(`http://localhost:3000/pedidos/${id}`, {
                status: novoStatus
            });
            setPedidos((prevPedidos) => 
                prevPedidos.map((pedido) => 
                    pedido.id_pedido === id ? { ...pedido, status: novoStatus } : pedido
                )
            );
        } catch (error) {
            console.error('Erro ao alterar o status:', error);
        }
    }, []);
    
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const pedidosFiltrados = pedidos.filter(pedido=>{
        if (filtro === "Concluídos"){
            return pedido.status === true
        } else if(filtro === "Não Concluídos"){
            return pedido.status === false;
        }
        return true
    })

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "90%", display: "flex", justifyContent: "flex-start", margin: 10 }}>
                <ArrowLeftOutlined onClick={() => navigate("/produtos")} style={{ fontSize: "30px" }} />
            </div>
            <Title type="primary" style={{ color: "#B60000", textAlign: "center" }}>Pedidos Recebidos</Title>
            <div style={{ padding: "0 5px"}}>
                <Text>Filtrar pedidos</Text>
                <Select style={{width:"200px", border: "2px solid", borderRadius: 8, marginBottom: 15}} value={filtro} onChange={setFiltro}>
                    <Select.Option value=""></Select.Option>
                    <Select.Option value="Concluídos">Concluídos</Select.Option>
                    <Select.Option value="Não Concluídos">Não Concluídos</Select.Option>
                </Select>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {pedidosFiltrados
                .map((pedido) => {
                    const produto = produtos.find(produto => produto.id_produto === pedido.id_produto);
                    const imagem = imagens.find(imagem => imagem.idimagem === produto.id_imagem);

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
                            endereco={pedido.endereco_cliente}
                            retirada={pedido.retirada}
                            icone={
                                pedido.status 
                                ? <CheckSquareOutlined style={{color: "#fff", fontSize: 25}}/>
                                : <BorderOutlined style={{color: "#fff", fontSize: 25}}/>
                            }
                            status={()=> alterarStatus(pedido.id_pedido, pedido.status)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default PedidosRecebidos;
