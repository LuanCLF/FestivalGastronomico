import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-chefs',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <h2>Conheça os Chefs</h2>
    <p>
      Alguns dos chefs talentosos e apaixonados que trarão suas melhores
      receitas para o festival.
    </p>

    <ul>
      <li>
        <img
          id="chefImg"
          class="img"
          src="/assets/images/chef1.jpg"
          alt="Foto do Chef 1"
        />
        <span>Chef John Doe</span>

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
          id="chefImg"
          class="img"
          src="/assets/images/chef2.jpg"
          alt="Foto do Chef 2"
        />
        <span>Chef Jane Doe</span>

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
          id="chefImg"
          class="img"
          src="/assets/images/chef3.jpg"
          alt="Foto do Chef 3"
        />
        <span>Chef Alice Doe</span>

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
  styleUrl: './chefs.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChefsComponent {}
