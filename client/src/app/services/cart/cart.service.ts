import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CartService {
	private cartUrl = 'http://localhost:5000/api/cart';
	private addProductURL = 'http://localhost:5000/api/cart/addProduct';
	constructor(private http: HttpClient) {}

	createCart(userID: string): Observable<object> {
		console.log('user id from service', userID);

		return this.http.post(this.cartUrl, { userID });
	}

	addProductToCart(cartInfo: object): Observable<object> {
		return this.http.post(this.addProductURL, { ...cartInfo });
	}

	getCartProducts() {
		return this.http.get(this.cartUrl).pipe(map((data) => data));
	}

	getCart() {
		return localStorage.getItem('cartID');
	}

	addToCart(product: object) {}
}
