import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoffeeComponent } from './coffee.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CoffeeComponent, CoffeeListComponent],
  declarations: [CoffeeComponent, CoffeeListComponent]
})
export class CoffeeModule { }
