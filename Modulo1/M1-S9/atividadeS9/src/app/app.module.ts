import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BotaoFormComponent } from './botao-form/botao-form.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCardComponent } from './item-card/item-card.component';
import { FormEx7Component } from './form-ex7/form-ex7.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    BotaoFormComponent,
    NavbarComponent,
    ItemCardComponent,
    FormEx7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
