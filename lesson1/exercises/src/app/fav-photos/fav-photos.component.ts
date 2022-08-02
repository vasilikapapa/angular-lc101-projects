import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Images';
  image1 = 'https://th.bing.com/th/id/OIP.L8fuA9jviaHMS6CLf8ZEfwHaLu?pid=ImgDet&rs=1';
  image2 = 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';
  image3 = 'https://images.hdqwalls.com/download/oceans-8-movie-hong-kong-poster-vn-2160x3840.jpg';

  constructor() { }

  ngOnInit() {
  }

}