import { ArrowLeftOutlined } from "@ant-design/icons";
import {Image, Input,Space,Typography,Button, Flex } from 'antd';
const {Title} = Typography;
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function DetalheProduto(){
    return(
        <div>
        <header style={{backgroundColor:"red", height:"100px"}}>
            <div style={{display: "Flex", flexDirection:"row", alignItems:"center"}}>
        <div aria-orientation="left">
             <ArrowLeftOutlined style={{
                fontSize: "20px",
                marginTop:"30px", 
                color:"red",  
                padding:"5px 8px",
                marginLeft:"10px",
                marginRight:"10px", 
                backgroundColor:"white", 
                borderRadius:"5px"}}/>
        </div>
    <Space direction="vertical">
      <Search
        placeholder="O que você esta procurando?"
        onSearch={onSearch}
        size="large"
        style={{
            marginTop:30,
          width: 250,
          color:"red",
        }}
      />
    </Space>
    </div> 
     </header>

     <main>
    <div style={{width:"100%",backgroundColor:"#D9D9D9" ,display:"flex", justifyContent:"center", borderBottom:"5px solid "/*boxShadow:"2px 5px  10px black"*/}}>
        <Image style={{}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshyK1li9TVtOCB3yof7aBMlnecwxN38n0bQ&s"/>
        </div>
        
        <Title level={1} style={{margin:"10px",marginTop:"20px", fontFamily:"arial", fontSize:"30px"}}>
        Buscopan
        butilbrometo de escopalamina 10 mg
        </Title>

        <Title level={5} style={{marginLeft:"10px",marginTop:"30px", fontSize:"25px"}}>
       Fornecedor:
        </Title>

        <Title level={5} style={{ color:"#610E00",marginLeft:"25px",marginTop:"30epx",fontFamily:"monospace",fontSize:"20px"}}>
            <s>R$:20,49</s>
        </Title>

        <Title style={{ color:"#610E00",marginLeft:"10px",marginTop:"2px",fontFamily:"monospace",fontSize:"30px"}}>
       R$:15,99
        </Title>

        <Title level={1} style={{marginLeft:"10px",marginTop:"30px", fontSize:"20px"}}>
       <b style={{fontSize:"30px"}}>Detalhe:</b><br/>
       Esse medicamento serve para tratar de condições relacionadas às dores musculares e outros incômodos. O Buscopan contém duas substâncias ativas, a escopolamina e a dipirona. A primeira funciona como antiespasmódico, no qual auxilia no relaxamento dos músculos, enquanto a dipirona é um analgésico.
        </Title>
    </main>
    <div style={{ display:"flex", 
     justifyContent:"center"}}> 
        <Button type="primary"
     style={{borderRadius:"15px",
     height:"45px", 
     width:155,
     fontSize:25,
     margin:20,
     boxShadow:"2px 5px  10px black"
     
     }}>Comprar!</Button></div>
     </div> 
      
         

        

    )
}



export default DetalheProduto