import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name: any
  sub: any
  
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
  
      this.sub=this.route.params.subscribe(paramas => {
        this.name=paramas['name']
      })
    }
  
  }
  