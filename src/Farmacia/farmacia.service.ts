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
            relations: {endereco: true}
        })
    }
}