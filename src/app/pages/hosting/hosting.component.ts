import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/hosting/hero/hero.component';
import { MainComponent } from '../../components/hosting/main/main.component';

@Component({
  selector: 'app-hosting',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    MainComponent
  ],
  template: `<main>
    <app-hero></app-hero>
    <app-main></app-main>
  </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostingComponent { }
