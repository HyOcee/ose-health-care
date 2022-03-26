import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../services/my-httpservice';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss','../../assets/scss/styles_2.scss']
})
export class ActivitiesComponent implements OnInit {
  public activities: any
  constructor(public _MyHttpService: MyHttpService) { }

  ngOnInit(): void {
    this._MyHttpService.getActivities().subscribe(
      (response) => {
        this.activities = response;
        console.log(this.activities)
      },
      (error) => {console.log(error);})
  }

}
