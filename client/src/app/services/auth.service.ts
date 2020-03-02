import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private shopUrl = 'http://localhost:5000';
	constructor(private http: HttpClient) {}
	createUser(user: User): void {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
	}
}
