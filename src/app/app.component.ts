import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AlbumsService]
})
export class AppComponent implements OnInit {
  albums: Array<any>;

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.albumsService.list(3).subscribe((albums) => {
      this.albums = albums;
    })
  }
}
