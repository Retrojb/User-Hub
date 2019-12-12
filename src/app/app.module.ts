import { CommonConstants } from './constants/common-constants';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ApplicationsComponent } from './containers/applications/applications.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatFormFieldModule,
  MatMenuModule} from "@angular/material";
import { FooterComponent } from './components/footer/footer.component';
import { GenericModalComponent } from './components/generic-modal/generic-modal.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

export function socialMediaConfig() {
  const config = new AuthServiceConfig([
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('app -id')
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('app -id')
      }
  ]);
  return config;
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    ApplicationsComponent,
    AboutUsComponent,
    UserProfileComponent,
    FooterComponent,
    GenericModalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatSliderModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [
    CommonConstants,
    AuthService,
    {
      provide: AuthServiceConfig,
      useFactory: socialMediaConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
