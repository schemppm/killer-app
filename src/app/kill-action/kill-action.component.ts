import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KillActionInterface } from '../interfaces/killAction.interface';
import { KillActionService } from '../services/kill-action.service';

@Component({
  selector: 'app-kill-action',
  templateUrl: './kill-action.component.html',
  styleUrls: ['./kill-action.component.css']
})
export class KillActionComponent implements OnInit {

  @Input() killAction: KillActionInterface;
  @Output() KillActionChosen = new EventEmitter<object>();
  chosenKillAction = 1;

  constructor(private killActionService: KillActionService) { }

  ngOnInit() {
  }

  chooseKillAction(killAction) {
    this.KillActionChosen.emit(killAction.id);
    this.killActionService.activeKillAction(killAction);
  }

}
