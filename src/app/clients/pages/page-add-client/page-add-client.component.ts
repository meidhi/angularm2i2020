import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientService } from '../../services/client.service';
import { Client } from 'src/app/shared/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public states = Object.values(StateClient);

  constructor(private cs: ClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'Add client';
  }
  public add(item: Client) {
    this.cs.add(item).subscribe((res) => {
      this.router.navigate(['clients']);
  });
}
}
