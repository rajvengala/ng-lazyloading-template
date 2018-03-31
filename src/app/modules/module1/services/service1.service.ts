import {Injectable} from '@angular/core';

@Injectable()
export class Service1Service {

  constructor() {
  }

  getMessage(): string {
    return 'Message from Service1 in module1';
  }

}
