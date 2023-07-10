import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticketcine',
  templateUrl: './ticketcine.component.html',
  styleUrls: ['./ticketcine.component.css']
})
export class TicketcineComponent {
  mostrar1!: boolean
  mostrar2!: boolean
  mostrar3!: boolean
  nombre!: string;
  numPersonas!: number;
  numBoletos!: number;
  tarjeta!: string;
  total: number = 0;
  aviso: string = '';
  cineForm!: FormGroup;

  opciones = ['Si', 'No']

  constructor(private readonly fb: FormBuilder) {
    this.cineForm = this.initForm();
  }

  initForm(): FormGroup {
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      numPersonas: ['', [Validators.required, Validators.min(1)]],
      numBoletos: ['', [Validators.required, Validators.min(1)]],
      tarjeta: ['', [Validators.required]],
    });

  }

  obtenerDatos(): void {
    this.nombre = this.cineForm.get('nombre')?.value;
    this.numBoletos = this.cineForm.get('numBoletos')?.value;
    this.numPersonas = this.cineForm.get('numPersonas')?.value;
    this.tarjeta = this.cineForm.get('tarjeta')?.value;

    if (this.numBoletos > (this.numPersonas * 7)) {
      this.aviso = "Solo por persona pueden comprar 7 boletos";
      this.mostrar1 = true
      this.mostrar2 = false
      this.mostrar3 = false
    } else {
      this.mostrar1 = false
      this.mostrar2 = true
      this.mostrar3 = false
      if (this.tarjeta === 'Si') {
        this.mostrar3 = true
        if (this.numBoletos <= 2) {
          this.total = ((this.numBoletos * 12) * .90);
        }
        else if (this.numBoletos > 2 && this.numBoletos < 5) {

          this.total = ((this.numBoletos * 12 * 0.9) * 0.90);
        }
        else if (this.numBoletos > 5) {
          this.total = ((this.numBoletos * 12 * 0.85) * .90);
        }
      } else {
        if (this.numBoletos <= 2) {
          this.total = (this.numBoletos * 12);
        }
        else if (this.numBoletos > 2 && this.numBoletos < 5) {
          this.total = ((this.numBoletos * 12) * .9);
        }
        else if (this.numBoletos > 5) {
          this.total = ((this.numBoletos * 12) * .85);
        }
      }
    }
  }
}
