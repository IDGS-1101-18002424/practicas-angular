import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  point1: { x: number, y: number } = { x: 0, y: 0 };
  point2: { x: number, y: number } = { x: 0, y: 0 };
  distance: number = 0;

  calculateDistance(): void {
    const deltaX = this.point2.x - this.point1.x;
    const deltaY = this.point2.y - this.point1.y;
    this.distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }
}




