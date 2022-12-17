import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFotosComponent } from './pages/card-fotos/card-fotos.component';
import { ModalComponent } from './pages/modal/modal.component';

const routes: Routes = [
  {path: 'card', component: CardFotosComponent},
  {path: 'modal', component: ModalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
