import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <img
    class="img"
      src="/assets/images/picRef.png"
      alt="foto de uma garota no festival gastronômico"
    />
    <article>
      <h2>
        <img src="/assets/icons/star.svg" alt="ícone de estrela" /> Festival
        Gastronômico
      </h2>
      <p>
        O Festival Gastronômico é um evento anual que celebra a rica diversidade
        culinária da nossa região. Ele apresenta uma variedade de pratos locais
        preparados por chefs talentosos e restaurantes renomados.
      </p>
      <p>
        Além da deliciosa comida, o festival também oferece uma série de
        atividades divertidas e educativas. Isso inclui aulas de culinária,
        competições de culinária e apresentações ao vivo de cantores famosos.
      </p>
      <p>
        Este evento é uma ótima oportunidade para os amantes da comida
        experimentarem novos sabores, aprenderem novas habilidades culinárias e
        se divertirem com amigos e familiares. Esperamos vê-lo lá!
      </p>
    </article>
  </section>`,
  styleUrl: './testimony.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonyComponent {}
