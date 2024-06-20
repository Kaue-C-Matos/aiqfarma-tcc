import {Body, Controller,Delete,Get, HttpStatus, NotFoundException, Param, Patch, Post, Put, Response} from "@nestjs/common";
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

    @Get('id/:id')
    async getProdutosId(@Param('id') id:number): Promise<Produtos>{
        const produto = await this.produtoService.encontraProdutoId(id)
        if (produto == null){
            throw new NotFoundException("Produto não encontrado, por favor verifique o ID")
        }
        return produto
    }

    @Get('farmacia/:id')
    async getProdutosIdFarm(@Param('id') id:number): Promise<Produtos[]>{
        const produto = await this.produtoService.encontraProdutoIdFarm(id)
        if (produto == null){
            throw new NotFoundException("Farmácia não encontrada, por favor verifique o ID")
        }
        return produto
    }

    @Post()
    postProduto(@Body() produtoData: Partial<Produtos>): Promise<Produtos>{
        return this.produtoService.cadastraProduto(produtoData)
    }

    @Put(':id')
    async putProduto(@Param('id') id: number, @Body() produtoData: Partial<Produtos>): Promise<Produtos>{
        const produto = await this.produtoService.alteraProduto(id, produtoData)
        if (produto == null){
            throw new NotFoundException("Produto não encontrado, por favor verifique o ID")
        }
        return produto
    }

    @Patch('quantidade/:id')
    async patchProdutoQuantidade(@Param('id') id: number, @Body('quantidade') quantidade: number) {
        return this.produtoService.alterarQuantidade(id, quantidade)
    }

    @Patch('status/:id')
    async patchProdutoStatus(@Param('id') id: number, @Body('status') status: boolean){
        return this.produtoService.alterarStatus(id, status)
    }

    @Delete(':id')
    async deleteProduto(@Param('id') id: number, @Response() res){
        const produto = await this.produtoService.encontraProdutoId(id)
        if (produto == null){
            return new NotFoundException("Produto não encontrado, por favor verifique o ID");
        } else{
            await this.produtoService.apagaProduto(id)
            return res.status(HttpStatus.OK).json("Produto deletado com sucesso")
        }
    }
}