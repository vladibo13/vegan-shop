import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.registerForm = this.fb.group({
			id: [ , Validators.required ],
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', Validators.required ],
			passwordConfirm: [ '', Validators.required ],
			city: [ '', Validators.required ],
			street: [ '', Validators.required ],
			name: [ '', Validators.required ],
			lastName: [ '', Validators.required ]
		});
	}

	onSubmit() {
		console.log(this.registerForm.value);
	}
}
