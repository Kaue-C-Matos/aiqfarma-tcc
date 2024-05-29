import { Imagem } from "./imagem.entity";
import { Repository } from "typeorm";
export declare class ImagemService {
    private readonly imagemRepository;
    constructor(imagemRepository: Repository<Imagem>);
    findAll(): Promise<Imagem[]>;
}
