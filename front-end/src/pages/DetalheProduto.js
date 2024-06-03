import {Image,Typography } from 'antd';
import Cabecalho from "../components/Cabecalho";
const {Title} = Typography;


function DetalheProduto(){
    return(
      <div>
        <Cabecalho/>
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