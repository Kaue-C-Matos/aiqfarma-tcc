import { createBrowserRouter, RouterProvider} from "react-router-dom"
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
        path: "/detalhes/:id",
        element: <DetalheProduto/>
      },
      {
        path: "/catalogo",
        element: <Catalogo/>
      },
      {
        path: "/pedidos",
        element: <PedidosRecebidos/>
      },
      {
        path: "/cadastrar",
        element: <CadastrarProdutos/>
      },
      {
        path: "/comprar/:id",
        element: <CompraProduto/>
      },
      {
        path: "produtos/alterar/:id",
        element: <AlterarProduto/>
      }
    ])

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
        <RouterProvider router={routes}/>
      </ConfigProvider>
    </div>
  );
}

export default App;
