import { topics } from '../../../model/topic';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  topics=topics;
  constructor() { }

  ngOnInit() {
  }

}
