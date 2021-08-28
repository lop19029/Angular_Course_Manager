import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    course!: Course;

    //ActivatedRoute get info of the active route
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {}

    ngOnInit(): void {
        //Get path variable from the active route
        this.course = this.courseService.retreiveById(this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(): void{
        this.courseService.save(this.course);
    }
}