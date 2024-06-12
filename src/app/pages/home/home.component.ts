import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { AboutComponent } from '../../components/home/about/about.component';
import { ChefsComponent } from '../../components/home/chefs/chefs.component';
import { ContactComponent } from '../../components/home/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent
    ,
    AboutComponent,
    ChefsComponent,
    ContactComponent
  ],
  template: `<app-hero></app-hero><app-about></app-about><app-chefs></app-chefs><app-contact></app-contact>`,
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
