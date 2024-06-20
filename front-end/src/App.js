<<<<<<< HEAD
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
=======
import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ProdutosCadastrados from './pages/produtosCadastrados.js';
import Inicio from './pages/inicio.js';
import React from 'react';
import { ConfigProvider } from 'antd';
import DetalheProduto from './pages/DetalheProduto.js';
import Catalogo from './pages/Catalogo.js';
import CadastrarProdutos from './pages/CadastrarProdutos.js';
import CompraProduto from './pages/CompraProduto.js';

function App() {
  
  const routes = createBrowserRouter([
      {
        path: "/",
        element: <Inicio/>
      },
      {
        path: "/produtos",
        element: <ProdutosCadastrados/>
      },
      {
        path: "/detalhes",
        element: <DetalheProduto/>
      },
      {
        path: "/catalogo",
        element: <Catalogo/>
      },
      {
        path: "/cadastro",
        element: <CadastrarProdutos/>
      },

      {
        path: "/compra",
        element: <CompraProduto/>
      }
    ])
>>>>>>> 041e19ba5494f2f7c387c3f95cc465c4f0b1a386

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
