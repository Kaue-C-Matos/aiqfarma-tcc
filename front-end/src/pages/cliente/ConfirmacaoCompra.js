import { Button, Result } from "antd"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

function ConfirmacaoCompra(){
    const navigate = useNavigate()
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate("/catalogo")
        }, 2000)

        return () => clearTimeout(timer)
    }, [navigate])

    return(
        <Result 
            status="success"
            title="Pedido realizado com sucesso"
            subTitle="você será redirecionado automaticamente para a tela inicial"
            extra={
                <Button type="primary" onClick={()=> navigate("/catalogo")}>
                    Voltar ao inicio
                </Button>
            }
        />
    )
} 

export default ConfirmacaoCompra