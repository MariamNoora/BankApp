// import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent} from './registration/registration.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = 
[
  //login
  {
    path:'', component:LoginComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'registration', component:RegistrationComponent 
  },
  {
    path:'transaction', component:TransactionComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

