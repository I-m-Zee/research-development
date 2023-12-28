import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-revers-row-in-table',
  templateUrl: './revers-row-in-table.component.html',
  styleUrls: ['./revers-row-in-table.component.scss'],
  providers: [ProductService]
})
export class ReversRowInTableComponent {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
      this.products = data;
    });
  }

}
