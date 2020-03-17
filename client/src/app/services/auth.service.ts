import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private shopUrl = 'http://localhost:5000/api/auth';
	private user: string;
	private token: string;
	private isAuthenticated = false;

	constructor(private http: HttpClient, private router: Router) {}

	getToken() {
		return this.token;
	}

	getIsAuth() {
		return this.isAuthenticated;
	}

	// register
	createUser(user: User): Observable<User> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post<User>(`${this.shopUrl}/register`, user).pipe(catchError(this.handleError));
	}

	//login
	loginUser(user: object): Observable<boolean> {
		return this.http
			.post<{ token: string; user: { name: string; _id: string } }>(`${this.shopUrl}/login`, user)
			.pipe(
				map((response) => {
					console.log(response);
					const { token, user } = response;
					if (token) {
						localStorage.setItem('token', token);
						localStorage.setItem('user', user.name);
						localStorage.setItem('userID', user._id);
						return true;
					}
				}),
				catchError(this.handleError)
			);
	}

	userInfo() {
		return localStorage.getItem('user');
	}

	isLoggedIn() {
		return !!localStorage.getItem('token');
	}

	userIdInfo() {
		return localStorage.getItem('userId');
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return observableThrowError(res.error || 'Server error');
	}
}
