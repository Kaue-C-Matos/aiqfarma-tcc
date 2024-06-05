import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Endereco } from "./endereco.entity";
import { Repository } from "typeorm";

@Injectable()
export class EnderecoService{
    constructor(
        @InjectRepository(Endereco)
        private readonly enderecoRepository: Repository<Endereco>
    ) {}

    async findAll(): Promise<Endereco[]>{
        return this.enderecoRepository.find()
    }

    async encontraEnderecoId(id_endereco: number): Promise<Endereco>{
        const endereco = await this.enderecoRepository.findOneBy({id_endereco});
        if(!endereco){
            return null
        }
        return endereco;
    }
}