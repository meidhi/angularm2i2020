import { Component, OnInit, Input, Output } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public States = Object.values(StateClient);
  @Input() init = new Client();
  @Output() formSubmitted: EventEmitter<Client> = new EventEmitter;
  public form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      name: [this.init.name],
      ca: [this.init.ca],
      state: [this.init.state]
    });

  }

  onSubmit(){
    console.log(this.form.value);
    this.formSubmitted.emit(this.form.value);
  }

}
