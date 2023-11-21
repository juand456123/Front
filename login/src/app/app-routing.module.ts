import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from './pages/register/register.component';
import { RegisteruserComponent } from './pages/registeruser/registeruser.component';

const routes: Routes = [
  { path: "", component: AppComponent, pathMatch: "full" },
  { path: "Login", component: LoginComponent, pathMatch: "full" },
  { path: "Register", component: RegisterComponent, pathMatch: "full" },
  { path: "RegisterUser", component: RegisteruserComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
