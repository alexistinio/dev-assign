import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Declare jQuery


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.css'
})
export class HomeViewComponent {
  ngAfterViewInit() {
    $(document).ready(() => {
      $('#carouselExample').carousel();
    });
  }
}
