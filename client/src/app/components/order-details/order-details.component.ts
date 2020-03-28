import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from 'src/app/services/order/order.service';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-order-details',
	templateUrl: './order-details.component.html',
	styleUrls: [ './order-details.component.css' ]
})
export class OrderDetailsComponent implements OnInit {
	orderDetailsForm: FormGroup;
	cartID: string;
	userId: string;
	constructor(
		private fb: FormBuilder,
		private orderService: OrderService,
		private cartService: CartService,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.orderDetailsForm = this.fb.group({
			city: [ '', Validators.required ],
			street: [ '', Validators.required ],
			dateOfOrder: [ '', Validators.required ],
			card: [ '', Validators.required ]
		});
		this.cartID = this.cartService.getCart();
		this.userId = this.authService.userIdInfo();
		console.log('CART ID = ', this.cartID);
		console.log('USER ID = ', this.userId);
	}

	orderFinalize() {
		console.log(this.orderDetailsForm.value);
		this.orderService
			.createOrder({ ...this.orderDetailsForm.value, cart: this.cartID, user: this.userId })
			.subscribe((c: Order) => {
				console.log('created order = ', c);
			});
		localStorage.removeItem('cartID');
	}
}
