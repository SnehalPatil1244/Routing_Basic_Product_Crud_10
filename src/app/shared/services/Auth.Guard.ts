import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate, CanActivateChild {
    private authservice = inject(AuthService)
    private router = inject(Router)
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!!this.authservice.getToken()) {
            return true
        } else {
            return this.router.createUrlTree([''])
        }
    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!!this.authservice.getToken()) {
            return true
        } else {
            return this.router.createUrlTree([''])
        }
    }

}