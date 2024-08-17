import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1/';
  private accessToken = environment.spotifyToken; 

  constructor(private http: HttpClient) { }

  getTrack(trackId: string): Observable<any> {
    const headers = this.getHeader();

    return this.http.get<any>(`${this.apiUrl}tracks/${trackId}`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching track:', error);
        throw error;
      })
    );
  }

  getAlbum(albumId: string): Observable<any> {
    const headers = this.getHeader();

    return this.http.get<any>(`${this.apiUrl}albums/${albumId}`, {headers}).pipe(
      catchError(error => {
        console.error('Error fetching album:', error);
        throw error;
      })
    )
  }

  getHeader():HttpHeaders{
    return new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
  }
}
