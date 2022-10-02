import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
// Hier kommt mein Code rein
  images = ['1.png','2.jpg','3.jpg', '4.jpg'];
  currentImage = 0;

  ngOnInit(){
    this.updateImage();
  }

  updateImage() {
    setInterval( ()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
    },8000);
  }


}
