import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-order-details',
	templateUrl: './order-details.component.html',
	styleUrls: [ './order-details.component.css' ]
})
export class OrderDetailsComponent implements OnInit {
	orderDetailsForm: FormGroup;
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.orderDetailsForm = this.fb.group({
			city: [ '', Validators.required ],
			street: [ '', Validators.required ],
			shippingDate: [ '', Validators.required ],
			creditCard: [ '', Validators.required ]
		});
	}
	orderFinalize() {
		console.log(this.orderDetailsForm.value);
	}
}
