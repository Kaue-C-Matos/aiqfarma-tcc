import { Farmacia } from "src/Farmacia/farmacia.entity";
import { Produtos } from "src/Produtos/produto.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "pedidos"})
export class Pedidos{
    @PrimaryGeneratedColumn()
    id_pedido: number

    @Column('decimal', {precision: 6, scale: 2})
    valor_total: number

    @Column()
    cliente: string

    @Column()
    quantidade: number

    @Column()
    endereco_cliente: string

    @Column()
    id_produto: number

    @ManyToOne(()=>Produtos)
    @JoinColumn({name: 'id_produto'})
    produto: Produtos

    @Column()
    id_farmacia: number

    @ManyToOne(()=>Farmacia)
    @JoinColumn({name: 'id_farmacia'})
    farmacia: Farmacia

    @Column()
    met_pagamento: string

    @Column()
    retirada: string

    @Column()
    status: boolean
}