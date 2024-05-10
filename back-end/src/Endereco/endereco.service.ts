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
}