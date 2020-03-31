import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) {}

	canActivate(route: ActivatedRouteSnapshot): boolean {
		const role = route.data.role;
		const isAuth = this.authService.isLoggedIn();
		if (!isAuth || role === 'admin') {
			this.router.navigate([ '/register' ]);
			return false;
		}
		return true;
	}
}
