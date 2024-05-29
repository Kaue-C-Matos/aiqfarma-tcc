import { Produtos } from "./produto.entity";
import { Repository } from "typeorm";
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<Produtos>);
    encontraProdutos(): Promise<Produtos[]>;
}
