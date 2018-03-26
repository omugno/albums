import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AlbumComponent } from './album/album.component';
import { AlbumsComponent } from './albums/albums.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
