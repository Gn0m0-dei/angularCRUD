import { Component, OnInit } from '@angular/core';
import { People } from '../../classes/people';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../../services/connection.service';

declare var M: any;

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.sass']
})
export class EditCardComponent implements OnInit {

  content: People;
  loaded: boolean = false;


  constructor(private api: ConnectionService,
              private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.getPerson(+id);
  }

  getPerson(id: number) {
    this.api.getPerson(id).subscribe(res => {
      this.content = res as People;
      this.loaded = true;
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

  updatePerson() {
    this.loaded = false;
    this.api.putPerson(this.content).subscribe(res => {
      this.content = res as People || this.content;
      this.loaded = true;
      M.toast({html: 'Update Done', classes: 'rounded green'});
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

  deletePerson(id: number) {
    this.api.deletePerson(id).subscribe( res => {
      this.api.update.emit();
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

}
