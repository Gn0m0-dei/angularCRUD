import { Component, OnInit } from '@angular/core';
import { People } from '../../classes/people';
import { ConnectionService } from '../../services/connection.service';

declare var M: any;

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.sass']
})
export class NewCardComponent implements OnInit {

  content: People;

  constructor(private api: ConnectionService) { }

  ngOnInit(): void {
    this.content = new People();
  }

  createPerson() {
    this.api.postPerson(this.content).subscribe(res => {
      this.content = new People();
      M.toast({html: 'New user created', classes: 'rounded green'});
    }), (err => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

}
