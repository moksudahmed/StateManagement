import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FundingComponent } from './funding/funding.component';
import { AuthGuard } from './guards/auth.guard';
import { CheckGuard } from './guards/check.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], data:['ADMIN'] },
  //{ path: 'funding', component: FundingComponent, canActivate:[AuthGuard], data:['ADMIN'] },
  { path: 'funding', component: FundingComponent, canDeactivate:[CheckGuard] }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

