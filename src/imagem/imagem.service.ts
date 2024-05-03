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
}