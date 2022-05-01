/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import * as fakerLib from '@faker-js/faker';

import { CoffeeListComponent } from './coffee-list.component';
import { Coffee } from '../coffee';

describe('CoffeeListComponent', () => {
  const faker = fakerLib.default;
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeeListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;

    let coffees = [
      new Coffee(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string()
      ),
      new Coffee(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string()
      ),
      new Coffee(
        faker.datatype.number(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.string(),
        faker.datatype.number(),
        faker.datatype.string()
      )
    ];

    fixture.componentInstance.coffeeList = coffees as Coffee[];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render three coffee registers', () => {
    const coffeeItems = debug.queryAll(By.css('tr.coffee-item'));
    const coffeeHeader = debug.queryAll(By.css('thead.table-dark'));

    expect(coffeeItems).toBeTruthy();
    expect(coffeeHeader).toBeTruthy();

    expect(coffeeHeader.length).toBe(1);
    expect(coffeeItems.length).toBe(3);
  });
});
