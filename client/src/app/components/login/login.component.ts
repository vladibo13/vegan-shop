import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	error: any;
	submitted = false;
	loginForm: FormGroup;
	user: string;

	constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

	get email() {
		return this.loginForm.get('email');
	}

	get password() {
		return this.loginForm.get('password');
	}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', Validators.required ]
		});
	}

	onLogin() {
		this.submitted = true;
		console.warn(this.loginForm.value);
		this.authService.loginUser(this.loginForm.value).subscribe(
			(role: string) => {
				console.log('role === ', role);
				if (role === 'admin') {
					this.router.navigate([ '/admin' ]);
					return;
				}
				this.router.navigate([ '/store' ]);
			},
			(e) => {
				this.error = e.message;
				console.log(this.error);
			}
		);
	}
}
