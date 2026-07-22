import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm !: FormGroup
  isinEditMode: boolean = false
  productId !: string
  productobj !: IProduct
  DisableUpdatebtn: boolean = false

  constructor(private productservice: ProductsService,
    private router: Router,
    private Routes: ActivatedRoute,
    private snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.createproductform()
    this.patchproductdata()

    this.Routes.queryParams.subscribe(res => {
      if (res['cr'] == 0) {
        this.productForm.disable()
        this.DisableUpdatebtn = true
      } else {
        this.productForm.enable()
        this.DisableUpdatebtn = false
      }
    })
  }

  createproductform() {
    this.productForm = new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pprice: new FormControl(null, [Validators.required]),
      pstatus: new FormControl('In-Progress'),
      pdescription: new FormControl(null, [Validators.required]),
      pimage: new FormControl(null, [Validators.required]),
      canReturn: new FormControl(1)
    })
  }

  onproductsubmit() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched()
    } else {
      let product: IProduct = {
        ...this.productForm.value, pid: Date.now().toString()
      }
      this.productservice.addproducts(product).subscribe({
        next: res => {
          this.productForm.reset()
          this.snackbar.opensnackbar(res.msg)
          this.router.navigate(['products', product.pid], {
            queryParams: { cr: product.canReturn }
          })
        },
        error: err => {
          console.log(err);

        }
      })
    }

  }

  patchproductdata() {
    this.productId = this.Routes.snapshot.paramMap.get('productId')!
    if (this.productId) {
      this.isinEditMode = true
      this.productservice.getproductsById(this.productId).subscribe({
        next: res => {
          this.productForm.patchValue(res)
        }

      })
    }

  }

  onUpdate() {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched()
    } else {
      let updatedproduct: IProduct = {
        ...this.productForm.value, pid: this.productId
      }
      this.productservice.updateproducts(updatedproduct).subscribe({
        next: res => {
          this.productForm.reset()
          this.isinEditMode = false
          this.snackbar.opensnackbar(res.msg)
          this.router.navigate(['products', updatedproduct.pid], {
            queryParams: { cr: updatedproduct.canReturn }
          })
        },
        error: err => {
          console.log(err);

        }
      })
    }
  }
  canDeactivate(): boolean {
    if (!!this.productForm.dirty && this.isinEditMode) {
      return confirm(`Are You Sure You Want To Discard The Changes !!`)
    }
    return true
  }

}
