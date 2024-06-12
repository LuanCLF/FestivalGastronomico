import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reason',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<section>
    <h2>Impacto do Festival</h2>
    <p>O Festival Gastronômico de Martins tem sido um marco na celebração da culinária e cultura local.
    </p>
    <ul>
      <li><div>
        <p>50k Visitantes Anuais</p>
        <p>Pessoas de todo o país participam do festival.</p>
      </div></li>
      <li><div>
        <p>100+ Pratos Diferentes</p>
        <p>Uma variedade de pratos e sabores para todos os gostos.</p>
      </div></li>
      <li>
        <div>
          <p>30 Restaurantes Convidados</p>
          <p>Os melhores de toda a região.</p>
        </div>
      </li>
    </ul>
  </section>`,
  styleUrl: './reason.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReasonComponent { }
