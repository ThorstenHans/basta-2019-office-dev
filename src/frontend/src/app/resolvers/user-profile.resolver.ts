import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { UserProfileDetailsModel } from '../models/user-profile-details.model';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { UserProfileService } from '../services/user-profile.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolver implements Resolve<UserProfileDetailsModel> {
  constructor(private readonly _userProfileService: UserProfileService,
              private readonly _router: Router) {

  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserProfileDetailsModel> |Observable<never> {
    const initials = route.params['initials'];
    if (!initials) {
      this._router.navigate(['/start']);
      return EMPTY;
    }
    return this._userProfileService.findUserProfile(initials);
  }

}
