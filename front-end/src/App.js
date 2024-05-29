import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import ProdutosCadastrados from './pages/produtosCadastrados.js';
import DetalheProduto from './pages/DetalheProduto.js';
import Inicio from './pages/inicio.js';
import React from 'react';
import { ConfigProvider } from 'antd';

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
        path:"/detalhes",
        element: <DetalheProduto/>
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
            fontFamily: "Inter"
          },
        }}
      >    
        <RouterProvider router={routes}/>
      </ConfigProvider>
    </div>
  );
}

export default App;
