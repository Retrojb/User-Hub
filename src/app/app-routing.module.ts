import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { ApplicationsComponent } from './containers/applications/applications.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { title: 'Welcome to the Home Page'}
  },
  {
    path: 'applications', component: ApplicationsComponent, data: { title: 'Welcome to the Home Page'}
  },
  {
    path: 'about-us', component: AboutUsComponent, data: { title: 'Welcome to the Home Page'}
  },
  {
    path: 'user-profile', component: UserProfileComponent, data: { title: 'Welcome to the Home Page'}
  },
  {
    path: 'login', component: LoginComponent, data: { title: 'Login'}
  },
  {
    path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
