import { Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'ntap-filtragem',
  templateUrl: './filtragem.component.html',
  styleUrls: ['./filtragem.component.scss']
})
export class FiltragemComponent {
	item = ['todos', 'nao-lidos', 'lido']
  @Input() evento = 'Todos';
  @Output() filtraEvento = new EventEmitter<string>();

  handleFilter(item: string){
    this.filtraEvento.emit(`${item}`);
  }
}
