import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { NavigationComponent } from './components/navigation/navigation.component';
import { RootComponent } from './components/root/root.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './components/start/start.component';
import { AllUserProfilesComponent } from './components/all-user-profiles/all-user-profiles.component';
import { FindUserProfileComponent } from './components/find-user-profile/find-user-profile.component';
import { FeatureComponent } from './components/feature/feature.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OfficeService } from './services/office-service';
import { PowerpointAddinService } from './services/powerpoint/powerpoint-addin.service';
import { NoPowerpointService } from './services/powerpoint/no-powerpoint.service';
import { PowerpointService } from './services/powerpoint/powerpoint.service';
import { NavigateSlidesComponent } from './components/navigate-slides/navigate-slides.component';
import { AllPresentationStatsComponent } from './components/all-presentation-stats/all-presentation-stats.component';
import { ExcelService } from './services/excel/excel.service';
import { NoExcelService } from './services/excel/no-excel.service';
import { ExcelAddinService } from './services/excel/excel-addin.service';

export function getPowerpointService(officeService: OfficeService) {
  if (officeService.isInPowerPoint()) {
    return new PowerpointAddinService();
  }
  return new NoPowerpointService();
}

export function getExcelService(officeService: OfficeService) {
  if (officeService.isInExcel()) {
    return new ExcelAddinService();
  }
  return new NoExcelService();
}

@NgModule({
  declarations: [
    RootComponent,
    StartComponent,
    NavigationComponent,
    AllUserProfilesComponent,
    FeatureComponent,
    UserProfileComponent,
    FindUserProfileComponent,
    NavigateSlidesComponent,
    AllPresentationStatsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: PowerpointService, useFactory: getPowerpointService, deps: [OfficeService]},
    {provide: ExcelService, useFactory: getExcelService, deps: [OfficeService]}
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
