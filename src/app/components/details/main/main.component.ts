import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <h1>
      Descubra o Festival Gastronômico <br />
      de Martins
    </h1>

    <article id="details">
      <div id="images">
        <img
          class="img"
          src="/assets/images/coreto.png"
          alt="imagem do coreto da praça"
        />
        <img
          class="img"
          src="/assets/images/festa.png"
          alt="imagem de uma das festas do festival passado"
        />
        <br />
        <img
          class="img"
          src="/assets/images/caldeirao.png"
          alt="imagem do grande caldeirão que fica na praça"
        />
        <img
          class="img"
          src="/assets/images/povo.png"
          alt="imagem do povo comemorando com música"
        />
      </div>
      <div id="program">
        <img
          class="img"
          src="/assets/images/programacao-festival.png"
          alt="programação do festival gastronômico"
        />
        <div id="coment">
          <h2>Um Festival para Todos</h2>
          <p>
            Junte-se a nós para celebrar a culinária e descobrir sabores
            incríveis no Festival Gastronômico de Martins.
          </p>
          <button>
            <a href="/Contato"
              >Entre em Contato
              <img src="/assets/icons/arrow.svg" alt="ícone de seta"
            /></a>
          </button>
        </div>
      </div>
    </article>

    <article id="local">
      <div class="box">
        <h2>Localização do Festival</h2>
        <p>
        O evento acontece na praça central de Martins, encontre-nos aqui e participe deste evento gastronômico inesquecível.
        </p>
        <a
          href="https://www.google.com.br/maps/place/Martins+-+RN,+59800-000/@-6.085955,-37.9898491,12z/data=!3m1!4b1!4m6!3m5!1s0x7bad6a70f86f2e5:0x8b2b51a0fe28f5bb!8m2!3d-6.0698817!4d-37.9148742!16s%2Fg%2F1ymxfzpsj!5m1!1e3?entry=ttu"
          target="_blank"

          >
          
          <img
            class="social"
            src="/assets/icons/pointer-place-green.svg"
            alt="ícone de marcador de local"
           
          />
            Martins, Rio Grande do Norte
           <img id="arrow" src="/assets/icons/arrow-green.svg" alt="ícone de seta">
         
        </a>
      </div>
      <a href="https://www.google.com.br/maps/place/Martins+-+RN,+59800-000/@-6.085955,-37.9898491,12z/data=!3m1!4b1!4m6!3m5!1s0x7bad6a70f86f2e5:0x8b2b51a0fe28f5bb!8m2!3d-6.0698817!4d-37.9148742!16s%2Fg%2F1ymxfzpsj!5m1!1e3?entry=ttu"
      target="_blank"
      ><img class="img" src="/assets/images/local.png" alt="print do google maps, mostrando a cidade de Martins" /></a>
    </article>
  </section>`,
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
}
