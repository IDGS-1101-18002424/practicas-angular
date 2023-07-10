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
    { nombre: 'Salchichas', seleccionado: false },
    { nombre: 'Chorizo', seleccionado: false },
    { nombre: 'Tocino', seleccionado: false },
    { nombre: 'Pollo a la parrilla', seleccionado: false },
    { nombre: 'Tomates cherry', seleccionado: false },

  ];
  pedidoEnviado: boolean = false;
  

  /**
   * Agrega una pizza al detalle del pedido.
   */
  agregarPizza(): void {
    // Obtiene los ingredientes seleccionados
    const ingredientesSeleccionados = this.ingredientesDisponibles
      .filter(ingrediente => ingrediente.seleccionado)
      .map(ingrediente => ingrediente.nombre);

    // Calcula el costo adicional de los ingredientes seleccionados
    const costoIngredientes = ingredientesSeleccionados.length * 10;

    // Calcula el subtotal de la pizza
    const subtotal = this.calcularSubtotal(this.tamanio, this.numeroPizzas, costoIngredientes);

    // Crea un objeto pizza con los datos del pedido
    const pizza = {
      nombreCompleto: this.nombreCompleto,
      dirCliente: this.direccion,
      tamanio: this.tamanio,
      ingredientes: ingredientesSeleccionados.join(', '),
      numeroPizzas: this.numeroPizzas,
      subtotal: subtotal
    };

    // Agrega la pizza al detalle del pedido
    this.detallePedido.push(pizza);

    // Calcula el costo total del pedido
    this.calcularCostoTotal();
  }

  /**
   * Quita una pizza del detalle del pedido.
   * @param pizza La pizza a quitar.
   */
  quitarPizza(pizza: any): void {
    const index = this.detallePedido.indexOf(pizza);
    if (index !== -1) {
      this.detallePedido.splice(index, 1);
      this.calcularCostoTotal();
    }
  }

  /**
   * Calcula el subtotal de una pizza.
   * @param tamanio El tamaño de la pizza.
   * @param numeroPizzas El número de pizzas.
   * @param costoIngredientes El costo adicional de los ingredientes seleccionados.
   * @returns El subtotal de la pizza.
   */
  calcularSubtotal(tamanio: string, numeroPizzas: number, costoIngredientes: number): number {
    const precio = this.precios[tamanio];
    const costoTotal = (precio + costoIngredientes) * numeroPizzas;
    return costoTotal;
  }

  /**
   * Finaliza el pedido y muestra la confirmación al usuario.
   */
  finalizarPedido(): void {
    this.calcularCostoTotal();
    this.mostrarConfirmacion = true;
  }

  /**
   * Acepta el pedido y muestra la confirmación de envío.
   */
  aceptarPedido(): void {
    this.pedidoEnviado = true;
  }

  /**
   * Edita el pedido y oculta la confirmación.
   */
  editarPedido(): void {
    this.mostrarConfirmacion = false;
  }

  /**
   * Calcula el costo total del pedido sumando los subtotales de las pizzas.
   */
  calcularCostoTotal(): void {
    let total = 0;
    for (const pizza of this.detallePedido) {
      total += pizza.subtotal;
    }
    this.costoTotal = total;
  }
}
