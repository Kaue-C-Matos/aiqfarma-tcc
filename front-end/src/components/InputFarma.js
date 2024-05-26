import { Input} from 'antd'

function InputFarma(props) {
    return (
        <div>
            <Input 
            type={props.type} 
            style={{height: "40px", width: "320px", border: "2px solid #000", borderRadius: "15px"}}
            placeholder={props.placeholder}/>
        </div>
    )
}

export default InputFarma