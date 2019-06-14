import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { CartService } from './services/cart.service';
import { CourseService } from './services/course.service';
import { HomeComponent } from './landing-page/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
import { StudentHeaderComponent } from './student-dashboard/student-header/student-header.component';
import { StudentCallToActionComponent } from './student-dashboard/student-call-to-action/student-call-to-action.component';
import { CourseSearchComponent } from './student-dashboard/course-search/course-search.component';
import { HeaderComponent} from './landing-page/header/header.component';
import { IntroComponent } from './landing-page/intro/intro.component';
import { AboutComponent } from './landing-page/about/about.component';
import { ProductFeaturesComponent } from './landing-page/product-features/product-features.component';
import { CallToActionComponent } from './landing-page/call-to-action/call-to-action.component';
import { ClientsComponent } from './landing-page/clients/clients.component';
import { GalleryComponent } from './landing-page/gallery/gallery.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { Footer1Component } from './wajeeha-footer/wajeeha-footer.component';
import { CourseComponent } from './course/course.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { Routes, RouterModule } from '@angular/router';
import { LoginDialogComponent } from './login-modal/login-modal.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentHomeComponent},
  {path: 'search', component: CourseSearchComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'courses', component: CourseComponent},
  {path: 'checkout', component: CheckoutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    CartNotificationComponent,
    DialogComponent,
    StudentHomeComponent,
    StudentHeaderComponent,
    StudentCallToActionComponent,
    CourseSearchComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ProductFeaturesComponent,
    CallToActionComponent,
    ClientsComponent,
    GalleryComponent,
    FooterComponent,
    CourseComponent,
    Footer1Component,
    LoginDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [CartService, CourseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
