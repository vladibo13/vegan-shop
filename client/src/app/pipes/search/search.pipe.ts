import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {
	transform(items: any, searchText: string): any {
		if (!searchText) return items;
		if (!Array.isArray(items)) return [];
		return items.filter((p) => p.pName.toLowerCase().includes(searchText.toLowerCase()));
	}
}
