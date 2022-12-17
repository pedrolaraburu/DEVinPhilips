import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  templateUrl: './ex7.component.html',
  styleUrls: ['./ex7.component.scss']
})
export class Ex7Component {
  inputNormal: string = '';
  capturaInput: string = '';
  captura(){
    this.capturaInput = this.inputNormal
  }
}
