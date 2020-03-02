import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private shopUrl = 'http://localhost:5000/api/auth';

	constructor(private http: HttpClient) {}

	// register
	createUser(user: User): Observable<User> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http.post<User>(`${this.shopUrl}/register`, user).pipe(catchError(this.handleError));
	}

	//login
	loginUser(user: object): Observable<object> {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post<object>(`${this.shopUrl}/login`, user).pipe(catchError(this.handleError));
	}

	isLoggedIn() {
		return !!localStorage.getItem('token');
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return observableThrowError(res.error || 'Server error');
	}
}
