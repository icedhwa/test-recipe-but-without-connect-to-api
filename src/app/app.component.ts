import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GetLandingImage, LandingImageCredits } from './landing-image/landing-image-generator';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FooterComponent]
})
export class AppComponent implements OnInit {
  public landingImg: string = "";
  public landingCredits: LandingImageCredits | undefined;
  
  ngOnInit(): void {
    const landing = GetLandingImage();
    this.landingImg = landing.landingImgPath;
    this.landingCredits = landing.landingImgCredits;
  }
}
