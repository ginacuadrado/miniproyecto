import { Component, OnInit } from '@angular/core';
import { LecturaService } from './lectura.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [LecturaService]

})

export class DashboardComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
  }

}
