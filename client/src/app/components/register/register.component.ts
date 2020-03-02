import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerFormFirst: FormGroup;
	registerFormSecond: FormGroup;
	stepper = false;

	constructor(private fb: FormBuilder, private authService: AuthService) {}

	ngOnInit() {
		this.registerFormFirst = this.fb.group({
			id: [ , Validators.required ],
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', Validators.required ],
			passwordConfirm: [ '', Validators.required ]
		});

		this.registerFormSecond = this.fb.group({
			city: [ '', Validators.required ],
			street: [ '', Validators.required ],
			name: [ '', Validators.required ],
			lastName: [ '', Validators.required ]
		});
	}

	onRegisterFirst() {
		const { password, passwordConfirm } = this.registerFormFirst.value;
		console.log(this.registerFormFirst.status);
		if (!this.registerFormFirst.valid) return;
		if (password !== passwordConfirm) return;
		this.stepper = true;
	}

	onRegisterSecond() {
		const data = { ...this.registerFormFirst.value, ...this.registerFormSecond.value };
		delete data.passwordConfirm;
		this.authService.createUser(data).subscribe(() => console.log('registred success'), (e) => console.warn(e));
	}
}
