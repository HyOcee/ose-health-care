import { Component, Injectable, OnInit } from '@angular/core';
import { MyHttpService } from '../services/my-httpservice';

@Injectable()

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss','../../assets/scss/styles_2.scss']
})

export class AppointmentsComponent implements OnInit {
  public patients: any

  constructor(public _MyHttpService: MyHttpService) { 
    this._MyHttpService.getPatients().subscribe(
      (response) => {
        this.patients = response
      }, (error) => {
        console.log(error);
      })
  }

  ngOnInit(): void {
    
  }

}