import { Component, OnInit } from '@angular/core';
import {slideInDown, zoomInUp} from '../../animations/animation';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  animations: [
    slideInDown,
    zoomInUp
  ]
})
export class CvComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
