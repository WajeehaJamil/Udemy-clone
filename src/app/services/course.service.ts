import { Injectable } from '@angular/core';

import { Course } from '../entities/course.entity';

@Injectable()
export class CourseService {

    private courses: Course[] ;

    constructor() {
       this.courses = [
            { id: 'c01', title: 'Java Programming Masterclass for Software Developers', author: 'Tim Buchalka and 2 others', price: '$29.99', photo: '../../assets/img/Courses/course2.jpg' },
            { id: 'c02', title: 'Logo Design in Adobe Illustrator - The Advanced Level', author: ' Daniel Evans, Published, Award Winning Logo Designer. 19 Years Experience', price: '$19.99', photo: '../../assets/img/Courses/course3.jpg' },
            { id: 'c03', title: 'Logo Design Basics and a Reallife Logo Project with AI', author : 'By Mehmet Emin Aykurt, Industrial Designer', price: '$12.99', photo: '../../assets/img/Courses/course1.jpg' },
            { id: 'c04', title: 'Adobe Illustrator CC 2019: Graphic Design Custom Brushes', author : 'By By Jagdish-Kumar Suthar, Freelance Software Tutor, Teacher', price: '$9.91', photo: '../../assets/img/Courses/adobe.jpg' },
            { id: 'c05', title: 'Speed, Efficiency, and Productivity in Adobe Illustrator', author : 'By Anne Bracker, Graphic Designer and Teacher, Adobe Max Speaker, Adobe Live', price: '$9.99', photo: '../../assets/img/Courses/speed.jpg' },
            { id: 'c06', title: 'The Power of Tools: Adobe Illustrator Edition', author : 'By Hans Fleurimont, Designer & Artist', price: '$10.99', photo: '../../assets/img/Courses/course4.jpg' },
            { id: 'c07', title: 'Learn React JS and Web API by creating a Full Stack Web App', author : 'By Vinay Kumar, Software Engineer', price: '$9.95', photo: '../../assets/img/Courses/course5.jpg' },

        ];
    }

    findAll(): Course[] {
        return this.courses;
    }

    find(id: string): Course {
        return this.courses[this.getSelectedIndex(id)];
    }
    

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.courses.length; i++) {
            if (this.courses[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}