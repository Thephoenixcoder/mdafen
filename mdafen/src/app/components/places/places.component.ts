import { Component, OnInit } from '@angular/core';
import SwiperCore, { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
