import { ImagemService } from "./imagem.service";
import { Imagem } from "./imagem.entity";
export declare class ImageController {
    private readonly imagemService;
    constructor(imagemService: ImagemService);
    getImagem(): Promise<Imagem[]>;
}
