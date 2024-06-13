import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <h1>Entre em Contato</h1>
    <p>
      Estamos disponíveis para qualquer sugestão ou apenas para bater um papo.
    </p>
    <ul>
      <li>
        <button>
          <a href="/Contato"
            >Whatsapp
            <img src="/assets/icons/whatsapp.svg" alt="ícone do whatsapp"
          /></a>
        </button>
      </li>
      <li>
        <button>
          <a href="https://martins.rn.gov.br/" target="_blank"
            >Prefeitura
            <img
              src="/assets/icons/house.svg"
              alt="ícone de casa representando a prefeitura"
          /></a>
        </button>
      </li>
      <li>
        <button>
          <a href="https://www.instagram.com/festivaldemartins/" target="_blank"
            >Instagram
            <img src="/assets/icons/instagram.svg" alt="ícone do instagram"
          /></a>
        </button>
      </li>
    </ul>
    <img class="img" src="/assets/prefeitura-martins.png" alt="">
  </section>`,
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
