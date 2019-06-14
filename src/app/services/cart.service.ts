import { Injectable } from '@angular/core';

import { Course } from '../entities/course.entity';

@Injectable()
export class CartService {

    private cartItems: Course[];

    constructor() {
      
    }

    findAll(): Course[] {
        return this.cartItems;
    }
    add(item: Course){
        this.cartItems.push(item);
        
    }

    find(id: string): Course {
        return this.cartItems[this.getSelectedIndex(id)];
    }
        
    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.cartItems.length; i++) {
            if (this.cartItems[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}