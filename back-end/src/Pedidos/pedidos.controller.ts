import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Response } from "@nestjs/common";
import { PedidosService } from "./pedidos.service";
import { Pedidos } from "./pedidos.entity";

@Controller('pedidos')
export class PedidosController{
    constructor (private readonly pedidosService: PedidosService){}

    @Get()
    getPedidos(): Promise<Pedidos[]>{
        return this.pedidosService.encontraPedidos();
    }

    @Get(':id_farmacia')
    async getPedidosIdFarmacia(@Param('id_farmacia') id_farmacia: number): Promise<Pedidos[]>{
        const pedidos = await this.pedidosService.encontraPedidoIdFarm(id_farmacia)
        if (pedidos == null){
            throw new NotFoundException("Farmácia não encontrada, por favor verifique o ID")
        }
        return pedidos
    }

    @Post()
    postPedidos(@Body() pedidoData: Partial<Pedidos>): Promise<Pedidos>{
        return this.pedidosService.cadastraPedido(pedidoData)
    }

    @Delete(':id')
    async deletePedido(@Param('id') id: number, @Response() res){
        const pedido = await this.pedidosService.encontraPedidoId(id)
        if (pedido == null){
            return new NotFoundException("Produto não encontrado, por favor verifique o ID");
        } else{
            await this.pedidosService.deletaPedido(id)
            return res.status(HttpStatus.OK).json("Produto deletado com sucesso")
        }
    }
}