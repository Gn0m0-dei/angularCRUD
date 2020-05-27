import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/classes/people';
import { ConnectionService } from '../../services/connection.service';


declare var M: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {


  @Input() content: People;

  constructor(private api: ConnectionService) { }

  ngOnInit(): void {

  }

  deletePerson(id: number) {
    this.api.deletePerson(id).subscribe( res => {
      this.api.update.emit();
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

}
