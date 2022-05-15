import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'any',
})
export class ControleguardGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {
    alert('works');
  }

  canLoad(route: Route): boolean {
    const url: string = route.path;
    console.log('Url:' + url);
    if (this.authService.isAdmin()) {
      return true;
    }

    this.router.navigate(['candidats']);
    return false;
  }
}
