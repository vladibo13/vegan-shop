import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: [ './store.component.css' ]
})
export class StoreComponent implements OnInit {
	products: Product[] = [];
	searchText: string;
	category: string;
	unsubscribeSearchTextChanges: Subscription;

	constructor(
		private productService: ProductService,
		private searchService: SearchService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue: string) => {
			this.searchText = newValue;
		});

		this.route.queryParamMap.subscribe((params) => {
			this.category = params.get('category');
			if (this.category) {
				this.getProductsByCategory();
			} else {
				this.getProducts();
			}
		});
	}
	getProductsByCategory() {
		this.productService.getAllProductsByCategory(this.category).subscribe((p) => (this.products = p));
	}
	getProducts() {
		this.productService.getAllProducts().subscribe(
			(p) => {
				this.products = p;
			},
			(e) => console.log(e)
		);
	}
	ngOnDestroy(): void {
		this.unsubscribeSearchTextChanges.unsubscribe();
	}
}
