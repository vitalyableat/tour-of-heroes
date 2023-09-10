import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { HeroesPageComponent } from './pages/heroes-page/heroes-page.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRouterModule } from './router/app-router.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterHeroesPipe } from './pipes/filter-heroes.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    DetailsPageComponent,
    HeroesPageComponent,
    HeaderComponent,
    FilterHeroesPipe,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
