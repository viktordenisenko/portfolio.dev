import { Component, OnInit } from '@angular/core';
import {slideInDown} from '../../animations/animation';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    slideInDown
  ]
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
