import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  id: 1;
  name: "Christophe";
  ca: 12000;
  state= StateClient.ACTIF;
  comment: string;

  constructor(obj?: Partial<Client>) {

    if (obj) {
      Object.assign(this, obj);
    }

  }

}
