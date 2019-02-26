import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { AllUserProfilesComponent } from './components/all-user-profiles/all-user-profiles.component';
import { FindUserProfileComponent } from './components/find-user-profile/find-user-profile.component';
import { UserProfileResolver } from './resolvers/user-profile.resolver';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavigateSlidesComponent } from './components/navigate-slides/navigate-slides.component';
import { AllPresentationStatsComponent } from './components/all-presentation-stats/all-presentation-stats.component';
import { IsExcelGuard } from './guards/is-excel.guard';

const routes: Routes = [
  {path: 'start', component: StartComponent},
  {path: 'navigate-slides', component: NavigateSlidesComponent},
  {path: 'all-user-profiles', component: AllUserProfilesComponent},
  {path: 'all-presentation-stats', canActivate: [IsExcelGuard], component: AllPresentationStatsComponent},
  {path: 'find-user-profile', component: FindUserProfileComponent},
  {path: 'user-profile/:initials', resolve: {userProfile: UserProfileResolver}, component: UserProfileComponent},
  {path: '', pathMatch: 'full', redirectTo: '/start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
