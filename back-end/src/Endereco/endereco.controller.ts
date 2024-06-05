import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { EnderecoService } from "./endereco.service";
import { Endereco } from "./endereco.entity";

@Controller('endereco')
export class EnderecoController{
    constructor(private readonly enderecoService: EnderecoService) {}

    @Get()
    getEndereco(): Promise<Endereco[]> {
        return this.enderecoService.findAll()
    }

    @Get('/:id')
    async getEnderecoId(@Param('id') id: number): Promise<Endereco>{
        const endereco = await this.enderecoService.encontraEnderecoId(id)
        if (endereco == null){
            throw new NotFoundException("Produto não encontrado, por favor verifique o ID")
        }
        return endereco
    }
}