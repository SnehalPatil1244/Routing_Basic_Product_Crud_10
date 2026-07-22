import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { IProduct } from "../models/product";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProductsService } from "./products.service";


@Injectable({
    providedIn: "root"
})
export class productResolver implements Resolve<IProduct | IProduct[]> {
    private productservice = inject(ProductsService)
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IProduct | IProduct[] | Observable<IProduct | IProduct[]> | Promise<IProduct | IProduct[]> {
        return this.productservice.getproducts()
    }

}
