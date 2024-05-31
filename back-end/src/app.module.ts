import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Endereco } from './Endereco/endereco.entity';
import { EnderecoController } from './Endereco/endereco.controller';
import { EnderecoService } from './Endereco/endereco.service';
import { Imagem } from './imagem/imagem.entity';
import { ImageController } from './imagem/imagem.controller';
import { ImagemService } from './imagem/imagem.service';
import { Farmacia } from './Farmacia/farmacia.entity';
import { FarmaciaController } from './Farmacia/farmacia.controller';
import { FarmaciaService } from './Farmacia/farmacia.service';
import { Produtos } from './Produtos/produto.entity';
import { ProdutoController } from './Produtos/produto.controller';
import { ProdutoService } from './Produtos/produto.service';
import { Pedidos } from './Pedidos/pedidos.entity';
import { PedidosController } from './Pedidos/pedidos.controller';
import { PedidosService } from './Pedidos/pedidos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'aiq_farma',
      entities: [Endereco,Imagem, Farmacia, Produtos, Pedidos],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Endereco, Imagem, Farmacia,Produtos, Pedidos])
  ],
  controllers: [EnderecoController, ImageController, FarmaciaController, ProdutoController, PedidosController],
  providers: [EnderecoService,ImagemService, FarmaciaService,ProdutoService, PedidosService]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}