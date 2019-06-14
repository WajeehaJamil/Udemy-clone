import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../entities/course.entity';
import { CourseService } from '../services/course.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private courses: Course[];
  private cartItems: Course[] = [];
  @Input() title : string;
 
  
  constructor(private courseService: CourseService,private router: Router) { }

  ngOnInit() {
    this.courses = this.courseService.findAll();
  }

  

  showCart(){
   // window.location.replace('http://localhost:4200/cart'); 
   this.router.navigate(['/cart']);
  }

  load() {
    window.location.reload();
  }

  addCart(id: string){
    var item: Course = this.courseService.find(id);
    let index: number = -1; 
    var arr = JSON.parse(localStorage.getItem("cart"));
    for(var i=0; i<arr.length; i++){
      this.cartItems.push(arr[i]);
    }
    if(this.cartItems.length > 0) {
      for(var i=0; i<this.cartItems.length; i++){
        if(item.id == this.cartItems[i].id) {
          index = i;
          var title = "Course \'" + item.title + "\' is already in your Cart";
          this.show(title);
          break;
        }
      }
      if(index == -1) {
        
        this.cartItems.push(item);
        var title = "Added \'" + item.title + "\' to your Cart";
        this.show(title);
      }
    } else {
      this.cartItems.push(item);
      var title = "Added \'" + item.title + "\' to your Cart";
      this.show(title);
    }  
    localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }
  show(title: string) {
    this.title= title;
  }
  
}
