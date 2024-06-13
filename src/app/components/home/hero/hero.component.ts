import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <h1>
      Bem-vindo ao Festival <br />
      Gastronômico de Martins
    </h1>
    <p id="pHero">
      Junte-se a nós para uma celebração de sabores e cultura. Experimente
      pratos incríveis e conheça restaurantes renomados.
    </p>
    <button>
      <a href="/Detalhes"
        >Detalhes do Festival
        <img src="/assets/icons/arrow.svg" alt="ícone de seta"
      /></a>
    </button>

    <ul>
      <li>
        <img
          src="/assets/icons/food.svg"
          alt="ícone de uma casinha com garfo e faca"
        />
        <p>Gastronomia de Alto Nível</p>
      </li>
      <li>
        <img src="/assets/icons/music.svg" alt="ícone de nota musical" />
        <p>Música ao Vivo</p>
      </li>
      <li>
        <img
          src="/assets/icons/pointer-place.svg"
          alt="ícone de marcador de local"
        />
        <p>Localização Incrível</p>
      </li>
    </ul>
  </section>`,
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
