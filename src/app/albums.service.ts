import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../environments/environment';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlbumsService {

  constructor(private http: Http) { }

  list(last: number): Observable<any> {
    let url = environment.apiUrl + 'photos';
    return this.http
      .get(url)
      .map(res => {
        let last_id = null;
        let count = 0;
        return res.json().sort((n1, n2) => {
          if (n1.albumId < n2.albumId) {
            return 1;
          }
          if (n1.albumId > n2.albumId) {
            return -1;
          }
          return 0;
        }).filter((album) => {
          if (album.albumId != last_id) {
            last_id = album.albumId;
            count++;
            if (count <= last) {
              return true;
            }
          }
          return false;
        })
      });
  }

  get(last: number, albumId: number): Observable<any> {
    let url = environment.apiUrl + 'photos';
    return this.http
      .get(url)
      .map(res => {
        let last_id = null;
        let count = 0;
        return res.json().sort((n1, n2) => {
          if (n1.albumId < n2.albumId) {
            return 1;
          }
          if (n1.albumId > n2.albumId) {
            return -1;
          }
          return 0;
        }).filter((album) => {
          return album.albumId = albumId;
        }).filter((album) => {
          count++;
          if (count <= last) {
            return true;
          }
          return false;
        })
      });
  }
}
