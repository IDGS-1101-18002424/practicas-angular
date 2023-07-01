import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MenuComponent } from './grupos/menu/menu.component';
import { DistanciaComponent } from './distancia/distancia.component';
import { AppRoutingModule } from './app.routing module';
import { HomeComponent } from './home/home.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';





// Agrega otros módulos de Angular Material según tus necesidades

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DistanciaComponent,
    HomeComponent,
    ResistenciasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
