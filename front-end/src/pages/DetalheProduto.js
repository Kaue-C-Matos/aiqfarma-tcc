import { ArrowLeftOutlined } from "@ant-design/icons";
import {Image, Input,Space,Typography } from 'antd';
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
        <Title level={2} style={{margin:"5px"}}>
        Buscopan
        butilbrometo de escopalamina 10 mg
        </Title>

     </main>
     </div>   

    )
}


export default DetalheProduto