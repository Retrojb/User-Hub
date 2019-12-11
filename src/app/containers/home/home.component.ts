import { Component, OnInit } from '@angular/core';
import { CommonConstants } from './../../constants/common-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = this.common.title;

  constructor(private common: CommonConstants) { }

  ngOnInit() {
  }


}
