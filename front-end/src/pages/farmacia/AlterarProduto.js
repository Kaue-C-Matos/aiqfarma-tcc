import { ArrowLeftOutlined } from '@ant-design/icons';
import { InputNumber, Typography } from 'antd';
import { Form, Input, Select } from 'antd';
import { Button } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
const { TextArea } = Input;
const { Title } = Typography;

function AlterarProduto() {
    const navigate = useNavigate()
    const produtoEscolhido = useParams().id
    const [produto, setProduto] = useState({})
    const [imagem, setImagem] = useState({})

    const [form] = Form.useForm()

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
    }, [produtoEscolhido])

    form.setFieldsValue({
        nome: produto.nome,
        imagem: imagem.imagem,
        detalhes: produto.descricao,
        valor: produto.preco,
        quantidade: produto.quantidade,
        categoria: produto.categoria
    })

    async function onFinish(valores) {
        let valorFormatado = parseFloat(valores.valor.replace('R$', '').replace(',', '.',).trim())

        await axios.put(`http://localhost:3000/produtos/${produtoEscolhido}`,{
            nome: valores.nome,
            preco: valorFormatado,
            descricao: valores.detalhes,
            categoria: valores.categoria,
            quantidade: valores.quantidade,
        })

        await axios.put(`http://localhost:3000/imagem/${produto.id_imagem}`,{
            id_imagem: imagem.id_imagem,
            imagem: valores.imagem,
            descricao: imagem.descricao
        })
        navigate('/produtos')
    }

    useEffect(() => {
        fetchData()
    }, [fetchData])

    const label = { fontSize: 22 }
    console.log(produto)

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "90%", display: "flex", justifyContent: "flex-start", margin: 10 }}>
                <ArrowLeftOutlined onClick={() => navigate("/produtos")} style={{ fontSize: "30px" }} />
            </div>
            <Title level={1} style={{ margin: "10px 10px 50px 10px", display: "flex", justifyContent: "center", textAlign: "center", color: "#B30101" }}>
                Editar produto
            </Title>

            <Form form={form} style={{ width: 250 }} onFinish={onFinish}>
                <Form.Item required name="nome" label={<label style={label}><b>Nome</b></label>}>
                    <Input  minLength={5} maxLength={100} placeholder="insira o nome do produto" style={{ borderColor: "#000" }} />
                </Form.Item>

                <Form.Item required name="imagem" label={<label style={label}><b>Imagem</b></label>}>
                    <Input type='url' placeholder="insira a url da imagem" style={{ borderColor: "#000" }} />
                </Form.Item>

                <Form.Item required name="detalhes" label={<label style={label}><b>Detalhes</b></label>}>
                    <TextArea minLength={10} maxLength={1000} rows={4} required style={{ borderColor: "#000" }} />
                </Form.Item>

                <Form.Item required name="valor" label={<label style={label}><b>Valor</b></label>}>
                    <NumericFormat prefix='R$ ' decimalScale={2} decimalSeparator=',' valueIsNumericString customInput={Input} allowNegative={false} placeholder="insira o valor do produto" required style={{ borderColor: "#000" }} />
                </Form.Item>

                <Form.Item required name="quantidade" label={<label style={label}><b>Quantidade</b></label>}>
                    <InputNumber type='number' maxLength={3} placeholder="Unidades disponíveis" style={{ borderColor: "#000" }} />
                </Form.Item>

                <Form.Item required name="categoria" label={<label style={label}><b>Categoria</b></label>}>
                    <Select style={{ width: "200px", border: "2px solid", borderRadius: 8 }}>
                        <Select.Option value="medicamento">medicamento</Select.Option>
                        <Select.Option value="higiene">higiene</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "50px" }}>
                    <Button type="primary" htmlType='submit' size='large'>Finalizar</Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default AlterarProduto