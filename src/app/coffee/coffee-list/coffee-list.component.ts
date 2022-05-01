import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffeeList!: Coffee[]; 
  coffeeOriginType: number = 0;
  coffeeBlendType: number = 0;
  ORIGIN_COFFEE = 'Café de Origen';
  BLEND_COFFEE = 'Blend';

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffeeList();
  }

  getCoffeeList() {
    return this.coffeeService.getCoffeeList().subscribe(coffeeList => {
      this.coffeeList = coffeeList;
      coffeeList.forEach(coffeItem => {
        if (coffeItem.tipo === this.ORIGIN_COFFEE) {
          this.coffeeOriginType++;
        }
        if (coffeItem.tipo === this.BLEND_COFFEE) {
          this.coffeeBlendType++;
        }
      });
    });
  }
}
