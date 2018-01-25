import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { KillActionInterface } from '../interfaces/killAction.interface';

@Injectable()
export class KillActionService {

  private activeKillActionSource = new Subject<object>();

  constructor() { }

  activeKillAction$ = this.activeKillActionSource.asObservable();

  activeKillAction(killAction: KillActionInterface) {
    this.activeKillActionSource.next(killAction);
  }

}
