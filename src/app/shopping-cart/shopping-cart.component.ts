import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Course } from '../entities/course.entity';
import { CourseService } from '../services/course.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private items: Course[] = [];
  private savedforlater: Course[] =[];
  private total: number = 0;
  private noOfitems :number =0;
  constructor(private router: Router, private courseService: CourseService) 
  {
   
  }

  ngOnInit() {
      this.loadCart1();
  }

  isZero(items:number): Boolean{
    if(items > 0)
      return false;
    else
      return true;
  }
  navigate() {
    this.router.navigate(['/checkout']);
}
load() {
  window.location.reload();
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

  loadSave(): void {
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

  save(id: string): void{
    var item: Course = this.courseService.find(id);
   // alert(item.title);
    var arr = JSON.parse(localStorage.getItem("save"));
    //var arr = JSON.parse(localStorage.getItem("cart"));
    for(var i=0; i<arr.length; i++){
      this.savedforlater.push(arr[i]);
    }
    this.savedforlater.push(item);
    alert(this.savedforlater);
    //this.remove(id);
    localStorage.setItem("saveForLater", JSON.stringify(this.savedforlater));
  }

  remove(id: string): void {
   let cart = JSON.parse(localStorage.getItem('cart'));
   
    for (var i = 0; i < cart.length; i++) {
        if (id == cart[i].id) {
           cart.splice(i, 1);
         break;
     }
   }
  localStorage.setItem("cart", JSON.stringify(cart));
  this.loadCart1();
  }
  removeFromSave(id: string): void {
    let save = JSON.parse(localStorage.getItem('save'));
    
     for (var i = 0; i < save.length; i++) {
         if (id == save[i].id) {
            save.splice(i, 1);
          break;
      }
    }
   localStorage.setItem("save", JSON.stringify(save));
   
   }
}
