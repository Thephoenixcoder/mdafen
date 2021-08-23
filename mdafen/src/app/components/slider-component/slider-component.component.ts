import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-slider-component',
  templateUrl: './slider-component.component.html',
  styleUrls: ['./slider-component.component.css']
})
export class SliderComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
