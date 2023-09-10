import { Component } from '@angular/core';
import { APP_ROUTES } from '../../router/app-router.constants';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent {
  protected readonly APP_ROUTES = APP_ROUTES;
  loading = false;

  constructor(public heroService: HeroService) {}

  ngOnInit(): void {
    this.loading = true;
    this.heroService.getAll().subscribe(() => (this.loading = false));
  }
}
