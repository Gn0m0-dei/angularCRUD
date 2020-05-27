import { Component, OnInit } from '@angular/core';
import { People } from '../../classes/people';
import { ConnectionService } from '../../services/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


declare var M: any;

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.sass']
})
export class NewCardComponent implements OnInit {

  newPersonForm: FormGroup;

  constructor(private api: ConnectionService,
              private formBuilder: FormBuilder) {
                this.resetForm();
              }

  ngOnInit(): void {

  }

  createPerson(values: People) {
    this.api.postPerson(values).subscribe(res => {
      M.toast({html: 'New user created', classes: 'rounded green'});
      this.resetForm();
    }), (err => {
      M.toast({html: err, classes: 'rounded red'});
    })
  }

  resetForm() {
    this.newPersonForm = this.formBuilder.group ({
      name: ['', Validators.compose([Validators.required,
        Validators.minLength(1)])],
      birthdate: ['', Validators.compose([Validators.required,
        Validators.pattern('^[0-9]{4}\-[0-9]{2}\-[0-9]{2}\T[0-9]{2}\:[0-9]{2}\:[0-9]{2}$')])]
    })
  }

}
