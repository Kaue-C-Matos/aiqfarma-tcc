import { ArrowLeftOutlined, MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons"
import { Image, Form, Select, Button } from "antd"
import Title from "antd/es/typography/Title"
import { useState } from "react"

function CompraProduto() {
    let [quantidade, setQuantidade] = useState(1)
    return (



        <div>

            <ArrowLeftOutlined style={{ fontSize: "20px", padding: "5px 8px", margin: "10px 10px", color: "#FFFF", backgroundColor: "#610E00", borderRadius: "5px" }} />

            <Title level={2} style={{ margin: "17px", display: "flex", justifyContent: "center", textAlign: "center", color: "#610E00" }}>
                Finalize sua Compra!!!
            </Title>

            <Title level={4} style={{ margin: 10, marginTop: 30, color: "#610E00" }}>
                Produto
            </Title>

            <div style={{ display: "flex", backgroundColor: "#D9D9D9", width: 270, padding: "10px 0px", gap: 8, margin: 4, borderRadius: 5 }}>
                <Image width={220} style={{ margin: "5px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshyK1li9TVtOCB3yof7aBMlnecwxN38n0bQ&s" />
                <b>Buscopan
                    butilbrometo de escopalamina 10 mg</b>
            </div>

            <div style={{ display: "flex" }}>
                <Title level={4} style={{ margin: 10, marginTop: 25, color: "#610E00" }}>
                    Quantidade:
                </Title>

                <div style={{ display: "flex", marginTop: 12, gap: 8 }}>
                    <MinusCircleFilled style={{ fontSize: 25, color: "#610E00" }} onClick={() => setQuantidade(quantidade = quantidade - 1)} />
                    <p>{quantidade}</p>
                    <PlusCircleFilled style={{ fontSize: 25, color: "#610E00" }} onClick={() => setQuantidade(quantidade = quantidade + 1)} />
                </div>

            </div>
            <div style={{ margin: "50px 15px" }}>
                <Form.Item label={<label style={{ fontSize: 22, color: "#610E00" }}><b>Retirada do Produto</b></label>}>
                    <Select style={{ width: "180px" }}>
                        <Select.Option value="Entrega a domicilio">Entrega a domicilio</Select.Option>
                        <Select.Option value="Retirada no local">Retirada no local</Select.Option>
                    </Select>
                </Form.Item>
            </div>

            <div style={{ margin: "50px 15px" }}>
                <Form.Item label={<label style={{ fontSize: 22, color: "#610E00" }}><b>Forma de Pagamento</b></label>}>
                    <Select style={{ width: "180px" }}>
                        <Select.Option value="Pix">Pix</Select.Option>
                        <Select.Option value="Cartao de crédito">Cartão de Credito</Select.Option>
                        <Select.Option value="Dinheiro">Dinheiro</Select.Option>
                    </Select>
                </Form.Item>
            </div>

            <Form.Item style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "100px" }}>
                <Button style={{ backgroundColor: "#610E00", borderRadius: 15 }} type="primary">Finalizar Pedido!</Button>
            </Form.Item>



        </div>
    )

}

export default CompraProduto

