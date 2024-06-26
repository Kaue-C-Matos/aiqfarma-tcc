import {Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produtos } from "./produto.entity";
import { Repository } from "typeorm";

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

    async encontraProdutoId(id_produto: number): Promise<Produtos>{
        const produto = await this.produtoRepository.findOneBy({id_produto});
        if(!produto){
            return null
        }
        return produto;
    }

    async encontraProdutoIdFarm(id_farmacia: number): Promise<Produtos[]>{
        const produtos = await this.produtoRepository.findBy({id_farmacia});
        if(!produtos){
            return null
        }
        return produtos;
    }

    async cadastraProduto(produtoData: Partial<Produtos>): Promise<Produtos>{
        return this.produtoRepository.save(produtoData);
    }

    async alteraProduto(id_produto: number, produtoData: Partial<Produtos>): Promise<Produtos>{
        await this.produtoRepository.update(id_produto, produtoData)
        return this.encontraProdutoId(id_produto)
    }

    async alterarQuantidade(id_produto: number, quantidade: number): Promise<Produtos>{
        const produto = await this.produtoRepository.findOneBy({id_produto})
        if(!produto){
            return null
        }
        produto.quantidade = quantidade
        await this.produtoRepository.save(produto)
        return produto;
    }

    async alterarStatus(id_produto: number, status: boolean): Promise<Produtos>{
        const produto = await this.produtoRepository.findOneBy({id_produto})
        if(!produto){
            return null
        }
        produto.status = status
        await this.produtoRepository.save(produto)
        return produto;
    }

    async apagaProduto(id_produto: number): Promise<void>{
        const produto = await this.produtoRepository.findOneBy({id_produto});
        if(!produto){
            return null
        }
        await this.produtoRepository.delete(id_produto);
    }
}

