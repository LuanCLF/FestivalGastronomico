import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <div>
      <div id="main">
        <p id="pAbout">O Melhor da Gastronomia</p>
        <h2>Destaques do Festival</h2>
        <p>
          Descubra os principais destaques do Festival Gastronômico de Martins,
          incluindo chefs famosos, pratos exclusivos e muito mais.
        </p>
      </div>
      <article>
        <ul>
          <li>
            <img src="/assets/icons/info.svg" alt="ícone de informação" />
            <span>Chefs renomados apresentando suas criações.</span>
          </li>

          <li>
            <img
              src="/assets/icons/workshop.svg"
              alt="ícone pra representar workshop"
            />
            <span>Aulas de culinária e workshops interativos.</span>
          </li>
        </ul>
        <button >
          <a href="/Detalhes"
            >Saiba Mais <img src="/assets/icons/arrow.svg" alt="ícone de seta"
          /></a>
        </button>
      </article>
    </div>
    <img
      id="campImg"
      class="img"
      src="/assets/images/CampCook.png"
      alt="Foto do último vencedor do campeonato de melhor prato"
    />
  </section>`,
  styleUrl: './about.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}
