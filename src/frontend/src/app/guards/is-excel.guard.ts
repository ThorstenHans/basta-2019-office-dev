import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ExcelService } from '../services/excel/excel.service';
import { Injectable } from '@angular/core';
import { OfficeService } from '../services/office-service';

@Injectable({
  providedIn: 'root'
})
export class IsExcelGuard implements CanActivate {
  constructor(private readonly _officeService: OfficeService) {

  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this._officeService.isInExcel();
  }

}
