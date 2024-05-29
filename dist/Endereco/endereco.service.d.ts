import { Endereco } from "./endereco.entity";
import { Repository } from "typeorm";
export declare class EnderecoService {
    private readonly enderecoRepository;
    constructor(enderecoRepository: Repository<Endereco>);
    findAll(): Promise<Endereco[]>;
}
