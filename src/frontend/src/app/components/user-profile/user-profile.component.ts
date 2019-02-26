import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProfileDetailsModel } from '../../models/user-profile-details.model';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { OfficeService } from '../../services/office-service';
import { PowerpointService } from '../../services/powerpoint/powerpoint.service';

@Component({
  selector: 'tt-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {


  public get isInOffice(): Observable<boolean> {
    return this._officeService.isInOffice();
  }

  public formGroupUserProfile = this._formBuilder.group({
    initials: [''],
    fullName: [''],
    firstName: [''],
    lastName: [''],
    blog: [''],
    mail: [''],
    id: [''],
    twitter: ['']

  });

  constructor(private readonly _officeService: OfficeService,
              private readonly _powerPointService: PowerpointService,
              private readonly _formBuilder: FormBuilder, private readonly _activatedRoute: ActivatedRoute) {

  }

  public ngOnInit(): void {
    this._activatedRoute.data.pipe(
      map((data: { userProfile: UserProfileDetailsModel }) => data.userProfile)
    ).subscribe(userProfile => this.formGroupUserProfile.setValue(userProfile));
  }

  public sendToPowerPoint(key: string) {
    this._officeService.setSelection(this.formGroupUserProfile.value[key], Office.CoercionType.Text)
      .subscribe();
  }

}
