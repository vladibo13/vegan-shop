import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: [ './store.component.css' ]
})
export class StoreComponent implements OnInit {
	products: Product;
	categories: Category;
	searchText: string;
	unsubscribeSearchTextChanges: Subscription;
	constructor(
		private productService: ProductService,
		private searchService: SearchService,
		private categoryService: CategoryService
	) {}

	ngOnInit(): void {
		this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue: string) => {
			this.searchText = newValue;
		});
		this.categoryService.getAllCategories().subscribe(
			(c: Category) => {
				this.categories = c;
			},
			(e) => console.log(e)
		);
		this.productService.getAllProducts().subscribe(
			(p: Product) => {
				this.products = p;
				console.log(this.products);
			},
			(e) => console.log(e)
		);
	}

	ngOnDestroy(): void {
		this.unsubscribeSearchTextChanges.unsubscribe();
	}
	active: number;
	onClick(index: number) {
		this.active = index;
	}
}
