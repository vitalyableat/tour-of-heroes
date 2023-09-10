import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from '../pages/dashboard-page/dashboard-page.component';
import { DetailsPageComponent } from '../pages/details-page/details-page.component';
import { HeroesPageComponent } from '../pages/heroes-page/heroes-page.component';
import { APP_ROUTES } from './app-router.constants';

const routes: Routes = [
  { path: APP_ROUTES.DASHBOARD, component: DashboardPageComponent },
  { path: APP_ROUTES.DETAILS, component: DetailsPageComponent },
  { path: APP_ROUTES.HEROES, component: HeroesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
