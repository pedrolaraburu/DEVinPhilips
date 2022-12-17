import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptalizePhillipsPipe } from './pipes/captalize-phillips.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardFotosComponent } from './pages/card-fotos/card-fotos.component';
import { ModalComponent } from './pages/modal/modal.component';
import { TesteCardComponent } from './pages/teste-card/teste-card.component';
import { Ex7Component } from './pages/ex7/ex7.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CaptalizePhillipsPipe,
    NavbarComponent,
    CardFotosComponent,
    ModalComponent,
    TesteCardComponent,
    Ex7Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
