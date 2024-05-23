import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Farmacia } from "./farmacia.entity";
import { Repository } from "typeorm";

@Injectable()
export class FarmaciaService{
    constructor(
        @InjectRepository(Farmacia)
        private readonly farmaciaRespository: Repository<Farmacia>
    ) {}

    async findAll(): Promise<Farmacia[]>{
        return this.farmaciaRespository.find({
            relations: {endereco: true, produtos: true}
        })
    }

    async encontraFarmaciaId(id_farmacia: number): Promise<Farmacia>{
        const farmacia = await this.farmaciaRespository.findOneBy({id_farmacia});
        if(!farmacia){
            return null
        }
        return farmacia;
    }
}