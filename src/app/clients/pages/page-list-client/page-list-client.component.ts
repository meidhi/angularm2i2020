import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientI } from 'src/app/shared/interfaces/client-i';
import { Observable, Subject } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Link } from 'src/app/shared/interfaces/link';
import { Button } from 'src/app/shared/interfaces/button';

@Component({
  selector: 'app-page-list-client',
  templateUrl: './page-list-client.component.html',
  styleUrls: ['./page-list-client.component.scss']
})

export class PageListClientComponent implements OnInit {
  public collection$: Subject<Client[]> = new Subject();
  public collection: Client[];
  public title: string;
  public headers: string[];
  public subtitle: string;
  public states = Object.values(StateClient);
  public navLink: Link[];
  public btnRoute: Button;
  @Input() link

  constructor(
    private cs: ClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.btnRoute = {texte: 'AddClient'};
    this.navLink = [{ route: 'details', label: 'details' }, { route: 'comments', label: 'comments' }];
    this.route.data.subscribe((datas) => {
      // console.log(datas);
      this.title = datas.title;
      this.subtitle = datas.subtitle;
    });

    this.headers = [
      "Name",
      "Ca",
      "State",
      "Action"
    ];

    this.cs.collection.subscribe((datas) => {
      this.collection$.next(datas);
    });
  }

  public changeState(item: Client, event) {
    this.cs.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }

  public delete(item: Client) {
    this.cs.delete(item).subscribe((res) => {
      // traiter res de l'api;
      this.cs.collection.subscribe((datas) => {
        this.collection$.next(datas);
      });
    });
  }

  public edit(item: Client) {
    this.router.navigate(['clients', 'edit', item.id]);
  }

  public loadDetails(item: Client) {
    this.cs.firstItem$.next(item);
  }
}
