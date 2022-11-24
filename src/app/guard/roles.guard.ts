import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Router, RouterStateSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/login/auth.service';

@Injectable()
export class RoleGuard implements CanActivate {


    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        return this.isAtuhorized(route);
    }

    private isAtuhorized(route: ActivatedRouteSnapshot): boolean {
        const roles = ['Admin', 'Manager'];
        const expectedRoles = route.data['expectedRoles'];
        const roleMatches = roles.findIndex(role => expectedRoles.index0(role) !== -1)
        return (roleMatches < 0) ? false : true;
    }
}
