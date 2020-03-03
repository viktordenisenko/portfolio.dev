import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {fadeIn, slideInDown} from '../../../../animations/animation';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    slideInDown,
    fadeIn
  ]
})
export class ProjectComponent implements OnInit {
  public projectId = '';
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.projectId = params.projectId;
    });

  }

}
