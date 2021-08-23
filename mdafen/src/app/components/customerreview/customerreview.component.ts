import { Component, OnInit } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Autoplay, Navigation, Pagination } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Navigation, Pagination, Autoplay]);
@Component({
  selector: 'app-customerreview',
  templateUrl: './customerreview.component.html',
  styleUrls: ['./customerreview.component.css']
})
export class CustomerreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
