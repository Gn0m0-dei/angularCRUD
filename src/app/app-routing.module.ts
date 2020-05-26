import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';




const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ListCardsComponent },
  { path: 'edit/:id', component: EditCardComponent },
  { path: 'new', component: NewCardComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
