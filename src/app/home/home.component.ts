import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

currentPath: string;

  constructor(private location: Location) { }

  ngOnInit() {
    this.currentPath = this.location.path();
  }

}
