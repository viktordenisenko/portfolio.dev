import { Component, OnInit } from '@angular/core';
import {fadeIn, slideInDown, zoomInDown} from '../../animations/animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    slideInDown,
    fadeIn,
    zoomInDown
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
