import { Component } from '@angular/core';
interface Item {
  titulo: string;
  subtitulo: string;
  data: string;
  lido: boolean;
}

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  itens: Item[] = [
    {
      titulo: "Pokémon",
      subtitulo: "Scarlet & Violet",
      data: "18/11/2022",
      lido: false,
    },
    {
      titulo: "Pokémon",
      subtitulo: "Sword & Shield",
      data: "18/11/2019",
      lido: false,
    },
    {
      titulo: "Pokémon",
      subtitulo: "Sun & Moon",
      data: "18/11/2016",
      lido: false,
    },
  ]
}
