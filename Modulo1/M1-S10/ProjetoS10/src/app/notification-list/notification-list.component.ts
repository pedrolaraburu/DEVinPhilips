import { Component, OnInit } from '@angular/core';
import { Notificacao } from '../models/notificacao.model';
import { NOTIFICACOES_MOCK } from '../utils/notifications-mock';
@Component({
    selector: 'ntap-notification-list',
    templateUrl: './notification-list.component.html',
    styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent implements OnInit {
    itens: Notificacao[] = [];
    itens2: Notificacao[] = [];
    ngOnInit(): void {
        this.itens = NOTIFICACOES_MOCK;
        this.itens2 = NOTIFICACOES_MOCK;
    }

    lerNotificacao(item: any) {
        item.lido = !item.lido;
        this.itens2 = this.itens;
    }

    testando() {
        console.log(this.itens);
        console.log(this.itens.length);
    }

    botaoFiltro(item: string) {
        console.log(`${item}`);
        if (item === 'todos') {
            this.itens = this.itens2;
        } else if (item === 'nao-lidos') {
            const itensFiltradosNLidos = this.itens2.filter(
                (elemento) => elemento.lido == false
            );
            this.itens = itensFiltradosNLidos
        } else if (item === 'lido') {
            const itensFiltradosLidos = this.itens2.filter(
                (elemento) => elemento.lido == true
            );
            this.itens = itensFiltradosLidos;
        }
    }
}
