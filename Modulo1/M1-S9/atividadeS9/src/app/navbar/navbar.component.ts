import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'philips-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  busca: string = '';
  @Output() actionOutput: EventEmitter<any> = new EventEmitter();
}
