import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <h2>Conheça os Restaurantes</h2>
    <p>
      Alguns dos restaurantes renomados que trarão suas melhores receitas para o
      festival.
    </p>

    <ul>
      <li>
        <img
          class="img resImg"
          src="/assets/images/rest1.jpg"
          alt="Foto do rest 1"
        />
        <span>Água na Boca</span>

        <a href="https://www.instagram.com/festivaldemartins/" target="_blank">
          <img
            class="social"
            src="/assets/icons/instagram.svg"
            alt="ícone do instagram"
          />
        </a>
      </li>
      <li>
        <img
          class="img resImg"
          src="/assets/images/rest2.png"
          alt="Foto do rest 2"
        />
        <span>Arena Sushi Bar</span>

        <a href="https://www.instagram.com/festivaldemartins/" target="_blank">
          <img
            class="social"
            src="/assets/icons/instagram.svg"
            alt="ícone do instagram"
          />
        </a>
      </li>
      <li>
        <img
          class="img resImg"
          src="/assets/images/rest3.png"
          alt="Foto do rest 3"
        />
        <span>Papar & Papear</span>

        <a href="https://www.instagram.com/festivaldemartins/" target="_blank">
          <img
            class="social"
            src="/assets/icons/instagram.svg"
            alt="ícone do instagram"
          />
        </a>
      </li>
    </ul>
  </section>`,
  styleUrl: './restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantsComponent {}
