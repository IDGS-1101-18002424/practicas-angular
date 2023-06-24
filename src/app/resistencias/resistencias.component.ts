import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencias',
  templateUrl: './resistencias.component.html',
  styleUrls: ['./resistencias.component.css']
})
export class ResistenciasComponent {
  colores: string[] = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey', 'withe'];
  toleranciaL: string[] = ['gold', 'silver'];
  banda1!: string;
  banda2!: string;
  banda3!: string;
  tolerancia!: string;
  valorR!: number;
  valorMax!: number;
  valorMin!: number;

  calcularResistencia(): void {
    const banda1V = this.colores.indexOf(this.banda1);
    const banda2V = this.colores.indexOf(this.banda2);
    const banda3V = this.colores.indexOf(this.banda3);
    const mult = Math.pow(10, banda3V);
    this.valorR = (banda1V * 10 + banda2V) * mult;

    if (this.tolerancia === 'Dorado') {
      this.valorMax = this.valorR * 1.05;
      this.valorMin = this.valorR * 0.95;
    } else if (this.tolerancia === 'Plata') {
      this.valorMax = this.valorR * 1.1;
      this.valorMin = this.valorR * 0.9;
    }
  }
}
