import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    
}
