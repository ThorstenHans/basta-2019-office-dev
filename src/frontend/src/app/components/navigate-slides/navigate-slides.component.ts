import { Component } from '@angular/core';
import { PowerpointService } from '../../services/powerpoint/powerpoint.service';

@Component({
  selector: 'tt-navigate-slides',
  templateUrl: './navigate-slides.component.html'
})
export class NavigateSlidesComponent {

  constructor(private readonly _powerPointService: PowerpointService) {

  }

  public goToFirstSlide() {
    this._powerPointService.goToFirstSlide().subscribe();
  }

  public goToLastSlide() {
    this._powerPointService.goToLastSlide().subscribe();
  }
}
