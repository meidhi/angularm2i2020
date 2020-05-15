import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/client';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-details-client',
  templateUrl: './details-client.component.html',
  styleUrls: ['./details-client.component.scss']
})
export class DetailsClientComponent implements OnInit {
public firstItem$ : Subject<Client>;
  constructor(
    private cs: ClientService)
   { }

  ngOnInit(): void {
    console.log(this.cs.firstItem$);
    this.firstItem$ = this.cs.firstItem$;
  }

}
