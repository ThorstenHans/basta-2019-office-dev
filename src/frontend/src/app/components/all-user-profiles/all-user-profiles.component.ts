import { Component, Input, OnInit } from '@angular/core';
import { UserProfileListModel } from '../../models/user-profile-list.model';
import { UserProfileService } from '../../services/user-profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tt-all-user-components',
  templateUrl: './all-user-profiles.component.html',
})
export class AllUserProfilesComponent implements OnInit {

  @Input() public userProfiles: Array<UserProfileListModel> = [];

  constructor(private readonly _userProfileService: UserProfileService,
              private readonly _router: Router) {

  }

  public ngOnInit(): void {
    this._userProfileService.getAllUserProfiles()
      .subscribe(ups => this.userProfiles = ups);
  }

  public openProfile(profile: UserProfileListModel){
    return this._router.navigate(['/user-profile', profile.initials]);
  }
}
