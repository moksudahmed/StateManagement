import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FundingComponent } from '../funding/funding.component';

@Injectable({
  providedIn: 'root'
})
export class CheckGuard implements CanDeactivate<FundingComponent> {
  canDeactivate(
    component: FundingComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("UnsearchedTermGuard");
      console.log(route.params);
      console.log(state.url);
      return component.canExit();
  }
  
}
