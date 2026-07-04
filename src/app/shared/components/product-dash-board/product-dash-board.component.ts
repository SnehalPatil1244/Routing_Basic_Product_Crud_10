import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-product-dash-board',
  templateUrl: './product-dash-board.component.html',
  styleUrls: ['./product-dash-board.component.scss']
})
export class ProductDashBoardComponent implements OnInit {
  products: Array<IProduct> = []
  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.getproducts()
  }

  getproducts() {
    this.productservice.getproducts().subscribe({
      next: data => {
        this.products = data
      },
      error: err => {
        console.log(err);
      }
    })
  }

  trackByFun(index: number, product: IProduct) {
    return product.pid
  }



}
