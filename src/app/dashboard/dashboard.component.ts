import { Component, Injectable, OnInit } from '@angular/core';
import { MyHttpService } from '../services/my-httpservice';

@Injectable()

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss','../../assets/scss/styles_2.scss']
})

export class DashboardComponent implements OnInit {

  public patients: any

  constructor(public _MyHttpService: MyHttpService) { }

  ngOnInit(): void {
    this._MyHttpService.getPatients().subscribe(
      (response) => {
        this.patients = response
      }, (error) => {
        console.log(error);
      })
  }

}
