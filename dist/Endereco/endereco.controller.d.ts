import { EnderecoService } from "./endereco.service";
import { Endereco } from "./endereco.entity";
export declare class EnderecoController {
    private readonly enderecoService;
    constructor(enderecoService: EnderecoService);
    getEndereco(): Promise<Endereco[]>;
}
