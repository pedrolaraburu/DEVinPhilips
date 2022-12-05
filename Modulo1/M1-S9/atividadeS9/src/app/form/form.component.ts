import { Component } from '@angular/core';

@Component({
	selector: 'philips-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent {
	profs = [
		{ id: 1, nome: "Otávio" },
		{ id: 2, nome: "Vivian" },
		{ id: 3, nome: "Leandro" },
		{ id: 4, nome: "Cláudia" }
	]
}
