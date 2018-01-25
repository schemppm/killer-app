import { Component, OnInit } from '@angular/core';
import { KillActionService } from '../services/kill-action.service';

@Component({
  selector: 'app-killer',
  templateUrl: './killer.component.html',
  styleUrls: ['./killer.component.css']
})
export class KillerComponent implements OnInit {

  killed = false;
  killButtonText = 'Kill me!';
  killer: any = 'Jason Vorhees';
  killAction: any = { name: 'Nothing' };

  constructor(private killActionService: KillActionService) {
    killActionService.activeKillAction$.subscribe((killAction) => {
      let allowed = false;
      killAction.possibleKillers.forEach(possibleKiller => {
        if (possibleKiller.name === this.killer) {
          allowed = true;
        }
      });
      if(allowed) {
        this.killAction = killAction;
      } else {
        alert(`${this.killer} cannot kill with ${killAction.name}`);
      }
    });
  }

  ngOnInit() {
  }

  buttonClick() {
    if (this.killed === true) {
      this.killed = false;
      this.killButtonText = 'Kill me!';
    } else {
      this.killed = true;
      this.killButtonText = 'Revive me!';
    }
  }

  killerButtonClick(killername: string) {
    this.killer = killername;
    this.killAction = { name: `Nothing` };
  }

}
