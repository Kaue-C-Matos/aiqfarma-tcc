import { Button, Divider, Typography } from "antd";
import { ArrowLeftOutlined, PlusSquareFilled } from '@ant-design/icons'
const {Title} = Typography

function ProdutosCadastrados() {

    return(
        <Divider>
            <Divider orientation="left">
                <ArrowLeftOutlined style={{fontSize: "25px"}}/>
            </Divider>
            <Title type="primary" style={{color: "#B60000"}}>Produtos Cadastrados</Title>
            <Button type="dashed" icon={<PlusSquareFilled style={{fontSize: "25px"}}/>} iconPosition={"position"} 
            style={{color: "#B60000", height: "auto" ,width: "90%", fontSize: "25px", borderWidth: "5px",borderColor: "#B60000" , padding: "10px",
            boxSizing: "border-box"}}>
                Cadastrar novo produto
            </Button>
        </Divider>
    )
}

export default ProdutosCadastrados