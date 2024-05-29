import { Farmacia } from "./farmacia.entity";
import { Repository } from "typeorm";
export declare class FarmaciaService {
    private readonly farmaciaRespository;
    constructor(farmaciaRespository: Repository<Farmacia>);
    findAll(): Promise<Farmacia[]>;
}
