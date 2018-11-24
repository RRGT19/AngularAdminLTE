import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RegisterComponent} from './components/register/register.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},

  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard]},

  {path: 'page-not-found', component: PageNotFoundComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
