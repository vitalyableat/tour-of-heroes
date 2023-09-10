import { Component } from '@angular/core';
import { APP_ROUTES } from '../../router/app-router.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  protected readonly APP_ROUTES = APP_ROUTES;
}
