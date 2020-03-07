import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-store-items',
	templateUrl: './store-items.component.html',
	styleUrls: [ './store-items.component.css' ]
})
export class StoreItemsComponent implements OnInit {
	@Input() product: Product;

	constructor() {}

	ngOnInit(): void {}
}
