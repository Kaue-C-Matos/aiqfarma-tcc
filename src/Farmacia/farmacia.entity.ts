import { Endereco } from "src/Endereco/endereco.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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
}