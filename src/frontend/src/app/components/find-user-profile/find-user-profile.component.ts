import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProfileService } from '../../services/user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tt-find-user-profile',
  templateUrl: './find-user-profile.component.html'
})
export class FindUserProfileComponent {

  public nothingFound: boolean;

  public formModel: FormGroup = this._formBuilder.group({
    query: ['']
  });

  constructor(private readonly _userProfileService: UserProfileService,
              private readonly _formBuilder: FormBuilder,
              private readonly _router: Router) {

  }

  public findUserProfile() {
    this.nothingFound = false;
    this._userProfileService.findUserProfile(this.formModel.value.query)
      .subscribe(found => {
        if (found == null) {
          this.nothingFound = true;
        } else {
          this._router.navigate(['/user-profile', found.initials]);
        }
      });
  }
}
