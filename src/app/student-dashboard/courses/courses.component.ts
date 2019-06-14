import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css',
  '../../../assets/lib/bootstrap/css/bootstrap.min.css',
  '../../../assets/lib/animate/animate.min.css',
  '../../../assets/lib/font-awesome/css/font-awesome.min.css',
  '../../../assets/lib/ionicons/css/ionicons.min.css',
  '../../../assets/lib/magnific-popup/magnific-popup.css',
  '../../../assets/css/style.css']
})
export class CoursesComponent implements OnInit {
  images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor() { }

  ngOnInit() {
  }
}
