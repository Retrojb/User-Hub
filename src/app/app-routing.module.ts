import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent, data: { title: 'Welcome to the Home Page'}
  },
  {
    path: 'applications', component: HomeComponent, data: { title: 'Welcome to the Home Page'}
  },
  {
    path: 'about-us', component: HomeComponent, data: { title: 'Welcome to the Home Page'}
  },
  {
    path: 'user-profile', component: HomeComponent, data: { title: 'Welcome to the Home Page'}
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
