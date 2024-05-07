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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'aiq_farma',
      entities: [Endereco,Imagem, Farmacia],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Endereco, Imagem, Farmacia])
  ],
  controllers: [EnderecoController, ImageController, FarmaciaController],
  providers: [EnderecoService,ImagemService, FarmaciaService]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}