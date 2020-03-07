import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: [ './store.component.css' ]
})
export class StoreComponent implements OnInit {
	products: Product;
	searchText: string;
	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.productService.getAllProducts().subscribe((p) => {
			this.products = p;
			console.log(this.products);
		});
	}
}
