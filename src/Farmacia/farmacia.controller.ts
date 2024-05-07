import { Controller, Get } from "@nestjs/common";
import { FarmaciaService } from "./farmacia.service";
import { Farmacia } from "./farmacia.entity";

@Controller('farmacia')
export class FarmaciaController{
    constructor(private readonly farmaciaService: FarmaciaService){}

    @Get()
    getFarmacia(): Promise<Farmacia[]>{
        return this.farmaciaService.findAll()
    }
}