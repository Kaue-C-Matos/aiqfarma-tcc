import { ArrowLeftOutlined } from '@ant-design/icons';
import {InputNumber, Typography } from 'antd';
import { Form, Input, Select } from 'antd';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import axios from 'axios';
const { TextArea } = Input;
const {Title} = Typography;

function CadastrarProdutos(){
  const navigate = useNavigate()

  async function onFinish(valores){
    let valorFormatado = parseFloat(valores.valor.replace('R$', '').replace(',', '.',).trim())

    await axios.post('http://localhost:3000/imagem', {
      imagem: valores.imagem,
      descricao: `Imagem do(a) ${valores.nome}`
    })
    .then(response =>{
      const imagemId = response.data.idimagem

      return axios.post('http://localhost:3000/produtos', {
        nome: valores.nome,
        preco: valorFormatado,
        descricao: valores.detalhes,
        categoria: valores.categoria,
        id_farmacia: 1,
        id_imagem: imagemId,
        quantidade: valores.quantidade
      })
    })

    navigate('/produtos')
  }

  const label = {fontSize: 22}

  return(
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div style={{ width: "90%", display: "flex", justifyContent: "flex-start", margin: 10 }}>
        <ArrowLeftOutlined onClick={() => navigate("/produtos")} style={{ fontSize: "30px" }} />
      </div>
      <Title level={1} style={{marginBottom:"50px", display:"flex", justifyContent:"center", textAlign:"center", color:"#B30101"}}>
        Cadastrar Produto
      </Title>

      <Form style={{width:250}} onFinish={onFinish}>      
        <Form.Item required name="nome" label={<label style={label}><b>Nome</b></label>}>
          <Input minLength={5} maxLength={100} placeholder="insira o nome do produto" style={{borderColor: "#000"}} />
        </Form.Item>

        <Form.Item required name="imagem" label={<label style={label}><b>Imagem</b></label>}>
         <Input type='url' placeholder="insira a url da imagem" style={{borderColor: "#000"}}/>
        </Form.Item>

        <Form.Item required name="detalhes" label={<label style={label}><b>Detalhes</b></label>}>
          <TextArea minLength={10} maxLength={1000} rows={4} required style={{borderColor: "#000"}}/>
        </Form.Item>

        <Form.Item required name="valor" label={<label style={label}><b>Valor</b></label>}>
          <NumericFormat prefix='R$ ' decimalScale={2} decimalSeparator=',' valueIsNumericString customInput={Input} allowNegative={false} placeholder="insira o valor do produto" required style={{borderColor: "#000"}}/>
        </Form.Item>

        <Form.Item required name="quantidade" label={<label style={label}><b>Quantidade</b></label>}>
          <InputNumber type='number' maxLength={3} placeholder="Unidades disponíveis" style={{borderColor: "#000"}} />
        </Form.Item>
    
        <Form.Item required name="categoria" label={<label style={label}><b>Categoria</b></label>}>
          <Select style={{width:"200px", border: "2px solid", borderRadius: 8}}>
            <Select.Option value="medicamento">medicamento</Select.Option>
            <Select.Option value="higiene">higiene</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"50px"}}>
          <Button type="primary" htmlType='submit' size='large'>Cadastrar</Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default CadastrarProdutos