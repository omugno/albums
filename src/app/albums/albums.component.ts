import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss'],
  providers: [AlbumsService]
})
export class AlbumsComponent implements OnInit {
  albums: Array<any>;

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.albumsService.list(3).subscribe((albums) => {
      this.albums = albums;
    })
  }
}
