import { FarmaciaService } from "./farmacia.service";
import { Farmacia } from "./farmacia.entity";
export declare class FarmaciaController {
    private readonly farmaciaService;
    constructor(farmaciaService: FarmaciaService);
    getFarmacia(): Promise<Farmacia[]>;
}
