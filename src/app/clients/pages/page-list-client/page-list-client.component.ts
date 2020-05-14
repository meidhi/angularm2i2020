import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientI } from 'src/app/shared/interfaces/client-i';
import { Observable } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})

export class PageListClientComponent implements OnInit {
  public collection$: Observable<Client[]>;
  public collection: Client[];
  public title: string;
  public headers: string[];
  public subtitle: string;
  public states= Object.values(StateClient);

  constructor(private os: ClientService) { }

  ngOnInit(): void {
    this.title = "Clients";
    this.subtitle = "All clients";
    //   this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    //   // console.log(datas);
    this.headers = [
      "Name",
      "Ca",
      "State"
    ];
    // });
    this.collection$ = this.os.collection;
  }
  public changeState(item: Client, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      // traite erreur
      item.state = res.state;
    });
  }
}
