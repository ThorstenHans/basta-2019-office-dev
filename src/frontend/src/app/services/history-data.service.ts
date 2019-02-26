import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HistoryDataModel } from '../models/history-data.model';

@Injectable({
  providedIn: 'root'
})
export class HistoryDataService {
  constructor(private readonly _httpClient: HttpClient) {

  }

  public getHistoryData(): Observable<Array<HistoryDataModel>> {
    const requestUrl = `${environment.api.root}/history`;
    return this._httpClient.get<Array<HistoryDataModel>>(requestUrl);
  }
}
