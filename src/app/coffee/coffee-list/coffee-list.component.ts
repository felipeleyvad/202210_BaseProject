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

  constructor(private coffeeService: CoffeeService) { }

  ngOnInit() {
    this.getCoffeeList();
  }

  getCoffeeList() {
    return this.coffeeService.getCoffeeList().subscribe(coffeeList => this.coffeeList = coffeeList);
  }
}
