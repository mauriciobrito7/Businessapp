import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component';
//Services
import { ProductosService } from './services/productos.service';
@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

