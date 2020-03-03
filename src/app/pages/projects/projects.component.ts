import { Component, OnInit } from '@angular/core';
import {fadeInUp, slideInDown} from '../../animations/animation';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    slideInDown,
    fadeInUp
  ]
})
export class ProjectsComponent implements OnInit {

  public project: any[] = [1, 2, 3, 4, 5 , 6, 7, 8, 9 , 10 , 11 , 12, 13, 14, 15, 16];

  constructor() { }

  ngOnInit() {
  }

}
