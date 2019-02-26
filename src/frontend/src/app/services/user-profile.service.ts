import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfileListModel } from '../models/user-profile-list.model';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { UserProfileDetailsModel } from '../models/user-profile-details.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private readonly _httpClient: HttpClient) {

  }

  public getAllUserProfiles(): Observable<Array<UserProfileListModel>> {
    const requestUrl = `${environment.api.root}/profiles`;
    return this._httpClient.get<Array<UserProfileListModel>>(requestUrl);
  }

  public findUserProfile(initials: string): Observable<UserProfileDetailsModel> {
    const requestUrl = `${environment.api.root}/profiles/${encodeURIComponent(initials)}`;
    return this._httpClient.get<UserProfileDetailsModel>(requestUrl)
      .pipe(
        catchError(err => of(null))
      );
  }
}
