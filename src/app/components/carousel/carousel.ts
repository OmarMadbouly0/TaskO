import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  images :string[] = [
    'dahlia.webp',
    'lotus.webp',
    'rose.webp',
    'orchid.webp'
  ];
  currentIndex :number = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToImage(index: number) {
    this.currentIndex = index;
  }

  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 2500);
  }
}
