import { Component, OnInit } from '@angular/core';
import { People } from '../../classes/people';
import { ConnectionService } from '../../services/connection.service';

declare var M: any;

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.sass']
})
export class ListCardsComponent implements OnInit {
  listPeople: People[];
  loaded: boolean = false;

  constructor(private api: ConnectionService) { }

  ngOnInit(): void {
    this.getPeople();
    this.api.update.subscribe( res => {
      this.getPeople();
    })
  }

  getPeople() {
    this.api.getPeople().subscribe((people) => {
      this.listPeople = people as People[];
      this.loaded = true;
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

}
