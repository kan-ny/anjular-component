import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products = [
    {name: 'Nike'},
    {name: 'Adidas'},
    {name: 'puma'},
    {name: 'UnderArmor'},
    {name: 'New Balance'}
]

  constructor() { }

  ngOnInit() {
  }

}
