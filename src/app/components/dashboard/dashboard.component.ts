import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title = 'Dashboard';
  subTitle = 'Version 2.0';

  constructor() { }

  ngOnInit() {
  }

}
