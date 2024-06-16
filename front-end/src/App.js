import { BrowserRouter, Route, Routes} from "react-router-dom"
import React from 'react';
import { ConfigProvider } from 'antd';
import Inicio from './pages/inicio'
import ProdutosCadastrados from "./pages/farmacia/produtosCadastrados";
import DetalheProduto from "./pages/cliente/DetalheProduto";
import Catalogo from "./pages/cliente/Catalogo";
import PedidosRecebidos from "./pages/farmacia/PedidosRecebidos";
import CadastrarProdutos from "./pages/farmacia/CadastrarProdutos"
import CompraProduto from "./pages/cliente/CompraProduto";
import AlterarProduto from "./pages/farmacia/AlterarProduto";
import ConfirmacaoCompra from "./pages/cliente/ConfirmacaoCompra";
import AutorizacaoProvider from "./context/AutorizaçãoContext";
import RotaProtegida from "./components/RotaProtegida";

function App() {

  return (
    <div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
</style>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#B60000",
            fontFamily: "Inter",
            padding: "0px"
          },
        }}
      >    
        <AutorizacaoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Inicio/>} />

              <Route path="/produtos" element={<ProdutosCadastrados/>} />
              <Route path="/cadastrar" element={<CadastrarProdutos/>} />
              <Route path="/produtos/alterar/:id" element={<AlterarProduto/>} />
              <Route path="/pedidos" element={<PedidosRecebidos/>} />

              <Route path="/catalogo" element={<Catalogo/>}/>
              <Route path="/detalhes/:id" element={<DetalheProduto/>}/>
              <Route path="/comprar/:id" element={<CompraProduto/>}/>
              <Route path="/confirmacao" element={
                <RotaProtegida>
                  <ConfirmacaoCompra/>
                </RotaProtegida>
              }/>
            </Routes>
          </BrowserRouter>
        </AutorizacaoProvider>
      </ConfigProvider>
    </div>
  );
}

export default App;
