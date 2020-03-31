import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) {}

	canActivate(route: ActivatedRouteSnapshot): boolean {
		let role = route.data.role;
		if (this.authService.isLoggedIn() && role === 'admin') return true;
		else {
			this.router.navigate([ '/register' ]);
			return false;
		}
	}
}
