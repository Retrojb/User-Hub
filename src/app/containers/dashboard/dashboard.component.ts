import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';
import { SocialMediaUsers } from './../../models/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  socialMediaUsers = new SocialMediaUsers();

  constructor(public OAuth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.socialMediaUsers = JSON.parse(localStorage.getItem('socialMediaUsers'));
    console.log(this.socialMediaUsers.image);
  }

  logout() {
    alert(1);
    this.OAuth.signOut()
    .then(data => {
      debugger;
      this.router.navigate([`/login`]);
    })
  }

}
