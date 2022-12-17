import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent {
  listaTarefas: any = [];
  itemInput: string = '';
  exibeErro: boolean = false;
  enviaItem() {
    let str = this.itemInput;
    console.log(this.itemInput);
    if (str.replace(/\s/g, '').length==0) {
      this.exibeErro = true;
    } else {
      this.exibeErro = false;
      this.listaTarefas.push(this.itemInput);
    }
    console.log(this.listaTarefas);
    this.itemInput = '';
  }
}
