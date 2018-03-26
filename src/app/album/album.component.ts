import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [AlbumsService]
})
export class AlbumComponent implements OnInit {
  photos: Array<any>;

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.albumsService.get(2, params.id).subscribe((photos) => {
        this.photos = photos;
      })
    });

  }
}
