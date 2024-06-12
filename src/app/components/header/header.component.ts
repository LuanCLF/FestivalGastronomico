import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `<header>
    <a href="https://www.instagram.com/festivaldemartins/" target="_blank">
      <img
        src="/assets/icon-festival.png"
        alt="Imagem do caldeirão do festival"
      />
    </a>

    <app-nav></app-nav>
  </header>`,
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
