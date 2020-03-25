import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private productURL = 'http://localhost:5000/api/product';

	products: Product;

	constructor(private http: HttpClient) {}

	getAllProducts(): Observable<Product[]> {
		return this.http.get<Product[]>(this.productURL).pipe(catchError(this.handleError));
	}

	getAllProductsByCategory(category: string): Observable<Product[]> {
		let params = new HttpParams().set('search', category);
		return this.http.get<Product[]>(this.productURL + '/s/c', { params });
	}

	getAllProductsByInput(searchText: string): Observable<Product[]> {
		console.log('FROM INPUT = ', searchText);

		return this.http.get<Product[]>(`${this.productURL}/${searchText}`);
	}

	updateProductByID(product: Product) {
		return this.http.put<Product>(`${this.productURL}`, product);
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return observableThrowError(res.error || 'Server error');
	}
}
