import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable, retry, tap } from 'rxjs';
import { IHero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: IHero[] = [];
  constructor(private http: HttpClient) {}
  getAll(): Observable<IHero[]> {
    return this.http.get<IHero[]>('http://localhost:3000/heroes').pipe(
      delay(500),
      retry(2),
      tap((heroes) => (this.heroes = heroes)),
    );
  }

  getById(id: number): Observable<IHero> {
    return this.http
      .get<IHero>(`http://localhost:3000/heroes/${id}`)
      .pipe(delay(500), retry(2));
  }

  update(updatedHero: IHero): Observable<IHero> {
    return this.http
      .put<IHero>(`http://localhost:3000/heroes/${updatedHero.id}`, updatedHero)
      .pipe(
        delay(500),
        tap((hero) => {
          this.heroes = this.heroes.map((h) => (h.id === hero.id ? hero : h));
        }),
      );
  }
}
