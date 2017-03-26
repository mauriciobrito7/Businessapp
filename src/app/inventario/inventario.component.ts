import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Productos } from '../services/productos';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  productos : Productos[];
  constructor(private productosService : ProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.getProductos();
  }

}
