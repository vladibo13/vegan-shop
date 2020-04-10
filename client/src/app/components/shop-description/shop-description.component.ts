import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order/order.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
	selector: 'app-shop-description',
	templateUrl: './shop-description.component.html',
	styleUrls: [ './shop-description.component.css' ]
})
export class ShopDescriptionComponent implements OnInit {
	@Input() isOpenCart: boolean;

	amountOfProductInDB: number;
	amountOfOrdersInDB: number;
	totalPrice: number;
	cartID: string = localStorage.getItem('cartID');

	constructor(
		private productService: ProductService,
		private orderService: OrderService,
		private cartService: CartService
	) {}

	ngOnInit(): void {
		this.productService.getAmountOfProducts().subscribe((amount: number) => {
			this.amountOfProductInDB = amount;
		});
		this.orderService.getAmountOfOrders().subscribe((amount: number) => {
			this.amountOfOrdersInDB = amount;
		});

		this.cartService.getTotalPrice(this.cartID).subscribe((total: number) => {
			this.totalPrice = total;
		});
	}
}
