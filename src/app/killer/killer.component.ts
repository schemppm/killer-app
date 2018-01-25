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
  title: any = 'Welcome to Camp Crystal Lake aka "The Killer-App"';
  killAction: any;

  constructor(private killActionService: KillActionService) {
    killActionService.activeKillAction$.subscribe((killAction) => {
      console.log(killAction);
      this.killAction = killAction;
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
  }

}
