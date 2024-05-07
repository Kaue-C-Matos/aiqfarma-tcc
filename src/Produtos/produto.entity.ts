import { Farmacia } from "src/Farmacia/farmacia.entity";
import { Imagem } from "src/imagem/imagem.entity";
import { Column, Double, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'produtos'})
export class Produtos {
    @PrimaryGeneratedColumn()
    id_produto: number

    @Column()
    nome: string

    @Column()
    preco: number 
    
    @Column()
    descricao: string

    @Column()
    categoria: string

    @ManyToOne(()=>Farmacia,(farmacia)=>farmacia.produtos)
    @JoinColumn({name:"id_farmacia"})
    farmacia: Farmacia

    @Column()
    status:boolean;

    @OneToOne(()=>Imagem)
    @JoinColumn({name:"id_imagem"})
    imagem:Imagem
}