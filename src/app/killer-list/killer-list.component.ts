import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-killer-list',
  templateUrl: './killer-list.component.html',
  styleUrls: ['./killer-list.component.css']
})
export class KillerListComponent implements OnInit {

  killActions = [
    {
      'id': 1,
      'name': 'Head removement',
      'description': 'Take a knife or machete and cut off the head of your victim',
      'possibleKillers': [
        { name: 'Jason Vorhees', primaryWeapon: 'Machete' },
        { name: 'Chucky', primaryWeapon: 'Kitchen Knife' },
        { name: 'Michael Myers', primaryWeapon: 'Kitchen Knife' }
      ]
    },
    {
      'id': 1,
      'name': 'The Bed trick',
      'description': 'When your victim is on a bed, hide under it and then kill him from there with a random weapon',
      'possibleKillers': [
        { name: 'Jason Vorhees', primaryWeapon: 'Machete' },
        { name: 'Freddy Krueger', primaryWeapon: 'Knife Hand' },
        { name: 'Chucky', primaryWeapon: 'Kitchen Knife' },
        { name: 'Michael Myers', primaryWeapon: 'Kitchen Knife' }
      ]
    },
    {
      'id': 1,
      'name': 'The Song to Death',
      'description': 'Sing a f***ing Disney Song... All night long...',
      'possibleKillers': [
        { name: 'Disney Princess', primaryWeapon: 'Mouth' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
