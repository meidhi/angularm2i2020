import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Client } from 'src/app/shared/models/client';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public states = Object.values(StateClient);
  public currentclient$: Observable<Client>;

  constructor(private cs: ClientService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.title = 'Clients :';
    this.subtitle = 'Edit client';
    this.currentclient$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = +params.get("id")
        return this.cs.GetItemById(id)
      })
    );
  }

  public update(item: Client) {
    this.cs.update(item).subscribe((res) => {
      this.router.navigate(['clients']);
    });
  }

}
