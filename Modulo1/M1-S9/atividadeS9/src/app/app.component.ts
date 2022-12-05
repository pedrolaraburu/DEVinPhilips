import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'philips-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'atividadeS9';
  formModal: any;

  ngOnInit(): void {
  }
  consoleEvent(event: any){
    console.log(event);
  }
}
