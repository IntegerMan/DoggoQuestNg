import {Word} from '../../Model/Word';
import {Component, Input, OnInit} from '@angular/core';

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
