import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-slider',
  templateUrl: './horizontal-slider.component.html',
  styleUrls: ['./horizontal-slider.component.scss']
})

export class HorizontalSliderComponent implements OnInit {
  itemsPerSlide = 6;

  slides = [
    { image: 'assets/images/client.png'  },
    { image: 'assets/images/client2.png' },
    { image: 'assets/images/client3.png' },
    { image: 'assets/images/client4.png' },
    { image: 'assets/images/client5.png' },
    { image: 'assets/images/client6.png' },
    { image: 'assets/images/client7.png' },
    { image: 'assets/images/client8.png' },
    { image: 'assets/images/client9.png' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
