import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  '../../../assets/lib/bootstrap/css/bootstrap.min.css',
  '../../../assets/lib/animate/animate.min.css',
  '../../../assets/lib/font-awesome/css/font-awesome.min.css',
  '../../../assets/lib/ionicons/css/ionicons.min.css',
  '../../../assets/lib/magnific-popup/magnific-popup.css',
  '../../../assets/css/style.css',
  '../../../assets/lib/font-awesome/css/font-awesome.min.css',
  '../../../assets/lib/ionicons/css/ionicons.min.css',
  '../../../assets/lib/magnific-popup/magnific-popup.css']
})
export class HeaderComponent implements OnInit {
  closeResult: string;

  constructor() {}

  ngOnInit() { }

}
