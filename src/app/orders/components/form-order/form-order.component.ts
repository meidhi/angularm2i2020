import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';


@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  public States = Object.values(StateOrder);
  @Input() init = new Order();
  public form: FormGroup;
  @Output() formSubmitted: EventEmitter<Order> = new EventEmitter;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      typePresta: [this.init.typePresta],
      client: [this.init.state],
      comment: [this.init.state]
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.formSubmitted.emit(this.form.value);
  }

}
