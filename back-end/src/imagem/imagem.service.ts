import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Imagem } from "./imagem.entity";
import { Repository } from "typeorm";

@Injectable()
export class ImagemService {
    constructor(
        @InjectRepository(Imagem)
        private readonly imagemRepository: Repository<Imagem>
    ){}
    async findAll(): Promise<Imagem[]>{
        return await this.imagemRepository.find()
    }

    async encontraImagemId(idimagem: number): Promise<Imagem>{
        const imagem = await this.imagemRepository.findOneBy({idimagem});
        if(!imagem){
            return null
        }
        return imagem;
    }

    async cadastrarImagem(imagemData: Partial<Imagem>): Promise<Imagem>{
        return this.imagemRepository.save(imagemData);
    }
    async alteraImagem(idimagem: number, imagemData: Partial<Imagem>): Promise<Imagem>{
        await this.imagemRepository.update(idimagem, imagemData)
        return this.encontraImagemId(idimagem)
    }
     async deletaImagem(idimagem: number): Promise<void>{
        const imagem = await this.imagemRepository.findOneBy({idimagem});
        if (!imagem){
        return null
        }
        await this.imagemRepository.delete(idimagem);
     }
    
    
}