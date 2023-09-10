import { Pipe, PipeTransform } from '@angular/core';
import { IHero } from '../models/hero';

@Pipe({
  name: 'filterHeroes',
})
export class FilterHeroesPipe implements PipeTransform {
  transform(heroes: IHero[]): IHero[] {
    return heroes.sort((a, b) => b.rating - a.rating).slice(0, 4);
  }
}
