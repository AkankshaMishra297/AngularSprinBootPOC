import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListuserComponent } from './components/listuser/listuser.component';
import { RegisterComponent } from './components/register/register.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:"list",component:ListuserComponent},
  {path:"register",component:RegisterComponent},
  {path:"edit",component:EdituserComponent},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
