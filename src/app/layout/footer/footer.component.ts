import { Component, Input } from '@angular/core';
import { LandingImageCredits } from '../../landing-image/landing-image-generator';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input({required: true}) credits: LandingImageCredits | undefined = undefined;
}
