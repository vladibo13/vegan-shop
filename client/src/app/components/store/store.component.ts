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
	filtredProducts: Product[] = [];
	searchText: string;
	category: string;
	unsubscribeSearchTextChanges: Subscription;

	constructor(
		private productService: ProductService,
		private searchService: SearchService,
		private route: ActivatedRoute
	) {
		this.productService.getAllProducts().subscribe(
			(p) => {
				this.products = p;
				this.filtredProducts = this.products;

				this.route.queryParamMap.subscribe((params) => {
					this.category = params.get('category');
					if (this.category) {
						this.filtredProducts = this.products.filter((p) => p.categoryID.type === this.category);
					} else {
						this.filtredProducts = this.products;
					}
				});
			},
			(e) => console.log(e)
		);
	}

	ngOnInit(): void {
		this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue: string) => {
			this.searchText = newValue;
		});
	}

	ngOnDestroy(): void {
		this.unsubscribeSearchTextChanges.unsubscribe();
	}
}
