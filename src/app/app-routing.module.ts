import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { RegisterComponent } from '@pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginUsersComponent } from '@pages/login-users/login-users.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginGuard } from './guards/login.guard';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { ProductComponent } from './pages/product/product.component';
import { ProvideradmComponent } from './pages/provideradm/provideradm.component';
import { ProviderQuotesComponent } from './pages/provider-quotes/provider-quotes.component';
import { CarrierComponent } from "./pages/carrier/carrier.component";
import { ConfirmComponent } from "@pages/confirm/confirm.component";
import {PaymentComponent} from '@pages/payment/payment.component';
import {ResumePurchaseComponent} from '@pages/resumePurchase/resume-purchase/resume-purchase.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: HomeComponent},
  {path: 'transporte', component: CarrierComponent},
  {path: 'crea-tu-cuenta', component: RegistrationComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'ingresa', component: LoginComponent},
  {path: 'ingreso', component: LoginUsersComponent },
  {path: 'resumen', component: ResumePurchaseComponent },
  {path: 'pago', component: PaymentComponent},
  {path: 'confirma-pedido', component: ConfirmComponent},
  {path: 'mi-cuenta', component: AccountComponent, canActivate: [LoginGuard]},
  {path: 'mis-cotizaciones', component: QuotesComponent, canActivate: [LoginGuard]},
  {path: 'cotizaciones-solicitadas', component: ProviderQuotesComponent, canActivate: [LoginGuard]},
  {path: 'ver-dashboard', component: EstadisticaComponent, canActivate: [LoginGuard]},
  {path: 'ver-subcategoria', component: SubcategoryComponent, canActivate: [LoginGuard]},
  {path: 'ver-producto', component: ProductComponent, canActivate: [LoginGuard]},
  {path: 'ver-proveedor', component: ProvideradmComponent, canActivate: [LoginGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
