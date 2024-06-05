import {Typography } from 'antd';
import { Form, Input, Select } from 'antd';
import { Button } from 'antd';
const { TextArea } = Input;
const {Title} = Typography;

function CadastrarProdutos(){
    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
             <Title level={1} style={{margin:"50px", display:"flex", justifyContent:"center", textAlign:"center", color:"#B30101"}}>
             Cadastrar Produto
            </Title>

            <Form style={{width:250}}>
        
         <Form.Item label={<label style={{fontSize: 22}}><b>Nome</b></label>}>
        <Input placeholder="insira o nome do produto" />
      </Form.Item>

      <Form.Item label={<label style={{fontSize: 22}}><b>Image</b></label>}>
        <Input placeholder="insira a url da imagem" />
      </Form.Item>

      <Form.Item label={<label style={{fontSize: 22}}><b>Detalhes</b></label>}>
          <TextArea rows={4} />
        </Form.Item>


      <Form.Item label={<label style={{fontSize: 22}}><b>Valor</b></label>}>
        <Input placeholder="insira o valor do produto" />
      </Form.Item>
    

    <Form.Item label={<label style={{fontSize: 22}}><b>Tipo</b></label>}>
          <Select style={{width:"200px"}}>
            <Select.Option value="Medicamento">medicamento</Select.Option>
            <Select.Option value="Higiene">Higiene</Select.Option>
          </Select>
    </Form.Item>
    <Form.Item style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"50px"}}>
        <Button type="primary">Cadastrar</Button>
      </Form.Item>
    </Form>

        </div>

        
    )

}
export default CadastrarProdutos