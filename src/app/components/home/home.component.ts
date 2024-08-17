import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IntegrantsCardComponent } from "../integrants-card/integrants-card.component";
import { SampleCardComponent } from "../sample-card/sample-card.component";
import { AlbumCardComponent } from "../album-card/album-card.component";
import { NextShowsCardComponent } from "../next-shows-card/next-shows-card.component";
import { Show } from "../../model/show";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, IntegrantsCardComponent, SampleCardComponent, AlbumCardComponent, NextShowsCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images:string[] = [
    "/assets/white_scorpions.jpg",
    "/assets/band.jpg",
    "/assets/band_2.jpg",
    "/assets/band_2019.jpg",
    "/assets/band_2022.jpg"
  ];
  index:number = 0;

  showsDesc:Show[] = [
    {"name": "Scorpions com Phil Campbell and the Bastard Sons", "place": "Nürnberg", "dateDay": "11", "month": "Set", "hour": "20:00"},
    {"name": "Scorpions com Phil Campbell and the Bastard Sons", "place": "Hamburg", "dateDay": "13", "month": "Set", "hour": "20:00"},
    {"name": "Scorpions", "place": "Leipzig", "dateDay": "15", "month": "Set", "hour": "19:00"},
    {"name": "Scorpions com Phil Campbell and the Bastard Sons", "place": "LEIPZIG", "dateDay": "15", "month": "Set", "hour": "20:00"},
    {"name": "Scorpions com Phil Campbell and the Bastard Sons", "place": "KÖLN", "dateDay": "18", "month": "Set", "hour": "20:00"},
    {"name": "Scorpions com Phil Campbell and the Bastard Sons", "place": "FRANKFURT", "dateDay": "20", "month": "Set", "hour": "20:00"}
  ]
  actualShowIndex:number = 0;
  actualShow:Show = this.showsDesc[this.actualShowIndex];

  changeImg(n:number){
    if (n==-1) {
      if (this.index == 1 || this.index == 0) this.index = 4;
      else this.index--;
    } else {
      if (this.index == 4) this.index = 1;
      else this.index++;
    }
  }

  changeShow(n:number){
    if (n==-1) {
      if (this.actualShowIndex == 0) this.actualShowIndex = 5;
      else this.actualShowIndex--;
    } else {
      if (this.actualShowIndex == 5) this.actualShowIndex = 0;
      else this.actualShowIndex++;
    }
    this.actualShow = this.showsDesc[this.actualShowIndex];
  }
}
