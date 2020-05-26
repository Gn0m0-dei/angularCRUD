import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/classes/people';

declare var M: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {


  @Input() content: People;

  constructor() { }

  ngOnInit(): void {

  }

}
