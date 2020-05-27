import { Component, OnInit } from '@angular/core';
import { People } from '../../classes/people';
import { ActivatedRoute } from '@angular/router';
import { ConnectionService } from '../../services/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.sass']
})
export class EditCardComponent implements OnInit {


  loaded: boolean = false;
  editPersonForm: FormGroup;
  id: string;


  constructor(private api: ConnectionService,
              private activateRoute: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.getPerson(+this.id);
  }

  getPerson(id: number) {
    this.api.getPerson(id).subscribe( (res: People) => {
      this.setPerson(res.name, res.birthdate, id);
      this.loaded = true;
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

  updatePerson(values: People) {
    this.loaded = false;
    this.api.putPerson(values).subscribe(res => {
      this.loaded = true;
      M.toast({html: 'Update Done', classes: 'rounded green'});
      this.api.update.emit();
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

  setPerson(name: string, birthdate: string, id: number) {
    this.editPersonForm = this.formBuilder.group ({
      name: [name, Validators.required],
      birthdate: [birthdate, Validators.compose([Validators.required,
        Validators.pattern('^[0-9]{4}\-[0-9]{2}\-[0-9]{2}\T[0-9]{2}\:[0-9]{2}\:[0-9]{2}$')])],
      id: [id]
    })
  }

  deletePerson(id: string) {
    this.api.deletePerson(+id).subscribe( res => {
      this.api.update.emit();
    }, (err) => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

}
