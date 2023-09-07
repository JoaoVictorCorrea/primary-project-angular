import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service.service';
import { Observable, map } from 'rxjs';

interface Drink{
  idDrink: string,
  strDrinkThumb: string,
  strDrink: string
}

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  productsList$: Observable<Drink[]> = new Observable<Drink[]>();

  nomeVariavel = "oi variavel";

  constructor(
    private productService: ProductService
  ) { }
  
  ngOnInit(): void{

    this.productsList$ = this.productService.fecthData('lemon').pipe(
      map(response => {
        return response.drinks;
      })
    );
  }

  handleEvent($event: string) {
    console.log("evento aconteceu");
    console.log("evento passado: " + $event);
  }

}
