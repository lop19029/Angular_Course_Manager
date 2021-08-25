import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl:'./star.component.html',
    styleUrls: ['./star.component.css'] 
})
export class StarComponent implements OnChanges {
    //Variavel recebe informação de componente externo
    @Input()
    rating: number = 0;

    starWidth: number | undefined;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; 
    }

}