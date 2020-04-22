import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-funil',
  templateUrl: './funil.component.html',
  styleUrls: ['./funil.component.css']
})
export class FunilComponent implements OnInit {
  @Input() showSidebar: boolean = false;

  @Output() situationSidebar = new EventEmitter();

  tickets: any = [{
    id: 1,
    titulo: 'ROSINA PORTAS - VEDOIS OEE',
    estagio: { id: 2 },
    valorestimado: 3500,
    termometro: '0',
    vendedor: { id: 0, user: { username: 'Arthur' } },
    status: 'Ganhou',
    atividades: [{ id: 0 }, { id: 1 }]

  }, {
    id: 1,
    titulo: 'PSR IMPRESSÃO VEDOIS OEE',
    estagio: { id: 2 },
    valorestimado: 3500,
    termometro: '50',
    vendedor: { id: 0, user: { username: 'Arthur' } },
    status: 'Aberto',
    atividades: [{ id: 0 }, { id: 1 }]

  }, {
    id: 1,
    titulo: 'ROHDEN - OEE',
    estagio: { id: 5 },
    valorestimado: 3500,
    termometro: '0',
    vendedor: { id: 0, user: { username: 'Arthur' } },
    status: 'Aberto',
    atividades: [{ id: 0 }, { id: 1 }]

  }, {
    id: 1,
    titulo: 'ALL4LABELS - MANUTENÇÃO',
    estagio: { id: 4 },
    valorestimado: 10000,
    termometro: '0',
    vendedor: { id: 0, user: { username: 'Arthur' } },
    status: 'Aberto',
    atividades: [{ id: 0 }, { id: 1 }]

  }, {
    id: 1,
    titulo: 'ARTELASSE - OEE MANUAL',
    estagio: { id: 3 },
    valorestimado: 0,
    termometro: '50',
    vendedor: { id: 0, user: { username: 'Arthur' } },
    status: 'Aberto',
    atividades: [{ id: 0 }, { id: 1 }]

  }, {
    id: 1,
    titulo: 'WEG-CESTARI - DDP',
    estagio: { id: 5 },
    valorestimado: 3500,
    termometro: '50',
    vendedor: { id: 0, user: { username: 'Arthur' } },
    status: 'Perdido',
    atividades: [{ id: 0 }, { id: 1 }]

  },];

  // Funil:
  contatado: any = { tickets: [], valor: '' };
  clienteP: any = { tickets: [], valor: '' };
  demoA: any = { tickets: [], valor: '' };
  proposta: any = { tickets: [], valor: '' };
  negociaI: any = { tickets: [], valor: '' };



  // Status:

  prospecao: any = { tickets: [], valor: '' };
  ganhas: any = { tickets: [], valor: '' };
  perdidas: any = { tickets: [], valor: '' };




  constructor() {
    this.getTickets();
  }

  getTickets() {
    this.tickets.forEach(ticket => {
      if (ticket.status == 'Aberto') {
        switch (ticket.estagio.id) {
          case 1:
            this.prospecao.tickets.push(ticket);
            break;
          case 2:
            this.contatado.tickets.push(ticket);
            break;
          case 3:
            this.clienteP.tickets.push(ticket);
            break;
          case 4:
            this.demoA.tickets.push(ticket);
            break;
          case 5:
            this.proposta.tickets.push(ticket);
            break;
          case 7:
            this.negociaI.tickets.push(ticket);
            break;
          case 8:
            this.ganhas.tickets.push(ticket);
            break;
          default:
            break;
        }
      } else if (ticket.status === 'Ganhou') {
        this.ganhas.tickets.push(ticket);
      } else if (ticket.status === 'Perdido') {
        this.perdidas.tickets.push(ticket);
      }
    });
    console.log(this.perdidas.tickets);

  }





  onClick() {
    this.showSidebar = !this.showSidebar;
    this.situationSidebar.emit({ situation: this.showSidebar })
  }

  ngOnInit() {

  }

}
