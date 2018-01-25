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
      'imageUrl': 'http://www.horror-writers.com/wp-content/uploads/2017/02/friday-the-13th-part-iii-original-ending-jason-beheading.jpg',
      'possibleKillers': [
        { name: 'Jason Vorhees', primaryWeapon: 'Machete' },
        { name: 'Chucky', primaryWeapon: 'Kitchen Knife' },
        { name: 'Michael Myers', primaryWeapon: 'Kitchen Knife' }
      ]
    },
    {
      'id': 2,
      'name': 'The Bed trick',
      'description': 'When your victim is on a bed, hide under it and then kill him from there with a random weapon',
      'imageUrl': 'https://i.ytimg.com/vi/ohOs80pdnQw/hqdefault.jpg',
      'possibleKillers': [
        { name: 'Jason Vorhees', primaryWeapon: 'Machete' },
        { name: 'Freddy Krueger', primaryWeapon: 'Knife Hand' },
        { name: 'Chucky', primaryWeapon: 'Kitchen Knife' },
        { name: 'Michael Myers', primaryWeapon: 'Kitchen Knife' }
      ]
    },
    {
      'id': 3,
      'name': 'The Song to Death',
      'description': 'Sing a f***ing Disney Song... All night long...',
      'imageUrl': 'http://images6.fanpop.com/image/articles/237000/disney-princess_237108_2.jpg?cache=1406317067',
      'possibleKillers': [
        { name: 'Disney Princess', primaryWeapon: 'Mouth' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  KillActionChosen(id) {
    console.log(id);
  }

  KillActionToRemove(id) {
    console.log(`delete ${id}`);
    this.killActions.forEach((killAction, index) => {
      if (killAction.id === id) {
        this.killActions.splice(index, 1);
      }
    });
  }
}
