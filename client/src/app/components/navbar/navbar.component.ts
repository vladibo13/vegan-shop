import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: [ './navbar.component.css' ]
})
export class NavbarComponent implements OnInit, OnDestroy {
	public isMenuCollapsed = true;
	public userIsAuth = false;
	public isAuth = null;

	private authListenerSubs: Subscription;

	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		// this.isAuth = this.authService.getIsAuth();
		// this.authListenerSubs = this.authService
		// 	.getAuthStatusListener()
		// 	.subscribe((isAuth) => (this.userIsAuth = isAuth));
		this.isAuth = localStorage.getItem('token');
	}

	ngOnDestroy(): void {
		this.authListenerSubs.unsubscribe();
	}
}
