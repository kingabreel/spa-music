import { Component, Input } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.css'
})
export class AlbumCardComponent {
  @Input() albumId: string = '';
  album: any;
  
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.spotifyService.getAlbum(this.albumId).subscribe(
      data => {
        this.album = data;
        console.log(this.album);
      },
      error => {
        console.error('Error fetching album:', error);
      }
    );
  }
}
