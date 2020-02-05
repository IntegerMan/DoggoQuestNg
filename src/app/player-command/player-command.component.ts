import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-player-command',
  templateUrl: './player-command.component.html',
  styleUrls: ['./player-command.component.scss']
})
export class PlayerCommandComponent implements OnInit {

  @Input()
  public Text: string;

  constructor() { }

  ngOnInit() {
  }

}
