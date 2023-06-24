import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DistanciaComponent } from "./distancia/distancia.component";

const routes: Routes = [
  // Otras rutas existentes...
  { path: 'home', component: DistanciaComponent },
  { path: 'distancia-dos-puntos', component: DistanciaComponent },
  // Otras rutas existentes...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
