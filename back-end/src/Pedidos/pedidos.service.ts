import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Pedidos } from "./pedidos.entity";
import { Repository } from "typeorm";

@Injectable()
export class PedidosService{
    constructor (
        @InjectRepository(Pedidos)
        private readonly pedidosRepository: Repository<Pedidos>
    ) {}

    async encontraPedidos(): Promise<Pedidos[]>{
        return this.pedidosRepository.find({
            relations: {produto: true, endereco: true, farmacia: true}
        })
    }

    async encontraPedidoId(id_pedido: number): Promise<Pedidos>{
        const pedido = await this.pedidosRepository.findOneBy({id_pedido});
        if(!pedido){
            return null
        }
        return pedido;
    }

    async encontraPedidoIdFarm(id_farmacia: number): Promise<Pedidos[]>{
        const pedidos = await this.pedidosRepository.findBy({id_farmacia});
        if(!pedidos){
            return null
        }
        return pedidos;
    }

    async cadastraPedido(pedidoData: Partial<Pedidos>): Promise<Pedidos>{
        return this.pedidosRepository.save(pedidoData)
    }

    async alteraStatus(id_pedido: number, status: boolean): Promise<Pedidos>{
        const pedido = await this.pedidosRepository.findOneBy({id_pedido})
        if(!pedido){
            return null
        }
        pedido.status = status;
        await this.pedidosRepository.save(pedido)
        return pedido;
    }

    async deletaPedido(id_pedido: number): Promise<void>{
        const pedido = await this.pedidosRepository.findOneBy({id_pedido});
        if(!pedido){
            return null
        }
        await this.pedidosRepository.delete(id_pedido);
    }
}