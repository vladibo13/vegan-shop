import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	submitted = false;
	loginForm: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.loginForm = this.fb.group({
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', Validators.required ]
		});
	}

	onSubmit() {
		this.submitted = true;
		console.warn(this.loginForm.value);
	}
}
