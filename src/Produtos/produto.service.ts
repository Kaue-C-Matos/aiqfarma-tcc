import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produtos } from "./produto.entity";
import { Repository } from "typeorm";
import { promises } from "dns";

@Injectable()

export class ProdutoService{
    constructor(
        @InjectRepository(Produtos)
        private readonly produtoRepository: Repository<Produtos>
    )
    {}

    async encontraProdutos(): Promise<Produtos[]>{
        return this.produtoRepository.find({
            relations: {imagem:true, farmacia:true}
        })
    }

}

