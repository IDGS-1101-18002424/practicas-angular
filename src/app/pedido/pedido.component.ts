import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
  /*nombreCompleto: string;
  direccion: string;
  telefono: string;
  fechaCompra: string;
  tamanio: string;
  ingredientes: string;
  numeroPizzas: number;*/
  nombreCompleto: string = '';
  direccion: string = '';
  telefono: string = '';
  fechaCompra: string = '';
  tamanio: string = '';
  ingredientes: string = '';
  numeroPizzas: number = 0;
  detallePedido: any[] = [];
  mostrarConfirmacion: boolean = false;
  costoTotal: number = 0;

  constructor() {
    this.nombreCompleto = '';
    this.direccion = '';
    this.telefono = '';
    this.fechaCompra = '';
    this.tamanio = '';
    this.ingredientes = '';
    this.numeroPizzas = 0;
  }
  
  agregarPizza() {
    const subtotal = this.calcularSubtotal(this.tamanio, this.numeroPizzas);
    const pizza = {
      tamanio: this.tamanio,
      ingredientes: this.ingredientes,
      numeroPizzas: this.numeroPizzas,
      subtotal: subtotal
    };
    this.detallePedido.push(pizza);
  }

  quitarPizza(pizza: any) {
    const index = this.detallePedido.indexOf(pizza);
    if (index !== -1) {
      this.detallePedido.splice(index, 1);
    }
  }

  calcularSubtotal(tamanio: string, numeroPizzas: number): number {
    // Lógica para calcular el subtotal de la pizza según el tamaño y el número de pizzas
    // Puedes implementar tu propia lógica aquí
    return 0;
  }

  finalizarPedido() {
    this.mostrarConfirmacion = true;
    this.costoTotal = this.calcularCostoTotal();
  }

  aceptarPedido() {
    // Enviar el pedido al servidor o realizar las acciones necesarias
    // para finalizar el pedido y redirigir a la página de confirmación
  }

  editarPedido() {
    this.mostrarConfirmacion = false;
  }

  calcularCostoTotal(): number {
    let total = 0;
    for (const pizza of this.detallePedido) {
      total += pizza.subtotal;
    }
    return total;
  }
}
