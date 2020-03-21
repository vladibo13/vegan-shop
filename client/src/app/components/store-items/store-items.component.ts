import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-store-items',
	templateUrl: './store-items.component.html',
	styleUrls: [ './store-items.component.css' ]
})
export class StoreItemsComponent implements OnInit {
	@Input() product: Product;
	@Output() onUpdateCartProducts = new EventEmitter();
	constructor() {}
	onUpdateCartProduct() {
		this.onUpdateCartProducts.emit();
	}
	ngOnInit(): void {}

	addToCart() {}
}
