import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ns-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  language = {
    image: '',
    name: '',
    creator: '',
    year: 1970,
  };

  constructor(private router: Router, private location: Location) {
    const { language } = this.router.getCurrentNavigation().extras.state;
    this.language = language;
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

}
