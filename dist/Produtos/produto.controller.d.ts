import { ProdutoService } from "./produto.service";
import { Produtos } from "./produto.entity";
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    getProdutos(): Promise<Produtos[]>;
}
