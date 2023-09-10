import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent {
  hero: IHero | undefined;
  loading = false;
  form = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    rating: new FormControl<number>(0, [
      Validators.required,
      Validators.min(0),
    ]),
  });
  get name() {
    return this.form.get('name');
  }
  get rating() {
    return this.form.get('rating');
  }

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.loading = true;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getById(id).subscribe((hero) => {
      this.hero = hero;
      this.form.setValue({
        name: this.hero?.name || '',
        rating: this.hero?.rating || 0,
      });
      this.loading = false;
    });
  }

  submit() {
    this.loading = true;
    this.heroService
      .update({
        id: this.hero?.id as number,
        name: this.form.value.name as string,
        rating: this.form.value.rating as number,
      })
      .subscribe((hero) => {
        this.hero = hero;
        this.loading = false;
      });
  }

  navigateBack(): void {
    this.location.back();
  }
}
