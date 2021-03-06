import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ContentComponent} from './components/content/content.component';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {BannerComponent} from './components/banner/banner.component';
import {ProductsComponent} from './components/products/products.component';
import {FaqsComponent} from './components/faqs/faqs.component';
import {RegistrationComponent} from '@pages/registration/registration.component';
import {RegisterComponent} from '@pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {LoginUsersComponent} from '@pages/login-users/login-users.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpRequestService} from './provider/http-request/http-request.service';
import {HttpClientModule} from '@angular/common/http';
import { MustMatchDirective } from './directives/must-match.directive';
import { AccountComponent } from './pages/account/account.component';
import { CryptPipe } from './pipes/crypt.pipe';
import { ProductsDirective } from './directives/products.directive';
import {FormComponent} from './components/quotation/form/form.component';
import { CartComponent } from './components/quotation/cart/cart.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { QuotesComponent } from './pages/quotes/quotes.component';
import { BaseComponent } from './components/base/base.component';
import { EstadisticaComponent } from './pages/estadistica/estadistica.component';
import { ChartsModule } from 'ng2-charts';
import { SubcategoryComponent } from './pages/subcategory/subcategory.component';
import { ProductComponent } from './pages/product/product.component';
import { ProvideradmComponent } from './pages/provideradm/provideradm.component';
import {AccountMenuComponent} from './components/header/account-menu/account-menu.component';
import { ProviderQuotesComponent } from './pages/provider-quotes/provider-quotes.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuoteStatusPipe } from './pipes/quote-status.pipe';
import { CarrierComponent } from './pages/carrier/carrier.component';
import { CarriersComponent } from './components/carriers/carriers.component';
import { resumeProductsComponent } from './components/resumeProducts/resumeProducts.component';
import { CarrierDirective } from './directives/carrier.directive';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AuthEffects } from './store/auth/effects/auth.effects';
import { reducers } from './store/app.states';
import { CarrierEffects } from './store/carrier/effects/carrier.effects';
import { PaymentComponent } from './pages/payment/payment.component';
import { NgPaymentCardModule } from 'ng-payment-card';
import { ResumePurchaseComponent } from './pages/resumePurchase/resume-purchase/resume-purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    PageNotFoundComponent,
    BannerComponent,
    ProductsComponent,
    FaqsComponent,
    RegistrationComponent,
    RegisterComponent,
    LoginComponent,
    MustMatchDirective,
    AccountComponent,
    CryptPipe,
    ProductsDirective,
    FormComponent,
    CartComponent,
    QuotesComponent,
    BaseComponent,
    EstadisticaComponent,
    SubcategoryComponent,
    ProductComponent,
    ProvideradmComponent,
    AccountMenuComponent,
    ProviderQuotesComponent,
    QuoteStatusPipe,
    CarrierComponent,
    CarriersComponent,
    CarrierDirective,
    ConfirmComponent,
    LoginUsersComponent,
    PaymentComponent,
    resumeProductsComponent,
    ResumePurchaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxWebstorageModule.forRoot(),
    NgbModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects, CarrierEffects]),
    NgPaymentCardModule
  ],
  providers: [HttpRequestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
