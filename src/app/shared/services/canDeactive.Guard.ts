import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { IcanDeactive } from "../models/canDeactivate";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn : "root"
})
export class canDeactivatecomponent implements CanDeactivate<IcanDeactive>{
    canDeactivate(component: IcanDeactive, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
       return component.canDeactivate()
    }

}