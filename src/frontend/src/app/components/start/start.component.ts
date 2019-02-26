import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { OfficeService } from '../../services/office-service';

@Component({
  selector: 'tt-start',
  templateUrl: './start.component.html'
})
export class StartComponent {


  public get isInPowerPoint(): Observable<boolean> {
    return this._officeService.isInPowerPoint();
  }

  constructor(private readonly _officeService: OfficeService) {

  }

}
