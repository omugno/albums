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
  color: string;

  constructor(private albumsService: AlbumsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.color = (params.index == 0) ? 'green' : (params.index == 1) ? 'blue' : 'purple';
      this.albumsService.get(2, params.id).subscribe((photos) => {
        this.photos = photos;
      })
    });
  }
}
