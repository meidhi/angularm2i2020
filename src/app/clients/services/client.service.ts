import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class ClientService {
  private pCollection: Observable<Client[]>;
  private urlApi = environment.urlApi;
  public firstItem$: BehaviorSubject<Client> = new BehaviorSubject(null);
private itemDeleted : Client ;
  constructor(private http: HttpClient) {
    this.collection = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      tap(clientsTab => {
        if(this.firstItem$.value){
          if(this.firstItem$.value === this.itemDeleted){
            this.firstItem$.next(clientsTab[0]);
          }
        }
      }
    ));
  }

  public get collection(): Observable<Client[]> {
    return this.pCollection;
  }

  public set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }

  public changeState(item: Client, state: StateClient): Observable<Client> {
    const obj = new Client({ ...item });
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${item.id}`, item);
  }

  public delete(item: Client): Observable<Client> {
    this.itemDeleted = item;
    return this.http.delete<Client>(`${this.urlApi}clients/${item.id}`);
  }

  public add(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, item);
  }

  public GetItemById(id:number) :  Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}clients/${id}`);
  }
}
