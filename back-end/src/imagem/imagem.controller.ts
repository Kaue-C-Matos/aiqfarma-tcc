import { Body, Controller, Get, NotFoundException, Param, Post, Put,Delete, HttpStatus, Response } from "@nestjs/common";
import { ImagemService } from "./imagem.service";
import { Imagem } from "./imagem.entity";


@Controller("imagem")
export class ImageController {
    constructor(private readonly imagemService:ImagemService) {}
    @Get()
    getImagem(): Promise<Imagem[]>{
        return this.imagemService.findAll()
    }
    
    @Get('id/:id')
    async getImagemId(@Param('id') id:number): Promise<Imagem>{
        const imagem = await this.imagemService.encontraImagemId(id)
        if (imagem==null){
            throw new NotFoundException('Imagem não encontrada, favor verifique o ID inserido');
        }
        return imagem
    }

    @Post()
    postImagem(@Body() imagemData: Partial<Imagem>): Promise<Imagem>{
        return this.imagemService.cadastrarImagem(imagemData)
     }

     @Put(':id')
     async putImagem(@Param('id') id: number, @Body() imagemData: Partial<Imagem>): Promise<Imagem>{
        const imagem = await this.imagemService.alteraImagem(id, imagemData)
        if(imagem==null){
            throw new NotFoundException('Imagem não encontrada, favor verifique o ID inserido');
        } 
        return imagem;
    }
    @Delete(':id')
    async deletaImagem (@Param('id') id: number, @Response() res){
        const imagem = await this.imagemService.encontraImagemId(id)
        if(imagem == null){
            return new NotFoundException('Imagem não encontrada, favor verifique o ID inserido');
        }else{
            await this.imagemService.deletaImagem(id)
            return res.status(HttpStatus.OK).json('Produto deletado')
        }
    }

    
}