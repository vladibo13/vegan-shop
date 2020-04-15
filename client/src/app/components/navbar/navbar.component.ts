import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit, OnDestroy {
	public isMenuCollapsed = true;
	public userIsAuth = false;
	public isAdmin = null;
	public isAuth = null;

	private authListenerSubs: Subscription;

	constructor(private authService: AuthService, private router: Router) {}

	logout() {
		console.log('loggin out');
		localStorage.clear();
		this.isAuth = this.authService.isLoggedIn();
		this.isAdmin = this.authService.isAdminLogged();
		this.router.navigate([ '/login' ]);
	}

	ngOnInit(): void {
		this.isAuth = this.authService.isLoggedIn();
	}

	ngDoCheck() {
		if (this.isAuth !== this.authService.isLoggedIn() || this.isAdmin !== this.authService.isAdminLogged()) {
			this.isAuth = this.authService.isLoggedIn();
			this.isAdmin = this.authService.isAdminLogged();
		}
	}

	ngOnDestroy(): void {
		this.authListenerSubs.unsubscribe();
	}
}
