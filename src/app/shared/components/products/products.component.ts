import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { SnackbarService } from '../../services/snackbar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productId !: string
  productobj !: IProduct

  constructor(private productservice: ProductsService,
    private snackbar: SnackbarService,
    private routes: ActivatedRoute,
    private router: Router,
    private matdialog: MatDialog
  ) {
    this.routes.data.subscribe(res => {
      this.productobj = res['products']
      this.productId = res['products'].pid
    })
  }

  ngOnInit(): void {
    // this.getproducts()
  }

  getproducts() {
    // this.routes.params.subscribe(param => {
    //   this.productId = param['productId']
    //   if (this.productId) {
    //     this.productservice.getproductsById(this.productId)
    //       .subscribe({
    //         next: data => {
    //           this.productobj = data
    //         },
    //         error: err => {
    //           console.log(err);

    //         }
    //       })
    //   }
    // })
  }

  redirectToEdit() {
    this.router.navigate(['/products', this.productId, 'edit'], {
      queryParamsHandling: 'preserve',
      relativeTo: this.routes
    })

  }

  onRemove() {
    let config = new MatDialogConfig()
    config.width = '300px'
    config.disableClose = true
    config.data = `Are You Sure ? You Want To Remove This Product With Id ${this.productId}`
    let matref = this.matdialog.open(GetConfirmationComponent, config)
    matref.afterClosed().subscribe(res => {
      if (res) {
        this.productservice.removeproducts(this.productId).subscribe({
          next: res => {
            this.snackbar.opensnackbar(res.msg)
            this.productservice.getproducts().subscribe(res => {
              this.router.navigate(['/products', res[0].pid], {
                queryParams: { cr: res[0].canReturn }
              })
            })

          },
          error: err => {
            console.log(err);
          }
        })
      }
    })

  }

}
