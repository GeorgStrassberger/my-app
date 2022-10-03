import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diashow',
  templateUrl: './diashow.component.html',
  styleUrls: ['./diashow.component.scss']
})
export class DiashowComponent implements OnInit {
  // Hier kommt mein Code rein
  constructor() { }

  ngOnInit(): void {
    this.updateImage();
  }

  images = ['33.jpg','html-css.png','11.jpg'];
  headlines = ['Bring enineering to the next level','Born to Code','Front End Developer'];
  currentImage = 0;
  showImage = true;


  updateImage() {
    setInterval( ()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10);
    },8000);
  }

}
