import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <article id="art1">
      <img src="/assets/images/host1.jpg" alt="imagem de pousada" />
      <div>
        <h1>Encontre a Pousada Perfeita</h1>
        <p id="count">
          <span>15+</span> 
          <br>
           Pousadas Disponíveis
        </p>
        <p>
          Descubra pousadas incríveis para suas próximas férias, com facilidade
          de contato direto com os proprietários.
        </p>
      </div>
    </article>
    <article id="art2">
      <ul>
        <li>
          <span> 01 </span>
          <div>
            <h3>Variedade</h3>
            <p>Pousadas confortáveis para todos os gostos.</p>
          </div>
        </li>
        <li id="li2">
          <span> 02 </span>
          <div>
            <h3>Contato Direto</h3>
            <p>Fale diretamente com os proprietários sem intermediários.</p>
          </div>
        </li>
        <li id="li3">
          <span> 03 </span>
          <div>
            <h3>Facilidade</h3>
            <p>
              Navegação simples e intuitiva para encontrar sua pousada ideal.
            </p>
          </div>
        </li>
      </ul>
    </article>
  </section>`,
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
