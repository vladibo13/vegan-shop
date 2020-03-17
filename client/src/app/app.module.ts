import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ShopDescriptionComponent } from './components/shop-description/shop-description.component';
import { StoreComponent } from './components/store/store.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { StoreItemsComponent } from './components/store-items/store-items.component';
import { StoreFilterComponent } from './components/store-filter/store-filter.component';
import { StoreModalComponent } from './components/store-modal/store-modal.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		NavbarComponent,
		HomeComponent,
		AboutComponent,
		ShopDescriptionComponent,
		StoreComponent,
		FooterComponent,
		SearchPipe,
		ProductsSearchComponent,
		StoreItemsComponent,
		StoreFilterComponent,
		StoreModalComponent
	],
	imports: [ BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, NgbModule ],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: TokenInterceptorService,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
