import { Farmacia } from "src/Farmacia/farmacia.entity";
import { Imagem } from "src/imagem/imagem.entity";
export declare class Produtos {
    id_produto: number;
    nome: string;
    preco: number;
    descricao: string;
    categoria: string;
    farmacia: Farmacia;
    status: boolean;
    imagem: Imagem;
}
