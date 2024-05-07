import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'aiq_farma',
      entities: [Endereco,Imagem, Farmacia, Produtos],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Endereco, Imagem, Farmacia,Produtos])
  ],
  controllers: [EnderecoController, ImageController, FarmaciaController, ProdutoController],
  providers: [EnderecoService,ImagemService, FarmaciaService,ProdutoService]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}