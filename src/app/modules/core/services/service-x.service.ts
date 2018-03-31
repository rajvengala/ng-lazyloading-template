import {Injectable} from '@angular/core';

@Injectable()
export class ServiceXService {

  constructor() {
  }

  getMessage(): string {
    return 'Message from service in Core Module';
  }

}
