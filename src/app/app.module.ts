import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ConnectionService } from './services/connection.service';
import { CardComponent } from './components/card/card.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { NewCardComponent } from './components/new-card/new-card.component';
import { EditCardComponent } from './components/edit-card/edit-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListCardsComponent,
    NewCardComponent,
    EditCardComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe,
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
