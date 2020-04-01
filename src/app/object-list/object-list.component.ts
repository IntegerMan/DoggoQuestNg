import {Component, Input, OnInit} from '@angular/core';
import {GameObject} from '../../Model/World/GameObject';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit {

  @Input()
  Objects: GameObject[];

  constructor() { }

  ngOnInit() {
  }

}
