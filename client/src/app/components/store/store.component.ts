import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { SearchService } from 'src/app/services/search/search.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';

@Component({
	selector: 'app-store',
	templateUrl: './store.component.html',
	styleUrls: [ './store.component.css' ]
})
export class StoreComponent implements OnInit {
	products: Product[] = [];
	searchText: string;
	category: string;
	cartProducts: any = [];
	unsubscribeSearchTextChanges: Subscription;
	cartID: string = localStorage.getItem('cartID');
	userID: string;
	isCollapsed = false;

	constructor(
		private productService: ProductService,
		private searchService: SearchService,
		private route: ActivatedRoute,
		private cartService: CartService,
		private authService: AuthService
	) {
		console.log('CONSTRUCTOR RUN');
	}

	ngOnInit(): void {
		console.log('NGONINIT RUN');
		this.unsubscribeSearchTextChanges = this.searchService.searchTextChanges.subscribe((newValue: string) => {
			this.searchText = newValue;
		});

		this.userID = this.authService.userIdInfo();

		if (!this.cartID) {
			this.cartService.createCart(this.userID).subscribe((cart: { _id: string }) => {
				console.log('cart', cart);
				localStorage.setItem('cartID', cart._id);
			});
		}

		// this.getCartProducts();
		this.getCartProductsById(this.cartID);

		this.route.queryParamMap.subscribe((params) => {
			this.category = params.get('category');
			if (this.category) {
				this.getProductsByCategory();
			} else {
				this.getProducts();
			}
		});
	}

	getProductsByCategory() {
		this.productService.getAllProductsByCategory(this.category).subscribe((p) => (this.products = p));
	}
	getProducts() {
		this.productService.getAllProducts().subscribe(
			(p) => {
				this.products = p;
			},
			(e) => console.log(e)
		);
	}
	getCartProducts() {
		this.cartService.getCartProducts().subscribe((p) => {
			console.log('P = ', p);

			this.cartProducts = p;
		});
	}

	getCartProductsById(cartId: string) {
		this.cartService.getCartProductsById(cartId).subscribe((p) => {
			console.log('cart products by id = ', p);
			this.cartProducts = p;
		});
	}

	updateCartProducts(cartId: string) {
		// this.getCartProducts();
		this.getCartProductsById(cartId);
	}
	onDeleted(cartID: string) {
		this.cartService.deleteCartProduct(cartID).subscribe((p) => {
			console.log('product deleted');
			console.log('Product DELETED ', p);
		});
		this.getCartProductsById(this.cartID);
	}
	ngOnDestroy(): void {
		this.unsubscribeSearchTextChanges.unsubscribe();
	}
}
