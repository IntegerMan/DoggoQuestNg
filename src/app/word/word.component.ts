import {Component, Input, OnInit} from '@angular/core';
import { Word } from 'doggo-quest-logic/dist/Parsing/Word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {

  @Input()
  public Word: Word;

  constructor() { }

  ngOnInit() {
  }

}
