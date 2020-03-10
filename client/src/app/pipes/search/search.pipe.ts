import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/models/product';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	constructor() {}
	transform(items: Product[], searchText: string, searchKey: string): any {
		if (!searchText) return items;
		if (!Array.isArray(items)) return [];
		return items.filter((p) => p[searchKey].toLowerCase().includes(searchText.toLowerCase()));
	}
}
