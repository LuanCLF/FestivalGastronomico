import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: ` <nav>
    <ul>
      <li><a href="/">Página Inicial</a></li>
      <li><a href="/Detalhes">Detalhes do Evento</a></li>
      <li><a href="/Contato">Contato</a></li>

      
    </ul>
  </nav>`,
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {}
