import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { AboutComponent } from '../../components/home/about/about.component';
import { ContactComponent } from '../../components/home/contact/contact.component';
import { RestaurantsComponent } from '../../components/home/restaurant/restaurant.component';
import { ReasonComponent } from '../../components/home/reason/reason.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    RestaurantsComponent,
    ReasonComponent,
    ContactComponent,
  ],
  template: `<main>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-restaurant></app-restaurant>
    <app-reason></app-reason>
    <app-contact></app-contact>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
