import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss','../../assets/scss/styles_1.scss']
})
export class HomepageComponent implements OnInit {

  navShow(element: any) {
    element.style.transform = 'translateX(0)'
}

  navHide(element: any){
    element.style.transform = 'translateX(100%)'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
