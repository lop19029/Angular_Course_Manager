import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    courseId!: string | null;

    //ActivatedRoute get info of the active route
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        //Get path variable from the active route
        this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    }
}