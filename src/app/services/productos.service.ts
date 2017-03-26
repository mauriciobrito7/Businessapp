import { Injectable } from '@angular/core';
import { Productos } from './productos';

@Injectable()
export class ProductosService{
    constructor(){}
    getProductos(): Productos[]{
        return[{
            id:1,
            name:"BLU R1 HD",
            initialPrice:60,
            finalPrice:350000,
            stock:2,
            description:"muy bueno"
        },{
            id:2,
            name:"BLU R1 HD",
            initialPrice:60,
            finalPrice:350000,
            stock:1,
            description:"muy bueno"
        }];
    }
}