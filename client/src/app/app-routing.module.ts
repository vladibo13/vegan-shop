import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { AuthGuard } from './guards/auth.guard';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'store', component: StoreComponent, canActivate: [ AuthGuard ] },
	{ path: 'order', component: OrderComponent, canActivate: [ AuthGuard ] },
	{ path: 'admin', component: AdminComponent, canActivate: [ AuthGuard ] }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
