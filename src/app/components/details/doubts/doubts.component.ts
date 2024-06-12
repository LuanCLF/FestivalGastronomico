import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-doubts',
  standalone: true,
  imports: [CommonModule],
  template: `<section>
    <div>
      <h3>PERGUNTAS FREQUENTES</h3>
      <h2>Dúvidas Comuns</h2>
      <p>
        Encontre respostas para as perguntas mais frequentes sobre o Festival
        Gastronômico de Martins.
      </p>
    </div>

    <ul>
      <li>
        <h3>Onde será realizado o festival?</h3>
        <p>O festival será realizado em Martins, Rio Grande do Norte.</p>
      </li>
      <li>
        <h3>Qual é a data e o horário do evento?</h3>
        <p>O evento acontecerá dos dias 19 a 21 de Julho, a partir das 17h.</p>
      </li>
      <li>
        <h3>Onde posso me hospedar?</h3>
        <p>
          O contato de todos os hotéis e pousadas de Martins está disponível na
          prefeitura.
        </p>
      </li>
    </ul>
  </section>`,
  styleUrl: './doubts.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoubtsComponent {}
