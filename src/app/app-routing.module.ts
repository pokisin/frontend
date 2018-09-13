import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes = [
  {path:'',redirectTo:'/users',pathMatch:'full'},
  {path:'appComponent', component:AppComponent},
  {path:'users', component:UserComponent},
  {path:'usersComponent', component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}