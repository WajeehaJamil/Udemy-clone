import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Course } from '../entities/course.entity';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-cart-notification',
  templateUrl: './cart-notification.component.html',
  styleUrls: ['./cart-notification.component.css']
})
export class CartNotificationComponent implements OnInit {
  public shouldShow = false;
  private items: Course[] = [];
  private total: number = 0;
  private noOfitems :number =0;
  constructor(private router: Router) { }

  ngOnInit() {
    this.loadCart1();
  }
  navigate() {
    this.router.navigate(['/cart']);
}

  loadCart1(): void {
    this.total = 0;
    this.items = [];
    //alert(localStorage.getItem("cart"));
    let cart = JSON.parse(localStorage.getItem("cart"));
    let price : number =0;
    this.noOfitems = cart.length;
    for (var i = 0; i < cart.length; i++) {
       let item = cart[i];
       this.items.push(item);
       price = parseFloat(item.price.slice(1));
       this.total += price;
    } 
  }

  getTitle(t:string): string{
    var title = t.slice(0, 27) + "...";
    return title;
  }

 
}
