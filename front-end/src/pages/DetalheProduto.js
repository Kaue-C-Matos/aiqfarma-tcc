import { ArrowLeftOutlined } from "@ant-design/icons";
import {Input,Space } from 'antd';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);

function DetalheProduto(){
    return(
        <header style={{backgroundColor:"red", height:"100px"}}>
            <div style={{display: "Flex", flexDirection:"row", alignItems:"center"}}>
        <div aria-orientation="left">
             <ArrowLeftOutlined style={{
                fontSize: "20px",
                marginTop:"30px", 
                color:"red", 
                border:"80px", 
                padding:"5px 8px",
                marginLeft:"10px",
                marginRight:"10px", 
                backgroundColor:"white", 
                borderRadius:"5px"}}/>
        </div>
        <div aria-orientation="left">    
  
    <Space direction="vertical">
      <Search
        placeholder="O que você esta procurando?"
        onSearch={onSearch}
        style={{
            marginTop:30,
          width: 250,
          color:"red"
        }}
      />
    </Space></div>
    </div> 
    
        </header>
    )
}
export default DetalheProduto