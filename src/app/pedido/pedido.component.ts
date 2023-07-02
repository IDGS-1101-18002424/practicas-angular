import { Component } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent {
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
  precios: { [key: string]: number } = {
    Chica: 40,
    Mediana: 80,
    Grande: 120
  };
  ingredientesDisponibles = [
    { nombre: 'Jamón', seleccionado: false },
    { nombre: 'Piña', seleccionado: false },
    { nombre: 'Champiñones', seleccionado: false },
    { nombre: 'Pepperoni', seleccionado: false },
    { nombre: 'Salami', seleccionado: false },
    
  ];
  pedidoEnviado: boolean = false;


  agregarPizza() {
    const ingredientesSeleccionados = this.ingredientesDisponibles
      .filter(ingrediente => ingrediente.seleccionado)
      .map(ingrediente => ingrediente.nombre);
  
    const costoIngredientes = ingredientesSeleccionados.length * 10;
    const subtotal = this.calcularSubtotal(this.tamanio, this.numeroPizzas, costoIngredientes);
    
    const pizza = {
      nombreCompleto: this.nombreCompleto,
      tamanio: this.tamanio,
      ingredientes: ingredientesSeleccionados.join(', '),
      numeroPizzas: this.numeroPizzas,
      subtotal: subtotal
    };
    
    this.detallePedido.push(pizza);
    this.calcularCostoTotal();
  }

  quitarPizza(pizza: any) {
    const index = this.detallePedido.indexOf(pizza);
    if (index !== -1) {
      this.detallePedido.splice(index, 1);
      this.calcularCostoTotal();
    }
  }

  calcularSubtotal(tamanio: string, numeroPizzas: number, costoIngredientes: number): number {
    const precio = this.precios[tamanio];
    const costoTotal = (precio + costoIngredientes) * numeroPizzas;
    return costoTotal;
  }
  
  finalizarPedido() {
    this.calcularCostoTotal();
    this.mostrarConfirmacion = true;
  }

  aceptarPedido() {
    this.pedidoEnviado = true;
  }
  

  editarPedido() {
    this.mostrarConfirmacion = false;
  }

  calcularCostoTotal() {
    let total = 0;
    for (const pizza of this.detallePedido) {
      total += pizza.subtotal;
    }
    this.costoTotal = total;
  }
}