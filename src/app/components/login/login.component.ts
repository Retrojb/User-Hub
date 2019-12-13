import { GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider } from 'angularx-social-login';
import { SocialLoginService } from './../../services/social-login.service';
import { AuthService } from 'angularx-social-login';
import { SocialMediaUsers } from './../../models/users';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage = 'Error';
  response;
  socialMediaUsers = new SocialMediaUsers();

  constructor(
    public OAuth: AuthService,
    private SocialLoginService: SocialLoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.OAuth.signIn(socialPlatformProvider)
    .then(socialMediaUsers => {
      console.log(socialProvider, socialMediaUsers);
      console.log(socialMediaUsers);
      this.SavesResponse(socialMediaUsers);
    });
  }
  SavesResponse(socialMediaUsers: SocialUser) {
    this.SocialLoginService.savesResponse(socialMediaUsers)
    .subscribe((res: any) => {
      debugger;
      console.log(res);
      this.socialMediaUsers = res;
      this.response = res.userDetail;
      localStorage.setItem('socialMediaUsers', JSON.stringify(this.socialMediaUsers));
      console.log(localStorage.setItem('socialMediaUsers', JSON.stringify(this.socialMediaUsers)));
      this.router.navigate(['/dashboard']);
    });
}

}
