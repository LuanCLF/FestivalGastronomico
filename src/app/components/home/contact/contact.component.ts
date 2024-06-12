import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <h2>Entre em Contato</h2>
    <p>
      Gostaríamos de ouvir suas perguntas e sugestões. Entre em contato conosco!
    </p>
    <ul>
      <li>
        <div class="icnContact">
          <img src="/assets/icons/chat.svg" alt="ícone de chat" />
        </div>
        <div>
          <h4>Informações Gerais</h4>
          <p>Para dúvidas gerais sobre o festival.</p>
          <a href="/Contato"
            >Envie uma Mensagem <img src="/assets/icons/arrow-green.svg" alt="ícone de
            seta" /></a
          >
        </div>
      </li>
      <li>
        <div class="icnContact">
          <img src="/assets/icons/bug.svg" alt="ícone de bug" />
        </div>
        <div>
          <h4>Suporte Técnico</h4>
          <p>Ajuda com questões técnicas.</p>
          <a href="/Contato"
            >Envie uma Mensagem
            <img
              src="/assets/icons/arrow-green.svg"
              alt="ícone de
            seta"
          /></a>
        </div>
      </li>
      <li>
        <div class="icnContact">
          <img src="/assets/icons/partner.svg" alt="ícone de parceria" />
        </div>
        <div>
          <h4>Parcerias</h4>
          <p>Colabore conosco para o próximo evento.</p>
          <a href="/Contato"
            >Envie uma Mensagem
            <img src="/assets/icons/arrow-green.svg" alt="ícone de seta"
          /></a>
        </div>
      </li>
    </ul>
  </section>`,
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
