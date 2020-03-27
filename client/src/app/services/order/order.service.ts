import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/order';

@Injectable({
	providedIn: 'root'
})
export class OrderService {
	private orderURL = 'http://localhost:5000/api/order';
	constructor(private http: HttpClient) {}

	createOrder(order: Order) {
		return this.http.post<Order>(this.orderURL, order);
	}
}
