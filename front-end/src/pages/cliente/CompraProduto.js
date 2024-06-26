import { ArrowLeftOutlined, MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons"
import { Image, Form, Select, Button, Checkbox, Input } from "antd"
import Title from "antd/es/typography/Title"
import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../../context/AutorizaçãoContext"

function CompraProduto() {

    const [componentDisabled, setComponentDisabled] = useState(true);
    const [colorInput, setColorInput] = useState("#D9D9D9")

    const navigate = useNavigate()
    const { setEstaAutorizado } = useAuth()

    const produtoEscolhido = useParams().id

    let [quantidadeTotal, setQuantidadeTotal] = useState(1)
    const [botaoDiminuir, setBotaoDiminuir] = useState("#610E00")
    const [botaoAumentar, setBoatoAumentar] = useState("#610E00")

    const [produto, setProduto] = useState({})
    const [imagem, setImagem] = useState({})

    const fetchData = useCallback(async () => {
        try {
            const produtoResponse = await axios.get(`http://localhost:3000/produtos/id/${produtoEscolhido}`)
            const produtoData = produtoResponse.data
            setProduto(produtoData)

            const imagemResponse = await axios.get(`http://localhost:3000/imagem/id/${produtoData.id_imagem}`)
            setImagem(imagemResponse.data)
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }, [produtoEscolhido]);

    async function comprar(valores) {
        await axios.post('http://localhost:3000/pedidos', {
            valor_total: (quantidadeTotal * produto.preco),
            cliente: "Julia Kawani",
            quantidade: quantidadeTotal,
            endereco_cliente: valores.endereco || "Centro, rua do Havaí, 122",
            id_produto: produtoEscolhido,
            id_farmacia: produto.id_farmacia,
            met_pagamento: valores.pagamento,
            retirada: valores.entrega
        })

        await axios.patch(`http://localhost:3000/produtos/quantidade/${produtoEscolhido}`, {
            quantidade: produto.quantidade - quantidadeTotal
        })

        setEstaAutorizado(true)
        navigate("/confirmacao")
    }

    function diminuir() {
        if (quantidadeTotal > 1) {
            setQuantidadeTotal(quantidadeTotal - 1)
        } else {
            setQuantidadeTotal(quantidadeTotal)
        }
    }

    function aumentar() {
        if (quantidadeTotal < produto.quantidade) {
            setQuantidadeTotal(quantidadeTotal + 1)
        } else {
            setQuantidadeTotal(quantidadeTotal)
        }
    }

    useEffect(() => {
        if (quantidadeTotal === 1) {
            setBotaoDiminuir("#9d9d9d")
        } else if (quantidadeTotal === produto.quantidade) {
            setBoatoAumentar("#9d9d9d")
        } else {
            setBotaoDiminuir("#610E00")
            setBoatoAumentar("#610E00")
        }

    }, [quantidadeTotal, produto.quantidade])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    useEffect(() => {
        if (componentDisabled) {
            setColorInput("#D9D9D9")
        } else {
            setColorInput("#000")
        }
    }, [componentDisabled])

    return (
        <div>
            <ArrowLeftOutlined onClick={() => navigate(-1)} style={{ fontSize: "20px", padding: "5px 8px", margin: "10px 10px", color: "#FFFF", backgroundColor: "#610E00", borderRadius: "5px" }} />

            <Title level={2} style={{ margin: "17px", display: "flex", justifyContent: "center", textAlign: "center", color: "#610E00" }}>
                Finalize sua Compra!!!
            </Title>

            <Title level={4} style={{ margin: 10, marginTop: 30, color: "#610E00" }}>
                Produto
            </Title>

            <div style={{ display: "flex", backgroundColor: "#D9D9D9", width: 270, padding: "10px 0px", gap: 20, margin: 4, borderRadius: 5, alignItems: "center", }}>
                <Image width={220} style={{ margin: "5px" }} src={imagem.imagem} />
                <b>{produto.nome}</b>
            </div>

            <div style={{ display: "flex" }}>
                <Title level={4} style={{ margin: 10, marginTop: 25, color: "#610E00" }}>
                    Quantidade:
                </Title>

                <div style={{ display: "flex", marginTop: 12, gap: 8 }}>
                    <MinusCircleFilled style={{ fontSize: 25, color: botaoDiminuir }} onClick={() => diminuir()} />
                    <p>{quantidadeTotal}</p>
                    <PlusCircleFilled style={{ fontSize: 25, color: botaoAumentar }} onClick={() => aumentar()} />
                </div>

            </div>

            <Form onFinish={comprar} style={{ margin: "0 10px" }}>
                <Form.Item
                    name="entrega" 
                    label={<label style={{ fontSize: 22, color: "#610E00" }}><b>Retirada do Produto</b></label>}
                    rules={[{ required: true, message: 'Por favor, selecione uma opção de retirada.' }]}
                >    
                    <Select placeholder="Selecione uma opção" style={{ width: "180px", border: "2px solid", borderRadius: 8 }}>
                        <Select.Option value="Entrega a domicilio">Entrega a domicilio</Select.Option>
                        <Select.Option value="Retirada no local">Retirada no local</Select.Option>
                    </Select>
                </Form.Item>

                <Checkbox style={{ fontSize: 18, color: "#610E00" }}
                    checked={componentDisabled}
                    onChange={(e) => setComponentDisabled(e.target.checked)}>
                    <b>Utilizar endereço padrão</b>
                </Checkbox>

                <Form.Item 
                    name="endereco"
                    style={{ borderColor: ` ${colorInput}`, borderRadius: 8, marginTop: 10 }}
                    rules={[{ required: !componentDisabled, message: 'Por favor, insira um endereço.' }]}
                >
                    <Input disabled={componentDisabled} placeholder="Digite o endereço desejado" />
                </Form.Item>

                <Form.Item 
                    name="pagamento" 
                    label={<label style={{ fontSize: 22, color: "#610E00" }}><b>Forma de Pagamento</b></label>}
                    rules={[{ required: true, message: 'Por favor, selecione uma forma de pagamento.' }]}
                >
                    <Select placeholder="Selecione uma opção" style={{ width: "180px", border: "2px solid", borderRadius: 8 }}>
                        <Select.Option value="Pix">Pix</Select.Option>
                        <Select.Option value="Cartao de crédito">Cartão de Crédito</Select.Option>
                        <Select.Option value="Dinheiro">Dinheiro</Select.Option>
                    </Select>
                </Form.Item>

                <Title level={4} style={{ backgroundColor: "#610E00", width: 260, borderRadius: 15, height: 45, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    Valor do Pedido: R$ {(quantidadeTotal * produto.preco).toFixed(2)}
                </Title>

                <Form.Item style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Button style={{ marginTop: 20, backgroundColor: "#610E00", borderRadius: 15, height: 40, width: 150 }} type="primary" htmlType="submit">Finalizar Pedido!</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CompraProduto
