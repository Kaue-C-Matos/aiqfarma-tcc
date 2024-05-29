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
exports.Farmacia = void 0;
const endereco_entity_1 = require("../Endereco/endereco.entity");
const produto_entity_1 = require("../Produtos/produto.entity");
const typeorm_1 = require("typeorm");
let Farmacia = class Farmacia {
};
exports.Farmacia = Farmacia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Farmacia.prototype, "id_farmacia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Farmacia.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Farmacia.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Farmacia.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Farmacia.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => endereco_entity_1.Endereco),
    (0, typeorm_1.JoinColumn)({ name: 'id_endereco' }),
    __metadata("design:type", endereco_entity_1.Endereco)
], Farmacia.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_entity_1.Produtos, (produtos) => produtos.farmacia),
    __metadata("design:type", Array)
], Farmacia.prototype, "produtos", void 0);
exports.Farmacia = Farmacia = __decorate([
    (0, typeorm_1.Entity)({ name: 'farmacia' })
], Farmacia);
//# sourceMappingURL=farmacia.entity.js.map