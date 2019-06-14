import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
import { StudentHeaderComponent } from './student-dashboard/student-header/student-header.component';
import { StudentCallToActionComponent } from './student-dashboard/student-call-to-action/student-call-to-action.component';
import { CourseSearchComponent } from './student-dashboard/course-search/course-search.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './landing-page/home/home.component';

const routes: Routes = [  
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentHomeComponent},
  {path: 'search', component: CourseSearchComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'course', component: CourseComponent},
  {path: 'checkout', component: CheckoutComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
