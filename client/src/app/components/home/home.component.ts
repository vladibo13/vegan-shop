import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	isLoggedIn;
	user;
	constructor(private authService: AuthService) {}

	ngOnInit(): void {
		this.isLoggedIn = this.authService.isLoggedIn();
		this.user = this.authService.userInfo();
		console.log(this.isLoggedIn);
		console.log('user = ', this.user);
	}
}
