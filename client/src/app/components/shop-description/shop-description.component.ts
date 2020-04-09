import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
	selector: 'app-shop-description',
	templateUrl: './shop-description.component.html',
	styleUrls: [ './shop-description.component.css' ]
})
export class ShopDescriptionComponent implements OnInit {
	amountOfProductInDB: number;
	amountOfOrdersInDB: number;

	constructor(private productService: ProductService, private orderService: OrderService) {}

	ngOnInit(): void {
		this.productService.getAmountOfProducts().subscribe((amount: number) => {
			this.amountOfProductInDB = amount;
		});
		this.orderService.getAmountOfOrders().subscribe((amount: number) => {
			this.amountOfOrdersInDB = amount;
		});
	}
}
