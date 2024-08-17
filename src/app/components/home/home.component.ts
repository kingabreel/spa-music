import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntegrantsCardComponent } from "../integrants-card/integrants-card.component";
import { SampleCardComponent } from "../sample-card/sample-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IntegrantsCardComponent, SampleCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images:string[] = [
    "/assets/band_symbol.jpg",
    "/assets/band.jpg",
    "/assets/band_2.jpg",
    "/assets/band_2019.jpg",
    "/assets/band_2022.jpg"
  ];

  index:number = 0;

  changeImg(n:number){
    if (n==-1) {
      if (this.index == 1 || this.index == 0) this.index = 4;
      else this.index--;
    } else {
      if (this.index == 4) this.index = 1;
      else this.index++;
    }
  }
}
