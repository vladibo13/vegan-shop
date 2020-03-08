import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category/category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: [ './store.component.css' ]
})
export class StoreComponent implements OnInit {
	products: Product[] = [];
	filtredProducts: Product[] = [];
	categories: Category;
	searchText: string;
	category: string;
	unsubscribeSearchTextChanges: Subscription;
	constructor(
		private productService: ProductService,
		private searchService: SearchService,
		private categoryService: CategoryService,
		private route: ActivatedRoute
	) {
		this.route.queryParamMap.subscribe((params) => {
			this.category = params.get('category');
			console.log('CATEGORY', this.category);
			if (this.category) {
				this.filtredProducts = this.products.filter((p) => p.categoryID.type === this.category);
			} else {
				this.filtredProducts = this.products;
			}
			console.log('FILTRED', this.filtredProducts);
		});
		this.categoryService.getAllCategories().subscribe(
			(c: Category) => {
				this.categories = c;
			},
			(e) => console.log(e)
		);
		this.productService.getAllProducts().subscribe(
			(p: any) => {
				this.products = p;
				this.filtredProducts = this.products;
				console.log('filtred products = ', this.filtredProducts);
				console.log(this.products);
				console.log(this.products[0].categoryID.type);
			},
			(e) => console.log(e)
		);
	}

	ngOnInit(): void {
		this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue: string) => {
			this.searchText = newValue;
		});

		console.log('CATEGORY AFTER = ', this.filtredProducts);
	}

	ngOnDestroy(): void {
		this.unsubscribeSearchTextChanges.unsubscribe();
	}
	active: number;
	onClick(index: number) {
		this.active = index;
	}
}
