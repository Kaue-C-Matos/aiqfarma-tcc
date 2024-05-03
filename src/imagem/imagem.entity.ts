import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"imagem"})
export class Imagem {
    @PrimaryGeneratedColumn()
    idimagem:number;
    @Column()
    imagem:string;
    @Column()
    descricao:string;
}