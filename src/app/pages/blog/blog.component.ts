import { Component, OnInit } from '@angular/core';
import {slideInDown} from '../../animations/animation';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  animations: [
    slideInDown
      ]
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
