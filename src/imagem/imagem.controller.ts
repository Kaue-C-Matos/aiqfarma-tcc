import { Controller, Get } from "@nestjs/common";
import { ImagemService } from "./imagem.service";
import { Imagem } from "./imagem.entity";

@Controller("imagem")
export class ImageController {
    constructor(private readonly imagemService:ImagemService) {}
    @Get()
    getImagem(): Promise<Imagem[]>{
        return this.imagemService.findAll()
    }
    
}