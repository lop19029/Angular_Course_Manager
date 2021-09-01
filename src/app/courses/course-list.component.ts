import { Component, OnInit } from "@angular/core";
import { Course } from './course';
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    //underline means the variable must be mantained locally only
    _filterBy!: string;
    

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }


    //the content of the enveloped "Observable" from retrieveAll in 
    //the service is returned in the "next".
    //we suscribe and extract the content and send it to the _courses variable
    retrieveAll() : void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;

                //we make sure to declare this here because the app works asynchronously
                //so we don't want this to be called before _courses are retrieved from the service
                this.filteredCourses = this._courses;
            },

            //if error
            error: err => console.log('Error', err)
        })
    }

    //Define input
    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    //update input
    get filter(){
        return this._filterBy;
    }

}