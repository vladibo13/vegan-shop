import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
	isLoggedIn: boolean;
	user: string;
	isOpenCart: boolean;
	constructor(private authService: AuthService, private cartService: CartService) {}

	ngOnInit(): void {
		this.isLoggedIn = this.authService.isLoggedIn();
		this.user = this.authService.userInfo();
		this.isOpenCart = this.cartService.isOpenCart();
		console.log(this.isLoggedIn);
		console.log('user = ', this.user);
	}
}
