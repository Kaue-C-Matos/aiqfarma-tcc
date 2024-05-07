import {Controller,Get} from "@nestjs/common";
import { ProdutoService } from "./produto.service";
import { Produtos } from "./produto.entity";


@Controller('produtos')
export class ProdutoController{
    constructor(private readonly produtoService:ProdutoService)
    {}

    @Get()
    getProdutos():Promise<Produtos[]>{
        return this.produtoService.encontraProdutos();
    }
}