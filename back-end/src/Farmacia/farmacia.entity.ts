import { Endereco } from "src/Endereco/endereco.entity";
import { Produtos } from "src/Produtos/produto.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'farmacia'})
export class Farmacia {
    @PrimaryGeneratedColumn()
    id_farmacia: number

    @Column()
    nome: string

    @Column()
    cnpj: string

    @Column()
    telefone: string

    @Column()
    email: string

    @OneToOne(() => Endereco)
    @JoinColumn({ name: 'id_endereco' })
    endereco: Endereco;

    @OneToMany(()=>Produtos, (produtos)=>produtos.farmacia)
    produtos: Produtos[]
}