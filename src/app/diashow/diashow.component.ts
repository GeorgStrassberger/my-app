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

  images = ['1.png','2.jpg','3.jpg'];
  headlines = ['Bring enineering to the next level','Born to Code','FrontEnd-Developer'];
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
