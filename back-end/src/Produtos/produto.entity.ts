import { Farmacia } from "src/Farmacia/farmacia.entity";
import { Imagem } from "src/imagem/imagem.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'produtos'})
export class Produtos {
    @PrimaryGeneratedColumn()
    id_produto: number

    @Column()
    nome: string

    @Column('decimal', {precision: 6, scale: 2})
    preco: number
    
    @Column()
    descricao: string

    @Column()
    categoria: string

    @Column()
    id_farmacia: number

    @ManyToOne(()=>Farmacia,(farmacia)=>farmacia.produtos)
    @JoinColumn({name:"id_farmacia"})
    farmacia: Farmacia

    @Column()
    status:boolean;

    @Column()
    id_imagem: number

    @OneToOne(()=>Imagem)
    @JoinColumn({name:"id_imagem"})
    imagem:Imagem
}