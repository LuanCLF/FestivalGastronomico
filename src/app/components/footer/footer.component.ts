import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NavComponent],
  template: `<footer>
    <p>
      &copy; 2024 Festival Gastronômico de Martins. Todos os direitos
      reservados.
    </p>
    <app-nav></app-nav>
    <a href="https://www.instagram.com/festivaldemartins/" target="_blank"><img class="social" [src]="imgSrc" alt="ícone do instagram" (mouseover)="imgSrc='/assets/icons/instagram-green.svg'" (mouseout)="imgSrc='/assets/icons/instagram.svg'"></a>
  </footer>`,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  imgSrc = '/assets/icons/instagram.svg';
}
