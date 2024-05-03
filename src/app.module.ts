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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: '',
      database: 'aiq_farma',
      entities: [Endereco,Imagem],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Endereco, Imagem])
  ],
  controllers: [EnderecoController, ImageController],
  providers: [EnderecoService,ImagemService]
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}