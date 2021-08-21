import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import { SliderComponentComponent } from './components/slider-component/slider-component.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent }
]; // sets up routes constant where you define your routes
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SwiperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
