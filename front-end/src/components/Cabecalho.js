import { ArrowLeftOutlined} from "@ant-design/icons"
import { Input } from "antd";
const {Search} = Input
const onSearch = (value, _e, info) => console.log(info?.source, value);

function Cabecalho() {
    return(
        <header style={{backgroundColor:"red", height:"100px" ,display: "flex", alignItems: "center"}}>
            <ArrowLeftOutlined style={{
                fontSize: "20px",
                color:"red",  
                padding:"5px 8px",
                margin: "0 10px",
                backgroundColor:"white", 
                borderRadius:"5px"
            }}/>
            <Search
                placeholder="O que você esta procurando?"
                size="large"
                onSearch={onSearch}
                style={{
                width: 215,
                color:"red",
                }}
            />
        </header>
    ) 
}

export default Cabecalho