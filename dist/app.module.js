"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const endereco_entity_1 = require("./Endereco/endereco.entity");
const endereco_controller_1 = require("./Endereco/endereco.controller");
const endereco_service_1 = require("./Endereco/endereco.service");
const imagem_entity_1 = require("./imagem/imagem.entity");
const imagem_controller_1 = require("./imagem/imagem.controller");
const imagem_service_1 = require("./imagem/imagem.service");
const farmacia_entity_1 = require("./Farmacia/farmacia.entity");
const farmacia_controller_1 = require("./Farmacia/farmacia.controller");
const farmacia_service_1 = require("./Farmacia/farmacia.service");
const produto_entity_1 = require("./Produtos/produto.entity");
const produto_controller_1 = require("./Produtos/produto.controller");
const produto_service_1 = require("./Produtos/produto.service");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: 'root',
                password: '',
                database: 'aiq_farma',
                entities: [endereco_entity_1.Endereco, imagem_entity_1.Imagem, farmacia_entity_1.Farmacia, produto_entity_1.Produtos],
                synchronize: false,
            }),
            typeorm_1.TypeOrmModule.forFeature([endereco_entity_1.Endereco, imagem_entity_1.Imagem, farmacia_entity_1.Farmacia, produto_entity_1.Produtos])
        ],
        controllers: [endereco_controller_1.EnderecoController, imagem_controller_1.ImageController, farmacia_controller_1.FarmaciaController, produto_controller_1.ProdutoController],
        providers: [endereco_service_1.EnderecoService, imagem_service_1.ImagemService, farmacia_service_1.FarmaciaService, produto_service_1.ProdutoService]
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map