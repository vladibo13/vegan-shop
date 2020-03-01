import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerFormFirst: FormGroup;
	registerFormSecond: FormGroup;
	stepper = false;

	constructor(private fb: FormBuilder) {}

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
		console.log(this.registerFormFirst.value);
		this.stepper = true;
	}

	onRegisterSecond() {
		console.log(this.registerFormFirst.value);
	}
}
