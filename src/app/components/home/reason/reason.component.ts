import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reason',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <h2>Impacto do Festival</h2>
    <p>
      O Festival Gastronômico de Martins tem sido um marco na celebração da
      culinária e cultura local.
    </p>

    <ul>
      <li id="li1">
        <img
          class="img"
          src="/assets/images/people.png"
          alt="foto do povo em uma festa"
        />

        <div>
          <h4>50k Visitantes Anuais</h4>
          <p>Pessoas de todo o país participam do festival.</p>
        </div>
      </li>
      <li id="li2">
        <img
          class="img"
          src="/assets/images/food.png"
          alt="foto de um prato de comida"
        />

        <div>
          <h4>30+ Restaurantes Diferentes</h4>
          <p>Uma variedade de pratos e sabores para todos os gostos.</p>
        </div>
      </li>
      <li id="li3">
        <img
          class="img"
          src="/assets/images/music.png"
          alt="foto da programação da festa"
        />

        <div>
          <h4>20+ Atrações Musicais</h4>
          <p>Os melhores de toda a região.</p>
        </div>
      </li>
    </ul>
  </section>`,
  styleUrl: './reason.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReasonComponent {}
