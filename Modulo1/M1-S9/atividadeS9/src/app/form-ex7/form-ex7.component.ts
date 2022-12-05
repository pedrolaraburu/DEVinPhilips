import { Component } from '@angular/core';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'philips-form-ex7',
  templateUrl: './form-ex7.component.html',
  styleUrls: ['./form-ex7.component.scss']
})
export class FormEx7Component {
	email: any;
	senha: any;

	constructor(public storage_service: StorageService) {}

	enviarDados(){
		console.log("Sucesso!" + this.email + this.senha);
		this.storage_service.enviaParaLocalStorage({email: this.email, senha: this.senha})
	}
}
