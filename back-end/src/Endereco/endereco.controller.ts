import { Controller, Get } from "@nestjs/common";
import { EnderecoService } from "./endereco.service";
import { Endereco } from "./endereco.entity";

@Controller('endereco')
export class EnderecoController{
    constructor(private readonly enderecoService: EnderecoService) {}

    @Get()
    getEndereco(): Promise<Endereco[]> {
        return this.enderecoService.findAll()
    }
}