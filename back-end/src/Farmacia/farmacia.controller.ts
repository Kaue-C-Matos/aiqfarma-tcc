import { Controller, Get, NotFoundException, Param } from "@nestjs/common";
import { FarmaciaService } from "./farmacia.service";
import { Farmacia } from "./farmacia.entity";

@Controller('farmacia')
export class FarmaciaController{
    constructor(private readonly farmaciaService: FarmaciaService){}

    @Get()
    getFarmacia(): Promise<Farmacia[]>{
        return this.farmaciaService.findAll()
    }

    @Get('/:id')
    async getFarmaciaId(@Param('id') id: number): Promise<Farmacia>{
        const farmacia = await this.farmaciaService.encontraFarmaciaId(id)
        if (farmacia == null){
            throw new NotFoundException("Produto não encontrado, por favor verifique o ID")
        }
        return farmacia
    }
}