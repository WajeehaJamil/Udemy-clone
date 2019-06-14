import { Component, OnInit } from '@angular/core';
import { Course } from '../entities/course.entity';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  private items: Course[] = [];
  private total: number = 0;
  private noOfitems :number =0;

  constructor() { }

  ngOnInit() {
    this.loadCart1();
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
  private selectedLink: string="cards";        
    setradio(e: string): void   
    {  
      this.selectedLink = e;  
        
    }  

goToPaypal(){
  window.location.href = 'https://www.paypal.com';
}
  isSelected(name: string): boolean   
{  

      if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
          return false;  
}  

      return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  } 
}
