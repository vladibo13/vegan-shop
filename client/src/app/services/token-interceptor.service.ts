import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = localStorage.getItem('token');
		if (token) {
			let tokenizedReq = req.clone({
				headers: req.headers.set('authorization', 'Bearer ' + token)
			});
			console.log(tokenizedReq);
			return next.handle(tokenizedReq);
		} else {
			return next.handle(req);
		}
	}
}
