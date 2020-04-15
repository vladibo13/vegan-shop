import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError as observableThrowError, Subject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private shopUrl = 'http://localhost:5000/api/auth';
	private token: string;
	private isAuthenticated = false;
	private isAdmin = false;
	private authStatusListener = new Subject<boolean>();

	constructor(private http: HttpClient, private router: Router) {}

	getAuthStatusListener() {
		return this.authStatusListener.asObservable();
	}

	getToken() {
		return this.token;
	}

	getIsAuth() {
		return this.isAuthenticated;
	}
	getIsAdmin() {
		return this.isAdmin;
	}

	// register
	createUser(user: User): Observable<User> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post<User>(`${this.shopUrl}/register`, user).pipe(catchError(this.handleError));
	}

	//login
	loginUser(user: object): Observable<string> {
		return this.http
			.post<{ token: string; user: { name: string; _id: string; role: string } }>(`${this.shopUrl}/login`, user)
			.pipe(
				map((response) => {
					console.log('RESPONSE', response);
					const { token, user } = response;
					if (token) {
						console.log('LOGIN = ', user);
						this.token = token;
						localStorage.setItem('token', token);
						localStorage.setItem('user', user.name);
						localStorage.setItem('userID', user._id);
						localStorage.setItem('role', user.role);
						this.isAuthenticated = true;
						this.authStatusListener.next(true);
						return user.role;
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

	isAdminLogged() {
		return localStorage.getItem('role') === 'admin';
	}

	userIdInfo() {
		return localStorage.getItem('userID');
	}

	getUserDetails(id: string): Observable<User> {
		return this.http.get<User>(`${this.shopUrl}/user/${id}`);
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return observableThrowError(res.error || 'Server error');
	}
}
