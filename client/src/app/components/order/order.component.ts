import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: [ './order.component.css' ]
})
export class OrderComponent implements OnInit {
	cartProducts: any = [];
	constructor(private location: Location, private cartService: CartService) {}
	getCartProducts() {
		this.cartService.getCartProducts().subscribe((p) => {
			console.log('P = ', p);

			this.cartProducts = p;
		});
	}
	goBack() {
		this.location.back();
	}
	ngOnInit(): void {
		this.getCartProducts();
	}
}
