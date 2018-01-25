import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { KillActionInterface } from '../interfaces/killAction.interface';

@Component({
  selector: 'app-kill-action',
  templateUrl: './kill-action.component.html',
  styleUrls: ['./kill-action.component.css']
})
export class KillActionComponent implements OnInit {

  @Input() killAction: KillActionInterface;
  @Output() KillActionChosen = new EventEmitter<object>();
  chosenKillAction = 1;

  constructor() { }

  ngOnInit() {
  }

  chooseKillAction(id) {
    this.KillActionChosen.emit(id);
  }

}
