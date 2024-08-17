import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private apiUrl = 'https://api.spotify.com/v1/tracks/';
  private accessToken = environment.spotifyToken; 

  constructor(private http: HttpClient) { }

  getTrack(trackId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });

    return this.http.get<any>(`${this.apiUrl}${trackId}`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching track:', error);
        throw error;
      })
    );
  }
}
