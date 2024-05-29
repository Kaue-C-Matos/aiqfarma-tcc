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
exports.Produtos = void 0;
const farmacia_entity_1 = require("../Farmacia/farmacia.entity");
const imagem_entity_1 = require("../imagem/imagem.entity");
const typeorm_1 = require("typeorm");
let Produtos = class Produtos {
};
exports.Produtos = Produtos;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Produtos.prototype, "id_produto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Produtos.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Produtos.prototype, "preco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Produtos.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Produtos.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => farmacia_entity_1.Farmacia, (farmacia) => farmacia.produtos),
    (0, typeorm_1.JoinColumn)({ name: "id_farmacia" }),
    __metadata("design:type", farmacia_entity_1.Farmacia)
], Produtos.prototype, "farmacia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Produtos.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => imagem_entity_1.Imagem),
    (0, typeorm_1.JoinColumn)({ name: "id_imagem" }),
    __metadata("design:type", imagem_entity_1.Imagem)
], Produtos.prototype, "imagem", void 0);
exports.Produtos = Produtos = __decorate([
    (0, typeorm_1.Entity)({ name: 'produtos' })
], Produtos);
//# sourceMappingURL=produto.entity.js.map