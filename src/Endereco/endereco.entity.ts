import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: 'endereco'})
export class Endereco{
    @PrimaryGeneratedColumn()
    id_endereco: number;

    @Column()
    CEP: string;

    @Column()
    rua: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    numero: string;
}