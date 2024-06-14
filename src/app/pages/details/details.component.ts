import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MainComponent } from '../../components/details/main/main.component';
import { DoubtsComponent } from '../../components/details/doubts/doubts.component';
import { TestimonyComponent } from '../../components/details/testimony/testimony.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, MainComponent, DoubtsComponent,TestimonyComponent],
  template: `<main>
    <app-main></app-main>
    <app-doubts></app-doubts>
    <app-testimony></app-testimony>
    </main>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {}
