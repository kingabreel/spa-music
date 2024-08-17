import { Component, Input, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sample-card.component.html',
  styleUrl: './sample-card.component.css'
})
export class SampleCardComponent implements OnInit {
  @Input() trackId: string = '';
  track: any;
  
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getTrack(this.trackId).subscribe(
      data => {
        this.track = data;
        console.log(this.track);
      },
      error => {
        console.error('Error fetching track:', error);
      }
    );
  }
}
