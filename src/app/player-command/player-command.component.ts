import {Component, Input, OnInit} from '@angular/core';
import { Sentence } from 'doggo-quest-logic/dist/Parsing/Sentence';

@Component({
  selector: 'app-player-command',
  templateUrl: './player-command.component.html',
  styleUrls: ['./player-command.component.scss']
})
export class PlayerCommandComponent implements OnInit {

  @Input()
  public showDebug = true;

  @Input()
  public Text: string;

  @Input()
  public Sentence: Sentence;

  constructor() { }

  ngOnInit() {
  }

}
