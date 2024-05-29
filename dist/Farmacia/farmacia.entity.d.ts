import { Endereco } from "src/Endereco/endereco.entity";
import { Produtos } from "src/Produtos/produto.entity";
export declare class Farmacia {
    id_farmacia: number;
    nome: string;
    cnpj: string;
    telefone: string;
    email: string;
    endereco: Endereco;
    produtos: Produtos[];
}
