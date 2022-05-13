import { Injectable }           from '@angular/core';
import { 
    Route, 
    Router, 
    CanLoad, 
    CanActivate,
    ActivatedRouteSnapshot, 
    RouterStateSnapshot }       from '@angular/router';
import { AuthService } from './service/auth.service';
import { CandidatService } from './service/candidat.service';

@Injectable()
export class ControleGuard implements CanLoad {
 
  constructor(private router: Router, public authService : AuthService) {
    console.log("AuthGuard constructor")
}

canLoad(route: Route): boolean {
  console.log(route.path+"     "+this.authService.isAdmin())
    if (route.path === "shifts") {
        return true;
    } else {
        return false;
    }        
}
}
