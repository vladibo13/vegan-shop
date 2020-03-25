import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
	selector: 'app-admin-edit',
	templateUrl: './admin-edit.component.html',
	styleUrls: [ './admin-edit.component.css' ]
})
export class AdminEditComponent implements OnInit {
	@Input() product;

	constructor(private fb: FormBuilder, private productService: ProductService) {}

	ngOnInit(): void {}

	edit() {
		console.log('EDITING = ', this.product);
		this.productService.updateProductByID(this.product).subscribe();
	}
}
