import { Component,HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  scrolled: boolean = false;
  constructor() { }
 
  ngOnInit(): void {
  }

  @HostListener('window:scroll', [])
  // tslint:disable-next-line:typedef
  onWindowScroll() {
      this.scrolled = window.scrollY > 30;
  }
 

}
