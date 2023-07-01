import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DistanciaComponent } from "./distancia/distancia.component";
import { ResistenciasComponent } from "./resistencias/resistencias.component";
import { HomeComponent } from "./home/home.component";
import { PedidoComponent } from "./pedido/pedido.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'distancia-dos-puntos', component: DistanciaComponent },
  { path: 'resistencias', component: ResistenciasComponent },
  { path: 'pedidopizzas', component: PedidoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
