import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss','../../assets/scss/styles_1.scss']
})
export class ContactUsComponent implements OnInit {
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
