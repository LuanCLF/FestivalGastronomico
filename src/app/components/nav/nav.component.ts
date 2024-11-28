import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  template: ` <nav>
    <div
      class="menu-container"
      (mouseover)="showMenu = true"
      (mouseout)="hideMenu()"
    >
      <button class="menu-burger">☰</button>
      <ul [class.show]="showMenu">
        <li><a href="/">Página Inicial <span></span></a></li>
        <li><a href="/Detalhes">Detalhes do Evento <span></span></a></li>
        <li><a href="/Contato">Contato <span></span></a></li>
      </ul>
    </div>
  </nav>`,
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  showMenu = false;

  hideMenu() {
    setTimeout(() => (this.showMenu = false), 500);
  }
}
