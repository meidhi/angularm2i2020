import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public form: FormGroup;
  public states = Object.values(StateClient);
  @Input() init = new Client();
  @Output() formSubmited : EventEmitter<Client> = new EventEmitter();
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      name: [
        this.init.name,
        Validators.required
      ],
      ca: [
        this.init.ca,
        Validators.compose([Validators.required, Validators.min(1), Validators.max(100000)])
      ],
      state: [this.init.state],
      comment: [this.init.comment]
    }
    );
  }
  public onSubmit(){
    this.formSubmited.emit(this.form.value);
  }
}
