import {Component, Input, OnInit} from '@angular/core';
import {GameRoom} from '../../Model/World/GameRoom';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.scss']
})
export class ObjectListComponent implements OnInit {

  @Input()
  Room: GameRoom;

  constructor() { }

  ngOnInit() {
  }

}
