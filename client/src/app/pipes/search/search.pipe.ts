import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	products = [];
	constructor(private productService: ProductService) {}
	transform(items: Product[], searchText: string, searchKey: string): any {
		if (!searchText) return items;
		if (!Array.isArray(items)) return [];
		// console.log(searchText);
		// this.productService.getAllProductsByInput(searchText).subscribe((p) => (this.products = p));
		// console.log('PRODUCTS FROM PIPE = ', this.products);
		// return this.products;
		return items.filter((p) => p[searchKey].toLowerCase().includes(searchText.toLowerCase()));
		// this.getAllProductsByInput(searchText);
		// return this.products;
	}
	getAllProductsByInput(searchText: string) {
		return this.productService.getAllProductsByInput(searchText).subscribe((p) => (this.products = p));
	}
}
